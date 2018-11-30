<?php
	include"config.php";

    $idkategori 	= $_GET["idkategori"];
	$idjenisbarang  = $_GET["idjenisbarang"];
	$iddetailbarang = $_GET["iddetailbarang"];
	$gambar			= $_GET['gambar'];
	$hargabarang 	= $_GET["hargabarang"];
	$deskripsi 		= $_GET["deskripsi"];
	$insertby       = $_GET["insertby"];

	$queryhitung = mysqli_query($conn, "SELECT * FROM tbarang");
	$lastid = mysqli_num_rows($queryhitung);
	$row = $lastid+1;
	$angkabaru = str_pad($row, 5,"0",STR_PAD_LEFT);
	$kode = "B-".$angkabaru;

	$query = "INSERT INTO tbarang(idbarang, kode, idkategori, idjenisbarang, iddetailbarang, hargabarang, gambar, deskripsi, createdate, insertby)
			  			   VALUES('', '$kode', '$idkategori','$idjenisbarang','$iddetailbarang', '$hargabarang', '$gambar', '$deskripsi', NOW(), '$insertby' )";
	
	$result = $conn -> query($query);

	if($result){
		echo true;
	}else{
		echo false;
	}

?>