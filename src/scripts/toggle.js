const menuToggle = document.querySelector("#hamburger");
const nav = document.querySelector("nav ul");
const closeToggle = document.querySelector("#closeBtn");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("slide");
});

closeToggle.addEventListener("click", () => {
  nav.classList.remove("slide");
});
