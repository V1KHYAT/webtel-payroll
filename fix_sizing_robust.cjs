const fs = require('fs');
let css = fs.readFileSync('Mobile/css/styles.css', 'utf8');

// 1. Give iconify-icon a solid base:
css = css.replace(/iconify-icon \{[^}]+\}/, `iconify-icon { 
    display: inline-flex; justify-content: center; align-items: center; 
    font-size: inherit; 
}`);

// 2. We'll find any CSS rule containing 'width: Xpx; height: Xpx;' where we know it applies to an icon,
// and make sure it also has 'font-size: Xpx;'.
// Let's do a regex that looks for width: Xpx; height: Ypx; and adds font-size: Xpx; if it's missing.
css = css.replace(/(\.input-icon\s*\{[^}]+width:\s*)(\d+)px(;\s*height:\s*\d+px;)([^}]*\})/g, '$1$2px$3 font-size: $2px;$4');
css = css.replace(/(\.input-icon-right\s*\{[^}]+width:\s*)(\d+)px(;\s*height:\s*\d+px;)([^}]*\})/g, '$1$2px$3 font-size: $2px;$4');
css = css.replace(/(\.chevron\s*\{[^}]+width:\s*)(\d+)px(;\s*height:\s*\d+px;)([^}]*\})/g, '$1$2px$3 font-size: $2px;$4');
css = css.replace(/(\.sidebar-footer-btn iconify-icon\s*\{[^}]+width:\s*)(\d+)px(;\s*height:\s*\d+px;)([^}]*\})/g, '$1$2px$3 font-size: $2px;$4');
css = css.replace(/(\.nav-link iconify-icon\s*\{[^}]+width:\s*)(\d+)px(;\s*height:\s*\d+px;)([^}]*\})/g, '$1$2px$3 font-size: $2px;$4');

// Also fix .btn-primary:hover which had hardcoded #1d4ed8
css = css.replace(/#1d4ed8/g, 'var(--color-accent)');
css = css.replace(/#2563EB/g, 'var(--color-accent)');

// The 'blue' in .feed-icon blue doesn't have CSS, but let's remove 'blue' from the HTML class to be clean.

fs.writeFileSync('Mobile/css/styles.css', css);

let html = fs.readFileSync('Mobile/index.html', 'utf8');
html = html.replace(/class="feed-icon blue"/g, 'class="feed-icon"');
fs.writeFileSync('Mobile/index.html', html);

console.log('Fixed icon sizing and remaining blue colors');
