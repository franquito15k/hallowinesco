function votar(id) {
    id = id; 
    $.ajax({
        type: 'POST',  
        url: 'modulos/guardar_voto.php',  
        data: { id: id } 
    }).done(function (msg) {  
        alert(msg);
        $("#votarBoton" + id).hide();
    }).fail(function (jqXHR, textStatus, errorThrown) { 
        $("#consola").html("Error: " + textStatus + " " + errorThrown);
    });
}