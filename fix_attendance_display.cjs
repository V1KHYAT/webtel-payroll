const fs = require('fs');

let html = fs.readFileSync('Mobile/index.html', 'utf8');

const targetStr = `<div id="attendance-screen" class="screen app-layout" style="display: none;">`;
const replacementStr = `<div id="attendance-screen" class="screen app-layout">`;

if (html.includes(targetStr)) {
    html = html.replace(targetStr, replacementStr);
    fs.writeFileSync('Mobile/index.html', html);
    console.log("Successfully removed inline display style from attendance screen.");
} else {
    console.log("Could not find the target string.");
}
