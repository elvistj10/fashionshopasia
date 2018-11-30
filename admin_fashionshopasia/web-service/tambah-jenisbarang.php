<?php

if (isset($_GET["namajenisbarang"]) ){
	if(!empty($_GET["namajenisbarang"]) ){
		
		include"config.php";

		$namajenisbarang = $_GET["namajenisbarang"];
		$insertby = $_GET["insertby"];

		$query = "INSERT INTO tjenisbarang(namajenisbarang, createdate, insertby)VALUES('$namajenisbarang', NOW(), '$insertby' )";
		$result = $conn -> query($query);

		if($result){
			echo true;
		}else{
			echo false;
		}
	}
}

?>