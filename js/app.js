//hide preloader
//all the images script have finished loading


//window event listner

eventListner();
function eventListner(){
    const ui = new UI(); 

    window.addEventListener("load", function(){
       ui.hidePreloader(); 
    })
    
    //nav btn
    document.querySelector(".navBtn").addEventListener("click", function(){
        ui.showNav();
    })

    //control the video
    document.querySelector(".video__switch").addEventListener("click", function(){
        ui.videoControls();
    })
}

//Constructor function
function UI(){
 
}

//for hiding preloader
UI.prototype.hidePreloader = function(){
  document.querySelector(".preloader").style.display = "none";
}

//showcasing the nav-bar
UI.prototype.showNav = function(){
  document.querySelector(".nav").classList.toggle("nav--show");
}

//controling the video
UI.prototype.videoControls = function(){
 let btn = document.querySelector(".video__switch-btn");
 if(!btn.classList.contains("btnSlide")){
    btn.classList.add("btnSlide");
    document.querySelector(".video__item").pause();
 }else{
    btn.classList.remove("btnSlide");
    document.querySelector(".video__item").play();
 }
}

