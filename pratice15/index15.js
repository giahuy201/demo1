const dash = document.querySelector(".nav__dash");
const nav = document.querySelector(".nav__selection");

const obj = [
    {
        heading : "Bookmark in one click",
        para : "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites."
    },
    {
        heading : "Share your bookmarks",
        para : "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button"
    },
    {
        heading : "TỰ HÀO TIẾP NỐI 'HẾT MÌNH VÌ VIỆT NAM'",
        para : "Sau khi giảm mạnh 1nghìn/10 lít vào hai tháng trước, giá xăng chính thức tăng nhẹ lại 10trăm/1 lít vào ngày hôm nay!."
    }
]

const drow_heading = document.querySelectorAll(".drow_heading-text");
const icon = document.querySelectorAll(".drow__heading i");
const para = document.querySelectorAll(".drow__para");
const header__icon = document.querySelector(".header i");
const wrap__icon = document.querySelector(".wrap__header i");
const input = document.querySelector(".input_button input");

input.oninput = function (e){
    var email = validateEmail(e.target.value);
    if(email){
        input.classList.remove("active");
    }else{
        input.classList.add("active");
    }
}


function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email));
}

header__icon.onclick = function(){
    document.querySelector(".wrap").classList.add("active");
}

wrap__icon.onclick = function(){
    document.querySelector(".wrap").classList.remove("active");
}

nav.onclick =function(e){
    
    dash.style.left = e.target.offsetLeft + "px";
    dash.style.width = e.target.offsetWidth + "px";
    var g = e.target.offsetTop + e.target.offsetHeight + "px";
    dash.style.top = g;
    
    document.querySelector(".contain-1 .contain__heading").innerText = obj[Number(e.target.dataset.index)].heading;
    document.querySelector(".contain-1 .contain__para").innerHTML = obj[Number(e.target.dataset.index)].para;


}

drow_heading.forEach((data, index)=>{
    data.onclick = function(){
        
        if(para[index].classList.contains("active") && icon[index].classList.contains("active")){
            para[index].classList.remove("active");
            icon[index].classList.remove("active");
        }
        else if( document.querySelector(".drow__para.active")){
            document.querySelector(".drow__heading i.active").classList.remove("active");
            document.querySelector(".drow__para.active").classList.remove("active");
            para[index].classList.toggle("active")
            icon[index].classList.toggle("active")
        }
        
        else{
            para[index].classList.toggle("active")
            icon[index].classList.toggle("active")
        }
    }
    
})
icon.forEach((data, index)=>{
    data.onclick = function(){
        if(para[index].classList.contains("active") && icon[index].classList.contains("active")){
            para[index].classList.remove("active");
            icon[index].classList.remove("active");
        }
        else if( document.querySelector(".drow__para.active")){
            document.querySelector(".drow__heading i.active").classList.remove("active");
            document.querySelector(".drow__para.active").classList.remove("active");
            para[index].classList.toggle("active")
            icon[index].classList.toggle("active")
        }
        
        else{
            para[index].classList.toggle("active")
            icon[index].classList.toggle("active")
        }
    }
})

