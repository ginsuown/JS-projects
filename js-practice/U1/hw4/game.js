"use strict";

class Game {
  constructor(coins, rounds) {
    this.data = [0, 0, 0, 0, 0, 0];
    this.coins = coins;
    this.rounds = rounds;
    this.current_round = 1;
    this.bets = [];
  }

  displayCoins() {
    console.log("Current coin(s): %s\n", this.coins);
  }

  displayBoard() {
    //function to display board
    console.log("- Round %s of %s -", this.current_round, this.rounds);
    console.log("      |  0-heart  |  1-crown  | 2-diamond ");
    console.log(
      "coins |%s|%s|%s",
      ("     " + this.data[0] + "        ").slice(0, 11),
      ("     " + this.data[1] + "        ").slice(0, 11),
      ("     " + this.data[2] + "        ").slice(0, 11)
    );
    console.log("        --------------------------------- ");
    console.log("      |  3-spade  |  4-anchor | 5-club   ");
    console.log(
      "coins |%s|%s|%s",
      ("     " + this.data[3] + "        ").slice(0, 11),
      ("     " + this.data[4] + "        ").slice(0, 11),
      ("     " + this.data[5] + "        ").slice(0, 11)
    );
  }

  fillCards() {
    //fill this.data
    for (let i = 0; i < 6; i++) {
      //if last square, bet all remaining coins
      if (i === 5) {
        this.data[i] = this.coins;
        this.coins = 0;
        break;
      }
      //fill this.data randomly
      let num = Math.floor(Math.random() * this.coins);
      //let num = Math.floor(((Math.random() * this.coins) / (6 - i)) * 2);
      this.data[i] = num;
      this.coins -= num;
    }
  }

  calculateBets() {
    //generate random numbers and calculate win/loss
    let rolls = [];
    for (let i = 0; i < 3; i++) {
      //roll 3 dice
      rolls[i] = Math.floor(Math.random() * 6);
      this.coins += this.data[rolls[i]];
    }
    // print winning squares:
    console.log(
      "\nWinning squares: %s (%s coins), %s (%s coins), %s (%s coins)",
      rolls[0],
      this.data[rolls[0]],
      rolls[1],
      this.data[rolls[1]],
      rolls[2],
      this.data[rolls[2]]
    );
    console.log("-------------------------------------------------------\n");
    //reset coins on the board
    this.data.fill(0);
  }

  outputResult() {
    //output remaining coins at the end of the game
    console.log("Game ended. Coin(s) left: %s", this.coins);
  }

  runGame() {
    //main function to run game
    while (this.current_round <= this.rounds && this.coins > 0) {
      this.displayCoins();
      this.fillCards();
      this.displayBoard();
      this.calculateBets();

      //increment current_rount at the end of the round
      this.current_round++;
    }
    this.outputResult();
  }
}

//main
var myGame = new Game(100, 5);
myGame.runGame();
