const fs = require('fs');
let html = fs.readFileSync('Mobile/index.html', 'utf8');

const newScreensHTML = `
                <!-- ==========================================
                     NEW LEAVE SCREEN
                     ========================================== -->
                <div id="leave-screen" class="screen app-layout">
                    <header class="top-bar">
                        <button class="ghost-btn" onclick="toggleSidebar()"><iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon></button>
                        <h1 class="page-title">Leave</h1>
                        <button class="ghost-btn"><iconify-icon icon="solar:bell-linear"></iconify-icon></button>
                    </header>
                    <main class="scrollable-content" style="background: var(--color-canvas); padding: 0;">
                        <!-- Segmented Tabs -->
                        <div class="tabs-container" style="background: var(--color-surface); padding: 0 16px; border-bottom: 1px solid var(--color-border); margin-bottom: 16px;">
                            <button class="tab-btn active" onclick="switchLeaveTab('leave')" style="flex-direction: column; gap: 4px; padding: 12px 0;">
                                <iconify-icon icon="solar:user-bold" style="font-size: 20px;"></iconify-icon>
                                <span>Leave</span>
                            </button>
                            <button class="tab-btn" onclick="switchLeaveTab('od')" style="flex-direction: column; gap: 4px; padding: 12px 0;">
                                <iconify-icon icon="solar:buildings-bold" style="font-size: 20px; color: var(--color-text-tertiary);"></iconify-icon>
                                <span>OD/TourPunch</span>
                            </button>
                        </div>
                        
                        <!-- TAB: LEAVE PLAN -->
                        <div id="leave-plan-tab" style="padding: 0 16px;">
                            <div class="leave-form-container" style="background: #ffffff; border-radius: 20px; padding: 20px; box-shadow: 0 4px 16px rgba(0,0,0,0.02);">
                                <h3 style="font-size: 13px; color: var(--color-text-tertiary); font-weight: 500; margin-bottom: 12px; border-bottom: 1px solid var(--color-border); padding-bottom: 8px;">Plan your leave in advance</h3>
                                
                                <div class="balance-card" style="background: #f8f9fc; border-radius: 12px; padding: 16px; margin-bottom: 16px;">
                                    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
                                        <div style="display: flex; align-items: center; gap: 8px; color: #1e1b4b; font-weight: 700; font-size: 14px;">
                                            <iconify-icon icon="solar:chart-square-bold"></iconify-icon> Available Leave Balance
                                        </div>
                                        <iconify-icon icon="solar:alt-arrow-up-linear" style="color: #4f46e5; font-size: 16px;"></iconify-icon>
                                    </div>
                                    <div style="display: flex; justify-content: space-between; font-size: 13px; font-weight: 600; margin-bottom: 8px;">
                                        <span style="color: var(--color-text-secondary);">Casual Leave</span>
                                        <span style="color: #4f46e5;">6.00 days</span>
                                    </div>
                                    <div style="display: flex; justify-content: space-between; font-size: 13px; font-weight: 600;">
                                        <span style="color: var(--color-text-secondary);">Privilege Leave</span>
                                        <span style="color: #4f46e5;">60.00 days</span>
                                    </div>
                                </div>

                                <div class="expense-form-group">
                                    <div class="input-wrapper">
                                        <iconify-icon icon="solar:case-minimalistic-bold" class="input-icon" style="color: #4f46e5;"></iconify-icon>
                                        <select class="form-input" style="padding-left: 44px; color: var(--color-text-secondary); font-weight: 500;">
                                            <option>Leave Type</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="expense-form-group">
                                    <div class="input-wrapper">
                                        <iconify-icon icon="solar:calendar-bold" class="input-icon" style="color: #4f46e5;"></iconify-icon>
                                        <input type="text" class="form-input" style="padding-left: 44px;" placeholder="From Date">
                                    </div>
                                </div>
                                <div class="expense-form-group">
                                    <div class="input-wrapper">
                                        <iconify-icon icon="solar:calendar-bold" class="input-icon" style="color: #4f46e5;"></iconify-icon>
                                        <input type="text" class="form-input" style="padding-left: 44px;" placeholder="Till Date">
                                    </div>
                                </div>
                                <div class="expense-form-group">
                                    <div class="input-wrapper">
                                        <iconify-icon icon="solar:calendar-bold" class="input-icon" style="color: #4f46e5;"></iconify-icon>
                                        <input type="text" class="form-input" style="padding-left: 44px;" placeholder="Till Date">
                                    </div>
                                </div>
                                <div class="expense-form-group">
                                    <div class="input-wrapper">
                                        <iconify-icon icon="solar:clipboard-check-bold" class="input-icon" style="color: #4f46e5;"></iconify-icon>
                                        <input type="text" class="form-input" style="padding-left: 44px;" placeholder="No. of Days">
                                    </div>
                                </div>
                                <div class="expense-form-group">
                                    <div class="input-wrapper">
                                        <iconify-icon icon="solar:info-circle-bold" class="input-icon" style="color: #4f46e5;"></iconify-icon>
                                        <select class="form-input" style="padding-left: 44px; color: var(--color-text-secondary); font-weight: 500;">
                                            <option>Reason</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="expense-form-group" style="margin-bottom: 24px;">
                                    <div class="input-wrapper" style="align-items: flex-start; border-radius: 16px;">
                                        <iconify-icon icon="solar:pen-bold" class="input-icon" style="color: #4f46e5; margin-top: 14px;"></iconify-icon>
                                        <textarea class="form-input" style="padding-left: 44px; padding-top: 14px; min-height: 80px; resize: none;" placeholder="Remarks"></textarea>
                                    </div>
                                    <div style="text-align: right; font-size: 11px; color: var(--color-text-tertiary); margin-top: 4px;">0/50</div>
                                </div>
                                
                                <button class="btn btn-primary btn-block" style="background: #3b82f6; border-radius: 12px; gap: 8px;">
                                    <iconify-icon icon="solar:plain-bold"></iconify-icon> Apply Leave
                                </button>
                            </div>
                        </div>

                        <!-- TAB: OD TOUR -->
                        <div id="leave-od-tab" style="padding: 0 16px; display: none;">
                            <div class="leave-form-container" style="background: #ffffff; border-radius: 20px; padding: 20px; box-shadow: 0 4px 16px rgba(0,0,0,0.02);">
                                <h3 style="font-size: 13px; color: var(--color-text-tertiary); font-weight: 500; margin-bottom: 16px; border-bottom: 1px solid var(--color-border); padding-bottom: 8px;">For short leave, outdoor duty, etc.</h3>
                                
                                <div class="expense-form-group">
                                    <div class="input-wrapper">
                                        <iconify-icon icon="solar:case-minimalistic-bold" class="input-icon" style="color: #4f46e5;"></iconify-icon>
                                        <select class="form-input" style="padding-left: 44px; color: var(--color-text-secondary); font-weight: 500;">
                                            <option>Select</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="expense-form-group">
                                    <div class="input-wrapper">
                                        <iconify-icon icon="solar:calendar-bold" class="input-icon" style="color: #4f46e5;"></iconify-icon>
                                        <input type="text" class="form-input" style="padding-left: 44px;" placeholder="Date">
                                    </div>
                                </div>
                                <div class="expense-form-group">
                                    <div class="input-wrapper">
                                        <iconify-icon icon="solar:calendar-bold" class="input-icon" style="color: #4f46e5;"></iconify-icon>
                                        <input type="text" class="form-input" style="padding-left: 44px;" placeholder="Till Date">
                                    </div>
                                </div>
                                <div class="expense-form-group">
                                    <div class="input-wrapper">
                                        <iconify-icon icon="solar:calendar-bold" class="input-icon" style="color: #4f46e5;"></iconify-icon>
                                        <input type="text" class="form-input" style="padding-left: 44px;" placeholder="Till Date">
                                    </div>
                                </div>
                                <div class="expense-form-group">
                                    <div class="input-wrapper">
                                        <iconify-icon icon="solar:info-circle-bold" class="input-icon" style="color: #4f46e5;"></iconify-icon>
                                        <select class="form-input" style="padding-left: 44px; color: var(--color-text-secondary); font-weight: 500;">
                                            <option>Reason</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="expense-form-group" style="margin-bottom: 24px;">
                                    <div class="input-wrapper" style="align-items: flex-start; border-radius: 16px;">
                                        <iconify-icon icon="solar:pen-bold" class="input-icon" style="color: #4f46e5; margin-top: 14px;"></iconify-icon>
                                        <textarea class="form-input" style="padding-left: 44px; padding-top: 14px; min-height: 80px; resize: none;" placeholder="Remarks"></textarea>
                                    </div>
                                    <div style="text-align: right; font-size: 11px; color: var(--color-text-tertiary); margin-top: 4px;">0/50</div>
                                </div>
                                
                                <button class="btn btn-primary btn-block" style="background: #3b82f6; border-radius: 12px; gap: 8px;">
                                    <iconify-icon icon="solar:plain-bold"></iconify-icon> Apply Special Leave
                                </button>
                            </div>
                        </div>
                    </main>
                </div>

                <!-- ==========================================
                     VISIT EXPENSE SCREEN
                     ========================================== -->
                <div id="visit-expense-screen" class="screen app-layout">
                    <header class="top-bar">
                        <button class="ghost-btn" onclick="toggleSidebar()"><iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon></button>
                        <h1 class="page-title">Apply Expenses</h1>
                        <button class="ghost-btn"><iconify-icon icon="solar:bell-linear"></iconify-icon></button>
                    </header>
                    <main class="scrollable-content" style="background: var(--color-canvas); padding: 16px;">
                        <div class="leave-form-container" style="background: #ffffff; border-radius: 20px; padding: 20px; box-shadow: 0 4px 16px rgba(0,0,0,0.02);">
                            <h3 style="font-size: 13px; color: var(--color-text-tertiary); font-weight: 500; margin-bottom: 16px; border-bottom: 1px solid var(--color-border); padding-bottom: 8px;">Claim your business or travel expenses</h3>
                            
                            <div class="expense-form-group">
                                <div class="input-wrapper">
                                    <iconify-icon icon="solar:bill-bold" class="input-icon" style="color: #4f46e5;"></iconify-icon>
                                    <select class="form-input" style="padding-left: 44px; color: var(--color-text-secondary); font-weight: 500;">
                                        <option>Expense Type</option>
                                    </select>
                                </div>
                            </div>
                            <div class="expense-form-group">
                                <div class="input-wrapper">
                                    <iconify-icon icon="solar:bus-bold" class="input-icon" style="color: #4f46e5;"></iconify-icon>
                                    <select class="form-input" style="padding-left: 44px; color: var(--color-text-secondary); font-weight: 500;">
                                        <option>Transport Mode</option>
                                    </select>
                                </div>
                            </div>
                            <div class="expense-form-group" style="position: relative;">
                                <div class="input-wrapper">
                                    <iconify-icon icon="solar:paperclip-bold" class="input-icon" style="color: #4f46e5;"></iconify-icon>
                                    <input type="text" class="form-input" style="padding-left: 44px;" placeholder="Attachment (Bill/Rec..." readonly>
                                </div>
                                <button onclick="mockFilePicker()" style="position: absolute; right: 12px; top: 12px; background: #4f46e5; color: white; border: none; border-radius: 8px; width: 30px; height: 30px; display: flex; align-items: center; justify-content: center; cursor: pointer;">
                                    <iconify-icon icon="solar:upload-bold" style="font-size: 16px;"></iconify-icon>
                                </button>
                            </div>
                            <div class="expense-form-group" style="margin-bottom: 24px;">
                                <div class="input-wrapper" style="align-items: flex-start; border-radius: 16px;">
                                    <iconify-icon icon="solar:pen-bold" class="input-icon" style="color: #4f46e5; margin-top: 14px;"></iconify-icon>
                                    <textarea class="form-input" style="padding-left: 44px; padding-top: 14px; min-height: 80px; resize: none;" placeholder="Remarks / Purpose"></textarea>
                                </div>
                                <div style="text-align: right; font-size: 11px; color: var(--color-text-tertiary); margin-top: 4px;">0/50</div>
                            </div>
                            
                            <button class="btn btn-primary btn-block" style="background: #3b82f6; border-radius: 12px; gap: 8px;">
                                <iconify-icon icon="solar:plain-bold"></iconify-icon> Submit Expense
                            </button>
                        </div>
                    </main>
                </div>

                <!-- ==========================================
                     EXPENSE REPORT SCREEN (EMPTY)
                     ========================================== -->
                <div id="expense-report-screen" class="screen app-layout">
                    <header class="top-bar">
                        <button class="ghost-btn" onclick="toggleSidebar()"><iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon></button>
                        <h1 class="page-title">Expense Report</h1>
                        <button class="ghost-btn"><iconify-icon icon="solar:bell-linear"></iconify-icon></button>
                    </header>
                    <main class="scrollable-content" style="background: var(--color-canvas); padding: 16px; display: flex; align-items: center; justify-content: center; flex-direction: column; text-align: center;">
                        <iconify-icon icon="solar:calendar-minimalistic-bold" style="font-size: 80px; color: #cbd5e1; margin-bottom: 16px;"></iconify-icon>
                        <div style="font-size: 16px; font-weight: 500; color: #64748b;">No records found</div>
                    </main>
                </div>

                <!-- ==========================================
                     SALARY REPORT SCREEN (EMPTY)
                     ========================================== -->
                <div id="salary-report-screen" class="screen app-layout">
                    <header class="top-bar">
                        <button class="ghost-btn" onclick="toggleSidebar()"><iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon></button>
                        <h1 class="page-title">Salary Report</h1>
                        <button class="ghost-btn"><iconify-icon icon="solar:bell-linear"></iconify-icon></button>
                    </header>
                    <main class="scrollable-content" style="background: var(--color-canvas); padding: 16px; display: flex; flex-direction: column;">
                        
                        <div style="background: #ffffff; padding: 16px; border-radius: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.02); margin-bottom: 24px; border: 1px solid var(--color-border);">
                            <div style="display: flex; gap: 12px; margin-bottom: 16px;">
                                <div class="expense-form-group" style="flex: 1; margin-bottom: 0;">
                                    <div style="font-size: 11px; color: #6366f1; font-weight: 600; margin-bottom: -6px; margin-left: 8px; background: white; padding: 0 4px; display: inline-block; position: relative; z-index: 10;">Month</div>
                                    <div class="input-wrapper" style="border-color: #6366f1;">
                                        <select class="form-input" style="font-weight: 600;">
                                            <option>May</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="expense-form-group" style="flex: 1; margin-bottom: 0;">
                                    <div style="font-size: 11px; color: var(--color-text-secondary); font-weight: 600; margin-bottom: -6px; margin-left: 8px; background: white; padding: 0 4px; display: inline-block; position: relative; z-index: 10;">Year</div>
                                    <div class="input-wrapper">
                                        <select class="form-input" style="font-weight: 600;">
                                            <option>2026</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div style="display: flex; gap: 12px; justify-content: center;">
                                <button class="btn btn-primary" onclick="mockSalaryLoad()" style="background: #3b82f6; flex: 0 1 120px; border-radius: 8px; gap: 6px;"><iconify-icon icon="solar:magnifer-bold"></iconify-icon> Load</button>
                                <button class="btn btn-primary" onclick="mockSalaryExport()" style="background: #22c55e; flex: 0 1 120px; border-radius: 8px; gap: 6px;"><iconify-icon icon="solar:import-bold"></iconify-icon> Export</button>
                            </div>
                        </div>
                        
                        <div style="flex: 1; display: flex; align-items: center; justify-content: center; font-size: 14px; font-weight: 500; color: #334155;">
                            No Data
                        </div>
                    </main>
                </div>

                <!-- ==========================================
                     OD TOUR MISPUNCH REPORT SCREEN
                     ========================================== -->
                <div id="od-tour-report-screen" class="screen app-layout">
                    <header class="top-bar">
                        <button class="ghost-btn" onclick="toggleSidebar()"><iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon></button>
                        <h1 class="page-title" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 200px;">OD Tour Mispunch ...</h1>
                        <button class="ghost-btn"><iconify-icon icon="solar:bell-linear"></iconify-icon></button>
                    </header>
                    <main class="scrollable-content" style="background: #f4f8fb; padding: 16px;">
                        
                        <div class="detailed-report-card">
                            <div class="drc-header">
                                <strong>Vijay Pal</strong>
                                <span>Code: sael142</span>
                            </div>
                            <div class="drc-row"><span>Emplyoyee Code:</span><strong>sael142</strong></div>
                            <div class="drc-row"><span>Leave Type:</span><strong>WorkFromHome</strong></div>
                            <div class="drc-row"><span>Leave Applied:</span><strong>27/03/2026</strong></div>
                            <div class="drc-row"><span>From Date:</span><strong>10/03/2026</strong></div>
                            <div class="drc-row"><span>To Date:</span><strong>10/03/2026</strong></div>
                            <div class="drc-row"><span>In Time:</span><strong>09:00</strong></div>
                            <div class="drc-row"><span>Out Time:</span><strong>18:00</strong></div>
                            <div class="drc-row"><span>Remarks:</span><strong>rtghrg</strong></div>
                            <div class="drc-row drc-status"><span>Status:</span><div class="drc-pill-blue">Still Pending</div></div>
                            <div class="drc-actions">
                                <button class="btn btn-primary" style="background: #ef4444; border-radius: 8px; padding: 8px 16px; font-size: 13px; height: auto;"><iconify-icon icon="solar:trash-bin-trash-bold"></iconify-icon> Delete</button>
                            </div>
                        </div>

                        <div class="detailed-report-card">
                            <div class="drc-header">
                                <strong>Vijay Pal</strong>
                                <span>Code: sael142</span>
                            </div>
                            <div class="drc-row"><span>Emplyoyee Code:</span><strong>sael142</strong></div>
                            <div class="drc-row"><span>Leave Type:</span><strong>OD</strong></div>
                            <div class="drc-row"><span>Leave Applied:</span><strong>07/01/2026</strong></div>
                            <div class="drc-row"><span>From Date:</span><strong>07/01/2026</strong></div>
                            <div class="drc-row"><span>To Date:</span><strong>07/01/2026</strong></div>
                            <div class="drc-row"><span>In Time:</span><strong>10:48</strong></div>
                            <div class="drc-row"><span>Out Time:</span><strong>20:48</strong></div>
                            <div class="drc-row"><span>Remarks:</span><strong>dr</strong></div>
                            <div class="drc-row drc-status"><span>Status:</span><div class="drc-pill-blue" style="max-width: 180px;">Rejected by Sanction Authority</div></div>
                        </div>
                    </main>
                </div>

                <!-- ==========================================
                     APPLIED LEAVES REPORT SCREEN
                     ========================================== -->
                <div id="applied-leave-report-screen" class="screen app-layout">
                    <header class="top-bar">
                        <button class="ghost-btn" onclick="toggleSidebar()"><iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon></button>
                        <h1 class="page-title">Applied Leave Report</h1>
                        <button class="ghost-btn"><iconify-icon icon="solar:bell-linear"></iconify-icon></button>
                    </header>
                    <main class="scrollable-content" style="background: #f4f8fb; padding: 16px;">
                        
                        <div class="detailed-report-card">
                            <div class="drc-header">
                                <strong>Vijay Pal</strong>
                                <span>Code: sael142</span>
                            </div>
                            <div class="drc-row"><span>No of Leave:</span><strong>1.0</strong></div>
                            <div class="drc-row"><span>Leave Type:</span><strong>Compensatory Off</strong></div>
                            <div class="drc-row"><span>From Date:</span><strong>14/01/2026</strong></div>
                            <div class="drc-row"><span>To Date:</span><strong>14/01/2026</strong></div>
                            <div class="drc-row"><span>Remarks:</span><strong>djdjjf</strong></div>
                            <div class="drc-row drc-status"><span>Status:</span><div class="drc-pill-red">Rejected</div></div>
                        </div>

                        <div class="detailed-report-card">
                            <div class="drc-header">
                                <strong>Vijay Pal</strong>
                                <span>Code: sael142</span>
                            </div>
                            <div class="drc-row"><span>No of Leave:</span><strong>1.0</strong></div>
                            <div class="drc-row"><span>Leave Type:</span><strong>Casual Leave</strong></div>
                            <div class="drc-row"><span>From Date:</span><strong>13/01/2026</strong></div>
                            <div class="drc-row"><span>To Date:</span><strong>13/01/2026</strong></div>
                            <div class="drc-row"><span>Remarks:</span><strong>djjdjf</strong></div>
                            <div class="drc-row drc-status"><span>Status:</span><div class="drc-pill-red">Rejected</div></div>
                        </div>
                        
                        <div class="detailed-report-card">
                            <div class="drc-header">
                                <strong>Vijay Pal</strong>
                                <span>Code: sael142</span>
                            </div>
                            <div class="drc-row"><span>No of Leave:</span><strong>1.0</strong></div>
                            <div class="drc-row"><span>Leave Type:</span><strong>Privilege Leave</strong></div>
                            <div class="drc-row"><span>From Date:</span><strong>03/01/2026</strong></div>
                            <div class="drc-row"><span>To Date:</span><strong>03/01/2026</strong></div>
                            <div class="drc-row"><span>Remarks:</span><strong>ggvv</strong></div>
                            <div class="drc-row drc-status"><span>Status:</span><div class="drc-pill-red">Rejected</div></div>
                        </div>
                    </main>
                </div>
`;

// Insert right before <!-- OVERLAYS HARDCODED WITHIN APP CONTAINER TO PREVENT OVERFLOW BUGS -->
html = html.replace(/<!-- OVERLAYS HARDCODED WITHIN APP CONTAINER TO PREVENT OVERFLOW BUGS -->/, newScreensHTML + '\n                <!-- OVERLAYS HARDCODED WITHIN APP CONTAINER TO PREVENT OVERFLOW BUGS -->');

fs.writeFileSync('Mobile/index.html', html);
console.log('Appended 6 new screens.');
