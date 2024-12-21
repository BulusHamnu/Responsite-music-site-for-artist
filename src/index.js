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


 contactForm.addEventListener("submit", function(event) {
    event.preventDefault();
    let data = new FormData(event.target);
    fetch(event.target.action, {
      method: "POST",
      body: data,
      headers: {
          'Accept': 'application/json'
      }
    })
        .then( response => {
            if (response.ok) {
                alert("Form submitted successfully! I'll get back to you shortly.");
                contactForm.reset();

                contactForm.classList.remove("show-popup-entry")
                backdrop.classList.toggle("active");
            }
        
        }).catch(err => { alert("there was an error submitting the form! please try again")})


 })


