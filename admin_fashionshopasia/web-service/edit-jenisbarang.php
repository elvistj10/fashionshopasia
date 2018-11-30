<?php

	include"config.php";

	$idjenisbarang = $_GET["idjenisbarang"];
	$namajenisbarang = $_GET["namajenisbarang"];

	$query = "UPDATE tjenisbarang SET namajenisbarang = '$namajenisbarang', updatedate = NOW() WHERE idjenisbarang = '$idjenisbarang' ";

	$result = $conn -> query($query);

	if($result){
		echo true;
	}else{
		echo false;
	}

?>