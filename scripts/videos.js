const videoEl = document.querySelector("video");

const fontesVideo = [
    "https://jeanc4rlo.github.io/videos/half-alive/songs.mp4",
    "https://jeanc4rlo.github.io/videos/half-alive/sophies-house.webm",
    "https://jeanc4rlo.github.io/videos/half-alive/dimyu.webm",
    "https://jeanc4rlo.github.io/videos/half-alive/summerland.webm",
    "https://jeanc4rlo.github.io/videos/half-alive/still-feel.mp4",
    "https://jeanc4rlo.github.io/videos/half-alive/time2.webm",
    "https://jeanc4rlo.github.io/videos/half-alive/nobody.mp4",
    "https://jeanc4rlo.github.io/videos/half-alive/whats-wrong.webm",
    "https://jeanc4rlo.github.io/videos/half-alive/automatic.mp4",
    "https://jeanc4rlo.github.io/videos/half-alive/subliminal.webm"
];

let videoContador = 0;
let totalVideos = fontesVideo.length;

function rodarVideo() {
    videoEl.classList.remove("anim-saida");
    videoEl.classList.add("anim-entrada");

    videoEl.setAttribute("src", fontesVideo[videoContador]);
    videoEl.load();
    videoEl.play();
}

videoEl.addEventListener('ended', delayVideo, false);

function delayVideo() {
    videoEl.classList.add("anim-saida");
    videoEl.classList.remove("anim-entrada");

    setTimeout(() => {
        videoEl.setAttribute("src", "");
        setTimeout(proximoVideo, 6000);
    }, 4600);
}

function proximoVideo() {
    videoContador++;
    if(videoContador == totalVideos) {
        videoContador = 0;
        rodarVideo(videoContador);
    }
    else {
        rodarVideo(videoContador);
    }
}

function inicializarVideos() {
    setTimeout(() => {
        videoEl.classList.remove("anim-saida");
        videoEl.classList.add("anim-entrada");
        rodarVideo();
    }, 5000);
}

window.addEventListener("load", inicializarVideos);