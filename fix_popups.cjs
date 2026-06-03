const fs = require('fs');

let html = fs.readFileSync('Mobile/index.html', 'utf8');

// 1. Fix Search Bar Background
const oldSearchDiv = '<div style="position: sticky; top: 0; background: var(--color-canvas); padding: 16px 16px 12px; z-index: 10; margin: 0 -16px 6px; border-bottom: none;">';
const newSearchDiv = '<div style="position: sticky; top: 0; background: transparent; padding: 16px 16px 12px; z-index: 10; margin: 0 -16px 6px; border-bottom: none;">';
if (html.includes(oldSearchDiv)) {
    html = html.replace(oldSearchDiv, newSearchDiv);
}

// 2. Redesign team-attendance-sheet
const sheetStartStr = '<div class="bottom-sheet" id="team-attendance-sheet"';
const sheetStartIdx = html.indexOf(sheetStartStr);

if (sheetStartIdx !== -1) {
    const appContainerEnd = html.indexOf('</div> <!-- End app-container -->');
    
    const newSheetHTML = 
'                <!-- Team Attendance Report Bottom Sheet -->\n' +
'                <div class="bottom-sheet" id="team-attendance-sheet">\n' +
'                    <div class="sheet-handle"></div>\n' +
'                    <div class="sheet-header">\n' +
'                        <h3><span id="team-attendance-name">AMAN</span>\\' + "s Report</h3>\n" +
'                        <button class="close-sheet-btn" onclick="closeBottomSheet()"><iconify-icon icon="solar:close-circle-bold"></iconify-icon></button>\n' +
'                    </div>\n' +
'                    <div class="sheet-scroll-content" style="padding-top: var(--space-4);">\n' +
'                        <div style="display: flex; gap: 12px; margin-bottom: 16px;">\n' +
'                            <div style="flex: 1; position: relative;">\n' +
'                                <select class="form-input" style="width: 100%; appearance: none;">\n' +
'                                    <option>May</option>\n' +
'                                    <option>June</option>\n' +
'                                </select>\n' +
'                                <iconify-icon icon="solar:alt-arrow-down-bold" style="position: absolute; right: 16px; top: 50%; transform: translateY(-50%); color: var(--color-text-secondary); pointer-events: none;"></iconify-icon>\n' +
'                            </div>\n' +
'                            <div style="flex: 1; position: relative;">\n' +
'                                <select class="form-input" style="width: 100%; appearance: none;">\n' +
'                                    <option>2026</option>\n' +
'                                    <option>2025</option>\n' +
'                                </select>\n' +
'                                <iconify-icon icon="solar:alt-arrow-down-bold" style="position: absolute; right: 16px; top: 50%; transform: translateY(-50%); color: var(--color-text-secondary); pointer-events: none;"></iconify-icon>\n' +
'                            </div>\n' +
'                        </div>\n' +
'                        <button class="btn btn-primary btn-block" style="margin-bottom: 24px;">Load Report</button>\n\n' +
'                        <div style="background: var(--color-canvas); padding: 12px 16px; border-radius: 8px; border: 1px solid var(--color-border); display: flex; justify-content: space-between; font-weight: 600; color: var(--color-text-secondary); font-size: 13px; margin-bottom: 16px;">\n' +
'                            <span>Day</span>\n' +
'                            <span>Punches</span>\n' +
'                            <span>Status</span>\n' +
'                        </div>\n\n' +
'                        <div style="padding: 24px 20px; text-align: center;">\n' +
'                            <div style="font-size: 64px; color: var(--color-border); margin-bottom: 12px;">\n' +
'                                <iconify-icon icon="solar:calendar-bold-duotone"></iconify-icon>\n' +
'                            </div>\n' +
'                            <div style="font-size: 15px; color: var(--color-text-secondary); font-weight: 500;">No attendance data</div>\n' +
'                        </div>\n' +
'                    </div>\n' +
'                </div>\n';

    html = html.substring(0, sheetStartIdx) + newSheetHTML + html.substring(appContainerEnd);
    fs.writeFileSync('Mobile/index.html', html);
    console.log('Fixed search bar and redesigned team attendance sheet.');
} else {
    console.log('Could not find team attendance sheet.');
}
