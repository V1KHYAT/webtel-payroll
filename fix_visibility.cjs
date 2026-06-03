const fs = require('fs');

// 1. Fix app.js closeAllScreens function
let js = fs.readFileSync('Mobile/js/app.js', 'utf8');

const oldCloseAllScreens = `function closeAllScreens() {
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
}`;

const newCloseAllScreens = `function closeAllScreens() {
    document.querySelectorAll('.screen').forEach(el => {
        el.classList.remove('active');
    });
}`;

if (js.includes('const screens = [')) {
    js = js.replace(oldCloseAllScreens, newCloseAllScreens);
    fs.writeFileSync('Mobile/js/app.js', js);
    console.log('Fixed closeAllScreens in app.js');
} else {
    console.log('Could not find closeAllScreens in app.js');
}


// 2. Remove style="display: none;" from injected screens
let html = fs.readFileSync('Mobile/index.html', 'utf8');
html = html.replaceAll('<div id="leave-sanction-screen" class="screen app-layout" style="display: none;">', '<div id="leave-sanction-screen" class="screen app-layout">');
html = html.replaceAll('<div id="expense-sanction-screen" class="screen app-layout" style="display: none;">', '<div id="expense-sanction-screen" class="screen app-layout">');
html = html.replaceAll('<div id="od-tour-sanction-screen" class="screen app-layout" style="display: none;">', '<div id="od-tour-sanction-screen" class="screen app-layout">');
html = html.replaceAll('<div id="my-team-screen" class="screen app-layout" style="display: none;">', '<div id="my-team-screen" class="screen app-layout">');
html = html.replaceAll('<div id="employee-directory-screen" class="screen app-layout" style="display: none;">', '<div id="employee-directory-screen" class="screen app-layout">');

fs.writeFileSync('Mobile/index.html', html);
console.log('Removed display: none from index.html screens');

