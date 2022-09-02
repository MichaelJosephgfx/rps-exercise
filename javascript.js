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
    let rock = 'rock';
    let paper = 'paper';
    let scissors = 'scissors';
    let answer = rock + paper + scissors;
    
    if (playerSelection) {
        return (answer);
    }

    else {
        return (getComputerChoice());
    }
}
