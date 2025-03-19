let n = 5;

let a =0, b =1, next;

if (n <= 0) {
  console.log("Invalid Input");
}

for(let i = 1; i<=n; i++){
  console.log(a);
  next = a + b;
  a = b;
  b = next;
}