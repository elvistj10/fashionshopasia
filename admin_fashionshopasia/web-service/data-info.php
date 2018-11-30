<?php

	include"config.php";
		
	$query = "SELECT * FROM tinfo";
	$result = $conn -> query($query);

	$outp = "";
	while($rs = $result -> fetch_array(MYSQLI_ASSOC)){
		if($outp != "") {$outp .= ",";}
		$outp .= '{"idinfo":"'.$rs["idinfo"].'",';
		$outp .= '"judul":"'.$rs["judul"].'",';
		$outp .= '"isi":"'.$rs["isi"].'"}';
	}
	$outp = '{"records":['.$outp.']}';
	$conn -> close();
	
	echo($outp);
		
?>