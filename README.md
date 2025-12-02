### 1\. El archivo `README.md` actualizado

# 🚀 Astro A11y Blog & Design System

Este proyecto es una implementación moderna de un sitio web estático utilizando **Astro**, enfocado en la **arquitectura de software escalable**, **accesibilidad (a11y)**, **Content Collections** y el uso de **Design Tokens**.

![Astro](https://img.shields.io/badge/astro-%232C2052.svg?style=for-the-badge&logo=astro&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Preact](https://img.shields.io/badge/preact-%23673AB8.svg?style=for-the-badge&logo=preact&logoColor=white)
![A11y](https://img.shields.io/badge/WCAG-2.1_AA-green?style=for-the-badge)

## 📋 Características Clave

### 🎨 UI & UX

- **Design System Tokenizado:** Arquitectura de estilos basada en variables CSS semánticas (Colores, Espaciado) sin valores "hardcoded".
- **Modo Oscuro Automático:** Detección de preferencia del sistema y persistencia mediante `localStorage`.
- **Navegación Responsiva:** Patrón _Split Navigation_ en escritorio que muta a un menú hamburguesa accesible (`aria-expanded`) en móviles.
- **Componentes UI Reutilizables:** Implementación de componentes atómicos como `<Tag />` y `<Social />` para mantener la consistencia visual (DRY).

### ⚙️ Ingeniería & Funcionalidad

- **Content Collections:** Gestión de contenido Markdown con tipado estricto y validación de esquemas (Zod) para asegurar la integridad de los datos.
- **Rutas Dinámicas:** Generación automática de páginas para:
  - Artículos de blog individuales (`/posts/[slug]`).
  - Índices de etiquetas (`/tags/[tag]`).
- **RSS Feed:** Generación automática de `rss.xml` para sindicación de contenido.
- **Islas de Interactividad:** Uso de **Preact** para componentes interactivos aislados (`Greeting.jsx`) manteniendo el resto del sitio como HTML estático puro.

## 🛠️ Stack Tecnológico

- **Core:** [Astro](https://astro.build/) (v5+)
- **Contenido:** Markdown + Astro Content Collections
- **Estilos:** CSS Modules / Scoped CSS + Global Design Tokens
- **Scripting:** Vanilla JS (Menú) + Preact (Componentes UI)

## 🎨 Sistema de Diseño (Design Tokens)

La arquitectura de estilos se divide en dos capas para facilitar la escalabilidad:

### 1. Primitivos (La Paleta)

Definen los valores crudos disponibles (ej. `slate-100`, `purple-700`).

### 2. Semánticos (El Uso)

Definen la intención del diseño y se adaptan al tema.

| Token Variable    | Descripción                                      |
| :---------------- | :----------------------------------------------- |
| `--bg-body`       | Color de fondo principal (Adaptable Light/Dark). |
| `--text-main`     | Color principal de lectura.                      |
| `--brand-primary` | Color para acciones principales.                 |
| `--nav-bg-mobile` | Fondo del menú móvil optimizado para contraste.  |
| `--tag-bg`        | Fondo de las etiquetas de categorías.            |

## 📂 Estructura del Proyecto

```text
/
├── public/
├── src/
│   ├── content/
│   │   └── blog/              # Archivos Markdown con Frontmatter validado
│   ├── components/
│   │   ├── Header.astro       # Layout con Split Navigation
│   │   ├── Navigation.astro   # Enlaces semánticos
│   │   ├── Hamburger.astro    # Toggle accesible
│   │   ├── ThemeIcon.astro    # SVG interactivo Dark/Light
│   │   ├── Tag.astro          # Componente de etiqueta reutilizable
│   │   └── Greeting.jsx       # Isla Preact
│   ├── layouts/
│   │   ├── BaseLayout.astro   # Shell principal del sitio
│   │   └── MarkdownPostLayout.astro # Plantilla para artículos
│   ├── pages/
│   │   ├── index.astro        # Home
│   │   ├── blog.astro         # Listado completo
│   │   ├── tags/              # Rutas dinámicas de etiquetas
│   │   └── rss.xml.js         # Endpoint de generación RSS
│   └── styles/
│       └── global.css         # Definición de Tokens
└── package.json
```

## 🚀 Instalación y Uso

1.  **Clonar el repositorio:**

    ```bash
    git clone [https://github.com/tu-usuario/tu-repositorio.git](https://github.com/tu-usuario/tu-repositorio.git)
    ```

2.  **Instalar dependencias:**

    ```bash
    npm install
    ```

3.  **Iniciar servidor de desarrollo:**

    ```bash
    npm run dev
    ```

4.  **Construir para producción:**

    ```bash
    npm run build
    ```

---

Desarrollado con ❤️ y estándares web modernos.
