const fs = require('fs');
let html = fs.readFileSync('Mobile/index.html', 'utf8');
let css = fs.readFileSync('Mobile/css/styles.css', 'utf8');

// Update Home Header HTML structure
const homeHeaderRegex = /<!-- Fixed transparent header -->[\\s\\S]*?<!-- Scrollable content -->/m;
const newHomeHeader = `<!-- Status Bar & Header -->
                    <div class="status-bar-dummy" aria-hidden="true">
                        <span class="status-time">9:41</span>
                        <div class="status-icons">
                            <iconify-icon icon="lucide:tag"></iconify-icon>
                            <iconify-icon icon="lucide:wifi"></iconify-icon>
                            <iconify-icon icon="lucide:battery-full"></iconify-icon>
                        </div>
                    </div>
                    <div class="fixed-base" id="home-fixed-header">
                        <header class="base-header" id="home-base-header">
                            <div class="header-left">
                                <button class="ghost-btn" onclick="toggleSidebar()">
                                    <iconify-icon icon="lucide:menu"></iconify-icon>
                                </button>
                                <div class="user-greeting">
                                    <h1>Good Evening</h1>
                                    <span>Vijay Pal</span>
                                </div>
                            </div>
                            <button class="ghost-btn" onclick="openBottomSheet('notifications-sheet')">
                                <iconify-icon icon="lucide:bell"></iconify-icon>
                                <span class="notification-dot" style="background: #eab308; top: 10px; right: 12px; width: 8px; height: 8px; border: 2px solid white;"></span>
                            </button>
                        </header>
                    </div>

                    <!-- Scrollable content -->`;

html = html.replace(homeHeaderRegex, newHomeHeader);

// Add Upcoming Holidays card to HTML
const holidaysCard = `
                            <!-- Upcoming Holidays -->
                            <div class="custom-report-card holiday-card">
                                <div class="card-header" style="padding: 0 0 12px 0;">
                                    <span class="card-title" style="font-weight: 600; font-size: 16px;">Upcoming Holidays</span>
                                </div>
                                <div class="feed-list">
                                    <div class="feed-item" style="display: flex; align-items: center;">
                                        <div class="feed-icon warning-bg" style="color: #3b82f6 !important; background: #eff6ff !important;"><iconify-icon icon="lucide:calendar-days"></iconify-icon></div>
                                        <div class="feed-content" style="flex:1;">
                                            <div class="feed-title" style="font-weight: 600; color: #1e293b;">Diwali</div>
                                            <div class="feed-sub">Wed, 11 Nov</div>
                                        </div>
                                    </div>
                                    <div class="feed-item" style="display: flex; align-items: center; margin-top: 12px;">
                                        <div class="feed-icon warning-bg" style="color: #ef4444 !important; background: #fef2f2 !important;"><iconify-icon icon="lucide:calendar-days"></iconify-icon></div>
                                        <div class="feed-content" style="flex:1;">
                                            <div class="feed-title" style="font-weight: 600; color: #1e293b;">Christmas</div>
                                            <div class="feed-sub">Fri, 25 Dec</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
`;
html = html.replace('<!-- Data Card: Company Feed -->', holidaysCard + '\\n                            <!-- Data Card: Company Feed -->');

// Remove custom css for home-scroll-content
css = css.replace(/\\.home-scroll-content {[^}]*}/, '');

fs.writeFileSync('Mobile/index.html', html);
fs.writeFileSync('Mobile/css/styles.css', css);
console.log('Fixed home header structure and added holidays card.');
