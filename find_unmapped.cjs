const fs = require('fs');

const oldHtml = fs.readFileSync('old_index.html', 'utf8');
const iconMap = {
    'solar:hamburger-menu-linear': 'lucide:menu',
    'solar:hamburger-menu-bold': 'lucide:menu',
    'solar:bell-linear': 'lucide:bell',
    'solar:bell-bing-bold': 'lucide:bell-ring',
    'solar:tag-bold': 'lucide:tag',
    'solar:wi-fi-router-minimalistic-bold': 'lucide:wifi',
    'solar:battery-full-bold': 'lucide:battery-full',
    'solar:danger-triangle-bold': 'lucide:triangle-alert',
    'solar:alt-arrow-right-bold': 'lucide:chevron-right',
    'solar:alt-arrow-down-bold': 'lucide:chevron-down',
    'solar:alt-arrow-down-linear': 'lucide:chevron-down',
    'solar:alt-arrow-left-linear': 'lucide:chevron-left',
    'solar:confetti-minimalistic-bold': 'lucide:party-popper',
    'solar:medal-ribbons-star-bold': 'lucide:award',
    'solar:speaker-minimalistic-bold': 'lucide:megaphone',
    'solar:leaf-bold': 'lucide:leaf',
    'solar:gift-bold': 'lucide:gift',
    'solar:home-2-bold': 'lucide:home',
    'solar:document-text-bold': 'lucide:file-text',
    'solar:calendar-bold': 'lucide:calendar',
    'solar:calendar-bold-duotone': 'lucide:calendar',
    'solar:user-bold': 'lucide:user',
    'solar:settings-bold': 'lucide:settings',
    'solar:close-circle-bold': 'lucide:x-circle',
    'solar:widget-4-bold': 'lucide:layout-dashboard',
    'solar:scanner-bold': 'lucide:scan',
    'solar:bill-list-bold': 'lucide:receipt',
    'solar:chart-bold': 'lucide:bar-chart-2',
    'solar:users-group-rounded-bold': 'lucide:users',
    'solar:book-bookmark-bold': 'lucide:book-open',
    'solar:help-bold': 'lucide:help-circle',
    'solar:logout-2-bold': 'lucide:log-out',
    'solar:magnifer-linear': 'lucide:search',
    'solar:minimalistic-magnifer-bold': 'lucide:search',
    'solar:check-read-linear': 'lucide:check-circle',
    'solar:close-square-linear': 'lucide:x-square',
    'solar:map-point-bold': 'lucide:map-pin',
    'solar:clock-circle-bold': 'lucide:clock',
    'solar:sun-2-bold': 'lucide:sun',
    'solar:case-minimalistic-bold': 'lucide:briefcase',
    'solar:phone-calling-bold': 'lucide:phone',
    'solar:letter-bold': 'lucide:mail',
    'solar:pen-bold': 'lucide:pen'
};

const matches = oldHtml.match(/icon="solar:[^"]+"/g) || [];
const uniqueIcons = [...new Set(matches)];

const unmapped = uniqueIcons.filter(icon => {
    const name = icon.replace('icon="', '').replace('"', '');
    return !iconMap[name];
});

console.log('Unmapped Icons found:');
console.log(unmapped.join('\\n'));
