// 9 is Neon Number

// (9)^2 = 81 = 8+1 = 9(Number Itself)

const prompt = require("prompt-sync")();

let num = Number(prompt("Enter the Number: "));
let copyOFnum = num;
let sq = num * num;
let sum = 0;

while (sq !== 0) {
  let digit = sq % 10;
  sum = sum + digit;
  sq = Math.floor(sq / 10);
}

console.log("The Sum = "+sum);

if (sum === copyOFnum) {
  console.log("Neon Number");
}
else{
  console.log("Not a Neon Number");
}

