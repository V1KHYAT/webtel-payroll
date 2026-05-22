const fs = require('fs');
let css = fs.readFileSync('Mobile/css/styles.css', 'utf8');

// 1. Revert canvas to white, bg to E2E5EB
css = css.replace(/--color-bg: #fefce8;\s*\/\* Yellow 50 \*\//, '--color-bg: #E2E5EB;');
css = css.replace(/--color-canvas: #fefce8;\s*\/\* Light Yellow Canvas \*\//, '--color-canvas: #ffffff;');
css = css.replace(/--color-surface: #fffdf0;\s*\/\* Ultra Light Yellow Surface \*\//, '--color-surface: #ffffff;');

// 2. Reduce header text weight
css = css.replace(/\.profile-page-title \{\s*font-size:\s*18px;\s*font-weight:\s*700;/g, '.profile-page-title { font-size: 18px; font-weight: 600;');
css = css.replace(/\.user-greeting h1 \{\s*font-size:\s*15px;\s*font-weight:\s*600;/g, '.user-greeting h1 { font-size: 14px; font-weight: 500;');

// 3. Adjust header icons:
// .base-header ghost-btn iconify-icon
// They are bold, but user wants them lighter. We can't change 'bold' weight without changing the SVG, but we can change the color to text-secondary.
css = css.replace(/\.ghost-btn iconify-icon \{\s*width:\s*20px;\s*height:\s*20px;\s*color:\s*var\(--color-text\);\s*font-size:\s*24px;\s*\}/g,
    '.ghost-btn iconify-icon { width: 20px; height: 20px; color: var(--color-text-secondary); font-size: 20px; }');
// Also reduce size from 24px back to 20px to make them less heavy.

// 4. Bottom sheet max-width fix
css = css.replace(/max-width:\s*100vw;/g, 'max-width: 100%;');

fs.writeFileSync('Mobile/css/styles.css', css);
console.log('Fixed background, header weight, and drawer width');
