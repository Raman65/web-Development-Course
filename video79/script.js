let a = prompt("Enter first number");

let b = prompt("Enter second number");

if (isNaN(a) || isNaN(b)) {
  throw SyntaxError("Sorry this is b not allowed");
}
let sum = parseInt(a) + parseInt(b);
function main() {
  let x = 5;
  try {
    console.log("The sum is ", sum * x);
    return true
  } catch (error) {
    console.log("Error aa gaya bhai");
    return false
  } finally {
    console.log("files are bing closed and db connection is bing closed");
  }
}

let c = main()