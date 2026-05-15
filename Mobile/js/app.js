// --- NAVIGATION LOGIC ---

function goToCredentials() {
    const domain = document.getElementById('domain').value;
    if (!domain) {
        alert("Please enter a domain");
        return;
    }
    // Update domain text on next screen
    document.getElementById('display-domain').innerText = domain + '.webtel.in';
    
    // Animate screens
    document.getElementById('login-domain-screen').classList.remove('active');
    document.getElementById('login-domain-screen').classList.add('exit');
    
    setTimeout(() => {
        document.getElementById('login-domain-screen').classList.remove('exit');
        document.getElementById('login-credentials-screen').classList.add('active');
    }, 50); // slight delay to allow classes to apply
}

function goToDomain() {
    document.getElementById('login-credentials-screen').classList.remove('active');
    document.getElementById('login-domain-screen').classList.add('active');
}

function login() {
    // Simulate loading
    const btn = document.querySelector('#login-credentials-screen .btn-primary');
    btn.innerHTML = 'Signing In...';
    btn.style.opacity = '0.8';
    
    setTimeout(() => {
        // Hide login, show home
        document.getElementById('login-credentials-screen').classList.remove('active');
        document.getElementById('home-screen').classList.add('active');
        
        // Initialize home screen elements
        initHome();
        
        // Reset button
        btn.innerHTML = 'Sign In';
        btn.style.opacity = '1';
    }, 800);
}

// --- SIDEBAR LOGIC ---

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    
    if (sidebar.classList.contains('open')) {
        sidebar.classList.remove('open');
        overlay.classList.remove('open');
    } else {
        sidebar.classList.add('open');
        overlay.classList.add('open');
    }
}

function toggleSubmenu(btn) {
    const menuItem = btn.closest('.nav-menu-item');
    
    // Close others
    document.querySelectorAll('.nav-menu-item').forEach(item => {
        if (item !== menuItem) item.classList.remove('expanded');
    });
    
    // Toggle current
    menuItem.classList.toggle('expanded');
}

// --- HOME SCREEN LOGIC ---

function initHome() {
    populateRegularisation();
    updateClock();
    setInterval(updateClock, 60000); // Update every minute
}

function populateRegularisation() {
    const list = document.getElementById('regularisation-list');
    if (!list || list.children.length > 0) return; // Already populated
    
    let html = '';
    for (let i = 1; i <= 15; i++) {
        const date = new Date(2026, 4, i); // May 2026
        const dayStr = date.toLocaleDateString('en-US', { weekday: 'short' });
        const dateStr = `May ${i.toString().padStart(2, '0')}`;
        
        html += `
        <div style="padding: 10px 0; border-bottom: 1px solid var(--color-border); display:flex; justify-content:space-between; align-items: center;">
            <div style="font-weight: 500; font-size: 13px; color: var(--color-text);">
                ${dateStr} <span style="color: var(--color-text-tertiary); margin-left: 4px;">${dayStr}</span>
            </div>
            <div style="color: #27272A; font-weight: 600; font-size: 12px; background: #FAFAFA; border: 1px solid var(--color-border); padding: 2px 8px; border-radius: 6px;">Absent</div>
        </div>
        `;
    }
    list.innerHTML = html;
}

function updateClock() {
    const timeReadout = document.querySelector('.time-readout');
    if (!timeReadout) return;
    
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    
    timeReadout.innerHTML = `${hours}:${minutes} <span style="font-size: 20px; font-weight: 500; color: var(--color-text-tertiary)">${ampm}</span>`;
}

// --- BOTTOM SHEET LOGIC ---

let mapInterval;

function openBottomSheet(sheetId) {
    const sheet = document.getElementById(sheetId);
    const overlay = document.getElementById('sheet-overlay');
    
    if (sheet && overlay) {
        sheet.classList.add('open');
        overlay.classList.add('open');
    }

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
        const timeStr = now.toLocaleTimeString('en-US'); // HH:MM:SS AM/PM
        const el = document.getElementById('map-timestamp');
        if (el) el.innerText = timeStr;
    };
    updateMapTime();
    mapInterval = setInterval(updateMapTime, 1000);
}

function mockPunchIn() {
    const btn = document.getElementById('btn-punch-confirm');
    const originalText = btn.textContent;
    const originalBg = btn.style.backgroundColor;
    
    btn.innerHTML = '<i data-lucide="loader-2" class="lucide" style="animation: spin 1s linear infinite;"></i> Processing...';
    btn.style.opacity = '0.9';
    btn.style.pointerEvents = 'none';
    lucide.createIcons();
    
    setTimeout(() => {
        // Confirmation State
        btn.innerHTML = '<i data-lucide="check" class="lucide"></i> Attendance Marked';
        btn.style.backgroundColor = '#10B981'; // Green
        lucide.createIcons();

        setTimeout(() => {
            closeBottomSheet();
            
            // Update base layer UI
            const now = new Date();
            let hours = now.getHours();
            let minutes = now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes();
            const ampm = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12;
            hours = hours ? hours : 12;
            
            document.getElementById('punch-in-time').textContent = `${hours}:${minutes} ${ampm}`;
            document.getElementById('punch-label').textContent = 'Currently on shift';
            
            const mainBtn = document.getElementById('btn-punch-main');
            mainBtn.textContent = 'Punch Out';
            mainBtn.classList.remove('btn-primary');
            mainBtn.classList.add('btn-dark'); // Use dark button for Punch Out
            
            lucide.createIcons();
            
            // Restore button state for next time
            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.backgroundColor = originalBg;
                btn.style.opacity = '1';
                btn.style.pointerEvents = 'auto';
            }, 500);
            
        }, 1200);
        
    }, 1500);
}

// Add simple spin animation to head dynamically
const style = document.createElement('style');
style.innerHTML = `
@keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}
`;
document.head.appendChild(style);

// Run init on load
window.onload = () => {
    initHome();
};
