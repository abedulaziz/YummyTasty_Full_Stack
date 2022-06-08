<?php
//list of restaurants
include("connection.php");

$query = $mysqli->prepare("SELECT restaurant_id,restaurant_name,description,profile_pic,address from restaurants");
$query->execute();
$array = $query->get_result();

$response = [];
while($restaurant = $array->fetch_assoc()){
    $response[] = $restaurant;
} 

$json = json_encode($response);
echo $json;
?>