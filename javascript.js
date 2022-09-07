//RPS Exercise

//Computer's Choice................................

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




//Player's Choice........................................

function playRound (playerSelection, computerSelection) {
    return 'You won! Paper beats rock.'
}
const playerSelection = "rock";
const computerSelection = getComputerChoice();