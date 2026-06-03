const fs = require('fs');
const oldHtml = fs.readFileSync('old_index.html', 'utf8');
const matches = oldHtml.match(/icon="solar:[^"]+"/g) || [];
const uniqueIcons = [...new Set(matches)];
console.log('All Solar Icons in old_index.html:');
console.log(uniqueIcons.join('\\n'));
