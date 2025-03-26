let box = document.querySelector('.box');

let button = document.querySelector('.btn');

let h5 = document.querySelector('h5');


button.addEventListener('click',function(){
    let c1 = Math.floor(Math.random()*256);
    let c2 = Math.floor(Math.random()*256);
    let c3 = Math.floor(Math.random()*256);

    let bg = `rgb(${c1},${c2},${c3})`
    box.style.backgroundColor = bg;
    h5.innerHTML = bg;

    
})