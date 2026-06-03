const fs = require('fs');
let css = fs.readFileSync('Mobile/css/styles.css', 'utf8');

const newCSS = `
/* =========================================
   CUSTOM REPORT CARDS (Image Refs)
   ========================================= */
.custom-report-card {
    background: #ffffff;
    border-radius: 16px;
    padding: 20px;
    margin-bottom: 16px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.03);
    border: 1px solid var(--color-border);
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
}

.custom-report-card::before {
    content: '';
    position: absolute;
    left: 0;
    top: 20px;
    bottom: 20px;
    width: 4px;
    border-radius: 0 4px 4px 0;
}

.crc-red::before { background-color: #ef4444; }
.crc-yellow::before { background-color: #f59e0b; }
.crc-green::before { background-color: #10b981; }
.crc-blue::before { background-color: #3b82f6; }

.crc-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 20px;
}

.crc-header-left {
    display: flex;
    align-items: center;
    gap: 16px;
}

.crc-icon-box {
    width: 48px;
    height: 48px;
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
}
.crc-icon-box.red { background: #fee2e2; color: #ef4444; }
.crc-icon-box.yellow { background: #fef3c7; color: #f59e0b; }
.crc-icon-box.green { background: #d1fae5; color: #10b981; }
.crc-icon-box.blue { background: #dbeafe; color: #3b82f6; }

.crc-title {
    font-size: 16px;
    font-weight: 700;
    color: #0f172a;
    margin-bottom: 4px;
}

.crc-subtitle {
    font-size: 13px;
    font-weight: 500;
    color: #64748b;
}

.crc-pill {
    padding: 6px 14px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 700;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}
.crc-pill.yellow { background: #fef9c3; color: #ca8a04; }
.crc-pill.red { background: #fee2e2; color: #ef4444; }
.crc-pill.green { background: #dcfce7; color: #16a34a; }
.crc-pill.blue { background: #dbeafe; color: #2563eb; }

.crc-pill-sub {
    font-size: 10px;
    font-weight: 500;
    margin-top: 2px;
    opacity: 0.8;
}

.crc-data-box {
    border-radius: 12px;
    padding: 16px;
    display: flex;
    gap: 24px;
}
.crc-data-box.yellow { background: #fffbeb; }
.crc-data-box.red { background: #fff1f2; }
.crc-data-box.gray { background: #fbf9f6; }

.crc-data-col {
    display: flex;
    flex-direction: column;
    gap: 6px;
}

.crc-data-col.border-right {
    border-right: 1px solid rgba(0,0,0,0.05);
    padding-right: 24px;
}

.crc-data-label {
    font-size: 11px;
    font-weight: 500;
    color: #64748b;
}

.crc-data-value {
    font-size: 13px;
    font-weight: 600;
    color: #0f172a;
}

.crc-alert-box {
    background: #fff1f2;
    border-radius: 12px;
    padding: 12px 16px;
    display: flex;
    align-items: center;
    gap: 12px;
    margin-top: 12px;
}
.crc-alert-box.yellow { background: #fffbeb; }

.crc-alert-text {
    font-size: 12px;
    color: #7f1d1d;
    font-weight: 500;
}
.crc-alert-text.yellow { color: #92400e; }

.crc-actions {
    margin-top: 16px;
    padding-top: 16px;
    border-top: 1px solid var(--color-border);
    display: flex;
    justify-content: flex-end;
}

.crc-btn-delete {
    background: transparent;
    border: none;
    color: #ef4444;
    font-size: 14px;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
}
`;

if (!css.includes('.custom-report-card')) {
    css += '\n' + newCSS;
    fs.writeFileSync('Mobile/css/styles.css', css);
}

// Now replace HTML for OD Tour and Applied Leave Report screens
let html = fs.readFileSync('Mobile/index.html', 'utf8');

const odTourHTML = `<!-- ==========================================
                     OD TOUR MISPUNCH REPORT SCREEN
                     ========================================== -->
                <div id="od-tour-report-screen" class="screen app-layout">
                    <div class="status-bar-dummy" aria-hidden="true">
                        <span class="status-time">9:41</span>
                        <div class="status-icons">
                            <iconify-icon icon="solar:tag-bold"></iconify-icon>
                            <iconify-icon icon="solar:wi-fi-router-minimalistic-bold"></iconify-icon>
                            <iconify-icon icon="solar:battery-full-bold"></iconify-icon>
                        </div>
                    </div>
                    <div class="fixed-base">
                        <header class="base-header">
                            <div class="header-left">
                                <button class="ghost-btn" onclick="toggleSidebar()">
                                    <iconify-icon icon="solar:hamburger-menu-bold"></iconify-icon>
                                </button>
                                <div class="user-greeting">
                                    <h1>OD Tour Mispunch</h1>
                                    <span>History & Status</span>
                                </div>
                            </div>
                        </header>
                    </div>
                    <main class="scrollable-cards" style="padding: 24px 16px;">
                        
                        <!-- Card 1 -->
                        <div class="custom-report-card crc-yellow">
                            <div class="crc-header">
                                <div class="crc-header-left">
                                    <div>
                                        <div class="crc-title">Work From Home</div>
                                        <div class="crc-subtitle">Applied on 27 Mar 2026</div>
                                    </div>
                                </div>
                                <div class="crc-pill yellow">Pending</div>
                            </div>
                            
                            <div class="crc-data-box yellow" style="margin-bottom: 20px;">
                                <div class="crc-data-col border-right" style="flex: 1;">
                                    <span class="crc-data-label">Date</span>
                                    <span class="crc-data-value">10 Mar 2026</span>
                                </div>
                                <div class="crc-data-col border-right" style="flex: 1.5;">
                                    <span class="crc-data-label">Time</span>
                                    <span class="crc-data-value">09:00 AM – 06:00 PM</span>
                                </div>
                                <div class="crc-data-col" style="flex: 1;">
                                    <span class="crc-data-label">Remarks</span>
                                    <span class="crc-data-value">rtghrg</span>
                                </div>
                            </div>
                            
                            <div style="border-top: 1px solid var(--color-border); padding-top: 16px; display: flex; justify-content: flex-end;">
                                <button class="crc-btn-delete">
                                    <iconify-icon icon="solar:trash-bin-trash-linear" style="font-size: 18px;"></iconify-icon> Delete
                                </button>
                            </div>
                        </div>

                        <!-- Card 2 -->
                        <div class="custom-report-card crc-red">
                            <div class="crc-header">
                                <div class="crc-header-left">
                                    <div>
                                        <div class="crc-title">OD</div>
                                        <div class="crc-subtitle">Applied on 07 Jan 2026</div>
                                    </div>
                                </div>
                                <div class="crc-pill red">
                                    <span>Rejected</span>
                                    <span class="crc-pill-sub">by Sanction Authority</span>
                                </div>
                            </div>
                            
                            <div class="crc-data-box red">
                                <div class="crc-data-col border-right" style="flex: 1;">
                                    <span class="crc-data-label">Date</span>
                                    <span class="crc-data-value">07 Jan 2026</span>
                                </div>
                                <div class="crc-data-col border-right" style="flex: 1.5;">
                                    <span class="crc-data-label">Time</span>
                                    <span class="crc-data-value">10:48 AM – 08:48 PM</span>
                                </div>
                                <div class="crc-data-col" style="flex: 1;">
                                    <span class="crc-data-label">Remarks</span>
                                    <span class="crc-data-value">dr</span>
                                </div>
                            </div>
                            
                            <div class="crc-alert-box">
                                <iconify-icon icon="solar:info-circle-linear" style="color: #ef4444; font-size: 20px;"></iconify-icon>
                                <span class="crc-alert-text">Your request has been rejected by the sanction authority.</span>
                            </div>
                            
                            <div style="border-top: 1px solid var(--color-border); padding-top: 16px; margin-top: 16px; display: flex; justify-content: flex-end;">
                                <button class="crc-btn-delete">
                                    <iconify-icon icon="solar:trash-bin-trash-linear" style="font-size: 18px;"></iconify-icon> Delete
                                </button>
                            </div>
                        </div>

                    </main>
                </div>`;

const appliedLeavesHTML = `<!-- ==========================================
                     APPLIED LEAVES REPORT SCREEN
                     ========================================== -->
                <div id="applied-leave-report-screen" class="screen app-layout">
                    <div class="status-bar-dummy" aria-hidden="true">
                        <span class="status-time">9:41</span>
                        <div class="status-icons">
                            <iconify-icon icon="solar:tag-bold"></iconify-icon>
                            <iconify-icon icon="solar:wi-fi-router-minimalistic-bold"></iconify-icon>
                            <iconify-icon icon="solar:battery-full-bold"></iconify-icon>
                        </div>
                    </div>
                    <div class="fixed-base">
                        <header class="base-header">
                            <div class="header-left">
                                <button class="ghost-btn" onclick="toggleSidebar()">
                                    <iconify-icon icon="solar:hamburger-menu-bold"></iconify-icon>
                                </button>
                                <div class="user-greeting">
                                    <h1>Applied Leave Report</h1>
                                    <span>History & Status</span>
                                </div>
                            </div>
                        </header>
                    </div>
                    <main class="scrollable-cards" style="padding: 24px 16px;">
                        
                        <!-- Card 1 -->
                        <div class="custom-report-card crc-red">
                            <div class="crc-header">
                                <div class="crc-header-left">
                                    <div class="crc-icon-box red"><iconify-icon icon="solar:case-minimalistic-bold"></iconify-icon></div>
                                    <div>
                                        <div class="crc-title">Compensatory Off</div>
                                        <div class="crc-subtitle">10 Days</div>
                                    </div>
                                </div>
                                <div class="crc-pill red">
                                    <span>Rejected</span>
                                    <span class="crc-pill-sub">by Manager</span>
                                </div>
                            </div>
                            <div class="crc-data-box gray">
                                <div class="crc-data-col border-right" style="flex: 1;">
                                    <span class="crc-data-label">Duration</span>
                                    <span class="crc-data-value">14 Jan 2026 – 14 Jan 2026</span>
                                </div>
                                <div class="crc-data-col" style="flex: 1;">
                                    <span class="crc-data-label">Remarks</span>
                                    <span class="crc-data-value">djdjjf</span>
                                </div>
                            </div>
                        </div>

                        <!-- Card 2 -->
                        <div class="custom-report-card crc-yellow">
                            <div class="crc-header">
                                <div class="crc-header-left">
                                    <div class="crc-icon-box yellow"><iconify-icon icon="solar:umbrella-bold"></iconify-icon></div>
                                    <div>
                                        <div class="crc-title">Casual Leave</div>
                                        <div class="crc-subtitle">10 Days</div>
                                    </div>
                                </div>
                                <div class="crc-pill red">
                                    <span>Rejected</span>
                                    <span class="crc-pill-sub">by HR</span>
                                </div>
                            </div>
                            <div class="crc-data-box gray">
                                <div class="crc-data-col border-right" style="flex: 1;">
                                    <span class="crc-data-label">Duration</span>
                                    <span class="crc-data-value">13 Jan 2026 – 13 Jan 2026</span>
                                </div>
                                <div class="crc-data-col" style="flex: 1;">
                                    <span class="crc-data-label">Remarks</span>
                                    <span class="crc-data-value">djjdjf</span>
                                </div>
                            </div>
                        </div>

                        <!-- Card 3 -->
                        <div class="custom-report-card crc-green">
                            <div class="crc-header">
                                <div class="crc-header-left">
                                    <div class="crc-icon-box green"><iconify-icon icon="solar:suitcase-bold"></iconify-icon></div>
                                    <div>
                                        <div class="crc-title">Privilege Leave</div>
                                        <div class="crc-subtitle">10 Days</div>
                                    </div>
                                </div>
                                <div class="crc-pill green">
                                    <span>Approved</span>
                                    <span class="crc-pill-sub">by Manager</span>
                                </div>
                            </div>
                            <div class="crc-data-box gray">
                                <div class="crc-data-col border-right" style="flex: 1;">
                                    <span class="crc-data-label">Duration</span>
                                    <span class="crc-data-value">03 Jan 2026 – 03 Jan 2026</span>
                                </div>
                                <div class="crc-data-col" style="flex: 1;">
                                    <span class="crc-data-label">Remarks</span>
                                    <span class="crc-data-value">ggvv</span>
                                </div>
                            </div>
                        </div>

                        <!-- Card 4 -->
                        <div class="custom-report-card crc-blue">
                            <div class="crc-header">
                                <div class="crc-header-left">
                                    <div class="crc-icon-box blue"><iconify-icon icon="solar:clock-circle-bold"></iconify-icon></div>
                                    <div>
                                        <div class="crc-title">Earned Leave</div>
                                        <div class="crc-subtitle">5 Days</div>
                                    </div>
                                </div>
                                <div class="crc-pill blue">
                                    <span>Pending</span>
                                    <span class="crc-pill-sub">with HR</span>
                                </div>
                            </div>
                            <div class="crc-data-box gray">
                                <div class="crc-data-col border-right" style="flex: 1;">
                                    <span class="crc-data-label">Duration</span>
                                    <span class="crc-data-value">20 Jan 2026 – 24 Jan 2026</span>
                                </div>
                                <div class="crc-data-col" style="flex: 1;">
                                    <span class="crc-data-label">Remarks</span>
                                    <span class="crc-data-value">Family function</span>
                                </div>
                            </div>
                            <div class="crc-alert-box yellow">
                                <iconify-icon icon="solar:info-circle-linear" style="color: #d97706; font-size: 20px;"></iconify-icon>
                                <span class="crc-alert-text yellow">You can view, edit or cancel your pending requests.</span>
                            </div>
                        </div>

                    </main>
                </div>`;

const regexOD = /<!-- ==========================================\s*OD TOUR MISPUNCH REPORT SCREEN\s*========================================== -->[\s\S]*?<!-- ==========================================\s*APPLIED LEAVES REPORT SCREEN\s*========================================== -->/;

if (html.match(regexOD)) {
    html = html.replace(regexOD, odTourHTML + '\n\n                <!-- ==========================================\n                     APPLIED LEAVES REPORT SCREEN\n                     ========================================== -->');
}

const regexApplied = /<!-- ==========================================\s*APPLIED LEAVES REPORT SCREEN\s*========================================== -->[\s\S]*?<!-- OVERLAYS HARDCODED WITHIN APP CONTAINER TO PREVENT OVERFLOW BUGS -->/;

if (html.match(regexApplied)) {
    html = html.replace(regexApplied, appliedLeavesHTML + '\n\n                <!-- OVERLAYS HARDCODED WITHIN APP CONTAINER TO PREVENT OVERFLOW BUGS -->');
}

// Update the leave submit buttons
// They currently use: background: var(--color-text);
html = html.replace(/<button class="btn btn-primary btn-block" style="background: var\(--color-text\); color: var\(--color-surface\); height: 50px; font-size: 14px; border-radius: 12px;">\s*Submit Leave Request\s*<\/button>/g, '<button class="btn btn-primary btn-block" style="background: var(--color-accent); color: white; height: 50px; font-size: 14px; border-radius: 12px; border: none; font-weight: 600;">\n                                Submit Leave Request\n                            </button>');

html = html.replace(/<button class="btn btn-primary btn-block" style="background: var\(--color-text\); color: var\(--color-surface\); height: 50px; font-size: 14px; border-radius: 12px;">\s*Apply Special Leave\s*<\/button>/g, '<button class="btn btn-primary btn-block" style="background: var(--color-accent); color: white; height: 50px; font-size: 14px; border-radius: 12px; border: none; font-weight: 600;">\n                                Apply Special Leave\n                            </button>');

fs.writeFileSync('Mobile/index.html', html);
console.log('UI update script finished.');
