const fs = require('fs');
let css = fs.readFileSync('Mobile/css/styles.css', 'utf8');

const newCSS = `

/* ========================================================
   HOME PAGE REDESIGN
   ======================================================== */
.home-hero-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 45vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: 0;
}

.home-fixed-header {
    position: absolute;
    top: env(safe-area-inset-top, 44px);
    left: 0;
    width: 100%;
    z-index: 10;
    padding: 0 16px;
}

.base-header.transparent-header {
    background: transparent;
    box-shadow: none;
    border-bottom: none;
    padding: 8px 0;
}

.circular-btn {
    background: #ffffff !important;
    border-radius: 50% !important;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}

.user-greeting.dark-text h1, .user-greeting.dark-text span {
    color: #1e293b;
}

.home-scroll-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    z-index: 5;
    padding: 0;
    padding-top: calc(env(safe-area-inset-top, 44px) + 80px);
}

.home-content-container {
    background: linear-gradient(180deg, #ffffff 0%, #f9fafb 100%);
    border-radius: 28px 28px 0 0;
    min-height: calc(100vh - 150px);
    padding: 24px 16px 80px 16px;
    margin-top: 15vh;
    box-shadow: 0 -8px 24px rgba(0,0,0,0.05);
    position: relative;
    z-index: 2;
}

.attendance-hero-card {
    padding: 24px;
    border-radius: 24px;
    border: none;
    box-shadow: 0 8px 30px rgba(0,0,0,0.04);
}

.shift-pill {
    background: #f8f9fa;
    border-radius: 20px;
    padding: 8px 16px;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 13px;
    font-weight: 600;
    color: #1e293b;
    margin: 0 auto 24px auto;
}

.attendance-time-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
}

.time-display {
    display: flex;
    flex-direction: column;
}

.time-large {
    font-size: 52px;
    font-weight: 700;
    color: #0f172a;
    line-height: 1;
}

.time-ampm {
    font-size: 20px;
    font-weight: 500;
    color: #64748b;
    margin-left: 4px;
}

.time-sub {
    font-size: 14px;
    color: #475569;
    margin-top: 8px;
}

.shift-details {
    background: #f8f9fa;
    border-radius: 12px;
    padding: 12px 16px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    min-width: 120px;
}

.shift-row {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    color: #64748b;
    font-weight: 500;
}

.shift-row .shift-val {
    color: #3b82f6;
}

.btn-attendance {
    background: #ffc107;
    color: #000;
    font-weight: 600;
    font-size: 16px;
    border-radius: 16px;
    box-shadow: 0 4px 12px rgba(255, 193, 7, 0.3);
    border: none;
    width: 100%;
    padding: 16px;
    cursor: pointer;
}

.alert-card {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 16px;
    background: #fffdf5;
    border-radius: 16px;
    border: 1px solid #fef08a;
    gap: 12px;
    margin-bottom: 24px;
    width: 100%;
    cursor: pointer;
}

.alert-icon {
    background: #fef08a;
    color: #ca8a04;
    width: 32px;
    height: 32px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
}

.alert-text {
    flex: 1;
    font-size: 14px;
    color: #334155;
    text-align: left;
}

.alert-text .summary-count {
    font-weight: 700;
    color: #0f172a;
}

.alert-chevron {
    color: #64748b;
    font-size: 20px;
}

.leave-balance-card {
    padding: 24px;
    border: none;
    box-shadow: 0 8px 30px rgba(0,0,0,0.04);
}

.leave-balance-huge {
    font-size: 40px;
    font-weight: 700;
    color: #0f172a;
    margin: 12px 0 20px 0;
}

.leave-balance-row {
    display: flex;
    justify-content: space-between;
    padding: 12px 0;
    border-bottom: 1px solid #f1f5f9;
    font-size: 14px;
    color: #475569;
}

.leave-balance-row:last-child {
    border-bottom: none;
    padding-bottom: 0;
}

.leave-balance-row .val {
    font-weight: 600;
    color: #0f172a;
}

.feed-card {
    padding: 24px;
    border: none;
    box-shadow: 0 8px 30px rgba(0,0,0,0.04);
}

.feed-list .feed-item {
    padding: 0;
    border-bottom: none;
}
.feed-chevron {
    color: #64748b;
    font-size: 20px;
    margin-left: auto;
}
.warning-bg {
    background: #fffbeb !important;
    color: #d97706 !important;
    width: 40px;
    height: 40px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 12px;
}

/* Global solid background for non-home screens */
.app-layout {
    background: #f9fafb !important;
}

#home-screen.app-layout {
    background: #ffffff !important;
}

.custom-report-card {
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.04);
    border-radius: 20px;
    border: 1px solid rgba(0,0,0,0.03);
}

`;

if (!css.includes('HOME PAGE REDESIGN')) {
    css += newCSS;
    fs.writeFileSync('Mobile/css/styles.css', css);
    console.log('CSS updated');
} else {
    console.log('CSS already updated');
}
