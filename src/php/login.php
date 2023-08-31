<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

include "DbConnect.php";
$objDb = new DbConnect;
$conn = $objDb->connect();

var_dump($conn);

$user = $_POST;
$method = $_SERVER['REQUEST_METHOD'];

$userName = $user['userName'];
$password = $user['password'];

switch ($method) {
    case 'POST':
        $stmt = $conn->prepare("SELECT * FROM user WHERE userName = :userName;");
        $stmt->bindParam(':userName', $userName);
        // $stmt->bindParam(':password', $password);
        $stmt->execute();

        if ($stmt->rowCount() > 0) {
            // Login successful
            $response = ['success' => true];
        } else {
            // Invalid username or password
            $response = ['success' => false];
        }

        echo json_encode($response);
        break;
}
