<?php
require 'connection.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $productName = $_POST['productName'];
    $productDescription = $_POST['productDescription'];
    $productPrice = $_POST['productPrice'];
    $tags = $_POST['tags'];
    $productImage = file_get_contents($_FILES['productImage']['tmp_name']);

    $query = "INSERT INTO products (productName, productDescription, productPrice, tags, productImage) VALUES (?, ?, ?, ?, ?)";

    $stmt = $connection->prepare($query);
    $stmt->bind_param("ssdss", $productName, $productDescription, $productPrice, $tags, $productImage);

    if ($stmt->execute()) {
        $response = array(
            'status' => 'success',
            'message' => 'Product added successfully',
        );
    } else {
        $response = array(
            'status' => 'error',
            'message' => 'Error: ' . $stmt->error,
        );
    }

    $stmt->close();
    $connection->close();

    header('Content-Type: application/json');
    echo json_encode($response);
}
?>