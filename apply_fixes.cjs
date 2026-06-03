const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'Mobile', 'css', 'styles.css');
let css = fs.readFileSync(cssPath, 'utf8');

// Fix 1: Gap in status bar
// We will add margin-top to .app-header-wrapper
css = css.replace(/\.app-header-wrapper\s*\{[^}]*\}/, `.app-header-wrapper {
    position: relative; 
    z-index: 50;
    padding: 12px 16px 0 16px;
    margin-top: 16px; /* Added gap */
    flex-shrink: 0;
    width: 100%;
}`);

// Wait, home-header-wrapper has position absolute and top: 14px; padding-top: 34px. We don't want margin-top to mess it up, but it will just add to it. Let's reset margin-top for home:
css = css.replace(/\.app-header-wrapper\.home-header-wrapper\s*\{[^}]*\}/, `.app-header-wrapper.home-header-wrapper {
    position: absolute; 
    top: env(safe-area-inset-top, 14px);
    padding-top: 34px; 
    margin-top: 0; /* Reset gap for home since it uses top/padding */
    pointer-events: none;
}`);

// Fix 2: Yellow behind icons
css = css.replace(/\.app-header-btn\s*\{[^}]*\}/, `.app-header-btn {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    border: none;
    background: var(--color-accent) !important;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #1e293b !important;
    font-size: 20px;
    cursor: pointer;
    position: relative;
}`);

// Also fix the dot border to match the yellow button background instead of white
css = css.replace(/border: 2px solid white;/, 'border: 2px solid var(--color-accent);');

fs.writeFileSync(cssPath, css);
console.log('CSS fixes applied.');

// Fix 3: Pressing 4 doing nothing
// Let's add console logs to app.js to trace
const jsPath = path.join(__dirname, 'Mobile', 'js', 'app.js');
let js = fs.readFileSync(jsPath, 'utf8');

js = js.replace(/function triggerPunchInToast\(\) \{[\s\S]*?setTimeout\([\s\S]*?4000\);\s*\}/, `function triggerPunchInToast() {
    console.log("triggerPunchInToast called!");
    // Find the currently active screen's header pill
    const activeScreen = document.querySelector('.screen.active');
    if (!activeScreen) {
        console.log("No active screen found!");
        return;
    }
    const header = activeScreen.querySelector('.app-header-pill');
    if (!header) {
        console.log("No header pill found in active screen!");
        return;
    }
    
    console.log("Header pill found, adding is-toast-active class.");
    header.classList.add('is-toast-active');
    
    // Hide after 4 seconds
    setTimeout(() => {
        console.log("Removing is-toast-active class.");
        header.classList.remove('is-toast-active');
    }, 4000);
}`);

fs.writeFileSync(jsPath, js);
console.log('JS fixes applied.');
