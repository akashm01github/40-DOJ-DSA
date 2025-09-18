// setTimeout(function(){
//     console.log('Hello-1')
// },4000)

// setTimeout(function(){
//     console.log('Hello-2')
// },2000)


let h4 = document.querySelector('.heading4');

let btn = document.querySelector('.btn');

let flag = 0

btn.addEventListener('click', function () {
    if (flag == 0) {
        h4.innerHTML = 'Friend';
        btn.innerHTML = 'Remove Friend'
        btn.style.backgroundColor = 'red';
        btn.style.color = 'white'
        flag=1;
    }
    else{
        h4.innerHTML = 'Stranger';
        btn.innerHTML = 'Add Friend'
        btn.style.backgroundColor = 'white';
        btn.style.color = 'black';
        flag=0
    }
})

