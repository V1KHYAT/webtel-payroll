const fs = require('fs');

const logPath = 'C:\\\\Users\\\\Vikhyat Kaushik\\\\.gemini\\\\antigravity\\\\brain\\\\dc31f3ce-8366-4798-9109-ce7537e5a5ba\\\\.system_generated\\\\logs\\\\transcript.jsonl';
const lines = fs.readFileSync(logPath, 'utf8').split('\n');

let latestCSS = '';
for (let line of lines) {
    if (!line.trim()) continue;
    try {
        const obj = JSON.parse(line);
        if (obj.tool_calls) {
            for (let call of obj.tool_calls) {
                if (call.name === 'write_to_file' && call.args && call.args.TargetFile && call.args.TargetFile.includes('styles.css')) {
                    latestCSS = call.args.CodeContent;
                }
                // Also check if any scripts were written that wrote the ENTIRE styles.css
            }
        }
    } catch(e) {}
}

if (latestCSS) {
    fs.writeFileSync('recovered_styles.css', latestCSS);
    console.log('Recovered CSS length:', latestCSS.length);
} else {
    console.log('No write_to_file found for styles.css');
}
