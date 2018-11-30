<?php

	include"config.php";

	$idinfo = $_GET["idinfo"];
	$judul = $_GET["judul"];
	$isi = $_GET["isi"];

	$query = "UPDATE tinfo SET judul = '$judul', isi = '$isi' WHERE idinfo = '$idinfo' ";

	$result = $conn -> query($query);

	if($result){
		echo true;
	}else{
		echo false;
	}

?>