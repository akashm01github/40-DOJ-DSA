// Day-61

// 🧠 SUM OF DIGIT
// let n = 123;

// let sum = 0;

// while (n > 0) {
//   let rem = n % 10;
//   sum = sum + rem;

//   n = Math.floor(n / 10);
// }

// console.log(sum);

// let n = 456;
// let sum = 0;
// function digit(n) {
//   if (n < 10) return n;
//   return (n % 10) + digit(Math.floor(n / 10));
// }

// console.log(digit(n));

// ##################################################
// 🔴 REVERSE OF DIGIT

// let n = 891;
// function reverseDigit(n, rev) {
//   if (n == 0) return rev;
//   return reverseDigit(Math.floor(n / 10), rev * 10 + (n % 10));
// }

// console.log(reverseDigit(n, 0));

// #################################################

//🔴 MATH QUESTION
// GCD/HCF
//using loop
// let a = 16,
//   b = 24;

// for (let i = Math.min(a, b); i >= 0; i--) {
//   if (a % i == 0 && b % i == 0) {
//     console.log(i);
//     break;
//   }
// }

// Using Eucladian Method
// let a = 16,
//   b = 24;

// while (a != b) {
//   if (a > b) {
//     a = a - b;
//   } else {
//     b = b - a;
//   }
// }

// console.log(a);

// USING RECURSION

function gcd(a, b) {
    if (b == 0) return a;
    return gcd(b, a % b);
  }
  
  console.log(gcd(16, 24));
  