# Whack-a-Mole

A state-of-the-art Whack-a-Mole game where moles pop up from random holes and the player must click on them before they disappear. The game includes dynamic difficulty adjustments, sound effects, and visual particle effects for hits.

## How It Works

- **Game Board:** A 3x3 grid represents the mole holes.
- **Gameplay:** Moles pop up at random intervals from the holes. The mole's visible time decreases as the game progresses, increasing the difficulty.
- **Scoring & Timer:** Clicking on a mole increases your score. The game lasts 30 seconds.
- **Effects:** Each mole appearance plays a pop sound, and hitting a mole triggers a hit sound along with particle effects at the click location.

## Files

- `index.html` - Contains the HTML structure of the game.
- `style.css` - Provides modern styling and smooth animations.
- `script.js` - Implements the game logic including mole spawning, score tracking, dynamic difficulty, and visual/audio feedback.

## Setup

1. Clone or download the repository.
2. Place a mole image in the same directory or adjust the CSS path (`mole.png`) as needed.
3. Ensure the sound files (`pop.mp3` and `hit.mp3`) are located in a `sounds/` folder (or update the paths in `index.html`).
4. Open `index.html` in your browser to play the game.

## Enjoy!

Click the **Start Game** button to begin. Try to hit as many moles as possible before time runs out.
