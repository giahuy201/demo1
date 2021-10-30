const URL = "http://localhost:3000/course";
const input = document.querySelector("input");
  
function getAPI(callback){
    fetch(URL)
    .then(function(res){
        return res.json();
    })
    .then(callback)
}

function renderAPI(data){
    let htmls = [];
    htmls = data.map((d, i)=>{
        return `
            <div class="course c-${d.id}">
                <img src="https://img.freepik.com/free-vector/front-end-word-concepts-banner-web-applications-programming_106317-84.jpg?size=626&ext=jpg" alt="">
                <h2 class="course__name">${d.name}</h2>
                <div class="btns">
                    <div class="btn btn_up" onclick="updateForm(${d.id})">Sửa</div>
                    <div class="btn" onclick="deleteAPI(${d.id})">Xóa</div>
                </div>
            </div>
        `
    }).join("");
    document.querySelector(".courses").innerHTML = htmls;
}

function start(){
    getAPI(function(data){
        renderAPI(data);
    })
}
start();

function postAPI(data, callback){
    let option = {
        method : 'POST',
        headers : {
            'Content-type': 'application/json; charset=UTF-8'
        },
        body : JSON.stringify(data) 
    }
    fetch(URL, option)
        .then(function(res){
            return res.json();
        })
        .then(callback)
}

function createForm(){
    document.querySelector(".btn_add").onclick = function(){
       
        var formData = {
            name : input.value,
        }
        postAPI(formData, function(){
            getAPI(function(data){
                renderAPI(data);
            })    
        })
    }
   
}
createForm()

function deleteAPI(id){

    let option = {
        method : "DELETE",
        header : {
            'Content-type': 'application/json; charset=UTF-8'
        }
    }
    fetch(URL +`/${id}`, option)
        .then(res => res.json())
        .then(()=>{
            // getAPI(function(data){
            //     renderAPI(data);
            // })
            let g = document.querySelector(`c-${id}`)
            if(g){
                g.remove()
            }
        })
}

function updateAPI(data, id, callback){
    let option = {
        method : 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body : JSON.stringify(data)
    }
    fetch(URL+`/${id}`, option)
        .then(res=> res.json())
        .then(callback)
}

function updateForm(id){
    document.querySelectorAll(".btn_up").forEach(d=>{
        d.onclick = function(e){
            
            if(d.innerText == "Sửa"){
                d.innerText = "Lưu"
                input.value = "nhập vào đây để sữa";
            }else{
                
                updateAPI({name : input.value,
                            id : id}, id, function(a){
                    console.log(a)
                    getAPI(function(data){
                        renderAPI(data);
                    })
                })
                d.innerText = "Sửa"
            }
        }
        
    })
}

