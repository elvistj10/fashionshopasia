<?php

	include"config.php";

	$idSosial  = $_GET["idSosial"];
	$nohp 	   = $_GET["nohp"];
	$facebook  = $_GET["facebook"];
	$whatsapp  = $_GET["whatsapp"];
	$instagram = $_GET["instagram"];
	$email 	   = $_GET["email"];
	$lokasi    = $_GET["lokasi"];

	$query = "UPDATE sosial SET nohp = '$nohp', facebook = '$facebook', whatsapp = '$whatsapp', instagram = '$instagram', email = '$email', 						  lokasi = '$lokasi', updatedate = NOW() WHERE idSosial = '$idSosial' ";

	$result = $conn -> query($query);

	if($result){
		echo true;
	}else{
		echo false;
	}

?>