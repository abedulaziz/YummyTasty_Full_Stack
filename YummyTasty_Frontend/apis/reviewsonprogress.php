<?php 
//return reviews
include("connection.php");

$query = $mysqli->prepare("SELECT reviews.user_id,reviews.restaurant_id,users.email,restaurants.restaurant_name,reviews.description,reviews.rate 
from users, reviews, restaurants 
where users.user_id = reviews.user_id and restaurants.restaurant_id = reviews.restaurant_id and reviews.status='on progress' ");
$query->execute();
$array = $query->get_result();

$response = [];
while($reviews = $array->fetch_assoc()){
    $response[] = $reviews;
} 
$json = json_encode($response);
echo $json;

?>