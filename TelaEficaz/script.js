const botoesCor = document.querySelectorAll('.botao-cor');

document.getElementById("botaoAzul").addEventListener("click", function () {
    document.getElementById("imagemProduto").src = "img/produto1.png";

    botoesCor.forEach(b => b.classList.remove('selecionado'));
    this.classList.add('selecionado');
});

document.getElementById("botaoVermelho").addEventListener("click", function () {
    document.getElementById("imagemProduto").src = "img/produto2.png";

    botoesCor.forEach(b => b.classList.remove('selecionado'));
    this.classList.add('selecionado');
});
