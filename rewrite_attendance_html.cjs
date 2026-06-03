const fs = require('fs');

let html = fs.readFileSync('Mobile/index.html', 'utf8');

// 1. Fix Header
const oldHeader = `                        <div class="base-header">
                            <button class="ghost-btn profile-ghost-btn" onclick="toggleSidebar()">
                                <iconify-icon icon="solar:hamburger-menu-bold"></iconify-icon>
                            </button>
                            <div class="profile-page-title" style="flex: 1; text-align: center;">Attendance</div>
                            <button class="ghost-btn profile-ghost-btn profile-bell" onclick="openBottomSheet('notifications-sheet')">
                                <iconify-icon icon="solar:bell-bing-bold"></iconify-icon>
                                <div class="notification-dot"></div>
                            </button>
                        </div>`;

const newHeader = `                        <header class="base-header">
                            <div class="header-left">
                                <button class="ghost-btn profile-ghost-btn" onclick="toggleSidebar()">
                                    <iconify-icon icon="solar:hamburger-menu-bold"></iconify-icon>
                                </button>
                                <h2 class="profile-page-title">Attendance Report</h2>
                            </div>
                            <button class="ghost-btn profile-ghost-btn profile-bell" onclick="openBottomSheet('notifications-sheet')">
                                <iconify-icon icon="solar:bell-bing-bold"></iconify-icon>
                                <span class="notification-dot"></span>
                            </button>
                        </header>`;

if (html.includes(oldHeader)) {
    html = html.replace(oldHeader, newHeader);
} else {
    // Fallback if formatting was shifted
    html = html.replace(/<div class="base-header">[\s\S]*?<div class="profile-page-title"[^>]*>Attendance<\/div>[\s\S]*?<\/div>/, newHeader);
}

// 2. Fix Report List
// I will just use regex to remove list-header-row and replace report-list content.
// Since the report list was injected by me and is very predictable:

const reportListRegex = /<!-- List Header -->\s*<div class="list-header-row">[\s\S]*?<\/div>\s*<!-- Report Items -->\s*<div class="report-list">[\s\S]*?<\/div>\s*<\/div>\s*<!-- TAB: LOGS -->/;

const newReportListHTML = `<!-- Report Items -->
                            <div class="report-list new-report-list">
                                <!-- Day 01 -->
                                <div class="report-card">
                                    <div class="rc-date">
                                        <span class="rc-day">FRI</span>
                                        <strong class="rc-num">01</strong>
                                        <span class="rc-month">May</span>
                                    </div>
                                    <div class="rc-divider">
                                        <div class="rc-dot"></div>
                                    </div>
                                    <div class="rc-context">
                                        <div class="rc-icon">
                                            <iconify-icon icon="solar:clock-circle-bold"></iconify-icon>
                                        </div>
                                        <div class="rc-text">
                                            <strong>Missed Attendance</strong>
                                            <span>No check-in recorded</span>
                                        </div>
                                    </div>
                                    <div class="rc-actions">
                                        <button class="rc-btn-leave">
                                            <iconify-icon icon="solar:calendar-add-bold"></iconify-icon> Apply Leave
                                        </button>
                                        <div class="rc-pill-absent">
                                            <div class="rc-dot-red"></div> Absent
                                        </div>
                                    </div>
                                </div>
                                
                                <!-- Day 02 -->
                                <div class="report-card">
                                    <div class="rc-date">
                                        <span class="rc-day">SAT</span>
                                        <strong class="rc-num">02</strong>
                                        <span class="rc-month">May</span>
                                    </div>
                                    <div class="rc-divider">
                                        <div class="rc-dot"></div>
                                    </div>
                                    <div class="rc-context">
                                        <div class="rc-icon">
                                            <iconify-icon icon="solar:clock-circle-bold"></iconify-icon>
                                        </div>
                                        <div class="rc-text">
                                            <strong>Missed Attendance</strong>
                                            <span>No check-in recorded</span>
                                        </div>
                                    </div>
                                    <div class="rc-actions">
                                        <button class="rc-btn-leave">
                                            <iconify-icon icon="solar:calendar-add-bold"></iconify-icon> Apply Leave
                                        </button>
                                        <div class="rc-pill-absent">
                                            <div class="rc-dot-red"></div> Absent
                                        </div>
                                    </div>
                                </div>
                                
                                <!-- Day 03 -->
                                <div class="report-card">
                                    <div class="rc-date">
                                        <span class="rc-day">SUN</span>
                                        <strong class="rc-num">03</strong>
                                        <span class="rc-month">May</span>
                                    </div>
                                    <div class="rc-divider">
                                        <div class="rc-dot"></div>
                                    </div>
                                    <div class="rc-context">
                                        <div class="rc-icon">
                                            <iconify-icon icon="solar:clock-circle-bold"></iconify-icon>
                                        </div>
                                        <div class="rc-text">
                                            <strong>Missed Attendance</strong>
                                            <span>No check-in recorded</span>
                                        </div>
                                    </div>
                                    <div class="rc-actions">
                                        <button class="rc-btn-leave">
                                            <iconify-icon icon="solar:calendar-add-bold"></iconify-icon> Apply Leave
                                        </button>
                                        <div class="rc-pill-absent">
                                            <div class="rc-dot-red"></div> Absent
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- TAB: LOGS -->`;

html = html.replace(reportListRegex, newReportListHTML);

fs.writeFileSync('Mobile/index.html', html);
console.log('Replaced HTML structure for attendance report');
