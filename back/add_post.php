<?php
include 'db_connection.php'; // Assurez-vous que ce fichier contient la logique de connexion à la base de données

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $title = $_POST['title'];
    $content = $_POST['content'];
    $category = $_POST['category'];
    $author = $_POST['author'];

    $sql = "INSERT INTO posts (title, content, category, author) VALUES (?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('ssss', $title, $content, $category, $author);

    if ($stmt->execute()) {
        echo json_encode(["status" => "success", "message" => "Post created successfully."]);
    } else {
        echo json_encode(["status" => "error", "message" => "Failed to create post."]);
    }
    $stmt->close();
    $conn->close();
}
?>
