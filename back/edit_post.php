<?php
include 'db_connection.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $id = $_POST['id'];
    $title = $_POST['title'];
    $content = $_POST['content'];
    $category = $_POST['category'];

    $sql = "UPDATE posts SET title = ?, content = ?, category = ? WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('sssi', $title, $content, $category, $id);

    if ($stmt->execute()) {
        echo json_encode(["status" => "success", "message" => "Post updated successfully."]);
    } else {
        echo json_encode(["status" => "error", "message" => "Failed to update post."]);
    }
    $stmt->close();
    $conn->close();
}
?>
