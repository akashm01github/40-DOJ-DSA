let increment  = document.querySelector('.increment');

let decrement  = document.querySelector('.decrement');


let num  = document.querySelector('.num');

let nums = 0

increment.addEventListener('click',function(){
    nums++;
    num.innerHTML = nums
});


decrement.addEventListener('click',function(){
    
    if(nums<=0){
        console.log("Not Possible")
    }
    else{
        nums--;
        num.innerHTML = nums
    }
})