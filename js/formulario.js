var precioFinal;
const iva = 1.13;

//import jsonPrecios, { Radiografia, Lavado_Dental, Laboratorio_de_Reproduccion, Chequeo_General, Cirugia, Castracion } from '../otros/inventario.json';
//JSON.parse(JSON.stringify(jsonPrecios));

function calcularPrecio() {
    precioFinal = 0;
    if (document.getElementById("inlineRadiografia").checked) {
        //precioFinal += Radiografia;
        precioFinal += 13700;
    }
    if (document.getElementById("inlineLavado_Dental").checked) {
        //precioFinal += Lavado_Dental;
        precioFinal += 9600;
    }
    if (document.getElementById("inlineReproduccion").checked) {
        //precioFinal += Laboratorio_de_Reproduccion;
        precioFinal += 23000;
    }
    if (document.getElementById("inlineChequeo").checked) {
        //precioFinal += Chequeo_General;
        precioFinal += 9000;
    }
    if (document.getElementById("inlineCirugia").checked) {
        //precioFinal += Cirugia;
        precioFinal += 50000;
    }
    if (document.getElementById("inlineCastracion").checked) {
        if (document.getElementById("hembra").checked) {
            //precioFinal += Castracion[0].Hembra;
            precioFinal += 18000;
        }
        else if (document.getElementById("macho").checked) {
            //precioFinal += Castracion[0].Macho;
            precioFinal += 15000;
        }
    }

    precioFinal *= iva;
    document.getElementById("totalCotizacion").value = "₡ " + Math.floor(precioFinal);
    document.querySelector("#enviarBtn").disabled = false;
}

$.validator.setDefaults({
    submitHandler: function () {
        alert("Cita Agendada!");
        document.getElementById("formCita").reset();
    }
});

$().ready(function () {
    // validate signup form on keyup and submit
    $("#formCita").validate({
        rules: {
            Nombre: "required",
            correo: {
                required: true,
                email: true
            },
            telefono: {
                required: true,
                number: true,
                minlength: 8,
                maxlength: 8
            },
            NombreMascota: "required",
            Alergias: {
                minlength: 10
            },
            Genero: {
                required: true,
            },
            servicios: {
                required: true,
                minlength: 1
            },
            Observaciones: {
                minlength: 10
            }
        },
        messages: {
            Nombre: "Ingrese su nombre completo.",
            correo: "Ingrese una dirección de correo real.",
            telefono: {
                required: "Ingrese su número telefónico.",
                number: "Solo puede digitar números.",
                minlength: "Mínimo 8 caracteres numéricos.",
                maxlength: "Máximo 8 caracteres numéricos."
            },
            NombreMascota: "Ingrese el nombre de su mascota.",
            Alergias: {
                minlength: "Mínimo 10 caracteres."
            },
            servicios: "Seleccione, al menos, un servicio.",
            Observaciones: {
                minlength: "Mínimo 10 caracteres."
            },
        },
        errorPlacement: function (error, element) {
            if (element.is(":radio")) {
                error.appendTo(element.parents(".generoMascota"));
            }
            else if (element.is(":checkbox")) {
                error.appendTo(element.parents(".serviciosOpciones"));
            }
            else {
                error.insertAfter(element);
            }
        }
    });
});

/* PLUGIN DE VALIDACION EXTRAIDO DE
https://jqueryvalidation.org
*/