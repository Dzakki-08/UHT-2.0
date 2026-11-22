const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("nav");

navToggle.addEventListener("click", () => {

  const open = nav.classList.toggle("open");

  navToggle.setAttribute("aria-expanded", open);
  navToggle.setAttribute("aria-label", open ? "Tutup menu" : "Buka menu");
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Buka menu");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll("img").forEach((img) => {
  img.addEventListener("error", () => {
    img.style.visibility = "hidden";
  });
});

const judul = document.getElementById("successTitle");
if (judul) judul.focus({ preventScroll: true });

const items = document.querySelectorAll(".feature, .vision__main, .mission__list li, .product, .benefit, .step, .practice, .news-card, .gallery__item");

if ("IntersectionObserver" in window) {
  items.forEach((el, i) => {
    el.classList.add("reveal");
    el.style.setProperty("--delay", (i % 3) * 0.1 + "s");
  });

  const pengintai = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        pengintai.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  items.forEach((el) => pengintai.observe(el));
}
