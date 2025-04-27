//🧠 Print Natural Numbers 1 to N
// let n = 4;
// function printHello(n) {
//   if (n == 0) return; // base case: n==0 হলে কিছু করবো না, return

//   printHello(n - 1);    // Recursive call আগে হচ্ছে
//   console.log(n); // তারপর console.log হচ্ছে (backtracking time)
// }

// printHello(n);


//🧠 SUM
// const prompt = require("prompt-sync")();

// let n = Number(prompt("Enter the Number: "));

// function temp(n) {
//   if (n == 1) return 1;
//   return n + temp(n - 1);
// }

// console.log(temp(n));


//🧠 Factorial
// const prompt = require("prompt-sync")();

// let n = Number(prompt("Enter the Number: "));

// function temp(n) {
//   if (n == 1) return 1;
//   return n * temp(n - 1);
// }

// console.log(temp(n));


//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//🔴 Fibonacci Series
//😊 Using Loop
// const prompt = require("prompt-sync")();

// let n = Number(prompt("Enter the Number: "));

// let first = 0;

// let scoend = 1;

// console.log(first);
// console.log(scoend);

// for (let i = 1; i <= n - 2; i++) {
//   let third = first + scoend;
//   console.log(third);
//   first = scoend;
//   scoend = third;
// }

//🔴 Using Recursion

// function fiboNterms(n, first, scoend) {
//   if (n == 0) return;

//   let third = first + scoend;

//   console.log(third);

//   fiboNterms(n - 1, scoend, third);
// }
// const prompt = require("prompt-sync")();

// let n = Number(prompt("Enter the Number: "));

// let first = 0;

// let scoend = 1;

// console.log(first);
// console.log(scoend);

// fiboNterms(n - 2, first, scoend);

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


//🔴 Fibonacci series Sun up to  Nth Terms 

// f(n) = f(n-1) + f(n-2)
// f(0) = 0;
// f(1) = 1;
// f(2) = f(1) + f(0) = 1+0 = 1;
// f(3) = f(2) + f(1) = 1+1 = 2;
// f(4) = f(3) + f(2) = 2+1 = 3;
// f(5) = f(4) + f(3) = 3+2 = 5;



let n = 6;
function fiboSum(n) {
  if (n == 0) return 0;
  if (n == 1) return 1;
  return fiboSum(n - 1) + fiboSum(n - 2);
}

console.log(fiboSum(n));