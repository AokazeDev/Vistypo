<div align="center">

<!-- ESPACIO PARA TU LOGO -->
<br />
<img src="https://aokaze.vercel.app/logo.svg" alt="Vistypo Logo" width="150" height="150" />
<br />

# Vistypo

### Herramienta de visualización y prueba de tipografías en línea

[![License: CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC%20BY--NC--ND%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-nd/4.0/)
[![Astro](https://img.shields.io/badge/Astro-5.15.9-BC52EE?logo=astro&logoColor=white)](https://astro.build)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.17-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Made by Aokaze](https://img.shields.io/badge/Made%20by-Aokaze-blueviolet)](https://github.com/AokazeDev)

[Demo en Vivo](https://vistypo.vercel.app) • [Reportar Bug](https://github.com/AokazeDev/Vistypo/issues) • [Solicitar Feature](https://github.com/AokazeDev/Vistypo/issues)

</div>

---

## 📖 Tabla de Contenidos

- [Acerca del Proyecto](#-acerca-del-proyecto)
- [Características](#-características)
- [Tecnologías](#️-tecnologías)
- [Comenzando](#-comenzando)
  - [Requisitos Previos](#requisitos-previos)
  - [Instalación](#instalación)
  - [Desarrollo](#desarrollo)
- [Uso](#-uso)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Scripts Disponibles](#-scripts-disponibles)
- [Roadmap](#-roadmap)
- [Contribuir](#-contribuir)
- [Licencia](#-licencia)
- [Contacto](#-contacto)
- [Agradecimientos](#-agradecimientos)

---

## 🌟 Acerca del Proyecto

**Vistypo** es una herramienta web moderna y elegante diseñada para diseñadores, desarrolladores y entusiastas de la tipografía que necesitan visualizar y probar diferentes fuentes de manera rápida y eficiente.

### ¿Por qué Vistypo?

- 🚀 **Rápido y Ligero**: Construido con Astro para una experiencia ultrarrápida
- 🎯 **Interfaz Intuitiva**: Diseño limpio y fácil de usar con Tailwind CSS
- 🔧 **Controles Avanzados**: Ajusta tamaño, peso, estilo y transformación de texto en tiempo real
- 📂 **Carga de Fuentes Personalizadas**: Soporta TTF, OTF, WOFF y WOFF2
- ♿ **Accesible**: Navegación por teclado y soporte completo para lectores de pantalla
- 🌐 **Sin Backend**: Funciona completamente del lado del cliente
- 🎨 **Fuentes del Sistema**: Incluye una selección curada de fuentes web-safe

### Demo

![Vistypo Screenshot](https://vistypo.vercel.app/meta/screenshot-desktop.png)

---

## ✨ Características

### Funcionalidades Principales

- ✅ **Vista Previa en Tiempo Real**: Visualiza tus fuentes mientras ajustas los controles
- ✅ **Múltiples Fuentes**: Carga y compara múltiples fuentes simultáneamente
- ✅ **Controles de Tipografía**:
  - Tamaño de fuente (8px - 120px)
  - Peso de fuente (100 - 900)
  - Estilo (normal / itálico)
  - Transformación de texto (normal, MAYÚSCULAS, minúsculas, Capitalizar)
- ✅ **Texto Personalizado**: Escribe tu propio texto para previsualizar
- ✅ **Filtrado por Categoría**: Organiza fuentes por serif, sans-serif, monospace, display y handwriting
- ✅ **Drag & Drop**: Arrastra y suelta archivos de fuente directamente
- ✅ **Validación de Archivos**: Verifica formato y tamaño antes de cargar
- ✅ **Prevención de Duplicados**: No permite cargar la misma fuente dos veces
- ✅ **Gestión de Fuentes**: Elimina fuentes personalizadas fácilmente
- ✅ **Responsive**: Funciona perfectamente en dispositivos móviles y de escritorio

### Fuentes Incluidas

Vistypo viene con 12 fuentes del sistema preinstaladas:
- **Sans Serif**: Arial, Helvetica, Verdana, Trebuchet MS
- **Serif**: Times New Roman, Georgia, Palatino, Garamond
- **Monospace**: Courier New, Consolas
- **Display**: Impact
- **Handwriting**: Comic Sans MS

---

## 🛠️ Tecnologías

Este proyecto está construido con tecnologías modernas y eficientes:

- **[Astro](https://astro.build)** `5.15.9` - Framework web ultrarrápido
- **[TypeScript](https://www.typescriptlang.org/)** - Tipado estático para JavaScript
- **[Tailwind CSS](https://tailwindcss.com)** `4.1.17` - Framework CSS utility-first
- **[pnpm](https://pnpm.io/)** - Gestor de paquetes rápido y eficiente
- **[Prettier](https://prettier.io/)** - Formateador de código

### Características del Stack

- 🚀 **Zero JavaScript por Defecto**: Astro envía HTML estático
- 💨 **CSS Utility-First**: Desarrollo rápido con Tailwind CSS 4.x
- 📦 **Optimización Automática**: Astro optimiza y minifica recursos automáticamente
- 🔄 **Hot Module Replacement**: Desarrollo ágil con recarga instantánea
- 🎯 **Type Safety**: TypeScript para prevenir errores en desarrollo

---

## 🚀 Comenzando

### Requisitos Previos

Asegúrate de tener instalado lo siguiente en tu sistema:

- **Node.js**: versión 18.14.1 o superior
- **pnpm**: versión 8.0.0 o superior

```bash
# Verificar Node.js
node --version

# Instalar pnpm globalmente si no lo tienes
npm install -g pnpm

# Verificar pnpm
pnpm --version
```

### Instalación

1. **Clona el repositorio**

```bash
git clone https://github.com/AokazeDev/Vistypo.git
cd Vistypo
```

2. **Instala las dependencias**

```bash
pnpm install
```

3. **Inicia el servidor de desarrollo**

```bash
pnpm dev
```

4. **Abre tu navegador**

Visita [http://localhost:4321](http://localhost:4321) para ver la aplicación en acción.

### Desarrollo

El proyecto incluye varios scripts para facilitar el desarrollo:

```bash
# Inicia el servidor de desarrollo con hot-reload
pnpm dev

# Construye la aplicación para producción
pnpm build

# Previsualiza la build de producción localmente
pnpm preview

# Formatea el código con Prettier
pnpm format

# Verifica el formato del código
pnpm format:check
```

---

## 💡 Uso

### Cargar Fuentes Personalizadas

1. **Arrastra y Suelta**: Arrastra archivos de fuente (`.ttf`, `.otf`, `.woff`, `.woff2`) a la zona de carga
2. **O Selecciona Archivo**: Haz clic en el botón "Seleccionar archivo" para explorar tu sistema
3. **Vista Previa**: La fuente aparecerá inmediatamente en la lista con el texto de ejemplo

### Ajustar Controles

- **Texto Personalizado**: Escribe en el campo de entrada para cambiar el texto de previsualización
- **Tamaño de Fuente**: Usa el slider para ajustar entre 8px y 120px
- **Peso de Fuente**: Selecciona el peso deseado (100-900)
- **Estilo**: Activa/desactiva el estilo itálico con el checkbox
- **Transformación**: Elige entre normal, MAYÚSCULAS, minúsculas o Capitalizar

### Filtrar Fuentes

Usa el selector de categoría para filtrar fuentes por:
- Todas las fuentes
- Serif
- Sans Serif
- Monospace
- Display
- Handwriting

### Navegación por Teclado

- `Tab` / `Shift + Tab`: Navegar entre controles
- `Flechas ↑↓`: Navegar entre fuentes en la lista
- `Home` / `End`: Ir a la primera/última fuente
- `Enter` / `Espacio`: Activar botones

### Eliminar Fuentes Personalizadas

Haz clic en el botón "Eliminar" junto a cualquier fuente personalizada para removerla de la lista.

---

## 📁 Estructura del Proyecto

```text
Vistypo/
├── public/              # Archivos estáticos
│   ├── robots.txt
│   ├── site.webmanifest
│   └── meta/           # Metadatos y assets públicos
├── src/
│   ├── components/     # Componentes reutilizables
│   │   ├── FileUploader.astro      # Zona de carga de fuentes
│   │   ├── FontList.astro          # Lista de fuentes
│   │   ├── GithubBtn.astro         # Botón de GitHub
│   │   ├── TextControls.astro      # Controles de texto
│   │   ├── icons/                  # Iconos SVG
│   │   └── ui/                     # Componentes UI (Header, Footer)
│   ├── data/           # Datos estáticos
│   │   ├── fonts.ts                # Definiciones de fuentes
│   │   └── footer.ts               # Datos del footer
│   ├── layouts/        # Layouts de página
│   │   └── MainLayout.astro
│   ├── pages/          # Páginas de la aplicación
│   │   └── index.astro
│   ├── scripts/        # Scripts del lado del cliente
│   │   └── fontManager.ts          # Lógica principal de fuentes
│   └── styles/         # Estilos globales
│       └── global.css
├── astro.config.mjs    # Configuración de Astro
├── package.json        # Dependencias y scripts
├── tsconfig.json       # Configuración de TypeScript
├── LICENSE.md          # Licencia del proyecto
└── README.md           # Este archivo
```

### Componentes Clave

- **`fontManager.ts`**: Gestiona toda la lógica de carga, eliminación y actualización de fuentes
- **`FontList.astro`**: Renderiza la lista de fuentes con sus previsualizaciones
- **`FileUploader.astro`**: Maneja la carga de archivos con drag & drop
- **`TextControls.astro`**: Proporciona los controles de tipografía

---

## 📜 Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `pnpm install` | Instala todas las dependencias del proyecto |
| `pnpm dev` | Inicia el servidor de desarrollo en `localhost:4321` |
| `pnpm build` | Construye el sitio para producción en `./dist/` |
| `pnpm preview` | Previsualiza la build de producción localmente |
| `pnpm astro` | Ejecuta comandos CLI de Astro |
| `pnpm format` | Formatea todos los archivos con Prettier |
| `pnpm format:check` | Verifica el formato sin modificar archivos |

---

## 🗺️ Roadmap

### Versión Actual: 0.0.1

- [x] Carga de fuentes personalizadas
- [x] Vista previa en tiempo real
- [x] Controles de tipografía básicos
- [x] Filtrado por categoría
- [x] Navegación por teclado
- [x] Diseño responsive

### Próximas Funcionalidades

- [ ] **v0.1.0** - Mejoras de UX
  - [ ] Modo oscuro/claro
  - [ ] Guardar configuraciones en localStorage
  - [ ] Exportar lista de fuentes favoritas
  
- [ ] **v0.2.0** - Comparación de Fuentes
  - [ ] Vista de comparación lado a lado
  - [ ] Tabla comparativa de métricas de fuentes
  - [ ] Exportar comparaciones como imagen

- [ ] **v0.3.0** - Integración con Google Fonts
  - [ ] Búsqueda de Google Fonts
  - [ ] Previsualización de fuentes de Google
  - [ ] Descarga directa de fuentes

- [ ] **v0.4.0** - Análisis de Fuentes
  - [ ] Información de glyphs
  - [ ] Análisis de legibilidad
  - [ ] Sugerencias de pares de fuentes

- [ ] **v1.0.0** - Lanzamiento Estable
  - [ ] Documentación completa
  - [ ] Suite de tests
  - [ ] Optimizaciones de rendimiento

¿Tienes una idea? [Abre un issue](https://github.com/AokazeDev/Vistypo/issues) para sugerirla.

---

## 🤝 Contribuir

¡Las contribuciones son lo que hace que la comunidad de código abierto sea un lugar increíble para aprender, inspirar y crear! Cualquier contribución que hagas será **muy apreciada**.

### Cómo Contribuir

1. **Fork** el proyecto
2. **Crea** tu rama de feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** tus cambios (`git commit -m 'Add: nueva característica increíble'`)
4. **Push** a la rama (`git push origin feature/AmazingFeature`)
5. **Abre** un Pull Request

### Guías de Contribución

- Asegúrate de que tu código sigue las convenciones de estilo del proyecto
- Ejecuta `pnpm format` antes de hacer commit
- Escribe mensajes de commit descriptivos
- Actualiza la documentación si es necesario
- Añade tests si introduces nueva funcionalidad

### Reportar Bugs

Si encuentras un bug, por favor abre un [issue](https://github.com/AokazeDev/Vistypo/issues) con:
- Descripción clara del problema
- Pasos para reproducirlo
- Comportamiento esperado vs actual
- Screenshots si es posible
- Información del navegador/sistema

### Solicitar Features

Para solicitar nuevas características, abre un [issue](https://github.com/AokazeDev/Vistypo/issues) con:
- Descripción detallada de la característica
- Por qué sería útil
- Ejemplos de uso si es posible

---

## 📄 Licencia

Este proyecto está licenciado bajo **Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International** (CC BY-NC-ND 4.0).

### Esto significa que puedes:

- ✅ **Compartir** — copiar y redistribuir el material en cualquier medio o formato

### Bajo las siguientes condiciones:

- 📝 **Atribución** — Debes dar crédito apropiado, proporcionar un enlace a la licencia e indicar si se hicieron cambios
- 💼 **No Comercial** — No puedes usar el material con fines comerciales
- 🚫 **Sin Derivadas** — Si remezclas, transformas o creas a partir del material, no puedes distribuir el material modificado

Para más detalles, consulta el archivo [LICENSE.md](LICENSE.md) o visita [creativecommons.org/licenses/by-nc-nd/4.0/](https://creativecommons.org/licenses/by-nc-nd/4.0/)

---

## 📧 Contacto

**Aokaze** - Desarrollador Full Stack

- 🌐 Website: [vistypo.vercel.app](https://vistypo.vercel.app)
- 📧 Email: [aokaze.cta@gmail.com](mailto:aokaze.cta@gmail.com)
- 💼 GitHub: [@AokazeDev](https://github.com/AokazeDev)
- 🔗 Proyecto: [https://github.com/AokazeDev/Vistypo](https://github.com/AokazeDev/Vistypo)
---

<div align="center">

### ⭐ Si te gusta Vistypo, ¡considera darle una estrella!

**Hecho con ❤️ por [Aokaze](https://github.com/AokazeDev)**

[⬆ Volver arriba](#-vistypo)

</div>
