const fs = require('fs');

let css = fs.readFileSync('Mobile/css/styles.css', 'utf8');

const scrollCSS = `
/* Status bar scrolled state */
.status-bar-dummy {
    transition: background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
}

.scrolled-status-bar {
    background-color: #ffffff !important;
}
`;

if (!css.includes('.scrolled-status-bar {')) {
    css += '\n' + scrollCSS;
    fs.writeFileSync('Mobile/css/styles.css', css);
    console.log('Added scrolled-status-bar styles.');
} else {
    console.log('Already added.');
}
