const fs = require('fs');

let css = fs.readFileSync('Mobile/css/styles.css', 'utf8');

const newCSS = `
/* Header Glow & Toast Animation */
@keyframes pulseGlow {
    0% { box-shadow: 0 0 8px #eab308; }
    50% { box-shadow: 0 0 20px #eab308; }
    100% { box-shadow: 0 0 8px #eab308; }
}

.base-header.header-glow {
    animation: pulseGlow 1.5s infinite;
    border-color: #eab308;
}

.header-toast {
    position: absolute;
    bottom: -35px;
    left: 50%;
    transform: translateX(-50%);
    background: #1e293b;
    color: #fff;
    padding: 6px 16px;
    border-radius: 20px;
    font-size: 13px;
    font-weight: 600;
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s, transform 0.3s;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    z-index: 100;
}

.header-toast.show {
    opacity: 1;
    transform: translate(-50%, -5px);
}
`;

if (!css.includes('pulseGlow')) {
    css += newCSS;
    fs.writeFileSync('Mobile/css/styles.css', css);
    console.log('CSS updated for glow and toast.');
}

let js = fs.readFileSync('Mobile/js/app.js', 'utf8');

const newJS = `
// Keyboard event listener for changing home backgrounds and triggering toast
document.addEventListener('keydown', function(event) {
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
});

function triggerPunchInToast() {
    const header = document.getElementById('home-base-header');
    if (!header) return;
    
    // Add glow
    header.classList.add('header-glow');
    
    // Check if toast exists, if not create it
    let toast = document.getElementById('header-toast-msg');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'header-toast-msg';
        toast.className = 'header-toast';
        toast.innerHTML = 'â° Time to punch in!';
        header.appendChild(toast);
    }
    
    // Show toast
    setTimeout(() => {
        toast.classList.add('show');
    }, 50);
    
    // Hide after 4 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        header.classList.remove('header-glow');
    }, 4000);
}
`;

if (!js.includes('triggerPunchInToast')) {
    js += newJS;
    fs.writeFileSync('Mobile/js/app.js', js);
    console.log('JS updated for keyboard events.');
}
