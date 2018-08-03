function passwordCheck(input) {
  /*
  Check for:
  1) At least 1 uppercase letter
  2) At least 1 number
  3) At least 1 lowercase letter
  4) Only letters and numbers
  5) Length between 6 and 10
  */
  const check = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{6,10})$/;
  return check.test(input);
}

console.log(passwordCheck("hi")); // no uppercase, fails
console.log(passwordCheck("himynameis")); // no numbers, fails
console.log(passwordCheck("1234567890")); // no letters, fails
console.log(passwordCheck("Hi123")); // 5 characters, fails
console.log(passwordCheck("Hi1234")); // 6 characters, PASSES
console.log(passwordCheck("John Doe1")); // contains spaces, fails
console.log(passwordCheck("JohnDoe1")); // PASSES
