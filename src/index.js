import './styles.css';
import addScore from './modules/addScore.js';
import getScores from './modules/getScore.js';

const refreshBtn = document.querySelector('.refresh-btn');
const submitBtn = document.querySelector('.submit-btn');

refreshBtn.addEventListener('click', () => {
  getScores();
});

submitBtn.addEventListener('click', () => {
  addScore();
});
