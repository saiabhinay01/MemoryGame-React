# 🧠 Memory Game

A responsive Memory Card Matching Game built with **React** using functional components and a custom hook for game logic.

The objective is to match all pairs of cards before the timer reaches zero.

---

## ✨ Features

- 🎴 16 shuffled cards (8 matching pairs)
- ▶️ Start Game screen
- ⏱️ 60-second countdown timer
- 🔀 Random shuffle on every new game
- 👆 Flip two cards at a time
- ✅ Matched cards remain visible
- ❌ Unmatched cards automatically flip back
- 🚫 Prevents clicking while cards are flipping
- 📊 Move counter
- 🎯 Accuracy calculation
- 🏆 Win screen
- 💀 Lose screen
- 🃏 Reveals all cards when time runs out
- 🔄 Restart game functionality

---

## 🛠️ Built With

- React
- JavaScript (ES6+)
- CSS3

---

## 🧩 React Concepts Used

- Functional Components
- Props
- useState
- useEffect
- useRef
- Custom Hooks
- Conditional Rendering
- Event Handling
- State Management

---

## 🎮 Game Rules

- Click **Start Game** to begin.
- Match all **8 pairs** before the timer expires.
- Only two cards can be flipped at a time.
- Matching cards stay face up.
- Non-matching cards flip back after a short delay.
- The game ends when:
  - All pairs are matched (**Win**)
  - The timer reaches **0** (**Lose**)

---

## 📊 Accuracy Formula

```
Accuracy = (8 / Moves) × 100
```

where **8** is the minimum number of moves required to complete the game.

---

## 📂 Project Structure

```
src/
│
├── components/
│   ├── Card.jsx
│   ├── GameHeader.jsx
│   ├── Start.jsx
│   ├── WinMessage.jsx
│   └── LoseMessage.jsx
│
├── hooks/
│   └── useGameLogic.js
│
├── App.jsx
├── App.css
└── main.jsx
```

---

## 🚀 Future Enhancements

- Difficulty Levels
- Best Score / High Score
- Sound Effects
- Card Flip Animations
- Pause Game
- Theme Selection
- Leaderboard
