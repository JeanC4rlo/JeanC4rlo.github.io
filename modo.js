let $elemsModoEscuro;
let $botaoModoEscuro = $(".botao-modo-escuro")
let $imagemBotaoModoEscuro = $(".botao-modo-escuro img")

function alternarModo(e) {
    let $elemsModoEscuro = $("*");
    $elemsModoEscuro.toggleClass("modo-escuro")
    if(localStorage.getItem("modo") == "escuro") {
        localStorage.setItem("modo", "claro");
        $imagemBotaoModoEscuro.attr("src", "imagens/light.png")
    }
    else {
        localStorage.setItem("modo", "escuro");
        $imagemBotaoModoEscuro.attr("src", "imagens/dark.png")
    }
}

$botaoModoEscuro.click(alternarModo);

function carregarModo(e) {
    let $elemsModoEscuro = $("*");
    let modo = localStorage.getItem("modo");
    if(modo == "escuro") {
        $elemsModoEscuro.toggleClass("modo-escuro");
        $imagemBotaoModoEscuro.attr("src", "imagens/dark.png");
    }
}

window.addEventListener("load", carregarModo);
