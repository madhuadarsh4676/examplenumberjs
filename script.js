'use strict';
// console.log(document.querySelector('.message').textContentt);

// document.querySelector('.message').textContent = 'correct number...';
// document.querySelector('.score').textContent = '13';
// document.querySelector('.highscore').textContent = '20';
// document.querySelector('.guess').value = '27';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// document.querySelector('.again').addEventListener('click', function () {
//   document.querySelector('.score').textContent = '20';
//   document.querySelector('.highscore').textContent = '0';
//   document.querySelector('.message').textContent = 'Start guessing...';
// });

// document.querySelector('.again').addEventListener('click', function () {
//   location.reload();
// });

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  if (!guess) {
    document.querySelector('.message').textContent = 'no number';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🥳 Correct number!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'The number is greter';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'The number is lower';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'Start Gussing the number';
  document.querySelector('.guess').textContent = '';
  document.querySelector('.number').style.width = '15rem';
});
