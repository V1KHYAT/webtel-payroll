const fs = require('fs');
let css = fs.readFileSync('Mobile/css/styles.css', 'utf8');

// Fix scrolling by increasing bottom padding on the container and the scroll area
css = css.replace(
    'padding: 24px 16px 80px 16px;',
    'padding: 24px 16px 140px 16px;'
);

css = css.replace(
    /margin: 12px 0 20px 0;/g,
    'margin: 4px 0 12px 0;'
);

// Add the accent color to the circular buttons in the home header
css = css.replace(
    '.circular-btn {\\n    background: #ffffff !important;\\n    border-radius: 50% !important;\\n    width: 44px;\\n    height: 44px;\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    box-shadow: 0 4px 12px rgba(0,0,0,0.08);\\n}',
    '.circular-btn {\\n    background: #ffffff !important;\\n    border-radius: 50% !important;\\n    width: 44px;\\n    height: 44px;\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    box-shadow: 0 4px 12px rgba(0,0,0,0.08);\\n    color: var(--color-accent);\\n}\\n.circular-btn iconify-icon { color: var(--color-accent); }'
);

fs.writeFileSync('Mobile/css/styles.css', css);
console.log('Fixed CSS issues');
