// Random choice for computer
function computerPlay() {
    const choices = document.getElementsByClassName("computer-image");
    return choices[Math.floor(Math.random() * choices.length)];
}

// Decides who wins the match and scores accordingly
// [playerscore, computerscore]
function playRound(player, computer) {
    let result;
    if (player == "rock") {
        if (computer == "rock") {
            result = [0, 0];
        }
        else if (computer == "paper") {
            result = [0, 1];
        }
        else {
            result = [1, 0];
        }
    }

    else if (player == "paper") {
        if (computer == "rock") {
            result = [1, 0];
        }
        else if (computer == "paper") {
            result = [0, 0];
        }
        else{
            result = [0, 1];
        }
    }

    else {
        if (computer == "rock") {
            result = [0, 1];
        }
        else if (computer == "paper") {
            result = [1, 0];
        }
        else{
            result = [0, 0];
        }
    }

    return result;
}

let playerScore = document.getElementById("player-score");
let computerScore = document.getElementById("computer-score");
let rounds = document.getElementById("rounds");
let ties = document.getElementById("ties");

playerScore.innerHTML = computerScore.innerHTML = rounds.innerHTML = ties.innerHTML = 0;

// plays the game
function game(elem) {

    let player = document.getElementById(elem.id);  // element
    let computer = computerPlay();  // element 

    computer.setAttribute("src", `images/${computer.id.slice(2)}red.png`);  // change the color for pc to red

    let playerChoice = player.getAttribute("id"); 
    let computerChoice = computer.getAttribute("id").slice(2);
    
    let roundResults = playRound(playerChoice, computerChoice);

    if (roundResults[0] === 1) {
        playerScore.innerHTML++;
    }
    else if (roundResults[1] === 1) {
        computerScore.innerHTML++;
    }
    
    rounds.innerHTML++

    let finalResult;
    if (roundResults[0] > roundResults[1]) {
        finalResult = "Player wins";
    }
    else if (roundResults[1] > roundResults[0]) {
        finalResult = "Computer wins";
    }
    else {
        finalResult = "Game Tied";
        ties.innerHTML++
        
    }
    
    document.getElementById("result").innerHTML = finalResult;
    return computer;
}

const images = document.querySelectorAll(".player-image");
images.forEach(image => image.addEventListener("click", () => {
        image.setAttribute("src", `images/${image.id}green.png`);
        let pc = game(image);
        let computer = pc.getAttribute("id").slice(2);

        // change the image to default for player

        if (image.id !== "rock" && image.id !== "paper") {
            document.getElementById("rock").setAttribute("src", "images/rock.png");
            document.getElementById("paper").setAttribute("src", "images/paper.png");
        }

        else if (image.id !== "paper" && image.id !== "scissors") {
            document.getElementById("paper").setAttribute("src", "images/paper.png");
            document.getElementById("scissors").setAttribute("src", "images/scissors.png");
        }

        else if (image.id !== "scissors" && image.id !== "rock") {
            document.getElementById("rock").setAttribute("src", "images/rock.png");
            document.getElementById("scissors").setAttribute("src", "images/scissors.png");
        }

        // change the image to default for computer

        if (computer !== "rock" && computer !== "paper") {
            document.getElementById("pcrock").setAttribute("src", "images/rock.png");
            document.getElementById("pcpaper").setAttribute("src", "images/paper.png");
        }

        else if (computer !== "paper" && computer !== "scissors") {
            document.getElementById("pcpaper").setAttribute("src", "images/paper.png");
            document.getElementById("pcscissors").setAttribute("src", "images/scissors.png");
        }

        else if (computer !== "scissors" && computer !== "rock") {
            document.getElementById("pcrock").setAttribute("src", "images/rock.png");
            document.getElementById("pcscissors").setAttribute("src", "images/scissors.png");
        } 
}));