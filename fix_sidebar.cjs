const fs = require('fs');

let html = fs.readFileSync('Mobile/index.html', 'utf8');

const damaged = `                        <div class="nav-menu-item">
                            <button class="nav-link" onclick="goToLeave()">
                                <iconify-icon icon="solar:calendar-bold"></iconify-icon> Leave
                            </button>
                        </div>

                        <div class="nav-menu-item">
                            <button class="nav-link" onclick="goToVisitExpense()">
                            </button>
                            <div class="nav-submenu">
                                <a href="#" onclick="goToLeaveSanction(); return false;">Leave Sanction</a>
                                <a href="#" onclick="goToExpenseSanction(); return false;">Expense Sanction</a>
                                <a href="#" onclick="goToODTourSanction(); return false;">OD/Tour Sanction</a>
                                <a href="#" onclick="goToMyTeam(); return false;">My Team</a>
                            </div>
                        </div>`;

const fixed = `                        <div class="nav-menu-item">
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
                        </div>`;

if (html.includes(damaged)) {
    html = html.replace(damaged, fixed);
    fs.writeFileSync('Mobile/index.html', html);
    console.log('Sidebar fixed and updated correctly.');
} else {
    console.log('Error: Could not find damaged segment.');
}
