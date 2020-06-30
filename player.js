function addPlayer(name) {
  let player = {
    uuid: Date.now(),
    name: name,
    vpipActionCount: 0, //The number of times a player voluntarily put money into the pot Pre-Flop, whether calling or raising.
    pfrActionCount: 0, //The number of times a player raised pre-flop, this includes 3-bets.
    vpipPercentage: 0, //The percentage of hands a player has played, can be between 0 and 100%
    pfrPercentage: 0, //The percentage of hands a player has raised pre-flop, can be between 0 and 100%, but can never be higher than vpipPercentage
    totalHandsTracked: 0, //The number of hands tracked for a player

    callAction: function () {
      this.totalHands++;
      this.vpipActionCount++;
    },
    raiseAction: function () {
      this.totalHands++;
      this.pfrActionCount++;
    },
    foldAction: function () {
      this.totalHands++;
    },
    calculateVpipPercentage: function () {
      this.vpip = (this.vpipActionCount * 100) / this.totalHands;
    },
    calculatePfrPercentage: function () {
      this.pfrPercentage = (this.pfrActionCount * 100) / this.totalHands;
    },
    getVpipPercentage: function () {
      return this.vpipPercentage;
    },
    getPfrPercentage: function () {
      return this.pfrPercentage;
    },
  };
  return player;
}

export { addPlayer };
