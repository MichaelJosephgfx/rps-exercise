//RPS Exercise

//Computer's Choice................................

function getComputerChoice() {
    let integer = Math.floor(Math.random()*3) + 1;
    if (integer === 1) {
        return 'rock'.toLowerCase();
    }
    else if (integer === 2) {
        return 'paper'.toLowerCase();
    }
    else {
        return 'scissors'.toLowerCase();
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

// GLOBAL SCOPE VARIABLES

let playerSelection = prompt('Make your choice: rock, paper, or scissors.').toLowerCase();
let computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

let playerWins = "You won this round!";
let compWins = "You lost, the computer won this one!";
let tie = "It's a tie!";
let compDefeat = "You won the game!";
let playerDefeat = "You lost the game!";

let gameResult = playRound();
    
//GAME.......................................................

function game() {
    for (let i = 1; i < 5; i++) {
        console.log(`Round number: ${i}`);
        let playerSelection = prompt('Make your choice: rock, paper, or scissors.').toLowerCase();
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        playRound(playerSelection, computerSelection);   
    }
    
}

game();

