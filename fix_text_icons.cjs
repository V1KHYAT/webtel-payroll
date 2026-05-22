const fs = require('fs');

let html = fs.readFileSync('Mobile/index.html', 'utf8');

// Replace -linear with -broken
html = html.replace(/icon="solar:([^"]+)-linear"/g, 'icon="solar:$1-broken"');

// Fix weird bullet characters
html = html.replace(/Ã¢â‚¬Â¢/g, '&bull;');

// Also fix any other weird chars if any (like apostrophe)
html = html.replace(/Ã¢â‚¬â„¢/g, "'");
html = html.replace(/Ã¢â‚¬â€ /g, '&mdash;');

fs.writeFileSync('Mobile/index.html', html);
console.log('Fixed text and updated to broken icons');
