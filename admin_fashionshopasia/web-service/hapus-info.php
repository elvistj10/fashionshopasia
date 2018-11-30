<?php

	include"config.php";

	$idinfo = $_GET["idinfo"];

	$query = "DELETE FROM tinfo WHERE idinfo = '$idinfo' ";
	$result = $conn -> query($query);
	
	if($result){
		echo true;
	}else{
		echo false;
	}

	$query2 = "ALTER TABLE tinfo AUTO_INCREMENT = 1";
	$result2 = $conn -> query($query2);

?>