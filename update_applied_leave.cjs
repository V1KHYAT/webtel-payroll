const fs = require('fs');

let html = fs.readFileSync('Mobile/index.html', 'utf8');

const screenStart = html.indexOf('id="applied-leave-report-screen"');
const user2Start = html.indexOf('<div data-user="2"', screenStart);
const mainEnd = html.indexOf('</main>', user2Start);

if (screenStart === -1 || user2Start === -1) {
    console.error("Could not find data-user='2' in applied leave report screen");
    process.exit(1);
}

const styledUser2Content = `
<div data-user="2" style="padding-top: 8px; display:flex; flex-direction:column; gap:16px;">
    <!-- Umesh Card 1 -->
    <div class="custom-report-card crc-green">
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
        <div class="crc-expanded-content">
            <div style="height: 16px;"></div>
            <div class="crc-data-box gray">
                <div class="crc-data-col">
                    <span class="crc-data-label">Employee Info</span>
                    <span class="crc-data-value">Umesh Chandra Rav (sael001)</span>
                </div>
                <div class="crc-data-col" style="padding-top: 12px; border-top: 1px solid rgba(0,0,0,0.05);">
                    <span class="crc-data-label">Duration</span>
                    <span class="crc-data-value">03/04/2026 – 03/04/2026</span>
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
                    <span class="crc-data-label">Employee Info</span>
                    <span class="crc-data-value">Umesh Chandra Rav (sael001)</span>
                </div>
                <div class="crc-data-col" style="padding-top: 12px; border-top: 1px solid rgba(0,0,0,0.05);">
                    <span class="crc-data-label">Duration</span>
                    <span class="crc-data-value">02/04/2026 – 02/04/2026</span>
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

html = html.substring(0, user2Start) + styledUser2Content + html.substring(mainEnd);

fs.writeFileSync('Mobile/index.html', html);
console.log("Applied Leave Report for User 2 restyled!");
