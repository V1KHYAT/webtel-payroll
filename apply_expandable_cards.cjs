const fs = require('fs');

// 1. UPDATE STYLES
let css = fs.readFileSync('Mobile/css/styles.css', 'utf8');

const newCSS = `
.crc-expanded-content {
    display: none;
    animation: fadeIn 0.3s ease;
}
.custom-report-card.expanded .crc-expanded-content {
    display: block;
}
.expand-chevron {
    transition: transform 0.3s ease;
    font-size: 20px;
    color: var(--color-text-tertiary);
    display: flex;
    align-items: center;
}
.custom-report-card.expanded .expand-chevron {
    transform: rotate(180deg);
}
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(-4px); }
    to { opacity: 1; transform: translateY(0); }
}
`;

if (!css.includes('.crc-expanded-content')) {
    css += newCSS;
}

// Update crc-data-box to column
css = css.replace(/\.crc-data-box\s*\{[\s\S]*?gap:\s*12px;\s*\}/, 
`.crc-data-box {
    border-radius: 12px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 16px;
}`);

// Update header margin so it can be controlled by expanded content spacer
css = css.replace(/\.crc-header\s*\{[\s\S]*?margin-bottom:\s*20px;\s*\}/,
`.crc-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 0;
}`);

// Allow flex wrap inside crc-data-col so long text doesn't overflow
css = css.replace(/\.crc-data-col\s*\{[\s\S]*?gap:\s*6px;\s*\}/,
`.crc-data-col {
    display: flex;
    flex-direction: column;
    gap: 6px;
    word-break: break-word;
}`);

fs.writeFileSync('Mobile/css/styles.css', css);


// 2. BUILD NEW SCREENS
const html = fs.readFileSync('Mobile/index.html', 'utf8');

const expenseHTML = `
                        <div style="display: flex; flex-direction: column; gap: 16px;">
                            
                            <div class="custom-report-card crc-blue expanded">
                                <div class="crc-header" onclick="this.parentElement.classList.toggle('expanded')" style="cursor: pointer;">
                                    <div class="crc-header-left">
                                        <div class="crc-icon-box blue"><iconify-icon icon="solar:bill-list-bold"></iconify-icon></div>
                                        <div>
                                            <div class="crc-title">Travel Reimbursement</div>
                                            <div class="crc-subtitle">₹ 12,500</div>
                                        </div>
                                    </div>
                                    <div style="display: flex; align-items: center; gap: 8px;">
                                        <div class="crc-pill blue">Pending</div>
                                        <div class="expand-chevron"><iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon></div>
                                    </div>
                                </div>
                                <div class="crc-expanded-content">
                                    <div style="height: 16px;"></div>
                                    <div class="crc-data-box gray">
                                        <div class="crc-data-col">
                                            <span class="crc-data-label">Date Submitted</span>
                                            <span class="crc-data-value">15 May 2026</span>
                                        </div>
                                        <div class="crc-data-col" style="padding-top: 12px; border-top: 1px solid rgba(0,0,0,0.05);">
                                            <span class="crc-data-label">Remarks</span>
                                            <span class="crc-data-value" style="line-height: 1.4;">Client meeting trip to Mumbai headquarters. Covered flights and 2-night stay.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="custom-report-card crc-green">
                                <div class="crc-header" onclick="this.parentElement.classList.toggle('expanded')" style="cursor: pointer;">
                                    <div class="crc-header-left">
                                        <div class="crc-icon-box green"><iconify-icon icon="solar:monitor-smartphone-bold"></iconify-icon></div>
                                        <div>
                                            <div class="crc-title">Internet Allowance</div>
                                            <div class="crc-subtitle">₹ 1,500</div>
                                        </div>
                                    </div>
                                    <div style="display: flex; align-items: center; gap: 8px;">
                                        <div class="crc-pill green">Approved</div>
                                        <div class="expand-chevron"><iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon></div>
                                    </div>
                                </div>
                                <div class="crc-expanded-content">
                                    <div style="height: 16px;"></div>
                                    <div class="crc-data-box gray">
                                        <div class="crc-data-col">
                                            <span class="crc-data-label">Date Submitted</span>
                                            <span class="crc-data-value">02 May 2026</span>
                                        </div>
                                        <div class="crc-data-col" style="padding-top: 12px; border-top: 1px solid rgba(0,0,0,0.05);">
                                            <span class="crc-data-label">Remarks</span>
                                            <span class="crc-data-value" style="line-height: 1.4;">Monthly broadband bill for WFH setup.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="custom-report-card crc-red">
                                <div class="crc-header" onclick="this.parentElement.classList.toggle('expanded')" style="cursor: pointer;">
                                    <div class="crc-header-left">
                                        <div class="crc-icon-box red"><iconify-icon icon="solar:cup-hot-bold"></iconify-icon></div>
                                        <div>
                                            <div class="crc-title">Team Lunch</div>
                                            <div class="crc-subtitle">₹ 4,200</div>
                                        </div>
                                    </div>
                                    <div style="display: flex; align-items: center; gap: 8px;">
                                        <div class="crc-pill red">Rejected</div>
                                        <div class="expand-chevron"><iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon></div>
                                    </div>
                                </div>
                                <div class="crc-expanded-content">
                                    <div style="height: 16px;"></div>
                                    <div class="crc-data-box gray">
                                        <div class="crc-data-col">
                                            <span class="crc-data-label">Date Submitted</span>
                                            <span class="crc-data-value">18 Apr 2026</span>
                                        </div>
                                        <div class="crc-data-col" style="padding-top: 12px; border-top: 1px solid rgba(0,0,0,0.05);">
                                            <span class="crc-data-label">Remarks</span>
                                            <span class="crc-data-value" style="line-height: 1.4;">Project kickoff lunch with the design team.</span>
                                        </div>
                                    </div>
                                    <div class="crc-alert-box">
                                        <iconify-icon icon="solar:info-circle-linear" style="color: #ef4444; font-size: 20px;"></iconify-icon>
                                        <span class="crc-alert-text">Missing GST invoice attachment. Please resubmit with correct receipt.</span>
                                    </div>
                                </div>
                            </div>

                            <div class="custom-report-card crc-green">
                                <div class="crc-header" onclick="this.parentElement.classList.toggle('expanded')" style="cursor: pointer;">
                                    <div class="crc-header-left">
                                        <div class="crc-icon-box green"><iconify-icon icon="solar:notebook-bold"></iconify-icon></div>
                                        <div>
                                            <div class="crc-title">Stationery</div>
                                            <div class="crc-subtitle">₹ 850</div>
                                        </div>
                                    </div>
                                    <div style="display: flex; align-items: center; gap: 8px;">
                                        <div class="crc-pill green">Approved</div>
                                        <div class="expand-chevron"><iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon></div>
                                    </div>
                                </div>
                                <div class="crc-expanded-content">
                                    <div style="height: 16px;"></div>
                                    <div class="crc-data-box gray">
                                        <div class="crc-data-col">
                                            <span class="crc-data-label">Date Submitted</span>
                                            <span class="crc-data-value">10 Apr 2026</span>
                                        </div>
                                        <div class="crc-data-col" style="padding-top: 12px; border-top: 1px solid rgba(0,0,0,0.05);">
                                            <span class="crc-data-label">Remarks</span>
                                            <span class="crc-data-value" style="line-height: 1.4;">Office supplies and print cartridges.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
`;

const salaryHTML = `
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

                        <div style="display: flex; flex-direction: column; gap: 16px;">
                            
                            <div class="custom-report-card crc-green expanded">
                                <div class="crc-header" onclick="this.parentElement.classList.toggle('expanded')" style="cursor: pointer;">
                                    <div class="crc-header-left">
                                        <div class="crc-icon-box green"><iconify-icon icon="solar:wad-of-money-bold"></iconify-icon></div>
                                        <div>
                                            <div class="crc-title">April 2026</div>
                                            <div class="crc-subtitle">Processed</div>
                                        </div>
                                    </div>
                                    <div style="display: flex; align-items: center; gap: 8px;">
                                        <div class="crc-pill green">Paid</div>
                                        <div class="expand-chevron"><iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon></div>
                                    </div>
                                </div>
                                <div class="crc-expanded-content">
                                    <div style="height: 16px;"></div>
                                    <div class="crc-data-box gray">
                                        <div class="crc-data-col">
                                            <span class="crc-data-label">Net Pay</span>
                                            <span class="crc-data-value" style="font-weight: 700;">₹ 85,000</span>
                                        </div>
                                        <div class="crc-data-col" style="padding-top: 12px; border-top: 1px solid rgba(0,0,0,0.05);">
                                            <span class="crc-data-label">Action</span>
                                            <span class="crc-data-value" style="color: var(--color-accent); font-weight: 600; cursor: pointer;">Download PDF</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="custom-report-card crc-green">
                                <div class="crc-header" onclick="this.parentElement.classList.toggle('expanded')" style="cursor: pointer;">
                                    <div class="crc-header-left">
                                        <div class="crc-icon-box green"><iconify-icon icon="solar:wad-of-money-bold"></iconify-icon></div>
                                        <div>
                                            <div class="crc-title">March 2026</div>
                                            <div class="crc-subtitle">Processed</div>
                                        </div>
                                    </div>
                                    <div style="display: flex; align-items: center; gap: 8px;">
                                        <div class="crc-pill green">Paid</div>
                                        <div class="expand-chevron"><iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon></div>
                                    </div>
                                </div>
                                <div class="crc-expanded-content">
                                    <div style="height: 16px;"></div>
                                    <div class="crc-data-box gray">
                                        <div class="crc-data-col">
                                            <span class="crc-data-label">Net Pay</span>
                                            <span class="crc-data-value" style="font-weight: 700;">₹ 85,000</span>
                                        </div>
                                        <div class="crc-data-col" style="padding-top: 12px; border-top: 1px solid rgba(0,0,0,0.05);">
                                            <span class="crc-data-label">Action</span>
                                            <span class="crc-data-value" style="color: var(--color-accent); font-weight: 600; cursor: pointer;">Download PDF</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="custom-report-card crc-green">
                                <div class="crc-header" onclick="this.parentElement.classList.toggle('expanded')" style="cursor: pointer;">
                                    <div class="crc-header-left">
                                        <div class="crc-icon-box green"><iconify-icon icon="solar:wad-of-money-bold"></iconify-icon></div>
                                        <div>
                                            <div class="crc-title">February 2026</div>
                                            <div class="crc-subtitle">Processed</div>
                                        </div>
                                    </div>
                                    <div style="display: flex; align-items: center; gap: 8px;">
                                        <div class="crc-pill green">Paid</div>
                                        <div class="expand-chevron"><iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon></div>
                                    </div>
                                </div>
                                <div class="crc-expanded-content">
                                    <div style="height: 16px;"></div>
                                    <div class="crc-data-box gray">
                                        <div class="crc-data-col">
                                            <span class="crc-data-label">Net Pay</span>
                                            <span class="crc-data-value" style="font-weight: 700;">₹ 85,000</span>
                                        </div>
                                        <div class="crc-data-col" style="padding-top: 12px; border-top: 1px solid rgba(0,0,0,0.05);">
                                            <span class="crc-data-label">Action</span>
                                            <span class="crc-data-value" style="color: var(--color-accent); font-weight: 600; cursor: pointer;">Download PDF</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="custom-report-card crc-green">
                                <div class="crc-header" onclick="this.parentElement.classList.toggle('expanded')" style="cursor: pointer;">
                                    <div class="crc-header-left">
                                        <div class="crc-icon-box green"><iconify-icon icon="solar:wad-of-money-bold"></iconify-icon></div>
                                        <div>
                                            <div class="crc-title">January 2026</div>
                                            <div class="crc-subtitle">Processed</div>
                                        </div>
                                    </div>
                                    <div style="display: flex; align-items: center; gap: 8px;">
                                        <div class="crc-pill green">Paid</div>
                                        <div class="expand-chevron"><iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon></div>
                                    </div>
                                </div>
                                <div class="crc-expanded-content">
                                    <div style="height: 16px;"></div>
                                    <div class="crc-data-box gray">
                                        <div class="crc-data-col">
                                            <span class="crc-data-label">Net Pay</span>
                                            <span class="crc-data-value" style="font-weight: 700;">₹ 80,000</span>
                                        </div>
                                        <div class="crc-data-col" style="padding-top: 12px; border-top: 1px solid rgba(0,0,0,0.05);">
                                            <span class="crc-data-label">Action</span>
                                            <span class="crc-data-value" style="color: var(--color-accent); font-weight: 600; cursor: pointer;">Download PDF</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
`;

const odTourHTML = `
                        <div class="custom-report-card crc-yellow expanded">
                            <div class="crc-header" onclick="this.parentElement.classList.toggle('expanded')" style="cursor: pointer;">
                                <div class="crc-header-left">
                                    <div>
                                        <div class="crc-title">Work From Home</div>
                                        <div class="crc-subtitle">Applied on 27 Mar 2026</div>
                                    </div>
                                </div>
                                <div style="display: flex; align-items: center; gap: 8px;">
                                    <div class="crc-pill yellow">Pending</div>
                                    <div class="expand-chevron"><iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon></div>
                                </div>
                            </div>
                            
                            <div class="crc-expanded-content">
                                <div style="height: 16px;"></div>
                                <div class="crc-data-box yellow" style="margin-bottom: 20px;">
                                    <div class="crc-data-col">
                                        <span class="crc-data-label">Date</span>
                                        <span class="crc-data-value">10 Mar 2026</span>
                                    </div>
                                    <div class="crc-data-col" style="padding-top: 12px; border-top: 1px solid rgba(0,0,0,0.05);">
                                        <span class="crc-data-label">Time</span>
                                        <span class="crc-data-value" style="font-weight: 700;">09:00 AM – 06:00 PM</span>
                                    </div>
                                    <div class="crc-data-col" style="padding-top: 12px; border-top: 1px solid rgba(0,0,0,0.05);">
                                        <span class="crc-data-label">Remarks</span>
                                        <span class="crc-data-value" style="line-height: 1.4;">Unwell with mild fever, preferring to work from home to avoid spreading illness.</span>
                                    </div>
                                </div>
                                
                                <div style="border-top: 1px solid var(--color-border); padding-top: 16px; display: flex; justify-content: flex-end;">
                                    <button class="crc-btn-delete">
                                        <iconify-icon icon="solar:trash-bin-trash-linear" style="font-size: 18px;"></iconify-icon> Delete
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div class="custom-report-card crc-red">
                            <div class="crc-header" onclick="this.parentElement.classList.toggle('expanded')" style="cursor: pointer;">
                                <div class="crc-header-left">
                                    <div>
                                        <div class="crc-title">OD Tour</div>
                                        <div class="crc-subtitle">Applied on 07 Jan 2026</div>
                                    </div>
                                </div>
                                <div style="display: flex; align-items: center; gap: 8px;">
                                    <div class="crc-pill red">
                                        <span>Rejected</span>
                                        <span class="crc-pill-sub">by Sanction Authority</span>
                                    </div>
                                    <div class="expand-chevron"><iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon></div>
                                </div>
                            </div>
                            
                            <div class="crc-expanded-content">
                                <div style="height: 16px;"></div>
                                <div class="crc-data-box red">
                                    <div class="crc-data-col">
                                        <span class="crc-data-label">Date</span>
                                        <span class="crc-data-value">07 Jan 2026</span>
                                    </div>
                                    <div class="crc-data-col" style="padding-top: 12px; border-top: 1px solid rgba(0,0,0,0.05);">
                                        <span class="crc-data-label">Time</span>
                                        <span class="crc-data-value" style="font-weight: 700;">10:48 AM – 08:48 PM</span>
                                    </div>
                                    <div class="crc-data-col" style="padding-top: 12px; border-top: 1px solid rgba(0,0,0,0.05);">
                                        <span class="crc-data-label">Remarks</span>
                                        <span class="crc-data-value" style="line-height: 1.4;">Client site visit for software deployment. Biometric machine was inaccessible.</span>
                                    </div>
                                </div>
                                
                                <div class="crc-alert-box">
                                    <iconify-icon icon="solar:info-circle-linear" style="color: #ef4444; font-size: 20px;"></iconify-icon>
                                    <span class="crc-alert-text">Request rejected. OD requires pre-approval email attachment.</span>
                                </div>
                                
                                <div style="border-top: 1px solid var(--color-border); padding-top: 16px; margin-top: 16px; display: flex; justify-content: flex-end;">
                                    <button class="crc-btn-delete">
                                        <iconify-icon icon="solar:trash-bin-trash-linear" style="font-size: 18px;"></iconify-icon> Delete
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div class="custom-report-card crc-green">
                            <div class="crc-header" onclick="this.parentElement.classList.toggle('expanded')" style="cursor: pointer;">
                                <div class="crc-header-left">
                                    <div>
                                        <div class="crc-title">OD Tour</div>
                                        <div class="crc-subtitle">Applied on 12 Dec 2025</div>
                                    </div>
                                </div>
                                <div style="display: flex; align-items: center; gap: 8px;">
                                    <div class="crc-pill green">
                                        <span>Approved</span>
                                        <span class="crc-pill-sub">by Manager</span>
                                    </div>
                                    <div class="expand-chevron"><iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon></div>
                                </div>
                            </div>
                            
                            <div class="crc-expanded-content">
                                <div style="height: 16px;"></div>
                                <div class="crc-data-box gray">
                                    <div class="crc-data-col">
                                        <span class="crc-data-label">Date</span>
                                        <span class="crc-data-value">15 Dec 2025</span>
                                    </div>
                                    <div class="crc-data-col" style="padding-top: 12px; border-top: 1px solid rgba(0,0,0,0.05);">
                                        <span class="crc-data-label">Time</span>
                                        <span class="crc-data-value" style="font-weight: 700;">09:00 AM – 02:00 PM</span>
                                    </div>
                                    <div class="crc-data-col" style="padding-top: 12px; border-top: 1px solid rgba(0,0,0,0.05);">
                                        <span class="crc-data-label">Remarks</span>
                                        <span class="crc-data-value" style="line-height: 1.4;">Vendor meeting at Sector 62 branch.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
`;

const appliedLeavesHTML = `
                        <!-- Card 1 -->
                        <div class="custom-report-card crc-red expanded">
                            <div class="crc-header" onclick="this.parentElement.classList.toggle('expanded')" style="cursor: pointer;">
                                <div class="crc-header-left">
                                    <div class="crc-icon-box red"><iconify-icon icon="solar:case-minimalistic-bold"></iconify-icon></div>
                                    <div>
                                        <div class="crc-title">Compensatory Off</div>
                                        <div class="crc-subtitle">10 Days</div>
                                    </div>
                                </div>
                                <div style="display: flex; align-items: center; gap: 8px;">
                                    <div class="crc-pill red">
                                        <span>Rejected</span>
                                        <span class="crc-pill-sub">by Manager</span>
                                    </div>
                                    <div class="expand-chevron"><iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon></div>
                                </div>
                            </div>
                            <div class="crc-expanded-content">
                                <div style="height: 16px;"></div>
                                <div class="crc-data-box gray">
                                    <div class="crc-data-col">
                                        <span class="crc-data-label">Duration</span>
                                        <span class="crc-data-value">14 Jan 2026 – 24 Jan 2026</span>
                                    </div>
                                    <div class="crc-data-col" style="padding-top: 12px; border-top: 1px solid rgba(0,0,0,0.05);">
                                        <span class="crc-data-label">Remarks</span>
                                        <span class="crc-data-value" style="line-height: 1.4;">Taking comp off for working on the Diwali weekend project deployment.</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Card 2 -->
                        <div class="custom-report-card crc-yellow">
                            <div class="crc-header" onclick="this.parentElement.classList.toggle('expanded')" style="cursor: pointer;">
                                <div class="crc-header-left">
                                    <div class="crc-icon-box yellow"><iconify-icon icon="solar:umbrella-bold"></iconify-icon></div>
                                    <div>
                                        <div class="crc-title">Casual Leave</div>
                                        <div class="crc-subtitle">2 Days</div>
                                    </div>
                                </div>
                                <div style="display: flex; align-items: center; gap: 8px;">
                                    <div class="crc-pill red">
                                        <span>Rejected</span>
                                        <span class="crc-pill-sub">by HR</span>
                                    </div>
                                    <div class="expand-chevron"><iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon></div>
                                </div>
                            </div>
                            <div class="crc-expanded-content">
                                <div style="height: 16px;"></div>
                                <div class="crc-data-box gray">
                                    <div class="crc-data-col">
                                        <span class="crc-data-label">Duration</span>
                                        <span class="crc-data-value">12 Jan 2026 – 13 Jan 2026</span>
                                    </div>
                                    <div class="crc-data-col" style="padding-top: 12px; border-top: 1px solid rgba(0,0,0,0.05);">
                                        <span class="crc-data-label">Remarks</span>
                                        <span class="crc-data-value" style="line-height: 1.4;">Personal work at home. Need to attend to family matters.</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Card 3 -->
                        <div class="custom-report-card crc-green">
                            <div class="crc-header" onclick="this.parentElement.classList.toggle('expanded')" style="cursor: pointer;">
                                <div class="crc-header-left">
                                    <div class="crc-icon-box green"><iconify-icon icon="solar:suitcase-bold"></iconify-icon></div>
                                    <div>
                                        <div class="crc-title">Privilege Leave</div>
                                        <div class="crc-subtitle">1 Day</div>
                                    </div>
                                </div>
                                <div style="display: flex; align-items: center; gap: 8px;">
                                    <div class="crc-pill green">
                                        <span>Approved</span>
                                        <span class="crc-pill-sub">by Manager</span>
                                    </div>
                                    <div class="expand-chevron"><iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon></div>
                                </div>
                            </div>
                            <div class="crc-expanded-content">
                                <div style="height: 16px;"></div>
                                <div class="crc-data-box gray">
                                    <div class="crc-data-col">
                                        <span class="crc-data-label">Duration</span>
                                        <span class="crc-data-value">03 Jan 2026 – 03 Jan 2026</span>
                                    </div>
                                    <div class="crc-data-col" style="padding-top: 12px; border-top: 1px solid rgba(0,0,0,0.05);">
                                        <span class="crc-data-label">Remarks</span>
                                        <span class="crc-data-value" style="line-height: 1.4;">Out of town for a wedding.</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Card 4 -->
                        <div class="custom-report-card crc-blue">
                            <div class="crc-header" onclick="this.parentElement.classList.toggle('expanded')" style="cursor: pointer;">
                                <div class="crc-header-left">
                                    <div class="crc-icon-box blue"><iconify-icon icon="solar:clock-circle-bold"></iconify-icon></div>
                                    <div>
                                        <div class="crc-title">Earned Leave</div>
                                        <div class="crc-subtitle">5 Days</div>
                                    </div>
                                </div>
                                <div style="display: flex; align-items: center; gap: 8px;">
                                    <div class="crc-pill blue">
                                        <span>Pending</span>
                                        <span class="crc-pill-sub">with HR</span>
                                    </div>
                                    <div class="expand-chevron"><iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon></div>
                                </div>
                            </div>
                            <div class="crc-expanded-content">
                                <div style="height: 16px;"></div>
                                <div class="crc-data-box gray">
                                    <div class="crc-data-col">
                                        <span class="crc-data-label">Duration</span>
                                        <span class="crc-data-value">20 Jan 2026 – 24 Jan 2026</span>
                                    </div>
                                    <div class="crc-data-col" style="padding-top: 12px; border-top: 1px solid rgba(0,0,0,0.05);">
                                        <span class="crc-data-label">Remarks</span>
                                        <span class="crc-data-value" style="line-height: 1.4;">Family function in hometown. Need full week off.</span>
                                    </div>
                                </div>
                                <div class="crc-alert-box yellow">
                                    <iconify-icon icon="solar:info-circle-linear" style="color: #d97706; font-size: 20px;"></iconify-icon>
                                    <span class="crc-alert-text yellow">You can view, edit or cancel your pending requests.</span>
                                </div>
                            </div>
                        </div>
`;

function replaceInnerMain(htmlStr, screenId, replacementString) {
    const regex = new RegExp('<div id="' + screenId + '"[\\s\\S]*?<main class="scrollable-cards"[^>]*>([\\s\\S]*?)<\\/main>');
    return htmlStr.replace(regex, (match, inner) => {
        return match.replace(inner, '\\n' + replacementString + '\\n');
    });
}

let updatedHtml = html;
updatedHtml = replaceInnerMain(updatedHtml, 'expense-report-screen', expenseHTML);
updatedHtml = replaceInnerMain(updatedHtml, 'salary-report-screen', salaryHTML);
updatedHtml = replaceInnerMain(updatedHtml, 'od-tour-report-screen', odTourHTML);
updatedHtml = replaceInnerMain(updatedHtml, 'applied-leave-report-screen', appliedLeavesHTML);

fs.writeFileSync('Mobile/index.html', updatedHtml);
console.log('Expandable cards applied safely.');
