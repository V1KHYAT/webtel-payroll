const fs = require('fs');
let html = fs.readFileSync('Mobile/index.html', 'utf8');

// Function to update a screen's scrollable content
function updateScreenContent(screenId, user2Content) {
    const screenStart = html.indexOf(`id="${screenId}"`);
    if (screenStart === -1) {
        console.error(`Screen ${screenId} not found`);
        return;
    }
    const mainStart = html.indexOf('<main class="scrollable-cards"', screenStart);
    const mainEnd = html.indexOf('</main>', mainStart);
    
    const originalMainContent = html.substring(mainStart + html.substring(mainStart).indexOf('>') + 1, mainEnd);
    
    const newMainContent = `
    <div data-user="1">
        ${originalMainContent}
    </div>
    <div data-user="2" style="display:none; padding: 16px; display:flex; flex-direction:column; gap:12px;">
        ${user2Content}
    </div>
    `;
    
    html = html.substring(0, mainStart + html.substring(mainStart).indexOf('>') + 1) + newMainContent + html.substring(mainEnd);
}

// 1. Expense Report Screen
const expenseUser2 = `
<div class="custom-report-card" style="padding: 16px;">
    <div style="font-size:16px; font-weight:700; color:var(--color-text); margin-bottom:4px;">Umesh Chandra Rav</div>
    <div style="font-size:13px; color:var(--color-text-tertiary); margin-bottom:16px; padding-bottom:12px; border-bottom:1px solid var(--color-border);">Code: sael001</div>
    
    <div class="info-row"><span class="info-label" style="font-weight:600;">Approve Level:</span><span class="info-val">ET</span></div>
    <div class="info-row"><span class="info-label" style="font-weight:600;">Expense Type:</span><span class="info-val">AIR TICKET APPROVAL DOMESTIC</span></div>
    <div class="info-row"><span class="info-label" style="font-weight:600;">Distance:</span><span class="info-val"></span></div>
    <div class="info-row"><span class="info-label" style="font-weight:600;">Transport Mode:</span><span class="info-val"></span></div>
    <div class="info-row"><span class="info-label" style="font-weight:600;">Requesting Amount:</span><span class="info-val">5.00</span></div>
    <div class="info-row"><span class="info-label" style="font-weight:600;">Sanction Amount:</span><span class="info-val">3.00</span></div>
    <div class="info-row"><span class="info-label" style="font-weight:600;">From Date:</span><span class="info-val">03/27/2026 12:00:00 AM</span></div>
    <div class="info-row"><span class="info-label" style="font-weight:600;">To Date:</span><span class="info-val">03/27/2026 12:00:00 AM</span></div>
    
    <div style="display:flex; align-items:center; margin-top:16px; font-size:13px; font-weight:700; gap:8px;">
        <span>Status:</span> <span style="background:rgba(239,68,68,0.1); border:1px solid #ef4444; color:#ef4444; border-radius:16px; padding:4px 12px; font-weight:600;">Rejected</span>
    </div>
</div>
<div class="custom-report-card" style="padding: 16px;">
    <div style="font-size:16px; font-weight:700; color:var(--color-text); margin-bottom:4px;">Umesh Chandra Rav</div>
    <div style="font-size:13px; color:var(--color-text-tertiary); margin-bottom:16px; padding-bottom:12px; border-bottom:1px solid var(--color-border);">Code: sael001</div>
    
    <div class="info-row"><span class="info-label" style="font-weight:600;">Approve Level:</span><span class="info-val">ET</span></div>
    <div class="info-row"><span class="info-label" style="font-weight:600;">Expense Type:</span><span class="info-val">AIR TICKET APPROVAL DOMESTIC</span></div>
    <div class="info-row"><span class="info-label" style="font-weight:600;">Distance:</span><span class="info-val"></span></div>
    <div class="info-row"><span class="info-label" style="font-weight:600;">Transport Mode:</span><span class="info-val"></span></div>
    <div class="info-row"><span class="info-label" style="font-weight:600;">Requesting Amount:</span><span class="info-val">588.00</span></div>
    <div class="info-row"><span class="info-label" style="font-weight:600;">Sanction Amount:</span><span class="info-val">1.00</span></div>
    <div class="info-row"><span class="info-label" style="font-weight:600;">From Date:</span><span class="info-val">03/19/2026 12:00:00 AM</span></div>
    <div class="info-row"><span class="info-label" style="font-weight:600;">To Date:</span><span class="info-val">03/19/2026 12:00:00 AM</span></div>
    
    <div style="display:flex; align-items:center; margin-top:16px; font-size:13px; font-weight:700; gap:8px;">
        <span>Status:</span> <span style="background:rgba(59,130,246,0.1); border:1px solid #3b82f6; color:#3b82f6; border-radius:16px; padding:4px 12px; font-weight:600;">Closed</span>
    </div>
</div>
`;
updateScreenContent('expense-report-screen', expenseUser2);

// 2. OD Tour Report Screen
const odTourUser2 = `
<div class="custom-report-card" style="padding: 16px;">
    <div style="font-size:16px; font-weight:700; color:var(--color-text); margin-bottom:4px;">Umesh Chandra Rav</div>
    <div style="font-size:13px; color:var(--color-text-tertiary); margin-bottom:16px; padding-bottom:12px; border-bottom:1px solid var(--color-border);">Emplyoyee Code: sael001</div>
    
    <div class="info-row"><span class="info-label" style="font-weight:600;">Leave Type:</span><span class="info-val">OD</span></div>
    <div class="info-row"><span class="info-label" style="font-weight:600;">Leave Applied:</span><span class="info-val">02/06/2026</span></div>
    <div class="info-row"><span class="info-label" style="font-weight:600;">From Date:</span><span class="info-val">02/05/2026</span></div>
    <div class="info-row"><span class="info-label" style="font-weight:600;">To Date:</span><span class="info-val">02/05/2026</span></div>
    <div class="info-row"><span class="info-label" style="font-weight:600;">In Time:</span><span class="info-val">07:29</span></div>
    <div class="info-row"><span class="info-label" style="font-weight:600;">Out Time:</span><span class="info-val">09:29</span></div>
    <div class="info-row"><span class="info-label" style="font-weight:600;">Remarks:</span><span class="info-val">Test</span></div>
    
    <div style="display:flex; justify-content:space-between; align-items:center; margin-top:16px; font-size:13px; font-weight:700;">
        <div style="display:flex; align-items:center; gap:8px;">
            <span>Status:</span> <span style="background:rgba(59,130,246,0.1); border:1px solid #3b82f6; color:#3b82f6; border-radius:16px; padding:4px 12px; font-weight:600;">Still Pending</span>
        </div>
        <button class="ghost-btn" style="color:#ef4444; border:1px solid #ef4444; border-radius:6px; padding:4px 12px; font-size:12px; font-weight:600; height:auto;">Delete</button>
    </div>
</div>
<div class="custom-report-card" style="padding: 16px;">
    <div style="font-size:16px; font-weight:700; color:var(--color-text); margin-bottom:4px;">Umesh Chandra Rav</div>
    <div style="font-size:13px; color:var(--color-text-tertiary); margin-bottom:16px; padding-bottom:12px; border-bottom:1px solid var(--color-border);">Emplyoyee Code: sael001</div>
    
    <div class="info-row"><span class="info-label" style="font-weight:600;">Leave Type:</span><span class="info-val">OD</span></div>
    <div class="info-row"><span class="info-label" style="font-weight:600;">Leave Applied:</span><span class="info-val">30/03/2026</span></div>
    <div class="info-row"><span class="info-label" style="font-weight:600;">From Date:</span><span class="info-val">30/03/2026</span></div>
    <div class="info-row"><span class="info-label" style="font-weight:600;">To Date:</span><span class="info-val">30/03/2026</span></div>
    <div class="info-row"><span class="info-label" style="font-weight:600;">In Time:</span><span class="info-val"></span></div>
    <div class="info-row"><span class="info-label" style="font-weight:600;">Out Time:</span><span class="info-val"></span></div>
    <div class="info-row"><span class="info-label" style="font-weight:600;">Remarks:</span><span class="info-val">yj</span></div>
    
    <div style="display:flex; align-items:center; margin-top:16px; font-size:13px; font-weight:700; gap:8px;">
        <span>Status:</span> <span style="background:rgba(34,197,94,0.1); border:1px solid #22c55e; color:#22c55e; border-radius:16px; padding:4px 12px; font-weight:600;">Approved</span>
    </div>
</div>
`;
updateScreenContent('od-tour-report-screen', odTourUser2);

// 3. Applied Leave Report Screen
const appliedLeaveUser2 = `
<div class="custom-report-card" style="padding: 16px;">
    <div style="font-size:16px; font-weight:700; color:var(--color-text); margin-bottom:4px;">Umesh Chandra Rav</div>
    <div style="font-size:13px; color:var(--color-text-tertiary); margin-bottom:16px; padding-bottom:12px; border-bottom:1px solid var(--color-border);">Code: sael001</div>
    
    <div class="info-row"><span class="info-label" style="font-weight:600;">No of Leave:</span><span class="info-val">0.5</span></div>
    <div class="info-row"><span class="info-label" style="font-weight:600;">Leave Type:</span><span class="info-val">Privilege Leave</span></div>
    <div class="info-row"><span class="info-label" style="font-weight:600;">From Date:</span><span class="info-val">03/04/2026</span></div>
    <div class="info-row"><span class="info-label" style="font-weight:600;">To Date:</span><span class="info-val">03/04/2026</span></div>
    <div class="info-row"><span class="info-label" style="font-weight:600;">Remarks:</span><span class="info-val">uu</span></div>
    
    <div style="display:flex; align-items:center; margin-top:16px; font-size:13px; font-weight:700; gap:8px;">
        <span>Status:</span> <span style="background:rgba(34,197,94,0.1); border:1px solid #22c55e; color:#22c55e; border-radius:16px; padding:4px 12px; font-weight:600;">Approved</span>
    </div>
</div>
<div class="custom-report-card" style="padding: 16px;">
    <div style="font-size:16px; font-weight:700; color:var(--color-text); margin-bottom:4px;">Umesh Chandra Rav</div>
    <div style="font-size:13px; color:var(--color-text-tertiary); margin-bottom:16px; padding-bottom:12px; border-bottom:1px solid var(--color-border);">Code: sael001</div>
    
    <div class="info-row"><span class="info-label" style="font-weight:600;">No of Leave:</span><span class="info-val">1.0</span></div>
    <div class="info-row"><span class="info-label" style="font-weight:600;">Leave Type:</span><span class="info-val">Privilege Leave</span></div>
    <div class="info-row"><span class="info-label" style="font-weight:600;">From Date:</span><span class="info-val">02/04/2026</span></div>
    <div class="info-row"><span class="info-label" style="font-weight:600;">To Date:</span><span class="info-val">02/04/2026</span></div>
    <div class="info-row"><span class="info-label" style="font-weight:600;">Remarks:</span><span class="info-val">hh</span></div>
    
    <div style="display:flex; align-items:center; margin-top:16px; font-size:13px; font-weight:700; gap:8px;">
        <span>Status:</span> <span style="background:rgba(34,197,94,0.1); border:1px solid #22c55e; color:#22c55e; border-radius:16px; padding:4px 12px; font-weight:600;">Approved</span>
    </div>
</div>
`;
updateScreenContent('applied-leave-report-screen', appliedLeaveUser2);

// Finally, there's a "display:flex" inline style bug that was created with data-user="2", let's fix it by relying on the CSS class instead of inline display toggles, 
// wait, my CSS was:
// body.user-2-active [data-user="1"] { display: none !important; }
// body:not(.user-2-active) [data-user="2"] { display: none !important; }
// So I don't need inline display:none! Removing it helps flexbox work better when active.
html = html.replace(/<div data-user="2" style="display:none;/g, '<div data-user="2" style="');
html = html.replace(/<div data-user="2" style="display:none;">/g, '<div data-user="2">');
html = html.replace(/<span data-user="2" style="display:none;">/g, '<span data-user="2">');
html = html.replace(/<div class="sidebar-avatar" data-user="2" style="display:none; background: #e0e7ff; color: #4338ca;">/g, '<div class="sidebar-avatar" data-user="2" style="background: #e0e7ff; color: #4338ca;">');
html = html.replace(/<div class="user-name" data-user="2" style="display:none;">/g, '<div class="user-name" data-user="2">');
html = html.replace(/<div class="user-domain" data-user="2" style="display:none;">/g, '<div class="user-domain" data-user="2">');

fs.writeFileSync('Mobile/index.html', html);
console.log("Reports updated successfully!");
