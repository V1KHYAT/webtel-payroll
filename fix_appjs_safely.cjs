const fs = require('fs');
const path = require('path');

const jsPath = path.join(__dirname, 'Mobile', 'js', 'app.js');
let js = fs.readFileSync(jsPath, 'utf8');

// 1. Fix toggleSidebar
const brokenToggleSidebar = `function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    
    if (sidebar.classList.contains('open')) {
        sidebar.classList.remove('open');
        overlay.classList.remove('open');
    } else {
        sidebar.classList.add('open');
        overlay.classList.add('open');

    if (sheetId === 'team-attendance-sheet' && contextData) {
        const nameSpan = document.getElementById('team-attendance-name');
        if (nameSpan) nameSpan.innerText = contextData.toUpperCase();
    }

    }
}`;

const fixedToggleSidebar = `function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    
    if (sidebar.classList.contains('open')) {
        sidebar.classList.remove('open');
        overlay.classList.remove('open');
    } else {
        sidebar.classList.add('open');
        overlay.classList.add('open');
    }
}`;

js = js.replace(brokenToggleSidebar, fixedToggleSidebar);

// 2. Remove closeSidebar() from goToRoomRequest and goToComplaint
js = js.replace(/closeSidebar\(\);\r?\n\s*handleNavigation/g, "handleNavigation");

fs.writeFileSync(jsPath, js);
console.log("JS fixed cleanly.");
