const hr = document.querySelector(".hour");
const minu = document.querySelector(".minute");
const sec = document.querySelector(".secon");



setInterval(() => {
    const date = new Date();
    var h = date.getHours() * 30;
    var m = date.getMinutes() * 6;
    var s = date.getSeconds() * 6;
    
    hr.style.transform = `rotateZ(${h + (m/12)}deg )`;
    minu.style.transform = `rotateZ(${m}deg) `;
    sec.style.transform = `rotateZ(${s}deg)`;
});