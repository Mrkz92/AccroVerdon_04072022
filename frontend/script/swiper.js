// Init Swiper
let swiper = new Swiper('.swiper', {
  // Install Plugin To Swiper
      slidesPerView: 1,
      centeredSlides: true,
      spaceBetween: 10,
      loop: true,
      autoplay: true,
      delay: 3000,
      pagination: {
          el: ".swiper-pagination",
          clickable: true,
      },
      // Enable debugger
      debugger: true,
});
