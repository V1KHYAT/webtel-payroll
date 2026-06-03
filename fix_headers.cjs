const fs = require('fs');

let html = fs.readFileSync('Mobile/index.html', 'utf8');

function replaceHeader(screenId, title, subtitle) {
    const wrongHeaderStart = html.indexOf(`id="header-${screenId}"`);
    if (wrongHeaderStart === -1) {
        console.log(`Could not find header for ${screenId}`);
        return;
    }
    
    const startTag = '<header class="fixed-base"';
    const endTag = '</header>';
    
    const actualStart = html.lastIndexOf(startTag, wrongHeaderStart);
    const actualEnd = html.indexOf(endTag, actualStart) + endTag.length;
    
    const correctHeader = `
                    <div class="status-bar-dummy" aria-hidden="true">
                        <span class="status-time">9:41</span>
                        <div class="status-icons">
                            <iconify-icon icon="solar:tag-bold"></iconify-icon>
                            <iconify-icon icon="solar:wi-fi-router-minimalistic-bold"></iconify-icon>
                            <iconify-icon icon="solar:battery-full-bold"></iconify-icon>
                        </div>
                    </div>
                    <div class="fixed-base" id="header-${screenId}">
                        <header class="base-header">
                            <div class="header-left">
                                <button class="ghost-btn" onclick="toggleSidebar()">
                                    <iconify-icon icon="solar:hamburger-menu-bold"></iconify-icon>
                                </button>
                                <div class="user-greeting">
                                    <h1>${title}</h1>
                                    ${subtitle ? `<span>${subtitle}</span>` : ''}
                                </div>
                            </div>
                            <button class="ghost-btn" onclick="openBottomSheet('notifications-sheet')">
                                <iconify-icon icon="solar:bell-bing-bold"></iconify-icon>
                                <span class="notification-dot"></span>
                            </button>
                        </header>
                    </div>`;
                    
    html = html.substring(0, actualStart) + correctHeader + html.substring(actualEnd);
}

replaceHeader('leave-sanction', 'Leave Sanction', 'Manage Requests');
replaceHeader('expense-sanction', 'Expense Sanction', 'Approve Costs');
replaceHeader('od-tour-sanction', 'OD/Tour Sanction', 'Mispunch & OD');
replaceHeader('my-team', 'My Team', 'Directory');
replaceHeader('employee-directory', 'Employee Directory', 'All Staff');

fs.writeFileSync('Mobile/index.html', html);
console.log('Fixed headers for all 5 new screens.');
