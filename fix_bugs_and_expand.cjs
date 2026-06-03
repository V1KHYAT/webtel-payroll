const fs = require('fs');

// 1. Fix HTML '\n' and Load Data Button
let html = fs.readFileSync('Mobile/index.html', 'utf8');

// Replace literal '\n'
html = html.replace(/\\n/g, '');

// Fix Load Data button
html = html.replace(/<button class="btn btn-primary" onclick="mockSalaryLoad\(\)" style="flex: 1; background: var\(--color-text\); color: var\(--color-surface\); border-radius: 8px;">/g, 
`<button class="btn btn-primary" onclick="mockSalaryLoad()" style="flex: 1; background: var(--color-accent); color: white; border: none; font-weight: 600; border-radius: 8px;">`);

// Replace onclick="this.parentElement.classList.toggle('expanded')" with onclick="toggleCard(this)"
html = html.replace(/onclick="this\.parentElement\.classList\.toggle\('expanded'\)"/g, 'onclick="toggleCard(this)"');

fs.writeFileSync('Mobile/index.html', html);

// 2. Fix CSS for smooth expansion
let css = fs.readFileSync('Mobile/css/styles.css', 'utf8');

// Remove old display: none
css = css.replace(/\.crc-expanded-content\s*\{[\s\S]*?animation:\s*fadeIn\s*0\.3s\s*ease;\s*\}/, 
`.crc-expanded-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-in-out;
}`);

// Remove the display block rule
css = css.replace(/\.custom-report-card\.expanded\s*\.crc-expanded-content\s*\{\s*display:\s*block;\s*\}/, '');

fs.writeFileSync('Mobile/css/styles.css', css);

// 3. Add JS toggleCard function
let js = fs.readFileSync('Mobile/js/app.js', 'utf8');

const toggleScript = `
window.toggleCard = function(headerEl) {
    const card = headerEl.parentElement;
    const isExpanded = card.classList.contains('expanded');
    const container = card.closest('.scrollable-cards');
    
    // Close all other cards
    if (container) {
        const allCards = container.querySelectorAll('.custom-report-card');
        allCards.forEach(c => {
            if (c !== card) {
                c.classList.remove('expanded');
                const content = c.querySelector('.crc-expanded-content');
                if (content) {
                    content.style.maxHeight = null;
                }
            }
        });
    }
    
    // Toggle current
    const content = card.querySelector('.crc-expanded-content');
    if (!isExpanded) {
        card.classList.add('expanded');
        if (content) {
            // Give it enough max-height to fit the content, plus extra buffer to prevent cut-offs
            content.style.maxHeight = (content.scrollHeight + 50) + "px";
        }
    } else {
        card.classList.remove('expanded');
        if (content) {
            content.style.maxHeight = null;
        }
    }
};
`;

if (!js.includes('window.toggleCard = function')) {
    js += '\n' + toggleScript;
    fs.writeFileSync('Mobile/js/app.js', js);
}

console.log('Fixes applied successfully.');
