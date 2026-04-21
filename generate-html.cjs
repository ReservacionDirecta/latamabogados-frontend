const fs = require('fs');
const html = fs.readFileSync('wp_body.html', 'utf8');

if (!fs.existsSync('src/data')) {
    fs.mkdirSync('src/data', { recursive: true });
}

fs.writeFileSync('src/data/wpHomeHtml.json', JSON.stringify({ html: html }));
console.log('JSON generated successfully.');
