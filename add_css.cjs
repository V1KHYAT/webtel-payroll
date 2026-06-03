const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'Mobile', 'css', 'styles.css');
let css = fs.readFileSync(filePath, 'utf8');

// The new CSS to append
const newCss = `
/* ============================
   APP HEADER & TOAST (FROM SCRATCH)
   ============================ */

/* Wrapper */
.app-header-wrapper {
    position: relative; 
    z-index: 50;
    padding: 12px 16px 0 16px;
    flex-shrink: 0;
    width: 100%;
}

/* Home specific override to float over background */
.app-header-wrapper.home-header-wrapper {
    position: absolute; /* Actually let's use absolute relative to the screen */
    top: env(safe-area-inset-top, 14px);
    padding-top: 34px; 
    pointer-events: none; /* Let clicks pass through the wrapper */
}

/* The Pill */
.app-header-pill {
    position: relative;
    width: 100%;
    height: 56px;
    background: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
    border: 1px solid var(--color-border);
    border-radius: 100px;
    overflow: hidden;
    transition: background 0.3s ease, border-color 0.3s ease;
    pointer-events: auto; /* Re-enable clicks inside the pill */
    box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}

/* Default Content Layout */
.app-header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 0 6px;
    transition: opacity 0.3s ease, visibility 0.3s ease;
}

/* Buttons */
.app-header-btn {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    border: none;
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--color-text);
    font-size: 20px;
    cursor: pointer;
    position: relative;
}

/* Specific Notification Dot */
.app-header-dot {
    position: absolute;
    top: 10px;
    right: 12px;
    width: 8px;
    height: 8px;
    background: #ef4444;
    border: 2px solid white;
    border-radius: 50%;
}

/* Greeting Text */
.app-header-greeting {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    flex: 1;
    padding: 0 12px;
}
.app-header-greeting h1 {
    font-size: 14px;
    font-weight: 600;
    color: var(--color-text);
    line-height: 1.2;
    margin: 0;
}
.app-header-greeting span {
    font-size: 12px;
    font-weight: 500;
    color: var(--color-text-secondary);
    line-height: 1.2;
}

/* Toast State */
.app-header-toast {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    color: white;
    font-weight: 600;
    font-size: 16px;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;
}
.app-header-toast iconify-icon {
    font-size: 20px;
}

/* Active Animation State */
.app-header-pill.is-toast-active {
    background: var(--color-accent) !important;
    border-color: var(--color-accent) !important;
}
.app-header-pill.is-toast-active .app-header-content {
    opacity: 0;
    visibility: hidden;
}
.app-header-pill.is-toast-active .app-header-toast {
    opacity: 1;
    visibility: visible;
}
.app-header-pill.is-toast-active .app-header-dot {
    border-color: var(--color-accent); /* Blend border with yellow bg if needed, though hidden anyway */
}
`;

css += newCss;
fs.writeFileSync(filePath, css);
console.log('Successfully added new CSS.');
