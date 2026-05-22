const fs = require('fs');

let html = fs.readFileSync('Mobile/index.html', 'utf8');

html = html.replace(/<i data-lucide="lock" style="([^"]+)"><\/i>/g, '<iconify-icon icon="solar:lock-password-broken" style="$1"></iconify-icon>');
html = html.replace(/<i data-lucide="lock" class="([^"]+)"><\/i>/g, '<iconify-icon icon="solar:lock-password-broken" class="$1"></iconify-icon>');
html = html.replace(/<i data-lucide="chevron-down" class="([^"]+)"><\/i>/g, '<iconify-icon icon="solar:alt-arrow-down-broken" class="$1"></iconify-icon>');
html = html.replace(/<i data-lucide="eye-off" class="([^"]+)"><\/i>/g, '<iconify-icon icon="solar:eye-closed-broken" class="$1"></iconify-icon>');
html = html.replace(/<i data-lucide="map-pin" style="([^"]+)"><\/i>/g, '<iconify-icon icon="solar:map-point-broken" style="$1"></iconify-icon>');
html = html.replace(/lucide\.createIcons\(\);/g, '');

fs.writeFileSync('Mobile/index.html', html);

let js = fs.readFileSync('Mobile/js/app.js', 'utf8');
js = js.replace(/lucide\.createIcons\(\);/g, '');
fs.writeFileSync('Mobile/js/app.js', js);

console.log('Fixed remaining lucide icons');
