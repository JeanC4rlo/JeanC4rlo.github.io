const videoEl = document.querySelector("video");
let indiceArtista = videoEl.dataset.artistId;

const fontesVideo = [
    [ // Half Alive
        "https://jeanc4rlo.github.io/videos/half-alive/all-my-love.mp4",
        "https://jeanc4rlo.github.io/videos/half-alive/sophies-house.webm",
        "https://jeanc4rlo.github.io/videos/half-alive/dimyu.webm",
        "https://jeanc4rlo.github.io/videos/half-alive/summerland.webm",
        "https://jeanc4rlo.github.io/videos/half-alive/still-feel.mp4",
        "https://jeanc4rlo.github.io/videos/half-alive/songs.mp4",
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
    ],
    [ // Clairo
        "https://jeanc4rlo.github.io/videos/clairo/juna.mp4",
        "https://jeanc4rlo.github.io/videos/clairo/4ever.mp4",
        "https://jeanc4rlo.github.io/videos/clairo/pretty-girl.mp4"
    ],
    [ // Tessa Violet
        "https://jeanc4rlo.github.io/videos/tessa-violet/crush.mp4",
        "https://jeanc4rlo.github.io/videos/tessa-violet/games.mp4",
        "https://jeanc4rlo.github.io/videos/tessa-violet/not-over-you.mp4"
    ]
];

let videoContador = 0;
let totalVideos = fontesVideo[indiceArtista].length;

function aumentarVolumeGradualmente() {
    if(videoEl.volume >= 0.96) {
        return;
    }
    else {
        videoEl.volume += 0.08;
        setTimeout(aumentarVolumeGradualmente, 75);
    }
}

function rodarVideo() {
    videoEl.classList.remove("anim-saida");

    videoEl.setAttribute("src", fontesVideo[indiceArtista][videoContador]);
    videoEl.load();
    videoEl.play();

    videoEl.volume = 0;
    aumentarVolumeGradualmente();
    videoEl.classList.add("anim-entrada");
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