/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/api/giphy.js":
/*!**************************!*\
  !*** ./src/api/giphy.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchGif: () => (/* binding */ fetchGif)\n/* harmony export */ });\nconst API_KEY = 'GDOdZLVKNqNzGy9uIDCYYKlBU8KLQDrh';\nconst BASE_URL = 'https://api.giphy.com/v1/gifs/translate';\n\nasync function fetchGif(searchTerm) {\n  const url = `${BASE_URL}?api_key=${API_KEY}&s=${encodeURIComponent(searchTerm)}`;\n\n  const response = await fetch(url, { mode: 'cors' });\n  const data = await response.json();\n\n  // Giphy devuelve 200 incluso cuando no hay resultados\n  if (!data.data || !data.data.images) {\n    throw new Error('No GIF found for that term.');\n  }\n\n  return data.data.images.original.url;\n}\n\n\n//# sourceURL=webpack://template-webpack/./src/api/giphy.js?");

/***/ }),

/***/ "./src/assets/images/logo-js.svg":
/*!***************************************!*\
  !*** ./src/assets/images/logo-js.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/6f91a3a04a61939e38e1.svg\";\n\n//# sourceURL=webpack://template-webpack/./src/assets/images/logo-js.svg?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _ui_elements_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/elements.js */ \"./src/ui/elements.js\");\n/* harmony import */ var _api_giphy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/giphy.js */ \"./src/api/giphy.js\");\n/* harmony import */ var _ui_renderGif_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/renderGif.js */ \"./src/ui/renderGif.js\");\n\n\n\n\n\nwindow.addEventListener('DOMContentLoaded', async () => {\n  try {\n    const gifUrl = await (0,_api_giphy_js__WEBPACK_IMPORTED_MODULE_2__.fetchGif)('coding');\n    (0,_ui_renderGif_js__WEBPACK_IMPORTED_MODULE_3__.renderGif)(gifUrl);\n  } catch (error) {\n    (0,_ui_renderGif_js__WEBPACK_IMPORTED_MODULE_3__.renderError)(\"Couldn't load default GIF.\");\n  }\n});\n\n_ui_elements_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].form.addEventListener('submit', async (e) => {\n  e.preventDefault();\n\n  const term = _ui_elements_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].input.value.trim();\n\n  if (!term) {\n    (0,_ui_renderGif_js__WEBPACK_IMPORTED_MODULE_3__.renderError)('Please enter a keyword.');\n    return;\n  }\n\n  try {\n    const gifUrl = await (0,_api_giphy_js__WEBPACK_IMPORTED_MODULE_2__.fetchGif)(term);\n    (0,_ui_renderGif_js__WEBPACK_IMPORTED_MODULE_3__.renderGif)(gifUrl);\n  } catch (error) {\n    (0,_ui_renderGif_js__WEBPACK_IMPORTED_MODULE_3__.renderError)(error.message);\n  }\n});\n\n\n//# sourceURL=webpack://template-webpack/./src/index.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://template-webpack/./src/style.css?");

/***/ }),

/***/ "./src/ui/elements.js":
/*!****************************!*\
  !*** ./src/ui/elements.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst elements = {\n  form: document.querySelector('#gif-form'),\n  input: document.querySelector('#search-input'),\n  image: document.querySelector('#gif'),\n  error: document.querySelector('#error-msg'),\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (elements);\n\n\n//# sourceURL=webpack://template-webpack/./src/ui/elements.js?");

/***/ }),

/***/ "./src/ui/renderGif.js":
/*!*****************************!*\
  !*** ./src/ui/renderGif.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderError: () => (/* binding */ renderError),\n/* harmony export */   renderGif: () => (/* binding */ renderGif)\n/* harmony export */ });\n/* harmony import */ var _elements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements.js */ \"./src/ui/elements.js\");\n/* harmony import */ var _assets_images_logo_js_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/logo-js.svg */ \"./src/assets/images/logo-js.svg\");\n\n\n\nfunction renderGif(url) {\n  _elements_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].image.src = url;\n  _elements_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].error.textContent = '';\n}\n\nfunction renderError(message) {\n  _elements_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].image.src = _assets_images_logo_js_svg__WEBPACK_IMPORTED_MODULE_1__;\n  _elements_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].error.textContent = message;\n}\n\n\n//# sourceURL=webpack://template-webpack/./src/ui/renderGif.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;