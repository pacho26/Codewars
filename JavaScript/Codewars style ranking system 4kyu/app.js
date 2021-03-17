class User {
  constructor() {
    this.rank = -8;
    this.progress = 0;
  }

  incProgress(activityRank) {
    if (activityRank > 8 || activityRank < 8 || activityRank === 0) {
      throw Error;
    }

    let difference = Math.abs(activityRank - this.rank);
    if (activityRank > 0 && this.rank < 0) {
      difference--;
    }
    switch (difference) {
      case difference <= -2:
        return;
      case -1:
        this.progress++;
      case 0:
        this.progress += 3;
      default:
        this.progress += 10 * Math.pow(difference, 2);
    }

    this.update();
  }

  update() {
    if (this.progress < 100) {
      return;
    } else {
      const rankUp = Math.floor(this.progress / 100);
      this.progress %= 100;
      if (this.rank + rankUp > 0) {
        this.rank += rankUp + 1;
      } else {
        this.rank += rankUp;
      }
    }
  }
}
