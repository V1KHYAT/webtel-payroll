const fs = require('fs');
let html = fs.readFileSync('Mobile/index.html', 'utf8');

const targetStr = `                        <div class="nav-menu-item">
                            <button class="nav-link" onclick="toggleSubmenu(this)">
                                <iconify-icon icon="solar:scanner-bold"></iconify-icon> Attendance <iconify-icon icon="solar:alt-arrow-down-bold" class="chevron"></iconify-icon>
                            </button>
                            <div class="nav-submenu">
                                <a href="#" onclick="openBottomSheet('attendance-map-sheet'); toggleSidebar();">Mark Attendance</a>
                            </div>
                        </div>`;

const replacementStr = `                        <div class="nav-menu-item">
                            <button class="nav-link" onclick="goToAttendance()">
                                <iconify-icon icon="solar:scanner-bold"></iconify-icon> Attendance
                            </button>
                        </div>`;

if (html.includes(targetStr)) {
    html = html.replace(targetStr, replacementStr);
    fs.writeFileSync('Mobile/index.html', html);
    console.log("Sidebar successfully updated.");
} else {
    console.log("Could not find the target string. Looking for partial match...");
    // Fallback if formatting differs
    html = html.replace(/<button class="nav-link" onclick="toggleSubmenu\(this\)">\s*<iconify-icon icon="solar:scanner-bold"><\/iconify-icon> Attendance <iconify-icon icon="solar:alt-arrow-down-bold" class="chevron"><\/iconify-icon>\s*<\/button>\s*<div class="nav-submenu">\s*<a href="#" onclick="openBottomSheet\('attendance-map-sheet'\); toggleSidebar\(\);">Mark Attendance<\/a>\s*<\/div>/,
        `<button class="nav-link" onclick="goToAttendance()">\n                                <iconify-icon icon="solar:scanner-bold"></iconify-icon> Attendance\n                            </button>`);
    fs.writeFileSync('Mobile/index.html', html);
    console.log("Used fallback replacement.");
}
