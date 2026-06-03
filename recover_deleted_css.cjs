const fs = require('fs');

let css = fs.readFileSync('Mobile/css/styles.css', 'utf8');

function appendIfMissing(snippet, identifier) {
    if (!css.includes(identifier)) {
        css += '\n' + snippet;
    }
}

// 1. apply_cards_redesign.cjs
try {
    const s1 = fs.readFileSync('apply_cards_redesign.cjs', 'utf8');
    const match1 = s1.match(/const newCSS = `([\s\S]*?)`;/);
    if(match1) appendIfMissing(match1[1], '.crc-header');
} catch(e) {}

// 2. apply_expandable_cards.cjs
try {
    const s2 = fs.readFileSync('apply_expandable_cards.cjs', 'utf8');
    const match2 = s2.match(/const newCSS = `([\s\S]*?)`;/);
    if(match2) appendIfMissing(match2[1], '.crc-expanded-content');
} catch(e) {}

// And let's make sure .home-content-container exists properly
if (!css.includes('margin-top: 30vh !important')) {
    css += `\n.home-content-container {
    background: linear-gradient(180deg, #ffffff 0%, #f9fafb 100%) !important;
    box-shadow: 0 -8px 24px rgba(0,0,0,0.05) !important;
    padding: 24px 16px 280px 16px !important;
    border-radius: 28px 28px 0 0 !important;
    margin-top: 30vh !important;
    min-height: 100vh !important;
    display: flex;
    flex-direction: column;
    gap: 16px;
}\n`;
}

// Ensure .attendance-hero-card is there
if (!css.includes('.attendance-hero-card')) {
    css += `\n.attendance-hero-card {
    padding: 24px;
    border-radius: 24px;
    border: 1px solid rgba(9, 9, 11, 0.08);
    box-shadow: none;
}\n`;
}

fs.writeFileSync('Mobile/css/styles.css', css);
console.log('Recovered CSS successfully. New length:', css.length);
