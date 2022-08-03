// --- MOBILE MENU
const navButton = document.querySelector(".nav-button");
const navMenu = document.querySelector(".nav-menu");
const navbar = document.querySelector(".navbar");
const main = document.querySelector(".main");
const footer = document.querySelector(".footer");

navButton.addEventListener('click',()=>{
    navMenu.classList.toggle("mobile-menu");
    navbar.classList.toggle("mobile-navbar");
    main.classList.toggle("mobile-main");
    footer.classList.toggle("mobile-footer");
})