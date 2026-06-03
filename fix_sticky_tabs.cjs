const fs = require('fs');

let html = fs.readFileSync('Mobile/index.html', 'utf8');

// 1. Remove the literal '\n'
html = html.replace(/<main class="scrollable-cards">\\n/g, '<main class="scrollable-cards">');

// 2. Move tabs into app-header-wrapper
function moveTabsIntoWrapper(screenId) {
    const screenStart = html.indexOf(`id="${screenId}"`);
    if (screenStart === -1) return;
    
    const wrapperStart = html.indexOf('<div class="app-header-wrapper">', screenStart);
    const wrapperEnd = html.indexOf('</div>', html.indexOf('</header>', wrapperStart));
    
    // Find the tabs-container for this screen
    const tabsStart = html.indexOf('<div class="tabs-container">', screenStart);
    if (tabsStart === -1) return; // already moved maybe
    const tabsEnd = html.indexOf('</div>', html.indexOf('</button>', tabsStart + 30)) + 6;
    
    const tabsHtml = html.substring(tabsStart, tabsEnd);
    
    // Remove tabs from original location
    html = html.substring(0, tabsStart) + html.substring(tabsEnd);
    
    // Re-calculate wrapper end because string length changed
    const newWrapperStart = html.indexOf('<div class="app-header-wrapper">', screenStart);
    let newWrapperEnd = html.indexOf('</header>', newWrapperStart);
    // find the closing div of app-header-wrapper. It's the next </div> after </header>
    newWrapperEnd = html.indexOf('</div>', newWrapperEnd) + 6;
    
    // Insert tabs inside the wrapper, right before the closing </div>
    html = html.substring(0, newWrapperEnd - 6) + '\\n' + tabsHtml + '\\n' + html.substring(newWrapperEnd - 6);
}

moveTabsIntoWrapper('attendance-screen');
moveTabsIntoWrapper('leave-screen');

// Bump cache
html = html.replace(/v=29/g, 'v=30');
fs.writeFileSync('Mobile/index.html', html);

let css = fs.readFileSync('Mobile/css/styles.css', 'utf8');

// 3. Update CSS for solid sticky header and pill tabs
const newCSS = `
/* OVERRIDE HEADER WRAPPER FOR SOLID STICKY BACKGROUND */
.screen:not(#home-screen) .app-header-wrapper {
    position: absolute;
    top: 0 !important;
    left: 0;
    width: 100%;
    z-index: 50;
    background: #f9fafb !important; /* Solid masking background */
    padding: 52px 16px 16px 16px !important; /* Top covers status bar */
    pointer-events: none;
    margin-top: 0 !important;
}

/* TABS CONTAINER STYLING */
.tabs-container {
    display: flex;
    margin: 16px 0 0 0 !important; /* Same width as pill */
    background: transparent !important;
    border-radius: var(--radius-full);
    padding: 0 !important;
    pointer-events: auto;
}
.tab-btn {
    flex: 1;
    text-align: center;
    padding: 12px 0 !important;
    font-size: var(--text-sm);
    font-weight: 600;
    color: var(--color-text-tertiary) !important;
    background: transparent !important;
    border: none;
    border-radius: var(--radius-full) !important;
    cursor: pointer;
    transition: all 0.2s ease;
}
.tab-btn.active {
    background: #ffffff !important;
    color: var(--color-text) !important;
    box-shadow: 0 4px 16px rgba(0,0,0,0.06) !important; /* Subtle drop shadow from screenshot */
}

/* Scrollable cards padding for screens with tabs */
#attendance-screen .scrollable-cards,
#leave-screen .scrollable-cards {
    padding-top: 190px !important;
}
`;

css += '\\n' + newCSS;
fs.writeFileSync('Mobile/css/styles.css', css);

console.log("Fixed sticky tabs, widths, and literal \\n!");
