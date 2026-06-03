const fs = require('fs');

// 1. Remove yellow lines from Apply Expenses cards
let html = fs.readFileSync('Mobile/index.html', 'utf8');

// The Apply Expenses screen has id="visit-expense-screen"
const screenStart = html.indexOf('<div id="visit-expense-screen"');
if (screenStart !== -1) {
    const screenEnd = html.indexOf('</div> <!-- ==========================================', screenStart);
    let screenHtml = html.substring(screenStart, screenEnd > 0 ? screenEnd : undefined);
    
    // Remove crc-yellow
    screenHtml = screenHtml.replace(/class="custom-report-card crc-yellow"/g, 'class="custom-report-card"');
    
    html = html.substring(0, screenStart) + screenHtml + (screenEnd > 0 ? html.substring(screenEnd) : '');
    fs.writeFileSync('Mobile/index.html', html);
    console.log('Removed crc-yellow from apply expenses page.');
}

// 2. Remove overflow: hidden from custom-report-card in CSS
let css = fs.readFileSync('Mobile/css/styles.css', 'utf8');

css = css.replace(/\.custom-report-card\s*\{([\s\S]*?)overflow:\s*hidden;([\s\S]*?)\}/, 
`.custom-report-card {$1$2}`);

// Also just in case, let's explicitly make sure custom-report-card has overflow: visible
if (!css.includes('overflow: visible') && !css.match(/\.custom-report-card\s*\{[^}]*overflow:/)) {
    css = css.replace(/\.custom-report-card\s*\{/, '.custom-report-card { overflow: visible;');
}

fs.writeFileSync('Mobile/css/styles.css', css);
console.log('Removed overflow hidden from custom-report-card.');

// 3. Fix the buggy max-height script that might have messed up other cards
// Let's ensure ALL .custom-report-card.expanded > .crc-expanded-content have max-height
const autoExpandScript = `
document.addEventListener('DOMContentLoaded', () => {
    // Force expand the first card in all report screens
    const reportScreens = ['expense-report-screen', 'salary-report-screen', 'od-tour-report-screen', 'applied-leave-report-screen'];
    reportScreens.forEach(id => {
        const screen = document.getElementById(id);
        if (screen) {
            const firstCard = screen.querySelector('.custom-report-card');
            if (firstCard) {
                firstCard.classList.add('expanded');
                const content = firstCard.querySelector('.crc-expanded-content');
                if (content) {
                    content.style.maxHeight = '1000px'; // Give it a huge max-height so it shows
                }
            }
        }
    });
});
`;

let js = fs.readFileSync('Mobile/js/app.js', 'utf8');
if (!js.includes('Force expand the first card')) {
    js += '\n' + autoExpandScript;
    fs.writeFileSync('Mobile/js/app.js', js);
}
