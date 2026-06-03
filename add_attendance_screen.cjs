const fs = require('fs');

let html = fs.readFileSync('Mobile/index.html', 'utf8');

const attendanceScreenHTML = `
                <!-- ============================ -->
                <!-- ATTENDANCE SCREEN            -->
                <!-- ============================ -->
                <div id="attendance-screen" class="screen app-layout" style="display: none;">
                    
                    <div class="status-bar-dummy" aria-hidden="true">
                        <div class="status-time">9:41</div>
                        <div class="status-icons">
                            <iconify-icon icon="solar:tag-bold"></iconify-icon>
                            <iconify-icon icon="solar:wi-fi-router-minimalistic-bold"></iconify-icon>
                            <iconify-icon icon="solar:battery-full-bold"></iconify-icon>
                        </div>
                    </div>

                    <div class="profile-fixed-header">
                        <div class="base-header">
                            <button class="ghost-btn profile-ghost-btn" onclick="toggleSidebar()">
                                <iconify-icon icon="solar:hamburger-menu-bold"></iconify-icon>
                            </button>
                            <div class="profile-page-title" style="flex: 1; text-align: center;">Attendance</div>
                            <button class="ghost-btn profile-ghost-btn profile-bell" onclick="openBottomSheet('notifications-sheet')">
                                <iconify-icon icon="solar:bell-bing-bold"></iconify-icon>
                                <div class="notification-dot"></div>
                            </button>
                        </div>
                    </div>

                    <!-- TABS COMPONENT -->
                    <div class="tabs-container">
                        <button class="tab-btn active" onclick="switchAttendanceTab('reports')">Reports</button>
                        <button class="tab-btn" onclick="switchAttendanceTab('logs')">Logs</button>
                    </div>

                    <!-- SCROLLABLE CONTENT AREA -->
                    <main class="scrollable-cards profile-scroll">
                        
                        <!-- TAB: REPORTS -->
                        <div id="attendance-reports-tab">
                            <!-- Filters -->
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
                            
                            <!-- Action -->
                            <button class="btn btn-primary btn-block" style="margin-bottom: 24px; display: flex; align-items: center; justify-content: center; gap: 8px;">
                                <iconify-icon icon="solar:magnifier-bold" style="font-size: 18px;"></iconify-icon> Load Report
                            </button>
                            
                            <!-- List Header -->
                            <div class="list-header-row">
                                <div style="flex: 1;">Day</div>
                                <div style="flex: 2;">Punches</div>
                                <div style="flex: 1; text-align: right;">Status</div>
                            </div>
                            
                            <!-- Report Items -->
                            <div class="report-list">
                                <!-- Day 01 -->
                                <div class="report-item">
                                    <div class="report-day-col">
                                        <strong>01</strong>
                                        <span>Fri</span>
                                    </div>
                                    <div class="report-punches-col">
                                        No punch found.
                                    </div>
                                    <div class="report-status-col">
                                        <button class="btn btn-primary report-action-btn">ApplyLeave</button>
                                        <div class="status-pill-red">A-A</div>
                                    </div>
                                </div>
                                <!-- Day 02 -->
                                <div class="report-item">
                                    <div class="report-day-col">
                                        <strong>02</strong>
                                        <span>Sat</span>
                                    </div>
                                    <div class="report-punches-col">
                                        No punch found.
                                    </div>
                                    <div class="report-status-col">
                                        <button class="btn btn-primary report-action-btn">ApplyLeave</button>
                                        <div class="status-pill-red">A-A</div>
                                    </div>
                                </div>
                                <!-- Day 03 -->
                                <div class="report-item">
                                    <div class="report-day-col">
                                        <strong>03</strong>
                                        <span>Sun</span>
                                    </div>
                                    <div class="report-punches-col">
                                        No punch found.
                                    </div>
                                    <div class="report-status-col">
                                        <button class="btn btn-primary report-action-btn">ApplyLeave</button>
                                        <div class="status-pill-red">A-A</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- TAB: LOGS -->
                        <div id="attendance-logs-tab" style="display: none;">
                            <!-- List Header -->
                            <div class="list-header-row">
                                <div style="width: 40px;">Sr.</div>
                                <div style="flex: 1;">Date</div>
                                <div style="width: 70px; text-align: right;">Time</div>
                            </div>
                            
                            <!-- Logs List -->
                            <div class="report-list">
                                <div class="log-item">
                                    <div class="log-sr">1</div>
                                    <div class="log-date">24 May 2026</div>
                                    <div class="log-time"><div class="time-pill-green">20:07</div></div>
                                </div>
                                <div class="log-item">
                                    <div class="log-sr">2</div>
                                    <div class="log-date">18 Apr 2026</div>
                                    <div class="log-time"><div class="time-pill-green">11:55</div></div>
                                </div>
                                <div class="log-item">
                                    <div class="log-sr">3</div>
                                    <div class="log-date">18 Apr 2026</div>
                                    <div class="log-time"><div class="time-pill-green">11:53</div></div>
                                </div>
                                <div class="log-item">
                                    <div class="log-sr">4</div>
                                    <div class="log-date">15 Apr 2026</div>
                                    <div class="log-time"><div class="time-pill-green">16:57</div></div>
                                </div>
                                <div class="log-item">
                                    <div class="log-sr">5</div>
                                    <div class="log-date">30 Mar 2026</div>
                                    <div class="log-time"><div class="time-pill-green">17:50</div></div>
                                </div>
                            </div>
                        </div>
                        
                    </main>
                    <div class="gesture-pill-dummy" aria-hidden="true"></div>
                </div> <!-- End attendance screen -->
`;

html = html.replace('                </div> <!-- End profile screen -->', '                </div> <!-- End profile screen -->\n\n' + attendanceScreenHTML);

fs.writeFileSync('Mobile/index.html', html);
console.log('Added attendance screen HTML');
