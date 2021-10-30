const imgs = document.querySelectorAll(".selection img");
const num = document.querySelector(".controll__num");
const icon_cart = document.querySelector(".img__cart");
const btn_add_cart = document.querySelector(".controll__right");

const objImg = [
    "https://github.com/james-work-account/ecommerce-product-page/blob/main/src/images/image-product-1.jpg?raw=true",
    "https://github.com/james-work-account/ecommerce-product-page/blob/main/src/images/image-product-2.jpg?raw=true",
    "https://github.com/james-work-account/ecommerce-product-page/blob/main/src/images/image-product-3.jpg?raw=true",
    "https://github.com/james-work-account/ecommerce-product-page/blob/main/src/images/image-product-4.jpg?raw=true"
];

document.querySelector(".drow__img-bin").onclick = function(){
    document.querySelector(".cart__drow-main").remove();
    document.querySelector(".sp_num").classList.remove("active");
    g = 0;
}
if(g == 0){
    document.querySelector(".header__cart-avatar").classList.add("active")
}

var num_1 = 0;
btn_add_cart.onclick = function(){
    num_1 += g;
    if(g != 0){
        
        document.querySelector(".sp_num").classList.add("active");
        document.querySelector(".sp_num").innerHTML = num_1;
        document.querySelector(".span-price-new").innerHTML = num_1 * 125 +".00";
        document.querySelector(".header__cart-avatar").classList.remove("active")
        document.querySelector(".span-active").innerHTML = "$125.00 x " + num_1;  
        
    }
    num.innerHTML = 0;  
    g = 0;
}

icon_cart.onclick = function(){
    document.querySelector(".cart__drow").classList.toggle("active");
}

imgs.forEach((d, index) =>{
    d.onclick = function(e){
        document.querySelector(".main__img .img_1").src = objImg[index];
        document.querySelector(".selection img.active").classList.remove("active");
        d.classList.add("active");
    }
})

var g = Number(num.innerHTML);

document.querySelector(".button__left").onclick = function(){
    g--;
    if(g < 0) g=0;
    num.innerHTML = g;
}

document.querySelector(".button__right").onclick = function(){
    g++;
    num.innerHTML = g;
}