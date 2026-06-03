const fs = require('fs');

const logPath = 'C:\\Users\\Vikhyat Kaushik\\.gemini\\antigravity\\brain\\dc31f3ce-8366-4798-9109-ce7537e5a5ba\\.system_generated\\logs\\transcript.jsonl';
if (fs.existsSync(logPath)) {
    const lines = fs.readFileSync(logPath, 'utf8').split('\n');
    let bestMatch = null;
    for (const line of lines) {
        if (line.includes('.home-content-container') && line.includes('File Path:')) {
            bestMatch = line;
        }
    }
    if (bestMatch) {
        fs.writeFileSync('C:\\Users\\Vikhyat Kaushik\\AG Projects\\Webtel HRPearls\\extracted.txt', bestMatch);
        console.log("Found a match and saved to extracted.txt");
    } else {
        console.log("No match found in transcript.");
    }
} else {
    console.log("Transcript not found.");
}
