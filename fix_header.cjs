const fs = require('fs');

let css = fs.readFileSync('Mobile/css/styles.css', 'utf8');

// 1. Unify fixed headers to be transparent wrappers
css = css.replace(/\.fixed-base \{[^}]+\}/, `.fixed-base {
    flex-shrink: 0;
    background: transparent;
    padding: 12px 16px 0 16px;
    display: flex; flex-direction: column;
    position: relative; z-index: 10;
}`);

css = css.replace(/\.profile-fixed-header \{[^}]+\}/, `.profile-fixed-header {
    flex-shrink: 0;
    background: transparent;
    padding: 12px 16px 0 16px;
    display: flex; flex-direction: column;
    position: relative; z-index: 10;
    border-bottom: none;
}`);

// 2. Make base-header a sleek pill
// It was: .base-header { display: flex; justify-content: space-between; align-items: center; gap: 12px; }
// Then: .base-header { min-height: 44px; }
css = css.replace(/\.base-header \{\s*display:\s*flex;\s*justify-content:\s*space-between;\s*align-items:\s*center;\s*gap:\s*12px;\s*\}/, 
`.base-header { 
    display: flex; justify-content: space-between; align-items: center; gap: 12px;
    background: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
    border: 1px solid var(--color-border);
    border-radius: 100px;
    padding: 6px 12px 6px 6px;
    box-shadow: 0 4px 16px rgba(234, 179, 8, 0.08);
}`);

// The button has a 36x36 size, so padding 6px makes the header 48px + borders.
// We remove the min-height: 44px
css = css.replace(/\.base-header \{\s*min-height:\s*44px;\s*\}/, '');

fs.writeFileSync('Mobile/css/styles.css', css);

// 3. Update index.html
let html = fs.readFileSync('Mobile/index.html', 'utf8');

// Add base-header class to profile header
html = html.replace(/<div style="display:flex; justify-content:space-between; align-items:center;">/g, '<div class="base-header">');

// Also update the profile page title to be centered better or fit the pill
// Actually, it'll center naturally if it has margin: 0 auto; or if space-between handles it.
html = html.replace(/<div class="profile-page-title">Profile<\/div>/, '<div class="profile-page-title" style="flex: 1; text-align: center;">Profile</div>');

fs.writeFileSync('Mobile/index.html', html);
console.log('Fixed header styles');
