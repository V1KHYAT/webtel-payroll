// --- AUTO ZOOM TO FIT PHONE ON SCREEN ---

function autoZoomToFit() {
    const deviceFrame = document.querySelector('.device-frame');
    if (!deviceFrame) return;
    
    const phoneWidth = 390 + 24;
    const phoneHeight = 844 + 24;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    
    const scaleX = (viewportWidth - 40) / phoneWidth;
    const scaleY = (viewportHeight - 40) / phoneHeight;
    const scale = Math.min(scaleX, scaleY, 1);
    
    deviceFrame.style.transformOrigin = 'top center';
    deviceFrame.style.transform = `scale(${scale})`;
    const wrapper = document.querySelector('.device-preview-wrapper');
    const unusedHeight = phoneHeight * (1 - scale);
    deviceFrame.style.marginBottom = '-' + unusedHeight + 'px';
}

// Run on load and on window resize
window.addEventListener('load', autoZoomToFit);
window.addEventListener('resize', autoZoomToFit);

// --- SCROLL MINIMIZE CARD LOGIC REMOVED ---

function initDragScroll() {
    const scrollableCards = document.querySelector('.scrollable-cards');
    if (!scrollableCards) return;

    let isDragging = false;
    let startY = 0;
    let startScrollTop = 0;

        scrollableCards.addEventListener('pointerdown', function(event) {
        if (event.pointerType !== 'mouse' || event.button !== 0) return;

        const interactiveTarget = event.target.closest('button, a, input, textarea, select, label, [role="button"]');
        if (interactiveTarget) return;

        event.preventDefault();

        isDragging = true;
        startY = event.clientY;
        startScrollTop = scrollableCards.scrollTop;
        scrollableCards.classList.add('drag-scrolling');
        scrollableCards.style.scrollBehavior = 'auto';

        try {
            scrollableCards.setPointerCapture(event.pointerId);
        } catch (error) {
            // Ignore capture failures on browsers that do not support it reliably.
        }
    });

    scrollableCards.addEventListener('pointermove', function(event) {
        if (!isDragging) return;
        event.preventDefault();
        const deltaY = event.clientY - startY;
        scrollableCards.scrollTop = startScrollTop - deltaY;
    });

    const stopDragging = function() {
        isDragging = false;
        scrollableCards.classList.remove('drag-scrolling');
        scrollableCards.style.scrollBehavior = '';
    };

    scrollableCards.addEventListener('pointerup', stopDragging);
    scrollableCards.addEventListener('pointercancel', stopDragging);
    scrollableCards.addEventListener('pointerleave', stopDragging);
}

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
    initDragScroll();
    initToggleState();
    updateCurrentTime();
    setInterval(updateClock, 60000); // Update every minute
    setInterval(updateCurrentTime, 60000);
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
    
    timeReadout.innerHTML = `${hours}:${minutes}<span class="meridian">${ampm}</span>`;
}

function updateCurrentTime() {
    const currentTime = document.getElementById('current-time');
    if (!currentTime) return;

    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    currentTime.innerHTML = `${hours}:${minutes}<span class="meridian">${ampm}</span>`;
}

// --- BOTTOM SHEET LOGIC ---

let mapInterval;

function openBottomSheet(sheetId) {
    const sheet = document.getElementById(sheetId);
    const overlay = document.getElementById('sheet-overlay');
    
    if (!sheet || !overlay) {
        return;
    }

    document.querySelectorAll('.bottom-sheet').forEach(existingSheet => existingSheet.classList.remove('open'));
    overlay.classList.remove('open');
    
    sheet.classList.add('open');
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
    
    
    setTimeout(() => {
        // Confirmation State
        btn.innerHTML = '<i data-lucide="check" class="lucide"></i> Attendance Marked';
        btn.style.backgroundColor = '#2563EB';
        

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
            mainBtn.classList.add('btn-primary');
            mainBtn.classList.remove('btn-dark');
            
            
            
            // Restore button state for next time
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.backgroundColor = originalBg;
                btn.style.opacity = '1';
                btn.style.pointerEvents = 'auto';
                
            }, 800);
        }, 1200);
    }, 1000);
}

// --- TOGGLE STATE MANAGEMENT ---
function initToggleState() {
    const toggle = document.getElementById('advanced-features-toggle');
    if (!toggle) return;
    
    // Restore toggle state from localStorage
    const savedState = localStorage.getItem('advanced-features-enabled');
    if (savedState === 'true') {
        toggle.checked = true;
    }
    
    // Save toggle state when changed
    toggle.addEventListener('change', function() {
        localStorage.setItem('advanced-features-enabled', this.checked);
    });
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
    
}

function updateSidebarActiveLink(activeId) {
    document.querySelectorAll('.sidebar .nav-link').forEach(link => {
        link.classList.remove('active-link');
    });
    const activeItem = document.getElementById(activeId);
    if (activeItem) {
        const link = activeItem.querySelector('.nav-link');
        if (link) link.classList.add('active-link');
    }
}

function initProfileScrollMinimize() {
    const scrollArea = document.getElementById('profile-scroll-area');
    const fixedBase = document.getElementById('profile-fixed-base');
    if (!scrollArea || !fixedBase) return;
    
    let scheduled = false;
    const update = () => {
        const scrollTop = scrollArea.scrollTop;
        fixedBase.classList.toggle('minimized', scrollTop > 10);
    };
    
    scrollArea.addEventListener('scroll', () => {
        if (scheduled) return;
        scheduled = true;
        requestAnimationFrame(() => {
            update();
            scheduled = false;
        });
    });
    
    update();
}

function logout() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar && sidebar.classList.contains('open')) {
        toggleSidebar();
    }
    
    // Hide home and profile screens
    document.getElementById('home-screen').classList.remove('active');
    document.getElementById('profile-screen').classList.remove('active');
    
    // Show login screen
    document.getElementById('login-domain-screen').classList.add('active');
    
    // Reset credentials screen if it was active
    document.getElementById('login-credentials-screen').classList.remove('active');
    
    // Reset input fields
    const domainInput = document.getElementById('domain');
    if (domainInput) domainInput.value = 'demo';
    
    const passwordInput = document.getElementById('password');
    if (passwordInput) passwordInput.value = 'password';
}

function goToProfile() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar && sidebar.classList.contains('open')) {
        toggleSidebar(); // Close sidebar if open
    }
    document.getElementById('home-screen').classList.remove('active');
    document.getElementById('profile-screen').classList.add('active');
    updateSidebarActiveLink('nav-profile');
    
    
    // Setup drag scroll for profile screen if needed, using the existing initDragScroll on its scrollable-cards
    const profCards = document.querySelector('#profile-screen .scrollable-cards');
    if (profCards && !profCards.dataset.dragInit) {
        profCards.dataset.dragInit = 'true';
        let isDragging = false, startY = 0, startScrollTop = 0;
        profCards.addEventListener('pointerdown', function(e) {
            if (e.pointerType !== 'mouse' || e.button !== 0) return;
            if (e.target.closest('button, a, input, textarea, select, label, [role="button"]')) return;
            e.preventDefault();
            isDragging = true; startY = e.clientY; startScrollTop = profCards.scrollTop;
            profCards.classList.add('drag-scrolling');
            profCards.style.scrollBehavior = 'auto';
            try { profCards.setPointerCapture(e.pointerId); } catch(err){}
        });
        profCards.addEventListener('pointermove', function(e) {
            if (!isDragging) return;
            e.preventDefault();
            profCards.scrollTop = startScrollTop - (e.clientY - startY);
        });
        const stopDragging = function() {
            isDragging = false; profCards.classList.remove('drag-scrolling'); profCards.style.scrollBehavior = '';
        };
        profCards.addEventListener('pointerup', stopDragging);
        profCards.addEventListener('pointercancel', stopDragging);
        profCards.addEventListener('pointerleave', stopDragging);
    }
}

function goToHome() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar && sidebar.classList.contains('open')) {
        toggleSidebar(); // Close sidebar if open
    }
    document.getElementById('profile-screen').classList.remove('active');
    document.getElementById('home-screen').classList.add('active');
    updateSidebarActiveLink('nav-dashboard');
    
    
    // restore default spacing safety for home screen
    const homeCards = document.querySelector('#home-screen .scrollable-cards');
    if (homeCards) homeCards.style.paddingBottom = '40px';
}

// --- PROFILE BENTO EXPAND/COLLAPSE ---
function toggleProfileDetail(btn) {
    const list = btn.nextElementSibling;
    if (!list || !list.classList.contains('expandable-detail-list')) return;
    
    const isOpen = list.classList.contains('open');
    list.classList.toggle('open');
    btn.classList.toggle('open');
    
    const label = btn.querySelector('span');
    if (label) {
        if (isOpen) {
            label.textContent = label.textContent.replace('Hide', 'Show');
        } else {
            label.textContent = label.textContent.replace('Show', 'Hide');
        }
    }
}
