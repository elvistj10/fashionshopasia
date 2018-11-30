<?php

	include"config.php";
		
	$query = "SELECT idbarang, kode, tk.idkategori, namakategori, tj.idjenisbarang, namajenisbarang, td.iddetailbarang, namadetailbarang, hargabarang, gambar, deskripsi
			  FROM tbarang tb JOIN tkategori tk JOIN tjenisbarang tj JOIN tdetailbarang td
			  WHERE tb.idkategori = tk.idkategori AND tb.idjenisbarang = tj.idjenisbarang AND tb.iddetailbarang = td.iddetailbarang
			  ORDER BY idbarang ASC";
	$result = $conn -> query($query);

	$outp = "";
	while($rs = $result -> fetch_array(MYSQLI_ASSOC)){
		if($outp != "") {$outp .= ",";}
		$outp .= '{"idbarang":"'.$rs["idbarang"].'",';
		$outp .= '"kode":"'.$rs["kode"].'",';
		$outp .= '"idkategori":"'.$rs["idkategori"].'",';
		$outp .= '"namakategori":"'.$rs["namakategori"].'",';
		$outp .= '"idjenisbarang":"'.$rs["idjenisbarang"].'",';
		$outp .= '"namajenisbarang":"'.$rs["namajenisbarang"].'",';
		$outp .= '"iddetailbarang":"'.$rs["iddetailbarang"].'",';
		$outp .= '"namadetailbarang":"'.$rs["namadetailbarang"].'",';
		$outp .= '"hargabarang":"'.number_format($rs['hargabarang'],0,",",".").'",';
		$outp .= '"gambar":"'.$rs["gambar"].'",';
		$outp .= '"deskripsi":"'.$rs["deskripsi"].'"}';
	}
	$outp = '{"records":['.$outp.']}';
	$conn -> close();
	
	echo($outp);
		
?>