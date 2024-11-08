const containerAlbunsEl = document.querySelector('#album-list');
const botaoEsquerdaEl = document.querySelector('#botao-esquerda');
const botaoDireitaEl = document.querySelector('#botao-direita');

const tabelasSetlistEl = document.querySelectorAll('#container-setlist table');

let rolamentos = 0;
let maximoDeRolamentos = containerAlbunsEl.children.length - 1;

function rolarContainer() {
    let larguraContainer = containerAlbunsEl.offsetWidth;

    containerAlbunsEl.scroll({
        top: 0,
        left: rolamentos * larguraContainer,
        behavior: "smooth",
    });
}

function rolarSetlist() {
    if(rolamentos - 1 < 0) {
        tabelasSetlistEl[maximoDeRolamentos].classList.remove('tabela-visivel');
    }
    else {
        tabelasSetlistEl[rolamentos - 1].classList.remove('tabela-visivel');
    }

    tabelasSetlistEl[rolamentos].classList.add('tabela-visivel');
}

function rolamentoEsquerda() {
    if(rolamentos == 0) {
        rolamentos = maximoDeRolamentos;
    } else {
        rolamentos--;
    }

    rolarContainer();
    rolarSetlist();
}

function rolamentoDireita() {
    if(rolamentos == maximoDeRolamentos) {
        rolamentos = 0;
    } else {
        rolamentos++;
    }

    rolarContainer();
    rolarSetlist();
}

botaoEsquerdaEl.addEventListener('click', rolamentoEsquerda);

botaoDireitaEl.addEventListener('click', rolamentoDireita);

rolarContainer();
rolarSetlist();