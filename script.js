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
    let playerSelection = prompt("Enter Rock Paper Scissor");
    let computerSelection = computerPlay();

    let msg = playRound(playerSelection, computerSelection);
    console.log(msg);

    if (humanScore <= 5 && computerScore <= 5) {
        console.log("Current Score: Human:", humanScore, "Computer:", computerScore);
        setTimeout(game, 0);
    } else {
        return alert(winCondition());
    }
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
    } else return alert("Enter a Valid Move. Eg: Rock 'First Letter Capital'");
}

function winCondition () {
    if (humanScore > 5) {
        return alert("Player Wins");
    }; 

    if (computerScore > 5) {
        return alert("Computer Wins");
    };
}