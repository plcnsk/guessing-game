class GuessingGame {

    constructor() {}

    setRange(min, max) {
      this.min = min;
      this.max = max;
    }

    guess() {
      this.currentNumber = Math.ceil( (this.min + this.max) / 2 );
      return this.currentNumber;
    }

    lower() {
      this.max = this.currentNumber;
      this.currentNumber = Math.ceil( (this.min + this.max) / 2 );
    }

    greater() {
      this.min = this.currentNumber;
      this.currentNumber = Math.ceil( (this.min + this.max) / 2 );
    }

}

module.exports = GuessingGame;
