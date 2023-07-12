const botaoDeConselho = document.querySelector(".novo-conselho");
const numeroDoConselho = document.querySelector(".conselho-id");
const descricaoDoConselho = document.querySelector(".descricao-conselho");

async function obterAconselhamento() {
    const resposta = await fetch("https://api.adviceslip.com/advice");
    const conteudoDoConselho = await resposta.json();
    const idDoConselho = `Advice #${conteudoDoConselho.slip.id}`;
    const textoConselho = `"${conteudoDoConselho.slip.advice}"`;

    numeroDoConselho.innerHTML = idDoConselho;
    descricaoDoConselho.innerHTML = textoConselho;
}

botaoDeConselho.addEventListener("click", obterAconselhamento);

obterAconselhamento();
