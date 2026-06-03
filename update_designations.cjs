const fs = require('fs');
let html = fs.readFileSync('Mobile/index.html', 'utf8');

const roles = ['Marketing', 'HR', 'Engineering', 'Sales', 'Finance', 'Administration', 'Support', 'Legal', 'Design', 'Product', 'Engineering', 'Operations'];

roles.forEach(role => {
    // E.g., replace `Marketing • ` with `Designation: Marketing • `
    const searchString = `${role} • `;
    const replaceString = `Designation: ${role} • `;
    // Replace all occurrences just in case, though there should be only one per role
    html = html.split(searchString).join(replaceString);
});

fs.writeFileSync('Mobile/index.html', html);
console.log('Designations updated.');
