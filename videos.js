const videoEl = document.getElementById("video-intro");
const fundoEl = document.getElementById("intro-fundo");

const fontesVideo = [
    "https://jeanc4rlo.github.io/videos/sophies-house.webm",
    "https://jeanc4rlo.github.io/videos/dimyu.webm",
    "https://jeanc4rlo.github.io/videos/summerland.webm",
    "https://jeanc4rlo.github.io/videos/still-feel.mp4",
    "https://jeanc4rlo.github.io/videos/time2.webm",
    "https://jeanc4rlo.github.io/videos/nobody.mp4",
    "https://jeanc4rlo.github.io/videos/whats-wrong.webm",
    "https://jeanc4rlo.github.io/videos/subliminal.webm"
];

let videoContador = -1;
let totalVideos = fontesVideo.length;

function rodarVideo() {
    fundoEl.classList.remove("anim-entrada-imagem");
    fundoEl.classList.add("anim-saida-imagem");

    setTimeout(() => {
        videoEl.classList.remove("anim-saida-video");
        videoEl.classList.add("anim-entrada-video");

        if(videoContador == 4) {
            videoEl.volume = 0.3;
        } else {
            videoEl.volume = 0.5;
        }

        videoEl.setAttribute("src", fontesVideo[videoContador]);
        videoEl.load();
        videoEl.play();
    }, 3600);
}

videoEl.addEventListener('ended', delayVideo, false);

function delayVideo() {
    videoEl.classList.remove("anim-entrada-video");
    videoEl.classList.add("anim-saida-video");

    setTimeout(() => {
        fundoEl.classList.remove("anim-saida-imagem");
        fundoEl.classList.add("anim-entrada-imagem");
        videoEl.setAttribute("src", "undefined");
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