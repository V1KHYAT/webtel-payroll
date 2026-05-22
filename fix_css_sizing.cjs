const fs = require('fs');

let css = fs.readFileSync('Mobile/css/styles.css', 'utf8');

// Replace `width: Xpx; height: Xpx;` in iconify-icon rules with `font-size: Xpx;`
// Actually, iconify-icon supports width and height attributes or CSS width/height.
// But to ensure it renders correctly, adding font-size is safer.
css = css.replace(/(iconify-icon.*?\{[^\}]*)width:\s*(\d+px);[^}]*\}/g, (match, before, size) => {
    if (!match.includes('font-size')) {
        return match.replace('}', ` font-size: ${size}; }`);
    }
    return match;
});

fs.writeFileSync('Mobile/css/styles.css', css);
console.log('Fixed CSS icon sizing');
