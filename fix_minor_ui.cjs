const fs = require('fs');

// 1. Fix app.js reportScreens array
let js = fs.readFileSync('Mobile/js/app.js', 'utf8');
const oldScreensArray = "const reportScreens = ['expense-report-screen', 'salary-report-screen', 'od-tour-report-screen', 'applied-leave-report-screen'];";
const newScreensArray = "const reportScreens = ['expense-report-screen', 'salary-report-screen', 'od-tour-report-screen', 'applied-leave-report-screen', 'leave-sanction-screen', 'expense-sanction-screen', 'od-tour-sanction-screen', 'my-team-screen'];";
if (js.includes(oldScreensArray)) {
    js = js.replace(oldScreensArray, newScreensArray);
    fs.writeFileSync('Mobile/js/app.js', js);
    console.log('Fixed app.js reportScreens array.');
} else {
    console.log('Could not find reportScreens array in app.js.');
}


// 2. Fix margins and search bar background in index.html
let html = fs.readFileSync('Mobile/index.html', 'utf8');

// Replace margin-bottom: 16px; with margin-bottom: 6px;
html = html.replace(/margin-bottom:\s*16px;/g, 'margin-bottom: 6px;');

// Replace margin-bottom: 12px; with margin-bottom: 6px;
html = html.replace(/margin-bottom:\s*12px;/g, 'margin-bottom: 6px;');

// Replace the weird search bar background
const oldSearchBarBg = 'background: rgba(255,253,247,0.95); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px); padding: 16px 16px 12px; z-index: 10; margin: 0 -16px 12px; border-bottom: 1px solid rgba(0,0,0,0.05);';
const newSearchBarBg = 'background: var(--color-canvas); padding: 16px 16px 12px; z-index: 10; margin: 0 -16px 6px; border-bottom: none;';
if (html.includes(oldSearchBarBg)) {
    html = html.replace(oldSearchBarBg, newSearchBarBg);
}

fs.writeFileSync('Mobile/index.html', html);
console.log('Fixed margins and search bar in index.html.');
