
const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const sideNav = document.querySelector(".side-nav");



 openBtn.addEventListener("click", function() {
    sideNav.style.display = "flex";
 })
 closeBtn.addEventListener("click", function() {
    sideNav.style.display = "none";
 });