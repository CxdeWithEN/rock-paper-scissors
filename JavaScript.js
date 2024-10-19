const playerDisplay = document.getElementById("player-choice");
const computerDisplay = document.getElementById("computer-choice");
const resultDisplay = document.getElementById("resultDisplay");

const choices = ["Rock", "Paper", "Scissors"];

function Game(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    const getResult = (playerChoice, computerChoice) =>
    playerChoice === computerChoice ? "It's a TIE!":
    
    (playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice === "Paper" && computerChoice === "Rock") ||
    (playerChoice === "Scissors" && computerChoice === "Paper")
    
    ? "You WIN!" : "You LOSE!";

    const result = getResult(playerChoice, computerChoice);
    resultDisplay.textContent = result;
    playerDisplay.textContent = `Player: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;

    resultDisplay.style.backgroundColor =
    result === "It's a TIE!" ? "#0000FF"
    : result === "You WIN!" ? "#008000"
    : "#FF0000";
    resultDisplay.style.border = "2px solid transparent"
    resultDisplay.style.color = "#FFFFFF"
}