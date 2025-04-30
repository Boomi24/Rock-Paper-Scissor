let rockBtn = document.getElementById("rock-btn");
let paperBtn = document.getElementById("paper-btn");
let scissorBtn = document.getElementById("scissor-btn");
let resetBtn = document.getElementById("reset-btn");
let finalResults = document.querySelector(".js-results");
let finalMoves = document.querySelector(".js-moves");
let finalScores = document.querySelector(".js-scores");

let computerMove='';

let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

updateScores();

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

    if(result === 'You win.'){
        score.wins += 1;
    }
    else if(result === 'You lose.'){
        score.losses += 1;
    }
    else if(result === 'Tie.'){
        score.ties += 1;
    }

    localStorage.setItem('score' , JSON.stringify(score));

    finalMoves.innerHTML=`"You" ${playerMove} - "Computer" ${computerChoice}`;
    finalResults.innerHTML=result;
    updateScores();

}
function updateScores(){
    finalScores.innerHTML = `Wins: ${score.wins}. Losses: ${score.losses}. Ties: ${score.ties}`;
}

