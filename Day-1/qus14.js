//Find the Sum of Even Digits in a Number

let num = 5782463;
let sum = 0;
while (num != 0) {
  let digit = num % 10;

  if (digit % 2 == 0) {
    sum = sum + digit;
  }

  num = Math.floor(num / 10);
}

console.log(sum);
