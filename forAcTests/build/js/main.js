"use strict";

// Управляет открытием/закрытием меню
const mainMenu = document.querySelector(".main-nav");
const menuToggle = document.querySelector(".main-nav__toggle");

function openMenu() {
  mainMenu.classList.remove("main-nav--closed");
  mainMenu.classList.add("main-nav--opened");
};

function closeMenu() {
  mainMenu.classList.remove("main-nav--opened");
  mainMenu.classList.add("main-nav--closed");
};

mainMenu.classList.remove("main-nav--no-js");
mainMenu.classList.remove("main-nav--opened");
mainMenu.classList.add("main-nav--closed");

menuToggle.addEventListener("click", function () {
  if (mainMenu.classList.contains("main-nav--closed")) {
    openMenu();
  } else {
    closeMenu();
  }
});

// Управляет слайдером на главной
let slider = document.querySelector(".slider");

if (slider !== null) {
  const beforeImg = document.querySelector(".slider__image--before");
  const afterImg = document.querySelector(".slider__image--after");
  const beforeBtn = document.querySelector(".slider__button--before");
  const afterBtn = document.querySelector(".slider__button--after");
  const sliderToggle = document.querySelector(".slider__toggle");

  function showBefore() {
    beforeBtn.style.outline = "none";
    if (afterImg.classList.contains("slider__image--current")) {
      afterImg.classList.remove("slider__image--current");
      beforeImg.classList.add("slider__image--current");
      sliderToggle.classList.remove("slider__toggle--after");
      sliderToggle.classList.add("slider__toggle--before");
    }
  };

  function showAfter() {
    afterBtn.style.outline = "none";
    if (beforeImg.classList.contains("slider__image--current")) {
      beforeImg.classList.remove("slider__image--current");
      afterImg.classList.add("slider__image--current");
      sliderToggle.classList.remove("slider__toggle--before");
      sliderToggle.classList.add("slider__toggle--after");
    }
  };

  beforeBtn.addEventListener("click", function() {
    showBefore();
  });

  afterBtn.addEventListener("click", function() {
    showAfter();
  });
};

// Управляет отображением карты
function initMap() {
  const tabletWidth = 768;
  const desktopWidth = 1300;
  let mapCenter = {lat: 59.938877, lng: 30.3232};
  let pinPosition = {lat: 59.9388, lng: 30.3232};
  let zoom = 16.7;
  let icon = {
    url: "../img/map-pin.png",
    scaledSize: new google.maps.Size(55, 53)
  };

  if (window.innerWidth >= tabletWidth) {
    icon.scaledSize = new google.maps.Size(116, 103);
    zoom = 17.7;
    mapCenter = {lat: 59.93889, lng: 30.32315};
    pinPosition = {lat: 59.938722, lng: 30.32315};
  }

  if (window.innerWidth >= desktopWidth) {
    zoom = 16.9;
    mapCenter = {lat: 59.9391, lng: 30.3193};
    pinPosition = {lat: 59.9388, lng: 30.32315};
  }

  let map = new google.maps.Map(document.querySelector(".contacts__map"), {zoom: zoom, center: mapCenter, disableDefaultUI: true});
  let marker = new google.maps.Marker({position: pinPosition, map: map, icon: icon});
}
