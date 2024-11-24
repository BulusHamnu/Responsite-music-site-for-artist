
const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const sideNav = document.querySelector(".side-nav");
const backdrop = document.querySelector(".backdrop");



 openBtn.addEventListener("click", function() {
    sideNav.classList.toggle("navActive");
    backdrop.classList.toggle('active');
 })
 closeBtn.addEventListener("click", function() {
   sideNav.classList.toggle("navActive");
   backdrop.classList.toggle('active');
 });