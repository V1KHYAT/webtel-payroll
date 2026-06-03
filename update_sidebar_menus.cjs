const fs = require('fs');

let html = fs.readFileSync('Mobile/index.html', 'utf8');

// 1. Replace Leave dropdown
const leaveRegex = /<div class="nav-menu-item">\s*<button class="nav-link" onclick="toggleSubmenu\(this\)">\s*<iconify-icon icon="solar:calendar-bold"><\/iconify-icon> Leave[\s\S]*?<\/div>\s*<\/div>/;
const newLeaveHTML = `<div class="nav-menu-item">
                            <button class="nav-link" onclick="goToLeave()">
                                <iconify-icon icon="solar:calendar-bold"></iconify-icon> Leave
                            </button>
                        </div>`;
html = html.replace(leaveRegex, newLeaveHTML);

// 2. Replace Expense dropdown
const expenseRegex = /<div class="nav-menu-item">\s*<button class="nav-link" onclick="toggleSubmenu\(this\)">\s*<iconify-icon icon="solar:bill-list-bold"><\/iconify-icon> Expense[\s\S]*?<\/div>\s*<\/div>/;
const newExpenseHTML = `<div class="nav-menu-item">
                            <button class="nav-link" onclick="goToVisitExpense()">
                                <iconify-icon icon="solar:bill-list-bold"></iconify-icon> Visit Expense
                            </button>
                        </div>`;
html = html.replace(expenseRegex, newExpenseHTML);

// 3. Update Reports links
const reportsRegex = /<div class="nav-submenu">\s*<a href="#">Expense Report<\/a>\s*<a href="#">OD Tour Mispunch Report<\/a>\s*<a href="#">Salary Report<\/a>\s*<a href="#">Applied Leaves<\/a>\s*<\/div>/;
const newReportsHTML = `<div class="nav-submenu">
                                <a href="#" onclick="goToExpenseReport(); return false;">Expense Report</a>
                                <a href="#" onclick="goToODTourReport(); return false;">OD Tour Mispunch Report</a>
                                <a href="#" onclick="goToSalaryReport(); return false;">Salary Report</a>
                                <a href="#" onclick="goToAppliedLeavesReport(); return false;">Applied Leaves</a>
                            </div>`;
html = html.replace(reportsRegex, newReportsHTML);

fs.writeFileSync('Mobile/index.html', html);
console.log('Sidebar menus updated.');
