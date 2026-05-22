const fs = require('fs');

let html = fs.readFileSync('Mobile/index.html', 'utf8');

// Find the prof-hero-card and add the watermark inside
html = html.replace(/<div class="prof-hero-card">/, '<div class="prof-hero-card">\n                                <div class="prof-hero-watermark">VP</div>');

fs.writeFileSync('Mobile/index.html', html);
console.log('Added VP watermark to HTML');
