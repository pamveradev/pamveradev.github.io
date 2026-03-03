# 📦 ARCHIVOS DESCARGADOS - CÓMO ORGANIZARLOS

## 🎯 Lo que has recibido:

```
portafolio-pamela-vera/
│
├── 📋 ARCHIVOS DE CONFIGURACIÓN
│   ├── package.json              ← Dependencias del proyecto
│   ├── vite.config.js            ← Configuración de Vite
│   ├── tailwind.config.js        ← Configuración de Tailwind
│   ├── postcss.config.js         ← Configuración de PostCSS
│   ├── .gitignore               ← Archivos a ignorar en Git
│   └── index.html               ← Página HTML principal
│
├── 📁 ARCHIVOS DE CÓDIGO (CARPETA src/)
│   ├── App.jsx                  ← TU PORTAFOLIO COMPLETO
│   ├── main.jsx                 ← Punto de entrada de React
│   └── index.css                ← Estilos globales
│
├── 📚 DOCUMENTACIÓN
│   ├── GUIA_RAPIDA.md           ← ⭐ EMPIEZA AQUÍ
│   ├── README.md                ← Información completa del proyecto
│   ├── DEPLOY_GUIDE.md          ← Instrucciones de deployment
│   └── ESTRUCTURA.md            ← Este archivo
│
├── 🔧 SCRIPTS
│   └── setup.sh                 ← Script de setup automático
│
└── 📁 DIRECTORIO public/ (crear)
    └── Aquí van tus imágenes
```

---

## ✅ PASOS PARA ORGANIZAR TU PROYECTO

### 1. Crea la carpeta raíz del proyecto
```bash
mkdir portafolio
cd portafolio
```

### 2. Descarga todos los archivos y colócalos así:

**En la raíz (portafolio/):**
- package.json
- vite.config.js
- tailwind.config.js
- postcss.config.js
- .gitignore
- index.html
- README.md
- DEPLOY_GUIDE.md
- GUIA_RAPIDA.md
- setup.sh

**Crea la carpeta `src/` y coloca dentro:**
- App.jsx
- main.jsx
- index.css

**Crea la carpeta `public/` para imágenes:**
```bash
mkdir public
# Aquí puedes poner tu foto de perfil, logos, etc.
```

### 3. Estructura final

```
portafolio/
├── src/
│   ├── App.jsx           ✓
│   ├── main.jsx          ✓
│   └── index.css         ✓
│
├── public/               (crear)
│   └── perfil.jpg        (opcional - tu foto)
│
├── package.json          ✓
├── vite.config.js        ✓
├── tailwind.config.js    ✓
├── postcss.config.js     ✓
├── index.html            ✓
├── .gitignore            ✓
│
├── README.md             ✓
├── DEPLOY_GUIDE.md       ✓
├── GUIA_RAPIDA.md        ✓
├── setup.sh              ✓
│
└── node_modules/         (se crea con npm install)
```

---

## 🚀 PRÓXIMOS PASOS

### Opción A: Setup Automático (recomendado)

```bash
# En Mac/Linux:
chmod +x setup.sh
./setup.sh

# En Windows, abre PowerShell y corre:
npm install
```

### Opción B: Setup Manual

```bash
# 1. Instala dependencias
npm install

# 2. Prueba localmente
npm run dev

# 3. Construye para producción
npm run build
```

---

## 📝 ARCHIVOS PRINCIPALES

### `package.json`
Define todas las dependencias y scripts del proyecto.

**Scripts disponibles:**
```json
{
  "dev": "vite",           // npm run dev
  "build": "vite build",   // npm run build
  "preview": "vite preview" // npm run preview
}
```

### `App.jsx`
Tu portafolio completo. Contiene:
- ✓ Hero section
- ✓ Experiencia laboral
- ✓ Habilidades y tecnologías
- ✓ Sección de contacto
- ✓ Modo oscuro/claro
- ✓ Integración con redes sociales
- ✓ Formulario de contacto

**Personalización:**
Para cambiar información (email, teléfono, etc.), busca en App.jsx:
- `pamela.v.espinoza@gmail.com` → tu email
- `+56983453707` → tu teléfono
- `linkedin.com/in/pamela-vera-e` → tu LinkedIn
- `github.com` → tu GitHub

### `index.html`
El archivo HTML que se carga en el navegador.

### `main.jsx`
Punto de entrada que monta tu React app.

### `vite.config.js`
Configuración del servidor de desarrollo y build.

---

## 🎨 PERSONALIZACIÓN

### 1. Cambiar Información Personal

En `src/App.jsx`:

```javascript
// Línea ~233 - Nombre
<h2 className="text-pink-400 glow-pink">
  Pamela Vera  // ← Cámbia aquí
</h2>

// Línea ~236 - Título
<p className="text-cyan-300">
  Frontend Developer | Angular Specialist  // ← Y aquí
</p>

// Línea ~240 - Descripción
<p className="text-slate-300">
  Desarrollo de aplicaciones web...  // ← Y aquí
</p>
```

### 2. Cambiar Colores Neon

```javascript
// Rosa neon
className="text-pink-400"  → Cambiar el número (300-600)

// Cyan neon
className="text-cyan-400"  → Cambiar el número (300-600)

// Púrpura neon
className="text-purple-400" → Cambiar el número (300-600)
```

### 3. Agregar tu Foto

```bash
# Coloca tu foto en public/
cp mi-foto.jpg public/perfil.jpg
```

Luego en App.jsx:
```javascript
<img 
  src="/perfil.jpg" 
  alt="Pamela Vera" 
  className="w-24 h-24 rounded-full object-cover border-4 border-pink-400"
/>
```

---

## ✨ ARCHIVOS SECUNDARIOS

### `portfolio.jsx`
Es la misma versión de `App.jsx` (copia de respaldo).

### `index.css`
Estilos globales y configuración de Tailwind.

### `tailwind.config.js`
Configuración de utilidades de Tailwind CSS.

### `postcss.config.js`
Procesamiento de CSS.

### `DEPLOY_GUIDE.md`
Guía detallada para publicar en Vercel o GitHub Pages.

### `README.md`
Documentación completa del proyecto.

### `GUIA_RAPIDA.md`
Guía paso a paso para principiantes.

### `.gitignore`
Archivos que Git debe ignorar.

---

## 🆘 PROBLEMAS COMUNES

### ❌ "command not found: npm"
→ Instala Node.js desde nodejs.org

### ❌ Error de puertos
```bash
npm run dev -- --port 3000  # Usa otro puerto
```

### ❌ "Cannot find module"
```bash
rm -rf node_modules
npm install
```

### ❌ Los estilos no se cargan
- Verifica que tengas `tailwind.config.js`
- Verifica que `index.css` tenga `@tailwind`
- Recarga la página (Ctrl+Shift+R)

---

## 📚 REFERENCIAS ÚTILES

- Node.js: https://nodejs.org/
- Vite: https://vitejs.dev/
- React: https://react.dev/
- Tailwind: https://tailwindcss.com/
- Vercel: https://vercel.com/
- GitHub: https://github.com/

---

## 🎯 CHECKLIST FINAL

- [ ] Descargué todos los archivos
- [ ] Los organicé en la estructura correcta
- [ ] Ejecuté `npm install`
- [ ] Probé con `npm run dev`
- [ ] Personalicé con mi información
- [ ] Cambié colores si lo deseé
- [ ] Agregué mi foto
- [ ] Probé el modo oscuro/claro
- [ ] Estoy listo para publicar

---

**¿Listo para publicar?** → Abre GUIA_RAPIDA.md

**¿Necesitas ayuda con deployment?** → Abre DEPLOY_GUIDE.md

**¿Necesitas información técnica?** → Abre README.md

---

¡Felicidades por tu nuevo portafolio! 🎉✨
