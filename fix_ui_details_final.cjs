const fs = require('fs');

// 1. Fix CSS
let css = fs.readFileSync('Mobile/css/styles.css', 'utf8');

// Change root bg color
css = css.replace(/--color-bg:\s*#[a-fA-F0-9]+;/, '--color-bg: #fffbf0;');
css = css.replace(/--color-surface:\s*#[a-fA-F0-9]+;/, '--color-surface: #ffffff;');

// Change card margin-bottom
css = css.replace(/\.custom-report-card\s*\{([\s\S]*?)margin-bottom:\s*12px;([\s\S]*?)\}/, 
`.custom-report-card {$1margin-bottom: 8px;$2}`);

fs.writeFileSync('Mobile/css/styles.css', css);

// 2. Fix HTML
let html = fs.readFileSync('Mobile/index.html', 'utf8');

// A) Submit Expense button: make it thicker and remove icon
html = html.replace(/<button class="btn btn-primary btn-block" style="background: #f59e0b; color: white; border: none; font-weight: 600; height: 52px; font-size: 15px; border-radius: 14px; display: flex; align-items: center; justify-content: center; gap: 8px;">\s*Submit Expense <iconify-icon icon="solar:plain-bold" style="font-size: 18px;"><\/iconify-icon>\s*<\/button>/, 
`<button class="btn btn-primary btn-block" style="background: #f59e0b; color: white; border: none; font-weight: 700; height: 56px; font-size: 16px; border-radius: 14px; display: flex; align-items: center; justify-content: center;">
                            Submit Expense
                        </button>`);

// Fix inline gaps
html = html.replace(/gap: 16px;/g, 'gap: 8px;');
html = html.replace(/gap: 12px;/g, 'gap: 8px;');

// B) Hardcode first cards to be expanded
const reportScreens = [
    'expense-report-screen',
    'salary-report-screen',
    'od-tour-report-screen',
    'applied-leave-report-screen'
];

reportScreens.forEach(screenId => {
    const screenStart = html.indexOf('<div id="' + screenId + '"');
    if (screenStart === -1) return;
    const mainStart = html.indexOf('<main class="scrollable-cards"', screenStart);
    if (mainStart === -1) return;
    const cardStart = html.indexOf('<div class="custom-report-card', mainStart);
    if (cardStart === -1) return;
    const classEnd = html.indexOf('"', cardStart + 31);
    
    // Add "expanded" to the first card
    const beforeClass = html.substring(0, classEnd);
    const afterClass = html.substring(classEnd);
    
    // Check if it already has expanded
    if (!beforeClass.includes('expanded')) {
        html = beforeClass + ' expanded' + afterClass;
    }
});

// Now we need to set max-height on the FIRST crc-expanded-content inside those cards
reportScreens.forEach(screenId => {
    const screenStart = html.indexOf('<div id="' + screenId + '"');
    if (screenStart === -1) return;
    
    const expContentStart = html.indexOf('<div class="crc-expanded-content"', screenStart);
    if (expContentStart === -1) return;
    
    // Check if it's within this screen (before the next screen starts)
    const nextScreenStart = html.indexOf('<div id="', screenStart + 10);
    if (nextScreenStart !== -1 && expContentStart > nextScreenStart) return;

    // Add inline style
    const closeQuote = html.indexOf('"', expContentStart + 12); // end of class="..."
    if (closeQuote !== -1) {
        const divEnd = html.indexOf('>', expContentStart);
        const tagContent = html.substring(expContentStart, divEnd + 1);
        
        if (!tagContent.includes('max-height')) {
            html = html.substring(0, divEnd) + ' style="max-height: 500px;"' + html.substring(divEnd);
        }
    }
});

fs.writeFileSync('Mobile/index.html', html);

console.log('UI Fixes bulletproof applied.');
