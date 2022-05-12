<?php
	include 'conexion.php';
	$nombre = $_POST['nombre'];
	$apaterno = $_POST['apaterno'];
	$amaterno = $_POST['amaterno'];
	$ciudad = $_POST['ciudad'];
	
	$insercion= "insert into usuario(nombre,apaterno,amaterno,ciudad) values('$nombre','$apaterno','$amaterno','$ciudad')";
	$query = pg_query($con,$insercion);
	if($query){
		echo "Se guardo en la base de datos";
		echo "Un gusto ".$nombre." ".$apaterno." ".$amaterno." de ".$ciudad;
	} else {
		echo "Hubo un error";
	}
	
	pg_close($con);

?>

