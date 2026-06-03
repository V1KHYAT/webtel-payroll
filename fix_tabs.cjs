const fs = require('fs');

let css = fs.readFileSync('Mobile/css/styles.css', 'utf8');

const fixCSS = `
/* FIX FOR TABS CONTAINERS UNDER ABSOLUTE HEADERS */
#attendance-screen .tabs-container,
#leave-screen .tabs-container {
    position: absolute !important;
    top: 110px !important;
    left: 16px !important;
    right: 16px !important;
    width: calc(100% - 32px) !important;
    margin: 0 !important;
    z-index: 45 !important;
}

#attendance-screen .scrollable-cards,
#leave-screen .scrollable-cards {
    padding-top: 164px !important;
}
`;

css += fixCSS;

fs.writeFileSync('Mobile/css/styles.css', css);

let html = fs.readFileSync('Mobile/index.html', 'utf8');
html = html.replace('href="css/styles.css?v=25"', 'href="css/styles.css?v=26"');
fs.writeFileSync('Mobile/index.html', html);

console.log("Fixed tabs layout!");
