let colorBox = document.querySelector('.color_box');

let btn = document.querySelector('.btn');

let heading  = document.querySelector('.heading');
let hexCode  = document.querySelector('.hexCode');

let copyBtn = document.querySelector('.copy_btn');




function generateColor() {
    let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    let letters = ["A", 'B', "C", 'D', 'E', 'F'];

    let hexChar = numbers.concat(letters);


    let hexColor = '#';

    for (let i = 0; i < 6; i++) {
        let randomIdx = Math.floor(Math.random() * hexChar.length);

        hexColor += hexChar[randomIdx];
    }

    colorBox.style.backgroundColor = hexColor;
    heading.innerHTML = hexColor
    hexCode.innerHTML = hexColor


}


btn.addEventListener('click',function(){
    generateColor();
})


copyBtn.addEventListener('click',function(){
    let textCopy = heading.innerHTML;

    navigator.clipboard.writeText(textCopy);
})