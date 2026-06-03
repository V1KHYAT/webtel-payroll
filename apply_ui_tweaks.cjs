const fs = require('fs');

// 1. Update styles.css
let css = fs.readFileSync('Mobile/css/styles.css', 'utf8');

// Add margin-top to tabs-container
css = css.replace(
    /\.tabs-container\s*\{\s*display:\s*flex;\s*margin:\s*0\s*var\(--space-4\)\s*var\(--space-4\);/,
    '.tabs-container {\n    display: flex;\n    margin: 16px var(--space-4) var(--space-4);'
);

// Add textarea padding-top
if (!css.includes('textarea.form-input')) {
    css += '\ntextarea.form-input { padding-top: 14px !important; }\n';
}

fs.writeFileSync('Mobile/css/styles.css', css);

// 2. Update index.html
let html = fs.readFileSync('Mobile/index.html', 'utf8');

// Subheadings for Profile
html = html.replace(
    /<h2 class="profile-page-title">Profile<\/h2>/,
    `<div class="user-greeting">\n                                    <h1>Profile</h1>\n                                    <span>Your details</span>\n                                </div>`
);

// Subheadings for Attendance
html = html.replace(
    /<h2 class="profile-page-title">Attendance Report<\/h2>/,
    `<div class="user-greeting">\n                                    <h1>Attendance</h1>\n                                    <span>History & Logs</span>\n                                </div>`
);

// Fix Leave Screen tabs-container (move outside fixed-base)
// Right now it's:
// </header>
// <div class="tabs-container" style="...">
//     <button class="tab-btn active" onclick="switchLeaveTab('leave')" style="...">... Leave</button>
//     <button class="tab-btn" onclick="switchLeaveTab('od')" style="...">... OD/TourPunch</button>
// </div>
// </div>
//
// <!-- SCROLLABLE CARDS LAYER -->
// <main class="scrollable-cards">

const leaveTabsRegex = /<\/header>\s*<div class="tabs-container" style="[^"]*">\s*<button class="tab-btn active" onclick="switchLeaveTab\('leave'\)" style="[^"]*">\s*<iconify-icon icon="solar:user-bold" style="[^"]*"><\/iconify-icon> Leave\s*<\/button>\s*<button class="tab-btn" onclick="switchLeaveTab\('od'\)" style="[^"]*">\s*<iconify-icon icon="solar:buildings-bold" style="[^"]*"><\/iconify-icon> OD\/TourPunch\s*<\/button>\s*<\/div>\s*<\/div>/;

const newLeaveTabs = `</header>
                    </div>

                    <div class="tabs-container">
                        <button class="tab-btn active" onclick="switchLeaveTab('leave')">Leave</button>
                        <button class="tab-btn" onclick="switchLeaveTab('od')">OD/TourPunch</button>
                    </div>`;

if (html.match(leaveTabsRegex)) {
    html = html.replace(leaveTabsRegex, newLeaveTabs);
} else {
    console.log('Leave tabs regex failed.');
}

// Replace Leave Balance Card
const oldLeaveBalanceRegex = /<!-- Leave Balance Widget -->\s*<div class="attendance-widget" style="padding: 16px; align-items: stretch; text-align: left; margin-bottom: 16px;">[\s\S]*?Privilege Leave<\/span>\s*<span style="color: var\(--color-text\);">60\.00<\/span>\s*<\/div>\s*<\/div>/;

const newLeaveBalance = `<!-- Data Card: Leave Status -->
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
                            </div>`;

if (html.match(oldLeaveBalanceRegex)) {
    html = html.replace(oldLeaveBalanceRegex, newLeaveBalance);
} else {
    console.log('Leave balance regex failed.');
}

fs.writeFileSync('Mobile/index.html', html);
console.log('UI Tweaks applied successfully.');
