const fs = require('fs');

let js = fs.readFileSync('Mobile/js/app.js', 'utf8');

const clockLogic = `
// ==========================================
// REAL-TIME CLOCK & ICONS LOGIC
// ==========================================

function updateClocks() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    
    const timeString = hours + ':' + minutes;
    
    // Update all status bar times
    const statusTimes = document.querySelectorAll('.status-time');
    statusTimes.forEach(el => {
        el.textContent = timeString;
    });
    
    // Update huge time in card
    const heroTimeLarge = document.getElementById('hero-time-large');
    const heroTimeAmpm = document.getElementById('hero-time-ampm');
    if (heroTimeLarge) heroTimeLarge.textContent = timeString;
    if (heroTimeAmpm) heroTimeAmpm.textContent = ampm;
}

// Update clock every second
setInterval(updateClocks, 1000);
updateClocks(); // initial call

// Global variables for attendance state
let isPunchedIn = false;
let punchInTimeStr = '--:--';
let punchOutTimeStr = '--:--';

function markAttendance() {
    const btn = document.querySelector('.btn-attendance');
    const shiftInVal = document.getElementById('shift-in-val');
    const shiftOutVal = document.getElementById('shift-out-val');
    const timeSub = document.querySelector('.time-sub');
    
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    const currentTimeStr = hours + ':' + minutes + ' ' + ampm;

    if (!btn) return;
    
    // Add brief active state class for visual effect
    btn.classList.add('btn-active-state');
    setTimeout(() => {
        btn.classList.remove('btn-active-state');
        
        if (!isPunchedIn) {
            // Punch In
            isPunchedIn = true;
            punchInTimeStr = currentTimeStr;
            if (shiftInVal) shiftInVal.textContent = punchInTimeStr;
            
            btn.textContent = 'Punch Out';
            btn.style.background = '#ef4444'; // Red button for punch out
            btn.style.color = '#ffffff';
            btn.style.boxShadow = '0 8px 16px rgba(239, 68, 68, 0.25)';
            if (timeSub) timeSub.textContent = 'Punched In';
            
            closeBottomSheet('attendance-map-sheet');
            triggerToast('Successfully Punched In at ' + punchInTimeStr);
        } else {
            // Punch Out
            isPunchedIn = false;
            punchOutTimeStr = currentTimeStr;
            if (shiftOutVal) shiftOutVal.textContent = punchOutTimeStr;
            
            btn.textContent = 'Punch In';
            btn.style.background = 'var(--color-primary)'; // Back to blue
            btn.style.color = '#ffffff';
            btn.style.boxShadow = '0 8px 16px rgba(37, 99, 235, 0.25)';
            if (timeSub) timeSub.textContent = 'Punched Out';
            
            closeBottomSheet('attendance-map-sheet');
            triggerToast('Successfully Punched Out at ' + punchOutTimeStr);
        }
    }, 150); // slight delay to show the tap effect
}

function triggerToast(msg) {
    const toast = document.createElement('div');
    toast.style.position = 'fixed';
    toast.style.bottom = '100px';
    toast.style.left = '50%';
    toast.style.transform = 'translateX(-50%)';
    toast.style.background = '#1e293b';
    toast.style.color = '#fff';
    toast.style.padding = '12px 24px';
    toast.style.borderRadius = '100px';
    toast.style.fontSize = '14px';
    toast.style.fontWeight = '500';
    toast.style.zIndex = '9999';
    toast.style.boxShadow = '0 10px 25px rgba(0,0,0,0.2)';
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.3s, transform 0.3s';
    toast.textContent = msg;
    
    document.body.appendChild(toast);
    
    // trigger animation
    setTimeout(() => {
        toast.style.opacity = '1';
        toast.style.transform = 'translateX(-50%) translateY(-10px)';
    }, 10);
    
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(-50%) translateY(0)';
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
}
`;

if (!js.includes('REAL-TIME CLOCK')) {
    js += '\n' + clockLogic;
    
    // Fix keyboard shortcut icon logic
    js = js.replace(
        /if \\(event\\.key === '1'\\) \\{[\\s\\S]*?else if \\(event\\.key === '3'\\) \\{[\\s\\S]*?\\}/,
        `const shiftIcon = document.getElementById('shift-time-icon');
    if (event.key === '1') {
        bgElement.style.backgroundImage = "url('images/home1.png')";
        if (shiftIcon) shiftIcon.setAttribute('icon', 'lucide:sun');
    } else if (event.key === '2') {
        bgElement.style.backgroundImage = "url('images/home2.png')";
        if (shiftIcon) shiftIcon.setAttribute('icon', 'lucide:sunset');
    } else if (event.key === '3') {
        bgElement.style.backgroundImage = "url('images/home3.png')";
        if (shiftIcon) shiftIcon.setAttribute('icon', 'lucide:moon');
    }`
    );
    
    fs.writeFileSync('Mobile/js/app.js', js);
    console.log('Clock and attendance logic added');
} else {
    console.log('Already added');
}
