var myObject = {
  foo: "bar",
  func: function() {
    var self = this;
    console.log("outer func: this.foo = " + this.foo);
    console.log("outer func: self.foo = " + self.foo);
    (function() {
      console.log("inner func: this.foo = " + this.foo);
      console.log("inner func: self.foo = " + self.foo);
    })();
  }
};
myObject.func();

var hero = {
  _name: "John Doe",
  getSecretIdentity: function() {
    return this._name;
  }
};
var stoleSecretIdentity = hero.getSecretIdentity;
console.log(stoleSecretIdentity());
console.log(hero.getSecretIdentity());

console.log(stoleSecretIdentity.call(hero));

var d = {};
["zebra", "horse"].forEach(function(k) {
  d[k] = undefined;
});
console.log(JSON.stringify(d));

var a = {},
  b = { key: "b" },
  c = { key: "c" };
a[b] = 123;
a[c] = 456;
console.log(a[b]);
