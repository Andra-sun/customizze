// trocar de pagina
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

// mostrar senha
function toggleSenha(formulario) {
    var senhaInput = document.getElementById(formulario + "-senha");
    var olhoImg = document.getElementById(formulario + "-mostrar-senha");

    if (senhaInput.type === "password") {
        senhaInput.type = "text";
        olhoImg.src = "https://cdn-icons-png.flaticon.com/128/2874/2874802.png";
    } else {
        senhaInput.type = "password";
        olhoImg.src =
            "https://cdn-icons-png.flaticon.com/128/10812/10812267.png";
    }
};
