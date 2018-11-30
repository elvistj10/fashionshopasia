<?php

	include"config.php";

	$idadmin  = $_GET["idadmin"];
	$nama 	  = $_GET["nama"];
	$username = $_GET["username"];
	$userpass = SHA1($_GET["userpass"]);

	$query = "UPDATE tadmin SET nama = '$nama', username = '$username', userpass = '$userpass' WHERE idadmin = '$idadmin' ";

	$result = $conn -> query($query);

	if($result){
		echo true;
	}else{
		echo false;
	}

?>