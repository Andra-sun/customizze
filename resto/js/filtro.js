function mostrarAreaDeLoja() {
    var selecao = document.getElementById("categorias");
    var areasDeLoja = document.querySelectorAll(".areas-de-loja");
    var carrossel = document.querySelector('.carrossel');

    areasDeLoja.forEach(function (area) {
        area.classList.remove("show");
    });

    if (selecao.value !== "todas") {
        var areaSelecionada = document.getElementById(selecao.value);
        areaSelecionada.classList.add("show");
        carrossel.style.display = 'none';
    } else {
        carrossel.style.display = 'flex';
        areasDeLoja.forEach(function (area) {
            area.classList.add("show");
        });
    }
}

mostrarAreaDeLoja();
