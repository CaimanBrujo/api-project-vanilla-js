# 🌀 Giphy API Project – Vanilla JS + Webpack

A simple and clean JavaScript app that fetches and displays GIFs using the Giphy API.  
Built with Webpack 5, modular JS, and a dark, responsive UI.

> Live Preview: https://caimanbrujo.github.io/api-project-vanilla-js/

---

## 🚀 Getting Started

### 1. Clone the repository

git clone git@github.com:CaimanBrujo/api-project-vanilla-js.git
cd api-project-vanilla-js

### 2. Install dependencies

npm install

### 3. Start development server

npm run dev

Opens the project at http://localhost:8080/ with live reload.

---

## Build for production

npm run build

Builds the app into the `dist/` folder, ready for deployment:

- index.html from template  
- Bundled JS and CSS  
- Optimized image assets  

---

## Features

- Fetch GIFs from Giphy API using fetch() + Promises  
- Shows a default “coding” GIF on load  
- Input to search for any keyword  
- Error handling for empty results or network issues  
- Fallback image and error message if no match is found  
- Modular architecture: API logic, UI rendering, and DOM refs separated  
- Dark mode styling with CSS variables  

---

## Project Structure
```
api-project-vanilla-js/
├── dist/                  ← Build output
├── src/
│   ├── api/giphy.js       ← Handles API requests
│   ├── ui/elements.js     ← DOM selectors
│   ├── ui/renderGif.js    ← DOM update logic
│   ├── assets/images/     ← Fallback image
│   ├── index.js           ← App entry point
│   ├── style.css          ← Global styles
│   └── template.html      ← HTML template
├── webpack.config.js
└── README.md
```
---

## Development Tools

- Webpack 5 for bundling  
- html-webpack-plugin for dynamic HTML  
- CSS Loader + Style Loader for styles  
- Asset Modules for images  
- ESLint + Prettier for code quality

---

## 🧙 Author

Made with code by [Caimán Brujo](https://github.com/CaimanBrujo)
