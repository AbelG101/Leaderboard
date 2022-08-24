import renderScoreOnPage from './renderPage.js';

const addScore = async () => {
  const gameApiUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
  const nameValue = document.querySelector('.name-input').value.trim();
  const scoreValue = document.querySelector('.score-input').value.trim();
  if (nameValue !== '' && scoreValue !== '') {
    const id = 'Zl4d7IVkemOTTVg2fUab';
    const scoresUrl = `${gameApiUrl}${id}/scores/`;
    const player = {
      user: nameValue,
      score: scoreValue,
    };
    await fetch(scoresUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(player),
    });
    renderScoreOnPage(player);
  }
};

export default addScore;