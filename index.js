let menu = document.querySelector('#menu-bars');
let menuicon = true;
let navbar = document.querySelector('.navbar');
let cross;

menu.onclick = () => {
  console.log("test", menu);


  if (menuicon) {
    menu.classList.remove('fas');
    menu.classList.remove('fa-bars');

    menu.classList.add('fa-solid');
    menu.classList.add('fa-plus');

    navbar.classList.toggle('active');
    menuicon = false;
  }

  else {
    menu.classList.add('fas');
    menu.classList.add('fa-bars');

    menu.classList.remove('fa-solid');
    menu.classList.remove('fa-plus');
    navbar.classList.toggle('active');

    menuicon = true;

  }

  console.log("test2", menu);


  // navbar.classList.toggle('active');
}





// cross.onclick = () =>{
//   console.log("test",menu);
//   cross.classList.add('fas');
//   cross.classList.add('fa-bars');

//   cross.classList.remove('fa-solid');
//   cross.classList.remove('fa-plus');



//   navbar.classList.toggle('active');
// }






window.onscroll = () => {
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');    // On Click navbar Disappears

  menu.classList.add('fas');
  menu.classList.add('fa-bars');

  menu.classList.remove('fa-solid');
  menu.classList.remove('fa-plus');

  menuicon = true;

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
  strings: ["Anchor", "Emcee ", "Model", "Software Engineer", "Great Communicator"],
  typeSpeed: 50,
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
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  }
});





var swiper = new Swiper(".review-slider", {

  grabCursor: true,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  }
});






// Form Submission



function sendmail() {

  var name = $('#name').val();
  var email = "kshreyas495@gmail.com";
  var msg = $('#msg').val();
  var subject = $('#subject').val();

  var body = 'Name: ' + name + '<br/> Email: ' + subject + '<br/> Message:' + msg;


  if ((name && subject && msg != "") && (ValidateEmail() == true)) {

    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "kshreyas495@gmail.com",
      Password: "A8B547FBADA833CA8533F89B6BFF003BF264",
      To: 'Shreya.kulkarni70@gmail.com',
      From: email,
      Subject: subject,
      Body: body
    }).
      then(
        message => {
          if (message == "OK") {
            swal("Thanks For Responding!", "I Will Connect With You Shortly!", "success");
          }

          else {
            console.error(message)
            alert('Something Went Wrong! Please Have A Look On Contact Info Section Below');
          }
        }
      );
  }
  else {
    swal ( "Please Fill All The Fields \r\n" ,  "With Valid Email Address!" ,  "error" );
  }

}


function ValidateEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(subject.value)) {
    return (true)
  }
  // alert("You have entered an invalid email address!")
  return (false)
}









