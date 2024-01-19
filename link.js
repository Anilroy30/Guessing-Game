let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomValue = Math.ceil(Math.random() * 100);

function checkGuess() {
    let guessedValue = parseInt(userInput.value);

    if (guessedValue > randomValue) {
        gameResult.textContent = "Too High! Try Again.";
        gameResult.style.backgroundColor = "#1e217c";
    } else if (guessedValue < randomValue) {
        gameResult.textContent = "Too Low! Try Again."
        gameResult.style.backgroundColor = "#1e217c";
    } else if (guessedValue === randomValue) {
        gameResult.textContent = "Congratulations! You got it right."
        gameResult.style.backgroundColor = "green";
    } else {
        gameResult.textContent = "Please provide a Valid Input."
        gameResult.style.backgroundColor = "red";
    }

}