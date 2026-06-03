const fs = require('fs');

let js = fs.readFileSync('Mobile/js/app.js', 'utf8');

const oldToastRegex = /function triggerPunchInToast\(\) \{[\s\S]*?\}/;
const newToast = `function triggerPunchInToast() {
    const header = document.getElementById('home-base-header');
    if (!header) return;
    
    // Add glow and expand header
    header.classList.add('header-glow');
    header.classList.add('toast-expanded');
    
    const toast = document.getElementById('header-toast-msg-inline');
    if (toast) {
        toast.innerHTML = '<iconify-icon icon="lucide:clock"></iconify-icon> Time to punch in!';
    }
    
    // Hide after 4 seconds
    setTimeout(() => {
        header.classList.remove('toast-expanded');
        header.classList.remove('header-glow');
    }, 4000);
}`;

if (js.match(oldToastRegex)) {
    js = js.replace(oldToastRegex, newToast);
    fs.writeFileSync('Mobile/js/app.js', js);
    console.log('JS updated successfully.');
} else {
    console.log('Regex did not match in JS.');
}
