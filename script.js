// Wait for the DOM to fully load before running the script
document.addEventListener("DOMContentLoaded", () => {
    // Get references to the buttons and result element
    const rockButton = document.getElementById("rock");
    const paperButton = document.getElementById("paper");
    const scissorsButton = document.getElementById("scissors");
    const resultElement = document.getElementById("result");

    // Function to play the game
    function playGame(playerChoice) {
        // Generate the computer's choice
        const randomValue = Math.random();
        let computerChoice;
        if (randomValue < 0.33) {
            computerChoice = "Rock";
        } else if (randomValue < 0.66) {
            computerChoice = "Paper";
        } else {
            computerChoice = "Scissors";
        }

        // Determine the winner
        if (playerChoice === computerChoice) {
            return `It's a tie! Computer chose ${computerChoice}.`;
        }

        if (
            (playerChoice === "Rock" && computerChoice === "Scissors") ||
            (playerChoice === "Paper" && computerChoice === "Rock") ||
            (playerChoice === "Scissors" && computerChoice === "Paper")
        ) {
            return `You win! Computer chose ${computerChoice}.`;
        } else {
            return `You lose! Computer chose ${computerChoice}.`;
        }
    }

    // Add event listeners to the buttons
    rockButton.addEventListener("click", () => {
        const result = playGame("Rock");
        resultElement.textContent = result;
    });

    paperButton.addEventListener("click", () => {
        const result = playGame("Paper");
        resultElement.textContent = result;
    });

    scissorsButton.addEventListener("click", () => {
        const result = playGame("Scissors");
        resultElement.textContent = result;
    });
});