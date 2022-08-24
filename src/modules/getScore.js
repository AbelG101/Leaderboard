import renderScoreOnPage from './renderPage.js';

const getScores = async () => {
  const gameApiUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
  const id = 'Zl4d7IVkemOTTVg2fUab';
  const scoresUrl = `${gameApiUrl}${id}/scores/`;
  const response = await fetch(scoresUrl);
  const players = (await response.json()).result;
  document.querySelector('.table').innerHTML = '';
  players.forEach((player) => {
    renderScoreOnPage(player);
  });
};

export default getScores;