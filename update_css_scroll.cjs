const fs = require('fs');

let css = fs.readFileSync('Mobile/css/styles.css', 'utf8');

const scrollCss = `

.home-fixed-header {
    transition: background 0.3s ease, border 0.3s ease, box-shadow 0.3s ease;
}

.home-fixed-header.scrolled-header-container {
    background: #ffffff;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.03);
    border-bottom: 1px solid var(--color-border);
}

.home-fixed-header.scrolled-header-container .base-header {
    padding-top: 8px;
    padding-bottom: 8px;
}

/* Ensure dummy status bar is positioned at the very top relative to the viewport if we remove the top margin */
`;

// Wait, the status bar dummy is usually at top 0, but `.home-fixed-header` has `top: env(...)`.
// So `.home-fixed-header` actually starts 44px down from the top on iPhone!
// If it starts 44px down, the background will only start 44px down, leaving a gap!
// We should change .home-fixed-header top to 0 and apply the safe area inset padding instead.

css = css.replace(
    '.home-fixed-header {\\n    position: absolute;\\n    top: env(safe-area-inset-top, 44px);\\n    left: 0;\\n    width: 100%;\\n    z-index: 10;\\n    padding: 0 16px;\\n}',
    '.home-fixed-header {\\n    position: absolute;\\n    top: 0;\\n    left: 0;\\n    width: 100%;\\n    z-index: 10;\\n    padding: 0 16px;\\n    transition: background 0.3s ease, border 0.3s ease, box-shadow 0.3s ease;\\n}'
);

if (!css.includes('scrolled-header-container')) {
    css += scrollCss;
    fs.writeFileSync('Mobile/css/styles.css', css);
    console.log('CSS updated for scroll state.');
} else {
    console.log('CSS already has scroll state.');
}
