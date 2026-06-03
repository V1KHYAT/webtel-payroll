const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'Mobile', 'css', 'styles.css');
let css = fs.readFileSync(cssPath, 'utf8');

// 1. Fix custom-report-card to have borders and no shadow
css = css.replace(/\.custom-report-card\s*\{\s*box-shadow:\s*0\s*8px\s*30px\s*rgba\(0,\s*0,\s*0,\s*0\.04\);\s*border-radius:\s*20px;\s*border:\s*1px\s*solid\s*rgba\(0,0,0,0\.03\);\s*\}/, `.custom-report-card {
    border-radius: 20px;
    border: 1px solid rgba(9, 9, 11, 0.08);
    box-shadow: none;
}`);

// 2. Fix attendance-hero-card
css = css.replace(/\.attendance-hero-card\s*\{\s*padding:\s*24px;\s*border-radius:\s*24px;\s*border:\s*none;\s*box-shadow:\s*0\s*8px\s*30px\s*rgba\(0,0,0,0\.04\);\s*\}/, `.attendance-hero-card {
    padding: 24px;
    border-radius: 24px;
    border: 1px solid rgba(9, 9, 11, 0.08);
    box-shadow: none;
}`);

// 3. Fix home-content-container to use flex gap for equal spacing
css = css.replace(/\.home-content-container\s*\{\s*background:\s*linear-gradient\([^}]*\)[^}]*min-height:\s*calc\(100vh\s*-\s*150px\)[^}]*\}/, `.home-content-container {
    background: linear-gradient(180deg, #ffffff 0%, #f9fafb 100%) !important;
    box-shadow: 0 -8px 24px rgba(0,0,0,0.05) !important;
    padding: 24px 16px 280px 16px !important;
    border-radius: 28px 28px 0 0 !important;
    margin-top: 30vh !important;
    min-height: 100vh !important;
    display: flex;
    flex-direction: column;
    gap: 16px;
}`);

// 4. Add extra space below upcoming holidays card by making it the last child with extra margin
// If .holiday-card doesn't exist yet, append it.
if (!css.includes('.holiday-card { margin-bottom: 32px; }')) {
    css += `\n.holiday-card { margin-bottom: 32px; }\n`;
}

// 5. Fix button active state blue flash
css = css.replace(/\.btn-primary:active\s*\{\s*background-color:\s*#1e40af;\s*\}/, `.btn-primary:active { background-color: var(--color-accent) !important; filter: brightness(0.9); }`);

fs.writeFileSync(cssPath, css);
console.log("CSS updated safely.");
