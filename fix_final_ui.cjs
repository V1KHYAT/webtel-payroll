const fs = require('fs');

let html = fs.readFileSync('Mobile/index.html', 'utf8');
let css = fs.readFileSync('Mobile/css/styles.css', 'utf8');

// 1. Fix Home Scroll Content CSS
css = css.replace(
    /\\.home-scroll-content {[^}]*}/,
    \`.home-scroll-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    bottom: 0;
    overflow-y: auto;
    z-index: 5;
    padding-top: calc(env(safe-area-inset-top, 44px) + 80px);
    padding-bottom: 120px;
}\`
);

// 2. Fix Home Content Container padding
css = css.replace(
    /padding: 24px 16px 140px 16px;/g,
    'padding: 24px 16px 200px 16px;' // Give it even more room to scroll
);

// 3. Fix status bar on home page
html = html.replace(
    /<div class="status-bar-dummy" aria-hidden="true" style="color: #1e293b; padding-top: max\\(env\\(safe-area-inset-top\\), 14px\\);">/g,
    '<div class="status-bar-dummy" aria-hidden="true" style="color: #1e293b; position: absolute; top: 0; left: 0; width: 100%; z-index: 20;">'
);

// 4. Update Header Icons color
css += \`
/* Update Header Icons to Accent Color */
.base-header .ghost-btn iconify-icon {
    color: var(--color-accent) !important;
}
.circular-btn iconify-icon {
    color: var(--color-accent) !important;
}
/* Update Active Tab color */
.tab-btn.active {
    background: var(--color-accent) !important;
    color: #1e293b !important;
}
\`;

// 5. Add notification icon to all other headers
// We find all base-headers that don't have the notification bell, and insert it.
// The pattern is: </div>\n                        </header>
const notifHtml = \`                            <button class="ghost-btn" onclick="openBottomSheet('notifications-sheet')">
                                <iconify-icon icon="lucide:bell"></iconify-icon>
                                <span class="notification-dot" style="background: #eab308; top: 10px; right: 12px; width: 8px; height: 8px; border: 2px solid white;"></span>
                            </button>
                        </header>\`;

html = html.replace(/<div class="user-greeting">\\s*<h1>.*?<\\/span>\\s*<\\/div>\\s*<\\/div>\\s*<\\/header>/g, match => {
    return match.replace('</div>\\n                        </header>', '</div>\\n' + notifHtml);
});

// Also replace for headers that just have <h1> without <span>
html = html.replace(/<div class="user-greeting">\\s*<h1>.*?<\\/h1>\\s*<\\/div>\\s*<\\/div>\\s*<\\/header>/g, match => {
    return match.replace('</div>\\n                        </header>', '</div>\\n' + notifHtml);
});

fs.writeFileSync('Mobile/index.html', html);
fs.writeFileSync('Mobile/css/styles.css', css);

console.log('Fixed scrolling, status bar, header icons, and tabs.');
