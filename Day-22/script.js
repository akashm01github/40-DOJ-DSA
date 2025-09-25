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
// let parchi = new Promise(function (resolve, reject) {
//     fetch(`https://randomuser.me/api/`)
//         .then(raw => raw.json())
//         .then((result) =>{
//             if(result.results[0].gender == "male"){
//                 resolve();
//             }
//             else{
//                 reject();
//             }
//         })

// })

parchi
.then(function(data){
    console.log("Black Button Pressed...")
})
.catch(function(){
    console.log("Pink Button Pressed...")
})


// ! CallBacks
function abcd(a,b){
    console.log(a)
    b();
}

abcd(1,function(){
    console.log("This is Callback function");
});


//! How to use callbacks?
// https://randomuser.me/api/
function  doSomeAsyncTask(url,cb){
    fetch(url)
        .then(raw => raw.json())
        .then(result => {
            cb(result);
        })
}

doSomeAsyncTask("https://randomuser.me/api/",function(result){
    console.log(result.results[0])
})


// ! Async and Await
async function abcd(){
    let a = await fetch(`https://randomuser.me/api/`);
    a = await a.json();
    console.log(a.results[0])
}

abcd();



//! Callback vs Promises cs Async/Await
// https://randomuser.me/api/


//todo: Callbacks

function getData(url,cb){
    fetch(url)
    .then(res => res.json())
    .then(result =>{
        cb(result);
    })
}


getData(`https://randomuser.me/api/`,function(data){
        console.log(data.results[0])
});

//todo: Using Promises

function dataFetcher(url) {
    let parchi = new Promise(function (resolve, reject) {
        fetch(url)
            .then(res => res.json())
            .then(result => {
                resolve(result);
            })
    })

    return parchi;

}

let parchi = dataFetcher(`https://randomuser.me/api/`);


parchi
    .then((data) => {
        console.log(data.results[0])
    })
    .catch(() => {
        console.log("Error")
    })


//todo: Using async and await


async function abcd(url) {
    let data = await fetch(url);

    let result = await data.json();

    return result;
}


async function hh() {
    const data = await abcd(`https://randomuser.me/api/`)
    console.log(data)
}

hh();