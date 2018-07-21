let i = Number.MAX_VALUE;
console.log(i);
console.log(i * 2);

function reverseInt(x) {
  //reverse digits in x
  let num = x.toString();
  num = num
    .split("")
    .reverse()
    .join("");
  num = parseInt(num);
  try {
    if (!Number.isSafeInteger(num)) {
      throw new Error("Integer overflow");
    }
  } catch (e) {
    return 0;
  }
  return num;
}
console.log(Number.MAX_SAFE_INTEGER - 2);
console.log(reverseInt(Number.MAX_SAFE_INTEGER - 2));
