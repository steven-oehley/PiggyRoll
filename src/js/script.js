'use strict';

// get player elements
const playerOneSection = document.querySelector('.player--0');
const playerTwoSection = document.querySelector('.player--1');

// Get player score elements
const playerOneTotalScoreEl = document.getElementById('score--0');
const playerTwoTotalScoreEl = document.getElementById('score--1');
const playerOneCurrentScoreEl = document.getElementById('current--0');
const playerTwoCurrentScoreEl = document.getElementById('current--1');

// get dice image element
const diceImageEl = document.querySelector('.dice');

// get game buttons
const btnNewGame = document.querySelector('.btn--new');
const btnRollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// game state for players and current scores
let activePlayer = 0; // 0 = player 1
let currentScorePOneValue = parseInt(playerOneCurrentScoreEl.textContent); // could also use Number() for conversion here
let currentScorePTwoValue = parseInt(playerTwoCurrentScoreEl.textContent);

// hide image
diceImageEl.classList.add('hidden');

// function for a dice roll
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

// rolling dice functionality
btnRollDice.addEventListener('click', () => {
  const diceRollNum = rollDice();
  //   image path needs to be the relative path from the html document
  const diceImgToRender = `./src/images/dice-${diceRollNum}.png`;
  console.log(diceRollNum, diceImgToRender);
  diceImageEl.src = diceImgToRender;
  diceImageEl.classList.remove('hidden');

  // check if dice == 1

  if (diceRollNum !== 1) {
    // add dice score to activePlayer current score
    activePlayer === 0
      ? (currentScorePOneValue += diceRollNum)
      : (currentScorePTwoValue += diceRollNum);

    // display active player current score
    activePlayer === 0
      ? (playerOneCurrentScoreEl.textContent = currentScorePOneValue)
      : (playerTwoCurrentScoreEl.textContent = currentScorePTwoValue);
  } else {
    // set active player current score to 0
    activePlayer === 0
      ? (currentScorePOneValue = 0)
      : (currentScorePTwoValue = 0);
    // display updated player score
    activePlayer === 0
      ? (playerOneCurrentScoreEl.textContent = currentScorePOneValue)
      : (playerTwoCurrentScoreEl.textContent = currentScorePTwoValue);
    // switch player
    activePlayer = activePlayer === 0 ? 1 : 0;
    playerOneSection.classList.toggle('player--active');
    playerTwoSection.classList.toggle('player--active');
  }
});
