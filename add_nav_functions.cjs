const fs = require('fs');
const path = require('path');

const jsPath = path.join(__dirname, 'Mobile', 'js', 'app.js');
let js = fs.readFileSync(jsPath, 'utf8');

const additions = `
function goToRoomRequest() {
    closeSidebar();
    switchScreen('room-request-screen');
}

function goToComplaint() {
    closeSidebar();
    switchScreen('complaint-screen');
}
`;

js += additions;

fs.writeFileSync(jsPath, js);
console.log("JS updated.");
