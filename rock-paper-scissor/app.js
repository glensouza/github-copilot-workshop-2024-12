// node based rock paper scissor game

// Valid choices
const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

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