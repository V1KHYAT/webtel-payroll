const fs = require('fs');

let html = fs.readFileSync('Mobile/index.html', 'utf8');

// 3. Replace Expenses Form (Submit Expense)
const newExpensesMain = `
                    <main class="scrollable-cards" style="padding-bottom: 80px;">
                        
                        <!-- Card 1 -->
                        <div style="background: var(--color-surface); border-radius: 16px; padding: 16px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.02);">
                            <div style="display: flex; align-items: center; margin-bottom: 20px; gap: 12px;">
                                <div style="width: 40px; height: 40px; border-radius: 50%; background: #fffbeb; color: #d97706; display: flex; align-items: center; justify-content: center; font-size: 20px;">
                                    <iconify-icon icon="solar:document-text-bold"></iconify-icon>
                                </div>
                                <div>
                                    <div style="font-weight: 600; font-size: 15px;">Expense Details</div>
                                    <div style="font-size: 12px; color: var(--color-text-secondary); margin-top: 2px;">Enter basic details about this expense</div>
                                </div>
                            </div>
                            
                            <div class="form-group" style="margin-bottom: 16px;">
                                <label style="font-size: 12px; font-weight: 600; color: var(--color-text); margin-bottom: 8px;">Expense Type</label>
                                <select class="form-input" style="background: #fdfdfd; border: 1px solid #f0f0f0; border-radius: 10px; height: 44px;">
                                    <option>Select Expense</option>
                                    <option>Travel</option>
                                    <option>Meals</option>
                                    <option>Accommodation</option>
                                </select>
                            </div>
                            
                            <div class="form-group" style="margin-bottom: 0;">
                                <label style="font-size: 12px; font-weight: 600; color: var(--color-text); margin-bottom: 8px;">Transport Mode</label>
                                <select class="form-input" style="background: #fdfdfd; border: 1px solid #f0f0f0; border-radius: 10px; height: 44px;">
                                    <option>Train</option>
                                    <option>Flight</option>
                                    <option>Cab / Taxi</option>
                                </select>
                            </div>
                        </div>

                        <!-- Card 2 -->
                        <div style="background: var(--color-surface); border-radius: 16px; padding: 16px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.02);">
                            <div style="display: flex; align-items: center; margin-bottom: 20px; gap: 12px;">
                                <div style="width: 40px; height: 40px; border-radius: 50%; background: #fffbeb; color: #d97706; display: flex; align-items: center; justify-content: center; font-size: 20px;">
                                    <iconify-icon icon="solar:document-add-bold"></iconify-icon>
                                </div>
                                <div>
                                    <div style="font-weight: 600; font-size: 15px;">Receipt / Bill</div>
                                    <div style="font-size: 12px; color: var(--color-text-secondary); margin-top: 2px;">Upload your bill or receipt</div>
                                </div>
                            </div>
                            
                            <div style="border: 1.5px dashed #fcd34d; border-radius: 12px; padding: 24px; text-align: center; background: #fffdf5; cursor: pointer;" onclick="mockFilePicker()">
                                <div style="width: 48px; height: 48px; border-radius: 50%; background: #fffbeb; color: #d97706; display: flex; align-items: center; justify-content: center; margin: 0 auto 12px auto; font-size: 24px;">
                                    <iconify-icon icon="solar:cloud-upload-linear"></iconify-icon>
                                </div>
                                <div style="font-weight: 600; font-size: 14px; margin-bottom: 6px; color: var(--color-text);">Tap to upload</div>
                                <div style="font-size: 12px; color: var(--color-text-tertiary);">JPG, PNG, PDF (Max. 5MB)</div>
                            </div>
                        </div>

                        <!-- Card 3 -->
                        <div style="background: var(--color-surface); border-radius: 16px; padding: 16px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.02);">
                            <div style="display: flex; align-items: center; margin-bottom: 20px; gap: 12px;">
                                <div style="width: 40px; height: 40px; border-radius: 50%; background: #fffbeb; color: #d97706; display: flex; align-items: center; justify-content: center; font-size: 20px;">
                                    <iconify-icon icon="solar:chat-line-bold"></iconify-icon>
                                </div>
                                <div>
                                    <div style="font-weight: 600; font-size: 15px;">Remarks / Purpose</div>
                                    <div style="font-size: 12px; color: var(--color-text-secondary); margin-top: 2px;">Add a short description or purpose</div>
                                </div>
                            </div>
                            
                            <div style="position: relative;">
                                <textarea class="form-input" style="min-height: 100px; resize: none; background: #fdfdfd; border: 1px solid #f0f0f0; border-radius: 10px; padding-bottom: 28px;" placeholder="Explain the expense..."></textarea>
                                <div style="position: absolute; bottom: 10px; right: 14px; font-size: 11px; color: var(--color-text-tertiary); font-weight: 500;">0/500</div>
                            </div>
                        </div>

                        <!-- Submit Button -->
                        <button class="btn btn-primary btn-block" style="background: #f59e0b; color: white; border: none; font-weight: 600; height: 52px; font-size: 15px; border-radius: 14px; display: flex; align-items: center; justify-content: center; gap: 8px;">
                            Submit Expense <iconify-icon icon="solar:plain-bold" style="font-size: 18px;"></iconify-icon>
                        </button>
                        
                    </main>
`;

// Note: The screen is visit-expense-screen!
const regex = /<div id="visit-expense-screen"[^>]*>[\s\S]*?<main class="scrollable-cards"[^>]*>([\s\S]*?)<\/main>\s*<\/div>/;
const match = html.match(regex);

if (match) {
    const fullMatch = match[0];
    const newScreenHTML = fullMatch.replace(/<main class="scrollable-cards"[^>]*>[\s\S]*?<\/main>/, newExpensesMain);
    html = html.replace(fullMatch, newScreenHTML);
    console.log("Replaced visit-expense-screen content successfully!");
} else {
    console.log("Could not find visit-expense-screen to replace!");
}

fs.writeFileSync('Mobile/index.html', html);

// 4. Update JS to open first card on report screens
let js = fs.readFileSync('Mobile/js/app.js', 'utf8');

const autoOpenScript = `
document.addEventListener('DOMContentLoaded', () => {
    // We can't do it on DOMContentLoaded alone because screens are hidden by default
    // We should patch the window.showScreen function instead!
});

// Let's monkeypatch showScreen to auto-open first card if it's a report screen
const originalShowScreen = window.showScreen;
if (originalShowScreen && !window.showScreenPatched) {
    window.showScreen = function(screenId) {
        originalShowScreen(screenId);
        
        // Auto open first card if it's a report screen
        const reportScreens = ['expense-report-screen', 'salary-report-screen', 'od-tour-report-screen', 'applied-leave-report-screen'];
        if (reportScreens.includes(screenId)) {
            setTimeout(() => {
                const screen = document.getElementById(screenId);
                if (screen) {
                    const firstCard = screen.querySelector('.custom-report-card');
                    if (firstCard && !firstCard.classList.contains('expanded')) {
                        const header = firstCard.querySelector('.crc-header');
                        if (header) {
                            window.toggleCard(header);
                        }
                    }
                }
            }, 50);
        }
    };
    window.showScreenPatched = true;
}
`;

if (!js.includes('window.showScreenPatched = true')) {
    js += '\n' + autoOpenScript;
    fs.writeFileSync('Mobile/js/app.js', js);
}

console.log('UI Fixes applied.');
