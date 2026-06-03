const fs = require('fs');

let css = fs.readFileSync('Mobile/css/styles.css', 'utf8');

const attendanceStyles = `
/* =========================================
   ATTENDANCE PAGE STYLES
   ========================================= */

/* Tabs Component */
.tabs-container {
    display: flex;
    margin: 0 var(--space-4) var(--space-4);
    background: #f4f4f5; /* Zinc-100 */
    border-radius: var(--radius-full);
    padding: 4px;
}
.tab-btn {
    flex: 1;
    text-align: center;
    padding: 10px 0;
    font-size: var(--text-sm);
    font-weight: 600;
    color: var(--color-text-secondary);
    background: transparent;
    border: none;
    border-radius: var(--radius-full);
    cursor: pointer;
    transition: all 0.2s ease;
    font-family: inherit;
}
.tab-btn.active {
    background: var(--color-surface);
    color: var(--color-text);
    box-shadow: 0 2px 8px rgba(0,0,0,0.05); /* Soft localized elevation for active tab */
}

/* Filters */
.attendance-filters {
    display: flex;
    gap: var(--space-3);
    margin-bottom: var(--space-4);
}
.filter-box {
    flex: 1;
    position: relative;
}
.filter-label {
    position: absolute;
    top: -8px;
    left: 12px;
    background: var(--color-bg); /* Match app bg to clip border */
    padding: 0 4px;
    font-size: 10px;
    font-weight: 600;
    color: var(--color-text-tertiary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    z-index: 1;
}
.filter-select {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    padding: 12px 14px;
    font-size: var(--text-sm);
    font-weight: 600;
    color: var(--color-text);
    cursor: pointer;
}
.filter-select iconify-icon {
    color: var(--color-text-tertiary);
}

/* Lists */
.list-header-row {
    display: flex;
    align-items: center;
    background: #e0f2fe; /* Light blue matching reference */
    padding: 12px 16px;
    border-radius: var(--radius-md) var(--radius-md) 0 0;
    font-size: 12px;
    font-weight: 700;
    color: #0c4a6e; /* Sky 900 */
    border: 1px solid #bae6fd;
    border-bottom: none;
}
.report-list {
    display: flex;
    flex-direction: column;
    gap: 0;
    border-radius: 0 0 var(--radius-md) var(--radius-md);
    overflow: hidden;
    margin-bottom: 24px;
    border-bottom: 1px solid var(--color-border);
}
.report-item, .log-item {
    display: flex;
    align-items: center;
    background: var(--color-surface);
    padding: 14px 16px;
    border: 1px solid var(--color-border);
    border-top: none;
}
/* Report Specifics */
.report-day-col {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.report-day-col strong {
    font-size: var(--text-lg);
    font-weight: 800;
    color: #ef4444; /* Red */
    line-height: 1;
}
.report-day-col span {
    font-size: 11px;
    font-weight: 600;
    color: #ef4444;
    opacity: 0.7;
}
.report-punches-col {
    flex: 2;
    font-size: var(--text-sm);
    font-weight: 500;
    color: var(--color-text-secondary);
}
.report-status-col {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 8px;
}
.report-action-btn {
    padding: 6px 10px;
    font-size: 10px;
    border-radius: var(--radius-full);
}
.status-pill-red {
    background: #fef2f2;
    border: 1px solid #fca5a5;
    color: #ef4444;
    font-size: 10px;
    font-weight: 700;
    padding: 4px 8px;
    border-radius: var(--radius-full);
}

/* Logs Specifics */
.log-item {
    display: flex;
    align-items: center;
}
.log-sr {
    width: 40px;
    font-size: var(--text-sm);
    font-weight: 700;
    color: var(--color-text);
}
.log-date {
    flex: 1;
    font-size: var(--text-sm);
    font-weight: 500;
    color: var(--color-text-secondary);
}
.log-time {
    width: 70px;
    display: flex;
    justify-content: flex-end;
}
.time-pill-green {
    background: #dcfce7;
    border: 1px solid #bbf7d0;
    color: #166534;
    font-size: 12px;
    font-weight: 700;
    padding: 4px 10px;
    border-radius: var(--radius-full);
    font-variant-numeric: tabular-nums;
}
`;

css = css + '\n' + attendanceStyles;

fs.writeFileSync('Mobile/css/styles.css', css);
console.log('Added Attendance styles');
