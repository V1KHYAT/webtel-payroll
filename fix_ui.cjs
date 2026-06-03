const fs = require('fs');

let html = fs.readFileSync('Mobile/index.html', 'utf8');

// 1. Fix the Employee Directory Designations
html = html.replace('Designation: Marketing • 9876543210', 'Marketing Manager • 9876543210');
html = html.replace('Designation: HR • 9123456789', 'HR Executive • 9123456789');
html = html.replace('Designation: Designation: Engineering • 9988776655', 'Software Engineer • 9988776655');
html = html.replace('Designation: Sales • 9871234567', 'Sales Executive • 9871234567');
html = html.replace('Designation: Finance • 9191919191', 'Financial Analyst • 9191919191');
html = html.replace('Designation: Administration • 9090909090', 'Admin Officer • 9090909090');
html = html.replace('Designation: Support • 8888888888', 'Customer Support • 8888888888');
html = html.replace('Designation: Legal • 7777777777', 'Legal Advisor • 7777777777');
html = html.replace('Designation: Design • 6666666666', 'UI/UX Designer • 6666666666');
html = html.replace('Designation: Product • 5555555555', 'Product Manager • 5555555555');
html = html.replace('Designation: Designation: Engineering • 9999999999', 'Senior Developer • 9999999999');
html = html.replace('Designation: Operations • 8181818181', 'Operations Manager • 8181818181');

// 2. Fix the broken icons in the expense and tour pages
// My previous script messed up some icons because it replaced `lucide:chevron-down` with `lucide:file-text` for the remaining ones, which overwrote the fixed ones.
html = html.replace(
    /<div class="crc-icon-box yellow"><iconify-icon icon="lucide:file-text"><\/iconify-icon>\s*<\/div>\s*<div>\s*<div class="crc-title"[^>]*>Receipt \/ Bill<\/div>/g,
    '<div class="crc-icon-box yellow"><iconify-icon icon="lucide:receipt"></iconify-icon>\n                                    </div>\n                                    <div>\n                                        <div class="crc-title" style="margin-bottom: 2px;">Receipt / Bill</div>'
);

html = html.replace(
    /<div class="crc-icon-box yellow"><iconify-icon icon="lucide:receipt"><\/iconify-icon>\s*<\/div>\s*<div>\s*<div class="crc-title"[^>]*>Remarks \/ Purpose<\/div>/g,
    '<div class="crc-icon-box yellow"><iconify-icon icon="lucide:message-square"></iconify-icon>\n                                    </div>\n                                    <div>\n                                        <div class="crc-title" style="margin-bottom: 2px;">Remarks / Purpose</div>'
);

// 3. Redesign the Leave Application page
// We will replace the entire #leave-plan-tab block
const newLeaveTabHTML = `
                        <div id="leave-plan-tab">
                            <!-- Card 1: Leave Balance -->
                            <div class="custom-report-card" style="margin-bottom: 6px !important; padding: 16px;">
                                <div class="crc-header" style="margin-bottom: 20px;">
                                    <div class="crc-header-left">
                                        <div class="crc-icon-box yellow">
                                            <iconify-icon icon="lucide:pie-chart"></iconify-icon>
                                        </div>
                                        <div>
                                            <div class="crc-title" style="margin-bottom: 2px;">Leave Balance</div>
                                            <div class="crc-subtitle">Check your available leaves</div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="balance-readout" style="margin-top: 0;">66.0 <span style="font-size: 0.4em; font-weight: 500; color: var(--color-text-secondary); text-transform: uppercase; letter-spacing: 0.05em; margin-left: 2px;">Days</span></div>
                                <div class="ledger-list" style="margin-top: 16px;">
                                    <div class="ledger-row">
                                        <span class="ledger-label">Casual Leave</span>
                                        <span class="ledger-value">6.00</span>
                                    </div>
                                    <div class="ledger-row">
                                        <span class="ledger-label">Privilege Leave</span>
                                        <span class="ledger-value">60.00</span>
                                    </div>
                                </div>
                            </div>

                            <!-- Card 2: Leave Details -->
                            <div class="custom-report-card" style="margin-bottom: 6px !important; padding: 16px;">
                                <div class="crc-header" style="margin-bottom: 20px;">
                                    <div class="crc-header-left">
                                        <div class="crc-icon-box yellow">
                                            <iconify-icon icon="lucide:calendar-clock"></iconify-icon>
                                        </div>
                                        <div>
                                            <div class="crc-title" style="margin-bottom: 2px;">Leave Details</div>
                                            <div class="crc-subtitle">Enter duration and reason</div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="form-group" style="margin-bottom: 12px;">
                                    <label style="font-size: 11px; font-weight: 600; color: var(--color-text); margin-bottom: 6px;">Leave Type</label>
                                    <select class="form-input" style="background: #fdfdfd; border: 1px solid #f0f0f0; border-radius: 10px;">
                                        <option>Select Leave Type</option>
                                        <option>Casual Leave</option>
                                        <option>Privilege Leave</option>
                                    </select>
                                </div>
                                
                                <div style="display: flex; gap: 8px; margin-bottom: 12px;">
                                    <div class="form-group" style="flex: 1; margin-bottom: 0;">
                                        <label style="font-size: 11px; font-weight: 600; color: var(--color-text); margin-bottom: 6px;">From Date</label>
                                        <input type="date" class="form-input" style="background: #fdfdfd; border: 1px solid #f0f0f0; border-radius: 10px; padding: 0 10px;">
                                    </div>
                                    <div class="form-group" style="flex: 1; margin-bottom: 0;">
                                        <label style="font-size: 11px; font-weight: 600; color: var(--color-text); margin-bottom: 6px;">Till Date</label>
                                        <input type="date" class="form-input" style="background: #fdfdfd; border: 1px solid #f0f0f0; border-radius: 10px; padding: 0 10px;">
                                    </div>
                                </div>
                                
                                <div style="display: flex; gap: 8px;">
                                    <div class="form-group" style="flex: 1; margin-bottom: 0;">
                                        <label style="font-size: 11px; font-weight: 600; color: var(--color-text); margin-bottom: 6px;">No. of Days</label>
                                        <input type="text" class="form-input" placeholder="0" readonly style="background: #f8fafc; border: 1px solid #f0f0f0; border-radius: 10px;">
                                    </div>
                                    <div class="form-group" style="flex: 2; margin-bottom: 0;">
                                        <label style="font-size: 11px; font-weight: 600; color: var(--color-text); margin-bottom: 6px;">Reason</label>
                                        <select class="form-input" style="background: #fdfdfd; border: 1px solid #f0f0f0; border-radius: 10px;">
                                            <option>Select Reason</option>
                                            <option>Personal</option>
                                            <option>Medical</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <!-- Card 3: Remarks -->
                            <div class="custom-report-card" style="margin-bottom: 6px !important; padding: 16px;">
                                <div class="crc-header" style="margin-bottom: 20px;">
                                    <div class="crc-header-left">
                                        <div class="crc-icon-box yellow">
                                            <iconify-icon icon="lucide:message-square"></iconify-icon>
                                        </div>
                                        <div>
                                            <div class="crc-title" style="margin-bottom: 2px;">Remarks</div>
                                            <div class="crc-subtitle">Any additional comments</div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div style="position: relative;">
                                    <textarea class="form-input" style="min-height: 100px; resize: none; background: #fdfdfd; border: 1px solid #f0f0f0; border-radius: 10px; padding-bottom: 28px;" placeholder="Enter details..."></textarea>
                                    <div style="position: absolute; bottom: 10px; right: 14px; font-size: 11px; color: var(--color-text-tertiary); font-weight: 500;">0/500</div>
                                </div>
                            </div>

                            <!-- Submit Button -->
                            <div style="margin-top: 24px;">
                                <button class="btn btn-primary btn-block" style="background: #2563eb; color: white; border: none; font-weight: 700; height: 56px; font-size: 16px; border-radius: 14px; display: flex; align-items: center; justify-content: center;">
                                    Submit Leave Request
                                </button>
                            </div>
                        </div>`;

const startIndex = html.indexOf('<div id="leave-plan-tab">');
const endIndex = html.indexOf('<!-- TAB: OD TOUR -->');

if (startIndex !== -1 && endIndex !== -1) {
    html = html.substring(0, startIndex) + newLeaveTabHTML + '\n\n                        ' + html.substring(endIndex);
}

fs.writeFileSync('Mobile/index.html', html);
console.log('Fixed designations and redesigned leave tab!');
