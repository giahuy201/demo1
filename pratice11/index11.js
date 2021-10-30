const button_mobie_head = document.querySelector(".header__icon");

button_mobie_head.onclick = function(){
    button_mobie_head.classList.toggle("--active")
    if(document.querySelector(".header__icon.--active")){
        document.querySelector(".wrap").style.display = "block";
        document.querySelector(".menu__mobile__header").style.display = "flex";
    }else{
        document.querySelector(".wrap").style.display = "none";
        document.querySelector(".menu__mobile__header").style.display = "none";
    }



    
    

}

document.querySelector(".header__icon .bx-window-close").onclick = function(){

}

function wrap(){
    document.querySelector(".wrap").style.display = "none";
    document.querySelector(".menu__mobile__header").style.display = "none";
}