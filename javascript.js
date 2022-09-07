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

    if (playerSelection === computerSelection) {
        return `Tie! You both picked ${playerSelection}`
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You win! Rock beats scissors.';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You win! Paper beats rock.';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You win! Scissors beats paper.';
    } else {  
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }

}
const playerSelection = prompt('Make your choice: rock, paper, or scissors.').toLowerCase();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));