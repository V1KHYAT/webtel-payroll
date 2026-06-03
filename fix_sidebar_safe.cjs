const fs = require('fs');

let html = fs.readFileSync('Mobile/index.html', 'utf8');

const sidebarStart = html.indexOf('<div class="sidebar" id="sidebar">');
const sidebarEnd = html.indexOf('<!-- Generic Sheet Overlay -->');

if (sidebarStart !== -1 && sidebarEnd !== -1) {
    const fullSidebar = `<div class="sidebar" id="sidebar">
                    <div class="sidebar-header">
                        <div class="sidebar-avatar">VP</div>
                        <div class="sidebar-user-info">
                            <div class="user-name">Vijay Pal</div>
                            <div class="user-domain">demo.webtel.in</div>
                        </div>
                        <div class="sidebar-header-actions">
                            <label class="toggle-switch sidebar-header-toggle" title="Future feature control">
                                <input type="checkbox" id="advanced-features-toggle">
                                <span class="toggle-slider"></span>
                            </label>
                            <button class="ghost-btn sidebar-close-btn" onclick="toggleSidebar()"><iconify-icon icon="solar:close-circle-bold"></iconify-icon></button>
                        </div>
                    </div>
                    <div class="sidebar-content">
                        <div class="nav-menu-item" id="nav-dashboard">
                            <button class="nav-link active-link" onclick="goToHome()"><iconify-icon icon="solar:widget-4-bold"></iconify-icon> Dashboard</button>
                        </div>
                        
                        <div class="nav-menu-item" id="nav-profile">
                            <button class="nav-link" onclick="goToProfile()"><iconify-icon icon="solar:user-bold"></iconify-icon> Profile</button>
                        </div>

                        <div class="nav-menu-item">
                            <button class="nav-link" onclick="goToAttendance()">
                                <iconify-icon icon="solar:scanner-bold"></iconify-icon> Attendance
                            </button>
                        </div>
                        
                        <div class="nav-menu-item">
                            <button class="nav-link" onclick="goToLeave()">
                                <iconify-icon icon="solar:calendar-bold"></iconify-icon> Leave
                            </button>
                        </div>

                        <div class="nav-menu-item">
                            <button class="nav-link" onclick="goToVisitExpense()">
                                <iconify-icon icon="solar:bill-list-bold"></iconify-icon> Apply Visit Expense
                            </button>
                        </div>

                        <div class="nav-menu-item">
                            <button class="nav-link" onclick="toggleSubmenu(this)">
                                <iconify-icon icon="solar:chart-bold"></iconify-icon> Reports <iconify-icon icon="solar:alt-arrow-down-bold" class="chevron"></iconify-icon>
                            </button>
                            <div class="nav-submenu">
                                <a href="#" onclick="goToAppliedLeavesReport(); return false;">Applied Leaves</a>
                                <a href="#" onclick="goToSalaryReport(); return false;">Salary Report</a>
                                <a href="#" onclick="goToODTourReport(); return false;">OD Tour Mispunch Report</a>
                                <a href="#" onclick="goToExpenseReport(); return false;">Expense Report</a>
                            </div>
                        </div>

                        <div class="nav-menu-item">
                            <button class="nav-link" onclick="toggleSubmenu(this)">
                                <iconify-icon icon="solar:users-group-rounded-bold"></iconify-icon> Manage Team <iconify-icon icon="solar:alt-arrow-down-bold" class="chevron"></iconify-icon>
                            </button>
                            <div class="nav-submenu">
                                <a href="#" onclick="goToLeaveSanction(); return false;">Leave Sanction</a>
                                <a href="#" onclick="goToExpenseSanction(); return false;">Expense Sanction</a>
                                <a href="#" onclick="goToODTourSanction(); return false;">OD/Tour Sanction</a>
                                <a href="#" onclick="goToMyTeam(); return false;">My Team</a>
                            </div>
                        </div>

                        <div class="nav-menu-item">
                            <button class="nav-link" onclick="goToEmployeeDirectory()"><iconify-icon icon="solar:book-bookmark-bold"></iconify-icon> Employee Directory</button>
                        </div>
                    </div>
                    <div class="sidebar-footer">
                        <button class="sidebar-footer-btn"><iconify-icon icon="solar:help-bold"></iconify-icon> Help</button>
                        <button class="sidebar-footer-btn" onclick="logout()"><iconify-icon icon="solar:logout-2-bold"></iconify-icon> Logout</button>
                    </div>
                </div>

                `;
    html = html.substring(0, sidebarStart) + fullSidebar + html.substring(sidebarEnd);
    fs.writeFileSync('Mobile/index.html', html);
    console.log('Sidebar perfectly replaced.');
} else {
    console.log('Could not find boundaries.');
}
