//music page 

import { musicLink} from "../data/Music_links.js";
const songCoverArt = document.querySelector(".songCoverArt")
const songName = document.querySelector(".songName");
const spotifyLink = document.querySelector(".spotifylink")
const appleLink = document.querySelector(".applelink")
const audiomacLlink = document.querySelector(".audiomacklink")
const soundcLoudlink = document.querySelector(".soundcloudlink")
const youtubeLink = document.querySelector(".youtubelink")
const singles = document.querySelector(".singles")
const albums = document.querySelector(".albums")

let latestMusic;
let url = new URL(window.location.href)
let songIndex = parseInt(url.searchParams.get("songId"));


if (songIndex >= 0) {
    latestMusic = musicLink[songIndex];
} else {
    latestMusic = musicLink[musicLink.length - 1 ];
}

songCoverArt.src = latestMusic.image;
songName.textContent = latestMusic.name
spotifyLink.href = latestMusic.spotify
appleLink.href = latestMusic.appleMusic
audiomacLlink.href = latestMusic.audioMack
soundcLoudlink.href = latestMusic.soundCloud
youtubeLink.href = latestMusic.youtube

musicLink.forEach((song,index) => {
    let songLink = `<a href="music.html?songId=${index}" class="goto-song">${song.name}</a>`;
    if (song.type === "album") {
        albums.innerHTML += songLink;
        return;
    }
    singles.innerHTML += songLink;
})







