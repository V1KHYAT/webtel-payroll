const fs = require('fs');

// 1. Fix HTML: Remove center alignment inline styles from <main>
let html = fs.readFileSync('Mobile/index.html', 'utf8');

// The <main> for expense report currently has: style="display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; height: 100%;"
html = html.replace(/<main class="scrollable-cards" style="display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; height: 100%;">/g, 
    '<main class="scrollable-cards" style="padding-bottom: 80px;">');

// For salary report, it might have something similar. Let's search for any main with justify-content: center
html = html.replace(/<main class="scrollable-cards" style="display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center;">/g, 
    '<main class="scrollable-cards" style="padding-bottom: 80px;">');

// Let's also just do a safe replace for salary report:
// It previously had an empty state too. Let's find it.
const salaryMainRegex = /<div id="salary-report-screen"[\s\S]*?<main class="scrollable-cards"[^>]*>/;
const salaryMatch = html.match(salaryMainRegex);
if (salaryMatch) {
    const matchedStr = salaryMatch[0];
    const newMatchedStr = matchedStr.replace(/<main class="scrollable-cards"[^>]*>/, '<main class="scrollable-cards" style="padding-bottom: 80px;">');
    html = html.replace(matchedStr, newMatchedStr);
}

// Ensure expense report main is also definitely cleaned
const expenseMainRegex = /<div id="expense-report-screen"[\s\S]*?<main class="scrollable-cards"[^>]*>/;
const expenseMatch = html.match(expenseMainRegex);
if (expenseMatch) {
    const matchedStr = expenseMatch[0];
    const newMatchedStr = matchedStr.replace(/<main class="scrollable-cards"[^>]*>/, '<main class="scrollable-cards" style="padding-bottom: 80px;">');
    html = html.replace(matchedStr, newMatchedStr);
}

fs.writeFileSync('Mobile/index.html', html);


// 2. Fix CSS: Make cards sleeker and text sizes smaller
let css = fs.readFileSync('Mobile/css/styles.css', 'utf8');

// Card padding
css = css.replace(/\.custom-report-card\s*\{([\s\S]*?)padding:\s*20px;([\s\S]*?)\}/, 
`.custom-report-card {$1padding: 16px;$2}`);

// Icon box size
css = css.replace(/\.crc-icon-box\s*\{([\s\S]*?)width:\s*38px;\s*height:\s*38px;([\s\S]*?)font-size:\s*20px;([\s\S]*?)\}/, 
`.crc-icon-box {$1width: 34px;\n    height: 34px;$2font-size: 16px;$3}`);

// Title text
css = css.replace(/\.crc-title\s*\{([\s\S]*?)font-size:\s*16px;([\s\S]*?)\}/, 
`.crc-title {$1font-size: 14px;$2}`);

// Subtitle text
css = css.replace(/\.crc-subtitle\s*\{([\s\S]*?)font-size:\s*13px;([\s\S]*?)\}/, 
`.crc-subtitle {$1font-size: 12px;$2}`);

// Data box padding and gap
css = css.replace(/\.crc-data-box\s*\{([\s\S]*?)padding:\s*16px;([\s\S]*?)gap:\s*16px;([\s\S]*?)\}/, 
`.crc-data-box {$1padding: 12px;$2gap: 10px;$3}`);

// Data label text
css = css.replace(/\.crc-data-label\s*\{([\s\S]*?)font-size:\s*12px;([\s\S]*?)\}/, 
`.crc-data-label {$1font-size: 11px;$2}`);

// Data value text
css = css.replace(/\.crc-data-value\s*\{([\s\S]*?)font-size:\s*13px;([\s\S]*?)\}/, 
`.crc-data-value {$1font-size: 12px;$2}`);

// Pill sizing
css = css.replace(/\.crc-pill\s*\{([\s\S]*?)padding:\s*6px\s*12px;([\s\S]*?)font-size:\s*12px;([\s\S]*?)\}/, 
`.crc-pill {$1padding: 4px 10px;$2font-size: 11px;$3}`);

fs.writeFileSync('Mobile/css/styles.css', css);

console.log('Layout alignments and CSS sleeking applied.');
