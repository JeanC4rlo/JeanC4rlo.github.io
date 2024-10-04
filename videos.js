let videoEl = document.getElementById("video-intro");

let fontesVideo = [
    '../videos/sophies-house.webm',
    '../videos/dimyu.webm',
    '../videos/still-feel.webm',
    '../videos/time2.webm'
];

let videoContador = 0;
let totalVideos = fontesVideo.length;

function rodarVideo(videoAtual) {
    videoEl.setAttribute("src", fontesVideo[videoAtual]);
    videoEl.load();
    videoEl.play();
}

videoEl.addEventListener('ended', proximoVideo, false);

function proximoVideo() {
    videoContador++;
    if(videoContador == totalVideos - 1) {
        videoContador = 0;
        rodarVideo(videoContador);
    }
    else {
        rodarVideo(videoContador);
    }
}