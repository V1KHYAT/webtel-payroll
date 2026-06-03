const fs = require('fs');

let html = fs.readFileSync('Mobile/index.html', 'utf8');

const notifHtml = `                            <button class="ghost-btn" onclick="openBottomSheet('notifications-sheet')">
                                <iconify-icon icon="lucide:bell"></iconify-icon>
                                <span class="notification-dot" style="background: #eab308; top: 10px; right: 12px; width: 8px; height: 8px; border: 2px solid white;"></span>
                            </button>
                        </header>`;

// Use regex to find </header> that does not already have notifications-btn before it.
html = html.replace(/<div class="user-greeting">\\s*<h1>.*?<\\/span>\\s*<\\/div>\\s*<\\/div>\\s*<\\/header>/g, match => {
    return match.replace('</div>\\n                        </header>', '</div>\\n' + notifHtml);
});

html = html.replace(/<div class="user-greeting">\\s*<h1>.*?<\\/h1>\\s*<\\/div>\\s*<\\/div>\\s*<\\/header>/g, match => {
    return match.replace('</div>\\n                        </header>', '</div>\\n' + notifHtml);
});

// Fix any potential missing ones using a more robust check:
// Look for any </header> that has <div class="header-left"> before it without a notifications-btn
const parts = html.split('</header>');
for (let i = 0; i < parts.length - 1; i++) {
    if (parts[i].includes('header-left') && !parts[i].includes('notifications-sheet')) {
        parts[i] = parts[i] + `
                            <button class="ghost-btn" onclick="openBottomSheet('notifications-sheet')">
                                <iconify-icon icon="lucide:bell"></iconify-icon>
                                <span class="notification-dot" style="background: #eab308; top: 10px; right: 12px; width: 8px; height: 8px; border: 2px solid white;"></span>
                            </button>
                        `;
    }
}
html = parts.join('</header>');

fs.writeFileSync('Mobile/index.html', html);
console.log('Added notifications bell to all headers.');
