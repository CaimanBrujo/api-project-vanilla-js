import './style.css';
import elements from './ui/elements.js';
import { fetchGif } from './api/giphy.js';
import { renderGif, renderError } from './ui/renderGif.js';

window.addEventListener('DOMContentLoaded', async () => {
  try {
    const gifUrl = await fetchGif('coding');
    renderGif(gifUrl);
  } catch (error) {
    renderError("Couldn't load default GIF.");
  }
});

elements.form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const term = elements.input.value.trim();

  if (!term) {
    renderError('Please enter a keyword.');
    return;
  }

  try {
    const gifUrl = await fetchGif(term);
    renderGif(gifUrl);
  } catch (error) {
    renderError(error.message);
  }
});
