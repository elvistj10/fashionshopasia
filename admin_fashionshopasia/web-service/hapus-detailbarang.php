<?php

	include"config.php";

	$iddetailbarang = $_GET["iddetailbarang"];

	$query = "DELETE FROM tdetailbarang WHERE iddetailbarang = '$iddetailbarang' ";
	$result = $conn -> query($query);
	
	if($result){
		echo true;
	}else{
		echo false;
	}

	$query2 = "ALTER TABLE tdetailbarang AUTO_INCREMENT = 1";
	$result2 = $conn -> query($query2);

?>