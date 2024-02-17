$(function () {
  $(".owl-carousel").owlCarousel({
    rtl: false,
    loop: true,
    smartSpeed: 1000,
    items: 1,
    mouseDrag: false,
    margin: 30,
    touchDrag: false,
    responsiveClass: true,
    autoplay: true,
    navText: [
      '<i class="fa-solid fa-angle-left"></i>',
      '<i class="fa-solid fa-angle-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
        nav: false,
        autoplay: false,
      },
      600: {
        nav: false,
      },
      1000: {
        nav: true,
      },
    },
  });
});

let openDrop = document.querySelectorAll(".fa-angle-down");
openDrop.forEach((el) => {
  el.onclick = function (e) {
    e.preventDefault();
    this.parentElement.parentElement.classList.toggle("active");
  };
});

let bars = document.querySelector(".bars");
let openNav = document.querySelector(".site-nav");
let closeNav = document.querySelector(".mobile-site-close ");

bars.onclick = function () {
  this.classList.add("active");
  openNav.classList.add("active");
};

closeNav.onclick = function () {
  bars.classList.remove("active");
  openNav.classList.remove("active");
};

