//your code here
function swapTheme() {
  const appDiv = document.getElementById('app');
  const swapButton = document.getElementById('swap');

  // Toggle classes for the app div
  appDiv.classList.toggle('day');
  appDiv.classList.toggle('night');

  // Toggle classes for the swap button
  swapButton.classList.toggle('button_day');
  swapButton.classList.toggle('button_night');
}

