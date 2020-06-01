player = {
  name: "",
  vpip: 0,
  pfr: 0,
  totalHands: 0,
};

players = [];

function savePlayersToStorage(localStorageKey, playersArray) {
  localStorage.setItem(localStorageKey, playersArray);
}

function getPlayersFromStorage(localStorageKey) {
  players = localStorage.getItem(localStorageKey);

  return players;
}

function printPlayers(localStorageKey) {
  players = getPlayersFromStorage(localStorageKey);
}
