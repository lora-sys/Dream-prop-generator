# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## 项目结构
```
graph TD
    A[项目根目录] --> B[tools-dream-generator]
    B --> C[src]
    C --> D[state]
    C --> E[views]
    C --> F[App.css]
    C --> G[App.jsx]
    C --> H[index.css]
    C --> I[main.jsx]
    B --> J[README.md]
    B --> K[eslint.config.js]
    B --> L[tailwind.config.js]
    B --> M[vite.config.js]
```

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
