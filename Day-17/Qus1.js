// Count Prime number In Range
let n = 10;
let count = 0;
function checkRangeInPrime(n) {
    let isPrime = new Array(n + 1).fill(true);
    for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
        if (isPrime[i]) {
            for (let j = i * i; j <= n; j += i) {
                isPrime[j] = false;
            }
        }
    }

    for (let i = 2; i < isPrime.length; i++) {
        if (isPrime[i]) {
            // console.log(i);
            // process.stdout.write(i + " ")
            count++;
            
            
        }
    }
    console.log(count);
}

checkRangeInPrime(n);