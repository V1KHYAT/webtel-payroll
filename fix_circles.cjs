const fs = require('fs');
let html = fs.readFileSync('Mobile/index.html', 'utf8');

// Replace known lucide:circle patterns
const replacements = [
    { search: '<button class="ghost-btn" onclick="goBack()"><iconify-icon icon="lucide:circle"></iconify-icon></button>', replace: '<button class="ghost-btn" onclick="goBack()"><iconify-icon icon="lucide:arrow-left"></iconify-icon></button>' },
    { search: '<iconify-icon icon="lucide:circle" style="width:16px;height:16px;color:var(--color-accent);"></iconify-icon>', replace: '<iconify-icon icon="lucide:lock" style="width:16px;height:16px;color:var(--color-accent);"></iconify-icon>' },
    { search: '<div class="prof-section-icon"><iconify-icon icon="lucide:circle"></iconify-icon></div>', replace: '<div class="prof-section-icon"><iconify-icon icon="lucide:folder"></iconify-icon></div>' },
    { search: '<button class="ghost-btn doc-download"><iconify-icon icon="lucide:circle"></iconify-icon></button>', replace: '<button class="ghost-btn doc-download"><iconify-icon icon="lucide:download"></iconify-icon></button>' },
    { search: '<div class="doc-icon"><iconify-icon icon="lucide:circle"></iconify-icon></div>', replace: '<div class="doc-icon"><iconify-icon icon="lucide:file-text"></iconify-icon></div>' },
    { search: '<iconify-icon icon="lucide:circle" style="font-size: 18px;"></iconify-icon> Load Report', replace: '<iconify-icon icon="lucide:download" style="font-size: 18px;"></iconify-icon> Load Report' },
    { search: '<iconify-icon icon="lucide:circle"></iconify-icon> Apply Leave', replace: '<iconify-icon icon="lucide:calendar-plus"></iconify-icon> Apply Leave' },
    { search: '<iconify-icon icon="lucide:circle" class="lc-arrow"></iconify-icon>', replace: '<iconify-icon icon="lucide:chevron-down" class="lc-arrow"></iconify-icon>' },
    { search: '<div class="crc-icon-box green"><iconify-icon icon="lucide:circle"></iconify-icon></div>', replace: '<div class="crc-icon-box green"><iconify-icon icon="lucide:check-circle"></iconify-icon></div>' },
    { search: '<div class="crc-icon-box red"><iconify-icon icon="lucide:circle"></iconify-icon></div>', replace: '<div class="crc-icon-box red"><iconify-icon icon="lucide:x-circle"></iconify-icon></div>' },
    { search: '<div class="crc-icon-box yellow"><iconify-icon icon="lucide:circle"></iconify-icon></div>', replace: '<div class="crc-icon-box yellow"><iconify-icon icon="lucide:clock"></iconify-icon></div>' },
    { search: '<iconify-icon icon="lucide:circle" style="color: #ef4444; font-size: 20px;"></iconify-icon>', replace: '<iconify-icon icon="lucide:alert-circle" style="color: #ef4444; font-size: 20px;"></iconify-icon>' },
    { search: '<iconify-icon icon="lucide:circle" style="font-size: 18px;"></iconify-icon> Delete', replace: '<iconify-icon icon="lucide:trash-2" style="font-size: 18px;"></iconify-icon> Delete' },
    { search: '<iconify-icon icon="lucide:circle" style="color: #d97706; font-size: 20px;"></iconify-icon>', replace: '<iconify-icon icon="lucide:info" style="color: #d97706; font-size: 20px;"></iconify-icon>' },
    { search: '<iconify-icon icon="lucide:circle" class="input-icon"></iconify-icon>', replace: '<iconify-icon icon="lucide:lock" class="input-icon"></iconify-icon>' },
    { search: '<iconify-icon icon="lucide:circle" class="input-icon-right"></iconify-icon>', replace: '<iconify-icon icon="lucide:eye-off" class="input-icon-right"></iconify-icon>' },
    { search: '<div class="feed-icon"><iconify-icon icon="lucide:circle"></iconify-icon></div>', replace: '<div class="feed-icon"><iconify-icon icon="lucide:bell"></iconify-icon></div>' },
    { search: '<div class="feed-icon solid"><iconify-icon icon="lucide:circle"></iconify-icon></div>', replace: '<div class="feed-icon solid"><iconify-icon icon="lucide:alert-circle"></iconify-icon></div>' },
    { search: '<button class="close-sheet-btn" onclick="closeBottomSheet()"><iconify-icon icon="lucide:circle"></iconify-icon></button>', replace: '<button class="close-sheet-btn" onclick="closeBottomSheet()"><iconify-icon icon="lucide:x-circle"></iconify-icon></button>' },
    { search: '<iconify-icon icon="lucide:circle" style="width:14px;height:14px;margin-right:4px;vertical-align:-2px;"></iconify-icon>', replace: '<iconify-icon icon="lucide:map-pin" style="width:14px;height:14px;margin-right:4px;vertical-align:-2px;"></iconify-icon>' }
];

replacements.forEach(r => {
    html = html.split(r.search).join(r.replace);
});

// Any remaining generic circle that might be an arrow down in expansion headers:
// Example: <iconify-icon icon="lucide:circle"></iconify-icon> when alone in an expandable div
html = html.replace(/<iconify-icon icon="lucide:circle"><\/iconify-icon>/g, '<iconify-icon icon="lucide:chevron-down"></iconify-icon>');

fs.writeFileSync('Mobile/index.html', html);
console.log('Fixed circle icons.');
