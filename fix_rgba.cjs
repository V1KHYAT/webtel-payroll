const fs = require('fs');

let css = fs.readFileSync('Mobile/css/styles.css', 'utf8');

// Define rgb variable
css = css.replace('--color-accent: #eab308;', '--color-accent: #eab308;\n    --color-accent-rgb: 234, 179, 8;');

// Replace all rgba(37, 99, 235, ...) with rgba(var(--color-accent-rgb), ...)
css = css.replace(/rgba\(\s*37\s*,\s*99\s*,\s*235\s*,([^)]+)\)/g, 'rgba(var(--color-accent-rgb), $1)');

fs.writeFileSync('Mobile/css/styles.css', css);
console.log('Fixed rgba colors');
