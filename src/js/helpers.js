import { TIMEOUT_SEC } from "./config.js";
import { API_URLS } from "./config.js";

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${sec} seconds`));
    }, sec * 1000);
  });
};

export const getJSON = function (url) {
  return Promise.race([fetch(url), timeout(TIMEOUT_SEC)]).then((response) => {
    if (!response.ok) throw new Error(`${error}`);

    return response.json();
  });
};

export function getURL() {
  return API_URLS[Math.floor(Math.random() * API_URLS.length)].url;
}
