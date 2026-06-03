const fs = require('fs');
let css = fs.readFileSync('Mobile/css/styles.css', 'utf8');

const newCSS = `
/* Update Header Icons to Accent Color */
.base-header .ghost-btn iconify-icon {
    color: var(--color-accent) !important;
}
.circular-btn iconify-icon {
    color: var(--color-accent) !important;
}
/* Update Active Tab color */
.tab-btn.active {
    background: var(--color-accent) !important;
    color: #1e293b !important;
}
`;

if (!css.includes('Update Header Icons to Accent Color')) {
    css += newCSS;
    fs.writeFileSync('Mobile/css/styles.css', css);
    console.log('CSS updated for accents.');
}
