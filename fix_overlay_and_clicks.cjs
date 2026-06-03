const fs = require('fs');

let css = fs.readFileSync('Mobile/css/styles.css', 'utf8');

// 1. Change background to transparent on app-header-wrapper
css = css.replace(/background: #f9fafb !important; \/\* Solid masking background \*\//, 'background: transparent !important; /* Removed gray overlay */');

// 2. Enforce pointer-events on tabs to fix switching issue
const newCSS = `
/* FORCE CLICKABILITY FOR TABS */
.tabs-container {
    pointer-events: auto !important;
    position: relative;
    z-index: 100;
}
.tab-btn {
    pointer-events: auto !important;
    z-index: 100;
}
`;

css += '\\n' + newCSS;
fs.writeFileSync('Mobile/css/styles.css', css);

let html = fs.readFileSync('Mobile/index.html', 'utf8');
html = html.replace(/v=32/g, 'v=33');
fs.writeFileSync('Mobile/index.html', html);

console.log("Applied transparency and enforced pointer events!");
