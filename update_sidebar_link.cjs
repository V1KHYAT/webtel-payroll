const fs = require('fs');

let html = fs.readFileSync('Mobile/index.html', 'utf8');

// Change Attendance sidebar button to call goToAttendance()
html = html.replace(/<button class="nav-link" onclick="openBottomSheet\('attendance-map-sheet'\); toggleSidebar\(\);">\s*<iconify-icon icon="solar:scanner-bold"><\/iconify-icon> Attendance\s*<\/button>/,
    `<button class="nav-link" onclick="goToAttendance()">
                                <iconify-icon icon="solar:scanner-bold"></iconify-icon> Attendance
                            </button>`);

fs.writeFileSync('Mobile/index.html', html);
console.log('Updated sidebar link');
