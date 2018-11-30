<?php

	include"config.php";
		
	$query = "SELECT * FROM tkategori";
	$result = $conn -> query($query);

	$outp = "";
	while($rs = $result -> fetch_array(MYSQLI_ASSOC)){
		if($outp != "") {$outp .= ",";}
		$outp .= '{"idkategori":"'.$rs["idkategori"].'",';
		$outp .= '"namakategori":"'.$rs["namakategori"].'"}';
	}
	$outp = '{"records":['.$outp.']}';
	$conn -> close();
	
	echo($outp);
		
?>