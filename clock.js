let hrs = document.getElementById("hrs");
let mins = document.getElementById("min");
let secs = document.getElementById("sec");

setInterval(() => {
    let currentTime = new Date(); //creatign object time
    hrs.innerHTML =
        (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
    min.innerHTML =
        (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
    sec.innerHTML =
        (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
}, 1000);