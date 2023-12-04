window.onload = cargarPantalla;
var cotizacion = 0.0;
var nombre = "";
var email = "";

function Cotizar() {
    cotizacion = 0.0;
    var costoMTerreno = 0.0;
    var costoBanios = 0.0;
    var costoExtras = 0.0;
    var patronCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    nombre = document.getElementsByName("nombre")[0].value;
    email = document.getElementsByName("email")[0].value;
    var rural = document.getElementsByName("rbdUbicacion")[0];
    var urbana = document.getElementsByName("rbdUbicacion")[1];
    var metroTerreno = document.getElementsByName("txtTerreno")[0].value;
    var metroConstruccion = document.getElementsByName("txtConstruccion")[0].value;
    var acabado = document.getElementsByName("chkAcabado")[0];
    var fechaSoliString = document.getElementsByName("fechaSoli")[0].value;
    var cantidadBanios = document.getElementsByName("numBanios")[0].value;
    var balcon = document.getElementsByName("chkBalcon")[0];
    var piscina = document.getElementsByName("chkPiscina")[0];
    var parilla = document.getElementsByName("chkParilla")[0];
    var terraza = document.getElementsByName("chkTerraza")[0];
    var cochera = document.getElementsByName("chkCochera")[0];
    var cantCarros = document.getElementsByName("numCarros")[0].value;
    var prima = document.getElementsByName("txtPrima")[0].value;
    var aprobarFinanciacion = document.getElementsByName("txtFinancion")[0];

    var fechaSoliArray = fechaSoliString.split("-");
    var fechaSoli = new Date(
        parseInt(fechaSoliArray[0]),
        parseInt(fechaSoliArray[1]) - 1,
        parseInt(fechaSoliArray[2])
    );

    var fechaActual = new Date();

    if (nombre == "") {
        alert("Es necesario que escriba su nombre");
        return;
    }

    if (!(patronCorreo.test(email))) {
        alert("Es necesario que escriba su email de forma correcta");
        return;
    }

    if (fechaSoli.getDay() != fechaActual.getDay() ||
        fechaSoli.getMonth() != fechaActual.getMonth() ||
        fechaSoli.getFullYear() != fechaActual.getFullYear()) {

        alert("Es necesario que elija la fecha actual");
        return;
    }

    if (fechaSoli.getDay() != fechaActual.getDay() ||
        fechaSoli.getMonth() != fechaActual.getMonth() ||
        fechaSoli.getFullYear() != fechaActual.getFullYear()) {

        alert("Es necesario que elija la fecha actual");
        return;
    }

    if (isNaN(parseInt(metroTerreno))) {
        alert("Los metros de terreno debe ser numéricos");
        return;
    }

    if (isNaN(parseInt(metroConstruccion))) {
        alert("Los metros de construcción debe ser numéricos");
        return;
    }

    if (!rural.checked && !urbana.checked) {
        alert("Debe seleccionar una ubicación");
        return;
    }

    if (cantidadBanios < 1) {
        alert("Debe elegir la cantidad de baños que desea");
        return;
    }

    if (cochera.checked) {
        if (cantCarros < 1) {
            alert("Debe seleccionar cuantos carros desea en la cochera");
            return;
        }
    } else if (cantCarros > 0) {
        alert("Debe seleccionar una cochera, si desea estacionar coches");
        return;
    }

    if (prima <= 0) {
        alert("Debe escribir el monto de prima aproximado");
        return;
    }

    //Punto 1
    if (rural.checked) {
        costoMTerreno += (50000 * metroTerreno);
    }

    //Punto 2
    if (urbana.checked) {
        costoMTerreno += (120000 * metroTerreno);
    }

    cotizacion += costoMTerreno;

    //Punto 3
    var totalMetros = metroConstruccion * 500;
    var totalConstruccion = Cambio(totalMetros);

    if (acabado.checked) {
        totalConstruccion = totalConstruccion + ((20 / 100) * totalConstruccion);
    }
    cotizacion += totalConstruccion;

    //Punt 4
    if (cantidadBanios > 0) {
        costoBanios = 1000000 * cantidadBanios;
    }
    cotizacion += costoBanios;

    //Punto 5
    if (cochera.checked) {
        switch (parseInt(cantCarros)) {
            case 1:
                cotizacion += 1300000;
                break;
            case 2:
                cotizacion += 2000000;
                break;
            case 3:
                cotizacion += 2500000;
                break;
        }
    }

    //Punto 6
    if (balcon.checked) {
        costoExtras += 1200000;

    }
    if (piscina.checked) {
        costoExtras += 10000000;

    }
    if (parilla.checked) {
        costoExtras += 1000000;

    }
    if (terraza.checked) {
        costoExtras += 2500000;
    }
    cotizacion += costoExtras;

    document.getElementById("lblCotizacion").innerHTML = "Valor de la casa cotizada: " + cotizacion;

    if (prima >= (cotizacion * 0.25)) {
        aprobarFinanciacion.value = "Se aprobó el Financiamiento";
    } else {
        aprobarFinanciacion.value = "No se aprobó el Financiamiento";
    }

    regMemoriaLocal();
}

function Cambio(monto) {
    return monto * 545;
}

function regMemoriaLocal() {
    nombre = document.getElementsByName("nombre")[0].value;
    email = document.getElementsByName("email")[0].value;
    var fechaSoli = document.getElementsByName("fechaSoli")[0].value;
    const metrosCons = document.getElementsByName("txtConstruccion")[0].value;
    const terrenoCons = document.getElementsByName("txtTerreno")[0].value;
    const acabado = document.getElementsByName("chkAcabado")[0].checked;
    const rbdRural = document.getElementsByName("rbdUbicacion")[0].checked;
    const rbdUrbano = document.getElementsByName("rbdUbicacion")[1].checked;
    const numBannios = document.getElementsByName("numBanios")[0].value;
    const chkCochera = document.getElementsByName("chkCochera")[0].checked;
    const numCarros = document.getElementsByName("numCarros")[0].value;
    var balcon = document.getElementsByName("chkBalcon")[0].checked;
    var piscina = document.getElementsByName("chkPiscina")[0].checked;
    var parilla = document.getElementsByName("chkParilla")[0].checked;
    var terraza = document.getElementsByName("chkTerraza")[0].checked;
    var prima = document.getElementsByName("txtPrima")[0].value;
    var estadoFinan = document.getElementsByName("txtFinancion")[0].value;
    var cotizacion = document.getElementById("lblCotizacion").textContent;

    const usuario = {
        nombre: nombre,
        email: email,
        fechaSoli: fechaSoli,
        metrosCons: metrosCons,
        terrenoCons: terrenoCons,
        acabado: acabado,
        rbdRural: rbdRural,
        rbdUrbano: rbdUrbano,
        numBannios: numBannios,
        chkCochera: chkCochera,
        numCarros: numCarros,
        balcon: balcon,
        piscina: piscina,
        parilla: parilla,
        terraza: terraza,
        prima: prima,
        estadoFinan: estadoFinan,
        cotizacion: cotizacion,
    };

    const usuarioJSON = JSON.stringify(usuario);

    localStorage.setItem("usuario", usuarioJSON);
}

function cargarPantalla() {

    const usuarioJSON = localStorage.getItem("usuario");

    if (usuarioJSON) {

        const usuario = JSON.parse(usuarioJSON);

        document.getElementsByName("nombre")[0].value = usuario.nombre;
        document.getElementsByName("email")[0].value = usuario.email;
        document.getElementsByName("fechaSoli")[0].value = usuario.fechaSoli;
        document.getElementsByName("txtConstruccion")[0].value = usuario.metrosCons;
        document.getElementsByName("txtTerreno")[0].value = usuario.terrenoCons;
        document.getElementsByName("chkAcabado")[0].checked = usuario.acabado;
        document.getElementsByName("rbdUbicacion")[0].checked = usuario.rbdRural;
        document.getElementsByName("rbdUbicacion")[1].checked = usuario.rbdUrbano;
        document.getElementsByName("numBanios")[0].value = usuario.numBannios;
        document.getElementsByName("chkCochera")[0].checked = usuario.chkCochera;
        document.getElementsByName("numCarros")[0].value = usuario.numCarros;
        document.getElementsByName("chkBalcon")[0].checked = usuario.balcon;
        document.getElementsByName("chkPiscina")[0].checked = usuario.piscina;
        document.getElementsByName("chkParilla")[0].checked = usuario.parilla;
        document.getElementsByName("chkTerraza")[0].checked = usuario.terraza;
        document.getElementsByName("txtPrima")[0].value = usuario.prima;
        document.getElementsByName("txtFinancion")[0].value = usuario.estadoFinan;
        document.getElementById("lblCotizacion").textContent = usuario.cotizacion;
    }
}   

function proyeccion() {
    var Nombre = document.getElementsByName("nombre")[0].value;
    var Email = document.getElementsByName("email")[0].value;
    var FechaSolicitud = document.getElementsByName("fechaSoli")[0].value;
    var MetrosConstruccion = document.getElementsByName("txtConstruccion")[0].value;
    var MetrosTerreno = document.getElementsByName("txtTerreno")[0].value;
    var NumeroCoches = document.getElementsByName("numCarros")[0].value;
    var Prima = document.getElementsByName("txtPrima")[0].value;
    var Estado = document.getElementsByName("txtFinancion")[0].value;


    var Acabado = document.getElementsByName("chkAcabado")[0];
    var Rural = document.getElementsByName("rbdUbicacion")[0];
    var Urbano = document.getElementsByName("rbdUbicacion")[1];
    var Cochera = document.getElementsByName("chkCochera")[0];

    var Balcon = document.getElementsByName("chkBalcon")[0];
    var Piscina = document.getElementsByName("chkPiscina")[0];
    var Parrilla = document.getElementsByName("chkParilla")[0];
    var Terraza = document.getElementsByName("chkTerraza")[0];

    var CantidadBannos = document.getElementsByName("numBanios")[0].value;
    var infoCotizacion = document.getElementById("lblCotizacion").textContent;
    var montoCotizacion = infoCotizacion.split(" ");


    var estructuraTabla = "<tr><th>Dato</th><th>Valor</th></tr>";

    estructuraTabla += "<tr>" + "<td>" + "Nombre" + "</td>";
    estructuraTabla += "<td>" + Nombre + "</td>" + "</tr>";

    estructuraTabla += "<tr>" + "<td>" + "Correo" + "</td>";
    estructuraTabla += "<td>" + Email + "</td>" + "</tr>";

    estructuraTabla += "<tr>" + "<td>" + "Fecha Solicitud" + "</td>";
    estructuraTabla += "<td>" + FechaSolicitud + "</td>" + "</tr>";

    estructuraTabla += "<tr>" + "<td>" + "Metros de Construccion" + "</td>";
    estructuraTabla += "<td>" + MetrosConstruccion + "</td>" + "</tr>";

    estructuraTabla += "<tr>" + "<td>" + "Metros de Terreno" + "</td>";
    estructuraTabla += "<td>" + MetrosTerreno + "</td>" + "</tr>";

    estructuraTabla += "<tr>" + "<td>" + "Acabado de Lujo" + "</td>";


    if (Acabado.checked) {
        estructuraTabla += "<td>" + "SI" + "</td>" + "</tr>";
    } else {
        estructuraTabla += "<td>" + "No" + "</td>" + "</tr>";
    }

    estructuraTabla += "<tr>" + "<td>" + "Ubicacion" + "</td>";

    if (Urbano.checked) {
        estructuraTabla += "<td>" + "Urbano" + "</td>" + "</tr>";
    } else if (Rural.checked) {
        estructuraTabla += "<td>" + "Rural" + "</td>" + "</tr>";
    }

    estructuraTabla += "<tr>" + "<td>" + "Cantidad de Baños" + "</td>";
    estructuraTabla += "<td>" + CantidadBannos + "</td>" + "</tr>";

    estructuraTabla += "<tr>" + "<td>" + "Chochera" + "</td>";

    if (Cochera.checked) {
        estructuraTabla += "<td>" + "Si" + "</td>" + "</tr>";
    } else {
        estructuraTabla += "<td>" + "No" + "</td>" + "</tr>";
    }

    if (NumeroCoches > 0 && Cochera.checked) {
        estructuraTabla += "<tr>" + "<td>" + "Cantidad de Carros" + "</td>";
    }
    estructuraTabla += "<td>" + NumeroCoches + "</td>" + "</tr>";


    var Extras = "";
    if (Balcon.checked) {
        Extras += " Balcon ";

    }
    if (Piscina.checked) {
        Extras += " Piscina ";

    }
    if (Parrilla.checked) {
        Extras += " Parrilla ";

    }
    if (Terraza.checked) {
        Extras += " Terraza ";
    }
    if (Extras === "") {
        Extras += "No posee";
    }

    estructuraTabla += "<tr>" + "<td>" + "Extras" + "</td>";
    estructuraTabla += "<td>" + Extras + "</td>" + "</tr>";

    estructuraTabla += "<tr>" + "<td>" + "Monto Prima" + "</td>";
    estructuraTabla += "<td>" + Prima + "</td>" + "</tr>";

    estructuraTabla += "<tr>" + "<td>" + "Monto Cotizacion" + "</td>";
    estructuraTabla += "<td>" + montoCotizacion[5] + "</td>" + "</tr>";

    estructuraTabla += "<tr>" + "<td>" + "Estado de la Financiacion" + "</td>";
    estructuraTabla += "<td>" + Estado + "</td>" + "</tr>";

    document.getElementById("tabla").innerHTML = estructuraTabla;
}
