//! Settimeout

console.log("Step-1");
console.log("Step-2");

setTimeout(function(){
    console.log("Step-3");
},3000);

console.log("Step-4");




// ! SetinterVal
let count  = 0;
let helloDev = setInterval(function(){
    count++;
    console.log(count);
    if(count == 4){
        clearInterval(helloDev);
    }
},2000);


// ! FETCH API

fetch(`https://randomuser.me/api/`)
.then(raw => raw.json())
.then(data => console.log(data.results[0]))




// ! AXIOS 

axios.get(`https://randomuser.me/api/`)
.then(result => console.log(result.data.results[0]))


//! Promises
let parchi = new Promise(function (resolve, reject) {
    fetch(`https://randomuser.me/api/`)
        .then(raw => raw.json())
        .then((result) =>{
            if(result.results[0].gender == "male"){
                resolve();
            }
            else{
                reject();
            }
        })
    
})

parchi
.then(function(){
    console.log("Black Button Pressed...")
})
.catch(function(){
    console.log("Pink Button Pressed...")
})


