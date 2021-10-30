

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const input = $(".contain-input input");

function render(){
    var r = getStorage("iteam");
    var htmls = [];
     if(r.length != 0){
        for(var i = 0 ; i < r.length ; i++){
            htmls.push(`
            <div class="history__iteam">   
                <div class="icon__check ${r[i].status}">
                    <img src="https://raw.githubusercontent.com/HusamAjour/to-do/efacaceb844e67e9514df7b0acd489caa8dff35a/images/icon-check.svg" alt="">
                </div>
                <p class="iteam__para">${r[i].value}</p>
            </div>
            `)
        }   
     }
    document.querySelector(".history__list").innerHTML = htmls.join("");
}



input.onclick = function(e){
    document.querySelector(".drow").classList.toggle("active");
    if(document.querySelector(".drow.active")){
        document.querySelector(".drow.active").onclick =function(e){
            input.value = e.target.innerText;
            document.querySelector(".drow").classList.remove("active");
        }
    }
    input.onblur = function(){
        document.querySelector(".drow").classList.remove("active");
    }
}

document.querySelector(".contain-input input").onkeydown = function(e){
    
    if(e.keyCode === 13){

        //tạo thẻ chứa icon
        var div_icon = document.createElement("div");
        div_icon.classList.add("icon__check");
        //thẻ chứa ảnh
        var img = document.createElement("img");
        img.setAttribute("src","https://raw.githubusercontent.com/HusamAjour/to-do/efacaceb844e67e9514df7b0acd489caa8dff35a/images/icon-check.svg")
        //thêm thẻ ảnh vào icon
        div_icon.appendChild(img);
        //tạo thẻ p
        var p = document.createElement("p");
        p.classList.add("iteam__para");
        // tạo text cho p bằng input.value
        p.appendChild(document.createTextNode(`${input.value}`));
        
        // tạo div chưa icon và p
        var div_iteam = document.createElement("div");
        div_iteam.classList.add("history__iteam")
        //thêm lần lượt icon và p
        div_iteam.appendChild(div_icon);
        div_iteam.appendChild(p);
        // thêm div__iteam vào .history__list
        document.querySelector(".history__list").appendChild(div_iteam);
        updateStogare(input.value)
        input.value = "";
        
        document.querySelector(".history__footer-iteam:nth-child(1)").innerHTML 
                =  document.querySelectorAll(".history__iteam").length + " iteam";
    }
    
}
render();

// let d = getStorage("iteam")
// d[0].status = "vỹ"
// storeInLocalStorage("todoItems", todoItems);


function setStorage( val){
    localStorage.setItem("iteam", JSON.stringify(val) || [])
}

function getStorage(key){
    return JSON.parse(localStorage.getItem(key) );
}

document.querySelector(".drow").onmouseover = function(e){
    input.value = e.target.innerText;
}

document.querySelector(".history__list").onclick = function(e){
    const d = e.target.closest(".icon__check");
    const g = getStorage("iteam");
    if(d){
        e.target.closest(".icon__check").classList.toggle("active");
    }

    let storedItem1s = getStorage("iteam");
    document.querySelectorAll(".icon__check").forEach((element, index) => {    
            if(element.classList.contains("active")){
                storedItem1s[index].status = "active";
            }else{
                storedItem1s[index].status = "";
            }
            setStorage( storedItem1s);
      
    });
}


function updateStogare(e){
    let storedItems = getStorage("iteam");
    if (storedItems && Array.isArray(storedItems)) {
        storedItems.push({ value: e, status: "" });
    } else {
        storedItems = [{ value: e, status: "" }];
    }
    console.log(storedItems)
    setStorage( storedItems);
 }


for(var i = 0 ; i < document.querySelectorAll(".history__iteam").length + 1; i ++){
    document.querySelector(".history__footer-iteam:nth-child(1)").innerHTML = i + " iteam";
}


function all_iteam(){
    var d = document.querySelectorAll(".history__iteam");
    d.forEach(data =>{
        
        data.querySelector(".icon__check").classList.add("active");
    })
}

function remove_iteam(){
    render()
}

function clear__iteam(){
    var d = document.querySelectorAll(".history__iteam");
    let h = getStorage("iteam")
    d.forEach((data, index) =>{
        
        if(data.querySelector(".icon__check.active")){
            data.remove();
        }
        document.querySelector(".history__footer-iteam:nth-child(1)").innerHTML = 
                        document.querySelectorAll(".history__iteam").length + " iteam";
    })
      
    
}

