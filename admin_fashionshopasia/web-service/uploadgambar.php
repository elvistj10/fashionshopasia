<?php
	include"config.php";

	if(!empty($_FILES['image'])){
		$path = pathinfo($_FILES['image']['name'],PATHINFO_EXTENSION);
                //$image = time().'.'.$path;
				$image = $_GET['namafoto'].'.'.$path;
                move_uploaded_file($_FILES["image"]["tmp_name"], 'upload/'.$image);   

	}else{
	echo "<script>Error!</script>";
	}

?>