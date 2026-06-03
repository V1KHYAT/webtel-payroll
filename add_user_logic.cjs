const fs = require('fs');

// 1. Update CSS
let css = fs.readFileSync('Mobile/css/styles.css', 'utf8');

if (!css.includes('.user-2-active')) {
    css += `\n/* User 2 Toggle Logic */
body.user-2-active [data-user="1"] { display: none !important; }
body:not(.user-2-active) [data-user="2"] { display: none !important; }

/* CTC Donut Chart */
.ctc-donut-container {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 16px;
    background: var(--color-surface);
    border-radius: var(--radius-xl);
    border: 1px solid var(--color-border);
    margin-bottom: 16px;
}
.ctc-donut {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background: conic-gradient(#22c55e 0% 85%, #f1f5f9 85% 100%);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}
.ctc-donut::after {
    content: '';
    width: 48px;
    height: 48px;
    background: var(--color-surface);
    border-radius: 50%;
    position: absolute;
}
.ctc-total-info { display: flex; flex-direction: column; }
.ctc-total-amt { font-size: 20px; font-weight: 800; color: var(--color-text); letter-spacing: -0.02em; }
.ctc-total-lbl { font-size: 12px; color: var(--color-text-tertiary); font-weight: 500; }
.ctc-indicator { width: 8px; height: 8px; border-radius: 50%; display: inline-block; margin-right: 8px; }
`;
    fs.writeFileSync('Mobile/css/styles.css', css);
}

// 2. Update JS
let js = fs.readFileSync('Mobile/js/app.js', 'utf8');
if (!js.includes('switchUserAccount')) {
    js += `\n// Toggle User Account Logic
function switchUserAccount(isActive) {
    if(isActive) {
        document.body.classList.add('user-2-active');
        // Update local storage if needed
    } else {
        document.body.classList.remove('user-2-active');
    }
}
`;
    fs.writeFileSync('Mobile/js/app.js', js);
}

console.log('CSS and JS updated for user toggle and donut chart.');
