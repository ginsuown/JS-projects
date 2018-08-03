// example 1
const myString =
  "99 bottles of beer on the wall " +
  "take 1 down and pass it around -- " +
  "98 bottles of beer on the wall.";
console.log(myString);

// looks for strings of a single character, and the character must be "-", digits, lowercase letters, or "."
let match1 = myString.match(/[\-0-9a-z.]/gi);
console.log(match1);

// *********************
// ASK: looks for characters that are not in that class. Only matches " "
let match2 = myString.match(/[^\-0-9a-z.]/);
console.log(match2);

// looks for the first number consisting of 3 digits, 2 digits, or 1 digit
let match3 = myString.match(/[0-9][0-9][0-9]|[0-9][0-9]|[0-9]/);
console.log(match3);

// looks for the first number with at least 1 digit
let match4 = myString.match(/[0-9]+/);
console.log(match4);

// example 2
// looks for strings that start with ":" followed by 0 or more spaces, followed by 1 digit.
const stuff = "high: 9\n" + "medium: 5\n" + "low: 2\n";
console.log(stuff);
const levels = stuff.match(/:\s*[0-9]/g);
console.log(levels);

// example 3
// takes out any characters that are not digits
const messyPhone = "(505) 555-1515";
const neatPhone = messyPhone.replace(/\D/g, "");
console.log(neatPhone);

// example 4
// return boolean whether or not the field has non-whitespace characters in it
const field = " something ";
const valid = /\S/.test(field);
console.log(valid);

// example 5
// find first string with 5 digits followed by any number of subsequent characters
const input =
  "Address: 333 Main St., Anywhere, NY, 55532. Phone: 555-555-2525.";
const match5 = input.match(/\d{5}.*/);
console.log(match5);

// find first string that is a single digit integer + decimal with 1 place * single digit
const equation = "(2 + 3.5) * 7";
const match6 = equation.match(/\(\d \+ \d\.\d\) \* \d/);
console.log(match6);

// example 6
//
const text = "Visit oreilly.com today!";
const match7 = text.match(/[a-z]+(?:\.com|\.org|\.edu)/i);
console.log(match7);

// example 7
// returns nothing, Because non-capturing group so back referencing gives nothing
const promo = "Opening for XAAX is the dynamic GOOG! At the box office now!";
const bands = promo.match(/(?:[A-Z])([A-Z])\2\1/g);
console.log(bands);

// example 8
// $` = everything before match; $& = match; $' = everything after match
const example8 = "One two three";
console.log(example8);
console.log(example8.replace(/two/, "($`)")); // "One (One ) three"
console.log(example8.replace(/\w+/g, "($&)")); // "(One) (two) (three)"

// example 9
const e9 = "It was the best of times, it was the worst of times";
const beginning = e9.match(/^\w+/g); // "It"
const end = e9.match(/\w+$/g); // "times"
console.log(end);
const everything = e9.match(/^.*$/g); // sames as e9
const nomatch1 = e9.match(/^best/gi); // none
const nomatch2 = e9.match(/worst$/gi); // none

// example 10
// m flag searches individual lines separated by \n. ^ and $ for beginning and end of lines work for each line.
const input10 = "One line\nTwo lines\nThree lines\nFour";
const beginnings = input10.match(/^\w+/gm); // ["One", "Two", "Three", "Four"]
const endings = input10.match(/\w+$/gm); // ["line", "lines", "lines", "Four"]

// example 11
const inputs = [
  "john@doe.com", // nothing but the email
  "john@doe.com is my email", // email at the beginning
  "my email is john@doe.com", // email at the end
  "use john@doe.com, my email", // email in the middle, with comma afterward
  "my email:john@doe.com." // email surrounded with punctuation
];

const emailMatcher = /\b[a-z][a-z0-9._-]*@[a-z][a-z0-9_-]+\.[a-z]+(?:\.[a-z]+)?\b/gi;
console.log(inputs);
inputs.map(s => s.replace(emailMatcher, '<a href="mailto:$&">$&</a>'));
console.log(inputs);

// returns [
// "&lt;a href="mailto:john@doe.com">john@doe.com&lt;/a>",
// "&lt;a href="mailto:john@doe.com">john@doe.com&lt;/a> is my email",
// "my email is &lt;a href="mailto:john@doe.com">john@doe.com&lt;/a>",
// "use &lt;a href="mailto:john@doe.com">john@doe.com&lt;/a>, my email",
// "my email:&lt;a href="mailto:john@doe.com>john@doe.com&lt;/a>.",
// ]
