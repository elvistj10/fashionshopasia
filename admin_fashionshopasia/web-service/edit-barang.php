<?php

	include"config.php";

	$idbarang = $_GET["idbarang"];
	$idkategori = $_GET["idkategori"];
	$idjenisbarang = $_GET["idjenisbarang"];
	$iddetailbarang = $_GET["iddetailbarang"];
	$hargabarang = $_GET["hargabarang"];
	$gambar = $_GET["gambar"];
	$deskripsi = $_GET["deskripsi"];

	$query = "UPDATE tbarang SET idkategori = '$idkategori', idjenisbarang = '$idjenisbarang', iddetailbarang = '$iddetailbarang', hargabarang = '$hargabarang', gambar = '$gambar', deskripsi = '$deskripsi', updatedate = NOW() WHERE idbarang = '$idbarang' ";

	$result = $conn -> query($query);

	if($result){
		echo true;
	}else{
		echo false;
	}

?>