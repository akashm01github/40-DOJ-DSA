// 4 Pillars of DOM


let box = document.querySelector('.box1');



let heading = document.querySelector('.heading');

let btn = document.querySelector('.btn');


// Changing Inner HTML
heading.innerHTML = 'I will Be Full Stack Developer';



function callName(){
    console.log("Hey Akash...")
}

btn.addEventListener('click',callName);