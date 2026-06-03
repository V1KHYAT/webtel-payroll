const fs = require('fs');

let html = fs.readFileSync('Mobile/index.html', 'utf8');

// Restore status bar to absolute in home screen
html = html.replace(
    /<div class="status-bar-dummy" aria-hidden="true">\\s*<span class="status-time">9:41<\/span>\\s*<div class="status-icons">/m,
    '<div class="status-bar-dummy" aria-hidden="true" style="color: #1e293b; position: absolute; top: 0; left: 0; width: 100%; z-index: 20;">\\n                        <span class="status-time">9:41</span>\\n                        <div class="status-icons">'
);

// Restore home-fixed-header to absolute
html = html.replace(
    '<div class="fixed-base" id="home-fixed-header">',
    '<div class="fixed-base" id="home-fixed-header" style="position: absolute; top: max(env(safe-area-inset-top), 14px); left: 0; width: 100%; padding-top: 34px; pointer-events: none;">'
);
// Make header children pointer-events: auto
html = html.replace(
    '<header class="base-header" id="home-base-header">',
    '<header class="base-header" id="home-base-header" style="pointer-events: auto;">'
);

fs.writeFileSync('Mobile/index.html', html);
console.log('HTML restored to absolute positioning for home header.');

let css = fs.readFileSync('Mobile/css/styles.css', 'utf8');

// Restore absolute positioning to home-scroll-content and restore home-content-container background
const restoredCSS = `
.home-scroll-content {
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
    width: 100% !important;
    bottom: 0 !important;
    padding: 0 !important;
    z-index: 5 !important;
}
.home-content-container {
    background: linear-gradient(180deg, #ffffff 0%, #f9fafb 100%) !important;
    box-shadow: 0 -8px 24px rgba(0,0,0,0.05) !important;
    padding: 24px 16px 280px 16px !important;
    border-radius: 28px 28px 0 0 !important;
    margin-top: 15vh !important;
    min-height: 100vh !important;
}
`;

if (!css.includes('position: absolute !important;')) {
    css += restoredCSS;
    fs.writeFileSync('Mobile/css/styles.css', css);
    console.log('CSS restored for absolute scrolling and white container.');
}
