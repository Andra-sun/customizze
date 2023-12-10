const abrir = document.querySelector(".click-for-contato");
const caixa = document.querySelector('.contato');

abrir.addEventListener('click', function () {
    if (caixa.style.display === "none" || caixa.style.display === "") {
        caixa.style.display = "flex";
    } else {
        caixa.style.display = "none";
    }
});
