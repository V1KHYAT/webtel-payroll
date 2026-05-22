const fs = require('fs');

let css = fs.readFileSync('Mobile/css/styles.css', 'utf8');

// 1. Update background to #FAFAFA and ensure strict borders instead of shadows
css = css.replace(/--color-bg:\s*#E2E5EB;/, '--color-bg: #FAFAFA; /* Crisp off-white */');
css = css.replace(/--color-bg:\s*#fefce8;\s*\/\* Yellow 50 \*\//, '--color-bg: #FAFAFA; /* Crisp off-white */'); // Just in case

// Remove gradients from app-layout to ensure pure #FAFAFA background
css = css.replace(/\.app-layout \{\s*display:\s*flex;\s*flex-direction:\s*column;\s*height:\s*100%;\s*position:\s*relative;\s*background:\s*linear-gradient\(180deg, #fef4cc 0%, #ffffff 40%\);\s*\}/, 
    '.app-layout { display: flex; flex-direction: column; height: 100%; position: relative; background: var(--color-bg); }');

// 2. Remove all box-shadows globally, ensuring 1px borders
css = css.replace(/box-shadow:[^;]+;/g, '');

// 3. Tighten geometry (reduce radii)
css = css.replace(/--radius-lg:\s*16px;/g, '--radius-lg: 12px;');
css = css.replace(/--radius-xl:\s*24px;/g, '--radius-xl: 16px;');
css = css.replace(/--radius-2xl:\s*32px;/g, '--radius-2xl: 20px;');

// Ensure cards use strict 1px border instead of relying on shadow
// The .data-card already has border: 1px solid var(--color-border); 
// Let's make sure --color-border is crisp. Currently it's yellow 200, let's revert it to #e4e4e7 (Zinc-200) for high contrast off-white.
css = css.replace(/--color-border:\s*#fef08a;\s*\/\* Yellow 200 Border \*\//g, '--color-border: #e4e4e7;');

// 4. Color intentionality: Use yellow only for primary actions.
// The .btn-primary is already yellow. Ensure its text is dark high-contrast.
css = css.replace(/\.btn-primary \{\s*background:\s*var\(--color-accent\);\s*color:\s*#fff;/g, 
    '.btn-primary { background: var(--color-accent); color: #09090b;');

// Revert .ctc-hero-card and .prof-hero-card away from light yellow gradients to pure white with border.
css = css.replace(/\.ctc-hero-card \{\s*position:\s*relative;\s*overflow:\s*hidden;\s*padding:\s*20px 18px;\s*border-radius:\s*16px;\s*background:\s*linear-gradient\(135deg, #fffbeb 0%, #fef4cc 100%\);\s*border:\s*1px solid #fde047;/g,
    '.ctc-hero-card { position: relative; overflow: hidden; padding: 20px 18px; border-radius: 12px; background: #ffffff; border: 1px solid var(--color-border);');

css = css.replace(/background:\s*linear-gradient\(135deg, #fffbeb 0%, #fef4cc 100%\);\s*border:\s*1px solid #fde047;/g,
    'background: #ffffff; border: 1px solid var(--color-border);');

// 5. Refine Typography tracking on time display
css = css.replace(/\.time-readout \{\s*font-size:\s*48px;\s*font-weight:\s*800;/g, 
    '.time-readout { font-size: 48px; font-weight: 800; letter-spacing: -0.04em;');

fs.writeFileSync('Mobile/css/styles.css', css);
console.log('Applied global design system updates');
