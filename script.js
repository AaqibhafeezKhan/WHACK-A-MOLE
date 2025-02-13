document.addEventListener('DOMContentLoaded', () => {
  const holes = document.querySelectorAll('.hole');
  const scoreDisplay = document.getElementById('score');
  const timeDisplay = document.getElementById('time');
  const startBtn = document.getElementById('start-btn');
  const popSound = document.getElementById('pop-sound');
  const hitSound = document.getElementById('hit-sound');
  let lastHole;
  let timeUp = false;
  let score = 0;
  const gameTime = 30;
  let startTime;

  function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

  function randomHole(holes) {
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    if (hole === lastHole) {
      return randomHole(holes);
    }
    lastHole = hole;
    return hole;
  }

  function peep() {
    if (timeUp) return;
    const elapsed = Date.now() - startTime;
    const timeLeftMs = gameTime * 1000 - elapsed;
    const difficultyFactor = 0.5 + (timeLeftMs / (gameTime * 1000)) * 0.5;
    const minTime = 600 * difficultyFactor;
    const maxTime = 1000 * difficultyFactor;
    const time = randomTime(minTime, maxTime);
    const hole = randomHole(holes);
    hole.classList.add('up');
    popSound.currentTime = 0;
    popSound.play();
    setTimeout(() => {
      hole.classList.remove('up');
      if (!timeUp) peep();
    }, time);
  }

  function startGame() {
    score = 0;
    scoreDisplay.textContent = score;
    timeUp = false;
    startBtn.disabled = true;
    startTime = Date.now();
    timeDisplay.textContent = gameTime;
    peep();
    const timer = setInterval(() => {
      const timeLeft = gameTime - Math.floor((Date.now() - startTime) / 1000);
      timeDisplay.textContent = timeLeft;
      if (timeLeft <= 0) {
        clearInterval(timer);
        timeUp = true;
        startBtn.disabled = false;
      }
    }, 1000);
  }

  function hitMole(e) {
    score++;
    scoreDisplay.textContent = score;
    this.parentElement.classList.remove('up');
    hitSound.currentTime = 0;
    hitSound.play();
    createParticles(e.clientX, e.clientY);
  }

  function createParticles(x, y) {
    for (let i = 0; i < 10; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      particle.style.left = x + 'px';
      particle.style.top = y + 'px';
      document.body.appendChild(particle);
      particle.addEventListener('animationend', () => {
        particle.remove();
      });
    }
  }

  const moles = document.querySelectorAll('.mole');
  moles.forEach(mole => mole.addEventListener('click', hitMole));
  startBtn.addEventListener('click', startGame);
});
