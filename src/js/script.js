const botaoAvancar = document.querySelector("#btn-avancar");
const botaoVoltar = document.querySelector("#btn-voltar");
const cartoes = document.querySelectorAll(".cartao");

    let cartaoAtual = 0;

    function esconderCartao() {
        cartoes[cartaoAtual].classList.remove("selecionado");
}

    function mostrarCartao() {
        cartoes[cartaoAtual].classList.add("selecionado");
}

    botaoAvancar.addEventListener("click", () => {
        esconderCartao();

    cartaoAtual = (cartaoAtual + 1) % cartoes.length;
        mostrarCartao();
});

    botaoVoltar.addEventListener("click", () => {
        esconderCartao();

    cartaoAtual = (cartaoAtual - 1 + cartoes.length) % cartoes.length;
        mostrarCartao();
});