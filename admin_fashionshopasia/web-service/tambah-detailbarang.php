<?php

if (isset($_GET["namadetailbarang"]) ){
	if(!empty($_GET["namadetailbarang"]) ){
		
		include"config.php";

		$namadetailbarang = $_GET["namadetailbarang"];
		$insertby = $_GET["insertby"];

		$query = "INSERT INTO tdetailbarang(namadetailbarang, createdate, insertby)VALUES('$namadetailbarang', NOW(), '$insertby')";
		$result = $conn -> query($query);

		if($result){
			echo true;
		}else{
			echo false;
		}
	}
}

?>