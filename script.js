const values = ["Rock", "Paper", "Scissors"];
const usrInput = document.getElementById("usrInput");


function getComputerChoice() {
    const random = Math.floor(Math.random() * values.length);
    return values[random];

}

function getHumanChoice() {
    const choice = prompt("Enter your choice: Rock, Paper, or Scissors");
    return choice;
}

usrInput.addEventListener("click", getHumanChoice);