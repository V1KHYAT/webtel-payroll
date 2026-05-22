const fs = require('fs');

let css = fs.readFileSync('Mobile/css/styles.css', 'utf8');

// 1. Profile hero card gradient (Make it colored again, Amber)
css = css.replace(/background:\s*linear-gradient\(135deg,\s*#27272a\s*0%,\s*#18181b\s*100%\);/g, 'background: linear-gradient(135deg, var(--color-accent) 0%, #b45309 100%);');

// 2. Profile fixed header gap
css = css.replace(/padding-top:\s*calc\(12px \+ 32px\);/g, 'padding-top: 12px;');

// 3. Make icons slightly larger across the board by increasing font-size in CSS
css = css.replace(/(\.nav-link iconify-icon.*?font-size:\s*)18px/g, '$122px'); // Sidebar icons
css = css.replace(/(\.nav-link \.chevron.*?font-size:\s*)14px/g, '$118px'); // Chevron
css = css.replace(/(\.sidebar-footer-btn iconify-icon.*?font-size:\s*)15px/g, '$118px'); // Footer sidebar icons
css = css.replace(/(\.status-icons iconify-icon.*?font-size:\s*)16px/g, '$118px'); // Status icons
css = css.replace(/(\.ghost-btn iconify-icon.*?font-size:\s*)20px/g, '$124px'); // Header buttons
css = css.replace(/(\.summary-icon iconify-icon.*?font-size:\s*)14px/g, '$116px'); // Summary icons
css = css.replace(/(\.feed-icon iconify-icon.*?font-size:\s*)16px/g, '$120px'); // Feed icons
css = css.replace(/(\.prof-section-icon iconify-icon.*?font-size:\s*)16px/g, '$120px'); // Profile sections
css = css.replace(/(\.prof-bento-icon iconify-icon.*?font-size:\s*)16px/g, '$120px'); // Profile bentos

// 4. Document Card width issue
// Ensure document cards don't overflow their grid or container
if (!css.includes('.doc-grid {')) {
    // Let's just make sure document-card has box-sizing
    css += `\n.document-card { box-sizing: border-box; max-width: 100%; overflow: hidden; }\n`;
}

// 5. Bottom sheet width issue
css = css.replace(/\.bottom-sheet \{/g, '.bottom-sheet { box-sizing: border-box; max-width: 100vw; overflow-x: hidden; ');

fs.writeFileSync('Mobile/css/styles.css', css);
console.log('Fixed profile colors, header gap, bottom sheet width, and icon sizes');
