const fs = require('fs');
const path = require('path');

const indexHtmlPath = path.join(__dirname, 'Mobile', 'index.html');
let html = fs.readFileSync(indexHtmlPath, 'utf8');

const overlayHTML = `
                <!-- Sidebar Overlay -->
                <div class="sidebar-overlay" id="sidebar-overlay" onclick="toggleSidebar()"></div>
`;

if (!html.includes('id="sidebar-overlay"')) {
    html = html.replace('<!-- Generic Sheet Overlay -->', overlayHTML + '\n                <!-- Generic Sheet Overlay -->');
    fs.writeFileSync(indexHtmlPath, html);
    console.log("Added sidebar overlay back.");
} else {
    console.log("Overlay already exists.");
}
