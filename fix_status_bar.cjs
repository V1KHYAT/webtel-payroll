const fs = require('fs');
let html = fs.readFileSync('Mobile/index.html', 'utf8');

// Replace the status bar inside home-fixed-header
html = html.replace(
    '<div class="home-fixed-header" id="home-fixed-header">\\n                        <div class="status-bar-dummy" aria-hidden="true" style="padding-top: env(safe-area-inset-top, 14px);">\\n                            <span class="status-time">9:41</span>\\n                            <div class="status-icons">\\n                                <iconify-icon icon="lucide:tag"></iconify-icon>\\n                                <iconify-icon icon="lucide:wifi"></iconify-icon>\\n                                <iconify-icon icon="lucide:battery-full"></iconify-icon>\\n                            </div>\\n                        </div>',
    '<div class="status-bar-dummy" aria-hidden="true" style="color: #1e293b; padding-top: max(env(safe-area-inset-top), 14px);">\\n                        <span class="status-time">9:41</span>\\n                        <div class="status-icons">\\n                            <iconify-icon icon="lucide:tag"></iconify-icon>\\n                            <iconify-icon icon="lucide:wifi"></iconify-icon>\\n                            <iconify-icon icon="lucide:battery-full"></iconify-icon>\\n                        </div>\\n                    </div>\\n                    <div class="home-fixed-header" id="home-fixed-header">'
);

fs.writeFileSync('Mobile/index.html', html);
console.log('Fixed status bar HTML');
