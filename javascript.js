//RPS Exercise

/*
function getComputerChoice(Rock, Paper, Scissors) {
    let comp = ('Rock', 'Paper', 'Scissors')
    return Math.floor(Math.random()*3) + 1;
}

getComputerChoice(); */




function getComputerChoice(Rock, Paper, Scissors) {
    let integer = '';
    Math.floor(Math.random()*3) + 1;
    if (integer > 1) {
        return 'rock'
    }
    else if (integer > 2) {
        return 'paper'
    }
    else {
        return 'scissors';
    }
}

getComputerChoice();