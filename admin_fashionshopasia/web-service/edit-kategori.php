<?php

	include"config.php";

	$idkategori = $_GET["idkategori"];
	$namakategori = $_GET["namakategori"];

	$query = "UPDATE tkategori SET namakategori = '$namakategori', updatedate = NOW() WHERE idkategori = '$idkategori' ";

	$result = $conn -> query($query);

	if($result){
		echo true;
	}else{
		echo false;
	}

?>