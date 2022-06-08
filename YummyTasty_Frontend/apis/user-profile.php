<?php
//user profile information 

include("connection.php");

$user_id = $_POST["user_id"];

$query = $mysqli->prepare("SELECT first_name,last_name,email,gender, phone_number from users where user_id = $user_id");
$query->execute();
$query->store_result();
$query->bind_result($first_name,$last_name,$email,$gender,$phone_number);
$query->fetch();

$response = [];
$response["response"] = "success";
$response["first_name"] = "$first_name";
$response["last_name"] = "$last_name";
$response["email"] = "$email";
$response["gender"] = "$gender";
$response["phone_number"] = "$phone_number";


$json = json_encode($response);
echo $json;

?>