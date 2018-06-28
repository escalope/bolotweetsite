/**
 * Created by mcardenas on 18/07/16.
 */

$(function() {
    $("#asignaturas_ii").click(function(event) { //asignamos el evento  de abrirse "slideToggle()" a el enlace mostrarfiltro
        event.preventDefault();
        $("#block_asignaturas_ii").slideToggle(); //evento que muestra el contenedor masfiltros
    });

    $("#block_asignaturas_ii a").click(function(event) { //asignamos el evento de cerrar al enlace contenido en mas filtros
        event.preventDefault();
        $("#block_asignaturas_ii").slideUp(); //evento que oculta el contenedor masfiltros
    });

    $("#asignaturas_iii").click(function(event) { //asignamos el evento  de abrirse "slideToggle()" a el enlace mostrarfiltro
        event.preventDefault();
        $("#block_asignaturas_iii").slideToggle(); //evento que muestra el contenedor masfiltros
    });

    $("#block_asignaturas_iii a").click(function(event) { //asignamos el evento de cerrar al enlace contenido en mas filtros
        event.preventDefault();
        $("#block_asignaturas_iii").slideUp(); //evento que oculta el contenedor masfiltros
    });

    $("#asignaturas_iv").click(function(event) { //asignamos el evento  de abrirse "slideToggle()" a el enlace mostrarfiltro
        event.preventDefault();
        $("#block_asignaturas_iv").slideToggle(); //evento que muestra el contenedor masfiltros
    });

    $("#block_asignaturas_iv a").click(function(event) { //asignamos el evento de cerrar al enlace contenido en mas filtros
        event.preventDefault();
        $("#block_asignaturas_iv").slideUp(); //evento que oculta el contenedor masfiltros
    });

});