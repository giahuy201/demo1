
const ques_para = document.querySelectorAll(".quest-para");
const icon  = document.querySelectorAll(".quest__icon");
const ans_para = document.querySelectorAll(".anser");


ques_para.forEach((data, index) => {
    data.onclick = function(e){
        if(ques_para[index].classList.contains("active") &&  ans_para[index].classList.contains("--active") ){
            ques_para[index].classList.remove("active")
            ans_para[index].classList.remove("--active")

        }
        else if(document.querySelector(".quest-para.active")){
            document.querySelector(".quest-para.active").classList.remove("active")
            document.querySelector(".anser.--active").classList.remove("--active")
            ques_para[index].classList.toggle("active")
            ans_para[index].classList.toggle("--active")
        }
        
        else{
            ques_para[index].classList.toggle("active")
            ans_para[index].classList.toggle("--active")
        }
    }
})



icon.forEach((data, index) =>{
    
    data.onclick = function(e){
        e.stopPropagation();
    
        if(ques_para[index].classList.contains("active") &&  ans_para[index].classList.contains("--active") ){
            ques_para[index].classList.remove("active")
            ans_para[index].classList.remove("--active")

        }
        else if(document.querySelector(".quest-para.active")){
            document.querySelector(".quest-para.active").classList.remove("active")
            document.querySelector(".anser.--active").classList.remove("--active")
            ques_para[index].classList.toggle("active")
            ans_para[index].classList.toggle("--active")
        }
        
        else{
            ques_para[index].classList.toggle("active")
            ans_para[index].classList.toggle("--active")
        }
    }
})