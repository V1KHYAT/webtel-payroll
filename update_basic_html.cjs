const fs = require('fs');
let html = fs.readFileSync('Mobile/index.html', 'utf8');

// 1. Sidebar Toggle Input
html = html.replace(
    '<input type="checkbox" id="advanced-features-toggle">',
    '<input type="checkbox" id="user-account-toggle" onchange="switchUserAccount(this.checked)">'
);

// 2. Home Greeting
const oldHomeGreeting = `<div class="app-header-greeting">
                                    <h1>Good Evening</h1>
                                    <span>Vijay Pal</span>
                                </div>`;
const newHomeGreeting = `<div class="app-header-greeting">
                                    <h1>Good Evening</h1>
                                    <span data-user="1">Vijay Pal</span>
                                    <span data-user="2" style="display:none;">Umesh Chandra Rav</span>
                                </div>`;
html = html.replace(oldHomeGreeting, newHomeGreeting);

// 3. Sidebar Avatar & Info
const oldSidebarAvatar = `<div class="sidebar-avatar">VP</div>
                        <div class="sidebar-user-info">
                            <div class="user-name">Vijay Pal</div>
                            <div class="user-domain">demo.webtel.in</div>
                        </div>`;
const newSidebarAvatar = `<div class="sidebar-avatar" data-user="1">VP</div>
                        <div class="sidebar-avatar" data-user="2" style="display:none; background: #e0e7ff; color: #4338ca;">UC</div>
                        <div class="sidebar-user-info">
                            <div class="user-name" data-user="1">Vijay Pal</div>
                            <div class="user-domain" data-user="1">demo.webtel.in</div>
                            <div class="user-name" data-user="2" style="display:none;">Umesh Chandra Rav</div>
                            <div class="user-domain" data-user="2" style="display:none;">demo.webtel.in</div>
                        </div>`;
html = html.replace(oldSidebarAvatar, newSidebarAvatar);

fs.writeFileSync('Mobile/index.html', html);
console.log("Basic HTML updates done");
