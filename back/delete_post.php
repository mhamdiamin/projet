<?php
include 'db_connection.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $id = $_POST['id'];

    $sql = "DELETE FROM posts WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('i', $id);

    if ($stmt->execute()) {
        echo json_encode(["status" => "success", "message" => "Post deleted successfully."]);
    } else {
        echo json_encode(["status" => "error", "message" => "Failed to delete post."]);
    }
    $stmt->close();
    $conn->close();
}
?>
