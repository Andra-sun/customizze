const telefone = document.querySelector("#contatoMobile");
const barra = document.querySelector(".ContatosForMobile");

telefone.addEventListener("click", function () {
    if (barra.style.display === "none" || barra.style.display === "") {
        barra.style.display = "flex";
    } else {
        barra.style.display = "none";
    }
});

