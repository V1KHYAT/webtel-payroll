const fs = require('fs');

let js = fs.readFileSync('Mobile/js/app.js', 'utf8');

// 1. Add live clock that updates status bar and hero time every second
const clockCode = `
// ==========================================
// REAL-TIME CLOCK
// ==========================================
function updateLiveClocks() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    
    const timeString = hours + ':' + minutes;
    
    // Update all status bar times
    document.querySelectorAll('.status-time').forEach(el => {
        el.textContent = timeString;
    });
    
    // Update hero time in attendance card
    const heroLarge = document.getElementById('hero-time-large');
    const heroAmpm = document.getElementById('hero-time-ampm');
    if (heroLarge) heroLarge.textContent = timeString;
    if (heroAmpm) heroAmpm.textContent = ampm;
}

setInterval(updateLiveClocks, 1000);
document.addEventListener('DOMContentLoaded', updateLiveClocks);
`;

if (!js.includes('REAL-TIME CLOCK')) {
    js += '\\n' + clockCode;
}

// 2. Update keyboard shortcut to also change shift icon
const oldKeyHandler = `    if (event.key === '1') {
        bgElement.style.backgroundImage = "url('images/home1.png')";
    } else if (event.key === '2') {
        bgElement.style.backgroundImage = "url('images/home2.png')";
    } else if (event.key === '3') {
        bgElement.style.backgroundImage = "url('images/home3.png')";
    }`;

const newKeyHandler = `    const shiftIcon = document.getElementById('shift-time-icon');
    if (event.key === '1') {
        bgElement.style.backgroundImage = "url('images/home1.png')";
        if (shiftIcon) { shiftIcon.setAttribute('icon', 'lucide:sun'); shiftIcon.style.color = '#eab308'; }
    } else if (event.key === '2') {
        bgElement.style.backgroundImage = "url('images/home2.png')";
        if (shiftIcon) { shiftIcon.setAttribute('icon', 'lucide:sunset'); shiftIcon.style.color = '#f97316'; }
    } else if (event.key === '3') {
        bgElement.style.backgroundImage = "url('images/home3.png')";
        if (shiftIcon) { shiftIcon.setAttribute('icon', 'lucide:moon'); shiftIcon.style.color = '#8b5cf6'; }
    }`;

if (js.includes(oldKeyHandler)) {
    js = js.replace(oldKeyHandler, newKeyHandler);
    console.log('Updated keyboard handler with icon switching');
} else {
    console.log('Keyboard handler already updated or not found');
}

fs.writeFileSync('Mobile/js/app.js', js);
console.log('Live clock and icon logic added');
