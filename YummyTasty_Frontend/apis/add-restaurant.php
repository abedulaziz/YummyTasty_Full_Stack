<?php 
include("connection.php");

$response = [];
$response["response"] = "success";

if(!empty($_POST["resName"])){
    $resName = $_POST["resName"];
}

if(!empty($_POST["resDesc"])){
    $resDesc = $_POST["resDesc"];
}

if(!empty($_POST["resAddress"])){
    $resAddress = $_POST["resAddress"];
}

if(!empty($_POST["profilePic"])){
    $profilePic = '../assets/images/'. $_POST["profilePic"];
}


// Read image path, convert to base64 encoding
// $imageData = base64_encode(file_get_contents($profile_pic));
// $src = 'data: ' . mime_content_type($profile_pic) . ';base64,' . $imageData;


$query = $mysqli->prepare("INSERT INTO restaurants(restaurant_name,description, address, profile_pic) VALUES (?, ?, ?, ?)");
$query->bind_param("ssss", $resName, $resDesc, $resAddress,  $profilePic);
$query->execute();

$response["name"] = "$resName";

$json = json_encode($response);
echo $json;
?>