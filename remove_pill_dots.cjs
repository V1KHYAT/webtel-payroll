const fs = require('fs');
let html = fs.readFileSync('Mobile/index.html', 'utf8');

// Remove the dots inside the pills
html = html.replace(/<div class="rc-dot-green"><\/div>\s*/g, '');
html = html.replace(/<div class="rc-dot-orange"><\/div>\s*/g, '');
html = html.replace(/<div class="rc-dot-red"><\/div>\s*/g, '');
html = html.replace(/<div class="rc-dot-slate"><\/div>\s*/g, '');

fs.writeFileSync('Mobile/index.html', html);
console.log('Removed inner dots from all pills in index.html');
