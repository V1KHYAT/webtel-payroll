const fs = require('fs');
const js = fs.readFileSync('Mobile/js/app.js', 'utf8');
if (js.includes('triggerPunchInToast')) {
    console.log("triggerPunchInToast is present");
} else {
    console.log("MISSING");
}
