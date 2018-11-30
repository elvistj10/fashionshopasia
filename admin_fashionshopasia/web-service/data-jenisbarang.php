<?php

	include"config.php";
		
	$query = "SELECT * FROM tjenisbarang ORDER BY idjenisbarang ASC";
	$result = $conn -> query($query);

	$outp = "";
	while($rs = $result -> fetch_array(MYSQLI_ASSOC)){
		if($outp != "") {$outp .= ",";}
		$outp .= '{"idjenisbarang":"'.$rs["idjenisbarang"].'",';
		$outp .= '"namajenisbarang":"'.$rs["namajenisbarang"].'"}';
	}
	$outp = '{"records":['.$outp.']}';
	$conn -> close();
	
	echo($outp);
		
?>