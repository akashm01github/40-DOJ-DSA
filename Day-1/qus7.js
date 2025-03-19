function isPrime(n){
  if(n<2) return false;
  for(let i = 2; i*i <=n; i++){
      if(n % i === 0) return false;
  }
  return true;
}

function findNumber(l){
  let result = [];
  for(let i =2; i*i <=l;i++){ // Sirf sqrt(limit) tak loop chalayenga
      if(isPrime(i)){
          result.push(i*i); //Prime ka square lene se 3 divisors milenge 
      }
  }
  return result;
}

console.log(findNumber(100)); // Output: [4, 9, 25] 

// Hume aise numbers dhundhne hain jinke exactly 3 divisors ho
// Logic Samjho :- 
// aagar Ek number ke 3 divisors tabhi hote hain jab woh kisi prime number ka square ho for example 
// 4 = 2^2 
// 9 = 3^2 {1,3,9}
// 25 = 5^2 {1,5,25}

//////////////////////////////////

//  A number has exactly three divisors if and only if it is the square of a prime numbe
//  .. there A prime number has only two divisors: 1 and itself.
// Example:
// 2 → Divisors: {1, 2}

// 3 → Divisors: {1, 3}

// 5 → Divisors: {1, 5}
 // there for 
//  If we square a prime number, the resulting number has exactly three divisors:
//   1 (always a divisor)
//  The prime number itself
//  The squared number itself
// example 
// 4=2*2 → Divisors: {1, 2, 4}