let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}


window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
}




// let menu = document.querySelector('#menu-bars');
// let navbar = document.querySelector('.navbar');

// menu.onclick = () =>{
//   menu.classList.toggle('fa-times');
//   navbar.classList.toggle('active');
// }



// window.onscroll = () =>{
//     menu.classList.remove('fa-times');
//     navbar.classList.remove('active');  
// }





// Typing Animation Script
var typed = new Typed(".typing ", {
  strings: ["Anchor", "Host", "Emcee ", "Model", "Software Engineer", "Great Communicator"],
  typeSpeed: 100,
  bacSpeed: 60,
  loop: true
});





var swiper = new Swiper(".home-slider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true,
    },
    loop:true,
    autoplay:{
        delay: 3000,
        disableOnInteraction:false,
    }
  });





  var swiper = new Swiper(".review-slider", {
   
    grabCursor: true,
    centeredSlides: true,
    loop:true,
    autoplay:{
        delay: 1000,
        disableOnInteraction:false,
    }
  });






 