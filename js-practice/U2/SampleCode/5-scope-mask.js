// let
{
  // outer block
  let x = "blue";
  console.log(x); // logs "blue"
  {
    // inner block
    let x = 3;
    console.log(x); // logs "3"
  }
  console.log(x); // logs "blue"
}

console.log(typeof x); // logs "undefined"; x out of scope

// var
{
  // outer block
  var x1 = "blue";
  console.log(x1); // logs "blue"
  {
    // inner block
    var x1 = 3;
    console.log(x1); // logs 3
  }
  console.log(x1); // logs 3
}

console.log(typeof x1); // logs number
