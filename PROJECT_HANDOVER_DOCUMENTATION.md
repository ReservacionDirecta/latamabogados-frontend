# 📘 Documento de Traspaso del Proyecto Frontend - Latam Abogados

**Fecha:** 2026-05-27
**Versión:** 1.0
**Objetivo:** Servir como guía integral para el nuevo encargado de la continuidad y evolución de `latamabogados-frontend`, facilitando su migración a un VPS de GoDaddy antes del 21 de junio.

---

## 🚀 Resumen Ejecutivo

**Objetivo y Propósito del Sitio:** El sitio de Latam Abogados no es solo un folleto digital; su función principal es establecer al Dr. Ambrose como una autoridad legal (un "Thought Leader"). Diseñado para generar confianza, el sitio guía a los visitantes—que llegan con interés en temas legales o académicos—a convertir ese interés en leads directos, principalmente a través de las páginas `AgendarClase` y `AgendarConsulta`. Cada sección está pensada para guiar al usuario desde la curiosidad hasta el contacto.

---

## 🛠️ 1. Stack Tecnológico (Tech Stack)

El proyecto se construye con herramientas modernas que hacen el código organizado, rápido y fácil de mantener gracias a TypeScript (que ayuda a detectar errores antes).

| Área | Tecnología/Herramienta | Versión Clave | Propósito Principal |
| :--- | :--- | :--- | :--- |
| **Frontend Core** | React JS, TypeScript | React 19, TS ~6.0 | Base de la aplicación; componentes modulares y tipado estricto. |
| **Bundler/Build** | Vite | Vite 6.4.2 | Herramienta rápida para empaquetar (`build`) y servir el proyecto en desarrollo (`dev`). |
| **Estilizado** | CSS (Vanilla) | Custom Properties | Mantenimiento de la coherencia visual mediante Variables CSS. |
| **Rutas/Navegación** | React Router DOM | v7.14.1 | Control del enrutamiento entre las distintas vistas y páginas. |
| **Internacionalización** | i18next | v26.0.7 | Soporte para múltiples idiomas (ej., Español e Inglés). |
| **Iconografía** | Lucide React | v1.8.0 | Proveedor de iconos ligeros y escalables. |

### Paleta de Marcas (Brand Palette)
*   **Latam Maroon:** `#8e3d4a` (Primario)
*   **Latam Navy:** `#1e1f33` (Secundario/Fondo Oscuro)
*   **Latam Gold:** `#ffcc00` (Acentos y Llamadas a la Acción - CTAs)

---

## 🗺️ 2. Arquitectura del Código & Mapeo de Componentes

El código sigue una separación clara entre bloques reutilizables (`components`) y vistas completas (`pages`).

### Estructura de Directorios Clave
*   `src/assets/`: Contiene todos los recursos estáticos (imágenes, SVGs).
*   `src/data/`: Posible ubicación de contenido dinámico o *mock data*.
*   `src/i18n/`: Configuración y archivos de idioma para `i18next`.
*   **`src/components/`**: Contiene módulos reutilizables (Ej: `HeaderBar`, `BookingModal`, `HeroSection`).
*   **`src/pages/`**: Contiene las vistas completas, cada una mapeada a una ruta del *router*.

### Mapeo de Páginas Principales
| Archivo | Ruta (Asumida) | Propósito / Descripción | Funcionalidades Clave |
| :--- | :--- | :--- | :--- |
| `pages/Home` (Base) | `/` | Presenta la propuesta de valor profesional del Dr. Ambrose y guía al usuario. | Muestra secciones clave, optimizada para SEO. |
| `pages/About.tsx` | `/about` | Biografía detallada, trayectoria académica y experiencia legal. | Generar autoridad e intención en el visitante. |
| `pages/AgendarClase.tsx` | `/agendarclase` | Flujo de reserva de clases con la plataforma o servicio externo. | Interacción con `BookingModal`, formularios de contacto. |
| `pages/AgendarConsulta.tsx`| `/consulta` | Formulario dedicado para solicitar consultas legales profesionales. | Generación de leads, integración potencial con WhatsApp. |
| `pages/ArticlesPublications.tsx` | `/articulos` | Colección de artículos y publicaciones del Dr. Ambrose. | Fortalecer la autoridad en inglés jurídico (`Legal English`). |

---

## ☁️ 3. Infraestructura y Servicios (Ecosistema)

El proyecto está integrado con varios servicios clave para su operación completa:

*   **Control de Versiones:** GitHub (Fuente de código).
*   **Hosting / Despliegue (Actual):** Railway VPS (Se utiliza la configuración `railway.json` como guía).
*   **Dominio:** GoDaddy (`latamabogados.com`).
*   **CDN / Seguridad:** Cloudflare (Recomendado para optimización de rendimiento y protección DDoS/SSL).
*   **Email Marketing:** MailerLite (Se asume que los formularios de contacto en el frontend envían datos a esta plataforma).

---

## 💻 4. Guía de Desarrollo Local y Continuación del Proyecto

### ⚙️ Procedimiento para Levantar el Entorno

1.  **Requisitos Previos:** Instalar Node.js (`>=18.0.0`).
2.  **Instalación:** Ejecutar `npm install` (o `pnpm install`) en la raíz del proyecto.
3.  **Desarrollo Local:** Iniciar con `npm run dev`. Esto levanta el servidor de Vite para pruebas y desarrollo.
4.  **Producción (Build):** Generar la versión estática optimizada para despliegue: `npm run build`. El resultado es la carpeta `/dist`.

### 🎯 Puntos Clave para Continuidad

*   **Flujo de Datos:** La lógica crítica de reserva y contacto está en los componentes modales (`BookingModal.tsx`) y las páginas dedicadas. Se debe seguir el flujo del evento desde el clic hasta la llamada a API/envío de formulario.
*   **Variables de Entorno:** Revisar exhaustivamente cómo se manejan las credenciales (API Keys, URLs de backend) para asegurar que el entorno local (`.env`) y el entorno de producción estén correctamente configurados durante la migración.

---

## 🚀 5. Plan de Migración a GoDaddy VPS (Objetivo: Antes del 21/06)

Dado que es un frontend basado en Vite, gran parte de la migración es un **despliegue estático**.

### Fases Críticas
1.  **Validación Local:** Ejecutar `npm run build` para confirmar que el contenido de `/dist` es completo y funcional fuera del entorno de desarrollo de Vite.
2.  **Preparación del VPS:** Configurar el servidor web (nginx/Apache) en el nuevo GoDaddy VPS.
3. **Despliegue Inicial:** Subir **todo** el contenido de `latamabogados-frontend/dist` al directorio raíz configurado para servir archivos estáticos en el VPS.\n*   **Sincronización Automática:** Es crucial configurar un flujo CI/CD donde cada commit y push a la rama de producción compile los cambios (`npm run build`) y actualice automáticamente el despliegue en GoDaddy, garantizando que el repositorio sea la fuente única de verdad.
4.  **Configuración DNS & CDN:** Actualizar los registros DNS de GoDaddy para que apunten a la IP del nuevo VPS, manteniendo Cloudflare si se desea conservar su funcionalidad (proxy, caching).

### 🚨 Advertencia Crítica sobre Backend
Si hay lógica de servidor o base de datos detrás del formulario de reserva/contacto:
*   **El backend DEBE migrarse y estar accesible.** La actualización de las URLs de API en el frontend es necesaria para que los formularios sigan funcionando después del cambio de hosting.

---
