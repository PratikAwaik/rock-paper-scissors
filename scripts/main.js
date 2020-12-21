const computerChoices = document.querySelectorAll(".computer-choice");
const playerChoices = document.querySelectorAll(".player-choice");
let winnerStr = document.getElementById("winner-str");
let rounds = document.getElementById("rounds");
let pScoreText = document.getElementById("player-score");
let cScoreText = document.getElementById("computer-score");
let tiesText = document.getElementById("ties");
let numRounds = playerScore = computerScore = numTies = 0;

rounds.textContent += 0;
pScoreText.textContent += 0;
cScoreText.textContent += 0;
tiesText.textContent += 0;

playerChoices.forEach(choice => choice.addEventListener("click", playRound));

// Get the computer's choice and change the image to red.
function computerPlay() {
    let choice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    computerSelection = choice.getAttribute("class").split(" ")[1];
    choice.setAttribute("src", `images/${computerSelection}red.png`);
    return computerSelection;
}

function playRound() {
    computerSelection = computerPlay();
    let playerSelection = this.getAttribute("class").split(" ")[1];
    this.setAttribute("src", `images/${playerSelection}green.png`);
    rounds.textContent = `Rounds: ${++numRounds}`;

    if ((playerSelection === "rock" && computerSelection === "scissors") || 
        (playerSelection === "scissors" && computerSelection === "paper") || 
        (playerSelection === "paper" && computerSelection === "rock")) {
        
        winnerStr.textContent = "Player Wins!";
        pScoreText.textContent = `Your Score: ${++playerScore}`;
    }

    else if ((computerSelection === "rock" && playerSelection === "scissors") || 
            (computerSelection === "scissors" && playerSelection === "paper") || 
            (computerSelection === "paper" && playerSelection === "rock")) {

        winnerStr.textContent = "Computer Wins!";
        cScoreText.textContent = `Computer Score: ${++computerScore}`;
    }

    else if (playerSelection === computerSelection) {
        winnerStr.textContent = "It's a tie!";
        tiesText.textContent = `Ties: ${++numTies}`;
    }

    // reset images
    playerChoices.forEach(function (choice) {
        if (choice.getAttribute("class").split(" ")[1] !== playerSelection) {
            choice.setAttribute("src", `images/${choice.getAttribute("class").split(" ")[1]}.png`);
        }
    });

    computerChoices.forEach(function (choice) {
        if (choice.getAttribute("class").split(" ")[1] !== computerSelection) {
            choice.setAttribute("src", `images/${choice.getAttribute("class").split(" ")[1]}.png`);
        }
    });
}
