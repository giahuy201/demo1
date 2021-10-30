
$(document).ready(function(){
    
    modal_register();
    modal_btn_back_regis();
    modal_logIn();
    modal_btn_back_logIn();
    modal_convert_btn_login();
    modal_convert_btn_regis();
    input_search_history();
    click_arrow_number_page();
    selection_click();

    clicker_notifi();
})



function selection_click(){
    $(".selection-item-hight").click(function(){
        var d = $(".selection-item-hight").text();
        $(".home-sort__heading").text(d);
        $(".home-sort__heading").css("color", "rgb(231, 34, 34)");
        $(".tick__hight").addClass('tick--show');
        $(".tick__short").removeClass('tick--show');
    });
    $(".selection-item-short").click(function(){
        var f = $(".selection-item-short").text();
        $(".home-sort__heading").text(f);
        $(".home-sort__heading").css("color", "rgb(231, 34, 34)")
        $(".tick__short").addClass('tick--show');
        $(".tick__hight").removeClass('tick--show');
    });
}


function arrow_number_page(){
    var c = $(".page-controller-num").text();
    var d = Number(c);
   if(d == 1) {
       $(".page-arrow__left").attr("disabled", "false");
   }
}



function click_arrow_number_page(){
    arrow_number_page();
    var arrow = $(".page-controller-num").text();
     var ARROW = Number(arrow);
    $(".page-arrow__right").click(function(){
        ARROW++;
        $(".page-controller-num").text(ARROW);
        if(ARROW == 1) {
            $(".page-arrow__left").attr("disabled", "disable");
        }
        else if(ARROW == 9){
            $(".page-arrow__right").attr("disabled", "disable");
        }
        else{
         $(".page-arrow__left").removeAttr("disabled");
        }
    })
    $(".page-arrow__left").click(function(){  
        ARROW--;
        $(".page-controller-num").text(ARROW);
        if(ARROW != 9){
            $(".page-arrow__right").removeAttr("disabled");
        }
        if(ARROW == 1 ) {
            $(".page-arrow__left").attr("disabled", "false");
            
        }else{
         $(".page-arrow__left").removeAttr("disabled");
        }
    })
}


function input_search_history(){
   
    $(".header__search-input").keyup(function(){
        var c = $(".header__search-input").val();
        $(".header__history-title-link").text("tìm kiếm \"" + c + "\"");
    });
}

function modal_convert_btn_regis(){
    $(".modal__btn-convert-regis").click(function(){
        $(".modal--regis").css("display", "none");
        $(".modal--logIn").css("display", "flex");
    })
}

function modal_convert_btn_login(){
    $(".modal__btn-convert-logIn").click(function(){
        $(".modal--logIn").css("display", "none");
        $(".modal--regis").css("display", "flex");
    })
}

function modal_btn_back_regis(){
    $(".modal__btn-back--regis").click(function(){
        $(".modal--regis").css("display", "none");
    })
}

function modal_register(){
    $(".nav__click_regis").click(function(){
        $(".modal--regis").css("display", "flex");
        
    })
}

function modal_btn_back_logIn(){
    $(".modal__btn-back--logIn").click(function(){
        $(".modal--logIn").css("display", "none");
    })
}

function modal_logIn(){
    $(".nav__click_logIn").click(function(){
        $(".modal--logIn").css("display", "flex");
        
    })
}


function clicker_notifi(){
    const Arr = document.querySelectorAll(".header__notifi-item");  
    const js_link_notifi = document.querySelectorAll(".js-header__notifi-link");

    for (const arr of Arr) {       
        arr.onclick =  function(){                  
            arr.style.backgroundColor = "blue";               
        }
      }
     


    for(const link_noti of js_link_notifi){   
        link_noti.onclick = function(e){
            e.PreventDefault();
        }
      }
}

function func1(event) {
    console.log("hello123");
   
      event.stopPropagation();
    
  }

  