<?php
		
		include"config.php";

		$judul = $_GET["judul"];		
		$isi = $_GET["isi"];

		$query = "INSERT INTO tinfo(judul, isi)VALUES('$judul', '$isi')";
		$result = $conn -> query($query);
		
		if($result){
			echo true;
		}else{
			echo false;
		}
	
?>