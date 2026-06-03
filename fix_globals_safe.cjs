const fs = require('fs');

// --- 1. CSS UPDATES ---
let css = fs.readFileSync('Mobile/css/styles.css', 'utf8');

// Ensure toast has overflow hidden so its flex items don't stretch the container when height is 0
css = css.replace(
    /\\.header-toast-msg-inline {\\n    width: 100%;\\n    text-align: center;/g,
    '.header-toast-msg-inline {\\n    width: 100%;\\n    text-align: center;\\n    overflow: hidden; /* Fix layout stretching */'
);

// Apply base-header column layout globally
css = css.replace(
    /#home-base-header {\\n    transition: all 0\.3s cubic-bezier\(0\.4, 0, 0\.2, 1\);\\n    overflow: hidden;\\n    flex-direction: column;\\n}/g,
    '.base-header {\\n    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\\n    overflow: hidden;\\n    flex-direction: column;\\n}'
);

// Fix .header-top-row flex layout
if (!css.includes('.header-top-row {\\n    transition: margin 0.3s ease;\\n    display: flex;')) {
    css = css.replace(
        /\\.header-top-row {\\n    transition: margin 0\.3s ease;\\n}/g,
        '.header-top-row {\\n    transition: margin 0.3s ease;\\n    display: flex;\\n    width: 100%;\\n    justify-content: space-between;\\n    align-items: center;\\n}'
    );
}

// Fix icon colors so they are #1e293b
css = css.replace(
    /\\.base-header \\.circular-btn iconify-icon {\\n    color: var\\(--color-accent\\) !important;\\n}/g,
    '.base-header .circular-btn iconify-icon {\\n    color: #1e293b !important;\\n}'
);

// Make home-content-container margin-top larger so sky is fully visible
css = css.replace(
    /margin-top: 15vh !important;/g,
    'margin-top: 35vh !important;'
);

fs.writeFileSync('Mobile/css/styles.css', css);
console.log('CSS updated.');

// --- 2. JS UPDATES ---
let js = fs.readFileSync('Mobile/js/app.js', 'utf8');

// Inject the DOMContentLoaded script to restructure all headers globally
const headerFixScript = `
// Globally structure headers for inline toast and circular buttons
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.base-header').forEach(header => {
        // Add circular-btn class to all ghost-btns in headers globally
        header.querySelectorAll('.ghost-btn').forEach(btn => {
            if (!btn.classList.contains('circular-btn')) {
                btn.classList.add('circular-btn');
            }
        });
        
        // Skip if already has header-top-row (like home page)
        if (header.querySelector('.header-top-row')) return;
        
        const topRow = document.createElement('div');
        topRow.className = 'header-top-row';
        while (header.firstChild) {
            topRow.appendChild(header.firstChild);
        }
        header.appendChild(topRow);
        
        const toast = document.createElement('div');
        toast.className = 'header-toast-msg-inline';
        header.appendChild(toast);
    });
});
`;

if (!js.includes('Globally structure headers')) {
    js = headerFixScript + '\\n' + js;
}

// Update triggerPunchInToast to find the active header
const oldToastFnRegex = /function triggerPunchInToast\(\) \{[\s\S]*?\}, 4000\);\n\}/g;
const newToastFn = `function triggerPunchInToast() {
    // Find the currently active screen's header
    const activeScreen = document.querySelector('.screen[style*="display: block"]') || document.getElementById('home-screen');
    const header = activeScreen.querySelector('.base-header');
    if (!header) return;
    
    // Add glow and expand header
    header.classList.add('header-glow');
    header.classList.add('toast-expanded');
    
    const toast = header.querySelector('.header-toast-msg-inline');
    if (toast) {
        toast.innerHTML = '<iconify-icon icon="lucide:clock"></iconify-icon> Time to punch in!';
    }
    
    // Hide after 4 seconds
    setTimeout(() => {
        header.classList.remove('toast-expanded');
        header.classList.remove('header-glow');
    }, 4000);
}`;
js = js.replace(oldToastFnRegex, newToastFn);

// Revert image dissolve to simple change
const oldKeydownRegex = /document\.addEventListener\('keydown', function\(event\) \{[\s\S]*?\}\);/g;
const newKeydown = `document.addEventListener('keydown', function(event) {
    const bgElement = document.querySelector('.home-hero-bg');
    if (!bgElement) return;

    if (event.key === '1') {
        bgElement.style.backgroundImage = "url('images/home1.png')";
    } else if (event.key === '2') {
        bgElement.style.backgroundImage = "url('images/home2.png')";
    } else if (event.key === '3') {
        bgElement.style.backgroundImage = "url('images/home3.png')";
    } else if (event.key === '4') {
        triggerPunchInToast();
    }
});`;
js = js.replace(oldKeydownRegex, newKeydown);

fs.writeFileSync('Mobile/js/app.js', js);
console.log('JS updated.');
