<?php

	$response = array(
		"success" => True,
		"method" => "POST",
		"data" => array(
			"firstName" => "Andre", 
			"lastName" => "Silva"
		)
	);

	echo json_encode($response);

?>