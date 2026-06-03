const fs = require('fs');
let js = fs.readFileSync('Mobile/js/app.js', 'utf8');

const newFunctions = `
// Unified function to hide all screens
function closeAllScreens() {
    const screens = [
        'home-screen', 'profile-screen', 'attendance-screen',
        'visit-expense-screen', 'expense-report-screen', 
        'od-tour-report-screen', 'salary-report-screen', 
        'applied-leave-report-screen', 'leave-screen'
    ];
    screens.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.classList.remove('active');
    });
}

function handleNavigation(screenId) {
    const sidebar = document.getElementById('sidebar');
    if (sidebar && sidebar.classList.contains('open')) {
        toggleSidebar();
    }
    closeAllScreens();
    const target = document.getElementById(screenId);
    if (target) target.classList.add('active');
    
    // Remove active link styling from sidebar
    const navLinks = document.querySelectorAll('.sidebar-content .nav-link');
    navLinks.forEach(link => link.classList.remove('active-link'));
}

function goToVisitExpense() { handleNavigation('visit-expense-screen'); }
function goToExpenseReport() { handleNavigation('expense-report-screen'); }
function goToODTourReport() { handleNavigation('od-tour-report-screen'); }
function goToSalaryReport() { handleNavigation('salary-report-screen'); }
function goToAppliedLeavesReport() { handleNavigation('applied-leave-report-screen'); }
function goToLeave() { handleNavigation('leave-screen'); }
function goToAttendance() { handleNavigation('attendance-screen'); }

function switchLeaveTab(tab) {
    const tabs = document.querySelectorAll('#leave-screen .tabs-container .tab-btn');
    tabs.forEach(t => t.classList.remove('active'));
    
    document.getElementById('leave-plan-tab').style.display = 'none';
    document.getElementById('leave-od-tab').style.display = 'none';
    
    if (tab === 'leave') {
        if(tabs[0]) tabs[0].classList.add('active');
        document.getElementById('leave-plan-tab').style.display = 'block';
    } else {
        if(tabs[1]) tabs[1].classList.add('active');
        document.getElementById('leave-od-tab').style.display = 'block';
    }
}

function switchAttendanceTab(tab) {
    const tabs = document.querySelectorAll('#attendance-screen .tabs-container .tab-btn');
    tabs.forEach(t => t.classList.remove('active'));
    
    document.getElementById('attendance-reports-tab').style.display = 'none';
    document.getElementById('attendance-logs-tab').style.display = 'none';
    
    if (tab === 'reports') {
        if(tabs[0]) tabs[0].classList.add('active');
        document.getElementById('attendance-reports-tab').style.display = 'block';
    } else {
        if(tabs[1]) tabs[1].classList.add('active');
        document.getElementById('attendance-logs-tab').style.display = 'block';
    }
}

function mockSalaryLoad() { alert('Loading Salary Data for selected month...'); }
function mockSalaryExport() { alert('Exporting Salary Report as PDF...'); }
function mockFilePicker() { alert('Android File Picker Opened:\\nSelect Document or Image'); }
`;

// Fix goToProfile
js = js.replace(/function goToProfile\(\) \{[\s\S]*?document\.getElementById\('home-screen'\)\.classList\.remove\('active'\);\s*document\.getElementById\('profile-screen'\)\.classList\.add\('active'\);\s*updateSidebarActiveLink\('nav-profile'\);/,
\`function goToProfile() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar && sidebar.classList.contains('open')) {
        toggleSidebar(); // Close sidebar if open
    }
    handleNavigation('profile-screen');\`);

// Fix goToHome
js = js.replace(/function goToHome\(\) \{[\s\S]*?document\.getElementById\('profile-screen'\)\.classList\.remove\('active'\);\s*document\.getElementById\('home-screen'\)\.classList\.add\('active'\);\s*updateSidebarActiveLink\('nav-dashboard'\);/,
\`function goToHome() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar && sidebar.classList.contains('open')) {
        toggleSidebar(); // Close sidebar if open
    }
    handleNavigation('home-screen');\`);

if (!js.includes('function closeAllScreens')) {
    js += '\n' + newFunctions;
    fs.writeFileSync('Mobile/js/app.js', js);
}
console.log('App.js patched correctly.');
