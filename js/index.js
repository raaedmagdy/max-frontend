const navEl = document.querySelector(".navbar");
const logo = document.querySelector(".logo");
let links = document.querySelector("nav-link a");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navEl.classList.add("navbar-scrolled");
    logo.src = "images/logo-dark.png";
    // if (!links.classList.contains("active")) {
    //   links.style.color = "black";
    // }
  } else {
    navEl.classList.remove("navbar-scrolled");
    logo.src = "images/logo-light.png";
    // if (!links.classList.contains("active")) {
    //   links.style.color = "#fff";
    // }
  }
});

document.addEventListener("DOMContentLoaded", () => {
  // Initialize Typed.js
  var options = {
    strings: ["SUCCESS", "GROWN UP", "DREAM"],
    typeSpeed: 150, // Typing speed in milliseconds
    backSpeed: 150, // Backspacing speed in milliseconds
    startDelay: 500, // Delay before starting to type
    backDelay: 500, // Delay before starting to backspace
    loop: true, // Enable looping
  };
  var typed = new Typed(".auto-type", options);
  console.log(typed);
});
