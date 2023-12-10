document.addEventListener("DOMContentLoaded", function () {
    const botaoIrProLogin = document.querySelector("#botao-ir-pro-login");
    const botaoIrProRegistro = document.querySelector("#botao-ir-pro-registro");
    const cadastro = document.querySelector(".cadastro");
    const login = document.querySelector(".logar");

    botaoIrProLogin.addEventListener("click", function () {
        cadastro.style.display = "none";
        login.style.display = "flex";
    });

    botaoIrProRegistro.addEventListener("click", function () {
        cadastro.style.display = "flex";
        login.style.display = "none";
    });
});