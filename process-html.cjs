const fs = require('fs');
const path = require('path');

try {
  const content = fs.readFileSync('wp_body_temp.html', 'utf8');
  
  // Extraer el body innerHTML
  const bodyMatch = content.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  if (!bodyMatch) {
    console.error('No se encontró el body en el archivo temporal');
    process.exit(1);
  }
  
  let html = bodyMatch[1];
  
  // Limpiar rutas
  html = html.replace(/http:\/\/localhost:8002/g, '');
  
  // Guardar JSON final
  const result = { html };
  fs.writeFileSync('src/data/wpHomeHtml.json', JSON.stringify(result, null, 2));
  console.log('JSON sincronizado con éxito');
  
} catch (err) {
  console.error('Error al procesar el HTML: ' + err.message);
}
