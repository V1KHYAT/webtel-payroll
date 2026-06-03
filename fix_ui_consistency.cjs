const fs = require('fs');

// 1. Fix CSS gradient background
let css = fs.readFileSync('Mobile/css/styles.css', 'utf8');

// Change the app-layout gradient
css = css.replace(/background:\s*linear-gradient\(180deg,\s*#fef4cc\s*0%,\s*#ffffff\s*40%\);/, 
'background: linear-gradient(180deg, #fef4cc 0%, var(--color-bg) 40%);');

// Ensure the main color-bg is definitely warm off-white and surface is pure white
if (!css.includes('--color-bg: #fffbf0')) {
    css = css.replace(/--color-bg:\s*#[a-fA-F0-9]+;/, '--color-bg: #fffbf0;');
}
if (!css.includes('--color-surface: #ffffff')) {
    css = css.replace(/--color-surface:\s*#[a-fA-F0-9]+;/, '--color-surface: #ffffff;');
}

fs.writeFileSync('Mobile/css/styles.css', css);


// 2. Rewrite Apply Expenses page to use system classes
let html = fs.readFileSync('Mobile/index.html', 'utf8');

const newExpensesMain = `
                    <main class="scrollable-cards" style="padding-bottom: 80px;">
                        
                        <!-- Card 1 -->
                        <div class="custom-report-card" style="padding: 16px;">
                            <div style="display: flex; align-items: center; margin-bottom: 20px; gap: 12px;">
                                <div class="crc-icon-box yellow">
                                    <iconify-icon icon="solar:document-text-bold"></iconify-icon>
                                </div>
                                <div>
                                    <div class="crc-title">Expense Details</div>
                                    <div class="crc-subtitle" style="margin-top: 2px;">Enter basic details about this expense</div>
                                </div>
                            </div>
                            
                            <div class="form-group" style="margin-bottom: 16px;">
                                <label style="font-size: 11px; font-weight: 600; color: var(--color-text); margin-bottom: 6px;">Expense Type</label>
                                <select class="form-input" style="background: #fdfdfd; border: 1px solid #f0f0f0; border-radius: 10px; height: 44px; font-size: 13px;">
                                    <option>Select Expense</option>
                                    <option>Travel</option>
                                    <option>Meals</option>
                                    <option>Accommodation</option>
                                </select>
                            </div>
                            
                            <div class="form-group" style="margin-bottom: 0;">
                                <label style="font-size: 11px; font-weight: 600; color: var(--color-text); margin-bottom: 6px;">Transport Mode</label>
                                <select class="form-input" style="background: #fdfdfd; border: 1px solid #f0f0f0; border-radius: 10px; height: 44px; font-size: 13px;">
                                    <option>Train</option>
                                    <option>Flight</option>
                                    <option>Cab / Taxi</option>
                                </select>
                            </div>
                        </div>

                        <!-- Card 2 -->
                        <div class="custom-report-card" style="padding: 16px;">
                            <div style="display: flex; align-items: center; margin-bottom: 20px; gap: 12px;">
                                <div class="crc-icon-box yellow">
                                    <iconify-icon icon="solar:document-add-bold"></iconify-icon>
                                </div>
                                <div>
                                    <div class="crc-title">Receipt / Bill</div>
                                    <div class="crc-subtitle" style="margin-top: 2px;">Upload your bill or receipt</div>
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
                        <div class="custom-report-card" style="padding: 16px;">
                            <div style="display: flex; align-items: center; margin-bottom: 20px; gap: 12px;">
                                <div class="crc-icon-box yellow">
                                    <iconify-icon icon="solar:chat-line-bold"></iconify-icon>
                                </div>
                                <div>
                                    <div class="crc-title">Remarks / Purpose</div>
                                    <div class="crc-subtitle" style="margin-top: 2px;">Add a short description or purpose</div>
                                </div>
                            </div>
                            
                            <div style="position: relative;">
                                <textarea class="form-input" style="min-height: 100px; resize: none; background: #fdfdfd; border: 1px solid #f0f0f0; border-radius: 10px; padding-bottom: 28px; font-size: 13px;" placeholder="Explain the expense..."></textarea>
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
    console.log('visit-expense-screen updated with system classes.');
} else {
    console.log('Could not find visit-expense-screen!');
}
