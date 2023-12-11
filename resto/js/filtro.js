function mostrarAreaDeLoja() {
    var selecao = document.getElementById("categorias");
    var areasDeLoja = document.querySelectorAll(".areas-de-loja");
    var titulosCategorias = document.querySelectorAll(".titulo-categoria");

    areasDeLoja.forEach(function(area) {
        area.classList.remove("show");
    });

    if (selecao.value !== "todas") {
        var areaSelecionada = document.getElementById(selecao.value);
        areaSelecionada.classList.add("show");
    } else {
        areasDeLoja.forEach(function(area) {
            area.classList.add("show");
        });
    }

}

mostrarAreaDeLoja();