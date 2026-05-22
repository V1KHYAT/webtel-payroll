const fs = require('fs');
const https = require('https');

let html = fs.readFileSync('Mobile/index.html', 'utf8');
let matches = [...html.matchAll(/icon="solar:([^"]+)"/g)].map(m => m[1]);

https.get('https://api.iconify.design/collection?prefix=solar', (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
        let json = JSON.parse(data);
        let validIcons = new Set(json.uncategorized || []);
        if (json.categories) {
            Object.values(json.categories).forEach(arr => arr.forEach(icon => validIcons.add(icon)));
        }
        if (json.aliases) {
            Object.keys(json.aliases).forEach(alias => validIcons.add(alias));
        }
        let missing = matches.filter(icon => !validIcons.has(icon));
        console.log('Missing icons:', [...new Set(missing)]);
    });
});
