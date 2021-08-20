let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
  return Math.floor(Math.random() * 10);
}

function getAbsoluteDistance(guess, target) {
  return Math.abs(guess - target);
}

function compareGuesses(userGuess, computerGuess, targetNumber) {
    if (getAbsoluteDistance(userGuess, targetNumber) <= getAbsoluteDistance(computerGuess, targetNumber)) {
      return true;
    } else {
      return false;
    };
}

function updateScore(winner){
  if (winner === 'human') {
    humanScore += 1;
  } else if (winner === 'computer') {
    computerScore += 1;
  }
}

function advanceRound() {
  currentRoundNumber += 1;
}
