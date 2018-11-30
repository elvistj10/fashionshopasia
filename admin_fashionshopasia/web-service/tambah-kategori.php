<?php

if (isset($_GET["namakategori"]) ){
	if(!empty($_GET["namakategori"]) ){
		
		include"config.php";

		$namakategori = $_GET["namakategori"];		
		$insertby = $_GET["insertby"];

		$query = "INSERT INTO tkategori(namakategori, createdate, insertby)VALUES('$namakategori', NOW(), '$insertby')";
		$result = $conn -> query($query);
		
		if($result){
			echo true;
		}else{
			echo false;
		}
	}
}

?>