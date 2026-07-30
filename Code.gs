
function doPost(e) {
    try {
        const datos = JSON.parse(e.postData.contents);

        // Determinar nombre de la hoja segun la rutina
        // Ej: "Rutina Cocina", "Actividades de Semaneros - Tanques"
        const nombreHoja = datos.rutina || "Sin rutina";

        // Obtener o crear la hoja
        const ss = SpreadsheetApp.getActiveSpreadsheet();
        let sheet = ss.getSheetByName(nombreHoja);

        if (!sheet) {
            // Primera vez que se usa esta rutina → crear hoja
            sheet = ss.insertSheet(nombreHoja);
            const headers = construirHeaders(datos);
            sheet.appendRow(headers);
        }

        // Construir la fila de datos
        const fila = construirFila(datos, sheet);
        sheet.appendRow(fila);

        return ContentService
            .createTextOutput(JSON.stringify({ resultado: "ok" }))
            .setMimeType(ContentService.MimeType.JSON);

    } catch (err) {
        return ContentService
            .createTextOutput(JSON.stringify({ resultado: "error", mensaje: err.toString() }))
            .setMimeType(ContentService.MimeType.JSON);
    }
}


function construirHeaders(datos) {
    const base = [
        "ID",
        "Fecha",
        "Hora",
        "Turno",
        "Sede",
        "Zona",
        "Tecnico",
        "Equipo",
        "Mantenimiento",
        "Rutina"
    ];

    // Si tiene checkinKeys (PREVENTIVO / CORRECTIVO)
    if (datos.checkinKeys && datos.checkinKeys.length > 0) {
        datos.checkinKeys.forEach(function (k) {
            base.push(k);
        });
    }

    // Si es tarea de Taller con sub-campos
    if (datos.task) {
        base.push("Tarea");
        base.push("Valor Tarea");
        if (datos.taskSub && typeof datos.taskSub === "object") {
            Object.keys(datos.taskSub).forEach(function (subKey) {
                base.push(subKey);
            });
        }
    }

    base.push("Descripcion");
    return base;
}


function construirFila(datos, sheet) {
    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    const fila = [];

    headers.forEach(function (header) {
        if (header === "ID") fila.push(datos.id || "");
        else if (header === "Fecha") fila.push(datos.fecha || "");
        else if (header === "Hora") fila.push(datos.hora || "");
        else if (header === "Turno") fila.push(datos.turno || "");
        else if (header === "Sede") fila.push(datos.sedes || "");
        else if (header === "Zona") fila.push(datos.zona || "");
        else if (header === "Tecnico") fila.push(datos.tecnico || "");
        else if (header === "Equipo") fila.push(datos.equipo || "");
        else if (header === "Mantenimiento") fila.push(datos.mantenimiento || "");
        else if (header === "Rutina") fila.push(datos.rutina || "");
        else if (header === "Tarea") fila.push(datos.task || "");
        else if (header === "Valor Tarea") fila.push(datos.taskValue || "");
        else if (header === "Descripcion") fila.push(datos.descripcion || "");


        else if (datos.checkinKeys && datos.checkinKeys.indexOf(header) !== -1) {
            var idx = datos.checkinKeys.indexOf(header);
            fila.push(datos.checkinValues && datos.checkinValues[idx] ? datos.checkinValues[idx] : "");
        }


        else if (datos.taskSub && datos.taskSub.hasOwnProperty(header)) {
            fila.push(datos.taskSub[header] || "");
        }

        else {
            fila.push(""); // columna desconocida → vacio
        }
    });

    return fila;
}


function doGet(e) {
    if (e && e.parameter && e.parameter.test === "1") {
        return ContentService
            .createTextOutput("Apps Script funcionando correctamente.")
            .setMimeType(ContentService.MimeType.TEXT);
    }


    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const hojas = ss.getSheets().map(function (s) { return s.getName(); });
    return ContentService
        .createTextOutput("Hojas disponibles: " + hojas.join(", "))
        .setMimeType(ContentService.MimeType.TEXT);
}

// ============================================================
//  MENU PERSONALIZADO — Navegacion entre hojas
//  Se activa al abrir el Sheet y al recargar
// ============================================================

// -------------------------------------------------------
//  onOpen() — Se ejecuta automaticamente al abrir el Sheet
//  Agrega un menu "Navegacion" con botones utiles
// -------------------------------------------------------
function onOpen() {
    const ui = SpreadsheetApp.getUi();
    const menu = ui.createMenu("Navegacion");

    menu.addItem("Ir a la hoja ...", "mostrarDialogoNavegacion");
    menu.addSeparator();
    menu.addItem("Crear indice de hojas", "crearHojaIndice");
    menu.addItem("Buscar registros", "mostrarDialogoBusqueda");
    menu.addSeparator();
    menu.addItem("Ir al final de esta hoja", "irAlFinal");
    menu.addItem("Ir al inicio de esta hoja", "irAlInicio");

    menu.addToUi();
}

// -------------------------------------------------------
//  mostrarDialogoNavegacion() — Muestra lista de hojas
//  y permite ir a cualquiera con un clic
// -------------------------------------------------------
function mostrarDialogoNavegacion() {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const hojas = ss.getSheets().map(function (s) { return s.getName(); });

    let html = '<html><body style="font-family:sans-serif;padding:16px;">';
    html += '<h3>Selecciona una hoja:</h3>';
    html += '<ul style="list-style:none;padding:0;">';

    hojas.forEach(function (nombre) {
        html += '<li style="margin:6px 0;">';
        html += '<a href="#" onclick="ir(\'' + nombre + '\')" style="display:block;padding:8px 12px;';
        html += 'background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;">';
        html += nombre + '</a></li>';
    });

    html += '</ul>';
    html += '<script>';
    html += 'function ir(n){google.script.run.withSuccessHandler(function(){google.script.host.close();})';
    html += '.activarHoja(n);}</script>';
    html += '</body></html>';

    const ui = HtmlService.createHtmlOutput(html)
        .setWidth(350)
        .setHeight(400)
        .setTitle("Navegar entre hojas");

    SpreadsheetApp.getUi().showModalDialog(ui, "Navegacion");
}

// -------------------------------------------------------
//  activarHoja(nombre) — Cambia a la hoja indicada
// -------------------------------------------------------
function activarHoja(nombre) {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName(nombre);
    if (sheet) sheet.activate();
}

// -------------------------------------------------------
//  irAlFinal() — Lleva a la ultima fila con datos
// -------------------------------------------------------
function irAlFinal() {
    const sheet = SpreadsheetApp.getActiveSheet();
    const ultimaFila = sheet.getLastRow();
    if (ultimaFila > 0) {
        sheet.getRange(ultimaFila, 1).activate();
    }
}


function irAlInicio() {
    const sheet = SpreadsheetApp.getActiveSheet();
    sheet.getRange(1, 1).activate();
}


function crearHojaIndice() {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let indice = ss.getSheetByName("Indice");
    if (!indice) {
        indice = ss.insertSheet("Indice");
    } else {
        indice.clear();
    }

    const hojas = ss.getSheets();
    indice.appendRow(["Hoja", "Ir", "Ultima modificacion"]);

    hojas.forEach(function (hoja) {
        if (hoja.getName() === "Indice") return;
        indice.appendRow([
            hoja.getName(),
            '=HIPERVINCULO("#gid=' + hoja.getSheetId() + '","Abrir")',
            hoja.getLastDataUpdate ? new Date() : ""
        ]);
    });

    indice.getRange(1, 1, 1, 3).setFontWeight("bold");
    indice.activate();
}

function mostrarDialogoBusqueda() {
    const html = '<html><body style="font-family:sans-serif;padding:16px;">' +
        '<h3>Buscar en esta hoja</h3>' +
        '<input type="text" id="q" placeholder="Texto a buscar..." style="width:100%;padding:8px;font-size:16px;">' +
        '<br><br>' +
        '<button onclick="buscar()" style="padding:10px 20px;background:#63bb60;color:#fff;border:none;border-radius:6px;cursor:pointer;">Buscar</button>' +
        '<div id="res" style="margin-top:12px;"></div>' +
        '<script>' +
        'function buscar(){var q=document.getElementById("q").value;' +
        'google.script.run.withSuccessHandler(function(r){document.getElementById("res").innerHTML=r;})' +
        '.buscarEnHoja(q);}' +
        '</script></body></html>';

    SpreadsheetApp.getUi().showModalDialog(
        HtmlService.createHtmlOutput(html).setWidth(350).setHeight(250),
        "Buscar"
    );
}

// -------------------------------------------------------
//  buscarEnHoja(q) — Ejecuta la busqueda en la hoja activa
// -------------------------------------------------------
function buscarEnHoja(q) {
    const sheet = SpreadsheetApp.getActiveSheet();
    const datos = sheet.getDataRange().getValues();
    let encontrados = [];

    for (var i = 1; i < datos.length; i++) {
        for (var j = 0; j < datos[i].length; j++) {
            if (String(datos[i][j]).toLowerCase().indexOf(q.toLowerCase()) !== -1) {
                encontrados.push("Fila " + (i + 1) + ": " + datos[i].slice(0, 4).join(" | "));
                break;
            }
        }
    }

    if (encontrados.length === 0) return "Sin resultados.";
    return encontrados.join("<br>");
}
