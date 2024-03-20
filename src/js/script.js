'use strict';

// get player elements
const playerOneSection = document.querySelector('.player--0');
const playerTwoSection = document.querySelector('.player--1');

// Get player score elements
let totalScoresEls = [
  document.getElementById('score--0'),
  document.getElementById('score--1'),
];
let currentScoresEls = [
  document.getElementById('current--0'),
  document.getElementById('current--1'),
];

// get dice image element
const diceImageEl = document.querySelector('.dice');

// get game buttons
const btnNewGame = document.querySelector('.btn--new');
const btnRollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// game state for players, game active and current scores
let activePlayer = 0; // 0 = player 1
let currentScoreValues = [
  parseInt(currentScoresEls[0].textContent), // could also use Number() for conversion here
  parseInt(currentScoresEls[1].textContent),
];
let totalScoreValues = [
  parseInt(totalScoresEls[0].textContent), // could also use Number() for conversion here
  parseInt(totalScoresEls[1].textContent),
];
let playing = true;

// hide image

// function for a dice roll
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

// rolling dice functionality
btnRollDice.addEventListener('click', () => {
  if (playing) {
    diceImageEl.classList.toggle('hidden');
    const diceRollNum = rollDice();
    //   image path needs to be the relative path from the html document
    const diceImgToRender = `./src/images/dice-${diceRollNum}.png`;
    console.log(diceRollNum, diceImgToRender);
    diceImageEl.src = diceImgToRender;
    diceImageEl.classList.remove('hidden');

    // check if dice == 1

    if (diceRollNum !== 1) {
      // add dice score to activePlayer current score
      currentScoreValues[activePlayer] += diceRollNum;

      // display active player current score
      currentScoresEls[activePlayer].textContent =
        currentScoreValues[activePlayer];
    } else {
      // set active player current score to 0
      currentScoreValues[activePlayer] = 0;

      // display active player current score
      currentScoresEls[activePlayer].textContent =
        currentScoreValues[activePlayer];

      // switch player and change active class
      activePlayer = activePlayer === 0 ? 1 : 0;
      playerOneSection.classList.toggle('player--active');
      playerTwoSection.classList.toggle('player--active');
    }
  }
});

btnHold.addEventListener('click', () => {
  if (playing) {
    // add current score to score of active player
    totalScoreValues[activePlayer] += currentScoreValues[activePlayer];
    totalScoresEls[activePlayer].textContent = totalScoreValues[activePlayer];
    // check if score already 100
    if (totalScoreValues[activePlayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document.getElementById(`name--${activePlayer}`).textContent += ' 🎉';
    } else {
      // clear active player current score
      currentScoreValues[activePlayer] = 0;
      currentScoresEls[activePlayer].textContent =
        currentScoreValues[activePlayer];
      // switch player and change active class
      activePlayer = activePlayer === 0 ? 1 : 0;
      playerOneSection.classList.toggle('player--active');
      playerTwoSection.classList.toggle('player--active');
    }
  }
});

btnNewGame.addEventListener('click', () => {
  diceImageEl.classList.toggle('hidden');
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  playerOneSection.classList.add('player--active');
  document.getElementById(`name--${activePlayer}`).textContent = `Player ${
    activePlayer + 1
  }`;
  activePlayer = 0;
  currentScoreValues = [0, 0];
  totalScoreValues = [0, 0];
  currentScoresEls.forEach(el => (el.textContent = '0'));
  totalScoresEls.forEach(el => (el.textContent = '0'));
  playing = true;
});
