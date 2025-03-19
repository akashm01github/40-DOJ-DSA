//! HCF/GCD
function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}


console.log(gcd(12, 18)); 

// !DRY RUN

// | Step | a  | b  | temp | a % b | New a | New b |
// |------|----|----|------|------|------|------|
// | 1    | 12 | 18 | 18   | 12   | 18   | 12   |
// | 2    | 18 | 12 | 12   | 6    | 12   | 6    |
// | 3    | 12 | 6  | 6    | 0    | 6    | 0    |
