let isbn =  "0471958697";

let sum = 0;
for(let i= 0; i<isbn.length; i++){
    let num = Number(isbn[i]);
    sum = sum + ((i+1) * num);
}

if(sum % 11 == 0){
    console.log("valid ISBN 🎉");
}
else{
    console.log("Invalid ISBN");
}