const fs = require('fs');
let css = fs.readFileSync('Mobile/css/styles.css', 'utf8');

const newCSS = `
/* =========================================
   NEW SCREENS STYLES
   ========================================= */

/* Detailed Report Card (OD Tour / Applied Leaves) */
.detailed-report-card {
    background: #ffffff;
    border-radius: 16px;
    padding: 16px;
    margin-bottom: 12px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.03);
}
.drc-header {
    display: flex;
    flex-direction: column;
    padding-bottom: 12px;
    margin-bottom: 12px;
    border-bottom: 1px solid var(--color-border);
}
.drc-header strong {
    font-size: 15px;
    color: var(--color-text);
    font-weight: 700;
}
.drc-header span {
    font-size: 12px;
    color: var(--color-text-tertiary);
    margin-top: 2px;
}
.drc-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    font-size: 13px;
}
.drc-row span {
    color: var(--color-text-secondary);
    font-weight: 600;
}
.drc-row strong {
    color: var(--color-text);
    font-weight: 600;
    max-width: 60%;
    text-align: right;
    word-break: break-word;
}
.drc-status {
    margin-top: 16px;
    align-items: center;
}
.drc-pill-blue {
    background: #e0f2fe;
    color: #0284c7;
    padding: 6px 12px;
    border-radius: var(--radius-full);
    font-size: 11px;
    font-weight: 700;
    text-align: center;
    border: 1px solid #bae6fd;
}
.drc-pill-red {
    background: #fee2e2;
    color: #ef4444;
    padding: 6px 12px;
    border-radius: var(--radius-full);
    font-size: 11px;
    font-weight: 700;
    text-align: center;
    border: 1px solid #fca5a5;
}
.drc-actions {
    margin-top: 16px;
    display: flex;
    justify-content: flex-end;
}

/* Forms */
.expense-form-group {
    margin-bottom: 16px;
}
.expense-form-group select.form-input {
    appearance: none;
    background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%2364748b%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E");
    background-repeat: no-repeat;
    background-position: right 12px center;
    background-size: 10px auto;
}
`;

if (!css.includes('.detailed-report-card')) {
    css += '\n' + newCSS;
    fs.writeFileSync('Mobile/css/styles.css', css);
}
console.log('Added new CSS.');
