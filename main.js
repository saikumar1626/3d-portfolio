import * as THREE from 'three';
// --- Global variables ---
let scene, camera, renderer;
let pointsGeometry, pointsMaterial, pointCloud;
let linesGeometry, linesMaterial, lineSegments;
const PARTICLE_COUNT = 250;
const MAX_CONNECTIONS = 350;
const CONNECTION_DIST = 5.8;
// Parallax target variables
let mouseX = 0;
let mouseY = 0;
let targetCamX = 0;
let targetCamY = 0;
// Particle metadata arrays
const particles = [];
let positionsArray;
// HUD Elements
const hudEpoch = document.getElementById('hud-epoch');
const hudLoss = document.getElementById('hud-loss');
const hudParallax = document.getElementById('hud-parallax');
// Simulated Training states
let currentEpoch = 42;
const maxEpoch = 100;
let baseLoss = 0.0842;
let frameCounter = 0;
// Check reduced motion preference
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
// --- Initialize Three.js ---
function init() {
    const canvas = document.getElementById('canvas-3d');
    
    // Scene
    scene = new THREE.Scene();
    
    // Camera
    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.z = 22;
    camera.position.y = 0;
    camera.position.x = 0;
    
    // Renderer
    renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        antialias: true,
        alpha: false
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x0B0E14, 1);
    
    // Build Latent Space Particles
    createPointCloud();
    
    // Build Sparse Connection Lines
    createConnectionLines();
    
    // Events
    window.addEventListener('resize', onWindowResize);
    if (!prefersReducedMotion) {
        window.addEventListener('mousemove', onMouseMove);
    }
    
    // Start loop
    animate();
}
// --- Create circular glowing particle texture ---
function createParticleTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    
    // Radial gradient glow
    const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1.0)');
    gradient.addColorStop(0.15, 'rgba(94, 230, 208, 0.9)');  // Cyan core
    gradient.addColorStop(0.45, 'rgba(139, 111, 240, 0.45)'); // Violet secondary glow
    gradient.addColorStop(1.0, 'rgba(0, 0, 0, 0.0)');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 32, 32);
    
    const texture = new THREE.Texture(canvas);
    texture.needsUpdate = true;
    return texture;
}
// --- Generate 3D point cloud representing embedding vectors ---
function createPointCloud() {
    pointsGeometry = new THREE.BufferGeometry();
    positionsArray = new Float32Array(PARTICLE_COUNT * 3);
    
    for (let i = 0; i < PARTICLE_COUNT; i++) {
        // Distribute within a flattened box to fit widescreen displays beautifully
        const x = (Math.random() - 0.5) * 38;
        const y = (Math.random() - 0.5) * 20;
        const z = (Math.random() - 0.5) * 22;
        
        positionsArray[i * 3] = x;
        positionsArray[i * 3 + 1] = y;
        positionsArray[i * 3 + 2] = z;
        
        // Save metadata for wave motions
        particles.push({
            x: x,
            y: y,
            z: z,
            // Random parameters to ensure points wave asynchronously
            speedX: 0.2 + Math.random() * 0.4,
            speedY: 0.3 + Math.random() * 0.5,
            speedZ: 0.1 + Math.random() * 0.3,
            ampX: 0.3 + Math.random() * 0.8,
            ampY: 0.4 + Math.random() * 1.0,
            ampZ: 0.2 + Math.random() * 0.6,
            phaseOffset: Math.random() * Math.PI * 2
        });
    }
    
    pointsGeometry.setAttribute('position', new THREE.BufferAttribute(positionsArray, 3));
    
    pointsMaterial = new THREE.PointsMaterial({
        size: 0.85,
        map: createParticleTexture(),
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false
    });
    
    pointCloud = new THREE.Points(pointsGeometry, pointsMaterial);
    scene.add(pointCloud);
}
// --- Setup empty LineSegments for dynamic connections ---
function createConnectionLines() {
    linesGeometry = new THREE.BufferGeometry();
    
    // Pre-allocate buffer sizes
    // Each line segment has 2 points. Each point has 3 coordinates (positions) and 3 colors (RGB)
    const positions = new Float32Array(MAX_CONNECTIONS * 2 * 3);
    const colors = new Float32Array(MAX_CONNECTIONS * 2 * 3);
    
    linesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    linesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    
    linesMaterial = new THREE.LineBasicMaterial({
        vertexColors: true,
        transparent: true,
        blending: THREE.AdditiveBlending,
        opacity: 0.65,
        depthWrite: false
    });
    
    lineSegments = new THREE.LineSegments(linesGeometry, linesMaterial);
    scene.add(lineSegments);
}
// --- Mouse Movement Handler for Camera Parallax ---
function onMouseMove(event) {
    // Normalize coordinates around center ([-1, 1])
    mouseX = (event.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
    mouseY = (event.clientY - window.innerHeight / 2) / (window.innerHeight / 2);
}
// --- Window Resize handler ---
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}
// --- Dynamic line builder based on distance thresholds ---
function updateConnections() {
    const linePositions = lineSegments.geometry.attributes.position.array;
    const lineColors = lineSegments.geometry.attributes.color.array;
    
    let connectionCount = 0;
    
    // Cycle particles and find local neighbors
    for (let i = 0; i < PARTICLE_COUNT; i++) {
        const ax = positionsArray[i * 3];
        const ay = positionsArray[i * 3 + 1];
        const az = positionsArray[i * 3 + 2];
        
        for (let j = i + 1; j < PARTICLE_COUNT; j++) {
            const bx = positionsArray[j * 3];
            const by = positionsArray[j * 3 + 1];
            const bz = positionsArray[j * 3 + 2];
            
            const dx = ax - bx;
            const dy = ay - by;
            const dz = az - bz;
            const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
            
            if (dist < CONNECTION_DIST) {
                const index = connectionCount * 2 * 3;
                
                // Add points positions
                linePositions[index] = ax;
                linePositions[index + 1] = ay;
                linePositions[index + 2] = az;
                
                linePositions[index + 3] = bx;
                linePositions[index + 4] = by;
                linePositions[index + 5] = bz;
                
                // Fade line color based on proximity (closer = brighter)
                const alphaRatio = 1.0 - (dist / CONNECTION_DIST);
                
                // Colors blending: Cyan (#5EE6D0 => 0.37, 0.90, 0.81) and Violet (#8B6FF0 => 0.54, 0.43, 0.94)
                // We color weight segments based on indexes
                const r1 = i % 2 === 0 ? 0.37 : 0.54;
                const g1 = i % 2 === 0 ? 0.90 : 0.43;
                const b1 = i % 2 === 0 ? 0.81 : 0.94;
                
                const r2 = j % 2 === 0 ? 0.37 : 0.54;
                const g2 = j % 2 === 0 ? 0.90 : 0.43;
                const b2 = j % 2 === 0 ? 0.81 : 0.94;
                
                // Apply alpha fade directly to color intensity since LineBasicMaterial transparent blending is additive
                lineColors[index] = r1 * alphaRatio * 0.4;
                lineColors[index + 1] = g1 * alphaRatio * 0.4;
                lineColors[index + 2] = b1 * alphaRatio * 0.4;
                
                lineColors[index + 3] = r2 * alphaRatio * 0.4;
                lineColors[index + 4] = g2 * alphaRatio * 0.4;
                lineColors[index + 5] = b2 * alphaRatio * 0.4;
                
                connectionCount++;
                if (connectionCount >= MAX_CONNECTIONS) break;
            }
        }
        if (connectionCount >= MAX_CONNECTIONS) break;
    }
    
    // Notify WebGL that attributes changed
    lineSegments.geometry.attributes.position.needsUpdate = true;
    lineSegments.geometry.attributes.color.needsUpdate = true;
    lineSegments.geometry.setDrawRange(0, connectionCount * 2);
}
// --- Main Render & Update loop ---
const clock = new THREE.Clock();
function animate() {
    requestAnimationFrame(animate);
    
    const time = clock.getElapsedTime();
    
    // Wave motion on particles
    if (!prefersReducedMotion) {
        for (let i = 0; i < PARTICLE_COUNT; i++) {
            const meta = particles[i];
            
            // Apply wave offset mathematically (activations pulsing during training)
            positionsArray[i * 3] = meta.x + Math.sin(time * meta.speedX + meta.phaseOffset) * meta.ampX;
            positionsArray[i * 3 + 1] = meta.y + Math.cos(time * meta.speedY + meta.phaseOffset) * meta.ampY;
            positionsArray[i * 3 + 2] = meta.z + Math.sin(time * meta.speedZ + meta.phaseOffset) * meta.ampZ;
        }
        pointCloud.geometry.attributes.position.needsUpdate = true;
        
        // Slowly rotate whole cloud
        pointCloud.rotation.y = time * 0.02;
        pointCloud.rotation.x = time * 0.01;
        
        lineSegments.rotation.y = time * 0.02;
        lineSegments.rotation.x = time * 0.01;
    }
    
    // Recalculate sparse connections dynamically
    updateConnections();
    
    // Camera Parallax movement (ADAM optimization drift style)
    if (!prefersReducedMotion) {
        // Map normalized mouse vectors to camera coordinate offsets
        targetCamX = mouseX * 8;
        targetCamY = -mouseY * 6;
        
        // Lerp camera coordinate changes smoothly
        camera.position.x += (targetCamX - camera.position.x) * 0.05;
        camera.position.y += (targetCamY - camera.position.y) * 0.05;
        camera.lookAt(scene.position);
        
        // Update HUD coordinates overlay
        if (hudParallax) {
            hudParallax.textContent = `X: ${camera.position.x.toFixed(3)}, Y: ${camera.position.y.toFixed(3)}`;
        }
    }
    
    // Update Simulated MLOps HUD Epochs
    frameCounter++;
    if (frameCounter % 150 === 0) { // Increment epoch roughly every 2.5 seconds
        currentEpoch++;
        if (currentEpoch > maxEpoch) {
            currentEpoch = 1;
        }
        
        // Exponential decay model mimicking training loss converging
        baseLoss = Math.max(0.0125, 1.2 / (currentEpoch * 0.2 + 2) + Math.random() * 0.005);
        
        if (hudEpoch) {
            hudEpoch.textContent = `${currentEpoch.toString().padStart(3, '0')} / ${maxEpoch}`;
        }
        if (hudLoss) {
            hudLoss.textContent = `${baseLoss.toFixed(4)} ↓`;
        }
    }
    
    renderer.render(scene, camera);
}
// --- Dynamic UI Events ---
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for nav anchor tags
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            if (targetId === '#') return;
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    // Simulated action trigger for bash script download
    const resumeBtn = document.getElementById('resume-btn');
    if (resumeBtn) {
        resumeBtn.addEventListener('click', e => {
            e.preventDefault();
            alert('Initializing download: get_resume.sh ... [OK]\nRunning package parser... [Weights verified]\nResume fetched successfully in PDF format.');
        });
    }
});
// Run Init
init();
