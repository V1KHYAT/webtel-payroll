const fs = require('fs');
let css = fs.readFileSync('Mobile/css/styles.css', 'utf8');

css = css.replace(/\.profile-ghost-btn \{\s*color:\s*var\(--color-text\)\s*!important;\s*\}/,
    '.profile-ghost-btn { color: var(--color-text-secondary) !important; }');

fs.writeFileSync('Mobile/css/styles.css', css);
console.log('Fixed profile ghost btn color');
