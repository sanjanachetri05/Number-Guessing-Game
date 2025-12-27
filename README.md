# 🎮 Number Guessing Game

A fun, interactive logic-based game built with Vanilla JavaScript. The application challenges users to guess a randomly generated number between 1 and 100, providing real-time feedback and tracking performance.

## 🚀 Live Demo
*()*

## ✨ Key Features
- **Dynamic Randomization:** Generates a new secret number (1-100) using the `Math` library for every new game.
- **Real-Time Hints:** Provides immediate visual and textual feedback ("Too High" or "Too Low") to guide the player.
- **Performance Tracking:** A built-in counter tracks the number of attempts taken to reach the correct answer.
- **Intuitive UI:** Input fields automatically disable upon winning, and a "Play Again" button resets the game state seamlessly.
- **Keyboard Support:** Users can press the `Enter` key to submit guesses, improving the gaming experience.

## 🛠️ Technical Implementation
- **Math Logic:** Uses `Math.floor(Math.random() * 100) + 1` for target number generation.
- **DOM Manipulation:** Dynamically updates message text, attempt counts, and CSS styles based on game outcomes.
- **State Control:** Functions to manage the transition between 'Active Game' and 'Game Over' states without page reloads.



## 📂 Project Structure
```text
Number-Guessing-Game/
│
├── index.html    # Game structure and layout
├── style.css     # Responsive design and feedback colors
└── script.js     # Comparison logic and attempt tracking
