//🧠 Swap Two Number Using Bitwise Operator

let a = 20;

let b = 40;
//Before Swap

console.log([a, b]);
a = a ^ b;
b = a ^ b;
a = a ^ b;

// After Swap

console.log([a, b]);