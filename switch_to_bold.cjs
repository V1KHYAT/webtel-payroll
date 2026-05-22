const fs = require('fs');

let html = fs.readFileSync('Mobile/index.html', 'utf8');

// Replace -broken with -bold
html = html.replace(/icon="solar:([^"]+)-broken"/g, 'icon="solar:$1-bold"');

fs.writeFileSync('Mobile/index.html', html);
console.log('Switched to bold icons');
