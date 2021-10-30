// nav-item--active
//nav-pane--active
function item_click(){
    const items = document.querySelectorAll(".nav-item");
    const listTab = document.querySelectorAll(".nav-pane");

    const nav_tab = document.querySelector(".nav-item--active");
    const nav_line = document.querySelector(".nav__line");

    nav_line.style.width = nav_tab.offsetWidth +"px";
    nav_line.style.left = nav_tab.offsetLeft +"px";

    items.forEach(function(item, index){ 
        
        item.onclick = function(){
            document.querySelector(".nav-item--active").classList.remove("nav-item--active");
            document.querySelector(".nav-pane--active").classList.remove("nav-pane--active");
            nav_line.style.width = item.offsetWidth +"px";
            nav_line.style.left = item.offsetLeft +"px";
            item.classList.add("nav-item--active");
            listTab[index].classList.add("nav-pane--active");     
        }
    })
}
item_click();