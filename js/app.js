//hide preloader
//all the images script have finished loading


//window event listner

eventListner();
function eventListner(){
    window.addEventListener("load", function(){
        let preload = this.document.querySelector(".preloader");
        preload.style.display = "none";
    })
    
    //nav btn
    document.querySelector(".navBtn").addEventListener("click", function(){
        document.querySelector(".nav").classList.toggle("nav--show");
    })
}

//Mkaing UI next time

