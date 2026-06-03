const fs = require('fs');
let html = fs.readFileSync('Mobile/index.html', 'utf8');
let css = fs.readFileSync('Mobile/css/styles.css', 'utf8');

// 1. Fix Button Colors in CSS (Make it a very noticeable soft sky blue, or indigo)
// "make the blue buttons a lighter blue as they are currently fighting with our main yellow accent color"
// Let's use a nice pastel indigo: #818cf8, or a very light sky blue #38bdf8
css = css.replace('.btn-primary { background-color: #0ea5e9; color: white; }', '.btn-primary { background-color: #60a5fa; color: white; }');
css = css.replace('.btn-primary:hover { background-color: #0ea5e9; opacity: 1; }', '.btn-primary:hover { background-color: #60a5fa; opacity: 1; }');
css = css.replace('.btn-primary:active { background-color: #0284c7 !important; filter: brightness(0.9); }', '.btn-primary:active { background-color: #3b82f6 !important; filter: brightness(0.9); }');

// Also update the floating button shadow
css = css.replace('rgba(37, 99, 235, 0.4)', 'rgba(96, 165, 250, 0.4)');
fs.writeFileSync('Mobile/css/styles.css', css);

// 2. Fix the missing info and 'expanded' state on the first card
const screenStart = html.indexOf('id="applied-leave-report-screen"');
const user2Start = html.indexOf('<div data-user="2"', screenStart);
const mainEnd = html.indexOf('</main>', user2Start);

const newCardData = `
<div data-user="2" style="padding-top: 8px; display:flex; flex-direction:column; gap:16px;">
    <!-- Umesh Card 1 -->
    <div class="custom-report-card crc-green expanded">
        <div class="crc-header" onclick="toggleCard(this)" style="cursor: pointer;">
            <div class="crc-header-left">
                <div class="crc-icon-box green"><iconify-icon icon="lucide:check-circle"></iconify-icon></div>
                <div>
                    <div class="crc-title">Privilege Leave</div>
                    <div class="crc-subtitle">0.5 Days</div>
                </div>
            </div>
            <div style="display: flex; align-items: center; gap: 8px;">
                <div class="crc-pill green">
                    <span>Approved</span>
                </div>
                <div class="expand-chevron"><iconify-icon icon="lucide:chevron-down"></iconify-icon></div>
            </div>
        </div>
        <div class="crc-expanded-content" style="max-height: 500px;">
            <div style="height: 16px;"></div>
            <div class="crc-data-box gray">
                <div class="crc-data-col">
                    <span class="crc-data-label">Code</span>
                    <span class="crc-data-value">sael001</span>
                </div>
                <div class="crc-data-col" style="padding-top: 12px; border-top: 1px solid rgba(0,0,0,0.05);">
                    <span class="crc-data-label">From Date</span>
                    <span class="crc-data-value">03/04/2026</span>
                </div>
                <div class="crc-data-col" style="padding-top: 12px; border-top: 1px solid rgba(0,0,0,0.05);">
                    <span class="crc-data-label">To Date</span>
                    <span class="crc-data-value">03/04/2026</span>
                </div>
                <div class="crc-data-col" style="padding-top: 12px; border-top: 1px solid rgba(0,0,0,0.05);">
                    <span class="crc-data-label">Remarks</span>
                    <span class="crc-data-value" style="line-height: 1.4;">uu</span>
                </div>
            </div>
        </div>
    </div>

    <!-- Umesh Card 2 -->
    <div class="custom-report-card crc-green">
        <div class="crc-header" onclick="toggleCard(this)" style="cursor: pointer;">
            <div class="crc-header-left">
                <div class="crc-icon-box green"><iconify-icon icon="lucide:check-circle"></iconify-icon></div>
                <div>
                    <div class="crc-title">Privilege Leave</div>
                    <div class="crc-subtitle">1.0 Days</div>
                </div>
            </div>
            <div style="display: flex; align-items: center; gap: 8px;">
                <div class="crc-pill green">
                    <span>Approved</span>
                </div>
                <div class="expand-chevron"><iconify-icon icon="lucide:chevron-down"></iconify-icon></div>
            </div>
        </div>
        <div class="crc-expanded-content">
            <div style="height: 16px;"></div>
            <div class="crc-data-box gray">
                <div class="crc-data-col">
                    <span class="crc-data-label">Code</span>
                    <span class="crc-data-value">sael001</span>
                </div>
                <div class="crc-data-col" style="padding-top: 12px; border-top: 1px solid rgba(0,0,0,0.05);">
                    <span class="crc-data-label">From Date</span>
                    <span class="crc-data-value">02/04/2026</span>
                </div>
                <div class="crc-data-col" style="padding-top: 12px; border-top: 1px solid rgba(0,0,0,0.05);">
                    <span class="crc-data-label">To Date</span>
                    <span class="crc-data-value">02/04/2026</span>
                </div>
                <div class="crc-data-col" style="padding-top: 12px; border-top: 1px solid rgba(0,0,0,0.05);">
                    <span class="crc-data-label">Remarks</span>
                    <span class="crc-data-value" style="line-height: 1.4;">hh</span>
                </div>
            </div>
        </div>
    </div>
</div>
`;

html = html.substring(0, user2Start) + newCardData + html.substring(mainEnd);

// Bump cache again
html = html.replace('href="css/styles.css?v=24"', 'href="css/styles.css?v=25"');
html = html.replace('href="css/styles.css?v=23"', 'href="css/styles.css?v=25"');

fs.writeFileSync('Mobile/index.html', html);
console.log("Updated!");
