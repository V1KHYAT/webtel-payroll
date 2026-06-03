const fs = require('fs');
let html = fs.readFileSync('Mobile/index.html', 'utf8');

const additionalLogs = `
                            <div class="log-card">
                                <div class="lc-date-col">
                                    <strong>11 Apr 2026</strong>
                                    <span>Sat</span>
                                </div>
                                <div class="lc-punches-col">
                                    <div class="time-pill-green">10:05 AM</div>
                                    <iconify-icon icon="solar:arrow-right-linear" class="lc-arrow"></iconify-icon>
                                    <div class="time-pill-red">04:30 PM</div>
                                </div>
                            </div>
                            
                            <div class="log-card">
                                <div class="lc-date-col">
                                    <strong>09 Apr 2026</strong>
                                    <span>Thu</span>
                                </div>
                                <div class="lc-punches-col">
                                    <div class="time-pill-green">09:25 AM</div>
                                    <iconify-icon icon="solar:arrow-right-linear" class="lc-arrow"></iconify-icon>
                                    <div class="time-pill-red">06:40 PM</div>
                                </div>
                            </div>
                            
                            <div class="log-card">
                                <div class="lc-date-col">
                                    <strong>08 Apr 2026</strong>
                                    <span>Wed</span>
                                </div>
                                <div class="lc-punches-col">
                                    <div class="time-pill-green">09:10 AM</div>
                                    <iconify-icon icon="solar:arrow-right-linear" class="lc-arrow"></iconify-icon>
                                    <div class="time-pill-red">&mdash;</div>
                                </div>
                            </div>
                            
                            <div class="log-card">
                                <div class="lc-date-col">
                                    <strong>06 Apr 2026</strong>
                                    <span>Mon</span>
                                </div>
                                <div class="lc-punches-col">
                                    <div class="time-pill-green">11:00 AM</div>
                                    <iconify-icon icon="solar:arrow-right-linear" class="lc-arrow"></iconify-icon>
                                    <div class="time-pill-red">08:15 PM</div>
                                </div>
                            </div>
                            
                            <div class="log-card">
                                <div class="lc-date-col">
                                    <strong>04 Apr 2026</strong>
                                    <span>Sat</span>
                                </div>
                                <div class="lc-punches-col">
                                    <div class="time-pill-green">09:00 AM</div>
                                    <iconify-icon icon="solar:arrow-right-linear" class="lc-arrow"></iconify-icon>
                                    <div class="time-pill-red">01:00 PM</div>
                                </div>
                            </div>
                            
                            <div class="log-card">
                                <div class="lc-date-col">
                                    <strong>02 Apr 2026</strong>
                                    <span>Thu</span>
                                </div>
                                <div class="lc-punches-col">
                                    <div class="time-pill-green">09:45 AM</div>
                                    <iconify-icon icon="solar:arrow-right-linear" class="lc-arrow"></iconify-icon>
                                    <div class="time-pill-red">06:55 PM</div>
                                </div>
                            </div>
                        </div>`;

html = html.replace(/<div class="log-card">\s*<div class="lc-date-col">\s*<strong>14 Apr 2026<\/strong>[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/, 
    `<div class="log-card">
                                <div class="lc-date-col">
                                    <strong>14 Apr 2026</strong>
                                    <span>Tue</span>
                                </div>
                                <div class="lc-punches-col">
                                    <div class="time-pill-green">09:15 AM</div>
                                    <iconify-icon icon="solar:arrow-right-linear" class="lc-arrow"></iconify-icon>
                                    <div class="time-pill-red">06:45 PM</div>
                                </div>
                            </div>` + '\n' + additionalLogs);

fs.writeFileSync('Mobile/index.html', html);
console.log('Appended more logs.');
