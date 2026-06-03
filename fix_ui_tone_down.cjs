const fs = require('fs');

// 1. Tone down background yellow
let css = fs.readFileSync('Mobile/css/styles.css', 'utf8');
css = css.replace(/--color-bg:\s*#fffbf0;/g, '--color-bg: #fffdf7;');
fs.writeFileSync('Mobile/css/styles.css', css);

// 2. Fix Apply Expenses HTML
let html = fs.readFileSync('Mobile/index.html', 'utf8');

const newExpensesMain = `
                    <main class="scrollable-cards" style="padding-bottom: 80px;">
                        
                        <!-- Card 1 -->
                        <div class="custom-report-card crc-yellow" style="padding: 16px;">
                            <div class="crc-header" style="margin-bottom: 20px;">
                                <div class="crc-header-left">
                                    <div class="crc-icon-box yellow">
                                        <iconify-icon icon="solar:document-text-bold"></iconify-icon>
                                    </div>
                                    <div>
                                        <div class="crc-title" style="margin-bottom: 2px;">Expense Details</div>
                                        <div class="crc-subtitle">Enter basic details about this expense</div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="form-group" style="margin-bottom: 16px;">
                                <label style="font-size: 11px; font-weight: 600; color: var(--color-text); margin-bottom: 6px;">Expense Type</label>
                                <select class="form-input" style="background: #fdfdfd; border: 1px solid #f0f0f0; border-radius: 10px;">
                                    <option>Select Expense</option>
                                    <option>Travel</option>
                                    <option>Meals</option>
                                    <option>Accommodation</option>
                                </select>
                            </div>
                            
                            <div class="form-group" style="margin-bottom: 0;">
                                <label style="font-size: 11px; font-weight: 600; color: var(--color-text); margin-bottom: 6px;">Transport Mode</label>
                                <select class="form-input" style="background: #fdfdfd; border: 1px solid #f0f0f0; border-radius: 10px;">
                                    <option>Train</option>
                                    <option>Flight</option>
                                    <option>Cab / Taxi</option>
                                </select>
                            </div>
                        </div>

                        <!-- Card 2 -->
                        <div class="custom-report-card crc-yellow" style="padding: 16px;">
                            <div class="crc-header" style="margin-bottom: 20px;">
                                <div class="crc-header-left">
                                    <div class="crc-icon-box yellow">
                                        <iconify-icon icon="solar:document-add-bold"></iconify-icon>
                                    </div>
                                    <div>
                                        <div class="crc-title" style="margin-bottom: 2px;">Receipt / Bill</div>
                                        <div class="crc-subtitle">Upload your bill or receipt</div>
                                    </div>
                                </div>
                            </div>
                            
                            <div style="border: 1.5px dashed #fcd34d; border-radius: 12px; padding: 24px; text-align: center; background: #fffdf5; cursor: pointer;" onclick="mockFilePicker()">
                                <div style="width: 48px; height: 48px; border-radius: 50%; background: #fffbeb; color: #d97706; display: flex; align-items: center; justify-content: center; margin: 0 auto 12px auto; font-size: 24px;">
                                    <iconify-icon icon="solar:cloud-upload-linear"></iconify-icon>
                                </div>
                                <div style="font-weight: 600; font-size: 13px; margin-bottom: 6px; color: var(--color-text);">Tap to upload</div>
                                <div style="font-size: 11px; color: var(--color-text-tertiary);">JPG, PNG, PDF (Max. 5MB)</div>
                            </div>
                        </div>

                        <!-- Card 3 -->
                        <div class="custom-report-card crc-yellow" style="padding: 16px;">
                            <div class="crc-header" style="margin-bottom: 20px;">
                                <div class="crc-header-left">
                                    <div class="crc-icon-box yellow">
                                        <iconify-icon icon="solar:chat-line-bold"></iconify-icon>
                                    </div>
                                    <div>
                                        <div class="crc-title" style="margin-bottom: 2px;">Remarks / Purpose</div>
                                        <div class="crc-subtitle">Add a short description or purpose</div>
                                    </div>
                                </div>
                            </div>
                            
                            <div style="position: relative;">
                                <textarea class="form-input" style="min-height: 100px; resize: none; background: #fdfdfd; border: 1px solid #f0f0f0; border-radius: 10px; padding-bottom: 28px;" placeholder="Explain the expense..."></textarea>
                                <div style="position: absolute; bottom: 10px; right: 14px; font-size: 11px; color: var(--color-text-tertiary); font-weight: 500;">0/500</div>
                            </div>
                        </div>

                        <!-- Submit Button -->
                        <div style="margin-top: 24px;">
                            <button class="btn btn-primary btn-block" style="background: #f59e0b; color: white; border: none; font-weight: 700; height: 56px; font-size: 16px; border-radius: 14px; display: flex; align-items: center; justify-content: center;">
                                Submit Expense
                            </button>
                        </div>
                        
                    </main>
`;

const screenStart = html.indexOf('<div id="visit-expense-screen"');
if (screenStart !== -1) {
    const mainStart = html.indexOf('<main class="scrollable-cards"', screenStart);
    const mainEnd = html.indexOf('</main>', mainStart) + 7;
    
    html = html.substring(0, mainStart) + newExpensesMain + html.substring(mainEnd);
    fs.writeFileSync('Mobile/index.html', html);
    console.log('visit-expense-screen updated properly.');
} else {
    console.log('Could not find visit-expense-screen!');
}
