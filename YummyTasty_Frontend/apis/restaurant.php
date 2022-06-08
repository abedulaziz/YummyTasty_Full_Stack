<?php 
//restaurant
include("connection.php");

$restaurnt_id = $_POST["restaurant_id"];

$query = $mysqli->prepare("SELECT restaurant_name,description,profile_pic,address from restaurants where restaurant_id = $restaurnt_id");//front
$query->execute();
$query->store_result();
$num_rows = $query->num_rows();
$query->bind_result($restaurant_name,$description,$profile_pic,$address);
$query->fetch();

$response = [];
if($num_rows == 0){
    $response["response"] = "failed";
}else{
    $response["response"] = "success";
    $response["restaurant_name"] = $restaurant_name;
    $response["description"] = $description;
    $response["profile_pic"] = $profile_pic;
    $response["address"] = $address;
}
$json = json_encode($response);
echo $json;

?>