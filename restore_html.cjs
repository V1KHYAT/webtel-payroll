const fs = require('fs');
const filePath = 'Mobile/index.html';
let content = fs.readFileSync(filePath, 'utf8');

const headToInsert = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>Webtel HR Mobile Prototype</title>
    <link rel="stylesheet" href="css/styles.css?v=3">
    <script src="https://code.iconify.design/iconify-icon/2.1.0/iconify-icon.min.js"></script>
</head>
<body>
    <div class="device-preview-wrapper">
        <div class="device-frame">
            <div class="app-container">
                
                <!-- Login Screen -->
                <div id="login-domain-screen" class="screen active">
                    <div class="login-header">
                        <div class="logo">Webtel</div>
                        <h1>Welcome Back</h1>
`;

content = headToInsert + content;
fs.writeFileSync(filePath, content);
console.log("Restored missing HTML shell.");
