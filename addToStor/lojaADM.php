<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="lojaADM.css" />
    <title>Adicione a loja</title>
</head>
<body>

<?php
// Incluir o código de processamento aqui
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Se o formulário foi enviado, incluir o código PHP de processamento
    include('processar_formulario.php');
}
?>

<div class="container">
    <h1>Adicione a loja</h1>
    <form id="productForm" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post" enctype="multipart/form-data">
        <label for="productName">Nome do produto:</label>
        <input type="text" id="productName" name="productName" required />

        <label for="productDescription">Descrição:</label>
        <textarea type="text" id="productDescription" name="productDescription" required></textarea>

        <label for="productImage">Imagem:</label>
        <input type="file" id="productImage" name="productImage" accept="image/*" required />

        <label for="productTags">Tags:</label>
        <div id="tagCheckBoxes">
            <label><input type="checkbox" name="tags[]" value="caneca" />Caneca</label>
            <label><input type="checkbox" name="tags[]" value="camisa" />Camisa</label>
            <label><input type="checkbox" name="tags[]" value="almofada" />Almofada</label>
            <label><input type="checkbox" name="tags[]" value="personalizavel" />Personalizável</label>
            <label><input type="checkbox" name="tags[]" value="kit" />Kit</label>
        </div>
        <button type="submit">Adicionar produto</button>
    </form>

    <?php
    // Exibir mensagens de sucesso ou erro
    if (isset($mensagem)) {
        echo '<div id="mensagem">' . $mensagem . '</div>';
    }
    ?>
</div>

</body>
</html>
