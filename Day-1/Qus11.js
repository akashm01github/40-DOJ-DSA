const prompt = require("prompt-sync")();

let N = Number(prompt("Enter N: "));

function optimizedSumEvenIndexedFibonacci(N) {
    let a = 0, b = 1;   // First two Fibonacci numbers
    let sum = 0;

    for (let i = 0; i <= 2 * N; i++) {
        if (i % 2 === 0) {
            sum += a;   // Add even-indexed Fibonacci numbers
        }
        let next = a + b;
        a = b;
        b = next;
    }

    return sum;
}

let result = optimizedSumEvenIndexedFibonacci(N);
console.log(`Sum of Even Indexed Fibonacci Numbers: ${result}`);
