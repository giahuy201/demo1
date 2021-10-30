const btns = document.querySelectorAll(".btn");
const btn_start = document.querySelector(".btn__start");
const app = document.querySelector(".app");
const minute = document.querySelector(".time__minute");
const secon = document.querySelector(".time__sec");
const obj = [
    {
        name : "pomodoro",
        time : 25

    },
    {
        name : "short break",
        time : 5
    },
    {
        name : "long break",
        time : 15
    }
]
var inter;
var sec = 60, min = +minute.innerHTML;
var index = 2;

function reset (){
    clearInterval(inter);
    btn_start.innerHTML = 'start';
}
btns.forEach((d, i)=>{
    d.onclick = function(){
        reset ()
        document.querySelector(".btn.active").classList.remove('active');
        d.classList.add("active")
        document.querySelector(".status").innerHTML = obj[i].name;
        minute.innerHTML = `${obj[i].time < 10 ? "0"+obj[i].time : obj[i].time}`;
        min = +minute.innerHTML;
        secon.innerHTML = "00"
        index = i;
    }
}) 
function time(){
    inter = setInterval(() => {
        if(min == obj[index].time){
            if(min < 10){
                min -=1;
                minute.innerHTML = "0"+min; 
            }else{
                min -=1;
                minute.innerHTML = min;
            }
            
        }
        sec--;
        secon.innerHTML = `${sec < 10 ? "0"+sec : sec}`;
        if(sec == 0){
            min--;
            minute.innerHTML = `${min < 10 ? '0'+min : min}`;
            sec=60;
        }
        console.log(sec, min)
        if(min == 0 && sec == 1){
            clearInterval(inter)
            secon.innerHTML = 0;
            let buttonSound = new Audio("break.mp3");
            buttonSound.play();
        }
        document.title = `${min+":"+sec}`
     }, 70);
}

btn_start.onclick = function(){
    let buttonSound = new Audio("button-sound.mp3");
    buttonSound.play();
    if(btn_start.innerHTML == 'start'){
        btn_start.innerHTML = 'stop';
        time();
    }
    else{
        clearInterval(inter);
        btn_start.innerHTML = 'start';
    }
   
}

