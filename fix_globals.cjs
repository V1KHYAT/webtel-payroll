const fs = require('fs');

let html = fs.readFileSync('Mobile/index.html', 'utf8');

// Function to restructure a base-header
function restructureHeader(html, headerIdRegex) {
    // This is complex to do with simple regex if they are all different.
    // Let's do them one by one.
    return html;
}

// Actually, let's manually write multi_replace chunks or script it carefully.
// It's safer to use a script with specific replacements.

const pages = [
    // 1. Profile
    {
        from: /<header class="base-header">\\s*<div class="header-left">\\s*<button class="ghost-btn profile-ghost-btn" onclick="toggleSidebar\(\)">\\s*<iconify-icon icon="lucide:menu"><\/iconify-icon>\\s*<\/button>\\s*<div class="user-greeting">\\s*<h1>Profile<\/h1>\\s*<span>Your details<\/span>\\s*<\/div>\\s*<\/div>\\s*<button class="ghost-btn profile-ghost-btn" onclick="openBottomSheet\('notifications-sheet'\)">\\s*<iconify-icon icon="lucide:bell-ring"><\/iconify-icon>\\s*<span class="notification-dot"><\/span>\\s*<\/button>\\s*<\/header>/g,
        to: \`<header class="base-header">
                            <div class="header-top-row">
                                <div class="header-left">
                                    <button class="ghost-btn circular-btn profile-ghost-btn" onclick="toggleSidebar()">
                                        <iconify-icon icon="lucide:menu"></iconify-icon>
                                    </button>
                                    <div class="user-greeting">
                                        <h1>Profile</h1>
                                        <span>Your details</span>
                                    </div>
                                </div>
                                <button class="ghost-btn circular-btn profile-ghost-btn" onclick="openBottomSheet('notifications-sheet')">
                                    <iconify-icon icon="lucide:bell-ring"></iconify-icon>
                                    <span class="notification-dot"></span>
                                </button>
                            </div>
                            <div class="header-toast-msg-inline"></div>
                        </header>\`
    },
    // 2. Team
    {
        from: /<header class="base-header">\\s*<div class="header-left">\\s*<button class="ghost-btn" onclick="toggleSidebar\(\)">\\s*<iconify-icon icon="lucide:menu"><\/iconify-icon>\\s*<\/button>\\s*<div class="user-greeting">\\s*<h1>My Team<\/h1>\\s*<span>3 Direct Reports<\/span>\\s*<\/div>\\s*<\/div>\\s*<button class="ghost-btn" onclick="openBottomSheet\('notifications-sheet'\)">\\s*<iconify-icon icon="lucide:bell-ring"><\/iconify-icon>\\s*<span class="notification-dot"><\/span>\\s*<\/button>\\s*<\/header>/g,
        to: \`<header class="base-header">
                            <div class="header-top-row">
                                <div class="header-left">
                                    <button class="ghost-btn circular-btn" onclick="toggleSidebar()">
                                        <iconify-icon icon="lucide:menu"></iconify-icon>
                                    </button>
                                    <div class="user-greeting">
                                        <h1>My Team</h1>
                                        <span>3 Direct Reports</span>
                                    </div>
                                </div>
                                <button class="ghost-btn circular-btn" onclick="openBottomSheet('notifications-sheet')">
                                    <iconify-icon icon="lucide:bell-ring"></iconify-icon>
                                    <span class="notification-dot"></span>
                                </button>
                            </div>
                            <div class="header-toast-msg-inline"></div>
                        </header>\`
    },
    // 3. Directory
    {
        from: /<header class="base-header">\\s*<div class="header-left">\\s*<button class="ghost-btn" onclick="toggleSidebar\(\)">\\s*<iconify-icon icon="lucide:menu"><\/iconify-icon>\\s*<\/button>\\s*<div class="user-greeting">\\s*<h1>Directory<\/h1>\\s*<span>Company Contacts<\/span>\\s*<\/div>\\s*<\/div>\\s*<button class="ghost-btn" onclick="openBottomSheet\('notifications-sheet'\)">\\s*<iconify-icon icon="lucide:bell-ring"><\/iconify-icon>\\s*<span class="notification-dot"><\/span>\\s*<\/button>\\s*<\/header>/g,
        to: \`<header class="base-header">
                            <div class="header-top-row">
                                <div class="header-left">
                                    <button class="ghost-btn circular-btn" onclick="toggleSidebar()">
                                        <iconify-icon icon="lucide:menu"></iconify-icon>
                                    </button>
                                    <div class="user-greeting">
                                        <h1>Directory</h1>
                                        <span>Company Contacts</span>
                                    </div>
                                </div>
                                <button class="ghost-btn circular-btn" onclick="openBottomSheet('notifications-sheet')">
                                    <iconify-icon icon="lucide:bell-ring"></iconify-icon>
                                    <span class="notification-dot"></span>
                                </button>
                            </div>
                            <div class="header-toast-msg-inline"></div>
                        </header>\`
    },
    // 4. Leave
    {
        from: /<header class="base-header">\\s*<div class="header-left">\\s*<button class="ghost-btn" onclick="toggleSidebar\(\)">\\s*<iconify-icon icon="lucide:menu"><\/iconify-icon>\\s*<\/button>\\s*<div class="user-greeting">\\s*<h1>Leave Application<\/h1>\\s*<span>Manage your time off<\/span>\\s*<\/div>\\s*<\/div>\\s*<button class="ghost-btn" onclick="openBottomSheet\('notifications-sheet'\)">\\s*<iconify-icon icon="lucide:bell-ring"><\/iconify-icon>\\s*<span class="notification-dot"><\/span>\\s*<\/button>\\s*<\/header>/g,
        to: \`<header class="base-header">
                            <div class="header-top-row">
                                <div class="header-left">
                                    <button class="ghost-btn circular-btn" onclick="toggleSidebar()">
                                        <iconify-icon icon="lucide:menu"></iconify-icon>
                                    </button>
                                    <div class="user-greeting">
                                        <h1>Leave Application</h1>
                                        <span>Manage your time off</span>
                                    </div>
                                </div>
                                <button class="ghost-btn circular-btn" onclick="openBottomSheet('notifications-sheet')">
                                    <iconify-icon icon="lucide:bell-ring"></iconify-icon>
                                    <span class="notification-dot"></span>
                                </button>
                            </div>
                            <div class="header-toast-msg-inline"></div>
                        </header>\`
    },
    // 5. Payroll
    {
        from: /<header class="base-header">\\s*<div class="header-left">\\s*<button class="ghost-btn" onclick="toggleSidebar\(\)">\\s*<iconify-icon icon="lucide:menu"><\/iconify-icon>\\s*<\/button>\\s*<div class="user-greeting">\\s*<h1>Payroll<\/h1>\\s*<span>Salary & Payslips<\/span>\\s*<\/div>\\s*<\/div>\\s*<button class="ghost-btn" onclick="openBottomSheet\('notifications-sheet'\)">\\s*<iconify-icon icon="lucide:bell-ring"><\/iconify-icon>\\s*<span class="notification-dot"><\/span>\\s*<\/button>\\s*<\/header>/g,
        to: \`<header class="base-header">
                            <div class="header-top-row">
                                <div class="header-left">
                                    <button class="ghost-btn circular-btn" onclick="toggleSidebar()">
                                        <iconify-icon icon="lucide:menu"></iconify-icon>
                                    </button>
                                    <div class="user-greeting">
                                        <h1>Payroll</h1>
                                        <span>Salary & Payslips</span>
                                    </div>
                                </div>
                                <button class="ghost-btn circular-btn" onclick="openBottomSheet('notifications-sheet')">
                                    <iconify-icon icon="lucide:bell-ring"></iconify-icon>
                                    <span class="notification-dot"></span>
                                </button>
                            </div>
                            <div class="header-toast-msg-inline"></div>
                        </header>\`
    }
];

pages.forEach(p => {
    html = html.replace(p.from, p.to);
});

// Update the home header id for the toast msg container so we can use classes generally
html = html.replace(/id="header-toast-msg-inline"/g, ''); // just rely on class

fs.writeFileSync('Mobile/index.html', html);
console.log('HTML globally updated with headers.');

// --- CSS UPDATES ---
let css = fs.readFileSync('Mobile/css/styles.css', 'utf8');

// Fix toast inline msg causing pill expansion when closed
css = css.replace(
    /\\.header-toast-msg-inline {\\s*width: 100%;/g,
    '.header-toast-msg-inline {\\n    width: 100%;\\n    overflow: hidden; /* Prevent text spilling out and expanding height */'
);

// Apply base-header column layout globally
css = css.replace(
    /#home-base-header {\\s*transition: all 0\.3s cubic-bezier\(0\.4, 0, 0\.2, 1\);\\s*overflow: hidden;\\s*flex-direction: column;\\s*}/g,
    '.base-header {\\n    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\\n    overflow: hidden;\\n    flex-direction: column;\\n}'
);

// Fix .header-top-row to ensure it stretches
if (!css.includes('.header-top-row {\\n    display: flex;')) {
    css = css.replace(
        /\\.header-top-row {\\s*transition: margin 0\.3s ease;\\s*}/g,
        '.header-top-row {\\n    transition: margin 0.3s ease;\\n    display: flex;\\n    width: 100%;\\n    justify-content: space-between;\\n    align-items: center;\\n}'
    );
}

// Fix circular-btn icon colors globally (they said "icon color need not to be yellow now")
// Remove the specific yellow color so it falls back to #1e293b (which we set earlier)
css = css.replace(
    /\\.base-header \\.circular-btn iconify-icon {\\s*color: var\\(--color-accent\\) !important;\\s*}/g,
    '.base-header .circular-btn iconify-icon { color: #1e293b !important; }'
);
// Make sure .circular-btn background is the light yellow circle
if (!css.includes('background: #fef9c3 !important;')) {
    css = css.replace(
        /\\.circular-btn {\\s*background: var\\(--color-accent\\) !important;/g,
        '.circular-btn {\\n    background: #fef9c3 !important;'
    );
}

// Fix home-content-container margin
css = css.replace(
    /margin-top: 15vh !important;/g,
    'margin-top: 40vh !important;'
);

fs.writeFileSync('Mobile/css/styles.css', css);
console.log('CSS globally updated.');

// --- JS UPDATES ---
let js = fs.readFileSync('Mobile/js/app.js', 'utf8');

// Fix triggerPunchInToast to find the ACTIVE screen's header
const oldToastFn = /function triggerPunchInToast\(\) \{[\s\S]*?\}, 4000\);\s*\}/g;
const newToastFn = \`function triggerPunchInToast() {
    // Find the currently visible screen
    const activeScreen = document.querySelector('.screen[style*="display: block"]') || document.getElementById('home-screen');
    const header = activeScreen.querySelector('.base-header');
    if (!header) return;
    
    // Add glow and expand header
    header.classList.add('header-glow');
    header.classList.add('toast-expanded');
    
    const toast = header.querySelector('.header-toast-msg-inline');
    if (toast) {
        toast.innerHTML = '<iconify-icon icon="lucide:clock"></iconify-icon> Time to punch in!';
    }
    
    // Hide after 4 seconds
    setTimeout(() => {
        header.classList.remove('toast-expanded');
        header.classList.remove('header-glow');
    }, 4000);
}\`;
js = js.replace(oldToastFn, newToastFn);

// Revert image dissolve to just instant change
const oldKeydown = /document\.addEventListener\('keydown', function\(event\) \{[\s\S]*?\}\);/g;
const newKeydown = \`document.addEventListener('keydown', function(event) {
    const bgElement = document.querySelector('.home-hero-bg');
    if (!bgElement) return;

    if (event.key === '1') {
        bgElement.style.backgroundImage = "url('images/home1.png')";
    } else if (event.key === '2') {
        bgElement.style.backgroundImage = "url('images/home2.png')";
    } else if (event.key === '3') {
        bgElement.style.backgroundImage = "url('images/home3.png')";
    } else if (event.key === '4') {
        triggerPunchInToast();
    }
});\`;
js = js.replace(oldKeydown, newKeydown);

fs.writeFileSync('Mobile/js/app.js', js);
console.log('JS globally updated.');
