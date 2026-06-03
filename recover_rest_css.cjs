const fs = require('fs');

let css = fs.readFileSync('Mobile/css/styles.css', 'utf8');
const appendScript = fs.readFileSync('append_css.cjs', 'utf8');

const match = appendScript.match(/(\.shift-pill\s*\{[\s\S]*?)`;/);
if (match) {
    let toAppend = match[1];
    
    // Check if some class is missing, like .alert-card
    if (!css.includes('.alert-card {')) {
        css += '\n' + toAppend;
        fs.writeFileSync('Mobile/css/styles.css', css);
        console.log('Successfully recovered the rest of the missing CSS!');
    } else {
        console.log('It seems the CSS is already there?');
    }
} else {
    console.log('Could not match shift-pill in append_css.cjs');
}
