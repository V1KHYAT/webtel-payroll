const fs = require('fs');
let html = fs.readFileSync('Mobile/index.html', 'utf8');

function replaceMain(screenId, newMainContent) {
    const screenStart = html.indexOf('id="' + screenId + '"');
    if (screenStart === -1) {
        console.log("Screen " + screenId + " not found");
        return;
    }
    const mainStart = html.indexOf('<main', screenStart);
    const mainEnd = html.indexOf('</main>', mainStart) + '</main>'.length;
    
    html = html.substring(0, mainStart) + newMainContent + html.substring(mainEnd);
}

const names = ['Prabhjot Singh', 'Sarah Jones', 'Umesh Chandra Rav', 'Anil Yadav', 'Vijay Kumar', 'Aman Sharma', 'Rahul Gupta', 'Priya Desai', 'Neha Reddy', 'Amit Patel', 'Siddharth Rao', 'Pooja Verma'];
const colors = ['#dbeafe', '#fce7f3', '#fde6c5', '#e0f2fe', '#e0e7ff', '#ffedd5', '#fef3c7', '#ecfccb', '#d1fae5', '#ccfbf1', '#e0e7ff', '#f3e8ff'];
const textColors = ['#1d4ed8', '#be185d', '#d97706', '#0369a1', '#4338ca', '#c2410c', '#b45309', '#4d7c0f', '#047857', '#0f766e', '#4338ca', '#7e22ce'];
const roles = ['Marketing', 'HR', 'Engineering', 'Sales', 'Finance', 'Administration', 'Support', 'Legal', 'Design', 'Product', 'Engineering', 'Operations'];
const phones = ['9876543210', '9123456789', '9988776655', '9871234567', '9191919191', '9090909090', '8888888888', '7777777777', '6666666666', '5555555555', '9999999999', '8181818181'];

let employeeCards = '';
for (let i = 0; i < names.length; i++) {
    const initial = names[i].charAt(0);
    employeeCards += 
'                        <!-- Employee Card ' + (i+1) + ' -->' +
'                        <div class="custom-report-card" style="margin-bottom: 12px; padding: 12px 16px;">' +
'                            <div class="crc-header" style="margin-bottom: 0;">' +
'                                <div class="crc-header-left">' +
'                                    <div class="sidebar-avatar" style="background: ' + colors[i] + '; color: ' + textColors[i] + '; font-size: 16px; width: 40px; height: 40px;">' + initial + '</div>' +
'                                    <div>' +
'                                        <div class="crc-title" style="font-size: 15px;">' + names[i] + '</div>' +
'                                        <div class="crc-subtitle" style="font-size: 12px;">' + roles[i] + ' • ' + phones[i] + '</div>' +
'                                    </div>' +
'                                </div>' +
'                                <div style="display: flex; gap: 12px; color: #3b82f6;">' +
'                                    <button class="ghost-btn" style="padding: 0; width: 32px; height: 32px;"><iconify-icon icon="solar:phone-calling-bold" style="font-size: 22px;"></iconify-icon></button>' +
'                                    <button class="ghost-btn" style="padding: 0; width: 32px; height: 32px;"><iconify-icon icon="solar:letter-bold" style="font-size: 22px;"></iconify-icon></button>' +
'                                </div>' +
'                            </div>' +
'                        </div>';
}

const directoryMain = 
'                    <main class="scrollable-cards" style="padding-bottom: 80px; padding-top: 0;">\n' +
'                        <!-- Sticky Search Bar -->\n' +
'                        <div style="position: sticky; top: 0; background: rgba(255,253,247,0.95); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px); padding: 16px 16px 12px; z-index: 10; margin: 0 -16px 12px; border-bottom: 1px solid rgba(0,0,0,0.05);">\n' +
'                            <div class="input-wrapper" style="position: relative;">\n' +
'                                <iconify-icon icon="solar:magnifer-linear" style="position: absolute; left: 16px; top: 50%; transform: translateY(-50%); color: #94a3b8; font-size: 20px;"></iconify-icon>\n' +
'                                <input type="text" placeholder="Search employees..." style="width: 100%; height: 44px; border-radius: 22px; border: 1px solid var(--color-border); background: var(--color-surface); padding: 0 20px 0 44px; font-size: 15px; outline: none; box-sizing: border-box; box-shadow: 0 2px 8px rgba(0,0,0,0.02);">\n' +
'                            </div>\n' +
'                        </div>\n\n' +
employeeCards +
'\n                    </main>';

replaceMain('employee-directory-screen', directoryMain);

fs.writeFileSync('Mobile/index.html', html);
console.log('Employee directory updated.');
