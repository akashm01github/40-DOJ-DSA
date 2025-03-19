let num = 20;

let copyNum = num;
let sum = 0;
for(let i = 1; i<=num/2; i++){
  if(num % i == 0){
    sum = sum + i;
  }
}
if(sum > copyNum){
  console.log("Yes");
}
else{
  console.log("No");
}