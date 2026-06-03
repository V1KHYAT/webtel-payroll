const fs = require('fs');

let html = fs.readFileSync('Mobile/index.html', 'utf8');

const oldSidebarSegment = `                        <div class="nav-menu-item">
                            <button class="nav-link" onclick="toggleSubmenu(this)">
                                <iconify-icon icon="solar:chart-bold"></iconify-icon> Reports <iconify-icon icon="solar:alt-arrow-down-bold" class="chevron"></iconify-icon>
                            </button>
                            <div class="nav-submenu">
                                <a href="#" onclick="goToExpenseReport(); return false;">Expense Report</a>
                                <a href="#" onclick="goToODTourReport(); return false;">OD Tour Mispunch Report</a>
                                <a href="#" onclick="goToSalaryReport(); return false;">Salary Report</a>
                                <a href="#" onclick="goToAppliedLeavesReport(); return false;">Applied Leaves</a>
                            </div>
                        </div>

                        <div class="nav-menu-item">
                            <button class="nav-link" onclick="goToVisitExpense()">
                                <iconify-icon icon="solar:bill-list-bold"></iconify-icon> Visit Expense
                            </button>
                        </div>`;

const newSidebarSegment = `                        <div class="nav-menu-item">
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
                        </div>`;

if (html.includes(oldSidebarSegment)) {
    html = html.replace(oldSidebarSegment, newSidebarSegment);
    fs.writeFileSync('Mobile/index.html', html);
    console.log('Sidebar navigation successfully updated.');
} else {
    console.log('Error: Could not find the old sidebar segment in index.html. Exact string match failed.');
}
