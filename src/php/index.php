<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

include "DbConnect.php";
$objDb = new DbConnect();
$conn = $objDb->connect();

var_dump($conn);

$user = $_POST;
$method = $_SERVER['REQUEST_METHOD'];

$userName = $user['userName'];
$firstName = $user['firstName'];
$lastName = $user['lastName'];
$email = $user['email'];
$phoneNumber = $user['phoneNumber'];
$accountType = $user['accountType'];
$password = $user['password'];

switch ($method) {
    case 'POST':
        $sql = "INSERT INTO user(userName, firstName, lastName, email, phoneNumber, accountType, password) VALUES(:userName, :firstName, :lastName, :email, :phoneNumber, :accountType, :password)";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':userName', $userName);
        $stmt->bindParam(':firstName', $firstName);
        $stmt->bindParam(':lastName', $lastName);
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':phoneNumber', $phoneNumber);
        $stmt->bindParam(':accountType', $accountType);
        $stmt->bindParam(':password', $password);

        if ($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Registration successfully.'];
            // header('Location: http://localhost:80/boq_master/src/App.js')
        } else {
            $response = ['status' => 0, 'message' => 'Failed to Register.'];
        }
        echo json_encode($response);
        break;
}
