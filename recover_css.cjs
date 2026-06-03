const fs = require('fs');

let css = fs.readFileSync('Mobile/css/styles.css', 'utf8');

function appendIfMissing(snippet, identifier) {
    if (!css.includes(identifier)) {
        css += '\n' + snippet;
    }
}

// 1. add_attendance_styles.cjs
try {
    const s1 = fs.readFileSync('add_attendance_styles.cjs', 'utf8');
    const match1 = s1.match(/const attendanceStyles = `([\s\S]*?)`;/);
    if(match1) appendIfMissing(match1[1], '.attendance-page-screen');
} catch(e) {}

// 2. fix_ui.cjs
try {
    const s2 = fs.readFileSync('fix_ui.cjs', 'utf8');
    const match2 = s2.match(/const additionalCSS = `([\s\S]*?)`;/);
    if(match2) appendIfMissing(match2[1], '.nav-link.active-link');
} catch(e) {}

// 3. add_report_card_css.cjs
try {
    const s3 = fs.readFileSync('add_report_card_css.cjs', 'utf8');
    const match3 = s3.match(/const newCSS = `([\s\S]*?)`;/);
    if(match3) appendIfMissing(match3[1], '.report-card');
} catch(e) {}

// 4. update_attendance_data.cjs
try {
    const s4 = fs.readFileSync('update_attendance_data.cjs', 'utf8');
    const match4 = s4.match(/const additionalStyles = `([\s\S]*?)`;/);
    if(match4) appendIfMissing(match4[1], '.rc-pill-present');
} catch(e) {}

// 5. redesign_logs_tab.cjs
try {
    const s5 = fs.readFileSync('redesign_logs_tab.cjs', 'utf8');
    const match5 = s5.match(/const newLogsCSS = `([\s\S]*?)`;/);
    if(match5) appendIfMissing(match5[1], '.log-card {');
} catch(e) {}

// 6. add_new_css.cjs
try {
    const s6 = fs.readFileSync('add_new_css.cjs', 'utf8');
    const match6 = s6.match(/const newCSS = `([\s\S]*?)`;/);
    if(match6) appendIfMissing(match6[1], '.detailed-report-card');
} catch(e) {}

fs.writeFileSync('Mobile/css/styles.css', css);
console.log('Recovered CSS successfully. New length:', css.length);
