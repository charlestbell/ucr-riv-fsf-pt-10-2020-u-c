var choices = ['R', 'P', 'S'];
var wins = 0;
var losses = 0;
var ties = 0;

function showStats() {
  alert(`Wins: ${wins}\nLosses: ${losses}\nTies: ${ties}`);
}

function endGame(playerChoice, compChoice) {
  alert('The computer picked ' + compChoice);

  if (playerChoice === compChoice) {
    ties++;
    alert('You tied!');
  } else if (
    (playerChoice === 'R' && compChoice === 'S') ||
    (playerChoice === 'P' && compChoice === 'R') ||
    (playerChoice === 'S' && compChoice === 'P')
  ) {
    wins++;
    alert('You won!');
  } else {
    losses++;
    alert('You lost!');
  }
}

function getComputerChoice() {
  var randomNumber = Math.floor(Math.random() * 3);

  var computerChoice = choices[randomNumber];

  return computerChoice;
}

function playGame() {
  var userChoice = window.prompt('Please enter a R, P or S');

  var computerChoice = getComputerChoice();

  endGame(userChoice, computerChoice);

  showStats();

  playGame();
}

playGame();
