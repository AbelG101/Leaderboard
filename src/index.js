import './styles.css';
import addScore from './addScore';
import getScores from './getScore';

const refreshBtn = document.querySelector('.refresh-btn');
const submitBtn = document.querySelector('.submit-btn');

refreshBtn.addEventListener('click', () => {
  getScores();
});

submitBtn.addEventListener('click', () => {
  addScore();
});
