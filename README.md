# 🌟 Portafolio Pamela Vera - Frontend Developer

Un portafolio profesional moderno y responsivo desarrollado con **React**, **Tailwind CSS** y diseño **Neon Femenino**.

## ✨ Características

- 🎨 **Diseño Neon Elegante** - Colores vibrantes con rosa, púrpura y cyan
- 🌓 **Modo Oscuro/Claro** - Cambio de tema con un click
- 📱 **100% Responsivo** - Se adapta perfectamente a cualquier dispositivo
- ⚡ **Performance Optimizado** - Construido con Vite
- 🎯 **Landing Page Profesional** - Diseñado específicamente para frontend
- 🔗 **Integración con Redes Sociales** - LinkedIn y GitHub
- 💬 **Formulario de Contacto** - Comunicación directa con visitantes
- 🎭 **Animaciones Suaves** - Transiciones elegantes y efectos visuales

## 📋 Secciones

1. **Hero Section** - Presentación personal impactante
2. **Experiencia Laboral** - Tus trabajos y logros
3. **Habilidades & Tecnologías** - Competencias técnicas por categoría
4. **Educación** - Formación académica y certificaciones
5. **Contacto** - Información de contacto y formulario

## 🚀 Quick Start

### Opción 1: Vercel (RECOMENDADO - Más Fácil)

1. Fork este repositorio o copia los archivos
2. Conecta tu repositorio en **vercel.com**
3. Vercel detectará automáticamente que es un proyecto Vite
4. ¡Haz click en Deploy!

Tu sitio estará en vivo en: `https://portafolio-[nombre].vercel.app`

### Opción 2: GitHub Pages

1. Crea un repositorio en GitHub
2. Clona y sube los archivos
3. Configura GitHub Pages en Settings
4. Tu sitio estará en: `https://[usuario].github.io/portafolio`

[Ver guía detallada en DEPLOY_GUIDE.md](./DEPLOY_GUIDE.md)

## 📦 Instalación Local

```bash
# 1. Clonar o descargar el proyecto
git clone https://github.com/tu-usuario/portafolio.git
cd portafolio

# 2. Instalar dependencias
npm install

# 3. Ejecutar en modo desarrollo
npm run dev

# 4. Abrir en el navegador
# http://localhost:5173
```

## 🏗️ Build para Producción

```bash
npm run build
npm run preview
```

## 📁 Estructura del Proyecto

```
portafolio/
├── src/
│   ├── App.jsx           # Componente principal del portfolio
│   ├── main.jsx          # Punto de entrada de React
│   └── index.css         # Estilos globales
├── public/               # Archivos estáticos
├── index.html            # HTML principal
├── vite.config.js        # Configuración de Vite
├── tailwind.config.js    # Configuración de Tailwind
├── postcss.config.js     # Configuración de PostCSS
├── package.json          # Dependencias del proyecto
└── README.md             # Este archivo
```

## 🎨 Customización

### Cambiar Colores

En `src/App.jsx`, busca y modifica los colores neon:

```javascript
// Rosa Neon
className="text-pink-400"  // Oscuro: #ec4899
className="text-pink-600"  // Claro: #db2777

// Cyan Neon
className="text-cyan-400"  // Oscuro: #22d3ee
className="text-cyan-600"  // Claro: #0891b2

// Púrpura Neon
className="text-purple-400" // #a78bfa
className="text-purple-600" // #7c3aed
```

### Actualizar Información Personal

1. **Nombre y Título**: Línea ~250
2. **Email**: Busca `pamela.v.espinoza@gmail.com`
3. **Teléfono**: Busca `+56983453707`
4. **LinkedIn**: Actualiza URL de perfil
5. **GitHub**: Cambia los links de repositorio
6. **Experiencia y Habilidades**: Modifica los arrays de datos

### Agregar Proyectos

Crea una nueva sección después de "Trabajos":

```javascript
<section id="proyectos" className="py-20 px-4 relative z-10">
  {/* Aquí va tu galería de proyectos */}
</section>
```

## 🔧 Dependencias

- **React 18.2** - Framework UI
- **Vite 5.0** - Build tool rápido
- **Tailwind CSS 3.4** - Framework de estilos
- **Lucide React** - Iconos modernos
- **PostCSS & Autoprefixer** - Procesamiento de CSS

## 📱 Responsive Design

El portafolio está optimizado para:
- 📱 Móviles (320px - 640px)
- 📱 Tablets (641px - 1024px)
- 💻 Desktops (1025px+)

## 🔐 SEO Optimizado

- Meta tags completos
- Descripciones claras
- Estructura semántica
- Mobile-friendly
- Carga rápida

## 🌐 Deployment

### Vercel (Recomendado)
```bash
vercel
```

### GitHub Pages
```bash
npm run build
git add dist -f
git commit -m "Deploy to GitHub Pages"
git push
```

### Netlify
```bash
npm run build
# Sube la carpeta 'dist' en netlify.com
```

## 💡 Tips

- ✅ Usa `npm run dev` para ver cambios en tiempo real
- ✅ Revisa la consola del navegador para errores
- ✅ Actualiza los links de redes sociales antes de publicar
- ✅ Prueba en modo oscuro/claro
- ✅ Verifica la responsividad en móvil
- ✅ Comprime imágenes para mejor performance

## 🐛 Troubleshooting

**Problema: Tailwind no funciona**
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

**Problema: Vite port ya en uso**
```bash
npm run dev -- --port 3000
```

**Problema: Compilación lenta**
```bash
# Limpia caché
rm -rf node_modules package-lock.json
npm install
```

## 📧 Contacto

- **Email**: pamela.v.espinoza@gmail.com
- **Teléfono**: +569 8345 3707
- **LinkedIn**: linkedin.com/in/pamela-vera-e
- **Ubicación**: Santiago, Chile

## 📝 Licencia

Este proyecto está disponible bajo licencia MIT. Siéntete libre de usarlo como base para tu portafolio.

## 🙌 Contribuciones

Las contribuciones son bienvenidas. Para cambios principales:
1. Fork el proyecto
2. Crea una rama para tu feature
3. Haz commit de tus cambios
4. Push a la rama
5. Abre un Pull Request

---

**Hecho con ❤️ por Pamela Vera**

*Última actualización: 2024*
