// Get the modal
let modal = document.getElementById('myModal');
 
// Get the image and insert it inside the modal - use its "alt" text as a caption
let img = document.getElementsByClassName("image")[0];
let modalImg = document.getElementById("img1");
img.onclick = function(){
    modal.style.display = "flex";
    modal.style.flexDirection = 'row'
    modalImg = img.src;
}
 
// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];
 
// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

// Init Swiper
let modalSwiper = new Swiper('.modal-swiper', {
    // Install Plugin To Swiper
    slidesPerView: 'auto',
    spaceBetween: 40,
    loop: true,
    // Enable debugger
    debugger: true,
  });