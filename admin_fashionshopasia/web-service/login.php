<?php

		include"config.php";

		$username = mysql_real_escape_string($_GET["username"]);
		$userpass = mysql_real_escape_string(SHA1($_GET["userpass"]));
		
		$query = "SELECT * FROM tadmin WHERE username = '$username' AND userpass = '$userpass' ";
		$result = $conn -> query($query);

		$outp = "";
		if ($rs = $result -> fetch_array()) {
			if($outp != "") {$outp .= ",";}
			$outp .= '{"idadmin":"' . $rs["idadmin"] . '",' ;
			$outp .= '"nama":"'.$rs["nama"].'",';
			$outp .= '"username":"'.$rs["username"].'",';
			$outp .= '"userpass":"' . $rs["userpass"] . '"}' ;			
		}

		if ($rs) {
			$query2 = "INSERT INTO loglogin(lastlogin, username)values(NOW(), '$username')";
		 	$result2 = $conn -> query($query2);		

			$outp = '{"records":'.$outp.'}';
			$conn -> close();
			echo($outp);
		}
		else {
			echo "error";
		}
				
?>