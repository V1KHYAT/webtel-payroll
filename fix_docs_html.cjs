const fs = require('fs');

let html = fs.readFileSync('Mobile/index.html', 'utf8');

let newDocs = `
                        <!-- ========== DOCUMENTS ========== -->
                        <div class="prof-section">
                            <div class="prof-section-header">
                                <div class="prof-section-icon"><iconify-icon icon="solar:folder-with-files-bold"></iconify-icon></div>
                                <span class="prof-section-title">Documents</span>
                            </div>
                            <div class="document-list" style="margin-top: 8px;">
                                <div class="doc-item">
                                    <div class="doc-icon"><iconify-icon icon="solar:document-text-bold"></iconify-icon></div>
                                    <div class="doc-info">
                                        <div class="doc-title">Company Policy 2025</div>
                                        <div class="doc-sub">company_policy_2025.pdf</div>
                                    </div>
                                    <button class="ghost-btn doc-download"><iconify-icon icon="solar:import-bold"></iconify-icon></button>
                                </div>
                                <div class="doc-item">
                                    <div class="doc-icon"><iconify-icon icon="solar:chart-square-bold"></iconify-icon></div>
                                    <div class="doc-info">
                                        <div class="doc-title">Quarterly Report Q3</div>
                                        <div class="doc-sub">report_q3_2025.xlsx</div>
                                    </div>
                                    <button class="ghost-btn doc-download"><iconify-icon icon="solar:import-bold"></iconify-icon></button>
                                </div>
                            </div>
                        </div>`;

html = html.replace(/<!-- ========== DOCUMENTS ========== -->\s*<div class="data-card">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/, newDocs);

fs.writeFileSync('Mobile/index.html', html);
console.log('Fixed documents section structure');
