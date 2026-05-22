const fs = require('fs');
let css = fs.readFileSync('Mobile/css/styles.css', 'utf8');

// 1. Define rgb variable for dynamic theme colors
css = css.replace('--color-accent: #eab308;', '--color-accent: #eab308;\n    --color-accent-rgb: 234, 179, 8;');

// 2. Replace hardcoded blue rgba with CSS variable rgb
css = css.replace(/rgba\(\s*37\s*,\s*99\s*,\s*235\s*,([^)]+)\)/g, 'rgba(var(--color-accent-rgb), $1)');

// 3. Fix base iconify-icon rule which breaks Solar icons
// It currently looks like:
// iconify-icon { width: 24px; height: 24px; stroke-width: 1.5; stroke: currentColor; fill: none; stroke-linecap: round; stroke-linejoin: round;  font-size: 24px; }
css = css.replace(/iconify-icon\s*\{\s*width:\s*24px.*?font-size:\s*24px;\s*\}/g, 
  'iconify-icon { display: inline-flex; justify-content: center; align-items: center; }');

// 4. Also there are specific `.lucide` styles that were converted to iconify-icon that have stroke-width:
// We should remove stroke-width, fill, stroke from all rules if they are for iconify-icon
css = css.replace(/stroke-width:\s*[^;]+;/g, '');
css = css.replace(/stroke:\s*[^;]+;/g, '');
css = css.replace(/fill:\s*[^;]+;/g, '');

// 5. Fix header padding gap
css = css.replace(/padding-top:\s*calc\(16px \+ 32px\);/g, 'padding-top: 16px;');

// 6. Restore --text-4xl for time readout
css = css.replace(/--text-3xl:\s*36px;/g, '--text-3xl: 36px;\n    --text-4xl: 48px;');

fs.writeFileSync('Mobile/css/styles.css', css);
console.log('Fixed CSS issues safely');
