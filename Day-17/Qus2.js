//Sqrt(x)

let n = 18;

let mySqrt = (x)=>{
    let i = 1;

    for(;i*i<=n;i++){
        if(i*i == n) return i;
    }
    return i-1;
}

console.log(mySqrt(n));