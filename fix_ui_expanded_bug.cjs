const fs = require('fs');

let html = fs.readFileSync('Mobile/index.html', 'utf8');

const reportScreens = [
    'expense-report-screen',
    'salary-report-screen',
    'od-tour-report-screen',
    'applied-leave-report-screen'
];

reportScreens.forEach(screenId => {
    const screenRegex = new RegExp(\`<div id="\${screenId}"[^>]*>[\\s\\S]*?<main class="scrollable-cards"[^>]*>([\\s\\S]*?)<\\/main>\\s*<\\/div>\`);
    const match = html.match(screenRegex);
    if (match) {
        let innerHtml = match[1];
        
        // Find the first card
        // We will just do a string replace on the first occurrence of <div class="custom-report-card
        const firstCardStart = innerHtml.indexOf('<div class="custom-report-card');
        if (firstCardStart !== -1) {
            const classEnd = innerHtml.indexOf('"', firstCardStart + 31);
            const currentClasses = innerHtml.substring(firstCardStart + 12, classEnd + 1); // e.g. class="custom-report-card crc-green"
            
            if (!currentClasses.includes('expanded')) {
                const newClasses = currentClasses.substring(0, currentClasses.length - 1) + ' expanded"';
                innerHtml = innerHtml.substring(0, firstCardStart + 12) + newClasses + innerHtml.substring(classEnd + 1);
                
                // Now replace back into HTML
                html = html.replace(match[0], match[0].replace(match[1], innerHtml));
            }
        }
    }
});

fs.writeFileSync('Mobile/index.html', html);
console.log('Fixed expanded class bug.');
