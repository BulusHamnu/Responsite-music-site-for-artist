const contactMeBtn = document.querySelector(".contactBtn");
const contactForm = document.querySelector(".contactForm");
const closePopup = document.querySelector(".close-popup");


contactMeBtn.addEventListener("click", function() { 
    contactForm.style.display = "flex";
 });

closePopup.addEventListener("click", function() { 
    contactForm.style.display = "none";
 });



 