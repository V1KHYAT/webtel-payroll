const fs = require('fs');

let html = fs.readFileSync('Mobile/index.html', 'utf8');

const replacements = {
    'megaphone-bold': 'speaker-minimalistic-bold',
    'tree-bold': 'leaf-bold',
    'fingerprint-bold': 'scanner-bold',
    'bar-chart-2-bold': 'chart-bold',
    'receipt-bold': 'bill-list-bold',
    'users-bold': 'users-group-rounded-bold',
    'contact-bold': 'book-bookmark-bold',
    'help-circle-bold': 'help-bold',
    'log-out-bold': 'logout-2-bold',
    'alert-circle-bold': 'danger-circle-bold'
};

for (const [oldIcon, newIcon] of Object.entries(replacements)) {
    html = html.replace(new RegExp(oldIcon, 'g'), newIcon);
}

fs.writeFileSync('Mobile/index.html', html);
console.log('Fixed missing icons');
