$(document).ready(function(){
	$('#cuestionario').validate({

		submitHandler: function(){
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
	}, 
		rules: {
			nombre: {
				required: true,
				minlength: 2,
				maxlength: 50
			},
			apaterno: {
                                required: true,
                                minlength: 2,
                                maxlength: 50
                        },
			amaterno: {
                                required: true,
                                minlength: 2,
                                maxlength: 50
                        },
			ciudad: {
                                required: true,
                                minlength: 2,
                                maxlength: 50
                        }
		},
		messagges: {
			nombre: {
				required: "Campo obligatorio, favor de ingresar su nombre",
				minlenght: "El nombre debe ser por lo menos de 2 letras",
				maxlenght: "El nombre tiene como maximo 50 caracteres"
			},
			apaterno: {
                                required: "Campo obligatorio, favor de ingresar su apellido paterno",
                                minlenght: "El apellido paterno debe ser por lo menos de 2 letras",
                                maxlenght: "El apellido paterno tiene como maximo 50 caracteres"
                        },
			amaterno: {
                                required: "Campo obligatorio, favor de ingresar su apellido materno",
                                minlenght: "El apellido materno debe ser por lo menos de 2 letras",
                                maxlenght: "El apellido materno tiene como maximo 50 caracteres"
                        },
			ciudad: {
                                required: "Campo obligatorio, favor de ingresar su ciudad de origen",
                                minlenght: "La ciudad debe ser por lo menos de 2 letras",
                                maxlenght: "La ciudad tiene como maximo 50 caracteres"
                        }
		}
	});

});
