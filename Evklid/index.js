
// Burger menu
let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menulinks = menu.querySelectorAll('.nav__link');
let burgerWrapper = document.querySelector('.burger__wrapper')

burger.addEventListener('click',

  function () {

    burger.classList.toggle('burger--active');
    burgerWrapper.classList.toggle('burger__wrapper--active')
    menu.classList.toggle('header__nav--active');

    document.body.classList.toggle('stop-scroll');
  });

menulinks.forEach(function (el) {
  el.addEventListener('click', function () {

    burger.classList.remove('burger--active');

    menu.classList.remove('header__nav--active');

    document.body.classList.remove('stop-scroll');
  });
});

// Swiper

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  }
});


// Search_Form

document.addEventListener('DOMContentLoaded', (e) => {
  let SearchBtn = document.querySelector('.header__search-btn');
  let btnclose = document.getElementById('search-form__closebtn');
  let SearchForm = document.querySelector('.search-form');

  SearchBtn.addEventListener('click',
    function () {
      SearchBtn.classList.toggle('header__search-btn--active');
      SearchForm.classList.toggle('search-form--active');

    });

  btnclose.addEventListener('click', (e) => {
    SearchForm.classList.remove('search-form--active');
    SearchBtn.classList.remove('header__search-btn--active');
  });

});

//  Tabs

let tabsBtn = document.querySelectorAll('.tabs-nav__btn');
let tabsItem = document.querySelectorAll('.tabs-item');

tabsBtn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function (btn) { btn.classList.remove('tabs-nav__btn--active') });
    e.currentTarget.classList.add('tabs-nav__btn--active');

    tabsItem.forEach(function (element) { element.classList.remove('tabs-item--active') });
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
  });
});

// Accordion

new Accordion('.accordion-list', {
  elementClass: 'accordion',
  triggerClass: 'accordion__control',
  panelClass: 'accordion__content',
  activeClass: 'accordion--active'
});


