const fs = require('fs');

// We already updated styles and app.js in the first run (the crash was on HTML parsing).
// But let's make sure styles and JS are still fully applied.

let html = fs.readFileSync('Mobile/index.html', 'utf8');

// Replace "Submit Leave Request" button
html = html.replace(
    /<button class="btn btn-primary btn-block"[^>]*>\s*Submit Leave Request\s*<\/button>/g,
    (match) => {
        if (!match.includes('onclick')) {
            return match.replace('<button ', '<button onclick="submitAction(this, ' + "'Leave Request Submitted'" + ')" ');
        }
        return match;
    }
);

html = html.replace(
    /<button class="btn btn-primary btn-block"[^>]*>\s*Submit Expense\s*<\/button>/g,
    (match) => {
        if (!match.includes('onclick')) {
            return match.replace('<button ', '<button onclick="submitAction(this, ' + "'Expense Report Submitted'" + ')" ');
        }
        return match;
    }
);

html = html.replace(
    /<button class="btn btn-primary btn-block"[^>]*>\s*Submit OD \/ Tour\s*<\/button>/g,
    (match) => {
        if (!match.includes('onclick')) {
            return match.replace('<button ', '<button onclick="submitAction(this, ' + "'OD/Tour Submitted'" + ')" ');
        }
        return match;
    }
);

fs.writeFileSync('Mobile/index.html', html);
console.log('Added toast notifications successfully!');
