const fs = require('fs');

let css = fs.readFileSync('Mobile/css/styles.css', 'utf8');

// I will append the new CSS and also remove the old specific ones if possible.
// Or just let the new CSS override. Since I used new class names, they won't conflict.

const newCSS = `
/* =========================================
   ATTENDANCE REPORT CARD (NEW DESIGN)
   ========================================= */

.new-report-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
    border: none;
    background: transparent;
    border-radius: 0;
    margin-bottom: 24px;
}

.report-card {
    display: flex;
    background: #ffffff;
    border-radius: var(--radius-lg);
    border: 1px solid var(--color-border);
    overflow: hidden;
    position: relative;
    /* Soft shadow for premium feel, matching reference */
    box-shadow: 0 4px 12px rgba(0,0,0,0.02);
}

/* LEFT COLUMN: DATE */
.rc-date {
    width: 72px;
    background: #fffdf0; /* Very light yellow beige */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 16px 8px;
    flex-shrink: 0;
}
.rc-day {
    font-size: 11px;
    font-weight: 700;
    color: var(--color-accent);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 2px;
}
.rc-num {
    font-size: 28px;
    font-weight: 800;
    color: #18181b;
    line-height: 1;
    margin-bottom: 4px;
}
.rc-month {
    font-size: 11px;
    font-weight: 600;
    color: var(--color-text-tertiary);
}

/* DIVIDER */
.rc-divider {
    position: relative;
    width: 1px;
    background: var(--color-border);
    flex-shrink: 0;
}
.rc-dot {
    position: absolute;
    left: -4px;
    top: 50%;
    transform: translateY(-50%);
    width: 8px;
    height: 8px;
    background: var(--color-accent);
    border-radius: 50%;
}

/* MIDDLE COLUMN: CONTEXT */
.rc-context {
    display: flex;
    align-items: center;
    padding: 16px;
    gap: 12px;
    flex: 1;
}
.rc-icon {
    width: 32px;
    height: 32px;
    background: #fffbeb; /* Amber 50 */
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-accent);
    font-size: 18px;
    flex-shrink: 0;
}
.rc-text {
    display: flex;
    flex-direction: column;
    gap: 4px;
}
.rc-text strong {
    font-size: var(--text-sm);
    font-weight: 700;
    color: #18181b;
    line-height: 1.2;
}
.rc-text span {
    font-size: 11px;
    font-weight: 500;
    color: var(--color-text-tertiary);
}

/* RIGHT COLUMN: ACTIONS */
.rc-actions {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    padding: 16px;
    gap: 12px;
    flex-shrink: 0;
}
.rc-btn-leave {
    display: flex;
    align-items: center;
    gap: 6px;
    background: #fffbeb;
    border: 1px solid #fef08a;
    color: #ca8a04; /* Darker yellow for text */
    padding: 6px 12px;
    border-radius: var(--radius-sm);
    font-size: 11px;
    font-weight: 600;
    cursor: pointer;
    font-family: inherit;
}
.rc-btn-leave iconify-icon {
    font-size: 14px;
}
.rc-pill-absent {
    display: flex;
    align-items: center;
    gap: 6px;
    background: #fef2f2;
    color: #ef4444;
    padding: 4px 12px;
    border-radius: var(--radius-full);
    font-size: 11px;
    font-weight: 600;
}
.rc-dot-red {
    width: 6px;
    height: 6px;
    background: #ef4444;
    border-radius: 50%;
}
`;

css = css + '\n' + newCSS;

fs.writeFileSync('Mobile/css/styles.css', css);
console.log('Added new report card styles');
