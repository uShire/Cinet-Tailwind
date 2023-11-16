const header = document.querySelector(".header");
const burgir = document.querySelector(".toggle__menu");
burgir.addEventListener("click", () => {
  header.classList.toggle("open");
  burgir.classList.toggle("open");
});
