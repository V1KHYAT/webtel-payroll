const fs = require('fs');

let css = fs.readFileSync('Mobile/css/styles.css', 'utf8');

// Safely add font-size: Xpx wherever width: Xpx is defined for iconify-icon
css = css.replace(/(iconify-icon.*?\{[^\}]*)width:\s*(\d+px);[^}]*\}/g, (match, before, size) => {
    if (!match.includes('font-size')) {
        return match.replace('}', ` font-size: ${size}; }`);
    }
    return match;
});

// Also add font-size for .doc-icon
css = css.replace(/(\.doc-icon\s*\{[^}]+width:\s*)(\d+)px(;\s*height:\s*\d+px;)([^}]*\})/g, (match, before, size, middle, after) => {
    if (!match.includes('font-size')) {
        return `${before}${size}px${middle} font-size: ${size}px;${after}`;
    }
    return match;
});

// Remove any remaining hardcoded blue colors if there are any
css = css.replace(/#1d4ed8/g, 'var(--color-accent)');
css = css.replace(/#2563EB/ig, 'var(--color-accent)');

fs.writeFileSync('Mobile/css/styles.css', css);
console.log('Fixed icon sizing broadly');
