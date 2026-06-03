const fs = require('fs');
let html = fs.readFileSync('Mobile/index.html', 'utf8');
html = html.replace(/style="background: #eab308; top: 10px; right: 12px; width: 8px; height: 8px; border: 2px solid white;"/g, 'style="background: #ef4444; top: 12px; right: 12px; width: 8px; height: 8px; border: 2px solid var(--color-accent);"');
fs.writeFileSync('Mobile/index.html', html);
