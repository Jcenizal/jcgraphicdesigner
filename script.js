const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav nav');
menu?.addEventListener('click', () => {
  nav.style.display = nav.style.display === 'flex' ? '' : 'flex';
  nav.style.position = 'absolute';
  nav.style.top = '80px';
  nav.style.right = '5vw';
  nav.style.flexDirection = 'column';
  nav.style.background = '#131316';
  nav.style.padding = '20px';
  nav.style.border = '1px solid #29292e';
});
function openLightbox(imageSrc) {

    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightbox-image");

    lightboxImage.src = imageSrc;

    lightbox.classList.add("active");

    document.body.style.overflow = "hidden";
}


function closeLightbox() {

    const lightbox = document.getElementById("lightbox");

    lightbox.classList.remove("active");

    document.body.style.overflow = "auto";
}


document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeLightbox();

    }

});
document.getElementById("lightbox")?.addEventListener("click", function(event) {
  if (event.target === this) {
    closeLightbox();
  }
});
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 850) nav.style.display = '';
  });
});
