let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
    return Math.floor(Math.random() * 10)
  }
  
  function compareGuesses(humanGuess, computerGuess, targetNumber) {
    if (Math.abs(targetNumber - humanGuess) < Math.abs(targetNumber - computerGuess)){return true}
    else if (Math.abs(targetNumber - computerGuess) < Math.abs(targetNumber - humanGuess)) {
      return false
    }
    else {
      return true
    }
  }
  
  function updateScore(string) {
    
    if (string ==='human') {
      humanScore += 1;
    }
    else {
      computerScore += 1;
    }
  }
  
  function advanceRound() {
    currentRoundNumber += 1;
  }