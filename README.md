# Latam Abogados - Frontend Premium

Este es el frontend de **Latam Abogados**, una plataforma profesional diseñada para el Dr. Marcus Ambrose, especialista en **Inglés Jurídico (Legal English)** y leyes de EE.UU. El sitio ha sido migrado desde una base de WordPress a una arquitectura moderna en **React + Vite + TypeScript**.

## 🚀 Características Principales

- **Diseño Premium**: Interfaz sofisticada con animaciones sutiles, micro-interacciones y glassmorphism.
- **Optimización SEO**: Sistema dinámico de metadatos optimizado para palabras clave de alta intención como *"Inglés Jurídico"* y *"Legal English"*.
- **Arquitectura Moderna**: Componentes modulares, fluid typography (`clamp`) y responsive design robusto.
- **Integración de Reservas**: Sistema de reserva de clases y consultas mediante modales interactivos y WhatsApp.
- **Autoridad Profesional**: Secciones dedicadas a la trayectoria, diplomados y escritos legales del Dr. Ambrose.

## 🛠️ Tecnologías

- **Core**: React 19 + TypeScript
- **Bundler**: Vite 6
- **Estilos**: Vanilla CSS con Custom Properties (Variables)
- **Iconos**: Lucide React
- **Navegación**: React Router DOM 7

## 📂 Estructura del Proyecto

```text
latamabogados-frontend/
├── src/
│   ├── components/       # Componentes globales (Header, Footer, SEO, Modal)
│   ├── pages/            # Páginas de la aplicación (Home, About, AgendarClase, etc.)
│   ├── assets/           # Imágenes y recursos estáticos
│   ├── index.css         # Estilos globales y variables de marca
│   └── main.tsx          # Punto de entrada de la aplicación
├── public/               # Activos públicos (Documentos PDF, Imágenes originales)
└── ...
```

## 🎨 Paleta de Colores

- **Latam Maroon**: `#8e3d4a` (Primario)
- **Latam Navy**: `#1e1f33` (Secundario)
- **Latam Gold**: `#ffcc00` (Acentos y CTAs)

## 🏁 Instalación y Desarrollo

1. Instalar dependencias:
   ```bash
   npm install
   ```
2. Iniciar servidor de desarrollo:
   ```bash
   npm run dev
   ```
3. Construir para producción:
   ```bash
   npm run build
   ```

---
Desarrollado con enfoque en la excelencia legal y educativa.
