<?php
	//conexion al manjador y bd
	$con = pg_connect("dbname=cuestionarioajax user=marioajax password=marioph port=5432") or die (pg_last_error());
?>
