
// Header structuring is now handled entirely via static HTML in index.html
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

function openBottomSheet(sheetId, contextData) {
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
                    attendanceBtn.setAttribute('style', 'border-radius: 100px; background: #ef4444 !important; color: #ffffff !important; box-shadow: 0 8px 16px rgba(239, 68, 68, 0.25);');
                }
            } else {
                window._isPunchedIn = false;
                if (shiftOutVal) shiftOutVal.textContent = timeString;
                if (timeSub) timeSub.textContent = 'Punched Out';
                if (attendanceBtn) {
                    attendanceBtn.textContent = 'Mark Attendance';
                    attendanceBtn.setAttribute('style', 'border-radius: 100px;');
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
    handleNavigation('profile-screen');
    
    
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
    handleNavigation('home-screen');
    
    
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


// Unified function to hide all screens
function closeAllScreens() {
    document.querySelectorAll('.screen').forEach(el => {
        el.classList.remove('active');
    });
}

function handleNavigation(screenId) {
    const sidebar = document.getElementById('sidebar');
    if (sidebar && sidebar.classList.contains('open')) {
        toggleSidebar();
    }
    closeAllScreens();
    const target = document.getElementById(screenId);
    if (target) target.classList.add('active');
    
    // Remove active link styling from sidebar
    const navLinks = document.querySelectorAll('.sidebar-content .nav-link');
    navLinks.forEach(link => link.classList.remove('active-link'));
}

function goToVisitExpense() { handleNavigation('visit-expense-screen'); }
function goToExpenseReport() { handleNavigation('expense-report-screen'); }
function goToODTourReport() { handleNavigation('od-tour-report-screen'); }
function goToSalaryReport() { handleNavigation('salary-report-screen'); }
function goToAppliedLeavesReport() { handleNavigation('applied-leave-report-screen'); }
function goToLeave() { handleNavigation('leave-screen'); }
function goToAttendance() { handleNavigation('attendance-screen'); }

function switchLeaveTab(tab) {
    const tabs = document.querySelectorAll('#leave-screen .tabs-container .tab-btn');
    tabs.forEach(t => t.classList.remove('active'));
    
    document.getElementById('leave-plan-tab').style.display = 'none';
    document.getElementById('leave-od-tab').style.display = 'none';
    
    if (tab === 'leave') {
        if(tabs[0]) tabs[0].classList.add('active');
        document.getElementById('leave-plan-tab').style.display = 'block';
    } else {
        if(tabs[1]) tabs[1].classList.add('active');
        document.getElementById('leave-od-tab').style.display = 'block';
    }
}

function switchAttendanceTab(tab) {
    alert("Tab clicked: " + tab); // DIAGNOSTIC
    var tabs = document.querySelectorAll('#attendance-screen .tabs-container .tab-btn');
    tabs.forEach(function(t) { t.classList.remove('active'); });
    
    document.getElementById('attendance-reports-tab').style.display = 'none';
    document.getElementById('attendance-logs-tab').style.display = 'none';
    
    if (tab === 'reports') {
        if(tabs[0]) tabs[0].classList.add('active');
        document.getElementById('attendance-reports-tab').style.display = 'block';
    } else {
        if(tabs[1]) tabs[1].classList.add('active');
        document.getElementById('attendance-logs-tab').style.display = 'block';
    }
}

function mockSalaryLoad() { alert('Loading Salary Data for selected month...'); }
function mockSalaryExport() { alert('Exporting Salary Report as PDF...'); }
function mockFilePicker() { alert('Android File Picker Opened:\nSelect Document or Image'); }


window.toggleCard = function(headerEl) {
    const card = headerEl.parentElement;
    const isExpanded = card.classList.contains('expanded');
    const container = card.closest('.scrollable-cards');
    
    // Close all other cards
    if (container) {
        const allCards = container.querySelectorAll('.custom-report-card');
        allCards.forEach(c => {
            if (c !== card) {
                c.classList.remove('expanded');
                const content = c.querySelector('.crc-expanded-content');
                if (content) {
                    content.style.maxHeight = null;
                }
            }
        });
    }
    
    // Toggle current
    const content = card.querySelector('.crc-expanded-content');
    if (!isExpanded) {
        card.classList.add('expanded');
        if (content) {
            // Give it enough max-height to fit the content, plus extra buffer to prevent cut-offs
            content.style.maxHeight = (content.scrollHeight + 50) + "px";
        }
    } else {
        card.classList.remove('expanded');
        if (content) {
            content.style.maxHeight = null;
        }
    }
};


document.addEventListener('DOMContentLoaded', () => {
    // We can't do it on DOMContentLoaded alone because screens are hidden by default
    // We should patch the window.showScreen function instead!
});




document.addEventListener('DOMContentLoaded', () => {
    // Force expand the first card in all report screens
    const reportScreens = ['expense-report-screen', 'salary-report-screen', 'od-tour-report-screen', 'applied-leave-report-screen', 'leave-sanction-screen', 'expense-sanction-screen', 'od-tour-sanction-screen', 'my-team-screen'];
    reportScreens.forEach(id => {
        const screen = document.getElementById(id);
        if (screen) {
            const firstCard = screen.querySelector('.custom-report-card');
            if (firstCard) {
                firstCard.classList.add('expanded');
                const content = firstCard.querySelector('.crc-expanded-content');
                if (content) {
                    content.style.maxHeight = '1000px'; // Give it a huge max-height so it shows
                }
            }
        }
    });
});


// --- TEAM MANAGEMENT ROUTES ---
function goToLeaveSanction() { handleNavigation('leave-sanction-screen'); }
function goToExpenseSanction() { handleNavigation('expense-sanction-screen'); }
function goToODTourSanction() { handleNavigation('od-tour-sanction-screen'); }
function goToMyTeam() { handleNavigation('my-team-screen'); }
function goToEmployeeDirectory() { handleNavigation('employee-directory-screen'); }

// Handle Home Page scroll to transition header
function handleHomeScroll(element) {
    const statusBar = document.getElementById('home-status-bar');
    const headerWrapper = document.querySelector('.home-header-wrapper');
    if (element.scrollTop > 50) {
        if (statusBar) statusBar.classList.add('scrolled-status-bar');
        if (headerWrapper) headerWrapper.classList.add('scrolled-header-wrapper');
    } else {
        if (statusBar) statusBar.classList.remove('scrolled-status-bar');
        if (headerWrapper) headerWrapper.classList.remove('scrolled-header-wrapper');
    }
}

// Keyboard event listener for changing home backgrounds and triggering toast
document.addEventListener('keydown', function(event) {
    if (event.key === '4') {
        triggerPunchInToast();
        return;
    }

    const bgElement = document.querySelector('.home-hero-bg');
    if (!bgElement) return;

    const shiftIcon = document.getElementById('shift-time-icon');
    if (event.key === '1') {
        bgElement.style.backgroundImage = "url('images/home1.png')";
        if (shiftIcon) { shiftIcon.setAttribute('icon', 'lucide:sun'); shiftIcon.style.color = '#eab308'; }
    } else if (event.key === '2') {
        bgElement.style.backgroundImage = "url('images/home2.png')";
        if (shiftIcon) { shiftIcon.setAttribute('icon', 'lucide:sunset'); shiftIcon.style.color = '#f97316'; }
    } else if (event.key === '3') {
        bgElement.style.backgroundImage = "url('images/home3.png')";
        if (shiftIcon) { shiftIcon.setAttribute('icon', 'lucide:moon'); shiftIcon.style.color = '#8b5cf6'; }
    }
});

function triggerPunchInToast() {
    console.log("triggerPunchInToast called!");
    // Find ALL active screens just in case there are multiple or an issue
    const activeScreens = document.querySelectorAll('.screen.active');
    let triggered = false;
    
    activeScreens.forEach(screen => {
        const header = screen.querySelector('.app-header-pill');
        if (header) {
            console.log("Header pill found in screen " + screen.id + ", adding is-toast-active class.");
            header.classList.add('is-toast-active');
            triggered = true;
            
            // Hide after 4 seconds
            setTimeout(() => {
                header.classList.remove('is-toast-active');
            }, 4000);
        }
    });
    
    if (!triggered) {
        // Fallback: If no active screen had a header, just try to find the home screen header explicitly
        console.log("Fallback: trying home screen explicitly");
        const homeScreen = document.getElementById('home-screen');
        if (homeScreen) {
            const header = homeScreen.querySelector('.app-header-pill');
            if (header) {
                header.classList.add('is-toast-active');
                setTimeout(() => {
                    header.classList.remove('is-toast-active');
                }, 4000);
            }
        }
    }
}


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

// --- SUCCESS TOAST ACTION ---
window.submitAction = function(btnElement, successMessage) {
    const originalText = btnElement.innerHTML;
    btnElement.innerHTML = '<iconify-icon icon="lucide:loader-2" style="animation: spin 1s linear infinite; font-size: 20px;"></iconify-icon> Processing...';
    btnElement.style.opacity = '0.8';
    btnElement.style.pointerEvents = 'none';
    
    setTimeout(() => {
        btnElement.innerHTML = originalText;
        btnElement.style.opacity = '1';
        btnElement.style.pointerEvents = 'auto';
        
        const activeScreen = document.querySelector('.screen.active');
        if (!activeScreen) return;
        
        const headerPill = activeScreen.querySelector('.app-header-pill');
        const toast = activeScreen.querySelector('.app-header-toast');
        if (headerPill && toast) {
            toast.innerHTML = '<iconify-icon icon="lucide:check-circle" style="font-size: 20px;"></iconify-icon><span>' + successMessage + '</span>';
            
            headerPill.classList.add('success-toast');
            headerPill.classList.add('is-toast-active');
            
            setTimeout(() => {
                headerPill.classList.remove('is-toast-active');
                setTimeout(() => {
                    headerPill.classList.remove('success-toast');
                    if(window.goToScreen) {
                        goToScreen('home-screen');
                    }
                }, 300);
            }, 2500);
        }
    }, 1200);
};

// --- FLOATING BUTTON TOGGLE (L KEY) ---
document.addEventListener('keydown', function(e) {
    if (e.key.toLowerCase() === 'l') {
        const activeScreen = document.querySelector('.screen.active');
        if (activeScreen && activeScreen.id === 'visit-expense-screen') {
            const submitBtns = activeScreen.querySelectorAll('button');
            for (let btn of submitBtns) {
                if (btn.textContent.includes('Submit Expense')) {
                    btn.classList.toggle('floating-btn-active');
                    
                    // If making it floating, add a placeholder below so content isn't covered, 
                    // or just let it float. The user just asked for it to float on L.
                }
            }
        }
    }
});

// Toggle User Account Logic
function switchUserAccount(isActive) {
    if(isActive) {
        document.body.classList.add('user-2-active');
        // Update local storage if needed
    } else {
        document.body.classList.remove('user-2-active');
    }
}

function goToRoomRequest() {
    handleNavigation('room-request-screen');
}

function goToComplaint() {
    handleNavigation('complaint-screen');
}
