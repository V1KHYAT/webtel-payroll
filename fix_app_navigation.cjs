const fs = require('fs');

let js = fs.readFileSync('Mobile/js/app.js', 'utf8');

// 1. Rewrite goToAttendance to not use closeAllScreens()
js = js.replace(/function goToAttendance\(\) \{\s*closeAllScreens\(\);\s*document\.getElementById\('attendance-screen'\)\.classList\.add\('active'\);\s*\/\/[^\n]*\n\s*const navLinks = document\.querySelectorAll\('\.sidebar-content \.nav-link'\);\s*navLinks\.forEach\(link => link\.classList\.remove\('active-link'\)\);\s*\/\/[^\n]*\n\s*toggleSidebar\(\);\s*\}/, 
`function goToAttendance() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar && sidebar.classList.contains('open')) {
        toggleSidebar();
    }
    document.getElementById('home-screen').classList.remove('active');
    document.getElementById('profile-screen').classList.remove('active');
    
    document.getElementById('attendance-screen').classList.add('active');
    
    const navLinks = document.querySelectorAll('.sidebar-content .nav-link');
    navLinks.forEach(link => link.classList.remove('active-link'));
    
    // We can highlight attendance link if we give it an id, e.g., nav-attendance
}`);

// 2. Add 'attendance-screen'.classList.remove('active') to goToProfile
js = js.replace(/document\.getElementById\('home-screen'\)\.classList\.remove\('active'\);\s*document\.getElementById\('profile-screen'\)\.classList\.add\('active'\);/, 
`document.getElementById('home-screen').classList.remove('active');
    document.getElementById('attendance-screen')?.classList.remove('active');
    document.getElementById('profile-screen').classList.add('active');`);

// 3. Add 'attendance-screen'.classList.remove('active') to goToHome
js = js.replace(/document\.getElementById\('profile-screen'\)\.classList\.remove\('active'\);\s*document\.getElementById\('home-screen'\)\.classList\.add\('active'\);/, 
`document.getElementById('profile-screen').classList.remove('active');
    document.getElementById('attendance-screen')?.classList.remove('active');
    document.getElementById('home-screen').classList.add('active');`);

fs.writeFileSync('Mobile/js/app.js', js);
console.log('Fixed navigation logic in app.js');
