<?php
include("connection.php");

if(!empty($_POST["fname"])){
  $first_name = $_POST["fname"];
}
if(!empty($_POST["lname"])){
  $last_name = $_POST["lname"];
}
if(!empty($_POST["email"])){
  $email = $_POST["email"];
}
if(!empty($_POST["password"])){
  $password = hash("sha256", $_POST["password"]);
}
if(!empty($_POST["gender"])){
  $gender = $_POST["gender"];
}
  $phone_number = $_POST["phoneNum"];
  $type = "user";
  
  $query = $mysqli->prepare("INSERT INTO users(first_name,last_name, email, password, gender, phone_number, type) 
  VALUES (?, ?, ?, ?, ?, ?, ?)");
  $lastInsertedPeopleId = $query->insert_id;
  $query->bind_param("sssssss", $first_name, $last_name, $email, $password, $gender, $phone_number, $type);
  $query->execute();
  $lastInsertedPeopleId = $query->insert_id;
  $response = [];
  $response["name"] = $first_name;
  $response["user_id"] = $lastInsertedPeopleId;
  $response["response"] = "success";
  
  $json = json_encode($response);
  echo $json;

?>