const fs = require('fs');

let html = fs.readFileSync('Mobile/index.html', 'utf8');

const parts = html.split('</header>');
for (let i = 0; i < parts.length - 1; i++) {
    if (parts[i].includes('header-left') && !parts[i].includes('notifications-sheet')) {
        // Find the last closing div of header-left
        const splitDiv = parts[i].split('</div>');
        // Actually, just append it right before the end
        parts[i] = parts[i] + `
                            <button class="ghost-btn" onclick="openBottomSheet('notifications-sheet')" style="margin-left: auto;">
                                <iconify-icon icon="lucide:bell"></iconify-icon>
                                <span class="notification-dot" style="background: #eab308; top: 10px; right: 12px; width: 8px; height: 8px; border: 2px solid white;"></span>
                            </button>
                        `;
    }
}
html = parts.join('</header>');

fs.writeFileSync('Mobile/index.html', html);
console.log('Added notifications bell to all headers.');
