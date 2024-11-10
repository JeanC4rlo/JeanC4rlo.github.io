const videoEl = document.querySelector("video");
let indiceArtista = videoEl.dataset.artistId;

const fontesVideo = [
    [ // Half Alive
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
    ],
    [ // Will Joseph Cook
        "https://jeanc4rlo.github.io/videos/will-joseph-cook/little-miss.mp4",
        "https://jeanc4rlo.github.io/videos/will-joseph-cook/mf-bassline.mp4",
        "https://jeanc4rlo.github.io/videos/will-joseph-cook/the-dragon.mp4",
        "https://jeanc4rlo.github.io/videos/will-joseph-cook/kisses.mp4"
    ],
    [ // Laufey
        "https://jeanc4rlo.github.io/videos/laufey/bewitched.mp4",
        "https://jeanc4rlo.github.io/videos/laufey/california.mp4",
        "https://jeanc4rlo.github.io/videos/laufey/from-the-start.mp4"
    ]
];

let videoContador = 0;
let totalVideos = fontesVideo[indiceArtista].length;

function rodarVideo() {
    videoEl.classList.remove("anim-saida");
    videoEl.classList.add("anim-entrada");

    videoEl.setAttribute("src", fontesVideo[indiceArtista][videoContador]);
    videoEl.load();
    videoEl.play();
}

videoEl.addEventListener('ended', delayVideo, false);

function delayVideo() {
    videoEl.classList.remove("anim-entrada");
    videoEl.classList.add("anim-saida");

    setTimeout(() => {
        videoEl.setAttribute("src", "");
        setTimeout(proximoVideo, 6000);
    }, 4600);
}

function proximoVideo() {
    videoContador++;
    if(videoContador == totalVideos) {
        videoContador = 0;
        rodarVideo();
    }
    else {
        rodarVideo();
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