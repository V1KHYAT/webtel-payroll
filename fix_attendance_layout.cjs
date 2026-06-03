const fs = require('fs');

// --- Fix HTML ---
let html = fs.readFileSync('Mobile/index.html', 'utf8');

// Remove profile-scroll from attendance screen's main tag
html = html.replace(/<main class="scrollable-cards profile-scroll">/, '<main class="scrollable-cards">');

fs.writeFileSync('Mobile/index.html', html);


// --- Fix CSS ---
let css = fs.readFileSync('Mobile/css/styles.css', 'utf8');

// Adjust tabs-container spacing to add margin top and bottom
css = css.replace(/\.tabs-container \{\s*display:\s*flex;\s*margin:\s*0 var\(--space-4\) var\(--space-4\);\s*background:\s*#f4f4f5;\s*\/\* Zinc-100 \*\/\s*border-radius:\s*var\(--radius-full\);\s*padding:\s*4px;\s*\}/, 
`.tabs-container {
    display: flex;
    margin: 12px 16px 16px 16px;
    background: #f4f4f5;
    border-radius: var(--radius-full);
    padding: 4px;
    flex-shrink: 0;
}`);

fs.writeFileSync('Mobile/css/styles.css', css);
console.log('Fixed margins and spacing');
