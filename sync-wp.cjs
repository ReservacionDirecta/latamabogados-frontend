const http = require('http');
const fs = require('fs');
const path = require('path');

const targetUrl = 'http://localhost:8002';
const targetFile = path.join(__dirname, 'src/data/wpHomeHtml.json');

http.get(targetUrl, (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    // Extraer solo lo que está dentro de <body>
    const bodyMatch = data.match(/<body[^>]*>([\s\S]*)<\/body>/i);
    if (!bodyMatch) {
      console.error('No se encontró el body en ' + targetUrl);
      process.exit(1);
    }
    
    let html = bodyMatch[1];
    
    // Limpiar rutas absolutas locales
    html = html.replace(/http:\/\/localhost:8002/g, '');
    
    // Guardar como JSON
    const jsonContent = JSON.stringify({ html }, null, 2);
    fs.writeFileSync(targetFile, jsonContent);
    console.log('JSON guardado exitosamente en ' + targetFile);
  });
}).on('error', (err) => {
  console.error('Error al conectar con WP: ' + err.message);
});
