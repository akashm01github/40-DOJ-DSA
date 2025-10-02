let myTime = document.querySelector('.my_time');

let time_session  =document.querySelector('.time_session');




function showTime() {
    let d = new Date();

    let hour = d.getHours();

    let minutes = d.getMinutes();
    let scoends = d.getSeconds();

    if (hour < 10) hour = "0" + hour;
    if (minutes < 10) minutes = "0" + minutes;
    if (scoends < 10) scoends = "0" + scoends;

    let session = 'AM';

    if(hour >=12){
        session = 'PM'
    }

    if(hour == 0){
        hour = 12;
    }
    else if(hour>12){
        hour = hour-12;
    }


    myTime.innerHTML = `${hour}:${minutes}:${scoends}`

    time_session.innerHTML = session
}


setInterval(showTime,1000)