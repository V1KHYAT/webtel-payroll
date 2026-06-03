const fs = require('fs');

let js = fs.readFileSync('Mobile/js/app.js', 'utf8');

// The file is corrupted from line ~239 onwards. The openBottomSheet function
// got merged with toggleAccordion. We need to:
// 1. Find the end of openBottomSheet (after "overlay.classList.add('open');")
// 2. Remove the stray toggleAccordion code that was injected there
// 3. Insert the missing functions: closeBottomSheet, startMapClock, mockPunchIn, initToggleState, spin, window.onload, toggleAccordion

// The corrupted section looks like:
//   sheet.classList.add('open');
//   overlay.classList.add('open');
//
//   const card = header.parentElement;  <-- THIS IS WRONG, it's toggleAccordion code
//   ...
//   }
//
// We need to replace from "overlay.classList.add('open');" through to the closing "}" of the stray block

const corruptedStart = "    sheet.classList.add('open');\r\n    overlay.classList.add('open');\r\n\r\n    const card = header.parentElement;";
const corruptedEnd = "    chevron.style.transform = 'rotate(180deg)';\r\n    }\r\n    \r\n}";

const startIdx = js.indexOf(corruptedStart);
const endIdx = js.indexOf(corruptedEnd);

if (startIdx === -1 || endIdx === -1) {
    console.log('Could not find corrupted section. startIdx:', startIdx, 'endIdx:', endIdx);
    // Try without \r\n
    const cs2 = "    sheet.classList.add('open');\n    overlay.classList.add('open');\n\n    const card = header.parentElement;";
    const ce2 = "    chevron.style.transform = 'rotate(180deg)';\n    }\n    \n}";
    const si2 = js.indexOf(cs2);
    const ei2 = js.indexOf(ce2);
    console.log('Alt search: startIdx:', si2, 'endIdx:', ei2);
    process.exit(1);
}

const replacement = `    sheet.classList.add('open');
    overlay.classList.add('open');

    if (sheetId === 'attendance-map-sheet') {
        startMapClock();
    }
}

function closeBottomSheet() {
    const sheets = document.querySelectorAll('.bottom-sheet');
    const overlay = document.getElementById('sheet-overlay');
    
    sheets.forEach(sheet => sheet.classList.remove('open'));
    if (overlay) overlay.classList.remove('open');

    clearInterval(mapInterval);
}

function startMapClock() {
    const updateMapTime = () => {
        const now = new Date();
        const timeStr = now.toLocaleTimeString('en-US');
        const el = document.getElementById('map-timestamp');
        if (el) el.innerText = timeStr;
    };
    updateMapTime();
    mapInterval = setInterval(updateMapTime, 1000);
}

function mockPunchIn() {
    const btn = document.getElementById('btn-punch-confirm');
    
    btn.innerHTML = '<i data-lucide="loader-2" class="lucide" style="animation: spin 1s linear infinite;"></i> Processing...';
    btn.style.opacity = '0.9';
    btn.style.pointerEvents = 'none';
    
    setTimeout(() => {
        btn.innerHTML = '<i data-lucide="check" class="lucide"></i> Attendance Marked';
        btn.style.backgroundColor = '#2563EB';
        
        setTimeout(() => {
            closeBottomSheet();
            
            const now = new Date();
            let hours = now.getHours();
            let minutes = now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes();
            const ampm = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12;
            hours = hours ? hours : 12;
            const timeString = hours + ':' + minutes + ' ' + ampm;
            
            const shiftInVal = document.getElementById('shift-in-val');
            const shiftOutVal = document.getElementById('shift-out-val');
            const timeSub = document.querySelector('.time-sub');
            const attendanceBtn = document.querySelector('.btn-attendance');
            
            if (typeof window._isPunchedIn === 'undefined') window._isPunchedIn = false;
            
            if (!window._isPunchedIn) {
                window._isPunchedIn = true;
                if (shiftInVal) shiftInVal.textContent = timeString;
                if (timeSub) timeSub.textContent = 'Punched In';
                if (attendanceBtn) {
                    attendanceBtn.textContent = 'Punch Out';
                    attendanceBtn.style.background = '#ef4444';
                    attendanceBtn.style.color = '#ffffff';
                    attendanceBtn.style.boxShadow = '0 8px 16px rgba(239, 68, 68, 0.25)';
                }
            } else {
                window._isPunchedIn = false;
                if (shiftOutVal) shiftOutVal.textContent = timeString;
                if (timeSub) timeSub.textContent = 'Punched Out';
                if (attendanceBtn) {
                    attendanceBtn.textContent = 'Punch In';
                    attendanceBtn.style.background = 'var(--color-primary)';
                    attendanceBtn.style.color = '#ffffff';
                    attendanceBtn.style.boxShadow = '0 8px 16px rgba(37, 99, 235, 0.25)';
                }
            }
            
            setTimeout(() => {
                btn.innerHTML = 'Mark With Selfie';
                btn.style.backgroundColor = '';
                btn.style.opacity = '1';
                btn.style.pointerEvents = 'auto';
            }, 500);
        }, 800);
    }, 1200);
}

// --- TOGGLE STATE MANAGEMENT ---
function initToggleState() {
    const toggle = document.getElementById('advanced-features-toggle');
    if (!toggle) return;
    
    const savedState = localStorage.getItem('advanced-features-enabled');
    if (savedState === 'true') {
        toggle.checked = true;
    }
    
    toggle.addEventListener('change', function() {
        localStorage.setItem('advanced-features-enabled', this.checked);
    });
}

// Add simple spin animation to head dynamically
const style = document.createElement('style');
style.innerHTML = \`
@keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}
\`;
document.head.appendChild(style);

// Run init on load
window.onload = () => {
    initHome();
    initProfileScrollMinimize();
};

// --- PROFILE ACCORDION LOGIC ---
function toggleAccordion(btn) {
    const header = btn;
    const card = header.parentElement;
    const content = card.querySelector('.accordion-content');
    const chevron = btn.querySelector('.acc-chevron');
    
    if (!content) return;
    
    if (content.classList.contains('open')) {
        content.classList.remove('open');
        header.classList.remove('open');
        if (card) card.classList.remove('open');
        chevron.style.transform = 'rotate(0deg)';
    } else {
        content.classList.add('open');
        header.classList.add('open');
        if (card) card.classList.add('open');
        chevron.style.transform = 'rotate(180deg)';
    }
    
}`;

const endOfCorrupted = endIdx + corruptedEnd.length;
js = js.substring(0, startIdx) + replacement + js.substring(endOfCorrupted);

fs.writeFileSync('Mobile/js/app.js', js);
console.log('Fixed corrupted section successfully');
