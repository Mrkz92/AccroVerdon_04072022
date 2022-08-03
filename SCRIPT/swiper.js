// Init Swiper
let swiper = new Swiper('.swiper', {
  // Install Plugin To Swiper
  modules: [myPlugin],
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // Enable debugger
  debugger: true,
});
