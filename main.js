
    let days = document.getElementById("days");
    let hours = document.getElementById("hours");
    let minutes = document.getElementById("minutes");
    let seconds = document.getElementById("seconds");
let leftTime = setInterval(() => {
    seconds.innerHTML = seconds.innerHTML - 1
    if (seconds.innerHTML == 0) {
        minutes.innerHTML = minutes.innerHTML - 1
        seconds.innerHTML = 60
    }
    if (minutes.innerHTML == 0) {
        minutes.innerHTML = 60
        hours.innerHTML =hours.innerHTML - 1
    }
    if (hours.innerHTML == 0) {
        hours.innerHTML = 24
        days.innerHTML =days.innerHTML - 1
    }
     if (defDays == 0) {
       clearInterval(timeFunction);
     }
},1000)