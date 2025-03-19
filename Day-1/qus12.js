let num = 852317;
let largestDigit = 0;
while (num !== 0) {
  let digit = num % 10;

  if (digit > largestDigit) {
    largestDigit = digit;
  }
  num = Math.floor(num / 10);
}

console.log(largestDigit);
