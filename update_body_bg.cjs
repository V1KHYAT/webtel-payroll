const fs = require('fs');

let css = fs.readFileSync('Mobile/css/styles.css', 'utf8');

// Find the body background and replace it
css = css.replace('background: linear-gradient(135deg, #fffdf7 0%, #fdfcf9 100%);', 'background: #f9fafb;');

fs.writeFileSync('Mobile/css/styles.css', css);
console.log('Body background updated.');
