const navigationBar = document.querySelector("#nav");
const navOpen = document.querySelector("#nav-open");
const navClose = document.querySelector("#nav-close");
const overlay = document.querySelector(".overlay");

console.log(navigationBar, navClose, navOpen);

navOpen.addEventListener("click", () => {
  navigationBar.classList.toggle("open");
  navigationBar.classList.toggle("close");
  overlay.classList.toggle("none");
});

navClose.addEventListener("click", () => {
  navigationBar.classList.toggle("open");
  navigationBar.classList.toggle("close");
  overlay.classList.toggle("none");
});

overlay.addEventListener("click", function () {
  navigationBar.classList.toggle("open");
  navigationBar.classList.toggle("close");
  this.classList.toggle("none");
});
