import { API_URLS } from "./config.js";
import { getURL } from "./helpers.js";
import { getJSON } from "./helpers.js";

// DOM Selectors
const timerEl = document.getElementById("timerEl");
const quoteField = document.getElementById("quoteEl");
const typingField = document.getElementById("typingAreaEl");
const highCharEl = document.getElementById("charactersEl");
const highSecEl = document.getElementById("secondsEl");
const quoteAuthorEl = document.getElementById("quoteAuthor");

// Code Variables
let timer, time, chars, seconds;

// Begin The Game
window.addEventListener("load", (event) => getData(getURL()));

// API Data Handling Function
const getData = (url) => {
  getJSON(url)
    .then((data) => {
      const index = API_URLS.findIndex((obj) => obj.url === url);
      const tvShow = API_URLS[index].tvShow;
      const author = API_URLS[index].author(data);
      const quote = API_URLS[index].quote(data);

      renderData(quote, author, tvShow);
    })
    .catch((error) => {
      console.log(error);
      quoteField.innerText = `Oops, we have an error: ${error.message}.`;
    });
};

// Rendering Data
const renderData = (quote, author, tvShow) => {
  quoteField.innerText = "";

  // create individual span for quote's each character
  quote.split("").forEach((character) => {
    // handling some syntax coming from API that doen't match keyboard values
    if (character === `’`) character = `'`;
    if (character === `“` || character === `”`) character = `"`;
    if (character === "…" || character === "...") character = ".";

    // render the quote
    const markup = `<span>${character}</span>`;
    quoteField.insertAdjacentHTML("beforeend", markup);
  });

  // render the TV show
  quoteAuthorEl.innerText = `${author}, '${tvShow}'`;

  typingField.value = "";

  // if there is a timer, cleat it and start over
  if (timer) clearInterval(timer);
  timer = startTimer();
};

// Handle Typing
typingField.addEventListener("input", () => {
  // create arrays for all quote spans & typed characters
  const spanElements = document.querySelectorAll("#quoteEl span");
  const typedCharacters = typingField.value.split("");

  // to end round successfully correct must stay true at the end of the forEach block
  let correct = true;

  // loop through rendered spans and typed characters
  spanElements.forEach((span, index) => {
    const character = typedCharacters[index];
    // if there is the same indexed character, compare them
    if (character) {
      // if it matches, add style
      if (character === span.innerText) {
        span.classList.add("correctStyle");
        span.classList.remove("incorrectStyle");
      }
      // if it does not, add another style
      else {
        span.classList.remove("correctStyle");
        span.classList.add("incorrectStyle");
        correct = false;
      }
    }
    // if there is not the same indexed character, remove any style from span
    else {
      span.classList.remove("correctStyle");
      span.classList.remove("incorrectStyle");
      correct = false;
    }
  });

  // only ends up true if both array lengths are equal and there are not incorrect characters in typing field
  if (correct) {
    // seconds is undefined in the beginning, so first scores are highscores,
    // and after that variables are only updating if the time has improved
    if (seconds === undefined || seconds > time) {
      seconds = time - 1;
      chars = typedCharacters.length;
    }

    highSecEl.innerText = seconds;
    highCharEl.innerText = chars;

    getData(getURL());
  }
});

// Timer
const startTimer = () => {
  time = 0;
  // calculate minutes and seconds and render them in timer element
  function tick() {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    timerEl.innerText = `${min}:${sec}`;
    // add one to the time
    time++;
  }

  tick();
  const timer = setInterval(tick, 1000);

  // return the tick to handle it outside the function
  return timer;
};
