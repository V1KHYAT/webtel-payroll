const fs = require('fs');

let css = fs.readFileSync('Mobile/css/styles.css', 'utf8');

// Replace all .lucide with iconify-icon
css = css.replace(/\.lucide/g, 'iconify-icon');

// For icons that should be thicker, we can apply some CSS if needed.
// Solar icons don't always support stroke-width via CSS, but we can try setting font-weight or stroke.

fs.writeFileSync('Mobile/css/styles.css', css);
console.log('Fixed CSS icon selectors');
