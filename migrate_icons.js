const fs = require('fs');

let html = fs.readFileSync('Mobile/index.html', 'utf8');

const iconMap = {
    'arrow-left': 'alt-arrow-left-linear',
    'signal': 'tag-linear', // fallback, solar doesn't have exact signal bars usually
    'wifi': 'wi-fi-router-minimalistic-linear',
    'battery-full': 'battery-full-linear',
    'menu': 'hamburger-menu-linear',
    'bell': 'bell-bing-linear',
    'sun': 'sun-2-linear',
    'alert-triangle': 'danger-triangle-linear',
    'chevron-right': 'alt-arrow-right-linear',
    'party-popper': 'confetti-minimalistic-linear',
    'medal': 'medal-ribbons-star-linear',
    'megaphone': 'megaphone-linear',
    'palmtree': 'tree-linear',
    'gift': 'gift-linear',
    'layout-dashboard': 'widget-4-linear',
    'check-circle': 'check-circle-linear',
    'coffee': 'cup-hot-linear',
    'calendar-days': 'calendar-linear',
    'chevron-down': 'alt-arrow-down-linear',
    'user-round': 'user-rounded-linear',
    'briefcase': 'case-minimalistic-linear',
    'phone': 'phone-rounded-linear',
    'calendar': 'calendar-linear',
    'mail': 'letter-linear',
    'droplet': 'drop-linear',
    'calendar-check': 'calendar-add-linear',
    'building-2': 'buildings-linear',
    'map-pin': 'map-point-linear',
    'user-check': 'user-check-rounded-linear',
    'indian-rupee': 'wallet-money-linear',
    'landmark': 'banknote-linear',
    'home': 'home-smile-linear',
    'lock': 'lock-password-linear',
    'file-text': 'document-text-linear',
    'bar-chart-3': 'chart-square-linear',
    'download': 'import-linear',
    'x': 'close-circle-linear',
    'map': 'map-linear',
    'fingerprint': 'fingerprint-linear'
};

html = html.replace(/<i data-lucide="([^"]+)"><\/i>/g, (match, iconName) => {
    const solarIcon = iconMap[iconName] || `${iconName}-linear`;
    return `<iconify-icon icon="solar:${solarIcon}"></iconify-icon>`;
});

fs.writeFileSync('Mobile/index.html', html);
console.log('Replaced icons in index.html');
