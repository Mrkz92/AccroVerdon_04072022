// Init Swiper
let swiper = new Swiper('.swiper', {
  // Install Plugin To Swiper
      slidesPerView: 1,
      centeredSlides: true,
      spaceBetween: 40,
      loop: true,
      autoplay: true,
      delay: 4000,
      pagination: {
          el: ".swiper-pagination",
          clickable: true,
      },
      // Enable debugger
      debugger: true,
  });
