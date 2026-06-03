const fs = require('fs');
let css = fs.readFileSync('Mobile/css/styles.css', 'utf8');

css = css.replace(
    /\.attendance-summary\s*\{[\s\S]*?border-bottom:\s*1px\s*solid\s*var\(--color-border\);\s*\}/,
    `.attendance-summary {
    width: 100%;
    display: flex;
    align-items: center; /* Vertically center aligned */
    justify-content: space-between;
    margin-bottom: var(--space-5);
    padding-bottom: 12px;
}`
);

fs.writeFileSync('Mobile/css/styles.css', css);
console.log('Fixed attendance summary layout.');
