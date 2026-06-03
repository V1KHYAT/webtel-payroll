const fs = require('fs');

// --- 1. UPDATE HTML ---
let html = fs.readFileSync('Mobile/index.html', 'utf8');

// Fix Mark Attendance Button
html = html.replace(
    '<button class="btn-primary btn-large btn-attendance">Mark Attendance</button>',
    '<button class="btn-primary btn-large btn-attendance" onclick="openBottomSheet(\\'attendance-map-sheet\\')" style="border-radius: 100px;">Mark Attendance</button>'
);

// Replace Leave Balance Card with the one from Leave Application
const newLeaveBalance = `
                            <!-- Data Card: Leave Status -->
                            <div class="data-card" style="margin-bottom: 16px;">
                                <div class="card-header">
                                    <span class="card-title">Leave Balance</span>
                                </div>
                                <div class="balance-readout">66.0 <span style="font-size: 0.4em; font-weight: 500; color: var(--color-text-secondary); text-transform: uppercase; letter-spacing: 0.05em; margin-left: 2px;">Days</span></div>
                                <div class="ledger-list">
                                    <div class="ledger-row">
                                        <span class="ledger-label">Casual Leave</span>
                                        <span class="ledger-value">6.00</span>
                                    </div>
                                    <div class="ledger-row">
                                        <span class="ledger-label">Privilege Leave</span>
                                        <span class="ledger-value">60.00</span>
                                    </div>
                                </div>
                            </div>
`;
const oldLeaveBalanceRegex = /<!-- Data Card: Leave Balance -->[\\s\\S]*?<div class="leave-balance-row">\\s*<span>Privilege Leave<\/span>\\s*<span class="val">60\.00<\/span>\\s*<\/div>\\s*<\/div>/;
html = html.replace(oldLeaveBalanceRegex, newLeaveBalance);

// Add inline toast container to home base header
const headerLeftRegex = /(<header class="base-header" id="home-base-header">)(\s*<div class="header-left">)/;
html = html.replace(headerLeftRegex, '$1\\n                            <div class="header-top-row" style="display: flex; justify-content: space-between; align-items: center; width: 100%;">$2');
// Close the header-top-row div before the end of header
html = html.replace(/(<span class="notification-dot"[^>]*><\/span>\s*<\/button>\s*)(<\/header>)/, '$1</div>\\n                            <div id="header-toast-msg-inline" class="header-toast-msg-inline"></div>\\n$2');

fs.writeFileSync('Mobile/index.html', html);
console.log('HTML updated.');


// --- 2. UPDATE CSS ---
let css = fs.readFileSync('Mobile/css/styles.css', 'utf8');

const additionalCSS = `
/* Header Inline Toast */
.base-header {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    overflow: hidden;
    flex-direction: column;
}
.header-top-row {
    transition: margin 0.3s ease;
}
.header-toast-msg-inline {
    width: 100%;
    text-align: center;
    font-size: 13px;
    font-weight: 600;
    color: #b45309; /* Darker amber */
    max-height: 0;
    opacity: 0;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    margin-top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
}
.base-header.toast-expanded .header-toast-msg-inline {
    max-height: 40px;
    opacity: 1;
    margin-top: 8px;
    margin-bottom: 4px;
}
.base-header.toast-expanded {
    border-radius: 24px;
}

/* Feed Icon Spacing Fix (Swiss Grid) */
.feed-icon {
    width: 36px;
    height: 36px;
    font-size: 16px;
    margin-right: 12px; /* reduced from typical larger margins */
}
.feed-item {
    gap: 0;
}

/* Fix circular-btn colors */
.circular-btn {
    background: #fef9c3 !important; /* very light yellow circle */
}
.base-header .ghost-btn.circular-btn iconify-icon,
.base-header .circular-btn iconify-icon,
.circular-btn iconify-icon {
    color: var(--color-accent) !important; /* yellow icon */
}

/* Swiss Grid Card standardization */
.custom-report-card, .data-card, .bento-box {
    border-radius: 20px;
    padding: 16px;
    margin-bottom: 16px;
}

/* Remove hard line on scroll by making home content transparent */
.home-content-container {
    background: transparent !important;
    box-shadow: none !important;
    padding: 24px 16px 280px 16px !important;
}
`;

if (!css.includes('.header-toast-msg-inline')) {
    css += '\\n' + additionalCSS;
    fs.writeFileSync('Mobile/css/styles.css', css);
    console.log('CSS updated.');
}


// --- 3. UPDATE JS ---
let js = fs.readFileSync('Mobile/js/app.js', 'utf8');

const oldToastRegex = /function triggerPunchInToast\(\) \{[\s\S]*?\}/;
const newToast = `function triggerPunchInToast() {
    const header = document.getElementById('home-base-header');
    if (!header) return;
    
    // Add glow and expand header
    header.classList.add('header-glow');
    header.classList.add('toast-expanded');
    
    const toast = document.getElementById('header-toast-msg-inline');
    if (toast) {
        toast.innerHTML = '<iconify-icon icon="lucide:clock"></iconify-icon> Time to punch in!';
    }
    
    // Hide after 4 seconds
    setTimeout(() => {
        header.classList.remove('toast-expanded');
        header.classList.remove('header-glow');
    }, 4000);
}`;

if (js.match(oldToastRegex)) {
    js = js.replace(oldToastRegex, newToast);
    fs.writeFileSync('Mobile/js/app.js', js);
    console.log('JS updated.');
}
