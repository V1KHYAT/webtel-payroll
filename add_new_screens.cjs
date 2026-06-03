const fs = require('fs');
const path = require('path');

const indexHtmlPath = path.join(__dirname, 'Mobile', 'index.html');
let html = fs.readFileSync(indexHtmlPath, 'utf8');

const roomRequestScreen = `
                <!-- ==========================================
                     ROOM REQUEST SCREEN
                     ========================================== -->
                <div id="room-request-screen" class="screen app-layout">
                    <div class="status-bar-dummy" aria-hidden="true">
                        <span class="status-time">9:41</span>
                        <div class="status-icons">
                            <iconify-icon icon="lucide:tag"></iconify-icon>
                            <iconify-icon icon="lucide:wifi"></iconify-icon>
                            <iconify-icon icon="lucide:battery-full"></iconify-icon>
                        </div>
                    </div>
                    
                    <div class="app-header-wrapper">
                        <header class="app-header-pill">
                            <div class="app-header-content">
                                <button class="app-header-btn" onclick="toggleSidebar()">
                                    <iconify-icon icon="lucide:menu"></iconify-icon>
                                </button>
                                <div class="app-header-greeting">
                                    <h1>Room Request</h1>
                                    <span>Book a room</span>
                                </div>
                                <button class="app-header-btn" onclick="openBottomSheet('notifications-sheet')">
                                    <iconify-icon icon="lucide:bell"></iconify-icon>
                                    <span class="app-header-dot"></span>
                                </button>
                            </div>
                        </header>
                    </div>

                    <main class="scrollable-cards">                    
                        <div class="custom-report-card" style="padding: 20px;">
                            <div class="form-group" style="margin-bottom: 20px;">
                                <label style="display: block; font-weight: 600; color: var(--color-primary-dark); font-size: 13px; margin-bottom: 8px;">Room Name</label>
                                <div class="filter-select" style="background: white; border: 1px solid #e2e8f0; justify-content: space-between; border-radius: 8px; padding: 12px 16px;">
                                    <span style="color: #64748b; font-size: 15px;">Select</span>
                                    <iconify-icon icon="lucide:chevron-down" style="color: #94a3b8;"></iconify-icon>
                                </div>
                            </div>
                            
                            <div class="form-group" style="margin-bottom: 20px;">
                                <label style="display: block; font-weight: 600; color: var(--color-primary-dark); font-size: 13px; margin-bottom: 8px;">Room Address</label>
                                <input type="text" class="form-input" style="width: 100%; border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px 16px; font-size: 15px; background: white;" placeholder="">
                            </div>
                            
                            <div class="form-group" style="margin-bottom: 20px;">
                                <label style="display: block; font-weight: 600; color: var(--color-primary-dark); font-size: 13px; margin-bottom: 8px;">From Date/Time</label>
                                <input type="text" class="form-input" style="width: 100%; border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px 16px; font-size: 15px; background: white;" value="03/06/2026, 11:53 am">
                            </div>
                            
                            <div class="form-group" style="margin-bottom: 20px;">
                                <label style="display: block; font-weight: 600; color: var(--color-primary-dark); font-size: 13px; margin-bottom: 8px;">To Date/Time</label>
                                <input type="text" class="form-input" style="width: 100%; border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px 16px; font-size: 15px; background: white;" value="03/06/2026, 12:53 pm">
                            </div>
                            
                            <div class="form-group" style="margin-bottom: 32px;">
                                <label style="display: block; font-weight: 600; color: var(--color-primary-dark); font-size: 13px; margin-bottom: 8px;">Remarks</label>
                                <input type="text" class="form-input" style="width: 100%; border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px 16px; font-size: 15px; background: white;" placeholder="">
                            </div>
                            
                            <button onclick="submitAction(this, 'Room Requested Successfully')" class="btn btn-primary btn-block" style="background: #334e68; color: white; border: none; font-weight: 600; height: 50px; font-size: 16px; border-radius: 8px; max-width: 150px; margin: 0 auto; display: flex; align-items: center; justify-content: center;">
                                Apply
                            </button>
                        </div>
                    </main>
                    <div class="gesture-pill-dummy" aria-hidden="true"></div>
                </div> <!-- End Room Request Screen -->

                <!-- ==========================================
                     COMPLAINT SCREEN
                     ========================================== -->
                <div id="complaint-screen" class="screen app-layout">
                    <div class="status-bar-dummy" aria-hidden="true">
                        <span class="status-time">9:41</span>
                        <div class="status-icons">
                            <iconify-icon icon="lucide:tag"></iconify-icon>
                            <iconify-icon icon="lucide:wifi"></iconify-icon>
                            <iconify-icon icon="lucide:battery-full"></iconify-icon>
                        </div>
                    </div>
                    
                    <div class="app-header-wrapper">
                        <header class="app-header-pill">
                            <div class="app-header-content">
                                <button class="app-header-btn" onclick="toggleSidebar()">
                                    <iconify-icon icon="lucide:menu"></iconify-icon>
                                </button>
                                <div class="app-header-greeting">
                                    <h1>Complaint</h1>
                                    <span>Raise an issue</span>
                                </div>
                                <button class="app-header-btn" onclick="openBottomSheet('notifications-sheet')">
                                    <iconify-icon icon="lucide:bell"></iconify-icon>
                                    <span class="app-header-dot"></span>
                                </button>
                            </div>
                        </header>
                    </div>

                    <main class="scrollable-cards">                    
                        <div class="custom-report-card" style="padding: 20px;">
                            <div class="form-group" style="margin-bottom: 20px;">
                                <label style="display: block; font-weight: 600; color: var(--color-primary-dark); font-size: 13px; margin-bottom: 8px;">Email Id</label>
                                <input type="email" class="form-input" style="width: 100%; border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px 16px; font-size: 15px; background: white;" placeholder="">
                            </div>
                            
                            <div class="form-group" style="margin-bottom: 20px;">
                                <label style="display: block; font-weight: 600; color: var(--color-primary-dark); font-size: 13px; margin-bottom: 8px;">Contact No</label>
                                <input type="tel" class="form-input" style="width: 100%; border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px 16px; font-size: 15px; background: white;" placeholder="">
                            </div>
                            
                            <div class="form-group" style="margin-bottom: 20px;">
                                <label style="display: block; font-weight: 600; color: var(--color-primary-dark); font-size: 13px; margin-bottom: 8px;">Query Type</label>
                                <div class="filter-select" style="background: white; border: 1px solid #e2e8f0; justify-content: space-between; border-radius: 8px; padding: 12px 16px;">
                                    <span style="color: #64748b; font-size: 15px;">Select</span>
                                    <iconify-icon icon="lucide:chevron-down" style="color: #94a3b8;"></iconify-icon>
                                </div>
                            </div>
                            
                            <div class="form-group" style="margin-bottom: 20px;">
                                <label style="display: block; font-weight: 600; color: var(--color-primary-dark); font-size: 13px; margin-bottom: 8px;">Subject Type</label>
                                <div class="filter-select" style="background: white; border: 1px solid #e2e8f0; justify-content: space-between; border-radius: 8px; padding: 12px 16px;">
                                    <span style="color: #64748b; font-size: 15px;">Select</span>
                                    <iconify-icon icon="lucide:chevron-down" style="color: #94a3b8;"></iconify-icon>
                                </div>
                            </div>
                            
                            <div class="form-group" style="margin-bottom: 20px;">
                                <label style="display: block; font-weight: 600; color: var(--color-primary-dark); font-size: 13px; margin-bottom: 8px;">Reference Ticket No(if any)</label>
                                <input type="text" class="form-input" style="width: 100%; border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px 16px; font-size: 15px; background: white;" placeholder="">
                            </div>
                            
                            <div class="form-group" style="margin-bottom: 32px;">
                                <label style="display: block; font-weight: 600; color: var(--color-primary-dark); font-size: 13px; margin-bottom: 8px;">Remarks</label>
                                <input type="text" class="form-input" style="width: 100%; border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px 16px; font-size: 15px; background: white;" placeholder="">
                            </div>
                            
                            <button onclick="submitAction(this, 'Complaint Submitted Successfully')" class="btn btn-primary btn-block" style="background: #334e68; color: white; border: none; font-weight: 600; height: 50px; font-size: 16px; border-radius: 8px; max-width: 150px; margin: 0 auto; display: flex; align-items: center; justify-content: center;">
                                Apply
                            </button>
                        </div>
                    </main>
                    <div class="gesture-pill-dummy" aria-hidden="true"></div>
                </div> <!-- End Complaint Screen -->
`;

const sidebarAdditions = `
                        <div class="nav-menu-item">
                            <button class="nav-link" onclick="toggleSubmenu(this)">
                                <iconify-icon icon="lucide:clipboard-list"></iconify-icon> Requests / Services <iconify-icon icon="lucide:chevron-down" class="chevron"></iconify-icon>
                            </button>
                            <div class="nav-submenu">
                                <a href="#" onclick="goToRoomRequest(); return false;">Room Request</a>
                                <a href="#" onclick="goToComplaint(); return false;">Complaint</a>
                            </div>
                        </div>
`;

// Insert the new screens right before <!-- Generic Sheet Overlay -->
html = html.replace('<!-- Generic Sheet Overlay -->', roomRequestScreen + '\n                <!-- Generic Sheet Overlay -->');

// Insert the sidebar addition right before the employee directory menu item
html = html.replace('<div class="nav-menu-item">\\r?\\n\\s*<button class="nav-link" onclick="goToEmployeeDirectory()">', sidebarAdditions + '\\n                        <div class="nav-menu-item">\\n                            <button class="nav-link" onclick="goToEmployeeDirectory()">');

html = html.replace('<div class="nav-menu-item">\n                            <button class="nav-link" onclick="goToEmployeeDirectory()">', sidebarAdditions + '\n                        <div class="nav-menu-item">\n                            <button class="nav-link" onclick="goToEmployeeDirectory()">');

fs.writeFileSync(indexHtmlPath, html);
console.log("HTML updated.");
