const fs = require('fs');

// Add the keyboard listener to app.js
let js = fs.readFileSync('Mobile/js/app.js', 'utf8');

if (!js.includes('floating-btn-active')) {
    const jsAddition = `
// --- FLOATING BUTTON TOGGLE (L KEY) ---
document.addEventListener('keydown', function(e) {
    if (e.key.toLowerCase() === 'l') {
        const activeScreen = document.querySelector('.screen.active');
        if (activeScreen && activeScreen.id === 'visit-expense-screen') {
            const submitBtns = activeScreen.querySelectorAll('button');
            for (let btn of submitBtns) {
                if (btn.textContent.includes('Submit Expense')) {
                    btn.classList.toggle('floating-btn-active');
                    
                    // If making it floating, add a placeholder below so content isn't covered, 
                    // or just let it float. The user just asked for it to float on L.
                }
            }
        }
    }
});
`;
    js += jsAddition;
    fs.writeFileSync('Mobile/js/app.js', js);
}

// Add the CSS to styles.css
let css = fs.readFileSync('Mobile/css/styles.css', 'utf8');

if (!css.includes('.floating-btn-active')) {
    css += `\n/* Floating Button (Toggled by L key) */
.floating-btn-active {
    position: absolute !important;
    bottom: 24px !important;
    left: 24px !important;
    width: calc(100% - 48px) !important;
    z-index: 100 !important;
    box-shadow: 0 10px 25px rgba(37, 99, 235, 0.4) !important;
    margin-top: 0 !important;
}
`;
    fs.writeFileSync('Mobile/css/styles.css', css);
}

// Find all Submit Expense buttons in index.html to make sure their parent allows absolute positioning correctly
// The screen is absolute, so it should be fine. But just in case, let's bump the cache.
let html = fs.readFileSync('Mobile/index.html', 'utf8');
html = html.replace(/href="css\/styles\.css\?v=\d+"/g, 'href="css/styles.css?v=22"');
html = html.replace(/src="js\/app\.js\?v=\d+"/g, 'src="js/app.js?v=14"');
fs.writeFileSync('Mobile/index.html', html);

console.log('Added floating button feature successfully!');
