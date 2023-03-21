const API_URLS = [
  "https://strangerthings-quotes.vercel.app/api/quotes",
  "https://api.breakingbadquotes.xyz/v1/quotes",
  "https://lucifer-quotes.vercel.app/api/quotes",
  "https://api.gameofthronesquotes.xyz/v1/random",
];

export const API_URL = API_URLS[Math.floor(Math.random() * API_URLS.length)];

export const TIMEOUT_SEC = 10;
