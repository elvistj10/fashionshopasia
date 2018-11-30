<?php

	include"config.php";

	$idkategori = $_GET["idkategori"];

	$query = "DELETE FROM tkategori WHERE idkategori = '$idkategori' ";
	$result = $conn -> query($query);
	
	if($result){
		echo true;
	}else{
		echo false;
	}

	$query2 = "ALTER TABLE tkategori AUTO_INCREMENT = 1";
	$result2 = $conn -> query($query2);

?>