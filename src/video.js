// vidio code


let index = 0;
let slideNum = document.querySelectorAll(".slide")
let slideTime;

document.addEventListener("DOMContentLoaded", () => {
    slideNum[index].classList.add("showSlide");
    slideTime = setInterval(() => {
        index++;
        nextSlide(index);
    },5000);
})

function nextSlide (slideIndex) {
    if (slideIndex >= slideNum.length) {
        index = 0;
        slideNum.forEach(slide => slide.classList.remove("showSlide"));
        slideNum[index].classList.add("showSlide");
    } else {
        slideNum.forEach(slide => slide.classList.remove("showSlide"));
        slideNum[index].classList.add("showSlide");
    }
}

function prevSlide(slideIndex) {
    if (index < 0) {
        index = slideNum.length - 1;
        slideNum.forEach(slide => slide.classList.remove("showSlide"));
        slideNum[index].classList.add("showSlide");
    } else {
        slideNum.forEach(slide => slide.classList.remove("showSlide"));
        slideNum[index].classList.add("showSlide");
    }
}

document.querySelector(".forward").addEventListener("click",() => {
    clearInterval(slideTime);
    index++;
    nextSlide(index);
});

document.querySelector(".backward").addEventListener("click",() => {
    clearInterval(slideTime);
    index--;
    prevSlide(index);
});


