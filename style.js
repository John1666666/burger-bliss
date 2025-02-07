//已填寫
let menu = document.querySelector('.header .btn i');
//已填寫
let navbar = document.querySelector('.header .navbar');

//已填寫
menu.onclick =()=>{
    menu.classList.toggle('fa-times');

    navbar.classList.toggle('active');
}

//已填寫
var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
  });

//已填寫
let slides = document.querySelectorAll('.review .slide-container .slide');

//已填寫
let index = 0;

//已填寫
function next(){
    slides[index].classList.remove('active');
    index = (index+1) % slides.length;
    slides[index].classList.add('active');
}

//已填寫
function prev(){
    slides[index].classList.remove('active');
     index = (index - 1 +slides.length) % slides.length;
    slides[index].classList.add('active');
}