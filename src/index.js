const contactMeBtn = document.querySelector(".contactBtn");
const contactForm = document.querySelector(".contactForm");
const closePopup = document.querySelector(".close-popup");



contactMeBtn.addEventListener("click", function() { 
    contactForm.classList.add("show-popup-entry")
    backdrop.classList.toggle("active");
 });

closePopup.addEventListener("click", function() { 
    contactForm.classList.remove("show-popup-entry")
    backdrop.classList.toggle("active");
 });



