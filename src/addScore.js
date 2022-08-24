import renderScoreOnPage from './renderPage';

const addScore = async () => {
  const gameApiUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
  const nameInput = document.querySelector('.name-input');
  const scoreInput = document.querySelector('.score-input');
  const id = 'Zl4d7IVkemOTTVg2fUab';
  const scoresUrl = `${gameApiUrl}${id}/scores/`;
  const player = {
    user: nameInput.value,
    score: scoreInput.value,
  };
  await fetch(scoresUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(player),
  });
  renderScoreOnPage(player);
};

export default addScore;