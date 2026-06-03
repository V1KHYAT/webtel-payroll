const fs = require('fs');

let html = fs.readFileSync('Mobile/index.html', 'utf8');

// 1. Revert Applied Leave User 2 content
const screenStart = html.indexOf('id="applied-leave-report-screen"');
const user2Start = html.indexOf('<div data-user="2"', screenStart);
const mainEnd = html.indexOf('</main>', user2Start);

if (screenStart === -1 || user2Start === -1) {
    console.error("Could not find data-user='2' in applied leave report screen");
    process.exit(1);
}

const revertedUser2Content = `
<div data-user="2" style="padding-top: 8px; display:flex; flex-direction:column; gap:16px;">
    <div class="custom-report-card" style="padding: 16px; margin-bottom: 12px;">
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
    <div class="custom-report-card" style="padding: 16px; margin-bottom: 12px;">
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
</div>
`;

html = html.substring(0, user2Start) + revertedUser2Content + html.substring(mainEnd);

// 2. Fix hardcoded inline styles for #2563eb
html = html.replace(/#2563eb/g, '#60a5fa');

fs.writeFileSync('Mobile/index.html', html);
console.log("Reverted applied leave and fixed inline blues!");
