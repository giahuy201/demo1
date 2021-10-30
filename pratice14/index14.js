

const grid = document.querySelector(".grid");
const nav = document.querySelector(".nav__bar");
const item_nav = document.querySelectorAll(".nav-iteam");
const card_list = document.querySelectorAll(".card__list");

const obj = [
    {
        "id": 1,
        "company": "Photosnap",
        "logo": "https://raw.githubusercontent.com/boypro0409/static-job-listings-master/efebf558dae7499cb446161b2857eaef3a4ff6a5/images/myhome.svg",
        "new": true,
        "featured": true,
        "position": "Senior Frontend Developer",
        "role": "Frontend",
        "level": "Senior",
        "postedAt": "1d ago",
        "contract": "Full Time",
        "location": "USA Only",
        "languages": ["HTML", "CSS", "JavaScript","Frontend","Senior"],
        "tools": []
        },
        {
        "id": 2,
        "company": "Manage",
        "logo": "https://raw.githubusercontent.com/boypro0409/static-job-listings-master/efebf558dae7499cb446161b2857eaef3a4ff6a5/images/account.svg",
        "new": true,
        "featured": true,
        "position": "Fullstack Developer",
        "role": "Fullstack",
        "level": "Midweight",
        "postedAt": "1d ago",
        "contract": "Part Time",
        "location": "Remote",
        "languages": ["Python", "React", "Midweight"],
        "tools": ["React"]
        },
        {
        "id": 3,
        "company": "Account",
        "logo": "https://raw.githubusercontent.com/boypro0409/static-job-listings-master/efebf558dae7499cb446161b2857eaef3a4ff6a5/images/manage.svg",
        "new": true,
        "featured": false,
        "position": "Junior Frontend Developer",
        "role": "Frontend",
        "level": "Junior",
        "postedAt": "2d ago",
        "contract": "Part Time",
        "location": "USA Only",
        "languages": ["JavaScript", "React", "Sass", "Junior"],
        "tools": ["React", "Sass"]
        },
        {
        "id": 4,
        "company": "MyHome",
        "logo": "https://raw.githubusercontent.com/boypro0409/static-job-listings-master/efebf558dae7499cb446161b2857eaef3a4ff6a5/images/insure.svg",
        "new": false,
        "featured": false,
        "position": "Junior Frontend Developer",
        "role": "Frontend",
        "level": "Junior",
        "postedAt": "5d ago",
        "contract": "Contract",
        "location": "USA Only",
        "languages": ["CSS", "JavaScript", "Frontend", "Junior"],
        "tools": []
        },
        {
        "id": 5,
        "company": "Loop Studios",
        "logo": "https://raw.githubusercontent.com/boypro0409/static-job-listings-master/efebf558dae7499cb446161b2857eaef3a4ff6a5/images/shortly.svg",
        "new": false,
        "featured": false,
        "position": "Software Engineer",
        "role": "Fullstack",
        "level": "Midweight",
        "postedAt": "1w ago",
        "contract": "Full Time",
        "location": "Worldwide",
        "languages": ["JavaScript", "Ruby", "Sass", "Midweight"],
        "tools": ["Ruby", "Sass"]
        },
        {
        "id": 6,
        "company": "FaceIt",
        "logo": "https://raw.githubusercontent.com/boypro0409/static-job-listings-master/efebf558dae7499cb446161b2857eaef3a4ff6a5/images/the-air-filter-company.svg",
        "new": false,
        "featured": false,
        "position": "Junior Backend Developer",
        "role": "Backend",
        "level": "Junior",
        "postedAt": "2w ago",
        "contract": "Full Time",
        "location": "UK Only",
        "languages": ["Ruby", "Junior"],
        "tools": ["RoR"]
        },
        {
        "id": 7,
        "company": "Shortly",
        "logo": "https://raw.githubusercontent.com/boypro0409/static-job-listings-master/efebf558dae7499cb446161b2857eaef3a4ff6a5/images/shortly.svg",
        "new": false,
        "featured": false,
        "position": "Junior Developer",
        "role": "Frontend",
        "level": "Junior",
        "postedAt": "2w ago",
        "contract": "Full Time",
        "location": "Worldwide",
        "languages": ["HTML", "JavaScript", "Sass", "Junior"],
        "tools": ["Sass"]
        },
        {
        "id": 8,
        "company": "Insure",
        "logo": "https://raw.githubusercontent.com/boypro0409/static-job-listings-master/efebf558dae7499cb446161b2857eaef3a4ff6a5/images/faceit.svg",
        "new": false,
        "featured": false,
        "position": "Junior Frontend Developer",
        "role": "Frontend",
        "level": "Junior",
        "postedAt": "2w ago",
        "contract": "Full Time",
        "location": "USA Only",
        "languages": ["JavaScript", "Vue", "Sass", "Junior"],
        "tools": ["Vue", "Sass"]
        },
        {
        "id": 9,
        "company": "Eyecam Co.",
        "logo": "https://raw.githubusercontent.com/boypro0409/static-job-listings-master/efebf558dae7499cb446161b2857eaef3a4ff6a5/images/shortly.svg",
        "new": false,
        "featured": false,
        "position": "Full Stack Engineer",
        "role": "Fullstack",
        "level": "Midweight",
        "postedAt": "3w ago",
        "contract": "Full Time",
        "location": "Worldwide",
        "languages": ["JavaScript", "Python",  "Midweight"],
        "tools": ["Django"]
        },
        {
        "id": 10,
        "company": "The Air Filter Company",
        "logo": "https://raw.githubusercontent.com/boypro0409/static-job-listings-master/efebf558dae7499cb446161b2857eaef3a4ff6a5/images/account.svg",
        "new": false,
        "featured": false,
        "position": "Front-end Dev",
        "role": "Frontend",
        "level": "Junior",
        "postedAt": "1mo ago",
        "contract": "Part Time",
        "location": "Worldwide",
        "languages": ["JavaScript"],
        "tools": ["React", "Sass", "Junior"]
        }
]

function render(){
    var htmls = obj.map((data, index )=>{
        return `
            <div class="card" data-index = ${data.id}>
                <div class="card__left">
                    <img src="${data.logo}" alt="">
                    <div class="decrip">
                        <div class="decip__title">
                            <h3 class="title__position">${data.company}</h3>
                            <div class="title__new">${data.new ? "New!" : ""}</div>
                            <div class="title__featured">${data.featured ? "FEATURED!" : ""}</div>
                        </div>
                        <h2 class="name__job">${data.position}</h2>
                        <div class="timer">
                            <p class="timer__day">${data.postedAt}</p>
                            <span>.</span>
                            <p class="timer__duration">${data.contract}</p>
                            <span>.</span>
                            <p class="timer__company">${data.location}</p>
                        </div>
                    </div>
                </div>
                <div class="card__right">
                    <ul class="card__list">
                    ${data.languages.map(e => {
                            return `<li class='card__iteam'>${e}</li>`;
                        }).join("")}
                    </ul>
                </div>
            </div>    
        `
    })
    grid.innerHTML = htmls.join(" ");
    
}
render();

function create__iteam__nav(name){

    var iteam__text = document.createElement("div");
    iteam__text.classList.add("nav-iteam__text");
    iteam__text.appendChild(document.createTextNode(`${name}`));

    var img = document.createElement("img")
    img.src = "https://raw.githubusercontent.com/boypro0409/static-job-listings-master/efebf558dae7499cb446161b2857eaef3a4ff6a5/images/icon-remove.svg";
    var iteam__icon = document.createElement("div");
    iteam__icon.classList.add("nav-iteam__icon");
    iteam__icon.appendChild(img);

    var nav_iteam = document.createElement("div");
    nav_iteam.classList.add("nav-iteam");
   
    nav_iteam.appendChild(iteam__text);
    nav_iteam.appendChild(iteam__icon);
    nav.appendChild(nav_iteam)
}

function render__iteam(arr){
    var htmls = arr.map(data =>{
        return `
            <div class="nav-iteam">
                <div class="nav-iteam__text">${data}</div>
                <div class="nav-iteam__icon">
                    <img src="https://raw.githubusercontent.com/boypro0409/static-job-listings-master/efebf558dae7499cb446161b2857eaef3a4ff6a5/images/icon-remove.svg" alt="">
                </div>
            </div>
        `
    })
    nav.innerHTML = htmls.join("");
    
}

function check__card(val){
    // obj.language, every()
    const text = document.querySelectorAll(".nav-iteam__text");
 
    var k = [];
    //phải so sanh 2 mảng giống nhau hay không
    k = obj.filter((d,i)=>{
        return d.languages.includes(val)
    })
    
    console.log(k)


}
// var hh = [...n] = [1]
// console.log(hh)

function handerEvent(){
    document.querySelectorAll(".card__list").forEach(e => {
        e.onclick = function(g){
            if(g.target.closest(".card__iteam")){
                create__iteam__nav(g.target.closest(".card__iteam").innerHTML);
                nav.style.display = "flex";

                check__card(g.target.innerHTML)
                
                // lọc iteam trùng nhau

                const text = document.querySelectorAll(".nav-iteam__text");
                var k = [];
                text.forEach((d,indexx) => k.includes(d.innerHTML) ? "" : k.push(d.innerHTML))
                render__iteam(k);   
                
               
                // var g = [];
                // obj.forEach((data, index) =>{
                //     // data.languages.Array.includes(k[index]) ? g.push(index) : ""
                //     console.log(data.languages)
                // })
                // console.log(g);
                
            }
        }
    });
    
    nav.onclick = function(e){
        e.target.closest(".nav-iteam__icon").parentElement.remove();
        // check khiteam 
        if(document.querySelectorAll(".nav-iteam").length < 1){
            nav.style.display = "none";
        }
    }
    document.querySelectorAll(".nav-iteam__text");
}
handerEvent();












