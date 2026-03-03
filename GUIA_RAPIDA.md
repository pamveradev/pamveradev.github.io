# 🚀 GUÍA RÁPIDA DE INICIO - PORTAFOLIO PAMELA VERA

## ¡Bienvenida! 👋

Tu portafolio está listo para desplegarse. Aquí está el camino más rápido para ponerlo en vivo.

---

## ⚡ OPCIÓN MÁS FÁCIL: VERCEL (5 MINUTOS)

### Paso 1: Prepara tu repositorio en GitHub
```bash
# 1. En GitHub, crea un nuevo repositorio llamado "portafolio"
# 2. En tu computadora, clona el repo
git clone https://github.com/TU_USUARIO/portafolio.git
cd portafolio

# 3. Copia todos los archivos que descargaste aquí
# Asegúrate de que tengas:
# - package.json
# - vite.config.js
# - tailwind.config.js
# - index.html
# - src/ (carpeta con App.jsx, main.jsx, index.css)
```

### Paso 2: Sube a GitHub
```bash
git add .
git commit -m "Initial commit - Portfolio"
git push
```

### Paso 3: Conecta con Vercel
1. Ve a **vercel.com**
2. Haz login con tu cuenta de GitHub
3. Click en "New Project"
4. Selecciona tu repositorio "portafolio"
5. Vercel detectará que es Vite + React
6. Click en "Deploy" ✨

**¡LISTO! Tu sitio está en vivo en: `https://portafolio-[nombre].vercel.app`**

---

## 🐙 OPCIÓN 2: GITHUB PAGES

### Paso 1: Instala dependencias localmente
```bash
npm install
```

### Paso 2: Build del proyecto
```bash
npm run build
```

### Paso 3: Configura el repo
1. Ve a tu repo en GitHub
2. Settings > Pages
3. Source: GitHub Actions
4. O copia la carpeta `dist` y súbela manualmente

---

## 🎨 PERSONALIZACIONES IMPORTANTES

Antes de publicar, actualiza esto en `src/App.jsx`:

### 1️⃣ Tu Email
```javascript
// Línea ~273
href="mailto:pamela.v.espinoza@gmail.com"
// CAMBIA A:
href="mailto:TU_EMAIL@gmail.com"
```

### 2️⃣ Tu Teléfono
```javascript
href="tel:+56983453707"
// CAMBIA A:
href="tel:+56_TU_NUMERO"
```

### 3️⃣ Tu LinkedIn
```javascript
href="https://linkedin.com/in/pamela-vera-e"
// CAMBIA A:
href="https://linkedin.com/in/TU_USUARIO"
```

### 4️⃣ Tu GitHub
```javascript
href="https://github.com"
// CAMBIA A:
href="https://github.com/TU_USUARIO"
```

---

## 📂 ESTRUCTURA DE CARPETAS FINAL

```
portafolio/
├── src/
│   ├── App.jsx          ← AQUÍ va tu portafolio
│   ├── main.jsx
│   └── index.css
├── public/              ← Aquí puedes poner imágenes
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

---

## ⚙️ PASOS DETALLADOS PARA GITHUB PAGES

Si prefieres GitHub Pages en lugar de Vercel:

```bash
# 1. Instala dependencias
npm install

# 2. Construye el proyecto
npm run build

# 3. Sube todo a GitHub
git add .
git commit -m "Deploy portafolio"
git push

# 4. En GitHub Settings > Pages
#    - Source: GitHub Actions
#    - O Deploy from a branch > dist
```

Tu sitio estará en: `https://TU_USUARIO.github.io/portafolio`

---

## 🖼️ AGREGAR TU FOTO DE PERFIL

1. Guarda tu foto en `public/perfil.jpg`
2. En `src/App.jsx`, reemplaza el ícono por una imagen:

```javascript
// Busca esta sección (línea ~245)
<div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-full blur-2xl opacity-50"></div>
<div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center">
  <Code2 size={48} className="text-white" />
</div>

// REEMPLAZA CON:
<img 
  src="/perfil.jpg" 
  alt="Pamela Vera" 
  className="relative w-24 h-24 rounded-full object-cover border-4 border-pink-400"
/>
```

---

## 🧪 PROBAR LOCALMENTE

Antes de publicar, prueba tu sitio:

```bash
# 1. En desarrollo
npm run dev

# 2. Abre en tu navegador
# http://localhost:5173

# 3. Prueba:
# ✓ Modo oscuro/claro
# ✓ Responsividad (abre DevTools con F12)
# ✓ Links de contacto
# ✓ Scroll suave
```

---

## 🎯 CHECKLIST FINAL

Antes de publicar:

- [ ] Actualicé mi email
- [ ] Actualicé mi teléfono
- [ ] Actualicé mi LinkedIn
- [ ] Actualicé mi GitHub
- [ ] Probé en modo oscuro
- [ ] Probé en móvil (F12 > responsive)
- [ ] Probé todos los links
- [ ] El formulario funciona
- [ ] Los colores se ven bien

---

## ❓ PREGUNTAS FRECUENTES

**P: ¿Cuál es mejor, Vercel o GitHub Pages?**
R: Vercel es más fácil y automático. GitHub Pages requiere más configuración manual.

**P: ¿Puedo cambiar los colores neon?**
R: Sí, en `src/App.jsx` busca los valores de color (pink-400, cyan-400, purple-400).

**P: ¿Dónde guardas las imágenes?**
R: En la carpeta `public/`

**P: ¿Cómo cambio el dominio?**
R: En Vercel puedes conectar tu propio dominio. En GitHub Pages necesitas un .github.io

**P: ¿Cómo funciona el formulario de contacto?**
R: Actualmente es una demostración. Para hacerlo funcional, mira la sección en DEPLOY_GUIDE.md

---

## 📞 INFORMACIÓN DE CONTACTO

Si necesitas ayuda:

📧 **Email**: pamela.v.espinoza@gmail.com
💼 **LinkedIn**: linkedin.com/in/pamela-vera-e
🐙 **GitHub**: @pamelaveradev

---

## 🎉 ¡FELICIDADES!

¡Tu portafolio está listo! Este es un gran primer paso para tu carrera como Frontend Developer. 

**Próximos pasos:**
1. Personaliza el contenido
2. Publica en Vercel o GitHub Pages
3. Comparte con reclutadores
4. Sigue mejorando con nuevos proyectos

¡Mucho éxito! 🚀✨

---

**¿Necesitas actualizar el formulario de contacto?** Mira DEPLOY_GUIDE.md para integrarlo con Formspree o EmailJS.
