<?php 
//add review
include("connection.php");

$restaurant_id = $_POST["restaurant_id"];
$user_id = $_POST["user_id"];
$description = $_POST["description"];
$rate = $_POST["rate"];
$status = "on progress";

$query = $mysqli->prepare("INSERT INTO reviews(user_id,restaurant_id, description, rate, status) VALUES (?, ?, ?, ?, ?)");
$query->bind_param("sssss", $user_id, $restaurant_id, $description, $rate, $status);
$query->execute();

$response = [];
$response["response"] = "success";

$json = json_encode($response);
echo $json;
?>