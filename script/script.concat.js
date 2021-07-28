`use strict`;

const nav = document.querySelector(".nav");
const navSmall = document.querySelector(".nav-small");
const navLogo = document.querySelectorAll(".nav__logo");
const navList = document.querySelector(".nav__list");
const navSmallItem = document.querySelectorAll(".nav-small__link");

function showNav() {
  let top = window.pageYOffset || document.documentElement.scrollTop;
  if (top > 1) {
    nav.classList.add("nav-active");
    navList.classList.add("nav__list--active");

    for (i = 0; i < navLogo.length; i++) {
      navLogo[i].classList.add("u-visible");
    }
  } else {
    nav.classList.remove("nav-active");
    navList.classList.remove("nav__list--active");

    for (i = 0; i < navLogo.length; i++) {
      navLogo[i].classList.remove("u-visible");
    }
  }
}

function showNavSmall() {
  navSmall.classList.toggle("nav-small-active");
}

function addNavSmallItem() {
  for (i = 0; i < navSmallItem.length; i++) {
    navSmallItem[i].addEventListener("click", showNavSmall);
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
addNavSmallItem();
