const fs = require('fs');

// 1. UPDATE STYLES
let css = fs.readFileSync('Mobile/css/styles.css', 'utf8');

// Fix icon box size
css = css.replace(/\.crc-icon-box\s*\{[^}]+\}/, 
`.crc-icon-box {
    width: 38px;
    height: 38px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
}`);

// Fix data box wrap
css = css.replace(/\.crc-data-box\s*\{[^}]+\}/, 
`.crc-data-box {
    border-radius: 12px;
    padding: 16px;
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
}`);

// Fix title weight
css = css.replace(/\.crc-title\s*\{\s*font-size:\s*16px;\s*font-weight:\s*700;/g, 
`.crc-title {
    font-size: 16px;
    font-weight: 600;`);

// Fix data value weight
css = css.replace(/\.crc-data-value\s*\{\s*font-size:\s*13px;\s*font-weight:\s*600;/g, 
`.crc-data-value {
    font-size: 13px;
    font-weight: 500;`);

fs.writeFileSync('Mobile/css/styles.css', css);


// 2. UPDATE HTML
let html = fs.readFileSync('Mobile/index.html', 'utf8');

// Bold the "Time" values in OD Tour Report
html = html.replace(/<span class="crc-data-value">09:00 AM – 06:00 PM<\/span>/g, '<span class="crc-data-value" style="font-weight: 700;">09:00 AM – 06:00 PM</span>');
html = html.replace(/<span class="crc-data-value">10:48 AM – 08:48 PM<\/span>/g, '<span class="crc-data-value" style="font-weight: 700;">10:48 AM – 08:48 PM</span>');

// Dummy data for Expense Report
const expenseReportRegex = /<div style="flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; margin-top: 40px;">[\s\S]*?<!-- ==========================================\s*SALARY REPORT SCREEN/;

const newExpenseHTML = `<div style="display: flex; flex-direction: column; gap: 16px;">
                            
                            <div class="custom-report-card crc-blue">
                                <div class="crc-header">
                                    <div class="crc-header-left">
                                        <div class="crc-icon-box blue"><iconify-icon icon="solar:bill-list-bold"></iconify-icon></div>
                                        <div>
                                            <div class="crc-title">Travel Reimbursement</div>
                                            <div class="crc-subtitle">₹ 12,500</div>
                                        </div>
                                    </div>
                                    <div class="crc-pill blue">Pending</div>
                                </div>
                                <div class="crc-data-box gray">
                                    <div class="crc-data-col border-right" style="flex: 1 1 40%;">
                                        <span class="crc-data-label">Date Submitted</span>
                                        <span class="crc-data-value">15 May 2026</span>
                                    </div>
                                    <div class="crc-data-col" style="flex: 1 1 40%;">
                                        <span class="crc-data-label">Remarks</span>
                                        <span class="crc-data-value">Client meeting trip to Mumbai</span>
                                    </div>
                                </div>
                            </div>

                            <div class="custom-report-card crc-green">
                                <div class="crc-header">
                                    <div class="crc-header-left">
                                        <div class="crc-icon-box green"><iconify-icon icon="solar:monitor-smartphone-bold"></iconify-icon></div>
                                        <div>
                                            <div class="crc-title">Internet Allowance</div>
                                            <div class="crc-subtitle">₹ 1,500</div>
                                        </div>
                                    </div>
                                    <div class="crc-pill green">Approved</div>
                                </div>
                                <div class="crc-data-box gray">
                                    <div class="crc-data-col border-right" style="flex: 1 1 40%;">
                                        <span class="crc-data-label">Date Submitted</span>
                                        <span class="crc-data-value">02 May 2026</span>
                                    </div>
                                    <div class="crc-data-col" style="flex: 1 1 40%;">
                                        <span class="crc-data-label">Remarks</span>
                                        <span class="crc-data-value">Monthly WFH internet</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </main>
                </div>

                <!-- ==========================================
                     SALARY REPORT SCREEN`;

if (html.match(expenseReportRegex)) {
    html = html.replace(expenseReportRegex, newExpenseHTML);
}

// Dummy data for Salary Report
const salaryReportRegex = /<div style="flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; margin-top: 40px;">[\s\S]*?<!-- ==========================================\s*OD TOUR MISPUNCH REPORT SCREEN/;

const newSalaryHTML = `<div style="display: flex; flex-direction: column; gap: 16px;">
                            
                            <div class="custom-report-card crc-green">
                                <div class="crc-header">
                                    <div class="crc-header-left">
                                        <div class="crc-icon-box green"><iconify-icon icon="solar:wad-of-money-bold"></iconify-icon></div>
                                        <div>
                                            <div class="crc-title">April 2026</div>
                                            <div class="crc-subtitle">Processed</div>
                                        </div>
                                    </div>
                                    <div class="crc-pill green">Paid</div>
                                </div>
                                <div class="crc-data-box gray">
                                    <div class="crc-data-col border-right" style="flex: 1 1 40%;">
                                        <span class="crc-data-label">Net Pay</span>
                                        <span class="crc-data-value" style="font-weight: 700;">₹ 85,000</span>
                                    </div>
                                    <div class="crc-data-col" style="flex: 1 1 40%;">
                                        <span class="crc-data-label">Action</span>
                                        <span class="crc-data-value" style="color: var(--color-accent); font-weight: 600;">Download PDF</span>
                                    </div>
                                </div>
                            </div>

                            <div class="custom-report-card crc-green">
                                <div class="crc-header">
                                    <div class="crc-header-left">
                                        <div class="crc-icon-box green"><iconify-icon icon="solar:wad-of-money-bold"></iconify-icon></div>
                                        <div>
                                            <div class="crc-title">March 2026</div>
                                            <div class="crc-subtitle">Processed</div>
                                        </div>
                                    </div>
                                    <div class="crc-pill green">Paid</div>
                                </div>
                                <div class="crc-data-box gray">
                                    <div class="crc-data-col border-right" style="flex: 1 1 40%;">
                                        <span class="crc-data-label">Net Pay</span>
                                        <span class="crc-data-value" style="font-weight: 700;">₹ 85,000</span>
                                    </div>
                                    <div class="crc-data-col" style="flex: 1 1 40%;">
                                        <span class="crc-data-label">Action</span>
                                        <span class="crc-data-value" style="color: var(--color-accent); font-weight: 600;">Download PDF</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </main>
                </div>

                <!-- ==========================================
                     OD TOUR MISPUNCH REPORT SCREEN`;

if (html.match(salaryReportRegex)) {
    html = html.replace(salaryReportRegex, newSalaryHTML);
}

fs.writeFileSync('Mobile/index.html', html);
console.log('UI fixes applied.');
