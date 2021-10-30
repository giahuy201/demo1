const input = document.querySelector("#inp__text");
const form = document.querySelector("#form");
const regex = new RegExp("^[\\w\\.]+@([\\w]+\\.)+[\\w]{2,4}$");


function submit(){
    form.onsubmit = function(e){
        e.preventDefault();
        if(!regex.test(input.value)){
            input.style.borderColor = "red";

        }
        else{
            input.style.borderColor = "green";
        }
    }

}

submit();