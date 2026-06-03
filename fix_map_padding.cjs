const fs = require('fs');

// 1. Fix Bottom Sheet Padding
let css = fs.readFileSync('Mobile/css/styles.css', 'utf8');

// The original padding has var(--space-8) for bottom, which is too large. Let's make it 32px or 24px
css = css.replace('padding: var(--space-4) var(--space-6) var(--space-8) var(--space-6);', 'padding: var(--space-4) var(--space-6) 24px var(--space-6);');
fs.writeFileSync('Mobile/css/styles.css', css);


// 2. Add actual Google Maps Embed
let html = fs.readFileSync('Mobile/index.html', 'utf8');

const oldMapStage = `<div class="attendance-map-stage">
                            <div class="map-placeholder-bg"></div>
                            <div class="map-pin">
                                <iconify-icon icon="solar:map-point-bold"></iconify-icon>
                            </div>
                        </div>`;

const newMapStage = `<div class="attendance-map-stage" style="pointer-events: none;">
                            <iframe 
                                src="https://maps.google.com/maps?q=107-109,%20Rajendra%20Place,%20New%20Delhi&t=&z=16&ie=UTF8&iwloc=&output=embed" 
                                width="100%" 
                                height="100%" 
                                frameborder="0" 
                                style="border:0; position: absolute; inset: 0;" 
                                allowfullscreen="" 
                                aria-hidden="false" 
                                tabindex="0">
                            </iframe>
                        </div>`;

if (html.includes('<div class="map-placeholder-bg"></div>')) {
    // Just find the block and replace
    const startIdx = html.indexOf('<div class="attendance-map-stage">');
    const endIdx = html.indexOf('</div>', html.indexOf('</div>', html.indexOf('<div class="map-pin">')) + 6) + 6;
    
    if (startIdx !== -1) {
        html = html.substring(0, startIdx) + newMapStage + html.substring(endIdx);
        fs.writeFileSync('Mobile/index.html', html);
        console.log('Added Google Maps embed.');
    }
} else {
    console.log('Could not find map placeholder.');
}

console.log('Padding and map issues resolved.');
