let endTimer = document.querySelector("#timerDone");
let event = document.querySelector(".event");

endTimer.style.display = "none";

let endDate = new Date("December 24, 2019 14:45:00").getTime();

let timer = setInterval(function() {

    let now = new Date().getTime();
    let t = endDate - now;
    
    if (t >= 0) {
    
        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        let secs = Math.floor((t % (1000 * 60)) / 1000);
    
        document.getElementById("timer-days").innerHTML = days +
        "<span class='label'>day's</span>";
    
        document.getElementById("timer-hours").innerHTML = ("0"+hours).slice(-2) +
        "<span class='label'>hr's</span>";
    
        document.getElementById("timer-mins").innerHTML = ("0"+mins).slice(-2) +
        "<span class='label'>min's</span>";
    
        document.getElementById("timer-secs").innerHTML = ("0"+secs).slice(-2) +
        "<span class='label'>sec's</span>";
    
    } else {
        event.style.display = "none"
        document.getElementById("timer").innerHTML = "Christmas is here Enjoy &nbsp;";
        endTimer.style.display = "block";
    
    }
    
}, 1000);




