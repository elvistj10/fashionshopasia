<?php

	include"config.php";
		
	$query = "SELECT * FROM tdetailbarang ORDER BY iddetailbarang ASC";
	$result = $conn -> query($query);

	$outp = "";
	while($rs = $result -> fetch_array(MYSQLI_ASSOC)){
		if($outp != "") {$outp .= ",";}
		$outp .= '{"iddetailbarang":"'.$rs["iddetailbarang"].'",';
		$outp .= '"namadetailbarang":"'.$rs["namadetailbarang"].'"}';
	}
	$outp = '{"records":['.$outp.']}';
	$conn -> close();
	
	echo($outp);
		
?>