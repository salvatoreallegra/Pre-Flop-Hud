class Player {
  constructor(screenName) {
    this.screenName = screenName;
    this.vpipPercentage = 0;
    this.pfrPercentage = 0;
  }

  setVpipPercentage(vpip) {
    this.vpip = vpip;
  }
  getVpipPercentage() {
    return this.vpipPercentage;
  }

  setPfrPercentage(pfr) {
    this.pfrPercentage = pfr;
  }
  getPfrPercentage() {
    return this.pfrPercentage;
  }
}
