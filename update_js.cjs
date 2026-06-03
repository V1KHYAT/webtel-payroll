const fs = require('fs');

let js = fs.readFileSync('Mobile/js/app.js', 'utf8');

const scrollFunc = `
// Handle Home Page scroll to transition header
function handleHomeScroll(element) {
    const header = document.getElementById('home-fixed-header');
    const baseHeader = document.getElementById('home-base-header');
    
    if (element.scrollTop > 50) {
        header.classList.add('scrolled-header-container');
        baseHeader.classList.remove('transparent-header');
    } else {
        header.classList.remove('scrolled-header-container');
        baseHeader.classList.add('transparent-header');
    }
}
`;

if (!js.includes('handleHomeScroll')) {
    js += scrollFunc;
    fs.writeFileSync('Mobile/js/app.js', js);
    console.log('JS updated.');
} else {
    console.log('JS already updated.');
}
