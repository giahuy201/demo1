const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const PlAYER_STORAGE_KEY = "F8_PLAYER";
const app_ = $(".app");
const btn_play = $(".btn_start");
const audio = $("#audio");
const title_audio = $(".header .header__para")
const singer_audio = $(".header__title");
const cd = $(".main__disc-img");
const input_progr = $(".progress");
const btn_random = $(".btn_random");
const btn_repeat = $(".btn__repeat");
const list = $(".playlist");
const btn_next = $(".btn_next");
const btn_pre = $(".btn_pre");


// , khi random có thể ra cùng 1 bài hát, 


const app = {
    currentIndex : 0,
    isplaying : false,
    israndom : false,
    isrepeat : false,
    getConfig (key){
        return JSON.parse(localStorage.getItem(key));
    }
    ,
    setConfig(key, value){
        localStorage.setItem(key, JSON.stringify(value))
    },
    songs: [
        {
        id : 1,
          name: "Chắc Ai Đó Sẽ Về",
          singer: "SKY",
          path: "ChacAiDoSeVeNewVersion-SonTungMTP-3698290.mp3",
          image :  
          "https://img.lovepik.com/photo/50093/9979.jpg_wh860.jpg"
        },
        {
            id : 2,
          name: "Thương Thầm",
          singer: "Hoài Bảo",
          path: "ThuongTham-NB3HoaiBao-7026527.mp3",
          image:
            "https://1.bp.blogspot.com/-kX21dGUuTdM/X85ij1SBeEI/AAAAAAAAKK4/feboCtDKkls19cZw3glZWRdJ6J8alCm-gCNcBGAsYHQ/s16000/Tu%2BAana%2BPhir%2BSe%2BRap%2BSong%2BLyrics%2BBy%2BRaftaar.jpg"
        },
        {
            id : 3,
          name: "Thê Lương",
          singer: "V",
          path:
            "TheLuong-PhucChinh-6971140.mp3",
          image: "https://i.ytimg.com/vi/QvswgfLDuPg/maxresdefault.jpg"
        },
        {
            id : 4,
          name: "Độ Tộc",
          singer: "Raftaar x Nawazuddin Siddiqui",
          path: "DoToc2-MasewDoMixiPhucDuPhao-7064730.mp3",
          image:
            "https://a10.gaanacdn.com/images/song/39/24225939/crop_480x480_1536749130.jpg"
        },
        {
            id : 5,
          name: "Tất Cả Của Anh",
          singer: "khói",
          path: "TatCaCuaAnh-KhoiTwo-4853601.mp3",
          image:
            "https://a10.gaanacdn.com/images/albums/72/3019572/crop_480x480_3019572.jpg"
        },
        {
            id : 6,
          name: "Hoa Nở Không Màu",
          singer: "Hoài Lâm",
          path:
            "HoaNoKhongMau1-HoaiLam-6281704.mp3",
          image:
            "https://filmisongs.xyz/wp-content/uploads/2020/07/Damn-Song-Raftaar-KrNa.jpg"
        },
        {
            id : 7,
          name: "Níu Duyên",
          singer: "Lê Bảo Bình",
          path: "NiuDuyen-LeBaoBinh-6872127.mp3",
          image:
            "https://a10.gaanacdn.com/gn_img/albums/YoEWlabzXB/oEWlj5gYKz/size_xxl_1586752323.webp"
        }
    ],

    defineProperties () {
        Object.defineProperty(this, "currentSong", {
            get: function () {
                return this.songs[this.currentIndex];
            }
            
        });

        // Object.defineProperty(this , "Song", {
        //     get: function () {
        //         return document.querySelectorAll(".song")
        //     }
        // })
    },
    handerEvent(){
        const _this = this;
        // cd quay
        const animateHander = cd.animate([
            {
                transform: "rotate(360deg)",
            }],
            {
                iterations : Infinity,
                duration: 10000
            }) 
            animateHander.pause();

        //click play
        btn_play.onclick = function(){
            if(app.isplaying){
                audio.pause();
                // app.isplaying = true;  //xuống hàm onplay để tăng hiệu xuất
                // app_.classList.add("playing");   
 
            }else{
                audio.play();
                // app.isplaying = false;
                // app_.classList.remove("playing");   
            }               
        }
        // sự kieennj khi audio play
        audio.onplay = function(){
            app.isplaying = true;
            app_.classList.add("playing");  
            animateHander.play();
        }
        // sự kieennj khi audio pause
        audio.onpause = function(){
            app.isplaying = false;
            app_.classList.remove("playing");   
            animateHander.pause();
        }

        audio.ontimeupdate = function(e){
            e.stopPropagation();
            const person = audio.currentTime/audio.duration * 100;
            input_progr.value = person;
            // có thể dụng property duration : curren tTime/duration * 100 (0->100) và không cần set max
        }
        // tua progress
        input_progr.onchange = function(e){ // input_progr.value = e.target.value 
           
            const seek = audio.duration / 100 * input_progr.value  ; 
            audio.currentTime = seek;          
        }
        
        // next song
        btn_next.onclick = function(e){
            e.stopPropagation();
            if(app.israndom){
                app.randomSong();
            }else{
                app.nextSong();
            }
            if(app.isrepeat){
                btn_repeat.classList.remove("repeat--active");
                app.isrepeat = false;
            
            }
            app.setConfig("indexSong", app.currentIndex)
            app.render();
            audio.play();
            app.scrollInToView();
        }
        //pre song
        btn_pre.onclick = function(){
           
            if(app.israndom){
                app.randomSong();
            }else{
                app.preverSong();       
            }
            if(app.isrepeat){
                btn_repeat.classList.remove("repeat--active");
                app.isrepeat = false;
            }
            app.setConfig("indexSong", app.currentIndex)
            app.render();
            audio.play();
           app.scrollInToView();
        }
        // click random
        btn_random.onclick = function(){
           
            if(app.israndom){
                btn_random.classList.remove("random--active");
                app.israndom = false;      
            }else{
                btn_random.classList.add("random--active");
                app.israndom = true;
            }   
           
            app.setConfig("israndom", app.israndom);
        }
        
        btn_repeat.onclick = function(){
            
            if(app.isrepeat){
                btn_repeat.classList.remove("repeat--active");
                app.isrepeat = false;  
            }else{
                btn_repeat.classList.add("repeat--active");
                app.isrepeat = true;
            }
            app.setConfig("isrepeat", app.isrepeat);
        }

        audio.onended = function(e){
            if(app.isrepeat){
                app.repeatSong();
                audio.play();
               app.scrollInToView();
                app.setConfig("indexSong", app.currentIndex)
           
            }else if(app.israndom){
                app.randomSong();
                audio.play();
                app.scrollInToView();
                app.render()
                app.setConfig("indexSong", app.currentIndex)
            }
            else{
                app.currentIndex++;
                app.setConfig("indexSong", app.currentIndex)
                app.isrepeat= false;
                app.loadCurrentSong();
                audio.play();
               app.scrollInToView();
                app.render();

            }
            
            
        }

        // chọn mucsic
     
        list.onclick = function(e){
                //  bấm vào song  hoặc option
            if( e.target.closest(".song:not(.song_active)") || (e.target.closest(".option"))){
                // bấm vào song chưa active
                if(e.target.closest(".song:not(.song_active)")){
                    app.currentIndex = e.target.closest(".song:not(.song_active)").dataset.index - 1;
                    app.loadCurrentSong();
                    audio.play();
                    app.scrollInToView();
                    app.setConfig("indexSong", app.currentIndex)
                    app.render();
                }

                // bấm vào option
                if(e.target.closest(".option")){
                    
                }
            }
        }
        


    },
    scrollInToView(){
        setTimeout(function(){
            $(".song_active").scrollIntoView({
                behavior : "smooth",
                block : "nearest",
            })
        }, 200)
    }
    ,
    repeatSong(){     
            if(app.isrepeat){
                app.currentIndex = app.currentIndex;
                input_progr.value = 0;       
                
                app.loadCurrentSong();
                audio.play();
            }else{
                btn_next.click();
                
            }
    }
    ,
    activeCurrenLoading(){
        app.isrepeat = app.getConfig("isrepeat");
        app.israndom = app.getConfig("israndom");
        app.currentIndex = app.getConfig("indexSong");
        app.scrollInToView();
    },
    randomSong(){
        // console.log(this.currentIndex);
        let currentIndexNew = Math.floor(Math.random() * app.songs.length);
       
        do{
            this.currentIndex = currentIndexNew;
        }while(this.currentIndex !== currentIndexNew);
        this.loadCurrentSong();
    }
    ,
    nextSong(){
        ++this.currentIndex;      
        if(this.currentIndex >= this.songs.length){
            this.currentIndex = 0;
        }
        this.loadCurrentSong();
    },
    preverSong(){       
        --this.currentIndex;
        if(this.currentIndex < 0){
            this.currentIndex = app.songs.length - 1;
        }
        this.loadCurrentSong();
    }
    ,
    loadCurrentSong(){
        // audio.src = this.currentSong.path;
        title_audio.textContent =   app.songs[this.currentIndex].singer;
        singer_audio.textContent =  app.songs[this.currentIndex].name;
        cd.style.backgroundImage  = `url('${app.songs[this.currentIndex].image}')`;
        audio.src = `mp3/${app.songs[this.currentIndex].path}`;
    }
    ,
    render(){
        const htmls = this.songs.map((song, index) =>{
            return `
                <div data-index = "${song.id}" class="song ${app.currentIndex === index ? "song_active" : ""}">
                    <div class="thumb" style="background-image: url('${song.image}')">
                    </div>
                    <div class="body">
                        <h3 class="title">${song.name}</h3>
                        <p class="author">${song.singer}</p>
                    </div>
                    <div class="option">
                        <i class="fas fa-ellipsis-h"></i>
                    </div>
                </div>
                `
        }) 
        list.innerHTML = htmls.join("");
    },
    
    start(){

        this.activeCurrenLoading();


        // định nghĩa thuộc tính cho đối tượng
        this.defineProperties();
        // this.loadCurrentSong();
        // render list music
        this.render();  
        
        // bắt sự kiện
        this.handerEvent();   


        // if(app.isrepeat){
        //     btn_repeat.classList.remove("repeat--active");
        //     app.isrepeat = false;  
        // }else{
        //     btn_repeat.classList.add("repeat--active");
        //     app.isrepeat = true;
        // }
        // if(app.isrepeat){
        //     btn_repeat.classList.remove("repeat--active");
        //     app.isrepeat = false;  
        // }else{
        //     btn_repeat.classList.add("repeat--active");
        //     app.isrepeat = true;
        // }
        // if(app.israndom){
        //     btn_random.classList.remove("random--active");
        //     app.israndom = false;      
        // }else{
        //     btn_random.classList.add("random--active");
        //     app.israndom = true;
        // }   
        // if(app.israndom){
        //     btn_random.classList.remove("random--active");
        //     app.israndom = false;      
        // }else{
        //     btn_random.classList.add("random--active");
        //     app.israndom = true;
        // }   
    }
}

app.start();

