$(document).ready(function(){
	$("#enviar").click(function(){
		$.post("guardar.php",
			{
				nombre: $("#nombre").val(),
				apaterno: $("#apaterno").val(),
				amaterno: $("#amaterno").val(),
				ciudad: $("#ciudad").val()
			},
			function(data, status){
				alert("Datos: "+ data+"Status:"+status);
				$("#cuestionario").trigger("reset");
			});
	});
});
