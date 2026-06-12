/* --- ML Engineer Portfolio Design System --- */
:root {
    /* Color Palette */
    --bg-color: #0B0E14;
    --panel-color: #11151F;
    --text-primary: #E8E6E1;
    --text-secondary: #8B93A7;
    --accent-cyan: #5EE6D0;
    --accent-violet: #8B6FF0;
    
    /* Gradients */
    --gradient-accent: linear-gradient(135deg, var(--accent-cyan) 0%, var(--accent-violet) 100%);
    --gradient-glow: rgba(94, 230, 208, 0.15);
    
    /* Typography */
    --font-display: 'Space Grotesk', sans-serif;
    --font-body: 'Inter', sans-serif;
    --font-mono: 'JetBrains Mono', monospace;
    
    /* Borders & Radius */
    --border-color: rgba(139, 147, 167, 0.12);
    --border-hover: rgba(94, 230, 208, 0.35);
    --card-radius: 12px;
    --pill-radius: 50px;
    
    /* Transitions */
    --transition-fast: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    --transition-normal: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
/* --- Base & Reset --- */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html {
    scroll-behavior: smooth;
    background-color: var(--bg-color);
    color: var(--text-primary);
    font-family: var(--font-body);
    font-size: 16px;
    line-height: 1.6;
}
body {
    min-height: 100vh;
    overflow-x: hidden;
    position: relative;
}
/* --- 3D Background Canvas --- */
#canvas-3d {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -2;
    pointer-events: none;
    background-color: var(--bg-color);
}
/* --- Typography Utilities --- */
h1, h2, h3, h4 {
    font-family: var(--font-display);
    font-weight: 700;
    letter-spacing: -0.02em;
}
.gradient-text {
    background: var(--gradient-accent);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    display: inline-block;
}
.eyebrow {
    font-family: var(--font-mono);
    color: var(--accent-cyan);
    font-size: 0.9rem;
    letter-spacing: 0.05em;
    margin-bottom: 0.8rem;
    text-transform: uppercase;
}
/* --- Interactive HUD Overlay --- */
.hud-container {
    position: fixed;
    top: 80px;
    left: 0;
    width: 100%;
    padding: 0 4%;
    display: flex;
    justify-content: space-between;
    pointer-events: none;
    z-index: 5;
    font-family: var(--font-mono);
    font-size: 0.75rem;
    opacity: 0.65;
}
.hud-panel {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    background: rgba(17, 21, 31, 0.4);
    padding: 0.75rem 1rem;
    border-radius: 8px;
    border: 1px solid var(--border-color);
    backdrop-filter: blur(8px);
}
.hud-item {
    display: flex;
    gap: 0.75rem;
    justify-content: space-between;
}
.hud-label {
    color: var(--text-secondary);
}
.hud-value {
    color: var(--text-primary);
    font-weight: 500;
}
.status-active {
    color: var(--accent-cyan);
    text-shadow: 0 0 8px rgba(94, 230, 208, 0.4);
}
.text-glow {
    color: var(--accent-violet);
}
/* --- Header / Navigation --- */
.main-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 70px;
    background: rgba(11, 14, 20, 0.75);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--border-color);
    z-index: 100;
}
.nav-container {
    max-width: 1200px;
    height: 100%;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.nav-logo {
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.25rem;
    font-family: var(--font-mono);
    font-weight: 700;
    font-size: 1.1rem;
    color: var(--text-primary);
}
.logo-accent {
    color: var(--accent-cyan);
}
.nav-links {
    display: flex;
    list-style: none;
    gap: 2rem;
}
.nav-link {
    text-decoration: none;
    font-family: var(--font-mono);
    font-size: 0.85rem;
    color: var(--text-secondary);
    transition: var(--transition-fast);
}
.nav-link:hover {
    color: var(--accent-cyan);
}
/* --- Button Styling --- */
.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.8rem 1.6rem;
    font-family: var(--font-mono);
    font-size: 0.85rem;
    font-weight: 500;
    text-decoration: none;
    border-radius: var(--pill-radius);
    transition: var(--transition-normal);
    cursor: pointer;
}
.btn-primary {
    background: var(--gradient-accent);
    color: var(--bg-color);
    font-weight: 700;
    border: none;
}
.btn-primary:hover {
    box-shadow: 0 0 25px rgba(94, 230, 208, 0.4);
    transform: translateY(-2px);
}
.btn-secondary {
    background: transparent;
    color: var(--text-primary);
    border: 1px solid var(--border-color);
}
.btn-secondary:hover {
    border-color: var(--accent-cyan);
    background: rgba(94, 230, 208, 0.03);
    transform: translateY(-2px);
}
/* --- Page Layout & Content Wrapper --- */
.content-wrapper {
    position: relative;
    z-index: 1;
}
.section-padding {
    padding: 8rem 2rem;
}
.section-container {
    max-width: 1200px;
    margin: 0 auto;
}
.section-header {
    display: flex;
    align-items: baseline;
    gap: 1rem;
    margin-bottom: 4rem;
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 1.5rem;
}
.section-number {
    font-family: var(--font-mono);
    color: var(--text-secondary);
    font-size: 1.1rem;
}
.section-title {
    font-size: 2.25rem;
    text-transform: capitalize;
}
/* --- Hero Section --- */
.hero-section {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0 10%;
    position: relative;
}
.hero-content {
    max-width: 750px;
}
.hero-title {
    font-size: 3.8rem;
    line-height: 1.15;
    margin-bottom: 1.5rem;
}
.hero-subtitle {
    font-size: 1.15rem;
    color: var(--text-secondary);
    max-width: 600px;
    margin-bottom: 2.5rem;
}
.hero-cta-group {
    display: flex;
    gap: 1.5rem;
}
.hero-scroll-indicator {
    position: absolute;
    bottom: 40px;
    left: 10%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
}
.indicator-text {
    font-family: var(--font-mono);
    font-size: 0.7rem;
    color: var(--text-secondary);
    letter-spacing: 0.1em;
}
.indicator-arrow {
    width: 1px;
    height: 40px;
    background: var(--text-secondary);
    position: relative;
    overflow: hidden;
}
.indicator-arrow::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--accent-cyan);
    animation: scroll-glow 2s infinite ease-in-out;
}
@keyframes scroll-glow {
    0% { transform: translateY(-100%); }
    80% { transform: translateY(100%); }
    100% { transform: translateY(100%); }
}
/* --- About Section --- */
.about-grid {
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: 4.5rem;
    align-items: start;
}
.bio-lead {
    font-size: 1.25rem;
    color: var(--text-primary);
    margin-bottom: 3rem;
    font-family: var(--font-display);
    line-height: 1.5;
}
.bio-details {
    display: flex;
    flex-direction: column;
    gap: 2.2rem;
}
.bio-block-title {
    font-size: 1rem;
    text-transform: uppercase;
    font-family: var(--font-mono);
    color: var(--accent-cyan);
    margin-bottom: 0.5rem;
}
.bio-block p {
    color: var(--text-secondary);
    font-size: 0.95rem;
}
/* Stats Card Layout */
.stats-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
}
.stat-card {
    background: var(--panel-color);
    border: 1px solid var(--border-color);
    border-radius: var(--card-radius);
    padding: 2rem;
    transition: var(--transition-normal);
    position: relative;
    overflow: hidden;
}
.stat-card:hover {
    border-color: var(--border-hover);
    box-shadow: 0 0 25px var(--gradient-glow);
    transform: translateY(-3px);
}
.stat-value {
    font-family: var(--font-display);
    font-size: 3rem;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0.5rem;
}
.stat-label {
    font-size: 0.9rem;
    color: var(--text-secondary);
    font-weight: 500;
}
.stat-meta {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    color: rgba(139, 147, 167, 0.45);
    margin-top: 1rem;
}
/* --- Experience (Epoch Timeline) --- */
.timeline-log {
    position: relative;
    padding-left: 2.5rem;
}
.timeline-log::before {
    content: '';
    position: absolute;
    top: 0;
    left: 6px;
    width: 2px;
    height: 100%;
    background: var(--border-color);
}
.timeline-epoch {
    position: relative;
    margin-bottom: 4rem;
}
.timeline-epoch:last-child {
    margin-bottom: 0;
}
.epoch-marker {
    position: absolute;
    left: -2.5rem;
    top: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.epoch-marker::before {
    content: '';
    position: absolute;
    left: 2px;
    top: 6px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--accent-cyan);
    box-shadow: 0 0 8px var(--accent-cyan);
}
.epoch-label {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    color: var(--accent-cyan);
    transform: rotate(-90deg) translate(-28px, -18px);
    transform-origin: left top;
    white-space: nowrap;
    letter-spacing: 0.05em;
    opacity: 0.85;
}
.epoch-date {
    font-family: var(--font-mono);
    font-size: 0.8rem;
    color: var(--text-secondary);
    margin-left: 1.5rem;
    white-space: nowrap;
}
.epoch-card {
    background: var(--panel-color);
    border: 1px solid var(--border-color);
    border-radius: var(--card-radius);
    padding: 2.5rem;
    margin-left: 1.5rem;
    transition: var(--transition-normal);
}
.epoch-card:hover {
    border-color: var(--border-hover);
    box-shadow: 0 0 25px var(--gradient-glow);
    transform: translateY(-3px);
}
.epoch-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.4rem;
}
.epoch-role {
    font-size: 1.4rem;
    color: var(--text-primary);
}
.epoch-status {
    font-family: var(--font-mono);
    font-size: 0.8rem;
    padding: 0.25rem 0.75rem;
    border-radius: 4px;
    font-weight: 500;
}
.status-loss-decrease {
    background: rgba(94, 230, 208, 0.08);
    border: 1px solid rgba(94, 230, 208, 0.25);
    color: var(--accent-cyan);
}
.status-init {
    background: rgba(139, 111, 240, 0.08);
    border: 1px solid rgba(139, 111, 240, 0.25);
    color: var(--accent-violet);
}
.epoch-company {
    font-family: var(--font-mono);
    font-size: 0.85rem;
    color: var(--text-secondary);
    margin-bottom: 1.5rem;
}
.epoch-description {
    color: var(--text-secondary);
    font-size: 0.95rem;
    margin-bottom: 2rem;
    line-height: 1.7;
}
.epoch-tags, .project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
}
.tech-tag {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    color: var(--text-secondary);
    background: rgba(139, 147, 167, 0.06);
    border: 1px solid rgba(139, 147, 167, 0.1);
    padding: 0.2rem 0.6rem;
    border-radius: 4px;
}
/* --- Projects Section --- */
.projects-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
}
.project-card {
    background: var(--panel-color);
    border: 1px solid var(--border-color);
    border-radius: var(--card-radius);
    padding: 2.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: var(--transition-normal);
}
.project-card:hover {
    border-color: var(--border-hover);
    box-shadow: 0 0 25px var(--gradient-glow);
    transform: translateY(-4px);
}
.project-card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.8rem;
}
.project-id {
    font-family: var(--font-mono);
    color: var(--text-secondary);
    font-size: 0.8rem;
}
.project-metric {
    font-family: var(--font-mono);
    font-weight: 700;
    font-size: 0.9rem;
    color: var(--accent-cyan);
    border-bottom: 1px solid var(--accent-cyan);
    padding-bottom: 2px;
}
.project-name {
    font-size: 1.5rem;
    line-height: 1.3;
    margin-bottom: 1rem;
    color: var(--text-primary);
}
.project-desc {
    color: var(--text-secondary);
    font-size: 0.95rem;
    margin-bottom: 2.2rem;
    line-height: 1.6;
}
/* --- Skills (Model Layers) --- */
.skills-layers {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}
.skills-layer-row {
    background: var(--panel-color);
    border: 1px solid var(--border-color);
    border-radius: var(--card-radius);
    padding: 2rem;
    display: grid;
    grid-template-columns: 320px 1fr;
    gap: 2rem;
    align-items: center;
    transition: var(--transition-normal);
}
.skills-layer-row:hover {
    border-color: var(--border-hover);
    box-shadow: 0 0 25px var(--gradient-glow);
}
.layer-header {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
}
.layer-title {
    font-family: var(--font-mono);
    font-size: 0.9rem;
    font-weight: 700;
    color: var(--text-primary);
}
.layer-activation {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    color: var(--accent-violet);
}
.layer-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
}
.skill-chip {
    font-family: var(--font-mono);
    font-size: 0.8rem;
    padding: 0.4rem 1rem;
    border-radius: var(--pill-radius);
    background: rgba(139, 147, 167, 0.05);
    border: 1px solid rgba(139, 147, 167, 0.15);
    color: var(--text-secondary);
    transition: var(--transition-fast);
}
.skill-chip:hover {
    color: var(--accent-cyan);
    border-color: var(--accent-cyan);
    background: rgba(94, 230, 208, 0.05);
}
/* --- Contact Section --- */
.contact-card {
    background: radial-gradient(circle at top right, rgba(139, 111, 240, 0.06), transparent 60%), var(--panel-color);
    border: 1px solid var(--border-color);
    border-radius: var(--card-radius);
    padding: 5rem 3rem;
    text-align: center;
    position: relative;
    overflow: hidden;
}
.contact-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: var(--gradient-accent);
}
.contact-eyebrow {
    font-family: var(--font-mono);
    color: var(--text-secondary);
    font-size: 0.85rem;
    margin-bottom: 1rem;
    text-transform: uppercase;
}
.contact-title {
    font-size: 3rem;
    margin-bottom: 1rem;
    font-weight: 700;
}
.contact-subtitle {
    color: var(--text-secondary);
    max-width: 550px;
    margin: 0 auto 3rem auto;
    font-size: 1.05rem;
}
.contact-links {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1.5rem;
}
.contact-pill {
    display: inline-flex;
    align-items: center;
    padding: 0.8rem 1.8rem;
    border-radius: var(--pill-radius);
    background: rgba(13, 17, 26, 0.6);
    border: 1px solid var(--border-color);
    color: var(--text-primary);
    text-decoration: none;
    font-family: var(--font-mono);
    font-size: 0.85rem;
    transition: var(--transition-normal);
}
.pill-prefix {
    color: var(--accent-cyan);
    margin-right: 0.5rem;
}
.contact-pill:hover {
    border-color: var(--accent-cyan);
    box-shadow: 0 0 20px rgba(94, 230, 208, 0.25);
    transform: translateY(-3px);
}
/* --- Footer --- */
.main-footer {
    border-top: 1px solid var(--border-color);
    padding: 2.5rem 2rem;
    margin-top: 4rem;
}
.footer-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: var(--font-mono);
    font-size: 0.75rem;
    color: var(--text-secondary);
}
/* --- Keyboard Accessibility outline & focus states --- */
a:focus-visible, button:focus-visible, .contact-pill:focus-visible {
    outline: 2px solid var(--accent-cyan);
    outline-offset: 4px;
}
/* --- Responsive Layout Adjustments --- */
@media (max-width: 1024px) {
    .hud-container {
        display: none; /* Hide HUD overlays on smaller screens to avoid blocking content */
    }
    
    .about-grid {
        grid-template-columns: 1fr;
        gap: 3.5rem;
    }
    
    .hero-title {
        font-size: 3rem;
    }
}
@media (max-width: 768px) {
    .section-padding {
        padding: 5rem 1.5rem;
    }
    
    .main-header {
        height: 60px;
    }
    
    .nav-links {
        display: none; /* Can expand to simple toggle, but keeping minimal for monospace card style */
    }
    
    .hero-section {
        padding: 0 1.5rem;
    }
    
    .hero-title {
        font-size: 2.5rem;
    }
    
    .hero-cta-group {
        flex-direction: column;
        width: 100%;
    }
    
    .btn {
        width: 100%;
    }
    
    .timeline-log {
        padding-left: 1rem;
    }
    
    .timeline-log::before {
        left: 0;
    }
    
    .epoch-marker {
        position: relative;
        left: 0;
        top: 0;
        margin-bottom: 1rem;
        flex-direction: row;
        align-items: center;
        gap: 1rem;
    }
    
    .epoch-marker::before {
        left: -16px;
        top: 4px;
    }
    
    .epoch-label {
        transform: none;
        position: static;
    }
    
    .epoch-date {
        margin-left: 0;
    }
    
    .epoch-card {
        margin-left: 0;
        padding: 1.5rem;
    }
    
    .epoch-header {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
    }
    
    .projects-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
    
    .project-card {
        padding: 1.75rem;
    }
    
    .skills-layer-row {
        grid-template-columns: 1fr;
        gap: 1.25rem;
        padding: 1.5rem;
    }
    
    .contact-card {
        padding: 3rem 1.5rem;
    }
    
    .contact-links {
        flex-direction: column;
    }
    
    .contact-pill {
        width: 100%;
        justify-content: center;
    }
    
    .footer-container {
        flex-direction: column;
        gap: 1rem;
        text-align: center;
    }
}
/* --- Respect Reduced Motion Preference --- */
@media (prefers-reduced-motion: reduce) {
    html {
        scroll-behavior: auto;
    }
    
    * {
        animation-duration: 0.001ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.001ms !important;
        scroll-behavior: auto !important;
    }
    
    .indicator-arrow::after {
        animation: none;
    }
}
