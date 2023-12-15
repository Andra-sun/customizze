const telefone = document.querySelector("#contatoMobile");
const barra = document.querySelector(".ContatosForMobile");

telefone.addEventListener("click", function () {
    if (barra.style.display === "none" || barra.style.display === "") {
        barra.style.display = "flex";
    } else {
        barra.style.display = "none";
    }
});

const pessoa = document.querySelector('#profileMobile');
const perfilBarra = document.querySelector('.pofileForMobile');

pessoa.addEventListener('click', function(){
    if (perfilBarra.style.display === "none" || perfilBarra.style.display === "") {
        perfilBarra.style.display = "flex";
    } else {
        perfilBarra.style.display = "none";
    }});
