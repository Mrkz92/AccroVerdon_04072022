// Init Swiper
let swiper = new Swiper('.swiper', {
  // Install Plugin To Swiper
  slidesPerView: 'auto',
  modules: [myPlugin],
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
  // Enable debugger
  debugger: true,
});
