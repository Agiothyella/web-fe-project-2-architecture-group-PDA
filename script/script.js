`use strict`;

const nav = document.querySelector(".nav");
const navLogo = document.querySelector(".nav__logo");
const navList = document.querySelector(".nav__list");

function showNav() {
  let top = window.pageYOffset || document.documentElement.scrollTop;
  if (top > 1) {
    nav.classList.add("nav-active");
    navLogo.classList.add("u-visible");
    navList.classList.add("nav__list--active");
  } else {
    nav.classList.remove("nav-active");
    navLogo.classList.remove("u-visible");
    navList.classList.remove("nav__list--active");
  }
}

window.onscroll = function () {
  showNav();
};

const slideImg = document.getElementsByClassName("slider__img");
let indexImg = Math.floor(Math.random() * slideImg.length) + 1;

function showSlidesHead() {
  for (i = 0; i < slideImg.length; i++) {
    slideImg[i].classList.remove("u-visible");
  }

  indexImg++;

  if (indexImg > slideImg.length) {
    indexImg = 1;
  }

  slideImg[indexImg - 1].classList.add("u-visible");

  timerHead = setTimeout(showSlidesHead, 8000);
}

showSlidesHead();
