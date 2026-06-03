const fs = require('fs');

// 1. Fix CSS
let css = fs.readFileSync('Mobile/css/styles.css', 'utf8');

// #btn-punch-main
css = css.replace(/#btn-punch-main\s*\{([\s\S]*?)font-weight:\s*700;([\s\S]*?)\}/, 
`#btn-punch-main {$1font-weight: 600;$2}`);

// .attendance-summary
css = css.replace(/\.attendance-summary\s*\{([\s\S]*?)margin-bottom:\s*var\(--space-5\);\s*padding-bottom:\s*12px;([\s\S]*?)\}/, 
`.attendance-summary {$1margin-bottom: 12px;\n    padding-bottom: 8px;$2}`);

// .custom-report-card
css = css.replace(/\.custom-report-card\s*\{([\s\S]*?)margin-bottom:\s*8px;([\s\S]*?)\}/, 
`.custom-report-card {$1margin-bottom: 6px;$2}`);

fs.writeFileSync('Mobile/css/styles.css', css);

// 2. Fix HTML
let html = fs.readFileSync('Mobile/index.html', 'utf8');

const screenStart = html.indexOf('<div id="visit-expense-screen"');
if (screenStart !== -1) {
    const screenEnd = html.indexOf('</main>', screenStart);
    let screenHtml = html.substring(screenStart, screenEnd);
    
    // Add inline margin overrides
    screenHtml = screenHtml.replace(/class="custom-report-card"/g, 'class="custom-report-card" style="margin-bottom: 6px !important;"');
    
    html = html.substring(0, screenStart) + screenHtml + html.substring(screenEnd);
    fs.writeFileSync('Mobile/index.html', html);
}

console.log('Final polish applied.');
