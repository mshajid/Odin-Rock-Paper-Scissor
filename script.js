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

}

const playerSelection = "Rock";
computerSelection = computerPlay();