const API_KEY = 'GDOdZLVKNqNzGy9uIDCYYKlBU8KLQDrh';
const BASE_URL = 'https://api.giphy.com/v1/gifs/translate';

export async function fetchGif(searchTerm) {
  const url = `${BASE_URL}?api_key=${API_KEY}&s=${encodeURIComponent(searchTerm)}`;

  const response = await fetch(url, { mode: 'cors' });
  const data = await response.json();

  if (!data.data || !data.data.images) {
    throw new Error('No GIF found for that term.');
  }

  return data.data.images.original.url;
}
