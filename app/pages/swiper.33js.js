var swiper = new Swiper('.swiper-container', {
  loop: true,
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 0,

  // If you need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // If you need navigation buttons
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});