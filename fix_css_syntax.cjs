const fs = require('fs');
let css = fs.readFileSync('Mobile/css/styles.css', 'utf8');

// Replace the literal \n
css = css.replace(/\\n/g, '');

fs.writeFileSync('Mobile/css/styles.css', css);

let html = fs.readFileSync('Mobile/index.html', 'utf8');
html = html.replace(/v=31/g, 'v=32');
fs.writeFileSync('Mobile/index.html', html);

console.log("Fixed CSS syntax error!");
