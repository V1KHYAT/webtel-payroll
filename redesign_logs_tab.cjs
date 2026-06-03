const fs = require('fs');

let css = fs.readFileSync('Mobile/css/styles.css', 'utf8');

const newLogsCSS = `
/* =========================================
   LOGS CARD (NEW DESIGN)
   ========================================= */

.log-card {
    display: flex;
    align-items: center;
    background: #ffffff;
    border-radius: var(--radius-lg);
    border: 1px solid var(--color-border);
    padding: 16px;
    margin-bottom: 12px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.02);
}

.lc-date-col {
    display: flex;
    flex-direction: column;
    gap: 4px;
    flex: 1;
}
.lc-date-col strong {
    font-size: var(--text-sm);
    font-weight: 700;
    color: var(--color-text);
}
.lc-date-col span {
    font-size: 11px;
    font-weight: 500;
    color: var(--color-text-tertiary);
}

.lc-punches-col {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-right: 16px;
}
.lc-arrow {
    color: var(--color-text-tertiary);
    font-size: 14px;
}
.lc-chevron {
    color: var(--color-text-tertiary);
    font-size: 18px;
    display: flex;
    align-items: center;
}

.time-pill-green {
    background: #e8f5e9;
    color: #2e7d32;
    padding: 6px 12px;
    border-radius: var(--radius-md);
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.02em;
}
.time-pill-red {
    background: #ffebee;
    color: #c62828;
    padding: 6px 12px;
    border-radius: var(--radius-md);
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.02em;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 70px;
}
`;

if (!css.includes('.log-card {')) {
    css += '\\n' + newLogsCSS;
    fs.writeFileSync('Mobile/css/styles.css', css);
}

let html = fs.readFileSync('Mobile/index.html', 'utf8');

const logsTabRegex = /<!-- TAB: LOGS -->[\s\S]*?<div id="attendance-logs-tab" style="display: none;">[\s\S]*?<div class="report-list">[\s\S]*?<\/div>\s*<\/div>\s*<\/main>/;

const newLogsHTML = `<!-- TAB: LOGS -->
                    <div id="attendance-logs-tab" style="display: none;">
                        
                        <!-- Logs Filters -->
                        <div class="attendance-filters">
                            <div class="filter-box">
                                <span class="filter-label">Month</span>
                                <div class="filter-select">
                                    <iconify-icon icon="solar:calendar-bold"></iconify-icon>
                                    <span>May</span>
                                    <iconify-icon icon="solar:alt-arrow-down-bold"></iconify-icon>
                                </div>
                            </div>
                            <div class="filter-box">
                                <span class="filter-label">Year</span>
                                <div class="filter-select">
                                    <iconify-icon icon="solar:calendar-bold"></iconify-icon>
                                    <span>2026</span>
                                    <iconify-icon icon="solar:alt-arrow-down-bold"></iconify-icon>
                                </div>
                            </div>
                        </div>

                        <!-- Logs List -->
                        <div class="new-report-list">
                            <div class="log-card">
                                <div class="lc-date-col">
                                    <strong>24 Apr 2026</strong>
                                    <span>Fri</span>
                                </div>
                                <div class="lc-punches-col">
                                    <div class="time-pill-green">08:07 AM</div>
                                    <iconify-icon icon="solar:arrow-right-linear" class="lc-arrow"></iconify-icon>
                                    <div class="time-pill-red">08:07 PM</div>
                                </div>
                                <div class="lc-chevron">
                                    <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
                                </div>
                            </div>

                            <div class="log-card">
                                <div class="lc-date-col">
                                    <strong>18 Apr 2026</strong>
                                    <span>Sat</span>
                                </div>
                                <div class="lc-punches-col">
                                    <div class="time-pill-green">11:55 AM</div>
                                    <iconify-icon icon="solar:arrow-right-linear" class="lc-arrow"></iconify-icon>
                                    <div class="time-pill-red">08:10 PM</div>
                                </div>
                                <div class="lc-chevron">
                                    <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
                                </div>
                            </div>

                            <div class="log-card">
                                <div class="lc-date-col">
                                    <strong>15 Apr 2026</strong>
                                    <span>Wed</span>
                                </div>
                                <div class="lc-punches-col">
                                    <div class="time-pill-green">04:57 PM</div>
                                    <iconify-icon icon="solar:arrow-right-linear" class="lc-arrow"></iconify-icon>
                                    <div class="time-pill-red">&mdash;</div>
                                </div>
                                <div class="lc-chevron">
                                    <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
                                </div>
                            </div>
                            
                            <div class="log-card">
                                <div class="lc-date-col">
                                    <strong>14 Apr 2026</strong>
                                    <span>Tue</span>
                                </div>
                                <div class="lc-punches-col">
                                    <div class="time-pill-green">09:15 AM</div>
                                    <iconify-icon icon="solar:arrow-right-linear" class="lc-arrow"></iconify-icon>
                                    <div class="time-pill-red">06:45 PM</div>
                                </div>
                                <div class="lc-chevron">
                                    <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
                                </div>
                            </div>
                        </div>
                    </div>
                    </main>`;

if (html.match(logsTabRegex)) {
    html = html.replace(logsTabRegex, newLogsHTML);
    fs.writeFileSync('Mobile/index.html', html);
    console.log('Replaced Logs tab HTML successfully.');
} else {
    console.log('Could not find Logs tab HTML with regex.');
}
