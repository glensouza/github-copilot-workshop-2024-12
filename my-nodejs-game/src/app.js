//  this is a rock paper scissors game written in NodeJS for the command line
// to run this game, navigate to the src directory and run the command `node app.js`

/**
 * Gets a random choice from the available choices.
 * @returns {string} A random choice of 'rock', 'paper', 'scissors', 'lizard', or 'spock'.
 */
function getRandomChoice() {}

/**
 * Determines the winner of the game based on player and computer choices.
 * @param {string} playerChoice - The player's choice ('rock', 'paper', 'scissors', 'lizard', or 'spock').
 * @param {string} computerChoice - The computer's choice ('rock', 'paper', 'scissors', 'lizard', or 'spock').
 * @returns {string} The winner of the game ('player', 'computer', or 'tie').
 */
function getWinner(playerChoice, computerChoice) {}

/**
 * Plays the game by comparing the player's choice with the computer's choice.
 * Logs the choices and the result of the game.
 * @param {string} playerChoice - The player's choice ('rock', 'paper', 'scissors', 'lizard', or 'spock').
 */
function playGame(playerChoice) {}

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Array of possible choices in the game
const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

// Function to get a random choice for the computer
function getRandomChoice() {
  // Generate a random index based on the length of the choices array
  const randomIndex = Math.floor(Math.random() * choices.length);
  // Return the choice at the random index
  return choices[randomIndex];
}

// Function to determine the winner of the game
function getWinner(playerChoice, computerChoice) {
  // If both choices are the same, it's a tie
  if (playerChoice === computerChoice) {
    return 'tie';
  }
  // Determine the winner based on the rules of the game
  if (
    (playerChoice === 'rock' && (computerChoice === 'scissors' || computerChoice === 'lizard')) ||
    (playerChoice === 'paper' && (computerChoice === 'rock' || computerChoice === 'spock')) ||
    (playerChoice === 'scissors' && (computerChoice === 'paper' || computerChoice === 'lizard')) ||
    (playerChoice === 'lizard' && (computerChoice === 'spock' || computerChoice === 'paper')) ||
    (playerChoice === 'spock' && (computerChoice === 'scissors' || computerChoice === 'rock'))
  ) {
    // If the player's choice beats the computer's choice, return 'player'
    return 'player';
  } else {
    // Otherwise, return 'computer'
    return 'computer';
  }
}

// Function to play the game
function playGame(playerChoice) {
    // Check if the player's choice is valid
    if (!choices.includes(playerChoice.toLowerCase())) {
        // If the choice is not valid, log an error message and exit the game
        console.log('Invalid choice. Exiting the game.');
        rl.close();
        return;
    }
    // Get the computer's choice
    const computerChoice = getRandomChoice();
    // Determine the winner
    const winner = getWinner(playerChoice, computerChoice);
    // Display the player's choice
    console.log(`Player chose ${playerChoice}`);
    // Display the computer's choice
    console.log(`Computer chose ${computerChoice}`);
    // Display the winner
    console.log(`The winner is: ${winner}`);
    askToPlayAgain();
}

function askToPlayAgain() {
    rl.question('Play again? Type "exit" to quit or choose rock, paper, scissors, lizard, or spock: ', (answer) => {
        if (answer.toLowerCase() === 'exit' || answer.trim() === '') {
            rl.close();
        } else {
            playGame(answer);
        }
    });
}

rl.question('Choose rock, paper, scissors, lizard, or spock: ', playGame);

module.exports = { getRandomChoice, getWinner };
