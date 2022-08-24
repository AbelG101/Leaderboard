const renderScoreOnPage = (player) => {
  const table = document.querySelector('.table');
  const tr = document.createElement('tr');
  const td = document.createElement('td');
  const span = document.createElement('span');
  td.setAttribute('class', 'name');
  span.setAttribute('class', 'score');
  td.textContent = `${player.user}: `;
  span.textContent = player.score;
  td.appendChild(span);
  tr.appendChild(td);
  table.appendChild(tr);
};

export default renderScoreOnPage;