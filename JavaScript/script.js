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
let currentContent = "";

function changeColor() {
  var king = document.querySelector("#KING\\'S");
  var iframe = document.getElementById("contentIframe");

  // Hide iframe when changing color
  iframe.classList.remove("showIframe");
  iframe.classList.add("hideIframe");

  if (!king.classList.contains("btn-shine")) {
    king.classList.add("btn-shine");
  } else {
    king.classList.remove("btn-shine");
  }

  console.log("Class changed for KING'S");
}

function showIframe(content) {
  var king = document.querySelector("#KING\\'S");
  var iframe = document.getElementById("contentIframe");

  // Reset other elements
  king.classList.remove("btn-shine", "hidden");

  if (currentContent !== content) {
    iframe.src = content;
    iframe.classList.add("showIframe");
    iframe.classList.remove("hideIframe");
    king.classList.add("hidden");
    currentContent = content;
  } else {
    iframe.classList.remove("showIframe");
    iframe.classList.add("hideIframe");
    king.classList.remove("hidden");
    currentContent = "";
  }

  console.log("Content changed to:", content);
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
