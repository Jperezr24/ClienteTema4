$(document).ready(function() {


    //Cuando pulsas el boton cargar

    $("#cargar").on("click", function(event) {
        event.preventDefault();
        // Cargamor el contenido del json en la funcion y generamos el encabezado de la tabla
        $.get("pokemon.json", function(result) {
            let tabla = $("<br/><br/><table class='table table-dark'><thead><tr><th>Id</th><th>Nombre</th><th>Tipo</th></tr>");

            // Si el imput está vacío entrará por aquí
            if ($("#input").val() == "") {
                $.each(result, function(i, pokemon) {
                    //recorrerá todo el contenido del Json e irá añadiendo a la tabla el id, nombre y pokemon
                    tabla.append("<tr><td>" + pokemon.id + "</td><td>" + pokemon.name.english + "</td><td>" + pokemon.type + "</tr></thead></table>");

                })
            } else {
                //Si el imput tiene algún valor irá recorriendo hasta dicho valor y añadiendo uno a uno mientras el valor sea menor que la variable i
                $.each(result, function(i, pokemon) {
                    if (i < $("#input").val()) {
                        tabla.append("<tr><td>" + pokemon.id + "</td><td>" + pokemon.name.english + "</td><td>" + pokemon.type + "</tr></thead></table>");
                    }
                })
            }

            $("#respuesta").html(tabla);
        })
    })
});


//Si pulsamos el botón instrucciones se añadirá el siguiente html

$("#instrucciones").on("click", function(event) {
    event.preventDefault();

    $("#respuesta").html(
        "<h1 align='center' class='display - 4'>Instrucciones</h1>" +
        "<p>La página tendrá 2 botones y un campo de entrada .<br/><p>Al pulsar el primer botón (llamado 'Instrucciones'), se cargará asíncronamente un archivo llamado instrucciones.html.</p>" +
        "<p>Al pulsar el segundo botón (llamado 'Cargar JSON'), se recorrerá un archivo json y se mostrarán en formato tabla.</p>" +
        "<p>El archivo JSON será el adjunto pokedex.json, que previamente tendremos en el servidor.</p>" +
        "<p>Al pulsar el botón, si hay algo escrito en el , sólo se mostrarán los objetos cuyo id sea menor o igual que el especificado.</p>" +
        "<p>La tabla no incluirá todos los campos, sólo el id, el campo english de name y el campo type como un string separados por comas.</p>"


    )
})