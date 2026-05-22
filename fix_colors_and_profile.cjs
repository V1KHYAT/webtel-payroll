const fs = require('fs');

let css = fs.readFileSync('Mobile/css/styles.css', 'utf8');

// Update color system
css = css.replace(/--color-bg: #E2E5EB;/, '--color-bg: #fefce8; /* Yellow 50 */');
css = css.replace(/--color-canvas: #ffffff;/, '--color-canvas: #fefce8; /* Light Yellow Canvas */');
css = css.replace(/--color-surface: #ffffff;/, '--color-surface: #fffdf0; /* Ultra Light Yellow Surface */');
css = css.replace(/--color-border: #e4e4e7;/, '--color-border: #fef08a; /* Yellow 200 Border */');

// Profile Hero Card background
css = css.replace(/background:\s*linear-gradient\(135deg,\s*var\(--color-accent\)\s*0%,\s*#b45309\s*100%\);/g, 
    'background: linear-gradient(135deg, #fef08a 0%, #fde047 100%); /* Light Yellow Gradient */');

// Profile Hero Card text (needs to be dark now because background is light)
css = css.replace(/\.prof-hero-name \{\s*font-size:\s*16px;\s*font-weight:\s*700;\s*color:\s*white;\s*\}/,
    '.prof-hero-name { font-size: 16px; font-weight: 700; color: var(--color-text); }');
css = css.replace(/\.prof-hero-role \{\s*font-size:\s*var\(--text-xs\);\s*font-weight:\s*500;\s*color:\s*rgba\(255,255,255,0\.8\);\s*\}/,
    '.prof-hero-role { font-size: var(--text-xs); font-weight: 500; color: var(--color-text-secondary); }');
css = css.replace(/\.prof-hero-code \{\s*font-size:\s*10px;\s*font-weight:\s*500;\s*color:\s*rgba\(255,255,255,0\.55\);\s*letter-spacing:\s*0\.04em;\s*\}/,
    '.prof-hero-code { font-size: 10px; font-weight: 600; color: var(--color-text-tertiary); letter-spacing: 0.04em; }');
    
// Avatar in hero card (currently has white border, make it match light theme)
css = css.replace(/\.prof-hero-avatar \{\s*width:\s*52px;\s*height:\s*52px;\s*border-radius:\s*50%;\s*background:\s*rgba\(255,255,255,0\.2\);\s*border:\s*2px solid rgba\(255,255,255,0\.3\);\s*color:\s*white;/,
    '.prof-hero-avatar { width: 52px; height: 52px; border-radius: 50%; background: #ffffff; border: 2px solid #fef08a; color: var(--color-accent); box-shadow: 0 2px 8px rgba(234, 179, 8, 0.15);');

// Add prof-hero-watermark CSS
if (!css.includes('.prof-hero-watermark')) {
    css += `
.prof-hero-watermark {
    position: absolute;
    right: -10px; bottom: -20px;
    font-size: 120px; font-weight: 900;
    color: rgba(234, 179, 8, 0.15);
    line-height: 1;
    pointer-events: none;
    user-select: none;
    z-index: 0;
}
.prof-hero-card { position: relative; overflow: hidden; }
.prof-hero-info, .prof-hero-avatar { z-index: 1; position: relative; }
`;
}

// Reduce status bar clutter/opacity
// Wait, user says "the status bar is too prominent now, reduce clutter and opacity a little"
// Let's change .status-bar-dummy color to something softer.
css = css.replace(/\.status-time \{\s*font-variant-numeric:\s*tabular-nums;\s*color:\s*#000;\s*\}/,
    '.status-time { font-variant-numeric: tabular-nums; color: rgba(0,0,0,0.6); font-size: 13px; font-weight: 600; }');
css = css.replace(/\.status-icons iconify-icon \{\s*font-size:\s*18px;\s*color:\s*#000;\s*\}/,
    '.status-icons iconify-icon { font-size: 16px; color: rgba(0,0,0,0.6); }');

fs.writeFileSync('Mobile/css/styles.css', css);
console.log('Fixed color system, profile card, and status bar CSS');
