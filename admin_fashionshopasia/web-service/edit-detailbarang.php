<?php

	include"config.php";

	$iddetailbarang = $_GET["iddetailbarang"];
	$namadetailbarang = $_GET["namadetailbarang"];

	$query = "UPDATE tdetailbarang SET namadetailbarang = '$namadetailbarang', updatedate = NOW() WHERE iddetailbarang = '$iddetailbarang' ";

	$result = $conn -> query($query);

	if($result){
		echo true;
	}else{
		echo false;
	}

?>