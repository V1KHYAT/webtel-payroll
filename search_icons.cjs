const https = require('https');

const queries = ['megaphone', 'tree', 'fingerprint', 'chart', 'receipt', 'users', 'contact', 'help', 'logout', 'alert', 'warning', 'info', 'speaker', 'bill', 'leaf'];

queries.forEach(q => {
    https.get(`https://api.iconify.design/search?query=solar:${q}`, (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => {
            let json = JSON.parse(data);
            console.log(`Query: ${q}`);
            console.log((json.icons || []).filter(i => i.endsWith('-bold')).slice(0, 5));
        });
    });
});
