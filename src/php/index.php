<?php
error_reporting(E_ALL);
ini_set('display_erros', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

include "DbConnect.php";
$objDb = new DbConnect();
$con = $objDb->connect();

var_dump($con);

$user = file_get_contents('php://input');
$method = $_SERVER['REQUEST_METHOD'];

switch($method){
    case 'POST':
        $user = json_decode(file_get_contents('php://input'));
        $sql = "INSERT INTO user(id,userName, firstName, lastName, email, phoneNumber, accountType, password) VALUES(:userName, :firstName, :lastName, :email, :phoneNumber, :accountType, :password)";
        $stmt = $con->prepare($sql);
        $stmt->bindParam(':userName',$user->userName);
        $stmt->bindParam(':firstName',$user->firstName);
        $stmt->bindParam(':lastName',$user->lastName);
        $stmt->bindParam(':email',$user->email);
        $stmt->bindParam(':phoneNumber',$user->phoneNumber);
        $stmt->bindParam(':accountType',$user->accountType);
        $stmt->bindParam(':password',$user->password);

        if($stmt->execute()){
            $response = ['status' => 1, 'message' => "Successfully Recorded."];
        }else{
            $response = ['status' => 0, 'message' => "Faild to create recorde."];
        }

        break;
}