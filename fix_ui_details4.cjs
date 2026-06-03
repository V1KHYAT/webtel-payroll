const fs = require('fs');

// 1. Fix HTML: Remove gap, fix button, and hardcode max-height for first cards
let html = fs.readFileSync('Mobile/index.html', 'utf8');

// A) Change gap from 12px to 8px in the report screens
html = html.replace(/<div style="display: flex; flex-direction: column; gap: 12px;">/g, '<div style="display: flex; flex-direction: column; gap: 8px;">');

// Also check if there's any 16px gap left
html = html.replace(/<div style="display: flex; flex-direction: column; gap: 16px;">/g, '<div style="display: flex; flex-direction: column; gap: 8px;">');

// B) Submit Expense button: make it thicker and remove icon
html = html.replace(/<button class="btn btn-primary btn-block" style="background: #f59e0b; color: white; border: none; font-weight: 600; height: 52px; font-size: 15px; border-radius: 14px; display: flex; align-items: center; justify-content: center; gap: 8px;">\s*Submit Expense <iconify-icon icon="solar:plain-bold" style="font-size: 18px;"><\/iconify-icon>\s*<\/button>/, 
`<button class="btn btn-primary btn-block" style="background: #f59e0b; color: white; border: none; font-weight: 700; height: 56px; font-size: 16px; border-radius: 14px; display: flex; align-items: center; justify-content: center;">
    Submit Expense
</button>`);

// C) Hardcode first cards to be expanded
const reportScreens = [
    'expense-report-screen',
    'salary-report-screen',
    'od-tour-report-screen',
    'applied-leave-report-screen'
];

reportScreens.forEach(screenId => {
    const screenRegex = new RegExp('<div id="' + screenId + '"[^>]*>[\\\\s\\\\S]*?<main class="scrollable-cards"[^>]*>([\\\\s\\\\S]*?)<\\\\/main>\\\\s*<\\\\/div>');
    const match = html.match(screenRegex);
    if (match) {
        let innerHtml = match[1];
        
        // Find the first card
        const firstCardRegex = /<div class="custom-report-card([^"]*)">([\\s\\S]*?)<div class="crc-expanded-content">/;
        const cardMatch = innerHtml.match(firstCardRegex);
        if (cardMatch) {
            // Replace first card class and add inline max-height to its content
            const newInnerHtml = innerHtml.replace(firstCardRegex, 
                '<div class="custom-report-card$1 expanded">$2<div class="crc-expanded-content" style="max-height: 500px;">');
            html = html.replace(match[0], match[0].replace(innerHtml, newInnerHtml));
        }
    }
});

fs.writeFileSync('Mobile/index.html', html);


// 2. Fix CSS background color
let css = fs.readFileSync('Mobile/css/styles.css', 'utf8');

// Change root bg color
css = css.replace(/--color-bg:\s*#[a-fA-F0-9]+;/, '--color-bg: #fffbf0;');
// Also update --color-surface to pure white if it isn't
css = css.replace(/--color-surface:\s*#[a-fA-F0-9]+;/, '--color-surface: #ffffff;');

fs.writeFileSync('Mobile/css/styles.css', css);

// 3. Remove the buggy JS from app.js
let js = fs.readFileSync('Mobile/js/app.js', 'utf8');

// I'll leave the toggleCard function but remove the autoOpenScript
if (js.includes('window.showScreenPatched')) {
    js = js.replace(/\/\/ Let's monkeypatch showScreen[\s\S]*?window\.showScreenPatched = true;\s*\}/, '');
    fs.writeFileSync('Mobile/js/app.js', js);
}


console.log('UI Fixes applied successfully.');
