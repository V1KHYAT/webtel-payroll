const fs = require('fs');
const html = fs.readFileSync('Mobile/index.html', 'utf8');
console.log('Lines:', html.split('\n').length);
console.log('Has sidebar:', html.includes('id="sidebar"'));
console.log('Has sidebar-overlay:', html.includes('id="sidebar-overlay"'));
console.log('Has sheet-overlay:', html.includes('id="sheet-overlay"'));
console.log('Has notifications-sheet:', html.includes('id="notifications-sheet"'));
console.log('Has app-container:', html.includes('app-container'));
console.log('Has device-frame:', html.includes('device-frame'));
console.log('Ends with /html:', html.trim().endsWith('</html>'));
console.log('Has room-request-screen:', html.includes('id="room-request-screen"'));
console.log('Has complaint-screen:', html.includes('id="complaint-screen"'));
console.log('Has toggleSidebar in JS:', fs.readFileSync('Mobile/js/app.js','utf8').includes('function toggleSidebar'));
console.log('Has openBottomSheet in JS:', fs.readFileSync('Mobile/js/app.js','utf8').includes('function openBottomSheet'));

// Check for JS syntax errors
const js = fs.readFileSync('Mobile/js/app.js','utf8');
try {
    new Function(js);
    console.log('JS SYNTAX: OK');
} catch(e) {
    console.log('JS SYNTAX ERROR:', e.message);
}
