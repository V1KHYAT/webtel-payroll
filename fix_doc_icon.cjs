const fs = require('fs');

let css = fs.readFileSync('Mobile/css/styles.css', 'utf8');

// 1. Fix .doc-icon icon scaling. Currently the icon inherits 40px font-size and touches the borders.
if (!css.includes('.doc-icon iconify-icon')) {
    css += `\n.doc-icon iconify-icon { font-size: 24px; color: var(--color-accent); }\n`;
}

// 2. Add some margin below the new prof-section documents
// Actually, .prof-section already has margin-bottom: 8px. That's fine.

fs.writeFileSync('Mobile/css/styles.css', css);
console.log('Fixed doc icon scaling');
