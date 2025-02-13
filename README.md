# Whack-a-Mole

A state-of-the-art Whack-a-Mole game where moles pop up from random holes and the player must click them before they disappear. The game features dynamic difficulty adjustments, sound effects, and visual particle effects when moles are hit.

## How It Works

- **Game Board:** A 3x3 grid represents the mole holes.
- **Gameplay:** Moles pop up at random intervals with their appearance duration shortening as the game progresses, increasing the challenge.
- **Scoring & Timer:** Clicking on a mole increases your score. The game lasts 30 seconds.
- **Effects:** A pop sound plays when a mole appears and a hit sound along with particle effects are triggered when you click a mole.

## Files

- `index.html` - Contains the HTML structure of the game.
- `style.css` - Provides modern styling and smooth animations.
- `script.js` - Implements the game logic including mole spawning, score tracking, dynamic difficulty, and visual/audio feedback.

## Setup

1. Clone or download the repository.
2. Place a mole image in the appropriate location or adjust the CSS (`mole.png`) as needed.
3. Ensure the sound files (`pop.mp3` and `hit.mp3`) are located in a `sounds/` folder (or update the paths in `index.html`).
4. Open `index.html` in your browser to play the game.

## Enjoy!

Click the **Start Game** button to begin. Try to hit as many moles as possible before time runs out!
