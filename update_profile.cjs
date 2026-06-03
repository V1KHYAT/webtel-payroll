const fs = require('fs');

let html = fs.readFileSync('Mobile/index.html', 'utf8');

const profileStart = html.indexOf('<main class="scrollable-cards profile-scroll" id="profile-scroll-area">');
const profileEnd = html.indexOf('</main>', profileStart);

if (profileStart === -1 || profileEnd === -1) {
    console.error("Could not find profile scroll area");
    process.exit(1);
}

const originalProfileContent = html.substring(profileStart + '<main class="scrollable-cards profile-scroll" id="profile-scroll-area">'.length, profileEnd);

// Replace User 1's Compensation Section
const compStart = originalProfileContent.indexOf('<!-- ========== COMPENSATION ========== -->');
const changePassStart = originalProfileContent.indexOf('<!-- ========== CHANGE PASSWORD ========== -->');

const user1CompNew = `<!-- ========== COMPENSATION ========== -->
                        <div class="prof-section">
                            <div class="prof-section-header">
                                <span class="prof-section-title">Compensation</span>
                            </div>

                            <div class="ctc-donut-container">
                                <div class="ctc-donut"></div>
                                <div class="ctc-total-info">
                                    <span class="ctc-total-lbl">TOTAL GROSS PAY</span>
                                    <span class="ctc-total-amt">&#8377;50,00,000</span>
                                </div>
                            </div>

                            <div class="expandable-detail-list" style="display: block; margin-top: 0; padding-top: 0; border-top: none;">
                                <div class="info-row"><span class="info-label"><span class="ctc-indicator" style="background:#ef4444;"></span>Basic</span><span class="info-val">&#8377;25,00,000</span></div>
                                <div class="info-row"><span class="info-label"><span class="ctc-indicator" style="background:#22c55e;"></span>HRA</span><span class="info-val">&#8377;15,00,000</span></div>
                                <div class="info-row"><span class="info-label"><span class="ctc-indicator" style="background:#3b82f6;"></span>Special Allowance</span><span class="info-val">&#8377;5,00,000</span></div>
                                <div class="info-row"><span class="info-label"><span class="ctc-indicator" style="background:#f59e0b;"></span>Bonus</span><span class="info-val">&#8377;3,00,000</span></div>
                                <div class="info-row"><span class="info-label"><span class="ctc-indicator" style="background:#8b5cf6;"></span>Employer PF</span><span class="info-val">&#8377;2,00,000</span></div>
                                <div class="info-row ctc-total" style="margin-top: 12px;"><span class="info-label">Total Earning</span><span class="info-val">&#8377;50,00,000</span></div>
                            </div>
                        </div>
                        
                        `;

const user1ContentFixed = originalProfileContent.substring(0, compStart) + user1CompNew + originalProfileContent.substring(changePassStart);

const user2Profile = `
                        <!-- ========== PERSONAL INFORMATION (USER 2) ========== -->
                        <div class="prof-section">
                            <div class="prof-section-header">
                                <span class="prof-section-title">Personal Information</span>
                            </div>

                            <!-- Profile Hero Card -->
                            <div class="prof-hero-card">
                                <div class="prof-hero-watermark">UC</div>
                                <div class="prof-hero-avatar" style="background: #e0e7ff; color: #4338ca;">UC</div>
                                <div class="prof-hero-info">
                                    <div class="prof-hero-name">Umesh Chandra Rav</div>
                                    <div class="prof-hero-role">Senior System Administrator &middot; IT</div>
                                    <div class="prof-hero-code">SAEL001 &middot; demo.webtel.in</div>
                                </div>
                            </div>

                            <!-- Bento Grid -->
                            <div class="prof-bento-grid">
                                <div class="prof-bento-box">
                                    <div class="prof-bento-text">
                                        <span class="prof-bento-label">Mobile</span>
                                        <span class="prof-bento-value">7465850654</span>
                                    </div>
                                </div>
                                <div class="prof-bento-box">
                                    <div class="prof-bento-text">
                                        <span class="prof-bento-label">Date of Birth</span>
                                        <span class="prof-bento-value">03 Jul 1991</span>
                                    </div>
                                </div>
                                <div class="prof-bento-box">
                                    <div class="prof-bento-text">
                                        <span class="prof-bento-label">Email</span>
                                        <span class="prof-bento-value">rishabh.sharma@webtel.in</span>
                                    </div>
                                </div>
                                <div class="prof-bento-box">
                                    <div class="prof-bento-text">
                                        <span class="prof-bento-label">Blood Group</span>
                                        <span class="prof-bento-value">A+</span>
                                    </div>
                                </div>
                            </div>

                            <button class="prof-expand-btn" onclick="toggleProfileDetail(this)">
                                <span>Show Employee Details</span>
                                <iconify-icon icon="lucide:chevron-right" class="expand-chevron"></iconify-icon>
                            </button>
                            <div class="expandable-detail-list">
                                <div class="info-row"><span class="info-label">Code</span><span class="info-val">SAEL001</span></div>
                                <div class="info-row"><span class="info-label">Gender</span><span class="info-val">Male</span></div>
                                <div class="info-row"><span class="info-label">Father Name</span><span class="info-val">Sh. Ramkishun Ram</span></div>
                                <div class="info-row"><span class="info-label">Spouse Name</span><span class="info-val">-</span></div>
                                <div class="info-row"><span class="info-label">Present Address</span><span class="info-val" style="text-align:right;">B 86 87 RAJPUR EXTENTION DELHI DELHI India 110068</span></div>
                                <div class="info-row"><span class="info-label">Permanent Address</span><span class="info-val" style="text-align:right;">B 86 87 RAJPUR EXTENTION DELHI DELHI India 110068</span></div>
                            </div>
                        </div>

                        <!-- ========== WORK INFORMATION (USER 2) ========== -->
                        <div class="prof-section">
                            <div class="prof-section-header">
                                <span class="prof-section-title">Work Information</span>
                            </div>

                            <div class="prof-bento-grid">
                                <div class="prof-bento-box">
                                    <div class="prof-bento-text">
                                        <span class="prof-bento-label">Joining Date</span>
                                        <span class="prof-bento-value">01 Jun 2026</span>
                                    </div>
                                </div>
                                <div class="prof-bento-box">
                                    <div class="prof-bento-text">
                                        <span class="prof-bento-label">Business Unit</span>
                                        <span class="prof-bento-value">Delhi HO</span>
                                    </div>
                                </div>
                                <div class="prof-bento-box">
                                    <div class="prof-bento-text">
                                        <span class="prof-bento-label">Location</span>
                                        <span class="prof-bento-value">Corporate</span>
                                    </div>
                                </div>
                                <div class="prof-bento-box">
                                    <div class="prof-bento-text">
                                        <span class="prof-bento-label">Senior</span>
                                        <span class="prof-bento-value">Vijay Pal</span>
                                    </div>
                                </div>
                            </div>

                            <button class="prof-expand-btn" onclick="toggleProfileDetail(this)">
                                <span>Show Organisation Details</span>
                                <iconify-icon icon="lucide:chevron-right" class="expand-chevron"></iconify-icon>
                            </button>
                            <div class="expandable-detail-list">
                                <div class="info-row"><span class="info-label">PAN No.</span><span class="info-val">BVQPR1584J</span></div>
                                <div class="info-row"><span class="info-label">Designation</span><span class="info-val">Senior System Administrator</span></div>
                                <div class="info-row"><span class="info-label">Department</span><span class="info-val">IT</span></div>
                                <div class="info-row"><span class="info-label">Cost Centre</span><span class="info-val" style="text-align:right;">Sukhbir Agro Energy Ltd.</span></div>
                                <div class="info-row"><span class="info-label">Category</span><span class="info-val">HO Staff</span></div>
                                <div class="info-row"><span class="info-label">State</span><span class="info-val">DELHI</span></div>
                                <div class="info-row"><span class="info-label">Address</span><span class="info-val">New Delhi Delhi</span></div>
                                <div class="info-row"><span class="info-label">Bank</span><span class="info-val">ICICI Bank Limited</span></div>
                                <div class="info-row"><span class="info-label">Account No.</span><span class="info-val">386901500597</span></div>
                                <div class="info-row"><span class="info-label">ESI No.</span><span class="info-val">456456546546</span></div>
                                <div class="info-row"><span class="info-label">PF No.</span><span class="info-val">5646546546546</span></div>
                                <div class="info-row"><span class="info-label">UAN No.</span><span class="info-val">dsxf434</span></div>
                            </div>
                        </div>

                        <!-- ========== COMPENSATION (USER 2) ========== -->
                        <div class="prof-section">
                            <div class="prof-section-header">
                                <span class="prof-section-title">Compensation</span>
                            </div>

                            <div class="ctc-donut-container">
                                <div class="ctc-donut"></div>
                                <div class="ctc-total-info">
                                    <span class="ctc-total-lbl">TOTAL GROSS PAY</span>
                                    <span class="ctc-total-amt">&#8377;30,18,405.0</span>
                                </div>
                            </div>

                            <button class="prof-expand-btn" onclick="toggleProfileDetail(this)">
                                <span>Show All Components</span>
                                <iconify-icon icon="lucide:chevron-right" class="expand-chevron"></iconify-icon>
                            </button>
                            <div class="expandable-detail-list" style="display: block; margin-top: 0; padding-top: 0; border-top: none;">
                                <div class="info-row"><span class="info-label"><span class="ctc-indicator" style="background:#ef4444;"></span>Basic</span><span class="info-val">&#8377;30,00,000.0</span></div>
                                <div class="info-row"><span class="info-label"><span class="ctc-indicator" style="background:#22c55e;"></span>House Rent Allowance</span><span class="info-val">&#8377;9,303.0</span></div>
                                <div class="info-row"><span class="info-label"><span class="ctc-indicator" style="background:#3b82f6;"></span>Food Expence Reimb.</span><span class="info-val">&#8377;500.0</span></div>
                                <div class="info-row"><span class="info-label"><span class="ctc-indicator" style="background:#f59e0b;"></span>Gratuity</span><span class="info-val">&#8377;895.0</span></div>
                                <div class="info-row"><span class="info-label"><span class="ctc-indicator" style="background:#8b5cf6;"></span>Special Allowance</span><span class="info-val">&#8377;2,366.0</span></div>
                                <div class="info-row"><span class="info-label"><span class="ctc-indicator" style="background:#e11d48;"></span>Leave Travel Allowance</span><span class="info-val">&#8377;1,550.0</span></div>
                                <div class="info-row"><span class="info-label"><span class="ctc-indicator" style="background:#06b6d4;"></span>Uniform Allowance P</span><span class="info-val">&#8377;1,000.0</span></div>
                                <div class="info-row"><span class="info-label"><span class="ctc-indicator" style="background:#84cc16;"></span>Transport Allowance P</span><span class="info-val">&#8377;2,791.0</span></div>
                                <div class="info-row ctc-total" style="margin-top: 12px;"><span class="info-label">Total Earning</span><span class="info-val">&#8377;30,18,405.0</span></div>
                            </div>
                        </div>
`;

const finalProfileHTML = '<div data-user="1">' + user1ContentFixed + '</div><div data-user="2" style="display:none;">' + user2Profile + '</div>';

html = html.substring(0, profileStart + '<main class="scrollable-cards profile-scroll" id="profile-scroll-area">'.length) + finalProfileHTML + html.substring(profileEnd);
fs.writeFileSync('Mobile/index.html', html);
console.log("Profile updated!");
