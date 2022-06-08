<?php
//update profile
include("connection.php");

$user_id = $_POST["user_id"];
$first_name = $_POST["first_name"];
$last_name = $_POST["last_name"];
$email = $_POST["email"];
$password = hash("sha256", $_POST["password"]);
$phone_number = $_POST["phone_number"];

$query = $mysqli->prepare("UPDATE users set first_name = ?, last_name = ?, email = ?, password = ?, phone_number = ? where user_id = $user_id");
$query->bind_param("sssss",$first_name,$last_name,$email,$password,$phone_number);
$query->execute();

$response = [];
$response["success"]="success";

$json = json_encode($response);
echo $json;
?>