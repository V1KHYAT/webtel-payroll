const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'Mobile', 'css', 'styles.css');
let css = fs.readFileSync(filePath, 'utf8');

// We will use some regex to remove known blocks.
// Removing .base-header blocks
css = css.replace(/\.base-header\b[^\{]*\{[^}]*\}/g, '');
// Removing .fixed-base blocks
css = css.replace(/\.fixed-base\b[^\{]*\{[^}]*\}/g, '');
// Removing .profile-fixed-header blocks
css = css.replace(/\.profile-fixed-header\b[^\{]*\{[^}]*\}/g, '');
// Removing .header-top-row
css = css.replace(/\.header-top-row\b[^\{]*\{[^}]*\}/g, '');
// Removing .header-toast-msg-inline
css = css.replace(/\.header-toast-msg-inline\b[^\{]*\{[^}]*\}/g, '');
// Removing .toast-expanded
css = css.replace(/\.toast-expanded\b[^\{]*\{[^}]*\}/g, '');
// Any leftover nested blocks that might have been missed
css = css.replace(/\.[a-zA-Z0-9_-]+\.toast-expanded\b[^\{]*\{[^}]*\}/g, '');

fs.writeFileSync(filePath, css);
console.log('Successfully cleaned old CSS.');
