// Declare global variables
let wins = 0;
let losses = 0;
let draws = 0;
let results = [];
let gameStarted = false;

// Function 1: Start the game
function startGame() {

let name = document.getElementById("playerName").value.trim();

// Validate empty name
if (name === "") {
    alert("Please enter your name.");
    return;
}

// Escape special HTML characters in the name
let safeName = document.createElement("span");
safeName.textContent = name;

// Display welcome message
document.getElementById("welcome").innerHTML =
    "Welcome, " + safeName.innerHTML + "!";

// Display starting date and time
document.getElementById("startTime").innerHTML =
    "Game started on: " + Date();

gameStarted = true;
}

// Function 2: Generate computer choice
function getComputerChoice() {

let choices = ["rock", "paper", "scissors"];

let randomIndex = Math.floor(Math.random() * 3);

return choices[randomIndex];
}

// Function 3: Play one round
function playRound(playerChoice) {

// Check whether the game has started
if (!gameStarted) {
    alert("Click Start Game first.");
    return;
}

let computerChoice = getComputerChoice();
let result;
let colour;

// Change player and computer images
document.getElementById("playerImg").src =
    playerChoice + ".png";

document.getElementById("computerImg").src =
    computerChoice + ".png";

// Determine the result
if (playerChoice === computerChoice) {

    result = "Draw";
    colour = "grey";
    draws++;

} else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
) {

    result = "Win";
    colour = "green";
    wins++;

} else {

    result = "Lose";
    colour = "red";
    losses++;
}

// Display result and change its colour
document.getElementById("result").innerHTML = result;
document.getElementById("result").style.color = colour;

// Update scoreboard
document.getElementById("wins").innerHTML = wins;
document.getElementById("losses").innerHTML = losses;
document.getElementById("draws").innerHTML = draws;

// Store result in array
results.push(result);

// Add a new row to the history table
document.getElementById("historyBody").innerHTML +=
    "<tr>" +
    "<td>" + results.length + "</td>" +
    "<td>" + playerChoice + "</td>" +
    "<td>" + computerChoice + "</td>" +
    "<td style='color:" + colour + "'>" + result + "</td>" +
    "</tr>";

// Clear previous summary
document.getElementById("summary").innerHTML = "";
}

// Function 4: Show game summary
function showSummary() {

let totalWins = 0;

// Count wins using a for loop
for (let i = 0; i < results.length; i++) {

    if (results[i] === "Win") {
        totalWins++;
    }
}

let percentage = 0;

// Avoid division by zero
if (results.length > 0) {
    percentage = Math.round(
        (totalWins / results.length) * 100
    );
}

// Display summary
document.getElementById("summary").innerHTML =
    "You played " + results.length +
    " rounds and won " + percentage + "%.";
}

// Function 5: Reset the game
function resetGame() {

// Reset all variables
wins = 0;
losses = 0;
draws = 0;
results = [];
gameStarted = false;

// Reset scoreboard
document.getElementById("wins").innerHTML = 0;
document.getElementById("losses").innerHTML = 0;
document.getElementById("draws").innerHTML = 0;

// Clear messages and history
document.getElementById("historyBody").innerHTML = "";
document.getElementById("result").innerHTML = "";
document.getElementById("summary").innerHTML = "";
document.getElementById("welcome").innerHTML = "";
document.getElementById("startTime").innerHTML = "";

// Clear name
document.getElementById("playerName").value = "";

// Reset images
document.getElementById("playerImg").src = "rock.png";
document.getElementById("computerImg").src = "rock.png";
}