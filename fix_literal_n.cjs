const fs = require('fs');

let html = fs.readFileSync('Mobile/index.html', 'utf8');

// The literal '\n' was inserted by my previous script because I used '\\n' in a backtick string.
// Let's replace the literal \n text in the HTML.
html = html.replace(/>\\n/g, '>');
html = html.replace(/\\n</g, '<');

// Specifically check for the \n that was inserted around the tabs
html = html.replace(/\\n                    <div class="tabs-container">/g, '<div class="tabs-container">');
html = html.replace(/                    <\/div>\\n<\/div>/g, '                    </div></div>');

html = html.replace(/v=30/g, 'v=31');
fs.writeFileSync('Mobile/index.html', html);

console.log("Removed literal \\n from HTML");
