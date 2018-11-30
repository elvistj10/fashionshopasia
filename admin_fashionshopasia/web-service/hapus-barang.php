<?php

	include"config.php";

	$idbarang = $_GET["idbarang"];

	$query = "DELETE FROM tbarang WHERE idbarang = '$idbarang' ";
	$result = $conn -> query($query);
	
	if($result){
		echo true;
	}else{
		echo false;
	}

	$query2 = "ALTER TABLE tbarang AUTO_INCREMENT = 1";
	$result2 = $conn -> query($query2);

?>