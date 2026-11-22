const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxCaption = document.getElementById("lightboxCaption");
const lightboxClose = document.getElementById("lightboxClose");

document.querySelectorAll(".gallery__btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const foto = btn.querySelector("img");
    const judul = btn.parentElement.querySelector("strong");
    lightboxImg.src = foto.src;
    lightboxImg.alt = foto.alt;
    lightboxCaption.textContent = judul ? judul.textContent : "";
    lightbox.showModal();
  });
});

lightboxClose.addEventListener("click", () => lightbox.close());

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) lightbox.close();
});
