'use strict';

// Get player score elements
const playerOneScoreEl = document.getElementById('score--0');
const playerTwoScoreEl = document.getElementById('score--1');

// get dice image
const diceImageEl = document.querySelector('.dice');

// hide image
diceImageEl.classList.toggle('hidden');

// function for a dice roll
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}
