const localStorageKey = "players";
const playersArray = [];

//pretend I received input from the user interface
playerName = "Venom";
//do I create an empty object literal? or do I create a class?
player = {
  uuid: 0,
  name: "",
  vpip: 0,
  pfr: 0,
  totalHands: 0,
  getVpip: function () {
    return this.vpip;
  },
  getPfr: function () {
    return this.pfr;
  },
  getTotalHands: function () {
    return this.totalHands;
  },

  handleCall: function () {
    this.totalHands++;
    this.vpip++;
  },
  handleRaise: function () {
    this.totalHands++;
    this.vpip++;
  },
  handleFold: function () {
    this.totalHands++;
    this.vpip++;
  },
  calculateVpip: function () {
    this.vpip = (this.vpip * 100) / this.totalHands;
  },
};

playersArray.push(player);

savePlayersToStorage(localStorageKey);
function savePlayersToStorage(localStorageKey, playersArray) {
  localStorage.setItem(localStorageKey, playersArray);
}

function getPlayersFromStorage(localStorageKey) {
  if (localStorage.getItem(localStorageKey === null)) {
    localStorage.setItem(localStorageKey);
  }
  players = localStorage.getItem(JSON.parse(localStorageKey));

  return players;
}

function printPlayers(localStorageKey) {
  players = getPlayersFromStorage(localStorageKey);
}
