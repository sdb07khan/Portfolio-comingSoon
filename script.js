"use strict";

/////////////////////////////////////////////////////////////////////////////////////////////////

const labelTimer = document.querySelector(".timeNum");
const timerBox = document.querySelector(".timerBox");

/////////////////////////////////////////////////////////////////////////////////////////////////
// Count Down Timer HIGHLIGHT
const now = new Date().getTime();
let launchDate = new Date("July 7, 2023 10:01:01").getTime();
let distance = launchDate - now;
let timer;

const second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24;

const startCountDown = function () {
  // timerBox.innerHTML = "";

  const tick = function () {
    let days = String(Math.floor(distance / day)).padStart(2, 0);
    let hours = String(Math.floor((distance % day) / hour)).padStart(2, 0);
    let min = String(Math.floor((distance % hour) / minute)).padStart(2, 0);
    let sec = String(Math.floor((distance % minute) / second)).padStart(2, 0);

    //console.log(days, hours, min, sec);

    document.getElementById("day").innerText = `${days}:`;
    document.getElementById("hour").innerText = `${hours}:`;
    document.getElementById("minute").innerText = `${min}:`;
    document.getElementById("second").innerText = `${sec}`;

    //console.log(sec);
    if (distance === 0) {
      clearInterval(timer);
    }

    //decrease 1s
    distance = distance - 1000;
  };
  tick();
  timer = setInterval(tick, 1000);
  return timer;
};
startCountDown();

/////////////////////////////////////////////////////////////////////////////////////////////////////////

document.addEventListener("click", (e) => {
  const isOpen = document.body.classList.contains("open");
  if (isOpen && !e.target.classList.contains("contactBtn")) {
    if (!wrapperBox.contains(e.target)) {
      wrapperBox.classList.remove("openWrapper");
      document.body.classList.remove("open");
    }
  }
});

// Wrapper open close HIGHLIGHT
const wrapperBox = document.querySelector(".wrapperBox");
const closeBtn = document.querySelector(".closeWrapper");
const openBtn = document.querySelector(".contactBtn");

openBtn.addEventListener("click", function () {
  wrapperBox.classList.add("openWrapper");
  document.body.classList.add("open");
});

closeBtn.addEventListener("click", function () {
  wrapperBox.classList.remove("openWrapper");
  document.body.classList.remove("open");
});
