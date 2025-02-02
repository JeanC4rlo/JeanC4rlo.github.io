let links = [
    "https://jeanc4rlo.github.io/minepedia/index.html"
];

async function carregarLink(link) {
    try {
        const response = await fetch(link);
        const html = await response.text();

        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        
        let imagem = doc.querySelector('meta[property="og:image"]');
        let url = doc.querySelector('meta[property="og:url"]');
        let titulo = doc.querySelector('meta[property="og:title"]');
        let descricao = doc.querySelector('meta[property="og:description"]');

        let $artigo = $("<article>");
        let $imagem = $(`<img src=${imagem.getAttribute("content")}>`)
        let $url = $(`<a lang="en" href="${url.getAttribute("content")}">${url.getAttribute("content")}</a>`)
        let $titulo = $(`<h3>${titulo.getAttribute("content")}</h3>`)
        let $descricao = $(`<p lang="pt-BR">${descricao.getAttribute("content")}</p>`)

        if(localStorage.getItem("modo") == "escuro") {
            $imagem.addClass("modo-escuro");
            $url.addClass("modo-escuro");
            $titulo.addClass("modo-escuro");
            $descricao.addClass("modo-escuro");
        }

        $imagem.appendTo($artigo);
        $url.appendTo($artigo);
        $titulo.appendTo($artigo);
        $descricao.appendTo($artigo);

        $artigo.appendTo("section");
    }
    catch(error) {
        console.error("Erro ao tentar carregar meta tags:", error);
        return null;
    }
}

links.forEach(carregarLink)
