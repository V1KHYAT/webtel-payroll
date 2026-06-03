const fs = require('fs');
const path = require('path');

// 1. Fix gap on Home Page
const cssPath = path.join(__dirname, 'Mobile', 'css', 'styles.css');
let css = fs.readFileSync(cssPath, 'utf8');

// Increase padding-top for home-header-wrapper
css = css.replace(/padding-top:\s*34px;/, 'padding-top: 48px;');

fs.writeFileSync(cssPath, css);
console.log('CSS home gap fixed.');

// 2. Fix JS for triggerPunchInToast
const jsPath = path.join(__dirname, 'Mobile', 'js', 'app.js');
let js = fs.readFileSync(jsPath, 'utf8');

// Completely replace triggerPunchInToast to be bulletproof
const newJS = `function triggerPunchInToast() {
    console.log("triggerPunchInToast called!");
    // Find ALL active screens just in case there are multiple or an issue
    const activeScreens = document.querySelectorAll('.screen.active');
    let triggered = false;
    
    activeScreens.forEach(screen => {
        const header = screen.querySelector('.app-header-pill');
        if (header) {
            console.log("Header pill found in screen " + screen.id + ", adding is-toast-active class.");
            header.classList.add('is-toast-active');
            triggered = true;
            
            // Hide after 4 seconds
            setTimeout(() => {
                header.classList.remove('is-toast-active');
            }, 4000);
        }
    });
    
    if (!triggered) {
        // Fallback: If no active screen had a header, just try to find the home screen header explicitly
        console.log("Fallback: trying home screen explicitly");
        const homeScreen = document.getElementById('home-screen');
        if (homeScreen) {
            const header = homeScreen.querySelector('.app-header-pill');
            if (header) {
                header.classList.add('is-toast-active');
                setTimeout(() => {
                    header.classList.remove('is-toast-active');
                }, 4000);
            }
        }
    }
}`;

js = js.replace(/function triggerPunchInToast\(\) \{[\s\S]*?setTimeout\([\s\S]*?4000\);\s*\}\s*\}/, newJS);

fs.writeFileSync(jsPath, js);
console.log('JS bulletproofed.');
