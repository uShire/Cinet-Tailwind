const headerNav = document.querySelector(".header__nav");
const burgir = document.querySelector(".toggle__menu");
burgir.addEventListener("click", () => {
  headerNav.classList.toggle("open");
  burgir.classList.toggle("open");
});

const headerLink = document.querySelectorAll(".header__nav__item h4.nav");
headerLink.forEach((headerL) => {
  headerL.addEventListener("click", () => {
    headerL.nextElementSibling.classList.toggle("open");
    headerL.querySelector("i").classList.toggle("open");
  });
});
