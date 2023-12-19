let randomNumber = Math.round(Math.random() * 100 + 1, 2);
const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

const validateGuess = (guess) => {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1) {
    alert("Please enter a valid number");
  } else if (guess > 100) {
    alert("Please enter a valid number");
  } else {
    prevGuess = [...prevGuess, guess];
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
};
const checkGuess = (guess) => {
  if (guess === randomNumber) {
    displayMessage(`You gussed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is too low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is too high`);
  }
};
const displayGuess = (guess) => {
  userInput.value = "";
  guessSlot.innerHTML += `${guess} `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
};
const displayMessage = (message) => {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
};

const endGame = () => {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id='newGame'>Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
};

const newGame = () => {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", (e) => {
    randomNumber = Math.round(Math.random() * 100 + 1, 2);
    prevGuess = [];
    newGuess = 1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    playGame(true);
  });
};
