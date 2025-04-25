let rockBtn = document.getElementById("rock");
let paperBtn = document.getElementById("paper");
let scissorBtn = document.getElementById("scissor");

function rock(){
    const randomNumber = Math.random();

    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
    }
    else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
    }
    else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'scissors';
    }

    let result = '';

    if (computerMove === 'rock') {
        result = 'Tie.';
    } 
    else if (computerMove === 'paper') {
        result = 'You lose.';
    } 
    else if (computerMove === 'scissors') {
        result = 'You win.';
    }

    alert(`You picked rock. Computer picked ${computerMove}. ${result}`);
}
function paper(){
    const randomNumber = Math.random();

    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
    }
    else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
    }
    else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'scissors';
    }

    let result = '';

    if (computerMove === 'rock') {
        result = 'You win.';
    } 
    else if (computerMove === 'paper') {
        result = 'Tie.';
    } 
    else if (computerMove === 'scissors') {
        result = 'You lose.';
    }

    alert(`You picked paper. Computer picked ${computerMove}. ${result}`);
}
function scissor(){
    const randomNumber = Math.random();

    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
    }
    else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
    }
    else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'scissors';
    }

    let result = '';

    if (computerMove === 'rock') {
        result = 'You lose.';
    } 
    else if (computerMove === 'paper') {
        result = 'You win.';
    } 
    else if (computerMove === 'scissors') {
        result = 'Tie.';
    }

    alert(`You picked scissor. Computer picked ${computerMove}. ${result}`);
}

