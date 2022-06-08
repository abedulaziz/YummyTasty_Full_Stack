<?php 
//return reviews
include("connection.php");

$user_id= $_POST["user_id"];
$restaurant_id= $_POST["restaurant_id"];

$query = $mysqli->prepare("DELETE from reviews where reviews.user_id = $user_id   and reviews.restaurant_id = $restaurant_id ");
$query->execute();

$response = [];
$response["success"] = "success";
$json = json_encode($response);
echo $json;

?>