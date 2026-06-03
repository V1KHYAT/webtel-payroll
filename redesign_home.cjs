const fs = require('fs');

let html = fs.readFileSync('Mobile/index.html', 'utf8');

const homeStart = html.indexOf('<div id="home-screen" class="screen app-layout active">');
const homeEnd = html.indexOf('<!-- PROFILE SCREEN -->');

if (homeStart !== -1 && homeEnd !== -1) {
    const newHome = `<div id="home-screen" class="screen app-layout active">
                    <!-- Home Background Image Layer -->
                    <div class="home-hero-bg" style="background-image: url('images/home-bg.png');"></div>

                    <!-- Fixed transparent header -->
                    <div class="home-fixed-header">
                        <header class="base-header transparent-header">
                            <div class="header-left">
                                <button class="ghost-btn circular-btn" onclick="toggleSidebar()">
                                    <iconify-icon icon="lucide:menu"></iconify-icon>
                                </button>
                                <div class="user-greeting dark-text">
                                    <h1 style="font-weight:600;">Good Evening</h1>
                                    <span style="color:#1e293b; font-weight:500;">Vijay Pal</span>
                                </div>
                            </div>
                            <button class="ghost-btn circular-btn notifications-btn" onclick="openBottomSheet('notifications-sheet')">
                                <iconify-icon icon="lucide:bell"></iconify-icon>
                                <span class="notification-dot" style="background: #eab308; top: 10px; right: 12px; width: 8px; height: 8px; border: 2px solid white;"></span>
                            </button>
                        </header>
                    </div>

                    <!-- Scrollable content -->
                    <main class="scrollable-cards home-scroll-content">
                        
                        <div class="home-content-container">
                            <!-- Data Card: Mark Attendance -->
                            <div class="custom-report-card attendance-hero-card">
                                <div style="display: flex; justify-content: center; width: 100%;">
                                    <div class="shift-pill">
                                        <iconify-icon icon="lucide:sun" style="color: #eab308;"></iconify-icon> General Shift: 10:00 AM - 07:00 PM
                                    </div>
                                </div>
                                
                                <div class="attendance-time-row">
                                    <div class="time-display">
                                        <div><span class="time-large">4:08</span><span class="time-ampm">PM</span></div>
                                        <div class="time-sub">Ready to punch in</div>
                                    </div>
                                    <div class="shift-details">
                                        <div class="shift-row"><span>SHIFT IN</span><span class="shift-val">--:--</span></div>
                                        <div class="shift-row"><span>SHIFT OUT</span><span class="shift-val">--:--</span></div>
                                    </div>
                                </div>
                                
                                <button class="btn-primary btn-large btn-attendance">Mark Attendance</button>
                            </div>

                            <!-- Regularization Summary -->
                            <button class="custom-report-card alert-card" onclick="openBottomSheet('regularisation-sheet')">
                                <div class="alert-icon"><iconify-icon icon="lucide:triangle-alert"></iconify-icon></div>
                                <div class="alert-text">
                                    <span class="summary-count">15 days</span> require regularisation
                                </div>
                                <iconify-icon icon="lucide:chevron-right" class="alert-chevron"></iconify-icon>
                            </button>

                            <!-- Data Card: Leave Balance -->
                            <div class="custom-report-card leave-balance-card">
                                <div class="card-header" style="padding: 0 0 12px 0;">
                                    <span class="card-title" style="font-weight: 600; font-size: 16px;">Leave Balance</span>
                                </div>
                                <div class="leave-balance-huge">66.0</div>
                                <div class="leave-balance-row">
                                    <span>Casual Leave</span>
                                    <span class="val">6.00</span>
                                </div>
                                <div class="leave-balance-row">
                                    <span>Privilege Leave</span>
                                    <span class="val">60.00</span>
                                </div>
                            </div>

                            <!-- Data Card: Company Feed -->
                            <div class="custom-report-card feed-card">
                                <div class="card-header" style="padding: 0 0 12px 0;">
                                    <span class="card-title" style="font-weight: 600; font-size: 16px;">Company Feed</span>
                                </div>
                                <div class="feed-list">
                                    <div class="feed-item" style="display: flex; align-items: center;">
                                        <div class="feed-icon warning-bg"><iconify-icon icon="lucide:party-popper"></iconify-icon></div>
                                        <div class="feed-content" style="flex:1;">
                                            <div class="feed-title" style="font-weight: 600; color: #1e293b;">Anil Yadav's Birthday</div>
                                            <div class="feed-sub">Rice Lab &bull; Today</div>
                                        </div>
                                        <iconify-icon icon="lucide:chevron-right" class="feed-chevron"></iconify-icon>
                                    </div>
                                    <div class="feed-item" style="display: flex; align-items: center; margin-top: 12px;">
                                        <div class="feed-icon warning-bg"><iconify-icon icon="lucide:award"></iconify-icon></div>
                                        <div class="feed-content" style="flex:1;">
                                            <div class="feed-title" style="font-weight: 600; color: #1e293b;">5 Year Work Anniversary</div>
                                            <div class="feed-sub">Congratulations to Sarah Jenkins!</div>
                                        </div>
                                        <iconify-icon icon="lucide:chevron-right" class="feed-chevron"></iconify-icon>
                                    </div>
                                </div>
                            </div>
                        </div> <!-- End home-content-container -->
                        
                    </main>

                    <div class="gesture-pill-dummy" aria-hidden="true"></div>
                </div> <!-- End home screen -->

                `;
    html = html.substring(0, homeStart) + newHome + html.substring(homeEnd);
    fs.writeFileSync('Mobile/index.html', html);
    console.log('Home screen correctly replaced.');
} else {
    console.log('Could not find home screen boundaries.');
}
