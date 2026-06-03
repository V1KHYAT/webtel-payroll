const fs = require('fs');

let html = fs.readFileSync('Mobile/index.html', 'utf8');

const reportScreens = [
    'expense-report-screen',
    'salary-report-screen',
    'od-tour-report-screen',
    'applied-leave-report-screen'
];

reportScreens.forEach(screenId => {
    const screenStart = html.indexOf('<div id="' + screenId + '"');
    if (screenStart === -1) return;
    
    // Find first custom-report-card
    const cardStart = html.indexOf('class="custom-report-card', screenStart);
    if (cardStart === -1) return;
    
    // Check if it's still in this screen
    const nextScreenStart = html.indexOf('<div id="', screenStart + 10);
    if (nextScreenStart !== -1 && cardStart > nextScreenStart) return;
    
    const classEnd = html.indexOf('"', cardStart + 26);
    const classes = html.substring(cardStart + 7, classEnd); // gives e.g. "custom-report-card crc-green"
    
    if (!classes.includes('expanded')) {
        html = html.substring(0, classEnd) + ' expanded' + html.substring(classEnd);
    }
    
    // Also find the FIRST crc-expanded-content inside this card to set max-height
    const contentStart = html.indexOf('class="crc-expanded-content"', cardStart);
    if (contentStart !== -1 && (nextScreenStart === -1 || contentStart < nextScreenStart)) {
        // Just replace the whole class definition with the inline style
        html = html.replace(
            html.substring(contentStart, contentStart + 28),
            'class="crc-expanded-content" style="max-height: 500px;"'
        );
    }
});

fs.writeFileSync('Mobile/index.html', html);
console.log('Fixed expanded class and inline max-height for all first cards.');
