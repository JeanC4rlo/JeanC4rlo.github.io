const setaEl = document.getElementById("descer-para-mais");
const linkEl = document.getElementById("link-seta");

window.addEventListener("scroll", atualizarSeta);

function atualizarSeta() {
    if(window.scrollY >= (window.innerHeight / 2)) {
        setaEl.classList.add("invisivel");
        linkEl.removeAttribute("href");
    }
    else {
        setaEl.classList.remove("invisivel");
        linkEl.setAttribute("href", "#container-seletor");
    }
}

atualizarSeta();