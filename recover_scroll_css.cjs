const fs = require('fs');
let css = fs.readFileSync('Mobile/css/styles.css', 'utf8');

const missingCSS = `
.home-hero-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 45vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: 0;
}

.home-fixed-header {
    position: absolute;
    top: env(safe-area-inset-top, 44px);
    left: 0;
    width: 100%;
    z-index: 10;
    padding: 0 16px;
}

.base-header.transparent-header {
    background: transparent;
    box-shadow: none;
    border-bottom: none;
    padding: 8px 0;
}

.circular-btn {
    background: #ffffff !important;
    border-radius: 50% !important;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}

.user-greeting.dark-text h1, .user-greeting.dark-text span {
    color: #1e293b;
}

.home-scroll-content {
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
    width: 100% !important;
    bottom: 0 !important;
    padding: 0 !important;
    overflow-y: auto;
    z-index: 5 !important;
}
`;

if (!css.includes('.home-scroll-content')) {
    css += '\n' + missingCSS;
    fs.writeFileSync('Mobile/css/styles.css', css);
    console.log('Restored home-scroll-content and other top CSS');
} else {
    console.log('It is already there.');
}
