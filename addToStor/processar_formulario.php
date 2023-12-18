<?php
// Conectar ao banco de dados (substitua com suas próprias configurações)
$host = 'localhost';
$usuario = 'root';
$senha = '';
$banco = 'loja';

$conexao = new mysqli($host, $usuario, $senha, $banco);

// Verificar a conexão
if ($conexao->connect_error) {
    die("Falha na conexão com o banco de dados: " . $conexao->connect_error);
}

// Processar dados do formulário quando o formulário é enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Verificar se os campos do formulário estão definidos
    $nomeProduto = isset($_POST['productName']) ? mysqli_real_escape_string($conexao, $_POST['productName']) : '';
    $descricao = isset($_POST['productDescription']) ? mysqli_real_escape_string($conexao, $_POST['productDescription']) : '';

    // Verificar se a imagem foi enviada
    $imagem = '';
    if (isset($_FILES['productImage']['name'])) {
        // Manipular a imagem (salvar em um diretório, salvar o caminho no banco de dados, etc.)
        // Aqui, vamos apenas exibir o nome do arquivo
        $imagem = $_FILES['productImage']['name'];
    }

    // Verificar se as tags foram enviadas e são um array
    $tags = isset($_POST['tags']) && is_array($_POST['tags']) ? implode(",", $_POST['tags']) : '';

    // Verificar a categoria do produto
    $categoria = '';
    if (isset($_POST['tags'])) {
        // Defina a categoria com base nas tags selecionadas
        if (in_array('caneca', $_POST['tags'])) {
            $categoria = 'canecas';
        } elseif (in_array('camisa', $_POST['tags'])) {
            $categoria = 'camisas';
        } elseif (in_array('almofada', $_POST['tags'])) {
            $categoria = 'almofadas';
        }
    }

    // Inserir dados no banco de dados se os campos obrigatórios estiverem definidos
    if (!empty($nomeProduto) && !empty($descricao) && !empty($tags)) {
        $sql = "INSERT INTO produtos (nome, descricao, imagem, tags, categoria) VALUES ('$nomeProduto', '$descricao', '$imagem', '$tags', '$categoria')";

        if ($conexao->query($sql) === TRUE) {
            echo "Produto adicionado com sucesso!";
        } else {
            echo "Erro ao adicionar produto: " . $conexao->error;
        }
    } else {
        echo "Campos obrigatórios não foram preenchidos. Dados recebidos: " . print_r($_POST, true);
    }
}

// Fechar a conexão
$conexao->close();
?>
