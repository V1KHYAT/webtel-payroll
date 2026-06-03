const fs = require('fs');

let html = fs.readFileSync('Mobile/index.html', 'utf8');

// Replace the href="#" with actual onclick handlers for the new screens
html = html.replace('<a href="#">Leave Sanction</a>', '<a href="#" onclick="goToLeaveSanction(); return false;">Leave Sanction</a>');
html = html.replace('<a href="#">Expense Sanction</a>', '<a href="#" onclick="goToExpenseSanction(); return false;">Expense Sanction</a>');
html = html.replace('<a href="#">OD/Tour Sanction</a>', '<a href="#" onclick="goToODTourSanction(); return false;">OD/Tour Sanction</a>');
html = html.replace('<a href="#">My Team</a>', '<a href="#" onclick="goToMyTeam(); return false;">My Team</a>');
html = html.replace('<button class="nav-link"><iconify-icon icon="solar:book-bookmark-bold"></iconify-icon> Employee Directory</button>', '<button class="nav-link" onclick="goToEmployeeDirectory()"><iconify-icon icon="solar:book-bookmark-bold"></iconify-icon> Employee Directory</button>');

fs.writeFileSync('Mobile/index.html', html);
console.log('Sidebar links updated.');
