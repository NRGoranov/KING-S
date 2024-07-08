// const navbar = document.querySelector(".navbar");
// const navbarClose = document.getElementById("navbar-close");
// const menu = document.querySelector(".menu-content");
// const menuItems = document.querySelectorAll(".submenu-item");
// const subMenuTitles = document.querySelectorAll(".submenu .menu-title");
// const switchElement = document.getElementById("toggle-switch");
// const initialScreen = document.querySelector(".initial-screen");
// const navbar = document.querySelector(".navbar");
// const main = document.querySelector(".main");
// let j = 0;

// navbarClose.addEventListener("click", () => navbar.classList.toggle("close"));
// menuItems.forEach((item, index) => {
//   item.addEventListener("click", () => {
//     menu.classList.add("submenu-active");
//     item.classList.add("show-submenu");
//     menuItems.forEach((item2, index2) => {
//       if (index !== index2) {
//         item2.classList.remove("show-submenu");
//       }
//     });
//   });
// });
// subMenuTitles.forEach((title) => {
//   title.addEventListener("click", () => {
//     menu.classList.remove("submenu-active");
//   });
// });

// document.addEventListener("DOMContentLoaded", function () {
//   const navbarToggle = document.getElementById("navbar-close");

//   navbarToggle.addEventListener("click", function () {
//     navbarToggle.classList.toggle("active");
//     navbar.classList.toggle("close");
//   });
// });

function changeClass() {
  var element = document.querySelector("#myDiv");
  if (element) {
    element.classList.replace("visible", "hidden");
  } else {
    console.error('Element with ID "myDiv" not found.');
  }

  var menu = document.getElementById("myMenu");
  if (menu) {
    menu.classList.replace("hidden", "visible");
  } else {
    console.error('Element with ID "myMenu" not found.');
  }

  console.log("change");
}

let i = 0;

function changeColor() {
  var king = document.querySelector("#KING\\'S"); // Use double backslashes to escape the apostrophe
  if (i % 2 != 1) {
    king.classList.add("btn-shine");
  } else if (i % 2 != 0) {
    king.classList.remove("btn-shine");
  }
  console.log("Class changed for KING'S");
  i += 1;
}
let j = 0;

function showIframe() {
  var cubes = document.getElementById("cubesIframe");
  var king = document.querySelector("#KING\\'S"); // Use double backslashes to escape the apostrophe
  if (j % 2 !== 1) {
    cubes.classList.add("showIframe");
    king.classList.add("hidden");
  } else {
    cubes.classList.remove("showIframe");
    king.classList.remove("hidden");
  }
  console.log("Class changed for cubesIframe");
  j += 1;
}

const navbar = document.querySelector(".navbar");
const navbarClose = document.querySelector("#navbar-close");
const menu = document.querySelector(".menu-content");
const menuItems = document.querySelectorAll(".submenu-item");
const subMenuTitles = document.querySelectorAll(".submenu .menu-title");
navbarClose.addEventListener("click", () => navbar.classList.toggle("close"));
menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    menu.classList.add("submenu-active");
    item.classList.add("show-submenu");
    menuItems.forEach((item2, index2) => {
      if (index !== index2) {
        item2.classList.remove("show-submenu");
      }
    });
  });
});
subMenuTitles.forEach((title) => {
  title.addEventListener("click", () => {
    menu.classList.remove("submenu-active");
  });
});
