const abrir = document.querySelector(".click-for-contato");
const caixa = document.querySelector(".contato");

abrir.addEventListener("click", function () {
    if (caixa.style.display === "none" || caixa.style.display === "") {
        caixa.style.display = "flex";
    } else {
        caixa.style.display = "none";
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const profileButton = document.querySelector(".perfio");
    const profileBar = document.querySelector(".profile-bar");

    profileButton.addEventListener("click", function () {
        // Toggle entre display: none e display: flex
        profileBar.style.display = (profileBar.style.display === "none" || profileBar.style.display === "") ? "flex" : "none";
    });
});
