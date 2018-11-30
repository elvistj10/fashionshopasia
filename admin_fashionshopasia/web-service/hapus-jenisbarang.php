<?php

	include"config.php";

	$idjenisbarang = $_GET["idjenisbarang"];

	$query = "DELETE FROM tjenisbarang WHERE idjenisbarang = '$idjenisbarang' ";
	$result = $conn -> query($query);
	
	if($result){
		echo true;
	}else{
		echo false;
	}

	$query2 = "ALTER TABLE tjenisbarang AUTO_INCREMENT = 1";
	$result2 = $conn -> query($query2);

?>