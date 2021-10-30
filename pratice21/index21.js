const input_search = document.querySelector(".nav__search input");
const header__switch = document.querySelector(".header__switch");
const btn = document.querySelector(".nav__search button");
const footerd = document.querySelector('.footer');
const drow = document.querySelector(".nav__search-drow");
const obj = 
[
    {
        id : 1,
        avatar : "https://scontent.fdad2-1.fna.fbcdn.net/v/t1.6435-9/126433595_1120449848414969_4980205346335435075_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=174925&_nc_ohc=qyPksF36zXUAX8ioUGI&_nc_ht=scontent.fdad2-1.fna&oh=890d0fad1a24de61ecfcb8875ea61fb2&oe=61964016",
        name : "Huy",
        name_link : "@huy",
        birth : "20/05/2001",
        repos : "0",
        follower : "80",
        following : "20",

    },
    {
        id : 2,
        avatar : "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg",
        name : "Hà",
        name_link : "@do",
        birth : "20/05/2001",
        repos : "0",
        follower : "80",
        following : "20",

    },
    {
        id : 3,
        avatar : "https://cdn.freeimage.me/images/1622091991914125132.jpg",
        name : "Huyền",
        name_link : "@do",
        birth : "20/05/2001",
        repos : "0",
        follower : "80",
        following : "20",
    },{
        id : 4,
        avatar : "https://cdn.freeimage.me/images/1622091991914125132.jpg",
        name : "Đô",
        name_link : "@do",
        birth : "20/05/2001",
        repos : "0",
        follower : "80",
        following : "20",
    },
    {
        id : 5,
        avatar : "https://cdn.freeimage.me/images/1622091991914125132.jpg",
        name : "Đông",
        name_link : "@do",
        birth : "20/05/2001",
        repos : "0",
        follower : "80",
        following : "20",
    },
    {
        id : 6,
        avatar : "https://cdn.freeimage.me/images/1622091991914125132.jpg",
        name : "Trí",
        name_link : "@do",
        birth : "20/05/2001",
        repos : "0",
        follower : "80",
        following : "20",
    }, 
    {
        id : 7,
        avatar : "https://cdn.freeimage.me/images/1622091991914125132.jpg",
        name : "vỸ",
        name_link : "@do",
        birth : "20/05/2001",
        repos : "0",
        follower : "80",
        following : "20",
    }
]

function render(arr){
    let list ;
    list = arr.map((d,i)=>{
        return `
        <div class="profile">
            <img class="profile__avatar" src="${d.avatar}"></img>
            <div class="profile__decr">
                <h2 class="profile__name">${d.name}</h2>
                <span>@${d.name.toLowerCase()}</span>
                <p class="profile__birth">${d.birth}</p>
            </div>
         </div>
        <ul class="status">
            <li>
                <p>repos</p>
                <p>${d.repos}</p>
            </li>
            <li>
                <p>Follower</p>
                <p>${d.follower}</p>
            </li>
            <li>
                <p>Following</p>
                <p>${d.following}</p>
            </li>
        </ul>
        <div class="links">
            <div class="link link__address">
                <ion-icon name="storefront"></ion-icon>
                <span>Việt Nam</span>
            </div>
            <div class="link link__page">
                <ion-icon name="rocket"></ion-icon>
                <span>https://github.com/hung</span>
            </div>

            <div class="link link__address">
            <ion-icon name="storefront"></ion-icon>
            <span>Not Available</span>
            </div>
            <div class="link link__page">
                <ion-icon name="rocket"></ion-icon>
                <span>Teamwork VN</span>
            </div>
        </div>
        `
    });
    
    document.querySelector(".footer").innerHTML = list.join("");
}

document.querySelector(".drow__list").onmouseover = function(e){
    if(e.target.closest(".drow__list li")){
        input_search.value = e.target.innerHTML;
        e.target.onclick = function(){
            input_search.value = e.target.innerHTML;
            drow.classList.toggle("active");
        }
       
    }
}

input_search.onclick = function(e){ 
    drow.classList.toggle("active");
    document.querySelector(".nav__search ion-icon:last-of-type").classList.toggle("active")
}

input_search.onkeyup = function(e){
    drow.classList.add("active")
    let value = e.target.value.toLowerCase();
    let arr = [];
    arr = obj.filter((d,i)=>{
        return obj[i].name.toLowerCase().startsWith(value);
    })
    let d = arr.map(da =>{
        return `
            <li>${da.name}</li>
        `
    }).join("");

    document.querySelector(".drow__list").innerHTML = d;
}
document.querySelector(".nav__search ion-icon:last-of-type").onclick = function(){
    input_search.value = "";
}

btn.onclick = function(){
    document.querySelectorAll('.loading .load div').forEach(d=>{
        d.style.animationPlayState = "running";
    })
    document.querySelector(".loading").classList.add("active")
    drow.classList.remove("active")

    let value = input_search.value.toLowerCase();
    let arr = [];
    arr = obj.filter((d, i )=>{
        return obj[i].name.toLowerCase() == value;
    })
    if(arr.length != 0){
        setTimeout(() => {
            footerd.classList.add('active');
            render(arr);       
            document.querySelector(".loading").classList.remove('active');
            document.querySelectorAll('.loading .load div').forEach(d=>{
                d.style.animationPlayState = "paused";
            })        
        }, 2100);
       
      
    }else{
        setTimeout(() => {
            document.querySelector(".loading").classList.remove('active');
            document.querySelectorAll('.loading .load div').forEach(d=>{
                d.style.animationPlayState = "paused";
            })        
            alert("no findning")
        }, 2100);
    }
    
}

header__switch.onclick = function(){
    document.querySelector("body").classList.toggle("active");
    document.querySelector(".header").classList.toggle("active");
    document.querySelector(".footer ").classList.toggle("active-1");
    document.querySelector(".header__logo").classList.toggle("active")
    document.querySelector(".nav__search").classList.toggle("active");
    if(document.querySelector(".footer").classList.contains('active-1')){
        
        document.querySelector(".nav__search-drow").style.background = "white";
        document.querySelector(".drow__list").style.color = "black";
       
    }
}