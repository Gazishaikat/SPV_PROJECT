<?php

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

$db = mysqli_connect("localhost",'root',"",'contact');

$insert = "INSERT INTO mycontact(name,email,phone,message)
VALUES('$name','$email','$phone','$message')";

mysqli_query($db , $insert);
echo" Submission Successful"; 

?>