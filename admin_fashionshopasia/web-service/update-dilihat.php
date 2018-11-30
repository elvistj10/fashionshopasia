<?php

	include"config.php";

	$idbarang = $_GET["idbarang"];

	$query = "UPDATE tbarang SET dilihat = dilihat + 1 WHERE idbarang = '$idbarang' ";

	$result = $conn -> query($query);

	if($result){
		echo true;
	}else{
		echo false;
	}

?>