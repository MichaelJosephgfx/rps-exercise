//RPS Exercise

// GLOBAL SCOPE VARIABLES


let playerWins = "You won this round!";
let compWins = "You lost, the computer won this one!";
let tie = "It's a tie!";
let compDefeat = "You won the game!";
let playerDefeat = "You lost the game!";


//Computer's Choice................................

function getComputerChoice() {
    let rando = Math.floor(Math.random()*3) + 1;
    if (rando === 1) {
        return 'rock'.toLowerCase();
    }
    else if (rando === 2) {
        return 'paper'.toLowerCase();
    }
    else {
        return 'scissors'.toLowerCase();
    }
}
/*
let playerSelection = prompt('Make your choice: rock, paper, or scissors.').toLowerCase();
let computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection)); */

//Player's Choice........................................

function playRound (playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return `Tie! You both picked ${playerSelection} Tie Score: ${++tieScore}`;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return `You win! Rock beats scissors. Player's Score: ${++playerScore}`;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return `You win! Paper beats rock. Player's Score: ${++playerScore}`;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return `You win! Scissors beats paper. Player's Score: ${++playerScore}`;
    } else {  
        return `You lose! ${computerSelection} beats ${playerSelection}. Computer's Score: ${++compScore}`;
    }
} 


/*
function winner(playerSelection, computerSelection) {
    playRound();
    if (playerSelection < computerSelection) {
        return `player scored! ${++playerScore}`;
    }
    else if (computerSelection < playerSelection) {
        return `comp scored! ${++compScore}`;
    }
    else {
        return `Looks like a tie! ${++tieScore}`;
    }
} */

let playerScore = 0;
let compScore = 0;
let tieScore = 0;

//GAME.......................................................

function game() {

    for (let i = 1; i < 6; i++) {
        console.log(`Round number: ${i}`);
        let playerSelection = prompt('Make your choice: rock, paper, or scissors.').toLowerCase();
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection)); 
    }

}
console.log(game());



