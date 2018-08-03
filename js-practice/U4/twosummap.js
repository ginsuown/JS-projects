class TwoSum {
  constructor() {
    this.data = new Map();
  }
  add(x) {
    if (this.data.has(x)) {
      this.data.set(x, this.data.get(x) + 1);
    } else {
      this.data.set(x, 1);
    }
  }
  find(x) {
    for (let [key, value] of this.data) {
      if (value > 0) {
        let target = x - key;
        if (target * 2 === x && this.data.get(target) > 1) {
          return true;
        } else if (this.data.get(target) > 0) {
          return true;
        }
      }
    }
    return false;
  }
  remove(x) {
    let removed = this.data.get(x) || 0;
    this.data.set(x, 0);
    return removed;
  }
}

//tests
let my = new TwoSum();
my.add(1);
my.add(3);

my.add(3);

my.add(3);
my.add(5);
console.log(my.find(4));
console.log(my.find(7));
console.log(my.remove(3));
console.log(my.find(4));

console.log(my.find(6));
console.log(my.remove(4));
console.log(my.remove(5));
console.log(my.find(1));
