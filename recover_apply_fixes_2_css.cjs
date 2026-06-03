const fs = require('fs');

let css = fs.readFileSync('Mobile/css/styles.css', 'utf8');

const additionalCSS = `
/* Header Inline Toast */
.base-header {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    overflow: hidden;
    flex-direction: column;
}
.header-top-row {
    transition: margin 0.3s ease;
}
.header-toast-msg-inline {
    width: 100%;
    text-align: center;
    font-size: 13px;
    font-weight: 600;
    color: #b45309; /* Darker amber */
    max-height: 0;
    opacity: 0;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    margin-top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
}
.base-header.toast-expanded .header-toast-msg-inline {
    max-height: 40px;
    opacity: 1;
    margin-top: 8px;
    margin-bottom: 4px;
}
.base-header.toast-expanded {
    border-radius: 24px;
}

/* Feed Icon Spacing Fix (Swiss Grid) */
.feed-icon {
    width: 36px;
    height: 36px;
    font-size: 16px;
    margin-right: 12px; /* reduced from typical larger margins */
}
.feed-item {
    gap: 0;
}

/* Fix circular-btn colors */
.circular-btn {
    background: #fef9c3 !important; /* very light yellow circle */
}
.base-header .ghost-btn.circular-btn iconify-icon,
.base-header .circular-btn iconify-icon,
.circular-btn iconify-icon {
    color: var(--color-accent) !important; /* yellow icon */
}

/* Swiss Grid Card standardization */
.custom-report-card, .data-card, .bento-box {
    border-radius: 20px;
    padding: 16px;
    margin-bottom: 16px;
}

`;

if (!css.includes('.header-toast-msg-inline')) {
    css += '\n' + additionalCSS;
    fs.writeFileSync('Mobile/css/styles.css', css);
    console.log('CSS updated with fixes from apply_fixes_2');
} else {
    console.log('CSS already updated.');
}
