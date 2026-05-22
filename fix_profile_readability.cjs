const fs = require('fs');
let css = fs.readFileSync('Mobile/css/styles.css', 'utf8');

// 1. Make profile-scroll transparent so the app-layout gradient shows through
css = css.replace(/\.profile-scroll \{\s*background:\s*var\(--color-canvas\);/, '.profile-scroll { background: transparent !important;');

// 2. Fix ctc-hero-card colors and visibility
css = css.replace(/\.ctc-hero-card \{\s*position:\s*relative;\s*overflow:\s*hidden;\s*padding:\s*20px 18px;\s*border-radius:\s*16px;\s*background:\s*linear-gradient\(135deg, #fef08a 0%, #fde047 100%\);\s*\/\* Light Yellow Gradient \*\//g,
    '.ctc-hero-card { position: relative; overflow: hidden; padding: 20px 18px; border-radius: 16px; background: linear-gradient(135deg, #fffbeb 0%, #fef4cc 100%); border: 1px solid #fde047;');
    
css = css.replace(/\.ctc-hero-label \{\s*font-size:\s*10px;\s*font-weight:\s*700;\s*color:\s*rgba\(255,255,255,0\.7\);/g,
    '.ctc-hero-label { font-size: 10px; font-weight: 700; color: rgba(0,0,0,0.6);');
    
css = css.replace(/\.ctc-hero-amount \{\s*font-size:\s*28px;\s*font-weight:\s*800;\s*color:\s*white;/g,
    '.ctc-hero-amount { font-size: 28px; font-weight: 800; color: #09090b;');
    
css = css.replace(/\.ctc-hero-watermark \{\s*position:\s*absolute;\s*right:\s*12px;\s*bottom:\s*-8px;\s*font-size:\s*80px;\s*font-weight:\s*900;\s*color:\s*rgba\(255,255,255,0\.08\);/g,
    '.ctc-hero-watermark { position: absolute; right: 12px; bottom: -8px; font-size: 80px; font-weight: 900; color: rgba(234, 179, 8, 0.2);');

// 3. Fix prof-hero-card gradient to be the ultra-light yellow
css = css.replace(/background:\s*linear-gradient\(135deg, #fef08a 0%, #fde047 100%\);\s*\/\* Light Yellow Gradient \*\//g,
    'background: linear-gradient(135deg, #fffbeb 0%, #fef4cc 100%); border: 1px solid #fde047;');

fs.writeFileSync('Mobile/css/styles.css', css);
console.log('Fixed profile background, hero gradients, and CTC readability');
