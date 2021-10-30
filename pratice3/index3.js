

const obj = [
    {
      "title": "Work",
     
      "timeframes": {
        "daily": { 
          "ind" : "1",
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "ind" : "2",
          "current": 32,
          "previous": 36
        },
        "monthly": {
            "ind" : "3",
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
            "ind" : "1",
          "current": 1,
          "previous": 2
        },
        "weekly": {
            "ind" : "2",
          "current": 10,
          "previous": 8
        },
        "monthly": {
            "ind" : "3",
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
            "ind" : "1",
          "current": 0,
          "previous": 1
        },
        "weekly": {
            "ind" : "2",
          "current": 4,
          "previous": 7
        },
        "monthly": {
            "ind" : "3",
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
            "ind" : "1",
          "current": 1,
          "previous": 1
        },
        "weekly": {
            "ind" : "2",
          "current": 4,
          "previous": 5
        },
        "monthly": {
            "ind" : "3",
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
            "ind" : "1",
          "current": 1,
          "previous": 3
        },
        "weekly": {
            "ind" : "2",
          "current": 5,
          "previous": 10
        },
        "monthly": {
            "ind" : "3",
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
            "ind" : "1",
          "current": 0,
          "previous": 1
        },
        "weekly": {
            "ind" : "2",
          "current": 2,
          "previous": 2
        },
        "monthly": {
            "ind" : "3",
          "current": 7,
          "previous": 11
        }
      }
    }
]

const btns = document.querySelectorAll(".schedule-tab");
const card = document.querySelectorAll(".card");
const load = document.querySelector(".row.r-2");

const dailyArrs = obj.map(data => {
    var title = data.title;
    const arr = data.timeframes.daily;
    return {title, arr};
})
const weeklyArrs = obj.map(data => {
    var title = data.title;
    const arr = data.timeframes.weekly;
    return {title, arr};
})
const monthlyArrs = obj.map(data => {
    var title = data.title;
    const arr = data.timeframes.monthly;
    return {title, arr};
})

function loadImg(img_name){
    var img;
    switch(img_name){
      case "Work" :
          img = "https://raw.githubusercontent.com/pratrock/time-tracker-js/b869f31e41f79c3e13d39b8819126bb714931a8e/images/icon-work.svg";
          break;
      case "Play" :
          img = "https://raw.githubusercontent.com/pratrock/time-tracker-js/b869f31e41f79c3e13d39b8819126bb714931a8e/images/icon-play.svg";
          break;
      case "Study":
          img = "https://raw.githubusercontent.com/pratrock/time-tracker-js/b869f31e41f79c3e13d39b8819126bb714931a8e/images/icon-study.svg";
          break;
      case "Exercise":
          img = "https://raw.githubusercontent.com/pratrock/time-tracker-js/b869f31e41f79c3e13d39b8819126bb714931a8e/images/icon-exercise.svg";
          break;
      case "Social":
          img = "https://raw.githubusercontent.com/pratrock/time-tracker-js/b869f31e41f79c3e13d39b8819126bb714931a8e/images/icon-social.svg";
          break;
      case "Self Care":
          img = "https://raw.githubusercontent.com/pratrock/time-tracker-js/b869f31e41f79c3e13d39b8819126bb714931a8e/images/icon-self-care.svg";
          break;
    }
    return img;
}
function loadCurrent(){
    load.innerHTML = weeklyArrs.map(weeklyArr =>{
        btns[weeklyArr.arr.ind - 1].classList.add("tab--active")
        return `
            <div class="col l-4">
                <div class="card work">
                    <div class="card__background" style='background-image: url("${loadImg(weeklyArr.title)}")'>      
                    </div>
                    <div class="card__tab">
                        <div class="card__heading">
                            <span class="heading__left">${weeklyArr.title}</span>
                            <div class="heading__right">
                                <img src="https://raw.githubusercontent.com/pratrock/time-tracker-js/b869f31e41f79c3e13d39b8819126bb714931a8e/images/icon-ellipsis.svg" alt="">
                            </div>
                        </div>
                        <h2 class="card__hour">${weeklyArr.arr.current}hrs</h2>
                        <p class="card__para">Last Week - ${weeklyArr.arr.previous}hrs</p>
                    </div>
                </div>
            </div>    
        `
    }).join(" ");
}
window.addEventListener("load", loadCurrent);

function ckick(){
    btns.forEach((btn, index) => {
        btn.onclick = function(){
            btns.forEach((btn) => {
                btn.classList.remove("tab--active")
            });
            if(index == 0){
                load.innerHTML = dailyArrs.map(weeklyArr =>{
                    btns[weeklyArr.arr.ind - 1].classList.add("tab--active")
                    return `
                        <div class="col l-4">
                            <div class="card work">
                                <div class="card__background" style='background-image:  url("${loadImg(weeklyArr.title)}")'>       
                                </div>
                                <div class="card__tab">
                                    <div class="card__heading">
                                        <span class="heading__left">${weeklyArr.title}</span>
                                        <div class="heading__right">
                                            <img src="https://raw.githubusercontent.com/pratrock/time-tracker-js/b869f31e41f79c3e13d39b8819126bb714931a8e/images/icon-ellipsis.svg" alt="">
                                        </div>
                                    </div>
                                    <h2 class="card__hour">${weeklyArr.arr.current}hrs</h2>
                                    <p class="card__para">Last Week - ${weeklyArr.arr.previous}hrs</p>
                                </div>
                            </div>
                        </div>    
                    `
                }).join(" ");
            }
            else if(index == 1){
                load.innerHTML = weeklyArrs.map(weeklyArr =>{
                    btns[weeklyArr.arr.ind - 1].classList.add("tab--active")
                    return `
                        <div class="col l-4">
                            <div class="card work">
                                <div class="card__background" style='background-image:  url("${loadImg(weeklyArr.title)}")'>       
                                </div>
                                <div class="card__tab">
                                    <div class="card__heading">
                                        <span class="heading__left">${weeklyArr.title}</span>
                                        <div class="heading__right">
                                            <img src="https://raw.githubusercontent.com/pratrock/time-tracker-js/b869f31e41f79c3e13d39b8819126bb714931a8e/images/icon-ellipsis.svg" alt="">
                                        </div>
                                    </div>
                                    <h2 class="card__hour">${weeklyArr.arr.current}hrs</h2>
                                    <p class="card__para">Last Week - ${weeklyArr.arr.previous}hrs</p>
                                </div>
                            </div>
                        </div>    
                    `
                }).join(" ");
            }
            else{
                load.innerHTML = monthlyArrs.map(weeklyArr =>{
                    btns[weeklyArr.arr.ind - 1].classList.add("tab--active")
                    return `
                        <div class="col l-4">
                            <div class="card work">
                                <div class="card__background" style='background-image:  url("${loadImg(weeklyArr.title)}")'>       
                                </div>
                                <div class="card__tab">
                                    <div class="card__heading">
                                        <span class="heading__left">${weeklyArr.title}</span>
                                        <div class="heading__right">
                                            <img src="https://raw.githubusercontent.com/pratrock/time-tracker-js/b869f31e41f79c3e13d39b8819126bb714931a8e/images/icon-ellipsis.svg" alt="">
                                        </div>
                                    </div>
                                    <h2 class="card__hour">${weeklyArr.arr.current}hrs</h2>
                                    <p class="card__para">Last Week - ${weeklyArr.arr.previous}hrs</p>
                                </div>
                            </div>
                        </div>    
                    `
                }).join(" ");
            }
            
        }
    })

}

ckick()