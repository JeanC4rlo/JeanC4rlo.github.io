const botaoEl = document.querySelector('.botao-mutar');
const imagemBotaoEl = document.querySelector('.botao-mutar img')

const imagensDosEstadosDoBotao = [
    "https://jeanc4rlo.github.io/images/ui/sound.png",
    "https://jeanc4rlo.github.io/images/ui/muted.png"
]

botaoEl.addEventListener('click', () => {
    videoEl.muted = !videoEl.muted;

    if(videoEl.muted) {
        imagemBotaoEl.setAttribute("src", imagensDosEstadosDoBotao[1]);
    }
    else {
        imagemBotaoEl.setAttribute("src", imagensDosEstadosDoBotao[0]);
    }
})