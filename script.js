const values = ["Rock", "Paper", "Scissors"];
const usrInput = document.getElementById("usrInput");
const playGameBtn = document.getElementById("play");


function getComputerChoice() {
    const random = Math.floor(Math.random() * values.length);
    const insensitiveChoice = values[random].toLowerCase();
    return insensitiveChoice;

}

function getHumanChoice() {
    const choice = prompt("Enter your choice: Rock, Paper, or Scissors");
    const insensitiveChoice = choice.toLowerCase();
    return insensitiveChoice;
}

function playGame() {

    let userScore = 0;
    let comScore = 0;

    function playRound() {
    const userSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    if (userSelection === computerSelection) {
        alert("It's a tie!");
    } else if (
        (userSelection === "rock" && computerSelection === "scissors") ||
        (userSelection === "paper" && computerSelection === "rock") ||
        (userSelection === "scissors" && computerSelection === "paper")
    ) {

        alert("You win! " + userSelection + " beats " + computerSelection);
        userScore++;
    } else {
        alert("You lose! " + computerSelection + " beats " + userSelection);
        comScore++;
    }
}


    for (let i = 0; i < 5; i++){
        alert("Round " + (i + 1));
        playRound();
    }

    if (userScore > comScore) {
        alert("Congratulations! You are The Winner");
    } else {
        alert("You're lose to a Computer");
    }
}

playGameBtn.addEventListener("click", playGame);