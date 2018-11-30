<?php
	if(!empty($_FILES['image'])){
		//$conn  = new mysqli("localhost", "root", "", "db_image") or die(mysqli_error());
		$path = pathinfo($_FILES['image']['name'],PATHINFO_EXTENSION);
                $image = NOW().'.'.$path;
                move_uploaded_file($_FILES["image"]["tmp_name"], 'upload/'.$image);

				//$conn->query("INSERT INTO `photo` (photo_name) VALUES('$image')") or die(mysqli_error());
	}else{
		echo "<script>Error!</script>";
	}
?>