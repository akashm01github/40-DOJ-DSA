let teams = ["CSK", "MI", "RCB", "KKR", "SRH", "DC", "RR", "PBKS", "LSG", "GT"];




let button = document.querySelector(".btn");

let h1 = document.querySelectorAll('h1');



button.addEventListener('click',function(){
    let num  = Math.floor(Math.random()*teams.length);

    let winner = teams[num];

    h1[1].innerHTML = winner;
})