const fs = require('fs');

let css = fs.readFileSync('Mobile/css/styles.css', 'utf8');

function appendIfMissing(snippet, identifier) {
    if (!css.includes(identifier)) {
        css += '\n' + snippet;
    }
}

// 1. append_css.cjs
try {
    const s1 = fs.readFileSync('append_css.cjs', 'utf8');
    const match1 = s1.match(/const newCSS = `([\s\S]*?)`;/);
    if(match1) {
        // Only append if it's really missing, but since I messed it up, maybe I should just append what's missing
        // Wait, .home-hero-bg is definitely missing.
        appendIfMissing(match1[1], '.home-hero-bg {');
    }
} catch(e) {}

fs.writeFileSync('Mobile/css/styles.css', css);
console.log('Recovered more CSS successfully. New length:', css.length);
