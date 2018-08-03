class Deck {
  constructor() {
    //initialize deck
    this.cards = [];
    this.suites = ["Spades", "Hearts", "Diamonds", "Clubs"];
    //put cards in order
    for (let i = 0; i < this.suites.length; i++) {
      for (let n = 1; n < 14; n++) {
        this.cards.push({ suite: this.suites[i], num: n });
      }
    }
  }

  printOrdered() {
    //ordered printout
    //output cards
    for (let i = 0; i < this.suites.length; i++) {
      let result = "";
      for (let n = 0; n < 13; n++) {
        result = result.concat(
          this.cards[n + i * 13].num +
            " of " +
            this.cards[n + i * 13].suite +
            ", "
        );
      }
      console.log(result);
    }
    console.log("\n");
  }

  printShuffledByColor() {
    //shuffled by suite
    //output cards
    for (let i = 0; i < 4; i++) {
      let result = "";
      let temp = new Set();
      let randomNumber = 0;
      while (temp.size < 13) {
        randomNumber = Math.floor(Math.random() * 13);
        if (!temp.has(randomNumber)) {
          temp.add(randomNumber);
          //console.log(this.cards[randomNumber * (i + 1)]);
          result = result.concat(
            this.cards[randomNumber + i * 13]["num"] +
              " of " +
              this.cards[randomNumber + i * 13]["suite"] +
              ", "
          );
        }
      }
      console.log(result);
    }
    console.log("\n");
  }

  printShuffled() {
    //completely shuffled
    let result = "";
    let temp = new Set();
    let randomNumber = 0;
    while (temp.size < 52) {
      randomNumber = Math.floor(Math.random() * 52);
      if (temp.size % 13 === 0) {
      }
      if (!temp.has(randomNumber)) {
        temp.add(randomNumber);
        result = result.concat(
          this.cards[randomNumber]["num"] +
            " of " +
            this.cards[randomNumber]["suite"] +
            ", "
        );
      }
    }
    console.log(result);
    console.log("\n");
  }
}

myDeck = new Deck();
myDeck.printOrdered();
myDeck.printShuffledByColor();
myDeck.printShuffled();
console.log(myDeck._proto_);
