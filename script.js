let winner = 0;
let humanScore = 0;
let computerScore = 0;

function computerPlay() {
    const choices = Math.floor(Math.random() * 3); 
    if (choices == 0) {
        return "Rock";
        // console.log("Rock");
    } else if (choices == 1) {
        return "Paper";
        // console.log("Paper");
    } else if (choices == 2) {
        return "Scissor";
        // console.log("Scissor");
    }
   return choices
}

game();

function game () {
    while (humanScore <= 5 && computerScore <= 5) {
        let playerSelection = prompt("Enter Rock, Paper, Scissor");
        let computerSelection = computerPlay();
        // playerSelection = playerSelection.toUpperCase();
        // computerSelection = computerSelection.toUpperCase();
        alert(playRound(playerSelection, computerSelection));
    }
    alert(winCondition());
}



function playRound (playerSelection, computerSelection) {
    
    if ((playerSelection == "Rock" && computerSelection == "Scissor") || 
        (playerSelection == "Paper" && computerSelection == "Rock" ) ||
        (playerSelection == "Scissor" && computerSelection == "Paper")) {
            humanScore += 1;
            return "Player Wins " + playerSelection + " Beats " + computerSelection;

    } else if ((computerSelection == "Rock" && playerSelection == "Scissor") ||
        (computerSelection == "Paper" && playerSelection == "Rock") ||
        (computerSelection == "Scissor" && playerSelection == "Paper")) {
            computerScore += 1;
            return "Computer Wins " + computerSelection + " Beats " + playerSelection;

    } else if ((playerSelection == "Rock" && computerSelection =="Rock") ||
        (playerSelection == "Paper" && computerSelection == "Paper") ||
        (playerSelection == "Scissor" && computerSelection == "Scissor")) {
            return "It's a Tie " + playerSelection + " Tied " + computerSelection;
    } else return "Enter a Valid Move.";
}

function winCondition () {
    if (humanScore == 5) {
        return "Player Wins";
    } else if (computerScore == 5) {
        return "Computer Wins";
    }
}

// let computer = computerPlay();
// const playerSelection = "Rock";
// const computerSelection = computer;
// console.log(computer);
// console.log(playRound(playerSelection, computerSelection));





