//! 3. Harshad Number
// 18
// 1 + 8 = 9 

// 18 % 9 = 0  => Is a Harshad Number.

let  num = 18;
let copyNum = num;
let sum = 0;
while(num !== 0 ){
    let rem  = num % 10;

    sum  = sum + rem;

    num = Math.floor(num / 10);

}

if(copyNum % sum == 0){
    console.log("Harshad Number");
}
else{
    console.log("Not Harshad Number");
}
