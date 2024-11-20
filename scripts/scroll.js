const containerAlbunsEl = document.querySelector('#album-list');
const botaoEsquerdaEl = document.querySelector('#botao-esquerda');
const botaoDireitaEl = document.querySelector('#botao-direita');

const setlists = document.querySelectorAll('#container-setlist table');

let rolamentos = 0;
let maximoDeRolamentos = containerAlbunsEl.children.length;

function rolarContainer() {
    let larguraContainer = containerAlbunsEl.offsetWidth;

    containerAlbunsEl.scroll({
        top: 0,
        left: rolamentos * larguraContainer,
        behavior: "smooth",
    });
}

function rolarSetlist() {
    for(let setlist of setlists) {
        setlist.classList.remove("tabela-visivel");
    }

    setlists[rolamentos].classList.add("tabela-visivel")
}

function rolamentoEsquerda() {
    rolamentos--;
    if(rolamentos == -1)
        rolamentos = maximoDeRolamentos - 1;

    rolarContainer();
    rolarSetlist();
}

function rolamentoDireita() {
    rolamentos++;
    rolamentos = rolamentos % maximoDeRolamentos;

    rolarContainer();
    rolarSetlist();
}

botaoEsquerdaEl.addEventListener('click', rolamentoEsquerda);
botaoDireitaEl.addEventListener('click', rolamentoDireita);

rolarContainer();
rolarSetlist();