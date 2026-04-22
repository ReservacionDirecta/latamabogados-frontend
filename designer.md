# Designer's Manifesto: Latam Abogados

Guía de estilo y principios de diseño aplicados al proyecto Latam Abogados.

## 🎨 Identidad Visual

### Colores
- **Primary Maroon (`#8e3d4a`)**: Representa autoridad, tradición legal y seriedad. Se usa en fondos principales, encabezados y CTAs secundarios.
- **Secondary Navy (`#1e1f33`)**: Aporta modernidad y contraste profesional. Utilizado en tipografía secundaria y overlays.
- **Accent Gold (`#ffcc00`)**: Usado estratégicamente para guiar la atención del usuario hacia acciones de conversión.

### Tipografía
- **Fuente Principal**: `DM Sans` (o Inter). Seleccionada por su legibilidad y aspecto contemporáneo.
- **Hierarchy**: Uso de `clamp()` para asegurar que los títulos mantengan impacto visual en móviles sin sacrificar la legibilidad.

## ✨ Principios de Diseño Premium

1. **Glassmorphism**: Uso de paneles con desenfoque de fondo (`backdrop-filter: blur`) para crear capas de información y profundidad.
2. **Elevación Sutil**: Las tarjetas y modales utilizan sombras suaves (`box-shadow`) que sugieren una interfaz táctil y moderna.
3. **Animaciones con Propósito**:
   - `revealUp`: Para que el contenido emerja suavemente al cargar la página.
   - `pulse`: En botones de WhatsApp para incentivar el contacto sin ser intrusivo.
   - `hover-lift`: Pequeños desplazamientos verticales al pasar el cursor.

## 📱 Responsividad
- Prioridad en la legibilidad de documentos PDF y tablas comparativas.
- Adaptación de menús pegajosos (*sticky header*) con efectos de transparencia inteligente al hacer scroll.

---
*"El diseño legal debe ser tan claro como la ley y tan sólido como una sentencia."*
