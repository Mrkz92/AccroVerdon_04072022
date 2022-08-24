// --- MOBILE MENU
const navButton = document.querySelector(".nav-button");
const clickModal = document.querySelector(".gallery-card_image")
const header = document.querySelector(".header")
const navbar = document.querySelector(".navbar");
const navMenu = document.querySelector(".nav-menu");
const main = document.querySelector(".main");
const indexSwiperContainer = document.querySelector(".swiper-container")
const footer = document.querySelector(".footer");

navButton.addEventListener('click',()=>{
    navbar.classList.toggle("mobile-navbar");
    navMenu.classList.toggle("mobile-menu");
    navButton.classList.toggle("mobile-menu_button")
    main.classList.toggle("mobile-main");
    footer.classList.toggle("mobile-footer");
    indexSwiperContainer.classList.toggle("mobile-swiper_container");
})

clickModal.addEventListener('click',()=>{
    header.classList.toggle("modal-header");
    main.classList.toggle("modal-main");
    footer.classList.toggle("modal-footer");
})