const btns = document.querySelectorAll(".but");
const button = document.querySelectorAll(".button");
const screen = document.querySelector(".calc__screen");
const selection = document.querySelectorAll(".btn__selection");
const fot= document.querySelector(".fott");

function delete_button(){
    screen.innerText = screen.innerText.substring(0, screen.innerText.length - 1);
}

function reset_button(){
    screen.innerText = "";
}

function resuil_button(){
    screen.innerText = eval(screen.innerText);
}


btns.forEach((btn, index) =>{
    btn.onclick = function(){
        screen.innerText += btn.value;
    }
})

selection.forEach((data, index) =>{

    data.onclick = function(){
        selection.forEach((data)=>{
            data.classList.remove("btn--active");
        })
        data.classList.add("btn--active");
        if(index == 0){
            if(data.classList.contains("btn--active")){
                select_one();
                
            }
        }else if(index == 1){
            if(data.classList.contains("btn--active")){
                select_two();
                
                
            }
        }
        else {
            if(data.classList.contains("btn--active")){
                select_three();
            }
        }
    }
})

function select_one(){
    btns.forEach((data, index) =>{
        data.style.backgroundColor = "rgb(237, 237, 237)";
    })
    document.querySelector(".calc__header").style.color = "white";
    document.querySelector(".calc__selection-title").style.color = "white";
    document.querySelector(".container").style.backgroundColor = "#3a4764"
    fot.style.backgroundColor = "#232c43";
    button[0].style.backgroundColor = "#637097";
    button[1].style.backgroundColor = "#637097";
    button[2].style.backgroundColor = "#d03f2f";
    screen.style.backgroundColor = "#182034";
    screen.style.color = "while";
}
function select_two(){
    btns.forEach(data =>{
        data.style.backgroundColor = "rgb(237, 237, 237)";
    })
    document.querySelector(".calc__header").style.color = "#35352c";
    document.querySelector(".calc__selection-title").style.color = "#35352c";
    document.querySelector(".container").style.backgroundColor = "#e6e6e6"
    fot.style.backgroundColor = "#d1cccc";
    button[0].style.backgroundColor = "#377f86";
    button[1].style.backgroundColor = "#377f86";
    button[2].style.backgroundColor = "#ca5502";
    screen.style.backgroundColor = "white";
    screen.style.color = "black";
    
}
function select_three(){
    btns.forEach(data =>{
        data.style.backgroundColor = "rgb(237, 237, 237)";
    })
    button[0].style.backgroundColor = "#3a4764";
    button[1].style.backgroundColor = "#3a4764";
    button[2].style.backgroundColor = "#d03f2f";
}