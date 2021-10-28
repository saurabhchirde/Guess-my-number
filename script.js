'use strict';

let secretnum = Math.ceil(Math.random() * 20);
console.log(secretnum);
let score = 20;
let highsc = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guessnum = Number(document.querySelector('.guess').value);
  console.log(guessnum);

  if (!guessnum) {
    document.querySelector('.message').textContent = 'Not a number !';
  } else if (guessnum === secretnum) {
    document.querySelector('.message').textContent = 'Correct number! 🎊 ';
    document.querySelector('.number').textContent = secretnum;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.score').textContent = score;
    if (score > highsc) highsc = score;
    document.querySelector('.highscore').textContent = highsc;
  }
  //   Merged below 2 else if in this single else if
  else if (guessnum !== secretnum) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guessnum > secretnum ? 'Too High' : 'Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the Game ';
      document.querySelector('body').style.backgroundColor = 'rgb(255,0,0)';
      document.querySelector('.number').textContent = secretnum;
      document.querySelector('.score').textContent = 0;
    }
  }
  //   In Above else if merged below 2 else if
  //   } else if (guessnum > secretnum) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too High';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You lost the Game ';
  //       document.querySelector('body').style.backgroundColor = 'rgb(255,0,0)';
  //       document.querySelector('.number').textContent = secretnum;
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   } else if (guessnum < secretnum) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too Low';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You lost the Game ';
  //       document.querySelector('body').style.backgroundColor = 'rgb(255,0,0)';
  //       document.querySelector('.number').textContent = secretnum;
  //       document.querySelector('.score').textContent = 0;
  //     }
  //
});
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = 'Start guessing...';
  score = 20;
  document.querySelector('.score').textContent = score;
  secretnum = Math.ceil(Math.random() * 20);
  //   document.querySelector('.highscore').textContent = 0;
  console.log(secretnum);
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
});
