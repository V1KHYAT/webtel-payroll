const fs = require('fs');

let html = fs.readFileSync('Mobile/index.html', 'utf8');

const regex = /<!-- ==========================================\s*NEW LEAVE SCREEN\s*========================================== -->[\s\S]*?<!-- OVERLAYS HARDCODED WITHIN APP CONTAINER TO PREVENT OVERFLOW BUGS -->/;

const newScreensHTML = `<!-- ==========================================
                     NEW LEAVE SCREEN
                     ========================================== -->
                <div id="leave-screen" class="screen app-layout">
                    <!-- FIXED BASE LAYER -->
                    <div class="fixed-base">
                        <header class="base-header">
                            <div class="header-left">
                                <button class="ghost-btn" onclick="toggleSidebar()">
                                    <iconify-icon icon="solar:hamburger-menu-bold"></iconify-icon>
                                </button>
                                <div class="user-greeting">
                                    <h1>Leave Application</h1>
                                    <span>Manage your time off</span>
                                </div>
                            </div>
                            <button class="ghost-btn" onclick="openBottomSheet('notifications-sheet')">
                                <iconify-icon icon="solar:bell-bing-bold"></iconify-icon>
                                <span class="notification-dot"></span>
                            </button>
                        </header>
                        <div class="tabs-container" style="background: var(--color-surface); padding: 0 16px; border-bottom: 1px solid var(--color-border); border-radius: 0 0 24px 24px;">
                            <button class="tab-btn active" onclick="switchLeaveTab('leave')" style="padding: 14px 0; display:flex; justify-content:center; gap:8px; font-weight:600;">
                                <iconify-icon icon="solar:user-bold" style="font-size: 18px;"></iconify-icon> Leave
                            </button>
                            <button class="tab-btn" onclick="switchLeaveTab('od')" style="padding: 14px 0; display:flex; justify-content:center; gap:8px; font-weight:600;">
                                <iconify-icon icon="solar:buildings-bold" style="font-size: 18px;"></iconify-icon> OD/TourPunch
                            </button>
                        </div>
                    </div>

                    <!-- SCROLLABLE CARDS LAYER -->
                    <main class="scrollable-cards">
                        
                        <!-- TAB: LEAVE PLAN -->
                        <div id="leave-plan-tab">
                            
                            <!-- Leave Balance Widget -->
                            <div class="attendance-widget" style="padding: 16px; align-items: stretch; text-align: left; margin-bottom: 16px;">
                                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px;">
                                    <div style="display: flex; align-items: center; gap: 8px; color: var(--color-text); font-weight: 700; font-size: 14px;">
                                        <iconify-icon icon="solar:chart-square-bold" style="color: var(--color-accent); font-size: 20px;"></iconify-icon> Leave Balance
                                    </div>
                                </div>
                                <div style="display: flex; justify-content: space-between; font-size: 13px; font-weight: 600; margin-bottom: 12px; padding-bottom: 12px; border-bottom: 1px solid var(--color-border);">
                                    <span style="color: var(--color-text-secondary);">Casual Leave</span>
                                    <span style="color: var(--color-text);">6.00</span>
                                </div>
                                <div style="display: flex; justify-content: space-between; font-size: 13px; font-weight: 600;">
                                    <span style="color: var(--color-text-secondary);">Privilege Leave</span>
                                    <span style="color: var(--color-text);">60.00</span>
                                </div>
                            </div>

                            <!-- Premium Form Layout -->
                            <div class="form-group">
                                <label>Leave Type</label>
                                <select class="form-input">
                                    <option>Select Leave Type</option>
                                    <option>Casual Leave</option>
                                    <option>Privilege Leave</option>
                                </select>
                            </div>
                            
                            <div style="display: flex; gap: 12px;">
                                <div class="form-group" style="flex: 1;">
                                    <label>From Date</label>
                                    <input type="date" class="form-input">
                                </div>
                                <div class="form-group" style="flex: 1;">
                                    <label>Till Date</label>
                                    <input type="date" class="form-input">
                                </div>
                            </div>
                            
                            <div style="display: flex; gap: 12px;">
                                <div class="form-group" style="flex: 1;">
                                    <label>No. of Days</label>
                                    <input type="text" class="form-input" placeholder="0" readonly style="background: #f1f5f9;">
                                </div>
                                <div class="form-group" style="flex: 2;">
                                    <label>Reason</label>
                                    <select class="form-input">
                                        <option>Select Reason</option>
                                        <option>Personal</option>
                                        <option>Medical</option>
                                    </select>
                                </div>
                            </div>

                            <div class="form-group" style="margin-bottom: 24px;">
                                <label>Remarks</label>
                                <textarea class="form-input" style="min-height: 80px; resize: none;" placeholder="Enter details"></textarea>
                            </div>
                            
                            <button class="btn btn-primary btn-block" style="background: var(--color-text); color: var(--color-surface); height: 50px; font-size: 14px; border-radius: 12px;">
                                Submit Leave Request
                            </button>
                        </div>

                        <!-- TAB: OD TOUR -->
                        <div id="leave-od-tab" style="display: none;">
                            <div class="form-group">
                                <label>Type</label>
                                <select class="form-input">
                                    <option>Select Type</option>
                                    <option>Outdoor Duty</option>
                                    <option>Tour</option>
                                </select>
                            </div>
                            
                            <div style="display: flex; gap: 12px;">
                                <div class="form-group" style="flex: 1;">
                                    <label>From Date</label>
                                    <input type="date" class="form-input">
                                </div>
                                <div class="form-group" style="flex: 1;">
                                    <label>Till Date</label>
                                    <input type="date" class="form-input">
                                </div>
                            </div>
                            
                            <div class="form-group">
                                <label>Reason</label>
                                <select class="form-input">
                                    <option>Select Reason</option>
                                    <option>Client Visit</option>
                                    <option>Site Inspection</option>
                                </select>
                            </div>

                            <div class="form-group" style="margin-bottom: 24px;">
                                <label>Remarks</label>
                                <textarea class="form-input" style="min-height: 80px; resize: none;" placeholder="Enter details"></textarea>
                            </div>
                            
                            <button class="btn btn-primary btn-block" style="background: var(--color-text); color: var(--color-surface); height: 50px; font-size: 14px; border-radius: 12px;">
                                Apply Special Leave
                            </button>
                        </div>
                    </main>
                </div>

                <!-- ==========================================
                     VISIT EXPENSE SCREEN
                     ========================================== -->
                <div id="visit-expense-screen" class="screen app-layout">
                    <!-- FIXED BASE LAYER -->
                    <div class="fixed-base">
                        <header class="base-header">
                            <div class="header-left">
                                <button class="ghost-btn" onclick="toggleSidebar()">
                                    <iconify-icon icon="solar:hamburger-menu-bold"></iconify-icon>
                                </button>
                                <div class="user-greeting">
                                    <h1>Apply Expenses</h1>
                                    <span>Business & Travel</span>
                                </div>
                            </div>
                            <button class="ghost-btn" onclick="openBottomSheet('notifications-sheet')">
                                <iconify-icon icon="solar:bell-bing-bold"></iconify-icon>
                                <span class="notification-dot"></span>
                            </button>
                        </header>
                    </div>

                    <!-- SCROLLABLE CARDS LAYER -->
                    <main class="scrollable-cards">
                        <div class="form-group">
                            <label>Expense Type</label>
                            <select class="form-input">
                                <option>Select Expense</option>
                                <option>Travel</option>
                                <option>Meals</option>
                                <option>Accommodation</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label>Transport Mode</label>
                            <select class="form-input">
                                <option>Select Mode</option>
                                <option>Flight</option>
                                <option>Train</option>
                                <option>Cab / Taxi</option>
                            </select>
                        </div>

                        <div class="form-group" style="position: relative;">
                            <label>Attachment</label>
                            <div class="form-input" style="display: flex; align-items: center; justify-content: space-between; cursor: pointer; color: var(--color-text-tertiary);" onclick="mockFilePicker()">
                                <span>Upload Bill / Receipt</span>
                                <div style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 8px; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; color: var(--color-text);">
                                    <iconify-icon icon="solar:upload-minimalistic-bold" style="font-size: 18px;"></iconify-icon>
                                </div>
                            </div>
                        </div>

                        <div class="form-group" style="margin-bottom: 24px;">
                            <label>Remarks / Purpose</label>
                            <textarea class="form-input" style="min-height: 80px; resize: none;" placeholder="Explain the expense..."></textarea>
                        </div>
                        
                        <button class="btn btn-primary btn-block" style="background: var(--color-text); color: var(--color-surface); height: 50px; font-size: 14px; border-radius: 12px;">
                            Submit Expense
                        </button>
                    </main>
                </div>

                <!-- ==========================================
                     EXPENSE REPORT SCREEN (EMPTY)
                     ========================================== -->
                <div id="expense-report-screen" class="screen app-layout">
                    <div class="fixed-base">
                        <header class="base-header">
                            <div class="header-left">
                                <button class="ghost-btn" onclick="toggleSidebar()">
                                    <iconify-icon icon="solar:hamburger-menu-bold"></iconify-icon>
                                </button>
                                <div class="user-greeting">
                                    <h1>Expense Report</h1>
                                    <span>Track your claims</span>
                                </div>
                            </div>
                        </header>
                    </div>
                    <main class="scrollable-cards" style="display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; height: 100%;">
                        <div style="background: var(--color-surface); border: 1px solid var(--color-border); width: 80px; height: 80px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-bottom: 16px;">
                            <iconify-icon icon="solar:bill-cross-bold" style="font-size: 40px; color: var(--color-text-tertiary);"></iconify-icon>
                        </div>
                        <h3 style="font-size: 16px; color: var(--color-text); margin-bottom: 4px;">No Expenses Found</h3>
                        <p style="font-size: 13px; color: var(--color-text-secondary); max-width: 240px; line-height: 1.5;">You haven't submitted any expenses for the selected period.</p>
                    </main>
                </div>

                <!-- ==========================================
                     SALARY REPORT SCREEN (EMPTY)
                     ========================================== -->
                <div id="salary-report-screen" class="screen app-layout">
                    <div class="fixed-base">
                        <header class="base-header">
                            <div class="header-left">
                                <button class="ghost-btn" onclick="toggleSidebar()">
                                    <iconify-icon icon="solar:hamburger-menu-bold"></iconify-icon>
                                </button>
                                <div class="user-greeting">
                                    <h1>Salary Report</h1>
                                    <span>View payslips</span>
                                </div>
                            </div>
                        </header>
                    </div>
                    <main class="scrollable-cards" style="display: flex; flex-direction: column;">
                        
                        <!-- Premium Filter Block -->
                        <div class="attendance-widget" style="padding: 16px; align-items: stretch; text-align: left; margin-bottom: 24px;">
                            <div style="display: flex; gap: 12px; margin-bottom: 16px;">
                                <div class="form-group" style="flex: 1; margin-bottom: 0;">
                                    <label>Month</label>
                                    <select class="form-input">
                                        <option>May</option>
                                    </select>
                                </div>
                                <div class="form-group" style="flex: 1; margin-bottom: 0;">
                                    <label>Year</label>
                                    <select class="form-input">
                                        <option>2026</option>
                                    </select>
                                </div>
                            </div>
                            <div style="display: flex; gap: 12px;">
                                <button class="btn btn-primary" onclick="mockSalaryLoad()" style="flex: 1; background: var(--color-text); color: var(--color-surface); border-radius: 8px;">
                                    Load Data
                                </button>
                                <button class="btn btn-primary" onclick="mockSalaryExport()" style="flex: 1; background: var(--color-surface); color: var(--color-text); border: 1px solid var(--color-border); border-radius: 8px;">
                                    Export PDF
                                </button>
                            </div>
                        </div>
                        
                        <div style="flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; margin-top: 40px;">
                            <div style="background: var(--color-surface); border: 1px solid var(--color-border); width: 80px; height: 80px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-bottom: 16px;">
                                <iconify-icon icon="solar:wad-of-money-bold" style="font-size: 40px; color: var(--color-text-tertiary);"></iconify-icon>
                            </div>
                            <h3 style="font-size: 16px; color: var(--color-text); margin-bottom: 4px;">No Salary Data</h3>
                            <p style="font-size: 13px; color: var(--color-text-secondary); max-width: 240px; line-height: 1.5;">Payslip is not available for the selected month and year.</p>
                        </div>
                    </main>
                </div>

                <!-- ==========================================
                     OD TOUR MISPUNCH REPORT SCREEN
                     ========================================== -->
                <div id="od-tour-report-screen" class="screen app-layout">
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
                    <main class="scrollable-cards">
                        
                        <div class="log-card" style="flex-direction: column; align-items: stretch; padding: 16px; margin-bottom: 12px;">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; padding-bottom: 12px; border-bottom: 1px solid var(--color-border);">
                                <div style="display: flex; flex-direction: column; gap: 4px;">
                                    <strong style="font-size: 14px; font-weight: 700; color: var(--color-text);">WorkFromHome</strong>
                                    <span style="font-size: 11px; color: var(--color-text-secondary);">Applied: 27/03/2026</span>
                                </div>
                                <div class="rc-pill-holiday" style="margin: 0;">
                                    <div class="rc-dot-slate"></div> Pending
                                </div>
                            </div>
                            <div style="display: flex; flex-direction: column; gap: 8px;">
                                <div style="display: flex; justify-content: space-between; font-size: 12px;">
                                    <span style="color: var(--color-text-tertiary);">Date</span>
                                    <strong style="color: var(--color-text);">10/03/2026</strong>
                                </div>
                                <div style="display: flex; justify-content: space-between; font-size: 12px;">
                                    <span style="color: var(--color-text-tertiary);">Time</span>
                                    <strong style="color: var(--color-text);">09:00 - 18:00</strong>
                                </div>
                                <div style="display: flex; justify-content: space-between; font-size: 12px;">
                                    <span style="color: var(--color-text-tertiary);">Remarks</span>
                                    <strong style="color: var(--color-text);">rtghrg</strong>
                                </div>
                            </div>
                            <div style="margin-top: 16px; display: flex; justify-content: flex-end;">
                                <button class="btn btn-primary" style="background: var(--color-surface); color: #ef4444; border: 1px solid #fecaca; border-radius: 8px; padding: 6px 12px; font-size: 12px; height: auto; gap: 6px;">
                                    <iconify-icon icon="solar:trash-bin-trash-bold"></iconify-icon> Delete
                                </button>
                            </div>
                        </div>

                        <div class="log-card" style="flex-direction: column; align-items: stretch; padding: 16px; margin-bottom: 12px;">
                            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px; padding-bottom: 12px; border-bottom: 1px solid var(--color-border);">
                                <div style="display: flex; flex-direction: column; gap: 4px;">
                                    <strong style="font-size: 14px; font-weight: 700; color: var(--color-text);">OD</strong>
                                    <span style="font-size: 11px; color: var(--color-text-secondary);">Applied: 07/01/2026</span>
                                </div>
                                <div class="rc-pill-absent" style="margin: 0; background: #fee2e2; color: #ef4444; padding: 4px 10px; border-radius: 12px; font-size: 10px; font-weight: 700; text-align: right;">
                                    Rejected by<br>Sanction Authority
                                </div>
                            </div>
                            <div style="display: flex; flex-direction: column; gap: 8px;">
                                <div style="display: flex; justify-content: space-between; font-size: 12px;">
                                    <span style="color: var(--color-text-tertiary);">Date</span>
                                    <strong style="color: var(--color-text);">07/01/2026</strong>
                                </div>
                                <div style="display: flex; justify-content: space-between; font-size: 12px;">
                                    <span style="color: var(--color-text-tertiary);">Time</span>
                                    <strong style="color: var(--color-text);">10:48 - 20:48</strong>
                                </div>
                                <div style="display: flex; justify-content: space-between; font-size: 12px;">
                                    <span style="color: var(--color-text-tertiary);">Remarks</span>
                                    <strong style="color: var(--color-text);">dr</strong>
                                </div>
                            </div>
                        </div>

                    </main>
                </div>

                <!-- ==========================================
                     APPLIED LEAVES REPORT SCREEN
                     ========================================== -->
                <div id="applied-leave-report-screen" class="screen app-layout">
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
                    <main class="scrollable-cards">
                        
                        <div class="log-card" style="flex-direction: column; align-items: stretch; padding: 16px; margin-bottom: 12px;">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; padding-bottom: 12px; border-bottom: 1px solid var(--color-border);">
                                <div style="display: flex; flex-direction: column; gap: 4px;">
                                    <strong style="font-size: 14px; font-weight: 700; color: var(--color-text);">Compensatory Off</strong>
                                    <span style="font-size: 11px; color: var(--color-text-secondary);">1.0 Days</span>
                                </div>
                                <div class="rc-pill-absent" style="margin: 0; background: #fee2e2; color: #ef4444; padding: 4px 12px; border-radius: 12px; font-size: 11px; font-weight: 700;">
                                    Rejected
                                </div>
                            </div>
                            <div style="display: flex; flex-direction: column; gap: 8px;">
                                <div style="display: flex; justify-content: space-between; font-size: 12px;">
                                    <span style="color: var(--color-text-tertiary);">Duration</span>
                                    <strong style="color: var(--color-text);">14/01/2026 - 14/01/2026</strong>
                                </div>
                                <div style="display: flex; justify-content: space-between; font-size: 12px;">
                                    <span style="color: var(--color-text-tertiary);">Remarks</span>
                                    <strong style="color: var(--color-text);">djdjjf</strong>
                                </div>
                            </div>
                        </div>

                        <div class="log-card" style="flex-direction: column; align-items: stretch; padding: 16px; margin-bottom: 12px;">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; padding-bottom: 12px; border-bottom: 1px solid var(--color-border);">
                                <div style="display: flex; flex-direction: column; gap: 4px;">
                                    <strong style="font-size: 14px; font-weight: 700; color: var(--color-text);">Casual Leave</strong>
                                    <span style="font-size: 11px; color: var(--color-text-secondary);">1.0 Days</span>
                                </div>
                                <div class="rc-pill-absent" style="margin: 0; background: #fee2e2; color: #ef4444; padding: 4px 12px; border-radius: 12px; font-size: 11px; font-weight: 700;">
                                    Rejected
                                </div>
                            </div>
                            <div style="display: flex; flex-direction: column; gap: 8px;">
                                <div style="display: flex; justify-content: space-between; font-size: 12px;">
                                    <span style="color: var(--color-text-tertiary);">Duration</span>
                                    <strong style="color: var(--color-text);">13/01/2026 - 13/01/2026</strong>
                                </div>
                                <div style="display: flex; justify-content: space-between; font-size: 12px;">
                                    <span style="color: var(--color-text-tertiary);">Remarks</span>
                                    <strong style="color: var(--color-text);">djjdjf</strong>
                                </div>
                            </div>
                        </div>
                        
                        <div class="log-card" style="flex-direction: column; align-items: stretch; padding: 16px; margin-bottom: 12px;">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; padding-bottom: 12px; border-bottom: 1px solid var(--color-border);">
                                <div style="display: flex; flex-direction: column; gap: 4px;">
                                    <strong style="font-size: 14px; font-weight: 700; color: var(--color-text);">Privilege Leave</strong>
                                    <span style="font-size: 11px; color: var(--color-text-secondary);">1.0 Days</span>
                                </div>
                                <div class="rc-pill-absent" style="margin: 0; background: #fee2e2; color: #ef4444; padding: 4px 12px; border-radius: 12px; font-size: 11px; font-weight: 700;">
                                    Rejected
                                </div>
                            </div>
                            <div style="display: flex; flex-direction: column; gap: 8px;">
                                <div style="display: flex; justify-content: space-between; font-size: 12px;">
                                    <span style="color: var(--color-text-tertiary);">Duration</span>
                                    <strong style="color: var(--color-text);">03/01/2026 - 03/01/2026</strong>
                                </div>
                                <div style="display: flex; justify-content: space-between; font-size: 12px;">
                                    <span style="color: var(--color-text-tertiary);">Remarks</span>
                                    <strong style="color: var(--color-text);">ggvv</strong>
                                </div>
                            </div>
                        </div>

                    </main>
                </div>

                <!-- OVERLAYS HARDCODED WITHIN APP CONTAINER TO PREVENT OVERFLOW BUGS -->`;

if (html.match(regex)) {
    html = html.replace(regex, newScreensHTML);
    fs.writeFileSync('Mobile/index.html', html);
    console.log('Replaced all 6 screens with Premium UI successfully.');
} else {
    console.log('Regex did not match the screens section.');
}
