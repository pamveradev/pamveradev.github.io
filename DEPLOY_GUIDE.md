# 🌟 Guía de Deployment - Portafolio Pamela Vera

## Opción 1: GitHub Pages (RECOMENDADO PARA GITHUB PAGES)

### Requisitos:
- Cuenta en GitHub
- Node.js instalado (v16 o superior)
- Git instalado

### Pasos:

1. **Crea un repositorio nuevo en GitHub**
   - Ve a github.com/new
   - Nombra el repo: `portafolio` (o el nombre que prefieras)
   - Selecciona "Public"
   - Crea el repositorio

2. **Clona el repositorio localmente**
   ```bash
   git clone https://github.com/tu-usuario/portafolio.git
   cd portafolio
   ```

3. **Instala Vite y dependencias**
   ```bash
   npm create vite@latest . -- --template react
   npm install
   ```

4. **Reemplaza el archivo `src/App.jsx`**
   - Copia el contenido del archivo `portfolio.jsx` aquí

5. **Instala Lucide React (para los iconos)**
   ```bash
   npm install lucide-react
   ```

6. **Actualiza `vite.config.js` para GitHub Pages**
   ```javascript
   import { defineConfig } from 'vite'
   import react from '@vitejs/plugin-react'

   export default defineConfig({
     plugins: [react()],
     base: '/', // Cambia a '/portafolio/' si tu repo no es username.github.io
   })
   ```

7. **Build del proyecto**
   ```bash
   npm run build
   ```

8. **Deploy con GitHub Pages**
   
   **Opción A: Usando GitHub Actions (Automático)**
   
   - Crea la carpeta `.github/workflows`
   - Crea archivo `deploy.yml`:
   
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [ main ]

   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - uses: actions/setup-node@v3
           with:
             node-version: '18'
         - run: npm install
         - run: npm run build
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```

   - Haz push: `git add . && git commit -m "Initial commit" && git push`
   - El sitio se deployment automáticamente
   - Verifica en Settings > Pages

   **Opción B: Deploy Manual**
   
   ```bash
   npm run build
   git add dist -f
   git commit -m "Deploy"
   git push
   ```

9. **Configura GitHub Pages**
   - Ve a Settings > Pages
   - Source: GitHub Actions (o rama main si usaste la opción manual)
   - Espera a que compile (2-3 minutos)
   - Tu sitio estará en: `https://tu-usuario.github.io/portafolio`

---

## Opción 2: Vercel (MÁS FÁCIL Y RÁPIDO)

### Requisitos:
- Cuenta en Vercel (vercel.com)
- GitHub conectado a Vercel

### Pasos:

1. **Prepara tu proyecto localmente**
   ```bash
   npm create vite@latest . -- --template react
   npm install
   npm install lucide-react
   ```

2. **Sube a GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push
   ```

3. **Conecta con Vercel**
   - Ve a vercel.com
   - Haz click en "New Project"
   - Selecciona tu repositorio de GitHub
   - Vercel detectará que es un proyecto Vite/React
   - Click en "Deploy"

4. **¡Listo!**
   - Tu sitio estará en vivo en: `https://portafolio-tu-usuario.vercel.app`
   - Los despliegues posteriores serán automáticos al hacer push a main

---

## Cambios Necesarios Antes de Deployar

### 1. **Actualiza Links de Redes Sociales**
En el archivo `portfolio.jsx`, busca y actualiza:

```javascript
// Línea ~273
<a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer">
  <Github size={24} />
</a>

// Línea ~294
<a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer">
```

### 2. **Formulario de Contacto**
El formulario actual es de demostración. Para hacerlo funcional:

**Opción A: Email directo (sin backend)**
```javascript
// Cambia el atributo action en el formulario
<form action="https://formspree.io/f/tu-id" method="POST">
```
- Ve a formspree.io
- Crea una nueva forma
- Usa el endpoint que te proporciona

**Opción B: Con EmailJS**
```bash
npm install @emailjs/browser
```

Luego en el handleFormSubmit:
```javascript
import emailjs from '@emailjs/browser';

const handleFormSubmit = async (e) => {
  e.preventDefault();
  
  try {
    await emailjs.send(
      'service_id',
      'template_id',
      formData,
      'public_key'
    );
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setFormSubmitted(false);
    }, 3000);
  } catch (error) {
    console.error('Error:', error);
  }
};
```

---

## Estructura Final del Proyecto

```
portafolio/
├── src/
│   ├── App.jsx (tu portfolio.jsx)
│   ├── index.css
│   └── main.jsx
├── .github/
│   └── workflows/
│       └── deploy.yml (solo para GitHub Pages)
├── vite.config.js
├── package.json
├── tailwind.config.js
└── postcss.config.js
```

---

## Troubleshooting

### ❌ Estilos no se cargan en GitHub Pages
- Verifica que `base` en `vite.config.js` sea correcto
- Reconstruye: `npm run build`

### ❌ Tailwind no funciona
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Actualiza `tailwind.config.js`:
```javascript
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### ❌ Lucide Icons no aparecen
```bash
npm install lucide-react
```

---

## Mejoras Futuras

- [ ] Agregar animaciones adicionales
- [ ] Proyectos destacados con galería
- [ ] Blog de artículos técnicos
- [ ] Integración con API de GitHub para mostrar repos
- [ ] Dark mode con persistencia localStorage (si lo implementas fuera de Claude)
- [ ] Analytics con Google Analytics o Vercel Analytics

---

## Contacto

📧 **Email:** pamela.v.espinoza@gmail.com
💼 **LinkedIn:** linkedin.com/in/pamela-vera-e
🐙 **GitHub:** @pamelaveradev

---

¡Buena suerte con tu portafolio! 🚀✨
