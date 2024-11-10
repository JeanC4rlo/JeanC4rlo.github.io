const botaoDeLerMaisEl = document.querySelector("#leia-mais");
const botaoDeLerMenosEl = document.querySelector("#leia-menos");
const containerInformacoesEl = document.querySelector("#mais-informacao");

function mostrarMaisInformacao() {
    botaoDeLerMaisEl.classList.remove("texto-visivel");
    botaoDeLerMenosEl.classList.add("texto-visivel");
    containerInformacoesEl.classList.add("texto-visivel");
}

function mostrarMenosInformacao() {
    botaoDeLerMaisEl.classList.add("texto-visivel");
    botaoDeLerMenosEl.classList.remove("texto-visivel");
    containerInformacoesEl.classList.remove("texto-visivel");
}

botaoDeLerMaisEl.addEventListener('click', mostrarMaisInformacao);
botaoDeLerMenosEl.addEventListener('click', mostrarMenosInformacao);

function detectarTelaGrande() {
    if(window.screenX >= 1000) {
        botaoDeLerMaisEl.classList.remove("texto-visivel");
        botaoDeLerMenosEl.classList.remove("texto-visivel");
        containerInformacoesEl.classList.add("texto-visivel");
    }
    else {
        botaoDeLerMaisEl.classList.add("texto-visivel");
        botaoDeLerMenosEl.classList.remove("texto-visivel");
        containerInformacoesEl.classList.remove("texto-visivel");
    }
}

window.addEventListener("resize", detectarTelaGrande);
window.onload = detectarTelaGrande;