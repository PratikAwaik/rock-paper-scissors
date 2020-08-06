// Random choice for computer
function computerPlay() {
    let choice = ["rock", "paper", "scissors"]
    return choice[Math.floor(Math.random() * choice.length)]
}

// Decides who wins the match
function playRound(playerSelection, computerSelection) {
    let result;
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();
    if (player == "rock") {
        if (computer == "rock") {
            result = ["It's a tie!", 0, 0];
        }
        else if (computer == "paper") {
            result = ["You lose! Paper beats Rock!", 0, 1];
        }
        else {
            result = ["You win! Rock beats Scissors!", 1, 0];
        }
    }

    else if (player == "paper") {
        if (computer == "rock") {
            result = ["You win! Paper beats Rock!", 1, 0];
        }
        else if (computer == "paper") {
            result = ["It's a tie!", 0, 0];
        }
        else{
            result = ["You lose! Scissors beats Paper!", 0, 1];
        }
    }

    else {
        if (computer == "rock") {
            result = ["You lose! Rock beats Scissors!", 0, 1];
        }
        else if (computer == "paper") {
            result = ["You win! Scissors beats Paper!", 1, 0];
        }
        else{
            result = ["It's a tie!", 0, 0];
        }
    }

    return result;
}

// plays the game
function game(elem) {
    let playerChoice;
    let playerScore = 0;
    let computerScore = 0;
    playerChoice = document.getElementById(elem.id).value;
    document.getElementById("player-choice").innerHTML = playerChoice[0].toUpperCase() + playerChoice.slice(1);
    let computerChoice = computerPlay();
    document.getElementById("computer-choice").innerHTML = computerChoice[0].toUpperCase() + computerChoice.slice(1);
    results = playRound(playerChoice, computerChoice); // results[0] will be used later.
    playerScore += results[1];
    computerScore += results[2];

    let finalResult;
    if (playerScore > computerScore) {
        finalResult = "Player wins";
    }
    else if (computerScore > playerScore) {
        finalResult = "Computer wins";
    }
    else {
        finalResult = "Game Tied";
    }

    document.getElementById("result").innerHTML = finalResult;
    return;
}