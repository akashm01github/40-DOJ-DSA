//LCM Of Two Numbers
function gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}
let a = 12, b = 18;
let ans = gcd(a, b);

let lcm  = (a*b)/ans;

console.log(lcm);
