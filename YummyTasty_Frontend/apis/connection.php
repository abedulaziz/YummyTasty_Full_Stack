<?php
//connection file
$host = "localhost";
$db_user = "root";
$db_pass = null ;
$db_name = "yummytastydb";
$mysqli = new mysqli($host, $db_user, $db_pass, $db_name);


header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

?>