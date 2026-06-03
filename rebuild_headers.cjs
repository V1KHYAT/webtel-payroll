const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'Mobile', 'index.html');
let html = fs.readFileSync(filePath, 'utf8');

// Regex to match the entire header wrapper block:
// <div class="fixed-base"...> ... </header> \n </div>
const headerWrapperRegex = /<div class="(?:fixed-base|profile-fixed-header)"[^>]*>[\s\S]*?<\/header>\s*<\/div>/g;

html = html.replace(headerWrapperRegex, (match) => {
    // Extract title
    let titleMatch = match.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
    let title = titleMatch ? titleMatch[1].trim() : '';

    // Extract subtitle
    let spanMatch = match.match(/<span[^>]*>([\s\S]*?)<\/span>/);
    if (spanMatch && spanMatch[0].includes('notification-dot')) {
        let allSpans = [...match.matchAll(/<span[^>]*>([\s\S]*?)<\/span>/g)];
        let subtitleSpan = allSpans.find(s => !s[0].includes('notification-dot'));
        spanMatch = subtitleSpan;
    }
    let subtitle = spanMatch ? spanMatch[1].trim() : '';

    if (!title && match.includes('Good Evening')) {
        title = 'Good Evening';
        subtitle = 'Vijay Pal';
    }
    
    // Check if it's the home page wrapper, which needs position: absolute
    const isHome = match.includes('id="home-fixed-header"');
    const wrapperClass = isHome ? 'app-header-wrapper home-header-wrapper' : 'app-header-wrapper';
    
    return `<div class="${wrapperClass}">
                        <header class="app-header-pill">
                            <div class="app-header-content">
                                <button class="app-header-btn" onclick="toggleSidebar()">
                                    <iconify-icon icon="lucide:menu"></iconify-icon>
                                </button>
                                <div class="app-header-greeting">
                                    <h1>${title}</h1>
                                    <span>${subtitle}</span>
                                </div>
                                <button class="app-header-btn" onclick="openBottomSheet('notifications-sheet')">
                                    <iconify-icon icon="lucide:bell"></iconify-icon>
                                    <span class="app-header-dot"></span>
                                </button>
                            </div>
                            <div class="app-header-toast" aria-hidden="true">
                                <iconify-icon icon="lucide:clock"></iconify-icon>
                                <span>Time to punch in!</span>
                            </div>
                        </header>
                    </div>`;
});

fs.writeFileSync(filePath, html);
console.log('Successfully rebuilt all headers from scratch.');
