<?php
$servername="localhost";
$username="root";
$password="";
$database="blogs";
$conn=new mysqli($servername,$username,$password,$database);
if($conn->connect_error)
{
    echo "connexion failed ".$conn->connect_error
}
?>