let onButton = document.querySelector('.onButton');


let bulbOff = document.querySelector('.bulbOff');


let isOn = false;
onButton.addEventListener('click', () => {
    if (!isOn) {
        onButton.src = 'offButton.png'
        bulbOff.src = 'bulbOn.png';
        isOn = true
    }
    else {
        onButton.src = 'oNButton.png'
        isOn = false
        bulbOff.src = 'bulbOff.png'
    }
})