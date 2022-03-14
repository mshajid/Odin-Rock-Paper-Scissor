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

console.log(computerPlay());


function playRound (playerSelection, computerSelection) {
    if ((playerSelection == "Rock" && computerSelection == "Scissor") || 
        (playerSelection == "Paper" && computerSelection == "Rock" ) ||
        (playerSelection == "Scissor" && computerSelection == "Paper")) {
            return "Player Wins " + playerSelection + " Beats " + computerSelection;

    } else if ((computerSelection == "Rock" && playerSelection == "Scissor") ||
        (computerSelection == "Paper" && playerSelection == "Rock") ||
        (computerSelection == "Scissor" && playerSelection == "Paper")){
            return "Computer Wins " + computerSelection + " Beats " + playerSelection;

    } else if ((playerSelection == "Rock" && computerSelection =="Rock") ||
        (playerSelection == "Paper" && computerSelection == "Paper") ||
        (playerSelection == "Scissor" && computerSelection == "Scissor")) {
            return "It's a Tie " + playerSelection + " Tied " + computerSelection;
    }
}





// function playRound (playerSelection, computerSelection) {
//     if (playerSelection == "Rock" && computerSelection == "Scissor") {
//         return "Player Wins - " + playerSelection + " Beats " + computerSelection;

//     } else if (playerSelection == "Paper" && computerSelection == "Rock") {
//         return "Player Wins - " + playerSelection + " Beats " + computerSelection;

//     } else if (playerSelection == "Scissor" && computerSelection == "Paper") {
//         return "Player Wins - " + playerSelection + " Beats " + computerSelection;

//     } else if (computerSelection == "Rock" && playerSelection == "Scissor") {
//         return "Computer Wins - " + computerSelection + " Beats " + playerSelection;

//     } else if (computerSelection == "Paper" && playerSelection == "Rock") {
//         return "Computer Wins - " + computerSelection + " Beats " + playerSelection;

//     } else if (computerSelection == "Scissor" && playerSelection == "Paper") {
//         return "Computer Wins - " + computerSelection + " Beats " + playerSelection;

//     } else if (playerSelection == "Rock" && computerSelection == "Rock") {
//         return "It's a Tie - " + playerSelection + " Tied with " + computerSelection;

//     } else if (playerSelection == "Paper" && computerSelection == "Paper") {
//         return "It's a Tie - " + playerSelection + " Tied with " + computerSelection;

//     } else if (playerSelection == "Scissor" && computerSelection =="Scissor") {
//         return "It's a Tie - " + playerSelection + " Tied with " + computerSelection;
//     }
// }



// function playRound (playerSelection, computerSelection) {
   

//     if ((playerSelection == "Rock" && computerSelection == "Scissor") ||
//         (playerSelection == "Paper" && computerSelection == "Rock") ||
//         (playerSelection == "Scissor" && computerSelection == "Paper")) {
//             return "Player wins!";
//             // console.log("Player Wins");

//     } else if ((computerSelection == "Rock" && playerSelection == "Scissor") ||
//         (computerSelection == "Paper" && playerSelection == "Rock") ||
//         (computerSelection == "Scissor" && playerSelection == "Paper")) {
//             return "Computer Wins!";
//             // console.log("Computer Wins");

//     } else if ((playerSelection == "Rock" && computerSelection == "Rock") ||
//         (playerSelection == "Scissor" && computerSelection == "Scissor") || 
//         (playerSelection == "Paper" && computerSelection == "Paper")) {
//             return  "It's a Tie!";
//             // console.log("It's a Tie");
//     }
// }

const playerSelection = "Paper";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));