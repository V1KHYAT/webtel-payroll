const fs = require('fs');

let css = fs.readFileSync('Mobile/css/styles.css', 'utf8');

// Remove the entire hotfix block
const hotfixStart = css.indexOf('/* FIX FOR TABS CONTAINERS UNDER ABSOLUTE HEADERS */');
if (hotfixStart !== -1) {
    css = css.substring(0, hotfixStart);
    fs.writeFileSync('Mobile/css/styles.css', css);
    console.log("Removed tabs CSS hotfix.");
}

let html = fs.readFileSync('Mobile/index.html', 'utf8');

// 1. Move Attendance Tabs
const attTabsHtml = `                    <div class="tabs-container">
                        <button class="tab-btn active" onclick="switchAttendanceTab('reports')">Reports</button>
                        <button class="tab-btn" onclick="switchAttendanceTab('logs')">Logs</button>
                    </div>`;

if (html.includes(attTabsHtml)) {
    html = html.replace(attTabsHtml, '');
    const attMainTarget = `id="attendance-screen" class="screen app-layout">`;
    const attMainStart = html.indexOf('<main class="scrollable-cards">', html.indexOf(attMainTarget));
    if (attMainStart !== -1) {
        html = html.substring(0, attMainStart + 31) + '\\n' + attTabsHtml + html.substring(attMainStart + 31);
    }
}

// 2. Move Leave Tabs
const leaveTabsHtml = `                    <div class="tabs-container">
                        <button class="tab-btn active" onclick="switchLeaveTab('leave')">Leave</button>
                        <button class="tab-btn" onclick="switchLeaveTab('od')">OD/TourPunch</button>
                    </div>`;

if (html.includes(leaveTabsHtml)) {
    html = html.replace(leaveTabsHtml, '');
    const leaveMainTarget = `id="leave-screen" class="screen app-layout">`;
    const leaveMainStart = html.indexOf('<main class="scrollable-cards">', html.indexOf(leaveMainTarget));
    if (leaveMainStart !== -1) {
        html = html.substring(0, leaveMainStart + 31) + '\\n' + leaveTabsHtml + html.substring(leaveMainStart + 31);
    }
}

// Bump cache
html = html.replace(/v=28/g, 'v=29');
fs.writeFileSync('Mobile/index.html', html);

console.log("Moved tabs inside scrollable cards!");
