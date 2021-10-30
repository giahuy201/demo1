
const img = document.querySelectorAll(".img_option");
const back = document.querySelector("#back");
const forward = document.querySelector("#forward");

var index = 0;
back.onclick = function(){
    img.forEach((d) =>{
        d.classList.remove("--active");
    })
    index--;
    if(index < 0){
        index = img.length - 1;
    }
       
        img[index].classList.add("--active");
   
}

forward.onclick = function(){
     img.forEach((d) =>{
        d.classList.remove("--active");
    })   
    index++;
    if(index > img.length-1){
        index = 0;
    }
        img[index].classList.add("--active");
    
}

