function change() {
  let solutions = 0;
  //cents
  for (let c = 0; c < 49; c++) {
    //nickels
    for (let n = 0; n < 49 - c; n++) {
      //quarters
      for (let q = 0; q < 49 - c - n; q++) {
        //half dollars
        for (let h = 0; h < 49 - c - n - q; h++) {
          if (c + n + q + h === 48 && c + 5 * n + 25 * q + 50 * h === 100) {
            //print solution
            console.log(
              "Solution: %s x 1c, %s x 5c, %s x 25c, %s x 50c",
              c,
              n,
              q,
              h
            );
            solutions++;
          }
          if (solutions == 2) {
            return;
          }
        }
      }
    }
  }
}

change();
