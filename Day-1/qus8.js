// All Prime Factor

//Check Prime
function isPrime(digit) {
  if (digit <= 1) return false;
  for (let i = 2; i < digit; i++) {
    if (digit % i === 0) {
      return false;
    }
  }
  return true;
}

// Print Prime Factor 
let num = 30;

for (let i = 0; i <= num / 2; i++) {
  if (num % i === 0) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
}
