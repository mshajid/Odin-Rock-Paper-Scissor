function computerPlay() {
    const choices = Math.floor(Math.random()* 3);
    if (choices == 0) {
        console.log("Rock");
    } else if (choices == 1) {
        console.log("Paper");
    } else if (choices == 2) {
        console.log("Scissor");
    }
    return choices
}

computerPlay();

function playRound (playerSelection,computerSelection) {
    if ((playerSelection == "Rock" && computerSelection == "Scissor") ||
    (playerSelection == "Paper" && computerSelection == "Rock") ||
    (playerSelection == "Scissor" && computerSelection == "Rock")) {
        return "Player wins!"

    } else if ((computerSelection == "Rock" && playerSelection == "Scissor") ||
    (computerSelection == "Paper" && playerSelection == "Scissor") ||
    (computerSelection == "Scissor" && playerSelection == "Rock")) {
        return "Computer Wins!"
    } else if ((playerSelection == "Rock" && computerSelection == "Rock") ||
    (playerSelection == "Scissor" && computerSelection == "Scissor") || 
    (playerSelection == "Paper" && computerSelection == "Paper")) {
        return "It's a Time!"
    }
    

}

const playerSelection = "Rock";
computerSelection = computerPlay();