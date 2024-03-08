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

let preloader = document.querySelector(".preloader");
window.onload = () => setTimeout(() => preloader.classList.add("show"), 300);

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

let customPagination = document.querySelectorAll(".custom-pagination a");
let tabsInner = document.querySelectorAll(".tab-blog");

customPagination.forEach((el) => {
  el.onclick = (e) => {
    e.preventDefault();

    // remove class visible when click on pagination
    customPagination.forEach((el) => el.classList.remove("active"));
    el.classList.add("active");

    // filter class visible when click on pagination
    tabsInner.forEach((el) => el.classList.remove("visible"));
    document
      .querySelectorAll("." + el.getAttribute("data-filter"))
      .forEach((el) => el.classList.add("visible"));
  };
});

let copy = document.querySelector(".copy span");
copy.textContent = new Date().getFullYear();

let removeForm = document.querySelector(".remove-form");
if (window.location.pathname === "/D:/Nova/dist/index.html") {
  removeForm.style.display = "none";
}

let switcherColor = document.querySelectorAll(".switcher-color ul li");
switcherColor.forEach((el) => {
  el.onclick = function () {
    localStorage.setItem("changeColor", "#" + this.getAttribute("data-color"));
    let colors = localStorage.getItem("changeColor");
    if (colors === "#" + this.getAttribute("data-color")) {
      document
        .querySelector(":root")
        .style.setProperty(
          "--main-color",
          "#" + this.getAttribute("data-color")
        );
      document.body.setAttribute(
        "data-hover-color",
        "#" + this.getAttribute("data-color")
      );
    }
  };
  let colors = localStorage.getItem("changeColor");
  if (colors === "#" + el.getAttribute("data-color")) {
    document
      .querySelector(":root")
      .style.setProperty("--main-color", "#" + el.getAttribute("data-color"));
    document.body.setAttribute(
      "data-hover-color",
      "#" + el.getAttribute("data-color")
    );
  }
});

let openSwitcherColor = document.querySelector("span");
openSwitcherColor.onclick = function () {
  this.classList.toggle("active");
  if (this.classList.contains("active")) {
    this.parentElement.classList.add("active");
  } else {
    this.parentElement.classList.remove("active");
  }
};
