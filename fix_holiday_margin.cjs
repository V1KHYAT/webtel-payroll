const fs = require('fs');

let css = fs.readFileSync('Mobile/css/styles.css', 'utf8');

// Fix specificity for holiday card margin
css = css.replace(
    /\\.holiday-card\\s*\\{[\\s\\S]*?margin-bottom:\\s*32px\\s*!important;\\s*\\}/,
    '.home-content-container > .custom-report-card.holiday-card { margin-bottom: 32px !important; }'
);

fs.writeFileSync('Mobile/css/styles.css', css);
console.log('Fixed holiday card margin specificity');
