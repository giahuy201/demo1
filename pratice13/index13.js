
const obj = [
    {
        heading : "Discover innovative ways to decorate",
        para : "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
        src : "https://github.com/kkzio/room-homepage-master/blob/master/images/desktop-image-hero-1.jpg?raw=true"
    },
    {   
        heading : "We are available all across the globe",
        para : "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
        src : "https://github.com/kkzio/room-homepage-master/blob/master/images/desktop-image-hero-2.jpg?raw=true"
    },
    {
        heading : "Manufactured with the best materials",
        para : "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
        src : "https://github.com/kkzio/room-homepage-master/blob/master/images/desktop-image-hero-3.jpg?raw=true"
    }
]

const btn_left = document.querySelector(".button:first-child");
const btn_right = document.querySelector(".button:last-child");
const head = document.querySelector(".header__head");
const para = document.querySelector(".header__para");
const img = document.querySelector(".header__left");

var c = 0; 
btn_left.onclick = function(){
    c--;
    if(c < 0) c = obj.length - 1;
    render()
}

btn_right.onclick = function(){
    c++;
    if(c > obj.length - 1) c = 0;
    render()
}

function render(){
    head.innerHTML = obj[c].heading;
    para.innerHTML = obj[c].para;
    img.style.backgroundImage = `url(${obj[c].src})`;
}