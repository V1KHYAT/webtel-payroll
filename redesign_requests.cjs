const fs = require('fs');
const path = require('path');

const indexHtmlPath = path.join(__dirname, 'Mobile', 'index.html');
let html = fs.readFileSync(indexHtmlPath, 'utf8');

// The new HTML for Room Request
const newRoomRequestHTML = `                <!-- ==========================================
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
                        <!-- Card 1 -->
                        <div class="custom-report-card" style="margin-bottom: 12px; padding: 16px;">
                            <div class="crc-header" style="margin-bottom: 20px;">
                                <div class="crc-header-left">
                                    <div class="crc-icon-box" style="background: #e0e7ff; color: #4f46e5;">
                                        <iconify-icon icon="lucide:door-open"></iconify-icon>
                                    </div>
                                    <div>
                                        <div class="crc-title" style="margin-bottom: 2px;">Room Details</div>
                                        <div class="crc-subtitle">Select the room you need</div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="form-group" style="margin-bottom: 16px;">
                                <label style="font-size: 11px; font-weight: 600; color: var(--color-text); margin-bottom: 6px;">Room Name</label>
                                <select class="form-input" style="background: #fdfdfd; border: 1px solid #f0f0f0; border-radius: 10px;">
                                    <option>Select Room</option>
                                    <option>Conference Room A</option>
                                    <option>Meeting Room 1</option>
                                    <option>Boardroom</option>
                                </select>
                            </div>
                            
                            <div class="form-group" style="margin-bottom: 0;">
                                <label style="font-size: 11px; font-weight: 600; color: var(--color-text); margin-bottom: 6px;">Room Address</label>
                                <input type="text" class="form-input" style="background: #fdfdfd; border: 1px solid #f0f0f0; border-radius: 10px;" placeholder="E.g., 2nd Floor, West Wing">
                            </div>
                        </div>

                        <!-- Card 2 -->
                        <div class="custom-report-card" style="margin-bottom: 12px; padding: 16px;">
                            <div class="crc-header" style="margin-bottom: 20px;">
                                <div class="crc-header-left">
                                    <div class="crc-icon-box" style="background: #dcfce7; color: #16a34a;">
                                        <iconify-icon icon="lucide:clock"></iconify-icon>
                                    </div>
                                    <div>
                                        <div class="crc-title" style="margin-bottom: 2px;">Timing</div>
                                        <div class="crc-subtitle">When do you need it?</div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="form-group" style="margin-bottom: 16px;">
                                <label style="font-size: 11px; font-weight: 600; color: var(--color-text); margin-bottom: 6px;">From Date/Time</label>
                                <input type="datetime-local" class="form-input" style="background: #fdfdfd; border: 1px solid #f0f0f0; border-radius: 10px;" value="2026-06-03T11:53">
                            </div>

                            <div class="form-group" style="margin-bottom: 0;">
                                <label style="font-size: 11px; font-weight: 600; color: var(--color-text); margin-bottom: 6px;">To Date/Time</label>
                                <input type="datetime-local" class="form-input" style="background: #fdfdfd; border: 1px solid #f0f0f0; border-radius: 10px;" value="2026-06-03T12:53">
                            </div>
                        </div>

                        <!-- Card 3 -->
                        <div class="custom-report-card" style="margin-bottom: 12px; padding: 16px;">
                            <div class="crc-header" style="margin-bottom: 20px;">
                                <div class="crc-header-left">
                                    <div class="crc-icon-box yellow"><iconify-icon icon="lucide:message-square"></iconify-icon>
                                    </div>
                                    <div>
                                        <div class="crc-title" style="margin-bottom: 2px;">Remarks / Purpose</div>
                                        <div class="crc-subtitle">Why do you need this room?</div>
                                    </div>
                                </div>
                            </div>
                            
                            <div style="position: relative;">
                                <textarea class="form-input" style="min-height: 100px; resize: none; background: #fdfdfd; border: 1px solid #f0f0f0; border-radius: 10px; padding-bottom: 28px;" placeholder="Explain the purpose..."></textarea>
                                <div style="position: absolute; bottom: 10px; right: 14px; font-size: 11px; color: var(--color-text-tertiary); font-weight: 500;">0/500</div>
                            </div>
                        </div>

                        <div style="margin-top: 24px; margin-bottom: 24px;">
                            <button onclick="submitAction(this, 'Room Requested Successfully')" class="btn btn-primary btn-block" style="background: #60a5fa; color: white; border: none; font-weight: 700; height: 56px; font-size: 16px; border-radius: 14px; display: flex; align-items: center; justify-content: center;">
                                Request Room
                            </button>
                        </div>
                    </main>
                    <div class="gesture-pill-dummy" aria-hidden="true"></div>
                </div> <!-- End Room Request Screen -->`;

const newComplaintHTML = `                <!-- ==========================================
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
                        <!-- Card 1 -->
                        <div class="custom-report-card" style="margin-bottom: 12px; padding: 16px;">
                            <div class="crc-header" style="margin-bottom: 20px;">
                                <div class="crc-header-left">
                                    <div class="crc-icon-box" style="background: #fee2e2; color: #ef4444;">
                                        <iconify-icon icon="lucide:alert-triangle"></iconify-icon>
                                    </div>
                                    <div>
                                        <div class="crc-title" style="margin-bottom: 2px;">Issue Details</div>
                                        <div class="crc-subtitle">What seems to be the problem?</div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="form-group" style="margin-bottom: 16px;">
                                <label style="font-size: 11px; font-weight: 600; color: var(--color-text); margin-bottom: 6px;">Query Type</label>
                                <select class="form-input" style="background: #fdfdfd; border: 1px solid #f0f0f0; border-radius: 10px;">
                                    <option>Select</option>
                                    <option>Hardware Issue</option>
                                    <option>Software Issue</option>
                                    <option>HR Related</option>
                                </select>
                            </div>
                            
                            <div class="form-group" style="margin-bottom: 16px;">
                                <label style="font-size: 11px; font-weight: 600; color: var(--color-text); margin-bottom: 6px;">Subject Type</label>
                                <select class="form-input" style="background: #fdfdfd; border: 1px solid #f0f0f0; border-radius: 10px;">
                                    <option>Select</option>
                                    <option>Laptop Repair</option>
                                    <option>Portal Access</option>
                                    <option>Payroll Issue</option>
                                </select>
                            </div>

                            <div class="form-group" style="margin-bottom: 0;">
                                <label style="font-size: 11px; font-weight: 600; color: var(--color-text); margin-bottom: 6px;">Reference Ticket No (if any)</label>
                                <input type="text" class="form-input" style="background: #fdfdfd; border: 1px solid #f0f0f0; border-radius: 10px;" placeholder="#TKT-">
                            </div>
                        </div>

                        <!-- Card 2 -->
                        <div class="custom-report-card" style="margin-bottom: 12px; padding: 16px;">
                            <div class="crc-header" style="margin-bottom: 20px;">
                                <div class="crc-header-left">
                                    <div class="crc-icon-box" style="background: #f3e8ff; color: #a855f7;">
                                        <iconify-icon icon="lucide:user"></iconify-icon>
                                    </div>
                                    <div>
                                        <div class="crc-title" style="margin-bottom: 2px;">Contact Info</div>
                                        <div class="crc-subtitle">How can we reach you?</div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="form-group" style="margin-bottom: 16px;">
                                <label style="font-size: 11px; font-weight: 600; color: var(--color-text); margin-bottom: 6px;">Email Id</label>
                                <input type="email" class="form-input" style="background: #fdfdfd; border: 1px solid #f0f0f0; border-radius: 10px;" placeholder="you@company.com">
                            </div>

                            <div class="form-group" style="margin-bottom: 0;">
                                <label style="font-size: 11px; font-weight: 600; color: var(--color-text); margin-bottom: 6px;">Contact No</label>
                                <input type="tel" class="form-input" style="background: #fdfdfd; border: 1px solid #f0f0f0; border-radius: 10px;" placeholder="+91 ">
                            </div>
                        </div>

                        <!-- Card 3 -->
                        <div class="custom-report-card" style="margin-bottom: 12px; padding: 16px;">
                            <div class="crc-header" style="margin-bottom: 20px;">
                                <div class="crc-header-left">
                                    <div class="crc-icon-box yellow"><iconify-icon icon="lucide:message-square"></iconify-icon>
                                    </div>
                                    <div>
                                        <div class="crc-title" style="margin-bottom: 2px;">Remarks</div>
                                        <div class="crc-subtitle">Provide details about your issue</div>
                                    </div>
                                </div>
                            </div>
                            
                            <div style="position: relative;">
                                <textarea class="form-input" style="min-height: 100px; resize: none; background: #fdfdfd; border: 1px solid #f0f0f0; border-radius: 10px; padding-bottom: 28px;" placeholder="Describe the problem..."></textarea>
                                <div style="position: absolute; bottom: 10px; right: 14px; font-size: 11px; color: var(--color-text-tertiary); font-weight: 500;">0/500</div>
                            </div>
                        </div>

                        <div style="margin-top: 24px; margin-bottom: 24px;">
                            <button onclick="submitAction(this, 'Complaint Raised Successfully')" class="btn btn-primary btn-block" style="background: #ef4444; color: white; border: none; font-weight: 700; height: 56px; font-size: 16px; border-radius: 14px; display: flex; align-items: center; justify-content: center;">
                                Submit Complaint
                            </button>
                        </div>
                    </main>
                    <div class="gesture-pill-dummy" aria-hidden="true"></div>
                </div> <!-- End Complaint Screen -->`;

const roomRequestRegex = /<!-- =+[\s\S]*?ROOM REQUEST SCREEN[\s\S]*?<!-- End Room Request Screen -->/i;
const complaintRegex = /<!-- =+[\s\S]*?COMPLAINT SCREEN[\s\S]*?<!-- End Complaint Screen -->/i;

html = html.replace(roomRequestRegex, newRoomRequestHTML);
html = html.replace(complaintRegex, newComplaintHTML);

fs.writeFileSync(indexHtmlPath, html);
console.log("Pages redesigned in the new sleek style.");
