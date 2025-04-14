// HAPPY NUMBER
const prompt = require("prompt-sync")();

let n = Number(prompt("Enter the Nunber: "));
let set = new Set();
let isHappy = false;
while (true) {
  let sum = 0;

  while (n > 0) {
    let rem = n % 10;
    sum = sum + rem * rem;
    n = Math.floor(n / 10);
  }

  if (sum == 1) {
    isHappy = true;
    break;
  }
  if (set.has(sum)) {
    isHappy = false;
    break;
  } else set.add(sum);
  n = sum;

}
if (isHappy) {
  console.log("Happy Number");
}
else{
   console.log("Not a Happy Number");
}
