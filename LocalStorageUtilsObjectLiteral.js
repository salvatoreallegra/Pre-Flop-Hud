function savePlayersToStorage(localStorageKey, playersArray) {
  if (localStorage.getItem(localStorageKey === null)) {
    localStorage.setItem(localStorageKey);
  }
  localStorage.setItem(localStorageKey, playersArray);
}

function getPlayersFromStorage(localStorageKey) {
  if (localStorage.getItem(localStorageKey === null)) {
    localStorage.setItem(localStorageKey);
  }
  let players = JSON.parse(localStorage.getItem(localStorageKey));

  return players;
}

function printPlayers(localStorageKey) {
  players = getPlayersFromStorage(localStorageKey);
}

export { savePlayersToStorage, getPlayersFromStorage };
