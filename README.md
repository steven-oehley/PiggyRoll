# PiggyRoll 🎲🐖

<hr>

PiggyRoll is a simple and fun dice rolling game implemented using HTML, CSS, and JavaScript.  
In this game, two players take turns rolling a dice to accumulate points.
The first player to reach a score of 100 wins the game.

## Game Overview 🎮

- Players: The game involves two players, Player 1 and Player 2.
- Objective: The objective of the game is to be the first player to reach a total score of 10 points.
- Gameplay: Players take turns rolling a dice. Each time a player rolls the dice, the value rolled is added to their current score. If a player rolls a 1, their current score becomes 0, and it's the next player's turn. Players can choose to hold their current score, adding it to their total score, and ending their turn. The first player to reach or exceed a total score of 10 wins the game.

## Features 🐖

- Dynamic Styling: The game dynamically updates the styling to indicate the active player and the winner.
- Roll Dice: Players can roll the dice to accumulate points. The dice roll value is displayed visually.
- Hold: Players can choose to hold their current score, adding it to their total score and ending their turn.
- New Game: Players can start a new game at any time, resetting the scores and allowing them to play again.
- Game Flow / Rules: Players have the option to navigate to a separate page to view the game flow and rules.

## How to Play 🐷

- Starting the Game: When the game starts, Player 1 is the active player, and both players have a current score and total score of 0.
- Rolling the Dice: Click the "Roll dice" button to roll the dice. The value rolled will be added to the active player's current score.
- Holding: Click the "Hold" button to hold the current score. It will be added to the active player's total score, and the turn will pass to the other player.
- Winning the Game: The game continues until one player reaches or exceeds a total score of 10. The player who achieves this is declared the winner, and the game ends.
- Starting a New Game: Click the "New game" button to start a new game at any time. This resets the scores and allows players to play again.

## Dynamic Styling 🎨

- Active Player: The active player is visually highlighted with a different background color to indicate their turn.
- Winner: When a player wins the game, their section is further highlighted, and a celebration emoji is added to their name.

## Game Flow / Rules 🚫

Players can navigate to the "Game Flow / Rules" page by clicking the "View Game Flow / Rules" button. This page provides detailed instructions on how to play the game and outlines the rules.

## Implementation Details 👨‍💻

- HTML: The game structure is defined using HTML, including player sections, score elements, buttons, and dice image.
- CSS: Styling is applied using CSS to create a visually appealing interface, including dynamic styling for active player and winner.
- JavaScript: Game logic is implemented using JavaScript to handle dice rolling, score calculation, player switching, and game state management.

Enjoy playing PiggyRoll! 🎲🐷
