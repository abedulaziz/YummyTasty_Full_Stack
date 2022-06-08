<?php
 
//list all user registered
include("connection.php");
$query = $mysqli->prepare("SELECT first_name,last_name,email,phone_number from users");
$query->execute();
$array = $query->get_result();
$response = [];
while($user = $array->fetch_assoc()){
    $response[] = $user;
} 
$json = json_encode($response);
echo $json;

?>