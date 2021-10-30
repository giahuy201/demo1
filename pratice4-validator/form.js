

function validator(obj){
    var formElement = document.querySelector(obj.form);  

    if(formElement){
        obj.rules.forEach(function(rule){ // rule là các element của mảng obj.rules
            var inputElement = formElement.querySelector(rule.selector); //lấy ra element thẻ input theo id(rule.selector)
            
            var error_mess_parent =  inputElement.parentElement.querySelector(".form-message"); // lấy thẻ cha chứa (rule.selector)
            // inputElement là element của từng input 
            if(inputElement){
                // xử lý khi blur khỏi thẻ input của từng inputElement
                inputElement.onblur = function(){            
                    var mess =  rule.test(inputElement.value);                  
                    if(mess){
                       error_mess_parent.innerText = mess;
                       inputElement.parentElement.classList.add('invalid');   
                    }else{
                        error_mess_parent.innerText = "";
                        inputElement.parentElement.classList.remove('invalid'); 
                    }
              
                } 
                // xử lý trường hợp khi người dùng đã nhập vào input vẫn hiện invalid
                inputElement.oninput = function(){
                    error_mess_parent.innerText = "";
                    inputElement.parentElement.classList.remove('invalid'); 
                }
            }
        })  
    }

}

validator.isRequired = function(selector){
   
    return {
        selector : selector,
        test : function(value){
           return value.trim() ? undefined : "Vui lòng nhập vào chỗ này";
        }
    };
}


validator.isEmail = function(selector){
    return {
        selector : selector,
        test : function(value){
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : "Vui lòng nhập email";
        }
    };
}

validator.minLeng = function(selector, min){
    return {
        selector : selector,
        test : function(value){
            return value.length >= min ? undefined : `vui lòng nhập tối thiểu ${min} ký tự`;
        }
    }
}

validator.confPass = function(selector, getpassword, message){ //getpassword là 1 hàm return giá trị
    return {
        selector : selector,
        test : function(value){
            return value === getpassword() ? undefined : message || "vui lòng nhập giá trị";
        }
    };
}

validator.in = function(a){
    
}



// gọi validator truyền đối số

validator({
    form : "#form-1",
    rules : [
        validator.isRequired("#fullname"),
        validator.isEmail("#email"),
        // validator.isRequired("#password"),
        validator.minLeng("#password", 6),
        validator.confPass("#password_confirmation", function(){
            return document.querySelector("#form-1 #password").value;
        }, "mật khẩu nhập lại không chính xác"),
        validator.in("hello")
    ]

  });