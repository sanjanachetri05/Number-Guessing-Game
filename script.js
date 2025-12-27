let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessInput = document.getElementById('guessInput');
const checkBtn = document.getElementById('checkBtn');
const message = document.getElementById('message');
const attemptDisplay = document.getElementById('attemptCount');
const restartBtn = document.getElementById('restartBtn');

function checkGuess() {
    const userGuess = Number(guessInput.value);
    attempts++;
    attemptDisplay.textContent = attempts;

    if (!userGuess || userGuess < 1 || userGuess > 100) {
        message.textContent = "Please enter a valid number between 1 and 100!";
        message.style.color = "orange";
    } else if (userGuess === randomNumber) {
        message.textContent = `🎉 Correct! The number was ${randomNumber}.`;
        message.style.color = "green";
        gameOver();
    } else if (userGuess > randomNumber) {
        message.textContent = "📈 Too high! Try again.";
        message.style.color = "red";
    } else {
        message.textContent = "📉 Too low! Try again.";
        message.style.color = "red";
    }

    guessInput.value = "";
    guessInput.focus();
}

function gameOver() {
    guessInput.disabled = true;
    checkBtn.disabled = true;
    restartBtn.style.display = "inline-block";
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    attemptDisplay.textContent = attempts;
    message.textContent = "";
    guessInput.disabled = false;
    checkBtn.disabled = false;
    restartBtn.style.display = "none";
    guessInput.focus();
}

checkBtn.addEventListener('click', checkGuess);
restartBtn.addEventListener('click', resetGame);

// Allow pressing "Enter"
guessInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') checkGuess();
});