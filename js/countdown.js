const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const countdown = document.querySelectorAll(".countdown");
const loading = document.querySelectorAll('loading');

// const currentYear = new Date().getFullYear();
// const targetTime = new Date(`May 31 ${currentYear} 00:00:00`);

const countDownDate = new Date("May 23, 2022 15:37:25").getTime();


function updateCountdown() {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    const day = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hour = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    days.innerHTML = day;
    hours.innerHTML = hour;
    minutes.innerHTML = minute;
}

// setTimeout(() => {
//     delete countdown;
//     countdown.style.display = 'flex';
// }, 1000);

setInterval(updateCountdown, 1000);