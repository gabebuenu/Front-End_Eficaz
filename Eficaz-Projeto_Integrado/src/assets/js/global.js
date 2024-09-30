// BRUNO

// FINAL BRUNO

// GUILHERME

// FINAL GUILHERME

// GABRIEL

const images = document.querySelectorAll('.product-image');

images.forEach(image => {
    const originalSrc = image.src;

    const hoverSrc = './assets/img/2.svg';

    image.addEventListener('mouseover', () => {
        image.src = hoverSrc;
    });

    image.addEventListener('mouseout', () => {
        image.src = originalSrc;
    });
});


// FINAL GABRIEL

// LUCAS PANIZIO

var countDownDate = new Date().getTime() + 12 * 60 * 60 * 1000;

var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";
    }
}, 1000);

// FINAL LUCAS PANIZIO

// GUSTAVO

const botoesCor = document.querySelectorAll('.botao-cor');

document.getElementById("botaoAzul").addEventListener("click", function () {
    document.getElementById("imagemProduto").src = "./assets/img/produto1.png";

    botoesCor.forEach(b => b.classList.remove('selecionado'));
    this.classList.add('selecionado');
});

document.getElementById("botaoVermelho").addEventListener("click", function () {
    document.getElementById("imagemProduto").src = "./assets/img/produto2.png";

    botoesCor.forEach(b => b.classList.remove('selecionado'));
    this.classList.add('selecionado');
});


// FINAL GUSTAVO

// LUCAS LIMA



// FINAL LUCAS LIMA
