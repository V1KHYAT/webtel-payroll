const fs = require('fs');

let html = fs.readFileSync('Mobile/index.html', 'utf8');

// ============================================================
// FIX 1: Replace wrong chevron-down icons inside crc-icon-box
// These are card header icons that should be contextual
// ============================================================

// The pattern is: crc-icon-box yellow"> followed by chevron-down icon
// We need to look at the context (card title) to assign proper icons

// Map: we'll find each crc-icon-box with chevron-down and replace based on nearby title
const iconReplacements = [
    // Visit Expense / Expense screens
    { title: 'Expense Details', icon: 'lucide:file-text' },
    { title: 'Receipt / Bill', icon: 'lucide:receipt' },
    { title: 'Remarks / Purpose', icon: 'lucide:message-square' },
    // OD Tour screens 
    { title: 'Tour Details', icon: 'lucide:map-pin' },
    { title: 'Tour Itinerary', icon: 'lucide:route' },
    { title: 'Tour Summary', icon: 'lucide:clipboard-list' },
];

// Fix crc-icon-box icons that use chevron-down
// Strategy: find each crc-icon-box block with chevron-down and replace with contextual icon
// We'll use a regex approach

// First, fix the ones inside crc-icon-box (card header icons, NOT accordion expand chevrons)
// Pattern: <div class="crc-icon-box yellow">\n  <iconify-icon icon="lucide:chevron-down">
html = html.replace(
    /(<div class="crc-icon-box yellow">)\s*<iconify-icon icon="lucide:chevron-down"><\/iconify-icon>([\s\S]*?<div class="crc-title"[^>]*>)(Expense Details)/g,
    '$1<iconify-icon icon="lucide:file-text"></iconify-icon>$2$3'
);

html = html.replace(
    /(<div class="crc-icon-box yellow">)\s*<iconify-icon icon="lucide:chevron-down"><\/iconify-icon>([\s\S]*?<div class="crc-title"[^>]*>)(Receipt \/ Bill)/g,
    '$1<iconify-icon icon="lucide:receipt"></iconify-icon>$2$3'
);

html = html.replace(
    /(<div class="crc-icon-box yellow">)\s*<iconify-icon icon="lucide:chevron-down"><\/iconify-icon>([\s\S]*?<div class="crc-title"[^>]*>)(Remarks \/ Purpose)/g,
    '$1<iconify-icon icon="lucide:message-square"></iconify-icon>$2$3'
);

html = html.replace(
    /(<div class="crc-icon-box yellow">)\s*<iconify-icon icon="lucide:chevron-down"><\/iconify-icon>([\s\S]*?<div class="crc-title"[^>]*>)(Tour Details)/g,
    '$1<iconify-icon icon="lucide:map-pin"></iconify-icon>$2$3'
);

html = html.replace(
    /(<div class="crc-icon-box yellow">)\s*<iconify-icon icon="lucide:chevron-down"><\/iconify-icon>([\s\S]*?<div class="crc-title"[^>]*>)(Tour Itinerary)/g,
    '$1<iconify-icon icon="lucide:route"></iconify-icon>$2$3'
);

html = html.replace(
    /(<div class="crc-icon-box yellow">)\s*<iconify-icon icon="lucide:chevron-down"><\/iconify-icon>([\s\S]*?<div class="crc-title"[^>]*>)(Tour Summary)/g,
    '$1<iconify-icon icon="lucide:clipboard-list"></iconify-icon>$2$3'
);

// Fix the upload area icon (standalone, not in crc-icon-box)
// The upload area has a chevron-down that should be an upload icon
html = html.replace(
    /(<div style="width: 48px; height: 48px;[^"]*">\s*)<iconify-icon icon="lucide:chevron-down"><\/iconify-icon>/g,
    '$1<iconify-icon icon="lucide:upload"></iconify-icon>'
);

// ============================================================
// FIX 2: Fix button colors
// All btn-primary + submit buttons should be blue (#2563eb), not yellow/amber
// ============================================================

// Fix inline amber/yellow submit buttons
html = html.replace(
    /background:\s*#f59e0b\s*;/g,
    'background: #2563eb;'
);

html = html.replace(
    /background:\s*#ffc107\s*;/g, 
    'background: #2563eb;'
);

// Any remaining crc-icon-box with chevron-down that we didn't catch by title
// Replace remaining ones generically with a document icon
let remaining = 0;
html = html.replace(
    /(<div class="crc-icon-box yellow">)\s*<iconify-icon icon="lucide:chevron-down"><\/iconify-icon>/g,
    (match, prefix) => {
        remaining++;
        return prefix + '<iconify-icon icon="lucide:file-text"></iconify-icon>';
    }
);
console.log(`Fixed ${remaining} remaining crc-icon-box chevron-down icons`);

fs.writeFileSync('Mobile/index.html', html);
console.log('All icons and button colors fixed!');
