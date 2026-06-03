const fs = require('fs');

let css = fs.readFileSync('Mobile/css/styles.css', 'utf8');

if (!css.includes('.success-toast')) {
    css += `\n/* Success Toast Override */
.app-header-pill.is-toast-active.success-toast {
    background: #10b981 !important;
    border-color: #10b981 !important;
}
`;
    fs.writeFileSync('Mobile/css/styles.css', css);
}

let js = fs.readFileSync('Mobile/js/app.js', 'utf8');

if (!js.includes('submitAction')) {
    const jsAddition = `\n// --- SUCCESS TOAST ACTION ---
window.submitAction = function(btnElement, successMessage) {
    const originalText = btnElement.innerHTML;
    btnElement.innerHTML = '<iconify-icon icon="lucide:loader-2" style="animation: spin 1s linear infinite; font-size: 20px;"></iconify-icon> Processing...';
    btnElement.style.opacity = '0.8';
    btnElement.style.pointerEvents = 'none';
    
    setTimeout(() => {
        btnElement.innerHTML = originalText;
        btnElement.style.opacity = '1';
        btnElement.style.pointerEvents = 'auto';
        
        const activeScreen = document.querySelector('.screen.active');
        if (!activeScreen) return;
        
        const headerPill = activeScreen.querySelector('.app-header-pill');
        const toast = activeScreen.querySelector('.app-header-toast');
        if (headerPill && toast) {
            toast.innerHTML = '<iconify-icon icon="lucide:check-circle" style="font-size: 20px;"></iconify-icon><span>' + successMessage + '</span>';
            
            headerPill.classList.add('success-toast');
            headerPill.classList.add('is-toast-active');
            
            setTimeout(() => {
                headerPill.classList.remove('is-toast-active');
                setTimeout(() => {
                    headerPill.classList.remove('success-toast');
                    if(window.goToScreen) {
                        goToScreen('home-screen');
                    }
                }, 300);
            }, 2500);
        }
    }, 1200);
};
`;
    js += jsAddition;
    fs.writeFileSync('Mobile/js/app.js', js);
}

console.log('Appended JS and CSS!');
