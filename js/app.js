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

    //Submit the form
    document.querySelector(".drink-form").addEventListener("submit", function(event){
    event.preventDefault();
    const name = document.querySelector(".input-name").value;
    const lastName = document.querySelector(".input-lastname").value;
    const email = document.querySelector(".input-email").value;

    let value = ui.checkEmpty(name, lastName, email);

    if(value){ //his means when the customer has added the details
     let customer = new Customer(name, lastName, email);
     console.log(customer);
     ui.addCustomer(customer);
     ui.showFeedback("Customer added to the list", "success");
     ui.clearFields();

    }else{
      ui.showFeedback("Some form values are empty", "error");
    }
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

//controlling the video
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

//checking the empty values over here
UI.prototype.checkEmpty = function(name, lastName, email){
  let result;

  if(name === '' || lastName === '' || email === ''){
    result = false;
  }else{
    result = true;
  }
  return result;
}

UI.prototype.showFeedback = function(text, type){
  const feedback = document.querySelector(".drink-form__feedback");
  if(type === "success"){
    feedback.classList.add("success");
    feedback.innerText = text;
    this.removeAlert("success");

  }else if(type === "error"){
    //let feedback = document.querySelector(".drink-form__feedback");
    feedback.classList.add('error');
    feedback.innerText = text;
    this.removeAlert('error');
  }
}
//Remove Alert
UI.prototype.removeAlert = function(type){
  setTimeout(function(){
    document.querySelector(".drink-form__feedback").classList.remove(type);
  }, 3000)
}

UI.prototype.addCustomer = function(customer){
  const images = [1, 2, 3, 4, 5];
  let random = Math.floor(Math.random() * images.length);
  //console.log(random);
  const div = document.createElement("div");
  div.classList.add("person");
  div.innerHTML = `<img src="img/person-${random}.jpeg" alt="person" class="person__thumbnail">
  <h4 class="person__name">${customer.name}</h4>
  <h4 class="person__last-name">${customer.lastName}</h4>`
  document.querySelector(".drink-card__list").appendChild(div);
}

//clear fields
UI.prototype.clearFields = function(){
    document.querySelector(".input-name").value = '';
    document.querySelector(".input-lastname").value = '';
    document.querySelector(".input-email").value = '';
}



function Customer(name, lastName, email){
  this.name = name;
  this.lastName = lastName;
  this.email = email;
}

//Work section untill next time


