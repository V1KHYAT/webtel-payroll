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
                            <button class="nav-link" onclick="openBottomSheet('attendance-map-sheet'); toggleSidebar();">
                                <iconify-icon icon="solar:scanner-bold"></iconify-icon> Attendance
                            </button>
                        </div>`;

html = html.replace(targetStr, replacementStr);

fs.writeFileSync('Mobile/index.html', html);
console.log('Successfully updated Attendance menu item.');
