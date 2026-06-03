const fs = require('fs');

let html = fs.readFileSync('Mobile/index.html', 'utf8');

const screens = [
    'login-domain-screen',
    'login-credentials-screen',
    'home-screen',
    'attendance-screen',
    'profile-screen',
    'salary-report-screen',
    'expense-report-screen',
    'visit-expense-screen',
    'od-tour-report-screen',
    'applied-leave-report-screen'
];

screens.forEach((screenId, index) => {
    const startIdx = html.indexOf('<div id="' + screenId + '"');
    if (startIdx === -1) return;
    
    // Find the boundary of the next screen or sheets
    let nextBoundary = -1;
    if (index + 1 < screens.length) {
        nextBoundary = html.indexOf('<div id="' + screens[index + 1] + '"');
    } else {
        // After the last screen, there are bottom sheets starting with <!-- BOTTOM SHEETS -->
        nextBoundary = html.indexOf('<!-- BOTTOM SHEETS -->');
        if (nextBoundary === -1) {
            nextBoundary = html.indexOf('<div id="notifications-sheet"');
        }
    }
    
    if (nextBoundary === -1) {
        // Fallback for last screen if we can't find sheets
        nextBoundary = html.indexOf('</div> <!-- End app-container -->');
    }
    
    const screenHtml = html.substring(startIdx, nextBoundary);
    
    if (!screenHtml.includes('gesture-pill-dummy')) {
        // Find the last </div> in this screenHtml
        const lastDivIdx = screenHtml.lastIndexOf('</div>');
        if (lastDivIdx !== -1) {
            const newScreenHtml = screenHtml.substring(0, lastDivIdx) + 
                                 '    <div class="gesture-pill-dummy" aria-hidden="true"></div>\n                </div>' +
                                 screenHtml.substring(lastDivIdx + 6);
            html = html.substring(0, startIdx) + newScreenHtml + html.substring(nextBoundary);
        }
    }
});

fs.writeFileSync('Mobile/index.html', html);
console.log('Gesture pill added to all screens.');
