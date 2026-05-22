const fs = require('fs');

// --- 1. Modify HTML for "Days" ---
let html = fs.readFileSync('Mobile/index.html', 'utf8');

html = html.replace(/<div class="balance-readout">66\.0<\/div>/,
    '<div class="balance-readout">66.0 <span style="font-size: 0.4em; font-weight: 500; color: var(--color-text-secondary); text-transform: uppercase; letter-spacing: 0.05em; margin-left: 2px;">Days</span></div>');

fs.writeFileSync('Mobile/index.html', html);


// --- 2. Modify CSS for Attendance Widget Alignment ---
let css = fs.readFileSync('Mobile/css/styles.css', 'utf8');

// Attendance summary flex -> grid, align items end for strong horizontal tension
css = css.replace(/\.attendance-summary \{\s*width:\s*100%;\s*display:\s*flex;\s*align-items:\s*stretch;\s*gap:\s*var\(--space-3\);\s*margin-bottom:\s*var\(--space-4\);\s*\}/,
`.attendance-summary {
    width: 100%;
    display: flex;
    align-items: flex-end; /* Align bottom baselines */
    justify-content: space-between;
    margin-bottom: var(--space-5);
    padding-bottom: 12px;
    border-bottom: 1px solid var(--color-border);
}`);

css = css.replace(/\.attendance-clock \{\s*flex:\s*0 0 46%;\s*display:\s*flex;\s*flex-direction:\s*column;\s*align-items:\s*flex-start;\s*justify-content:\s*center;\s*text-align:\s*left;\s*\}/,
`.attendance-clock {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
}`);

// Make punch-details purely typographic, locking it to the baseline/cap-height of the time display
css = css.replace(/\.punch-details \{\s*flex:\s*1;\s*display:\s*flex;\s*flex-direction:\s*column;\s*justify-content:\s*center;\s*background:\s*[^;]+;\s*\/\* Inset well rule 4% tint \*\/\s*border:\s*[^;]+;\s*\/\* Inset well boundary \*\/\s*border-radius:\s*var\(--radius-md\);\s*\/\* 12px \*\/\s*padding:\s*16px 12px;\s*\/\* Optical center padding: vertical \+4px \*\/\s*gap:\s*8px;\s*\/\* Uniform 8px spatial rhythm \*\/\s*text-align:\s*left;\s*\}/,
`.punch-details {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 4px;
    text-align: right; /* Right align against the edge */
    padding-bottom: 4px; /* Optical baseline match with --:-- */
}`);

css = css.replace(/\.punch-line \{\s*display:\s*flex;\s*justify-content:\s*space-between;\s*align-items:\s*center;\s*gap:\s*12px;\s*\}/g,
`.punch-line { display: flex; justify-content: flex-end; align-items: baseline; gap: 8px; }`);

fs.writeFileSync('Mobile/css/styles.css', css);
console.log('Modified typography and alignment');
