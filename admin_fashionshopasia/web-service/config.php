<?php
	//$conn = new mysqli("114.57.247.162","tirtadah_gisbengkel","pC71Rc55jd","tirtadah_dbbengkel");
	$conn = new mysqli("localhost","root","","dbfashionshopasia") or die("Connect failed: %s\n". $conn -> error);
// $conn = new mysqli("103.247.11.191","fasa7392_user_fashionshopasia","fasa7392_pass_fashionshopasia","fasa7392_dbfashionshopasia") or die("Connect failed: %s\n". $conn -> error);
	//$conn = new mysqli("114.57.247.162","tirtadah_elvis","10111072","tirtadah_dbhube");
	//http://114.57.247.162:2082/
	//$conn = new mysqli("localhost","bandunge_elvis","presley","bandunge_testing");
	// function OpenCon()
	// 	 {
	// 		$conn = new mysqli("103.247.11.191","fasa7392_user_fashionshopasia","fasa7392_pass_fashionshopasia","fasa7392_dbfashionshopasia") or die("Connect failed: %s\n". $conn -> error);
	// 		 return $conn;
	// 	 }
	// 	function CloseCon($conn)
	// 	 {
	// 	 $conn -> close();
	// 	 }
?>