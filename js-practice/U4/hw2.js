function Shape(type) {
  this.type = type;
}

Shape.prototype.getType = function() {
  return this.type;
};

class Triangle extends Shape {
  //

  constructor(a, b, c) {
    super("triangle");
    this.a = a;
    this.b = b;
    this.c = c;
  }
  getPerimeter() {
    //
    return this.a + this.b + this.c;
  }
}

//testing
var t = new Triangle(1, 2, 3);
console.log(t.constructor === Triangle);
console.log(Shape.prototype.isPrototypeOf(t));
console.log(t.getPerimeter());
console.log(t.getType());

//array shuffle function
Array.prototype.shuffle = function() {
  for (let i = 0; i < this.length; i++) {
    rand = Math.floor(Math.random() * this.length);
    [this[i], this[rand]] = [this[rand], this[i]];
  }
  return this;
};

//testing
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(a.shuffle());
