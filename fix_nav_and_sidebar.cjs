const fs = require('fs');
const path = require('path');

// 1. Fix JS navigation
const jsPath = path.join(__dirname, 'Mobile', 'js', 'app.js');
let js = fs.readFileSync(jsPath, 'utf8');

js = js.replace(/switchScreen\('room-request-screen'\);/g, "handleNavigation('room-request-screen');");
js = js.replace(/switchScreen\('complaint-screen'\);/g, "handleNavigation('complaint-screen');");

fs.writeFileSync(jsPath, js);
console.log("JS navigation fixed.");

// 2. Move sidebar item in HTML
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

// Remove it from its current location (which might have extra whitespace)
// I will just use a generic regex to remove it
const regex = /<div class="nav-menu-item">\s*<button class="nav-link" onclick="toggleSubmenu\(this\)">\s*<iconify-icon icon="lucide:clipboard-list"><\/iconify-icon> Requests \/ Services.*?<\/div>\s*<\/div>/s;

html = html.replace(regex, '');

// Insert it BEFORE the Reports menu block
const reportsMenuAnchor = `                        <div class="nav-menu-item">
                            <button class="nav-link" onclick="toggleSubmenu(this)">
                                <iconify-icon icon="lucide:bar-chart-2"></iconify-icon> Reports <iconify-icon icon="lucide:chevron-down" class="chevron"></iconify-icon>
                            </button>`;

html = html.replace(reportsMenuAnchor, requestsMenuBlock + '\n\n' + reportsMenuAnchor);

fs.writeFileSync(indexHtmlPath, html);
console.log("HTML sidebar updated.");
