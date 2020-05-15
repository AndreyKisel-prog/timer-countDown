"use strict";
// timer
// you can set your own "id" of HTML-element(timer)  and deadline-date in; 

setClock('timer', '2020-05-21');


function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor((t / 1000) % 60),
        minutes = Math.floor((t / 1000 / 60) % 60),
        hours = Math.floor((t / 1000 / 60 / 60) % 24);
    return {
        'total': t,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function setClock(id, endtime) {
    let timer = document.getElementById(id),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
    timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
        let t = getTimeRemaining(endtime);
        hours.textContent = (t.hours > 10) ? t.hours:'0' + t.hours;
        minutes.textContent = (t.minutes >= 10) ? t.minutes:'0' + t.minutes;
        seconds.textContent = (t.seconds >= 10) ? t.seconds:'0' + t.seconds;
 
        if(t.total <= 0) {
            clearInterval(timeInterval);
        }
    }
}
