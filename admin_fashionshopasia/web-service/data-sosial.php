<?php

	include"config.php";
		
	$query = "SELECT * FROM sosial";
	$result = $conn -> query($query);

	$outp = "";
	while($rs = $result -> fetch_array(MYSQLI_ASSOC)){
		if($outp != "") {$outp .= ",";}
		$outp .= '{"idSosial":"'.$rs["idSosial"].'",';
		$outp .= '"nohp":"'.$rs["nohp"].'",';
		$outp .= '"facebook":"'.$rs["facebook"].'",';
		$outp .= '"whatsapp":"'.$rs["whatsapp"].'",';
		$outp .= '"instagram":"'.$rs["instagram"].'",';
		$outp .= '"email":"'.$rs["email"].'",';
		$outp .= '"lokasi":"'.$rs["lokasi"].'"}';
	}

	$outp = '{"records":['.$outp.']}';
	$conn -> close();
	
	echo($outp);
		
?>