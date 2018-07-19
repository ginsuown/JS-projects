class TwoSum {
  constructor() {
    this.data = [];
  }
  add(x) {
    this.data.push(x);
  }
  find(x) {
    for (let i = 0; i < this.data.length - 1; i++) {
      for (let j = i + 1; j < this.data.length; j++) {
        if (this.data[i] + this.data[j] === x) {
          return true;
        }
      }
    }
    return false;
  }
  remove(x) {
    let filtered = this.data.filter(y => y !== x);
    let removed = this.data.length - filtered.length;
    this.data = [...filtered];
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
