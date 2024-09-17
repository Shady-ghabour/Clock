let hourHand = document.querySelector(".hour-hand");
let minHand = document.querySelector(".min-hand");
let secHand = document.querySelector(".second-hand");
let digitalClock = document.querySelector(".digital-hour");
let secHolder = document.querySelector(".sec-holder");


function setTime(){
  const now = new Date();
  const sec = now.getSeconds();
  const degSec = ((sec / 60) * 360) + 90;
  if (sec === 0){
    secHand.style.transition = "none";
  }else {
    secHand.style.transition = "all 0.05s";
  }
  secHand.style.transform = `rotate(${degSec}deg)`;

  const min = now.getMinutes();
  const degMin = ((min / 60) * 360) + 90;
  minHand.style.transform = `rotate(${degMin}deg)`;

  const hour = now.getHours();
  const degHour = ((hour / 12) * 360) + 90;
  hourHand.style.transform = `rotate(${degHour}deg)`;


  //digital version 
  const hours = hour < 10? `0${hour}`: hour;
  const minutes = min < 10? `0${min}`: min;
  const seconds = sec < 10? `0${sec}`: sec;

  digitalClock.textContent = `${hours}:${minutes}:${seconds}`;

  secHolder.textContent = `${sec}`;


}

setInterval(setTime, 1000);