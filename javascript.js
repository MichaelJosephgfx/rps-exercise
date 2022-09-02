//RPS Exercise

//Computer's Choice

function getComputerChoice(Rock, Paper, Scissors) {
    let integer = Math.floor(Math.random()*3) + 1;
    if (integer === 1) {
        return 'rock';
    }
    else if (integer === 2) {
        return 'paper';
    }
    else {
        return 'scissors';
    }
}

getComputerChoice();

//Player's Choice

function playRound (playerSelection, computerSelection) {
    const rock = 'rock';
    const paper = 'paper';
    const scissors = 'scissors';
    const answer = ('rock', 'paper', 'scissors');

return playerSelection;
}
