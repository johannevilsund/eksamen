const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const menu = document.querySelector(".menu");

burger.addEventListener("click", burgerClick);
function burgerClick() {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
}
menu.addEventListener("click", menuClick);
function menuClick() {
  burger.classList.remove("active");
  nav.classList.remove("active");
}

// function sidenVises() {
//   console.log("siden vises");
//   document.querySelector("#tema3").classList.add("skjul");
//   document.querySelector("#projekter").addEventListener("click", dropdown);
// }
// function dropdown() {
//   console.log("drop down");
//   document.querySelector("#tema3").classList.remove("skjul");
// }
