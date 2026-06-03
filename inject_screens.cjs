const fs = require('fs');

let html = fs.readFileSync('Mobile/index.html', 'utf8');

const newScreensHTML = `
                <!-- ==========================================
                     LEAVE SANCTION SCREEN
                     ========================================== -->
                <div id="leave-sanction-screen" class="screen app-layout" style="display: none;">
                    <!-- Fixed Header -->
                    <header class="fixed-base" id="header-leave-sanction">
                        <div class="status-bar-dummy" aria-hidden="true">
                            <span class="status-time">9:41</span>
                            <div class="status-icons">
                                <iconify-icon icon="solar:tag-bold"></iconify-icon>
                                <iconify-icon icon="solar:wi-fi-router-minimalistic-bold"></iconify-icon>
                                <iconify-icon icon="solar:battery-full-bold"></iconify-icon>
                            </div>
                        </div>
                        <div class="top-nav">
                            <button class="nav-btn" onclick="openSidebar()"><iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon></button>
                            <h2 class="nav-title">Leave Sanction</h2>
                            <button class="nav-btn" onclick="openBottomSheet('notifications-sheet')"><iconify-icon icon="solar:bell-linear"></iconify-icon></button>
                        </div>
                    </header>

                    <main class="scrollable-cards" style="padding-bottom: 80px;">
                        
                        <!-- Leave Sanction Card 1 -->
                        <div class="custom-report-card" style="margin-bottom: 16px;">
                            <div class="crc-header" style="margin-bottom: 16px;">
                                <div class="crc-header-left">
                                    <div class="sidebar-avatar" style="background: #fde6c5; color: #d97706; font-size: 18px; width: 44px; height: 44px;">U</div>
                                    <div>
                                        <div class="crc-title" style="font-size: 15px;">Umesh Chandra Rav</div>
                                        <div class="crc-subtitle" style="font-size: 11px;">Code: sael001</div>
                                    </div>
                                </div>
                                <div class="crc-pill yellow" style="font-size: 11px; padding: 4px 10px;">Pending</div>
                            </div>
                            <hr style="border: 0; border-top: 1px solid var(--color-border); margin-bottom: 16px;">
                            
                            <div style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 16px;">
                                <div class="info-row" style="border: none; padding: 0;">
                                    <span class="info-label" style="font-weight: 600; color: #334155;">No of Leave:</span>
                                    <span class="info-val">1.0</span>
                                </div>
                                <div class="info-row" style="border: none; padding: 0;">
                                    <span class="info-label" style="font-weight: 600; color: #334155;">Leave Type:</span>
                                    <span class="info-val">Privilege Leave</span>
                                </div>
                                <div class="info-row" style="border: none; padding: 0;">
                                    <span class="info-label" style="font-weight: 600; color: #334155;">Applied Date:</span>
                                    <span class="info-val">03/04/2026</span>
                                </div>
                                <div class="info-row" style="border: none; padding: 0;">
                                    <span class="info-label" style="font-weight: 600; color: #334155;">From Date:</span>
                                    <span class="info-val">01/04/2026</span>
                                </div>
                                <div class="info-row" style="border: none; padding: 0;">
                                    <span class="info-label" style="font-weight: 600; color: #334155;">To Date:</span>
                                    <span class="info-val">01/04/2026</span>
                                </div>
                            </div>

                            <div style="background: #f8fafc; border-radius: 12px; padding: 12px 16px; font-style: italic; color: #64748b; font-size: 13px; margin-bottom: 16px;">
                                Remarks: nn
                            </div>

                            <div style="display: flex; gap: 12px;">
                                <button class="btn btn-block" style="background: #22c55e; color: white; flex: 1; display: flex; align-items: center; justify-content: center; gap: 8px; border-radius: 12px; height: 44px; border: none; font-weight: 600;"><iconify-icon icon="solar:check-read-linear" style="font-size: 18px;"></iconify-icon> Sanction</button>
                                <button class="btn btn-block" style="background: #ef4444; color: white; flex: 1; display: flex; align-items: center; justify-content: center; gap: 8px; border-radius: 12px; height: 44px; border: none; font-weight: 600;"><iconify-icon icon="solar:close-square-linear" style="font-size: 18px;"></iconify-icon> Reject</button>
                            </div>
                        </div>

                        <!-- Leave Sanction Card 2 -->
                        <div class="custom-report-card" style="margin-bottom: 16px;">
                            <div class="crc-header" style="margin-bottom: 16px;">
                                <div class="crc-header-left">
                                    <div class="sidebar-avatar" style="background: #e0e7ff; color: #4338ca; font-size: 18px; width: 44px; height: 44px;">V</div>
                                    <div>
                                        <div class="crc-title" style="font-size: 15px;">Vijay Kumar</div>
                                        <div class="crc-subtitle" style="font-size: 11px;">Code: VK092</div>
                                    </div>
                                </div>
                                <div class="crc-pill yellow" style="font-size: 11px; padding: 4px 10px;">Pending</div>
                            </div>
                            <hr style="border: 0; border-top: 1px solid var(--color-border); margin-bottom: 16px;">
                            
                            <div style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 16px;">
                                <div class="info-row" style="border: none; padding: 0;">
                                    <span class="info-label" style="font-weight: 600; color: #334155;">No of Leave:</span>
                                    <span class="info-val">2.0</span>
                                </div>
                                <div class="info-row" style="border: none; padding: 0;">
                                    <span class="info-label" style="font-weight: 600; color: #334155;">Leave Type:</span>
                                    <span class="info-val">Casual Leave</span>
                                </div>
                                <div class="info-row" style="border: none; padding: 0;">
                                    <span class="info-label" style="font-weight: 600; color: #334155;">Applied Date:</span>
                                    <span class="info-val">10/05/2026</span>
                                </div>
                                <div class="info-row" style="border: none; padding: 0;">
                                    <span class="info-label" style="font-weight: 600; color: #334155;">From Date:</span>
                                    <span class="info-val">12/05/2026</span>
                                </div>
                                <div class="info-row" style="border: none; padding: 0;">
                                    <span class="info-label" style="font-weight: 600; color: #334155;">To Date:</span>
                                    <span class="info-val">13/05/2026</span>
                                </div>
                            </div>

                            <div style="background: #f8fafc; border-radius: 12px; padding: 12px 16px; font-style: italic; color: #64748b; font-size: 13px; margin-bottom: 16px;">
                                Remarks: Family emergency
                            </div>

                            <div style="display: flex; gap: 12px;">
                                <button class="btn btn-block" style="background: #22c55e; color: white; flex: 1; display: flex; align-items: center; justify-content: center; gap: 8px; border-radius: 12px; height: 44px; border: none; font-weight: 600;"><iconify-icon icon="solar:check-read-linear" style="font-size: 18px;"></iconify-icon> Sanction</button>
                                <button class="btn btn-block" style="background: #ef4444; color: white; flex: 1; display: flex; align-items: center; justify-content: center; gap: 8px; border-radius: 12px; height: 44px; border: none; font-weight: 600;"><iconify-icon icon="solar:close-square-linear" style="font-size: 18px;"></iconify-icon> Reject</button>
                            </div>
                        </div>
                    </main>
                    <div class="gesture-pill-dummy" aria-hidden="true"></div>
                </div>

                <!-- ==========================================
                     EXPENSE SANCTION SCREEN
                     ========================================== -->
                <div id="expense-sanction-screen" class="screen app-layout" style="display: none;">
                    <!-- Fixed Header -->
                    <header class="fixed-base" id="header-expense-sanction">
                        <div class="status-bar-dummy" aria-hidden="true">
                            <span class="status-time">9:41</span>
                            <div class="status-icons">
                                <iconify-icon icon="solar:tag-bold"></iconify-icon>
                                <iconify-icon icon="solar:wi-fi-router-minimalistic-bold"></iconify-icon>
                                <iconify-icon icon="solar:battery-full-bold"></iconify-icon>
                            </div>
                        </div>
                        <div class="top-nav">
                            <button class="nav-btn" onclick="openSidebar()"><iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon></button>
                            <h2 class="nav-title">Expense Sanction</h2>
                            <button class="nav-btn" onclick="openBottomSheet('notifications-sheet')"><iconify-icon icon="solar:bell-linear"></iconify-icon></button>
                        </div>
                    </header>

                    <main style="flex:1; display: flex; flex-direction: column; align-items: center; justify-content: center; padding-bottom: 80px;">
                        <div style="font-size: 72px; color: #cbd5e1; margin-bottom: 16px;">
                            <iconify-icon icon="solar:calendar-bold-duotone"></iconify-icon>
                        </div>
                        <div style="font-size: 15px; color: #64748b; font-weight: 500;">No expenses to sanction</div>
                    </main>
                    <div class="gesture-pill-dummy" aria-hidden="true"></div>
                </div>

                <!-- ==========================================
                     OD TOUR SANCTION SCREEN
                     ========================================== -->
                <div id="od-tour-sanction-screen" class="screen app-layout" style="display: none;">
                    <!-- Fixed Header -->
                    <header class="fixed-base" id="header-od-tour-sanction">
                        <div class="status-bar-dummy" aria-hidden="true">
                            <span class="status-time">9:41</span>
                            <div class="status-icons">
                                <iconify-icon icon="solar:tag-bold"></iconify-icon>
                                <iconify-icon icon="solar:wi-fi-router-minimalistic-bold"></iconify-icon>
                                <iconify-icon icon="solar:battery-full-bold"></iconify-icon>
                            </div>
                        </div>
                        <div class="top-nav">
                            <button class="nav-btn" onclick="openSidebar()"><iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon></button>
                            <h2 class="nav-title">OD Tour/Mispunch...</h2>
                            <button class="nav-btn" onclick="openBottomSheet('notifications-sheet')"><iconify-icon icon="solar:bell-linear"></iconify-icon></button>
                        </div>
                    </header>

                    <main class="scrollable-cards" style="padding-bottom: 80px;">
                        
                        <!-- Card 1 -->
                        <div class="custom-report-card" style="margin-bottom: 16px;">
                            <div class="crc-header" style="margin-bottom: 16px;">
                                <div class="crc-header-left">
                                    <div class="sidebar-avatar" style="background: #fde6c5; color: #d97706; font-size: 18px; width: 44px; height: 44px;">U</div>
                                    <div>
                                        <div class="crc-title" style="font-size: 15px;">Umesh Chandra Rav</div>
                                        <div class="crc-subtitle" style="font-size: 11px;">Code: sael001</div>
                                    </div>
                                </div>
                                <div class="crc-pill yellow" style="font-size: 11px; padding: 4px 10px;">Pending</div>
                            </div>
                            <hr style="border: 0; border-top: 1px solid var(--color-border); margin-bottom: 16px;">
                            
                            <div style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 16px;">
                                <div class="info-row" style="border: none; padding: 0;">
                                    <span class="info-label" style="font-weight: 600; color: #334155;">Leave Type:</span>
                                    <span class="info-val">Mispunch</span>
                                </div>
                                <div class="info-row" style="border: none; padding: 0;">
                                    <span class="info-label" style="font-weight: 600; color: #334155;">Applied Date:</span>
                                    <span class="info-val">03/04/2026</span>
                                </div>
                                <div class="info-row" style="border: none; padding: 0;">
                                    <span class="info-label" style="font-weight: 600; color: #334155;">From Date:</span>
                                    <span class="info-val">03/04/2026</span>
                                </div>
                                <div class="info-row" style="border: none; padding: 0;">
                                    <span class="info-label" style="font-weight: 600; color: #334155;">To Date:</span>
                                    <span class="info-val">03/04/2026</span>
                                </div>
                                <div class="info-row" style="border: none; padding: 0;">
                                    <span class="info-label" style="font-weight: 600; color: #334155;">In Time:</span>
                                    <span class="info-val">14:37</span>
                                </div>
                                <div class="info-row" style="border: none; padding: 0;">
                                    <span class="info-label" style="font-weight: 600; color: #334155;">Out Time:</span>
                                    <span class="info-val">14:37</span>
                                </div>
                            </div>

                            <div style="background: #f8fafc; border-radius: 12px; padding: 12px 16px; font-style: italic; color: #64748b; font-size: 13px; margin-bottom: 16px;">
                                Remarks: ji
                            </div>

                            <div style="display: flex; gap: 12px;">
                                <button class="btn btn-block" style="background: #22c55e; color: white; flex: 1; display: flex; align-items: center; justify-content: center; gap: 8px; border-radius: 12px; height: 44px; border: none; font-weight: 600;"><iconify-icon icon="solar:check-read-linear" style="font-size: 18px;"></iconify-icon> Sanction</button>
                                <button class="btn btn-block" style="background: #ef4444; color: white; flex: 1; display: flex; align-items: center; justify-content: center; gap: 8px; border-radius: 12px; height: 44px; border: none; font-weight: 600;"><iconify-icon icon="solar:close-square-linear" style="font-size: 18px;"></iconify-icon> Reject</button>
                            </div>
                        </div>

                        <!-- Card 2 -->
                        <div class="custom-report-card" style="margin-bottom: 16px;">
                            <div class="crc-header" style="margin-bottom: 16px;">
                                <div class="crc-header-left">
                                    <div class="sidebar-avatar" style="background: #fde6c5; color: #d97706; font-size: 18px; width: 44px; height: 44px;">U</div>
                                    <div>
                                        <div class="crc-title" style="font-size: 15px;">Umesh Chandra Rav</div>
                                        <div class="crc-subtitle" style="font-size: 11px;">Code: Sael001</div>
                                    </div>
                                </div>
                                <div class="crc-pill yellow" style="font-size: 11px; padding: 4px 10px;">Pending</div>
                            </div>
                            <hr style="border: 0; border-top: 1px solid var(--color-border); margin-bottom: 16px;">
                            
                            <div style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 16px;">
                                <div class="info-row" style="border: none; padding: 0;">
                                    <span class="info-label" style="font-weight: 600; color: #334155;">Leave Type:</span>
                                    <span class="info-val">Mispunch</span>
                                </div>
                                <div class="info-row" style="border: none; padding: 0;">
                                    <span class="info-label" style="font-weight: 600; color: #334155;">Applied Date:</span>
                                    <span class="info-val">31/03/2026</span>
                                </div>
                                <div class="info-row" style="border: none; padding: 0;">
                                    <span class="info-label" style="font-weight: 600; color: #334155;">From Date:</span>
                                    <span class="info-val">30/04/2026</span>
                                </div>
                                <div class="info-row" style="border: none; padding: 0;">
                                    <span class="info-label" style="font-weight: 600; color: #334155;">To Date:</span>
                                    <span class="info-val">30/04/2026</span>
                                </div>
                                <div class="info-row" style="border: none; padding: 0;">
                                    <span class="info-label" style="font-weight: 600; color: #334155;">In Time:</span>
                                    <span class="info-val">09:00</span>
                                </div>
                                <div class="info-row" style="border: none; padding: 0;">
                                    <span class="info-label" style="font-weight: 600; color: #334155;">Out Time:</span>
                                    <span class="info-val">18:00</span>
                                </div>
                            </div>

                            <div style="background: #f8fafc; border-radius: 12px; padding: 12px 16px; font-style: italic; color: #64748b; font-size: 13px; margin-bottom: 16px;">
                                Remarks: Forgot punch out
                            </div>

                            <div style="display: flex; gap: 12px;">
                                <button class="btn btn-block" style="background: #22c55e; color: white; flex: 1; display: flex; align-items: center; justify-content: center; gap: 8px; border-radius: 12px; height: 44px; border: none; font-weight: 600;"><iconify-icon icon="solar:check-read-linear" style="font-size: 18px;"></iconify-icon> Sanction</button>
                                <button class="btn btn-block" style="background: #ef4444; color: white; flex: 1; display: flex; align-items: center; justify-content: center; gap: 8px; border-radius: 12px; height: 44px; border: none; font-weight: 600;"><iconify-icon icon="solar:close-square-linear" style="font-size: 18px;"></iconify-icon> Reject</button>
                            </div>
                        </div>
                    </main>
                    <div class="gesture-pill-dummy" aria-hidden="true"></div>
                </div>

                <!-- ==========================================
                     MY TEAM SCREEN
                     ========================================== -->
                <div id="my-team-screen" class="screen app-layout" style="display: none;">
                    <!-- Fixed Header -->
                    <header class="fixed-base" id="header-my-team">
                        <div class="status-bar-dummy" aria-hidden="true">
                            <span class="status-time">9:41</span>
                            <div class="status-icons">
                                <iconify-icon icon="solar:tag-bold"></iconify-icon>
                                <iconify-icon icon="solar:wi-fi-router-minimalistic-bold"></iconify-icon>
                                <iconify-icon icon="solar:battery-full-bold"></iconify-icon>
                            </div>
                        </div>
                        <div class="top-nav">
                            <button class="nav-btn" onclick="openSidebar()"><iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon></button>
                            <h2 class="nav-title">My Team</h2>
                            <button class="nav-btn" onclick="openBottomSheet('notifications-sheet')"><iconify-icon icon="solar:bell-linear"></iconify-icon></button>
                        </div>
                    </header>

                    <main class="scrollable-cards" style="padding-bottom: 80px;">
                        
                        <!-- Team Card 1 -->
                        <div class="custom-report-card" style="margin-bottom: 16px;">
                            <div class="crc-header" style="margin-bottom: 16px;">
                                <div class="crc-header-left">
                                    <div class="sidebar-avatar" style="background: #fff; color: #e11d48; border: 2px solid #ffe4e6; font-size: 32px; font-weight: 700; width: 64px; height: 64px;">A</div>
                                    <div>
                                        <div class="crc-title" style="font-size: 16px; font-weight: 700; text-transform: uppercase;">AMAN</div>
                                        <div class="crc-subtitle" style="font-size: 12px;">Code: A</div>
                                    </div>
                                </div>
                            </div>
                            <hr style="border: 0; border-top: 1px solid var(--color-border); margin-bottom: 16px;">
                            
                            <div style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 16px;">
                                <div class="info-row" style="border: none; padding: 0;">
                                    <span class="info-label" style="font-weight: 600; color: #334155;">Department:</span>
                                    <span class="info-val">Administration</span>
                                </div>
                                <div class="info-row" style="border: none; padding: 0;">
                                    <span class="info-label" style="font-weight: 600; color: #334155;">Status:</span>
                                    <span class="info-val">Absent</span>
                                </div>
                            </div>

                            <button class="btn btn-block" onclick="openBottomSheet('team-attendance-sheet', 'AMAN')" style="background: #3b82f6; color: white; display: flex; align-items: center; justify-content: center; gap: 8px; border-radius: 10px; height: 44px; border: none; font-weight: 600; font-size: 14px; width: 50%;">
                                <iconify-icon icon="solar:check-read-linear" style="font-size: 16px;"></iconify-icon> Show Report
                            </button>
                        </div>

                        <!-- Team Card 2 -->
                        <div class="custom-report-card" style="margin-bottom: 16px;">
                            <div class="crc-header" style="margin-bottom: 16px;">
                                <div class="crc-header-left">
                                    <div class="sidebar-avatar" style="background: #fff; color: #e11d48; border: 2px solid #ffe4e6; font-size: 32px; font-weight: 700; width: 64px; height: 64px;">B</div>
                                    <div>
                                        <div class="crc-title" style="font-size: 16px; font-weight: 700;">Balwinder Singh</div>
                                        <div class="crc-subtitle" style="font-size: 12px;">Code: VPPL0011</div>
                                    </div>
                                </div>
                            </div>
                            <hr style="border: 0; border-top: 1px solid var(--color-border); margin-bottom: 16px;">
                            
                            <div style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 16px;">
                                <div class="info-row" style="border: none; padding: 0;">
                                    <span class="info-label" style="font-weight: 600; color: #334155;">Department:</span>
                                    <span class="info-val">Security</span>
                                </div>
                                <div class="info-row" style="border: none; padding: 0;">
                                    <span class="info-label" style="font-weight: 600; color: #334155;">Status:</span>
                                    <span class="info-val">Absent</span>
                                </div>
                            </div>

                            <button class="btn btn-block" onclick="openBottomSheet('team-attendance-sheet', 'Balwinder Singh')" style="background: #3b82f6; color: white; display: flex; align-items: center; justify-content: center; gap: 8px; border-radius: 10px; height: 44px; border: none; font-weight: 600; font-size: 14px; width: 50%;">
                                <iconify-icon icon="solar:check-read-linear" style="font-size: 16px;"></iconify-icon> Show Report
                            </button>
                        </div>
                    </main>
                    <div class="gesture-pill-dummy" aria-hidden="true"></div>
                </div>

                <!-- ==========================================
                     EMPLOYEE DIRECTORY SCREEN
                     ========================================== -->
                <div id="employee-directory-screen" class="screen app-layout" style="display: none;">
                    <!-- Fixed Header -->
                    <header class="fixed-base" id="header-employee-directory">
                        <div class="status-bar-dummy" aria-hidden="true">
                            <span class="status-time">9:41</span>
                            <div class="status-icons">
                                <iconify-icon icon="solar:tag-bold"></iconify-icon>
                                <iconify-icon icon="solar:wi-fi-router-minimalistic-bold"></iconify-icon>
                                <iconify-icon icon="solar:battery-full-bold"></iconify-icon>
                            </div>
                        </div>
                        <div class="top-nav">
                            <button class="nav-btn" onclick="openSidebar()"><iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon></button>
                            <h2 class="nav-title">Employee Directory</h2>
                            <button class="nav-btn" onclick="openBottomSheet('notifications-sheet')"><iconify-icon icon="solar:bell-linear"></iconify-icon></button>
                        </div>
                    </header>

                    <main class="scrollable-cards" style="padding-bottom: 80px;">
                        
                        <!-- Employee Card 1 -->
                        <div class="custom-report-card" style="margin-bottom: 16px; padding: 12px 16px;">
                            <div class="crc-header" style="margin-bottom: 0;">
                                <div class="crc-header-left">
                                    <div class="sidebar-avatar" style="background: #dbeafe; color: #1d4ed8; font-size: 16px; width: 40px; height: 40px;">P</div>
                                    <div>
                                        <div class="crc-title" style="font-size: 15px;">Prabhjot Singh</div>
                                        <div class="crc-subtitle" style="font-size: 11px;">Marketing • 9876543210</div>
                                    </div>
                                </div>
                                <div style="display: flex; gap: 12px; color: #3b82f6;">
                                    <iconify-icon icon="solar:phone-calling-bold" style="font-size: 20px;"></iconify-icon>
                                    <iconify-icon icon="solar:letter-bold" style="font-size: 20px;"></iconify-icon>
                                </div>
                            </div>
                        </div>

                        <!-- Employee Card 2 -->
                        <div class="custom-report-card" style="margin-bottom: 16px; padding: 12px 16px;">
                            <div class="crc-header" style="margin-bottom: 0;">
                                <div class="crc-header-left">
                                    <div class="sidebar-avatar" style="background: #fce7f3; color: #be185d; font-size: 16px; width: 40px; height: 40px;">S</div>
                                    <div>
                                        <div class="crc-title" style="font-size: 15px;">Sarah Jones</div>
                                        <div class="crc-subtitle" style="font-size: 11px;">HR • 9123456789</div>
                                    </div>
                                </div>
                                <div style="display: flex; gap: 12px; color: #3b82f6;">
                                    <iconify-icon icon="solar:phone-calling-bold" style="font-size: 20px;"></iconify-icon>
                                    <iconify-icon icon="solar:letter-bold" style="font-size: 20px;"></iconify-icon>
                                </div>
                            </div>
                        </div>

                    </main>
                    <div class="gesture-pill-dummy" aria-hidden="true"></div>
                </div>
`;

// Insert the new screens right before the sheet-overlay
const insertIdx = html.indexOf('<div class="bottom-sheet-overlay" id="sheet-overlay"');
if (insertIdx !== -1) {
    html = html.substring(0, insertIdx) + newScreensHTML + html.substring(insertIdx);
}

// Prepare the new Team Attendance Bottom Sheet
const newSheetHTML = `
                <!-- Team Attendance Report Bottom Sheet -->
                <div class="bottom-sheet" id="team-attendance-sheet" style="padding: 0; background: transparent; overflow: visible;">
                    <div style="background: #4a2b9a; color: white; border-top-left-radius: 20px; border-top-right-radius: 20px; padding: 24px 20px 48px; position: relative; text-align: center;">
                        <h3 style="font-size: 18px; margin: 0; display: flex; justify-content: center; align-items: center; gap: 8px;">
                            <span id="team-attendance-name">AMAN</span> Attendance Report
                        </h3>
                        <button class="close-sheet-btn" onclick="closeBottomSheet()" style="position: absolute; right: 20px; top: 20px; background: transparent; color: white; border: none;"><iconify-icon icon="solar:close-square-linear" style="font-size: 24px;"></iconify-icon></button>
                        <div style="width: 40px; height: 4px; background: rgba(255,255,255,0.3); border-radius: 2px; position: absolute; bottom: 12px; left: 50%; transform: translateX(-50%);"></div>
                    </div>
                    
                    <div style="background: var(--color-surface); flex: 1; position: relative;">
                        <!-- Filter Card Overlapping Header -->
                        <div style="background: white; border-radius: 12px; padding: 16px; margin: -24px 16px 16px; box-shadow: 0 4px 16px rgba(0,0,0,0.06); position: relative; z-index: 2; border: 1px solid var(--color-border);">
                            <div style="display: flex; gap: 12px; margin-bottom: 16px;">
                                <div style="flex: 1; border: 1px solid #64748b; border-radius: 8px; padding: 6px 12px; position: relative;">
                                    <span style="position: absolute; top: -10px; left: 8px; background: white; padding: 0 4px; font-size: 11px; color: #475569;">Month</span>
                                    <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 4px;">
                                        <div style="display: flex; align-items: center; gap: 8px; color: #334155;"><iconify-icon icon="solar:calendar-bold"></iconify-icon> <span style="font-size: 14px; font-weight: 500;">May</span></div>
                                        <iconify-icon icon="solar:alt-arrow-down-bold" style="color: #64748b;"></iconify-icon>
                                    </div>
                                </div>
                                <div style="flex: 1; border: 1px solid #64748b; border-radius: 8px; padding: 6px 12px; position: relative;">
                                    <span style="position: absolute; top: -10px; left: 8px; background: white; padding: 0 4px; font-size: 11px; color: #475569;">Year</span>
                                    <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 4px;">
                                        <div style="display: flex; align-items: center; gap: 8px; color: #334155;"><iconify-icon icon="solar:calendar-bold"></iconify-icon> <span style="font-size: 14px; font-weight: 500;">2026</span></div>
                                        <iconify-icon icon="solar:alt-arrow-down-bold" style="color: #64748b;"></iconify-icon>
                                    </div>
                                </div>
                            </div>
                            <button class="btn btn-block" style="background: #3b82f6; color: white; display: flex; align-items: center; justify-content: center; gap: 8px; border-radius: 10px; height: 44px; border: none; font-weight: 600;">
                                <iconify-icon icon="solar:minimalistic-magnifer-bold"></iconify-icon> Load Report
                            </button>
                        </div>
                        
                        <!-- Table Header -->
                        <div style="background: #bae6fd; padding: 12px 16px; margin: 0 16px; border-radius: 8px; display: flex; justify-content: space-between; font-weight: 600; color: #0f172a; font-size: 13px;">
                            <span>Day</span>
                            <span>Punches</span>
                            <span>Status</span>
                        </div>
                        
                        <!-- Empty State -->
                        <div style="padding: 40px 20px; text-align: center;">
                            <div style="font-size: 72px; color: #cbd5e1; margin-bottom: 16px;">
                                <iconify-icon icon="solar:calendar-bold-duotone"></iconify-icon>
                            </div>
                            <div style="font-size: 15px; color: #94a3b8; font-weight: 500;">No attendance data</div>
                        </div>

                        <!-- Close Button at bottom -->
                        <div style="padding: 16px; padding-bottom: 32px;">
                            <button class="btn btn-block" onclick="closeBottomSheet()" style="background: #3b0764; color: white; border: none; border-radius: 12px; height: 50px; font-weight: 600; display: flex; align-items: center; justify-content: center; gap: 8px;">
                                <iconify-icon icon="solar:alt-arrow-down-bold"></iconify-icon> Close
                            </button>
                        </div>
                    </div>
                </div>
`;

const insertSheetIdx = html.indexOf('</div> <!-- End app-container -->');
if (insertSheetIdx !== -1) {
    html = html.substring(0, insertSheetIdx) + newSheetHTML + html.substring(insertSheetIdx);
}

fs.writeFileSync('Mobile/index.html', html);
console.log('Screens injected.');
