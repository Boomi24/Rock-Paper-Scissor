let rockBtn = document.getElementById("rock");
let paperBtn = document.getElementById("paper");
let scissorBtn = document.getElementById("scissor");

let computerMove='';

function click(){
    const randomNumber = Math.random();

    computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
    }
    else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
    }
    else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'scissor';
    }
    return computerMove;    
}
let result = '';

function finalMove(playerMove){

    const computerChoice=click();
    
    if(playerMove === 'rock'){
        if (computerChoice === 'rock') {
            result = 'Tie.';
        } 
        else if (computerChoice === 'paper') {
            result = 'You lose.';
        } 
        else if (computerChoice === 'scissor') {
            result = 'You win.';
        }
        
    }
    else if(playerMove === 'paper'){
        if (computerChoice === 'paper') {
            result = 'Tie.';
        } 
        else if (computerChoice === 'rock') {
            result = 'You win.';
        } 
        else if (computerChoice === 'scissor') {
            result = 'You lose.';
        }
    }
    else if(playerMove === 'scissor'){
        if (computerChoice === 'scissor') {
            result = 'Tie.';
        } 
        else if (computerChoice === 'rock') {
            result = 'You lose.';
        } 
        else if (computerChoice === 'paper') {
            result = 'You win.';
        }
    }
    alert(`You picked ${playerMove}. Computer picked ${computerChoice}. ${result}`);
}

