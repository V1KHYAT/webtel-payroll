const fs = require('fs');
let html = fs.readFileSync('Mobile/index.html', 'utf8');

function replaceMain(screenId, newMainContent) {
    const screenStart = html.indexOf(`id="${screenId}"`);
    if (screenStart === -1) {
        console.log(`Screen ${screenId} not found`);
        return;
    }
    const mainStart = html.indexOf('<main', screenStart);
    const mainEnd = html.indexOf('</main>', mainStart) + '</main>'.length;
    
    html = html.substring(0, mainStart) + newMainContent + html.substring(mainEnd);
}

// 1. LEAVE SANCTION
const leaveSanctionMain = `
                    <main class="scrollable-cards" style="padding-bottom: 80px; padding-top: 16px;">
                        <!-- Leave Sanction Card 1 -->
                        <div class="custom-report-card crc-yellow">
                            <div class="crc-header" onclick="toggleCard(this)" style="cursor: pointer;">
                                <div class="crc-header-left">
                                    <div class="sidebar-avatar" style="background: #fde6c5; color: #d97706; font-size: 18px; width: 44px; height: 44px;">U</div>
                                    <div>
                                        <div class="crc-title">Umesh Chandra Rav</div>
                                        <div class="crc-subtitle">Code: sael001</div>
                                    </div>
                                </div>
                                <div style="display: flex; align-items: center; gap: 8px;">
                                    <div class="crc-pill yellow">
                                        <span>Pending</span>
                                    </div>
                                    <div class="expand-chevron"><iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon></div>
                                </div>
                            </div>
                            <div class="crc-expanded-content">
                                <div style="height: 16px;"></div>
                                <div class="crc-data-box gray">
                                    <div class="crc-data-col">
                                        <span class="crc-data-label">Leave Details</span>
                                        <span class="crc-data-value">1.0 Day • Privilege Leave</span>
                                    </div>
                                    <div class="crc-data-col" style="padding-top: 12px; border-top: 1px solid rgba(0,0,0,0.05);">
                                        <span class="crc-data-label">Duration</span>
                                        <span class="crc-data-value">01 Apr 2026 – 01 Apr 2026</span>
                                    </div>
                                    <div class="crc-data-col" style="padding-top: 12px; border-top: 1px solid rgba(0,0,0,0.05);">
                                        <span class="crc-data-label">Applied On</span>
                                        <span class="crc-data-value">03 Apr 2026</span>
                                    </div>
                                    <div class="crc-data-col" style="padding-top: 12px; border-top: 1px solid rgba(0,0,0,0.05);">
                                        <span class="crc-data-label">Remarks</span>
                                        <span class="crc-data-value" style="line-height: 1.4; color: #64748b; font-style: italic;">nn</span>
                                    </div>
                                </div>
                                <div style="display: flex; gap: 8px; margin-top: 12px;">
                                    <button class="btn btn-block" style="background: #22c55e; color: white; flex: 1; border-radius: 10px; height: 44px; border: none; font-weight: 600; display: flex; align-items: center; justify-content: center; gap: 8px;"><iconify-icon icon="solar:check-read-linear" style="font-size: 18px;"></iconify-icon> Sanction</button>
                                    <button class="btn btn-block" style="background: #ef4444; color: white; flex: 1; border-radius: 10px; height: 44px; border: none; font-weight: 600; display: flex; align-items: center; justify-content: center; gap: 8px;"><iconify-icon icon="solar:close-square-linear" style="font-size: 18px;"></iconify-icon> Reject</button>
                                </div>
                            </div>
                        </div>

                        <!-- Leave Sanction Card 2 -->
                        <div class="custom-report-card crc-yellow">
                            <div class="crc-header" onclick="toggleCard(this)" style="cursor: pointer;">
                                <div class="crc-header-left">
                                    <div class="sidebar-avatar" style="background: #e0e7ff; color: #4338ca; font-size: 18px; width: 44px; height: 44px;">V</div>
                                    <div>
                                        <div class="crc-title">Vijay Kumar</div>
                                        <div class="crc-subtitle">Code: VK092</div>
                                    </div>
                                </div>
                                <div style="display: flex; align-items: center; gap: 8px;">
                                    <div class="crc-pill yellow">
                                        <span>Pending</span>
                                    </div>
                                    <div class="expand-chevron"><iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon></div>
                                </div>
                            </div>
                            <div class="crc-expanded-content">
                                <div style="height: 16px;"></div>
                                <div class="crc-data-box gray">
                                    <div class="crc-data-col">
                                        <span class="crc-data-label">Leave Details</span>
                                        <span class="crc-data-value">2.0 Days • Casual Leave</span>
                                    </div>
                                    <div class="crc-data-col" style="padding-top: 12px; border-top: 1px solid rgba(0,0,0,0.05);">
                                        <span class="crc-data-label">Duration</span>
                                        <span class="crc-data-value">12 May 2026 – 13 May 2026</span>
                                    </div>
                                    <div class="crc-data-col" style="padding-top: 12px; border-top: 1px solid rgba(0,0,0,0.05);">
                                        <span class="crc-data-label">Applied On</span>
                                        <span class="crc-data-value">10 May 2026</span>
                                    </div>
                                    <div class="crc-data-col" style="padding-top: 12px; border-top: 1px solid rgba(0,0,0,0.05);">
                                        <span class="crc-data-label">Remarks</span>
                                        <span class="crc-data-value" style="line-height: 1.4; color: #64748b; font-style: italic;">Family emergency</span>
                                    </div>
                                </div>
                                <div style="display: flex; gap: 8px; margin-top: 12px;">
                                    <button class="btn btn-block" style="background: #22c55e; color: white; flex: 1; border-radius: 10px; height: 44px; border: none; font-weight: 600; display: flex; align-items: center; justify-content: center; gap: 8px;"><iconify-icon icon="solar:check-read-linear" style="font-size: 18px;"></iconify-icon> Sanction</button>
                                    <button class="btn btn-block" style="background: #ef4444; color: white; flex: 1; border-radius: 10px; height: 44px; border: none; font-weight: 600; display: flex; align-items: center; justify-content: center; gap: 8px;"><iconify-icon icon="solar:close-square-linear" style="font-size: 18px;"></iconify-icon> Reject</button>
                                </div>
                            </div>
                        </div>
                    </main>`;
replaceMain('leave-sanction-screen', leaveSanctionMain);

// 2. EXPENSE SANCTION
const expenseSanctionMain = `
                    <main class="scrollable-cards" style="padding-bottom: 80px; padding-top: 16px;">
                        <!-- Expense Card 1 -->
                        <div class="custom-report-card crc-yellow">
                            <div class="crc-header" onclick="toggleCard(this)" style="cursor: pointer;">
                                <div class="crc-header-left">
                                    <div class="sidebar-avatar" style="background: #e0f2fe; color: #0369a1; font-size: 18px; width: 44px; height: 44px;">A</div>
                                    <div>
                                        <div class="crc-title">Anil Yadav</div>
                                        <div class="crc-subtitle">Code: AY104</div>
                                    </div>
                                </div>
                                <div style="display: flex; align-items: center; gap: 8px;">
                                    <div class="crc-pill yellow">
                                        <span>Pending</span>
                                    </div>
                                    <div class="expand-chevron"><iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon></div>
                                </div>
                            </div>
                            <div class="crc-expanded-content">
                                <div style="height: 16px;"></div>
                                <div class="crc-data-box gray">
                                    <div class="crc-data-col">
                                        <span class="crc-data-label">Expense Details</span>
                                        <span class="crc-data-value">₹ 2,450 • Client Meeting</span>
                                    </div>
                                    <div class="crc-data-col" style="padding-top: 12px; border-top: 1px solid rgba(0,0,0,0.05);">
                                        <span class="crc-data-label">Date Incurred</span>
                                        <span class="crc-data-value">24 May 2026</span>
                                    </div>
                                    <div class="crc-data-col" style="padding-top: 12px; border-top: 1px solid rgba(0,0,0,0.05);">
                                        <span class="crc-data-label">Category</span>
                                        <span class="crc-data-value">Travel & Food</span>
                                    </div>
                                </div>
                                <div style="display: flex; gap: 8px; margin-top: 12px;">
                                    <button class="btn btn-block" style="background: #22c55e; color: white; flex: 1; border-radius: 10px; height: 44px; border: none; font-weight: 600; display: flex; align-items: center; justify-content: center; gap: 8px;"><iconify-icon icon="solar:check-read-linear" style="font-size: 18px;"></iconify-icon> Sanction</button>
                                    <button class="btn btn-block" style="background: #ef4444; color: white; flex: 1; border-radius: 10px; height: 44px; border: none; font-weight: 600; display: flex; align-items: center; justify-content: center; gap: 8px;"><iconify-icon icon="solar:close-square-linear" style="font-size: 18px;"></iconify-icon> Reject</button>
                                </div>
                            </div>
                        </div>

                        <!-- Expense Card 2 -->
                        <div class="custom-report-card crc-yellow">
                            <div class="crc-header" onclick="toggleCard(this)" style="cursor: pointer;">
                                <div class="crc-header-left">
                                    <div class="sidebar-avatar" style="background: #fce7f3; color: #be185d; font-size: 18px; width: 44px; height: 44px;">S</div>
                                    <div>
                                        <div class="crc-title">Sarah Jones</div>
                                        <div class="crc-subtitle">Code: SJ209</div>
                                    </div>
                                </div>
                                <div style="display: flex; align-items: center; gap: 8px;">
                                    <div class="crc-pill yellow">
                                        <span>Pending</span>
                                    </div>
                                    <div class="expand-chevron"><iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon></div>
                                </div>
                            </div>
                            <div class="crc-expanded-content">
                                <div style="height: 16px;"></div>
                                <div class="crc-data-box gray">
                                    <div class="crc-data-col">
                                        <span class="crc-data-label">Expense Details</span>
                                        <span class="crc-data-value">₹ 800 • Office Supplies</span>
                                    </div>
                                    <div class="crc-data-col" style="padding-top: 12px; border-top: 1px solid rgba(0,0,0,0.05);">
                                        <span class="crc-data-label">Date Incurred</span>
                                        <span class="crc-data-value">25 May 2026</span>
                                    </div>
                                </div>
                                <div style="display: flex; gap: 8px; margin-top: 12px;">
                                    <button class="btn btn-block" style="background: #22c55e; color: white; flex: 1; border-radius: 10px; height: 44px; border: none; font-weight: 600; display: flex; align-items: center; justify-content: center; gap: 8px;"><iconify-icon icon="solar:check-read-linear" style="font-size: 18px;"></iconify-icon> Sanction</button>
                                    <button class="btn btn-block" style="background: #ef4444; color: white; flex: 1; border-radius: 10px; height: 44px; border: none; font-weight: 600; display: flex; align-items: center; justify-content: center; gap: 8px;"><iconify-icon icon="solar:close-square-linear" style="font-size: 18px;"></iconify-icon> Reject</button>
                                </div>
                            </div>
                        </div>
                    </main>`;
replaceMain('expense-sanction-screen', expenseSanctionMain);

// 3. OD TOUR SANCTION
const odTourSanctionMain = `
                    <main class="scrollable-cards" style="padding-bottom: 80px; padding-top: 16px;">
                        <!-- OD Card 1 -->
                        <div class="custom-report-card crc-yellow">
                            <div class="crc-header" onclick="toggleCard(this)" style="cursor: pointer;">
                                <div class="crc-header-left">
                                    <div class="sidebar-avatar" style="background: #fde6c5; color: #d97706; font-size: 18px; width: 44px; height: 44px;">U</div>
                                    <div>
                                        <div class="crc-title">Umesh Chandra Rav</div>
                                        <div class="crc-subtitle">Code: sael001</div>
                                    </div>
                                </div>
                                <div style="display: flex; align-items: center; gap: 8px;">
                                    <div class="crc-pill yellow">
                                        <span>Pending</span>
                                    </div>
                                    <div class="expand-chevron"><iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon></div>
                                </div>
                            </div>
                            <div class="crc-expanded-content">
                                <div style="height: 16px;"></div>
                                <div class="crc-data-box gray">
                                    <div class="crc-data-col">
                                        <span class="crc-data-label">Type & Duration</span>
                                        <span class="crc-data-value">Mispunch • 03 Apr 2026</span>
                                    </div>
                                    <div class="crc-data-col" style="padding-top: 12px; border-top: 1px solid rgba(0,0,0,0.05);">
                                        <span class="crc-data-label">Punch In / Out</span>
                                        <span class="crc-data-value">14:37 – 14:37</span>
                                    </div>
                                    <div class="crc-data-col" style="padding-top: 12px; border-top: 1px solid rgba(0,0,0,0.05);">
                                        <span class="crc-data-label">Remarks</span>
                                        <span class="crc-data-value" style="line-height: 1.4; color: #64748b; font-style: italic;">ji</span>
                                    </div>
                                </div>
                                <div style="display: flex; gap: 8px; margin-top: 12px;">
                                    <button class="btn btn-block" style="background: #22c55e; color: white; flex: 1; border-radius: 10px; height: 44px; border: none; font-weight: 600; display: flex; align-items: center; justify-content: center; gap: 8px;"><iconify-icon icon="solar:check-read-linear" style="font-size: 18px;"></iconify-icon> Sanction</button>
                                    <button class="btn btn-block" style="background: #ef4444; color: white; flex: 1; border-radius: 10px; height: 44px; border: none; font-weight: 600; display: flex; align-items: center; justify-content: center; gap: 8px;"><iconify-icon icon="solar:close-square-linear" style="font-size: 18px;"></iconify-icon> Reject</button>
                                </div>
                            </div>
                        </div>

                        <!-- OD Card 2 -->
                        <div class="custom-report-card crc-yellow">
                            <div class="crc-header" onclick="toggleCard(this)" style="cursor: pointer;">
                                <div class="crc-header-left">
                                    <div class="sidebar-avatar" style="background: #fde6c5; color: #d97706; font-size: 18px; width: 44px; height: 44px;">U</div>
                                    <div>
                                        <div class="crc-title">Umesh Chandra Rav</div>
                                        <div class="crc-subtitle">Code: Sael001</div>
                                    </div>
                                </div>
                                <div style="display: flex; align-items: center; gap: 8px;">
                                    <div class="crc-pill yellow">
                                        <span>Pending</span>
                                    </div>
                                    <div class="expand-chevron"><iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon></div>
                                </div>
                            </div>
                            <div class="crc-expanded-content">
                                <div style="height: 16px;"></div>
                                <div class="crc-data-box gray">
                                    <div class="crc-data-col">
                                        <span class="crc-data-label">Type & Duration</span>
                                        <span class="crc-data-value">Mispunch • 30 Apr 2026</span>
                                    </div>
                                    <div class="crc-data-col" style="padding-top: 12px; border-top: 1px solid rgba(0,0,0,0.05);">
                                        <span class="crc-data-label">Punch In / Out</span>
                                        <span class="crc-data-value">09:00 – 18:00</span>
                                    </div>
                                    <div class="crc-data-col" style="padding-top: 12px; border-top: 1px solid rgba(0,0,0,0.05);">
                                        <span class="crc-data-label">Applied On</span>
                                        <span class="crc-data-value">31 Mar 2026</span>
                                    </div>
                                    <div class="crc-data-col" style="padding-top: 12px; border-top: 1px solid rgba(0,0,0,0.05);">
                                        <span class="crc-data-label">Remarks</span>
                                        <span class="crc-data-value" style="line-height: 1.4; color: #64748b; font-style: italic;">Forgot punch out</span>
                                    </div>
                                </div>
                                <div style="display: flex; gap: 8px; margin-top: 12px;">
                                    <button class="btn btn-block" style="background: #22c55e; color: white; flex: 1; border-radius: 10px; height: 44px; border: none; font-weight: 600; display: flex; align-items: center; justify-content: center; gap: 8px;"><iconify-icon icon="solar:check-read-linear" style="font-size: 18px;"></iconify-icon> Sanction</button>
                                    <button class="btn btn-block" style="background: #ef4444; color: white; flex: 1; border-radius: 10px; height: 44px; border: none; font-weight: 600; display: flex; align-items: center; justify-content: center; gap: 8px;"><iconify-icon icon="solar:close-square-linear" style="font-size: 18px;"></iconify-icon> Reject</button>
                                </div>
                            </div>
                        </div>
                    </main>`;
replaceMain('od-tour-sanction-screen', odTourSanctionMain);

// 4. MY TEAM
const myTeamMain = `
                    <main class="scrollable-cards" style="padding-bottom: 80px; padding-top: 16px;">
                        <!-- Team Card 1 -->
                        <div class="custom-report-card crc-blue">
                            <div class="crc-header" onclick="toggleCard(this)" style="cursor: pointer;">
                                <div class="crc-header-left">
                                    <div class="sidebar-avatar" style="background: #ffe4e6; color: #e11d48; font-size: 18px; width: 44px; height: 44px; font-weight: 700;">A</div>
                                    <div>
                                        <div class="crc-title" style="font-size: 15px; font-weight: 700; text-transform: uppercase;">AMAN</div>
                                        <div class="crc-subtitle">Code: A • Admin</div>
                                    </div>
                                </div>
                                <div style="display: flex; align-items: center; gap: 8px;">
                                    <div class="crc-pill red">
                                        <span>Absent</span>
                                    </div>
                                    <div class="expand-chevron"><iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon></div>
                                </div>
                            </div>
                            <div class="crc-expanded-content">
                                <div style="height: 16px;"></div>
                                <button class="btn btn-block" onclick="openBottomSheet('team-attendance-sheet', 'AMAN')" style="background: #f1f5f9; color: #3b82f6; border-radius: 10px; height: 44px; border: 1px solid #e2e8f0; font-weight: 600; display: flex; align-items: center; justify-content: center; gap: 8px; font-size: 14px;">
                                    <iconify-icon icon="solar:document-text-bold" style="font-size: 18px;"></iconify-icon> View Full Report
                                </button>
                            </div>
                        </div>

                        <!-- Team Card 2 -->
                        <div class="custom-report-card crc-blue">
                            <div class="crc-header" onclick="toggleCard(this)" style="cursor: pointer;">
                                <div class="crc-header-left">
                                    <div class="sidebar-avatar" style="background: #e0e7ff; color: #4338ca; font-size: 18px; width: 44px; height: 44px; font-weight: 700;">B</div>
                                    <div>
                                        <div class="crc-title" style="font-size: 15px; font-weight: 700;">Balwinder Singh</div>
                                        <div class="crc-subtitle">Code: VPPL0011 • Security</div>
                                    </div>
                                </div>
                                <div style="display: flex; align-items: center; gap: 8px;">
                                    <div class="crc-pill red">
                                        <span>Absent</span>
                                    </div>
                                    <div class="expand-chevron"><iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon></div>
                                </div>
                            </div>
                            <div class="crc-expanded-content">
                                <div style="height: 16px;"></div>
                                <button class="btn btn-block" onclick="openBottomSheet('team-attendance-sheet', 'Balwinder Singh')" style="background: #f1f5f9; color: #3b82f6; border-radius: 10px; height: 44px; border: 1px solid #e2e8f0; font-weight: 600; display: flex; align-items: center; justify-content: center; gap: 8px; font-size: 14px;">
                                    <iconify-icon icon="solar:document-text-bold" style="font-size: 18px;"></iconify-icon> View Full Report
                                </button>
                            </div>
                        </div>
                    </main>`;
replaceMain('my-team-screen', myTeamMain);


fs.writeFileSync('Mobile/index.html', html);
console.log('Main screens updated.');
