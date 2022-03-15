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


function playRound (playerSelection, computerSelection) {
    
    if ((playerSelection == "Rock" && computerSelection == "Scissor") || 
        (playerSelection == "Paper" && computerSelection == "Rock" ) ||
        (playerSelection == "Scissor" && computerSelection == "Paper")) {
            return "Player Wins " + playerSelection + " Beats " + computerSelection;

    } else if ((computerSelection == "Rock" && playerSelection == "Scissor") ||
        (computerSelection == "Paper" && playerSelection == "Rock") ||
        (computerSelection == "Scissor" && playerSelection == "Paper")) {
            return "Computer Wins " + computerSelection + " Beats " + playerSelection;

    } else if ((playerSelection == "Rock" && computerSelection =="Rock") ||
        (playerSelection == "Paper" && computerSelection == "Paper") ||
        (playerSelection == "Scissor" && computerSelection == "Scissor")) {
            return "It's a Tie " + playerSelection + " Tied " + computerSelection;
    }
}


let computer = computerPlay();
const playerSelection = "Rock";
const computerSelection = computer;
console.log(computer);
console.log(playRound(playerSelection, computerSelection));





