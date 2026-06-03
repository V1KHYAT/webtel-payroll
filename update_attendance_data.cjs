const fs = require('fs');

let css = fs.readFileSync('Mobile/css/styles.css', 'utf8');

const additionalStyles = `
/* ADDITIONAL PILL STYLES */
.rc-pill-present {
    display: flex; align-items: center; gap: 6px;
    background: #dcfce7; color: #166534;
    padding: 4px 12px; border-radius: var(--radius-full);
    font-size: 11px; font-weight: 600;
}
.rc-dot-green { width: 6px; height: 6px; background: #166534; border-radius: 50%; }

.rc-pill-holiday {
    display: flex; align-items: center; gap: 6px;
    background: #f1f5f9; color: #475569;
    padding: 4px 12px; border-radius: var(--radius-full);
    font-size: 11px; font-weight: 600;
}
.rc-dot-slate { width: 6px; height: 6px; background: #475569; border-radius: 50%; }

.rc-pill-leave {
    display: flex; align-items: center; gap: 6px;
    background: #ffedd5; color: #c2410c;
    padding: 4px 12px; border-radius: var(--radius-full);
    font-size: 11px; font-weight: 600;
}
.rc-dot-orange { width: 6px; height: 6px; background: #c2410c; border-radius: 50%; }
`;

if (!css.includes('.rc-pill-present')) {
    css += '\\n' + additionalStyles;
    fs.writeFileSync('Mobile/css/styles.css', css);
}

let html = fs.readFileSync('Mobile/index.html', 'utf8');

// Replace Reports List
const reportsTabRegex = /<!-- Report Items -->\s*<div class="report-list new-report-list">[\s\S]*?<\/div>\s*<\/div>\s*<!-- TAB: LOGS -->/;

const newReportsHTML = `<!-- Report Items -->
                            <div class="report-list new-report-list">
                                <!-- Day 01: Monday - Present -->
                                <div class="report-card">
                                    <div class="rc-date">
                                        <span class="rc-day">MON</span>
                                        <strong class="rc-num">01</strong>
                                        <span class="rc-month">May</span>
                                    </div>
                                    <div class="rc-divider"><div class="rc-dot"></div></div>
                                    <div class="rc-context">
                                        <div class="rc-text">
                                            <strong>Marked Present</strong>
                                            <span>09:30 AM - 06:30 PM</span>
                                        </div>
                                    </div>
                                    <div class="rc-actions">
                                        <div class="rc-pill-present">
                                            <div class="rc-dot-green"></div> Present
                                        </div>
                                    </div>
                                </div>
                                
                                <!-- Day 02: Tuesday - Short Leave -->
                                <div class="report-card">
                                    <div class="rc-date">
                                        <span class="rc-day">TUE</span>
                                        <strong class="rc-num">02</strong>
                                        <span class="rc-month">May</span>
                                    </div>
                                    <div class="rc-divider"><div class="rc-dot"></div></div>
                                    <div class="rc-context">
                                        <div class="rc-text">
                                            <strong>Short Leave</strong>
                                            <span>2 hours early departure</span>
                                        </div>
                                    </div>
                                    <div class="rc-actions">
                                        <div class="rc-pill-leave">
                                            <div class="rc-dot-orange"></div> Short Leave
                                        </div>
                                    </div>
                                </div>
                                
                                <!-- Day 03: Wednesday - Leave -->
                                <div class="report-card">
                                    <div class="rc-date">
                                        <span class="rc-day">WED</span>
                                        <strong class="rc-num">03</strong>
                                        <span class="rc-month">May</span>
                                    </div>
                                    <div class="rc-divider"><div class="rc-dot"></div></div>
                                    <div class="rc-context">
                                        <div class="rc-text">
                                            <strong>Casual Leave</strong>
                                            <span>Approved by Manager</span>
                                        </div>
                                    </div>
                                    <div class="rc-actions">
                                        <div class="rc-pill-leave">
                                            <div class="rc-dot-orange"></div> On Leave
                                        </div>
                                    </div>
                                </div>
                                
                                <!-- Day 04: Thursday - Missed -->
                                <div class="report-card">
                                    <div class="rc-date">
                                        <span class="rc-day">THU</span>
                                        <strong class="rc-num">04</strong>
                                        <span class="rc-month">May</span>
                                    </div>
                                    <div class="rc-divider"><div class="rc-dot"></div></div>
                                    <div class="rc-context">
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
                                
                                <!-- Day 05: Friday - Present -->
                                <div class="report-card">
                                    <div class="rc-date">
                                        <span class="rc-day">FRI</span>
                                        <strong class="rc-num">05</strong>
                                        <span class="rc-month">May</span>
                                    </div>
                                    <div class="rc-divider"><div class="rc-dot"></div></div>
                                    <div class="rc-context">
                                        <div class="rc-text">
                                            <strong>Marked Present</strong>
                                            <span>10:00 AM - 07:15 PM</span>
                                        </div>
                                    </div>
                                    <div class="rc-actions">
                                        <div class="rc-pill-present">
                                            <div class="rc-dot-green"></div> Present
                                        </div>
                                    </div>
                                </div>
                                
                                <!-- Day 06: Saturday - Holiday -->
                                <div class="report-card">
                                    <div class="rc-date">
                                        <span class="rc-day">SAT</span>
                                        <strong class="rc-num">06</strong>
                                        <span class="rc-month">May</span>
                                    </div>
                                    <div class="rc-divider"><div class="rc-dot"></div></div>
                                    <div class="rc-context">
                                        <div class="rc-text">
                                            <strong>Weekend</strong>
                                            <span>Saturday</span>
                                        </div>
                                    </div>
                                    <div class="rc-actions">
                                        <div class="rc-pill-holiday">
                                            <div class="rc-dot-slate"></div> Weekly Off
                                        </div>
                                    </div>
                                </div>
                                
                                <!-- Day 07: Sunday - Holiday -->
                                <div class="report-card">
                                    <div class="rc-date">
                                        <span class="rc-day">SUN</span>
                                        <strong class="rc-num">07</strong>
                                        <span class="rc-month">May</span>
                                    </div>
                                    <div class="rc-divider"><div class="rc-dot"></div></div>
                                    <div class="rc-context">
                                        <div class="rc-text">
                                            <strong>Weekend</strong>
                                            <span>Sunday</span>
                                        </div>
                                    </div>
                                    <div class="rc-actions">
                                        <div class="rc-pill-holiday">
                                            <div class="rc-dot-slate"></div> Weekly Off
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>

                        <!-- TAB: LOGS -->`;

html = html.replace(reportsTabRegex, newReportsHTML);


// Replace Logs List
const logsTabRegex = /<div class="report-list">[\s\S]*?<\/div>\s*<\/div>\s*<\/main>\s*<div class="gesture-pill-dummy"/;

const newLogsHTML = `<div class="report-list">
                                <div class="log-item">
                                    <div class="log-sr">1</div>
                                    <div class="log-date">05 May 2026</div>
                                    <div class="log-time"><div class="time-pill-green">10:00</div></div>
                                </div>
                                <div class="log-item">
                                    <div class="log-sr">2</div>
                                    <div class="log-date">05 May 2026</div>
                                    <div class="log-time"><div class="time-pill-green">19:15</div></div>
                                </div>
                                <div class="log-item">
                                    <div class="log-sr">3</div>
                                    <div class="log-date">02 May 2026</div>
                                    <div class="log-time"><div class="time-pill-green">09:30</div></div>
                                </div>
                                <div class="log-item">
                                    <div class="log-sr">4</div>
                                    <div class="log-date">02 May 2026</div>
                                    <div class="log-time"><div class="time-pill-green">16:30</div></div>
                                </div>
                                <div class="log-item">
                                    <div class="log-sr">5</div>
                                    <div class="log-date">01 May 2026</div>
                                    <div class="log-time"><div class="time-pill-green">09:30</div></div>
                                </div>
                                <div class="log-item">
                                    <div class="log-sr">6</div>
                                    <div class="log-date">01 May 2026</div>
                                    <div class="log-time"><div class="time-pill-green">18:30</div></div>
                                </div>
                                <div class="log-item">
                                    <div class="log-sr">7</div>
                                    <div class="log-date">24 Apr 2026</div>
                                    <div class="log-time"><div class="time-pill-green">20:07</div></div>
                                </div>
                                <div class="log-item">
                                    <div class="log-sr">8</div>
                                    <div class="log-date">18 Apr 2026</div>
                                    <div class="log-time"><div class="time-pill-green">11:55</div></div>
                                </div>
                                <div class="log-item">
                                    <div class="log-sr">9</div>
                                    <div class="log-date">15 Apr 2026</div>
                                    <div class="log-time"><div class="time-pill-green">16:57</div></div>
                                </div>
                            </div>
                        </div>
                        
                    </main>
                    <div class="gesture-pill-dummy"`;

html = html.replace(logsTabRegex, newLogsHTML);

fs.writeFileSync('Mobile/index.html', html);
console.log('Updated data for reports and logs');
