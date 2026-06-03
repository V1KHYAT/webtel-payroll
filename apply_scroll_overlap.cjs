const fs = require('fs');

let css = fs.readFileSync('Mobile/css/styles.css', 'utf8');

const scrollOverlapCSS = `
/* ========================================================
   OVERLAPPING HEADER SCROLL EFFECT
   ======================================================== */

/* HOME PAGE SCROLL EFFECT */
.home-header-wrapper {
    transition: background 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.home-header-wrapper.scrolled-header-wrapper {
    /* 76px covers the padding-top (48px) + half of the pill height (28px) */
    background: linear-gradient(to bottom, #ffffff 76px, transparent 76px);
}

/* NON-HOME PAGES ABSOLUTE LAYOUT */
.screen:not(#home-screen) .status-bar-dummy {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 60;
    background: #f9fafb;
}

.screen:not(#home-screen) .app-header-wrapper {
    position: absolute;
    top: 40px; /* roughly below status bar */
    left: 0;
    width: 100%;
    z-index: 50;
    /* 40px covers padding-top (12px) + half of the pill height (28px) */
    background: linear-gradient(to bottom, #f9fafb 40px, transparent 40px);
    pointer-events: none;
    margin-top: 0 !important; 
}

.screen:not(#home-screen) .app-header-wrapper .app-header-pill {
    pointer-events: auto;
}

.screen:not(#home-screen) .scrollable-cards {
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
    width: 100% !important;
    height: 100% !important;
    /* push content down past the 40px status bar + 68px wrapper = 108px */
    padding-top: 108px !important;
    margin-top: 0 !important;
    padding-bottom: 80px !important; /* ensure bottom space for tabs */
}
`;

if (!css.includes('OVERLAPPING HEADER SCROLL EFFECT')) {
    css += '\n' + scrollOverlapCSS;
    fs.writeFileSync('Mobile/css/styles.css', css);
    console.log('Scroll overlap CSS applied.');
} else {
    console.log('Already applied.');
}
