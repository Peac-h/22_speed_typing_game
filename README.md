# Typing Challenge Game

This is a web-based typing game that displays a quote from a popular TV show and challenges the user to type the quote as quickly and accurately as possible. The game has different quotes from popular TV shows like Game of Thrones, Stranger Things, Breaking Bad, and Lucifer. The game keeps track of the user's time and accuracy, and displays the highest scores achieved so far. Only if each character of the quote is typed correctly the user is proceeded to the next round.

The design is responsive to all screen sizes.

**This is my 21st project so far.**

## Checkout The Live Demo

[Speeeeed Me]()

## Technologies Used

- HTML
- CSS
- Sass
- JavaScript (using asynchronous behavior, AJAX calls, modules and parcel bundler)

## JavaScript Features

The game was built using modern JavaScript features such as arrow functions, template literals, and the fetch API for making HTTP requests. For asynchronous behavior `fetch` method, `Promise` object and `then()` `catch()` methods were used. Code also contains a timer implementation and intervals to update the timer.

## Technical Details

The game is built using vanilla JavaScript and randomly fetches data from Public APIs. The game tracks the user's typing accuracy by comparing the user's input to each character in the quote and adding a class to the corresponding HTML element. If the character is typed correctly, the class "correctStyle" is added; if the character is typed incorrectly, the class "incorrectStyle" is added.

The project as a whole could have been written in a more elegant way, but I'm just starting yet 😄

## How to Play

1. First, open the live demo to start playing the game.
2. The game will start automatically once the demo is open.
3. You will be presented with a quote on the screen. Your task is to type it as quickly and accurately as possible.
4. In order to progress to the next round, you must type each character of the quote correctly.
5. If you complete the quote without any errors, the game will generate a new quote and save your score.
6. Your high score will be displayed at the end of each round, so try to beat your previous score!
7. Have fun playing the game!

## Credits

This project uses the

- [Breaking Bad Quotes API](https://breakingbadquotes.xyz/)
- [Game of Thrones Quotes API](https://gameofthronesquotes.xyz/)
- [Lucifer Quotes API](https://lucifer-quotes.vercel.app/) and
- [Stranger Things Quotes API](https://strangerthings-quotes.vercel.app/).

## Author

- [Github](https://github.com/Peac-h)
- [LinkedIn](https://www.linkedin.com/in/tamta-lomidze-b336b9266/)
- [Twitter](https://twitter.com/p6eac_h)
