const fs = require('fs');

let html = fs.readFileSync('Mobile/index.html', 'utf8');

// The structure is:
// <div class="lc-chevron">
//     <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
// </div>

html = html.replace(/<div class="lc-chevron">\s*<iconify-icon icon="solar:alt-arrow-right-linear"><\/iconify-icon>\s*<\/div>/g, '');

fs.writeFileSync('Mobile/index.html', html);
console.log('Removed all right chevrons from logs tab.');
