const fs = require('fs');

let js = fs.readFileSync('Mobile/js/app.js', 'utf8');

// Add goToAttendance and switchAttendanceTab
const attendanceLogic = `
function goToAttendance() {
    closeAllScreens();
    document.getElementById('attendance-screen').classList.add('active');
    
    // Update sidebar active link logic if needed
    const navLinks = document.querySelectorAll('.sidebar-content .nav-link');
    navLinks.forEach(link => link.classList.remove('active-link'));
    // Assuming we want to highlight the Attendance link if we gave it an ID. Since we didn't, we can just close sidebar.
    toggleSidebar();
}

function switchAttendanceTab(tab) {
    const tabs = document.querySelectorAll('.tabs-container .tab-btn');
    tabs.forEach(t => t.classList.remove('active'));
    
    document.getElementById('attendance-reports-tab').style.display = 'none';
    document.getElementById('attendance-logs-tab').style.display = 'none';
    
    if (tab === 'reports') {
        tabs[0].classList.add('active');
        document.getElementById('attendance-reports-tab').style.display = 'block';
    } else {
        tabs[1].classList.add('active');
        document.getElementById('attendance-logs-tab').style.display = 'block';
    }
}
`;

js = js + '\n' + attendanceLogic;

fs.writeFileSync('Mobile/js/app.js', js);
console.log('Added app.js logic');
