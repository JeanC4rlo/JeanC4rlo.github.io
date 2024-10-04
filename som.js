const botaoEl = document.getElementById("mutar-botao");

botaoEl.addEventListener("click", () => {
    videoEl.muted = !videoEl.muted;
})