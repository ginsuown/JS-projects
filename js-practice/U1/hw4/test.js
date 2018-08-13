var myArr = ["A", "B", "C"];

myArr.duplicate = () => {
  let temp = [];
  for (let i = 0; i < myArr.length; i++) {
    temp.push(myArr[i]);
  }
  return temp;
};

var myNewArray = myArr.duplicate();

console.log(myArr); // ['A', 'B', 'C']
console.log(myNewArray); // ['A', 'B', 'C', 'A', 'B', 'C']
