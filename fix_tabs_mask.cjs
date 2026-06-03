const fs = require('fs');

let css = fs.readFileSync('Mobile/css/styles.css', 'utf8');

// I will replace my previous hotfix with a more robust one that adds a solid background behind the tabs
const oldHotfix = `/* FIX FOR TABS CONTAINERS UNDER ABSOLUTE HEADERS */
#attendance-screen .tabs-container,
#leave-screen .tabs-container {
    position: absolute !important;
    top: 110px !important;
    left: 16px !important;
    right: 16px !important;
    width: calc(100% - 32px) !important;
    margin: 0 !important;
    z-index: 45 !important;
}

#attendance-screen .scrollable-cards,
#leave-screen .scrollable-cards {
    padding-top: 180px !important;
}`;

const newHotfix = `/* FIX FOR TABS CONTAINERS UNDER ABSOLUTE HEADERS */
#attendance-screen .tabs-container,
#leave-screen .tabs-container {
    position: absolute !important;
    top: 104px !important;
    left: 16px !important;
    right: 16px !important;
    width: calc(100% - 32px) !important;
    margin: 0 !important;
    z-index: 45 !important;
}

/* Add a solid background block behind the floating pill tabs so text doesn't peek out */
#attendance-screen .tabs-container::before,
#leave-screen .tabs-container::before {
    content: '';
    position: absolute;
    top: -24px;
    left: -16px;
    right: -16px;
    bottom: -16px;
    background: #f9fafb; /* matches app background */
    z-index: -1;
}

/* Add a subtle gradient mask fading out below the tabs to make scrolling look beautiful */
#attendance-screen .tabs-container::after,
#leave-screen .tabs-container::after {
    content: '';
    position: absolute;
    bottom: -36px;
    left: -16px;
    right: -16px;
    height: 20px;
    background: linear-gradient(to bottom, #f9fafb, transparent);
    z-index: -1;
    pointer-events: none;
}

#attendance-screen .scrollable-cards,
#leave-screen .scrollable-cards {
    padding-top: 180px !important;
}`;

css = css.replace(oldHotfix, newHotfix);

// If the old hotfix wasn't found verbatim (e.g. padding-top 164 vs 180), just append it
if (css.indexOf('/* Add a solid background block') === -1) {
    css += '\\n' + newHotfix;
}

fs.writeFileSync('Mobile/css/styles.css', css);

let html = fs.readFileSync('Mobile/index.html', 'utf8');
html = html.replace(/v=27/g, 'v=28');
html = html.replace(/v=26/g, 'v=28');
fs.writeFileSync('Mobile/index.html', html);

console.log("Applied tab background masking!");
