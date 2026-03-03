import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/pamveradev.github.io/', // Cambiar a '/portafolio/' si el repo no es username.github.io
})
