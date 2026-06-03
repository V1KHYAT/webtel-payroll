const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'Mobile', 'css', 'styles.css');
let css = fs.readFileSync(cssPath, 'utf8');

// 1. Fix custom-report-card to have borders and no shadow
css = css.replace(/\.custom-report-card\s*\{[^}]*\}/, `.custom-report-card {
    border-radius: 20px;
    border: 1px solid rgba(9, 9, 11, 0.08);
    box-shadow: none;
}`);

// 2. Add extra space below Upcoming Holidays (last card in container)
css = css.replace(/\.home-content-container\s*\{[^}]*\}/, `.home-content-container {
    padding: 0 16px 48px 16px; /* Increased bottom padding */
    display: flex;
    flex-direction: column;
    gap: 16px;
    background: transparent !important;
    box-shadow: none !important;
}`);

// 3. Fix button active state blue flash
css = css.replace(/\.btn-primary:active\s*\{\s*background-color:\s*#1e40af;\s*\}/, `.btn-primary:active { background-color: var(--color-accent); filter: brightness(0.9); }`);

fs.writeFileSync(cssPath, css);
console.log("CSS updated.");

// Now HTML changes
const htmlPath = path.join(__dirname, 'Mobile', 'index.html');
let html = fs.readFileSync(htmlPath, 'utf8');

// 4. Equal spacing: remove inline margin-bottom: 16px from Leave Balance data-card
html = html.replace(/<div class="data-card" style="margin-bottom: 16px;">/g, '<div class="data-card">');

// 5. Icons for Upcoming Holidays
// Find Diwali
html = html.replace(/<div class="feed-title"[^>]*>Diwali<\/div>[\s\S]*?<div class="feed-sub"[^>]*>Wed, 11 Nov<\/div>/, (match) => {
    return match; // First just check, but we need to replace the icon *above* it
});

// Since Diwali and Christmas icons are generic calendar-days, let's just do a specific replace
// First holiday icon (Diwali)
html = html.replace(/<div class="feed-icon warning-bg" style="color: #3b82f6 !important; background: #eff6ff !important;"><iconify-icon icon="lucide:calendar-days"><\/iconify-icon><\/div>\s*<div class="feed-content" style="flex:1;">\s*<div class="feed-title" style="font-weight: 600; color: #1e293b;">Diwali<\/div>/, `<div class="feed-icon warning-bg" style="color: #eab308 !important; background: #fef9c3 !important;"><iconify-icon icon="lucide:sparkles"></iconify-icon></div>
                                        <div class="feed-content" style="flex:1;">
                                            <div class="feed-title" style="font-weight: 600; color: #1e293b;">Diwali</div>`);

// Second holiday icon (Christmas)
html = html.replace(/<div class="feed-icon warning-bg" style="color: #ef4444 !important; background: #fef2f2 !important;"><iconify-icon icon="lucide:calendar-days"><\/iconify-icon><\/div>\s*<div class="feed-content" style="flex:1;">\s*<div class="feed-title" style="font-weight: 600; color: #1e293b;">Christmas<\/div>/, `<div class="feed-icon warning-bg" style="color: #10b981 !important; background: #d1fae5 !important;"><iconify-icon icon="lucide:tree-pine"></iconify-icon></div>
                                        <div class="feed-content" style="flex:1;">
                                            <div class="feed-title" style="font-weight: 600; color: #1e293b;">Christmas</div>`);

fs.writeFileSync(htmlPath, html);
console.log("HTML updated.");
