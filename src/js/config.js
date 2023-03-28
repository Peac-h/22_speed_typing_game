export const API_URLS = [
  {
    url: "https://strangerthings-quotes.vercel.app/api/quotes",
    tvShow: "Stranger Things",
    quote: (data) => data.at(0).quote,
    author: (data) => data.at(0).author,
  },
  {
    url: "https://api.breakingbadquotes.xyz/v1/quotes",
    tvShow: "Breaking Bad",
    quote: (data) => data.at(0).quote,
    author: (data) => data.at(0).author,
  },
  {
    url: "https://lucifer-quotes.vercel.app/api/quotes",
    tvShow: "Lucifer",
    quote: (data) => data.at(0).quote,
    author: (data) => data.at(0).author,
  },
  {
    url: "https://api.gameofthronesquotes.xyz/v1/random",
    tvShow: "GOT",
    quote: (data) => data.sentence,
    author: (data) => data.character.name,
  },
];

export const TIMEOUT_SEC = 10;
