// vidio codes

let index = 0;
let slideTime;
let renderVedios;
const slideContainer = document.querySelector(".slides")
let getVideos = `https://www.googleapis.com/youtube/v3/search?part=snippet,id&channelId=UCx9k0JTrtI0jYwE_SLSX9LA&order=date&maxResults=50&key=AIzaSyC6XDzWuigY_TRwDwc78XPrYQmpafZm31U`;
let slideNum;
const slider = document.querySelector(".slider")






async function getVideo () {
    let videoData;
    let response = await fetch(getVideos);
    let data = await response.json() 
    let render = "";


    videoData = data.items

    videoData.forEach(song => {
        render += `
        <div class="slide">
            <iframe  width="570" height="325" src="https://www.youtube.com/embed/${song.id.videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>       
        </div>
        `
        
        
    })
    slideContainer.innerHTML += render;
    initiate ()
}


// getVideo()
initiate ()


function initiate () {
    slideNum = document.querySelectorAll(".slide");
    if (slideNum.length === 0) {
        slider.innerHTML = "Sorry there is no video available!"
        slider.style.marginTop = "3rem";
        return;
    }

    slideNum[index].classList.add("showSlide");
    slideTime = setInterval(() => {
        index++;
        nextSlide(index);
    },5000);
}

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

const forwardButton = document.querySelector(".forward")
const backwardButton = document.querySelector(".backward")

if (forwardButton && backwardButton) {
    forwardButton.addEventListener("click",() => {
        clearInterval(slideTime);
        index++;
        nextSlide(index);
    });
    
    backwardButton.addEventListener("click",() => {
        clearInterval(slideTime);
        index--;
        prevSlide(index);
    });
}







