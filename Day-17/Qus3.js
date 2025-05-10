// Pow(x,n);
// ! pow(2,10) => 2^10;

let x = 2;

let n = 3;

let myPow = (x,n)=>{
    if(n==0) return 1;
    return n<0 ? 1/temp(x,n) : temp(x,n);

}

var temp = (x,n)=>{
    if(n==0) return 1;
    let ans = temp(x , Math.floor(n/2));
    if(n%2==0) return ans*ans;
    return ans*ans*x;
}

console.log(myPow(x,n));
