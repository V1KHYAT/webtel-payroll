const fs = require('fs');

let html = fs.readFileSync('Mobile/index.html', 'utf8');

// Fix remaining buttons that have inline yellow/accent backgrounds
html = html.replace(
    /background:\s*var\(--color-accent\)\s*;/g,
    'background: #2563eb;'
);

// Remove all inline background overrides on btn-primary buttons that are already blue via CSS
// (The inline #2563eb ones are now redundant since CSS handles it, but they're harmless)

fs.writeFileSync('Mobile/index.html', html);
console.log('Fixed remaining accent-colored buttons');
