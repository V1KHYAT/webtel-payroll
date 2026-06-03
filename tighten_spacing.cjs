const fs = require('fs');

let css = fs.readFileSync('Mobile/css/styles.css', 'utf8');

const adjustments = `
/* Tighter Card Spacing */
.home-content-container {
    gap: 12px !important;
}

/* Remove default bottom margins from cards inside the home container so only gap applies */
.home-content-container > .custom-report-card,
.home-content-container > .data-card,
.home-content-container > .bento-box {
    margin-bottom: 0 !important;
}

/* Extra space below holiday card */
.holiday-card {
    margin-bottom: 32px !important;
}
`;

if (!css.includes('Tighter Card Spacing')) {
    css += '\n' + adjustments;
    fs.writeFileSync('Mobile/css/styles.css', css);
    console.log('Spacing adjustments applied.');
} else {
    console.log('Already applied.');
}
