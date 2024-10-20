const seletorEl = document.getElementById("albuns");
const botoesPaginasEl = document.getElementsByClassName("botoes-paginas");

const paginaEl = document.getElementsByClassName("pagina-album");
let larguraPagina = paginaEl[0].offsetWidth;
let rolamentos = 0;

let intervaloAutoRolamento;
let tempoAutoRolamento = 10000;

seletorEl.scroll(0, 0);

function habilitarRolamento() {
    intervaloAutoRolamento = setInterval(rolamentoDireita, tempoAutoRolamento);
}

function rolamentoDireita() {
    resetarRolamentoAutomatico();
    limparAlbunsAtivos(rolamentos);

    if(rolamentos == 3) {
        rolamentos = 0;
    } else {
        rolamentos++;
    }

    ativarAlbum();

    seletorEl.scroll({
        left: larguraPagina * rolamentos,
        top: 0,
        behavior: "smooth",
    });
}

function rolamentoEsquerda() {
    resetarRolamentoAutomatico();
    limparAlbunsAtivos(rolamentos);

    if(rolamentos == 0) {
        rolamentos = 3;
    } else {
        rolamentos--;
    }

    ativarAlbum();

    seletorEl.scroll({
        left: larguraPagina * rolamentos,
        top: 0,
        behavior: "smooth",
    });
}

function rolarPara(pagina) {
    limparAlbunsAtivos(rolamentos);

    rolamentos = pagina;

    resetarRolamentoAutomatico();
    ativarAlbum();

    seletorEl.scroll({
        left: larguraPagina * rolamentos,
        top: 0,
        behavior: "smooth",
    });
}

function resetarRolamentoAutomatico() {
    clearInterval(intervaloAutoRolamento);
    habilitarRolamento();
}

function limparAlbunsAtivos(antecessor) {
    botoesPaginasEl[antecessor].classList.remove("album-ativo");
}

function ativarAlbum() {
    botoesPaginasEl[rolamentos].classList.add("album-ativo");
}

let startX;
let deltaX;

seletorEl.addEventListener('touchstart', e => {
    startX = e.touches[0].pageX;
    e.preventDefault();
});
  
seletorEl.addEventListener('touchmove', e => {
    deltaX = e.touches[0].pageX - startX;

    e.preventDefault();
});

seletorEl.addEventListener('touchend', e => {
    if(deltaX > 0) {
        rolamentoEsquerda();
    } else {
        rolamentoDireita();
    }

    e.preventDefault();
});

window.addEventListener("resize", (e) => {
    larguraPagina = paginaEl[0].offsetWidth;
    seletorEl.scroll({
        left: larguraPagina * rolamentos,
        top: 0,
    });
});

window.addEventListener("load", habilitarRolamento);

ativarAlbum();