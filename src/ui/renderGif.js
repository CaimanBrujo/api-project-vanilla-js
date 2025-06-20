import elements from './elements.js';
import fallbackImage from '../assets/images/logo-js.svg';

export function renderGif(url) {
  elements.image.src = url;
  elements.error.textContent = '';
}

export function renderError(message) {
  elements.image.src = fallbackImage;
  elements.error.textContent = message;
}
