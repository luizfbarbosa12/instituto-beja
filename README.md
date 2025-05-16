# Instituto Beja Web Application - Technical Overview

This document provides a comprehensive technical overview of the Instituto Beja web application. It is intended for developers working on or maintaining the project.

## Core Architecture & Design

*   **Application Type:** Single-Page Application (SPA).
*   **Primary Structure:** The application is architected as a long-scrolling page, with distinct content sections rendered sequentially. Navigation is primarily achieved through scrolling.
*   **Component Modularity:** The UI is built using a modular component-based approach, with components categorized into thematic sections, reusable UI elements (Shadcn/UI), and animated components (Magic UI).
*   **Performance Focus:** Implements lazy loading for section components (`React.lazy()`) and viewport-based rendering (`react-scan`) to optimize initial load times and runtime performance.
*   **Internationalization (i18n):** Supports multiple languages through `i18next` and `react-i18next`, with translation files located in `src/locales/`.
*   **Responsive Design:** Utilizes Tailwind CSS for a utility-first approach to styling, ensuring adaptability across various screen sizes.

## Technology Stack

*   **Frontend Framework/Library:** React 19
*   **Build Tool & Dev Server:** Vite
*   **Language:** TypeScript
*   **Styling Engine:**
    *   Tailwind CSS (Integrated via `@tailwindcss/vite`)
    *   Shadcn/UI (Component library, New York style, Neutral base color)
    *   Global styles and font definitions in `src/main.css` & `src/styles/fonts.css`
*   **Animation Libraries:**
    *   GSAP (GreenSock Animation Platform) with `@gsap/react` and `ScrollTrigger` module.
    *   Lenis (for smooth scrolling effects).
    *   Magic UI (Pre-built animated React components, likely leveraging Framer Motion).
*   **State Management:** Primarily React Context API (see `src/context/GlobalContext.js`).
*   **Internationalization:** `i18next`, `react-i18next`.
*   **UI Toolkit & Utilities:**
    *   `@radix-ui/react-slot` (for component composition).
    *   `lucide-react` (for SVG icons).
    *   `embla-carousel-react`, `swiper` (for carousel/slider functionality).
    *   `class-variance-authority`, `clsx`, `tailwind-merge` (for managing CSS classes).
*   **Performance Utilities:**
    *   `React.lazy()` (for component code-splitting).
    *   `react-scan` (for viewport-based component rendering).
*   **Development Tools:**
    *   ESLint (for code linting, configured in `eslint.config.js`).
    *   Prettier (for code formatting, configured in `prettier.config.cjs`).

## Project Directory Structure

Key directories and their purposes:

*   **`public/`**: Contains static assets that are directly copied to the build output's root (e.g., `favicon.ico`, `robots.txt`).
*   **`src/`**: Houses all application source code.
    *   **`App.jsx`**: The root React component that defines the overall page layout and composition of sections.
    *   **`main.jsx`**: The main entry point for the React application; initializes React DOM and global configurations.
    *   **`main.css`**: Main stylesheet including Tailwind CSS directives and global custom styles.
    *   **`assets/`**: Project-specific static assets (images, fonts) imported by components.
    *   **`components/`**: Contains all React components.
        *   **`ui/`**: Shadcn/UI components added to the project.
        *   **`magicui/`**: Magic UI components.
        *   *Thematic Directories* (e.g., `Knowledge/`, `Philanthropy/`): Custom components representing major sections of the application.
        *   **`Index.js`**: Centralizes component exports, often implementing lazy loading.
    *   **`config/`**: Application-level configurations (e.g., `i18n.js` for internationalization setup).
    *   **`context/`**: React Context providers and consumers for global state management.
    *   **`data/`**: May contain static data fixtures or data-fetching modules.
    *   **`hooks/`**: Custom React Hooks for reusable stateful logic.
    *   **`lib/`**: Utility functions and helper modules (e.g., Shadcn/UI's `utils.ts` for `cn` function).
    *   **`locales/`**: Stores translation files (JSON format) for each supported language.
    *   **`styles/`**: Additional global styles or style-related configurations (e.g., `fonts.css`).
*   **Configuration Files (Root):**
    *   `vite.config.ts`: Vite build and development server configuration.
    *   `tsconfig.json` (and variants): TypeScript compiler options.
    *   `package.json`: Project metadata, dependencies, and NPM scripts.
    *   `eslint.config.js`, `prettier.config.cjs`: Linting and formatting rules.
    *   `components.json`: Shadcn/UI configuration.

## Prerequisites for Development

*   Node.js (refer to `engines` field in `package.json` if specified, otherwise latest LTS is recommended).
*   npm (comes with Node.js) or an alternative package manager like Yarn or pnpm.

## Setup and Local Development

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/luizfbarbosa12/instituto-beja.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd instituto-beja
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```
    (or `yarn install` / `pnpm install` if using alternative package managers)

## Available NPM Scripts

Defined in `package.json`:

*   **`npm run dev`**: Launches the Vite development server. Access the application typically at `http://localhost:5173` (port may vary).
*   **`npm run build`**: Compiles and bundles the application for production. Output is generated in the `dist/` directory.
*   **`npm run lint`**: Executes ESLint to analyze code for potential errors and style issues.
*   **`npm run preview`**: Starts a local server to preview the production build from the `dist/` directory.
*   **`npm run format`**: Applies Prettier to format all relevant source code files.

## Deployment

*   **Target URL:** The `homepage` field in `package.json` is set to `https://www.institutobeja.com/`, which may influence base path settings in the build process.
*   **Server Configuration:** The presence of a `.htaccess` file suggests that the application might be deployed on an Apache web server. For SPA functionality, ensure server-side rewrite rules are configured to direct all navigation requests to `index.html`.
*   **Build Output:** The production-ready static assets are located in the `dist/` directory after running `npm run build`.

---

This technical README aims to provide developers with essential information for working with the Instituto Beja codebase. For more specific implementation details, refer to the source code and inline documentation.
