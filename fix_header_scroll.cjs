const fs = require('fs');
let css = fs.readFileSync('Mobile/css/styles.css', 'utf8');

css = css.replace(/\.home-fixed-header\.scrolled-header-container {[\s\S]*?}/, '');
css = css.replace(/\.home-fixed-header\.scrolled-header-container \.base-header {[\s\S]*?}/, '');

fs.writeFileSync('Mobile/css/styles.css', css);
console.log('Removed scrolled-header-container CSS');
