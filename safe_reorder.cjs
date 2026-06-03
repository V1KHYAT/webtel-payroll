const fs = require('fs');
const path = require('path');

const indexHtmlPath = path.join(__dirname, 'Mobile', 'index.html');
let html = fs.readFileSync(indexHtmlPath, 'utf8');

const requestsMenuBlock = `
                        <div class="nav-menu-item">
                            <button class="nav-link" onclick="toggleSubmenu(this)">
                                <iconify-icon icon="lucide:clipboard-list"></iconify-icon> Requests / Services <iconify-icon icon="lucide:chevron-down" class="chevron"></iconify-icon>
                            </button>
                            <div class="nav-submenu">
                                <a href="#" onclick="goToRoomRequest(); return false;">Room Request</a>
                                <a href="#" onclick="goToComplaint(); return false;">Complaint</a>
                            </div>
                        </div>`;

const reportsMenuAnchor = `<div class="nav-menu-item">
                            <button class="nav-link" onclick="toggleSubmenu(this)">
                                <iconify-icon icon="lucide:bar-chart-2"></iconify-icon> Reports <iconify-icon icon="lucide:chevron-down" class="chevron"></iconify-icon>
                            </button>`;

html = html.replace(reportsMenuAnchor, requestsMenuBlock + '\n\n                        ' + reportsMenuAnchor);

fs.writeFileSync(indexHtmlPath, html);
console.log("HTML sidebar reordered.");
