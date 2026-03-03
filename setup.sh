#!/bin/bash

# 🚀 SCRIPT DE SETUP - PORTAFOLIO PAMELA VERA

echo "🌟 Iniciando setup del portafolio..."
echo ""

# Verificar Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js no está instalado"
    echo "Descárgalo desde: https://nodejs.org/"
    exit 1
fi

echo "✓ Node.js encontrado: $(node --version)"
echo ""

# Crear estructura de carpetas
echo "📁 Creando estructura de carpetas..."
mkdir -p src
mkdir -p public

# Copiar archivos
echo "📄 Copiando archivos de configuración..."
# Los archivos ya deberían estar en la raíz

# Instalar dependencias
echo ""
echo "📦 Instalando dependencias..."
npm install

if [ $? -eq 0 ]; then
    echo "✓ Dependencias instaladas exitosamente"
else
    echo "❌ Error al instalar dependencias"
    exit 1
fi

echo ""
echo "✅ Setup completado!"
echo ""
echo "Próximos pasos:"
echo "1. npm run dev          → Para desarrollar localmente"
echo "2. npm run build        → Para crear build de producción"
echo ""
echo "🌐 Deploy options:"
echo "- Vercel: vercel"
echo "- GitHub Pages: Ver DEPLOY_GUIDE.md"
echo ""
echo "Happy coding! 🎨✨"
