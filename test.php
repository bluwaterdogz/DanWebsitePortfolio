<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>test for files</title>
</head>
<body>
	<?php 

	$dir = "poems/";
	$fileCount = 0;
	$files = glob($dir."*"); 
	if($files){
		$fileCount = count($files);
	}
	echo $fileCount;

	 ?>
</body>
</html>