<?php
	$username = $_POST['username'];
	$password = $_POST['password'];

	if($username == 'yessen' && $password == '3103') $auth = true;
	else $auth = false;
	echo $auth;
?>