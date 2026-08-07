function doGet(e) {
    if (e && e.parameter) {
        if (e.parameter.accion === "rutinas") {
            return obtenerRutinasDinamicas();
        }
        if (e.parameter.accion === "averias") {
            return obtenerAverias();
        }
        if (e.parameter.accion === "equipos") {
            return obtenerEquipos();
        }
        if (e.parameter.accion === "tecnicos") {
            return obtenerTecnicos();
        }
        if (e.parameter.accion === "personal") {
            return obtenerPersonal();
        }
    }
    return ContentService.createTextOutput(
        JSON.stringify({})
    ).setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
    var data = JSON.parse(e.postData.contents);

    if (data.tipo === "averia") {
        return procesarAveria(data);
    }

    if (data.tipo === "resolucion") {
        return procesarResolucionAveria(data);
    }

    if (data.tipo === "rutina") {
        return guardarRutinaDinamica(data);
    }

    if (data.tipo === "nuevo_equipo") {
        return agregarEquipo(data.equipo, data.sede, data.zona);
    }

    if (data.tipo === "asignar_averia") {
        return asignarAveria(data.numero, data.tecnicoNombre, data.tecnicoWhatsapp, data.tecnicoCorreo);
    }

    if (data.tipo === "obtener_asignacion") {
        var resultado = obtenerAveriaAsignada(data.numero);
        return jsonAveria(resultado || { status: "no_asignado" });
    }

    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName(data.rutina);
    if (!sheet) {
        sheet = ss.insertSheet(sanitizeSheetName(data.rutina));
        var headers = ["Fecha", "Hora", "Turno", "Sede", "Zona", "Tecnico", "Equipo"];

        if (!data.task) {
            headers.push("Mantenimiento");
        }

        if (data.checkinKeys) {
            headers = headers.concat(data.checkinKeys);
        }

        if (data.task) {
            headers.push("Tarea");
            headers.push("Valor Tarea");
            if (data.taskSub) {
                for (var k in data.taskSub) {
                    if (data.taskSub.hasOwnProperty(k)) headers.push(k);
                }
            }
        }

        headers.push("Descripcion");
        sheet.appendRow(headers);
    }

    var allData = sheet.getDataRange().getValues();
    var headersRow = allData[0];

    for (var i = 1; i < allData.length; i++) {
        if (allData[i][0] == data.fecha && allData[i][1] == data.hora && allData[i][3] == data.sedes && allData[i][6] == data.equipo) {
            return ContentService.createTextOutput(
                JSON.stringify({ status: "duplicate" })
            ).setMimeType(ContentService.MimeType.JSON);
        }
    }

    var row = [];
    for (var c = 0; c < headersRow.length; c++) {
        var h = headersRow[c];
        if (h === "Fecha") row.push(data.fecha || "");
        else if (h === "Hora") row.push(data.hora || "");
        else if (h === "Turno") row.push(data.turno || "");
        else if (h === "Sede") row.push(data.sedes || "");
        else if (h === "Zona") row.push(data.zona || "");
        else if (h === "Tecnico") row.push(data.tecnico || "");
        else if (h === "Equipo") row.push(data.equipo || "");
        else if (h === "Mantenimiento") row.push(data.mantenimiento || "");
        else if (h === "Tarea") row.push(data.task || "");
        else if (h === "Valor Tarea") row.push(data.taskValue || "");
        else if (h === "Descripcion") row.push(data.descripcion || "");
        else if (data.checkinKeys && data.checkinKeys.indexOf(h) !== -1) {
            var idx = data.checkinKeys.indexOf(h);
            row.push(data.checkinValues && data.checkinValues[idx] ? data.checkinValues[idx] : "");
        } else if (data.taskSub && data.taskSub.hasOwnProperty(h)) {
            row.push(data.taskSub[h] || "");
        } else {
            row.push("");
        }
    }

    var nuevosHeaders = [];
    var conocidos = headersRow.slice();
    for (var hk = 0; hk < (data.checkinKeys || []).length; hk++) {
        if (conocidos.indexOf(data.checkinKeys[hk]) === -1) {
            conocidos = conocidos.concat([data.checkinKeys[hk]]);
            nuevosHeaders.push(data.checkinKeys[hk]);
            row.push(data.checkinValues && data.checkinValues[hk] ? data.checkinValues[hk] : "");
        }
    }

    sheet.appendRow(row);

    if (nuevosHeaders.length > 0) {
        var colInicio = headersRow.length + 1;
        for (var nh = 0; nh < nuevosHeaders.length; nh++) {
            sheet.getRange(1, colInicio + nh).setValue(nuevosHeaders[nh]);
        }
    }

    if (data.repuestos && data.repuestos.length > 0) {
        guardarRepuestos(data);
    }

    return ContentService.createTextOutput(
        JSON.stringify({ status: "ok" })
    ).setMimeType(ContentService.MimeType.JSON);
}

function sanitizeSheetName(name) {
    return String(name).replace(/[\[\]:*?\/\\]/g, "-").slice(0, 100);
}

function guardarRepuestos(data) {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName("repuestos");
    if (!sheet) {
        sheet = ss.insertSheet("repuestos");
        sheet.appendRow(["Fecha", "Hora", "Sede", "Zona", "Equipo", "Tecnico", "Repuesto", "Cantidad"]);
    }
    for (var i = 0; i < data.repuestos.length; i++) {
        sheet.appendRow([
            data.fecha || "",
            data.hora || "",
            data.sedes || "",
            data.zona || "",
            data.equipo || "",
            data.tecnico || "",
            data.repuestos[i].nombre || "",
            data.repuestos[i].cantidad || ""
        ]);
    }
}

function guardarRutinaDinamica(data) {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName("rutinas_dinamicas");
    var creadoPor = data.creadoPor || "";
    if (!sheet) {
        sheet = ss.insertSheet("rutinas_dinamicas");
        sheet.appendRow(["Equipo", "Paso", "CreadoPor"]);
    } else if (sheet.getLastRow() === 0) {
        sheet.appendRow(["Equipo", "Paso", "CreadoPor"]);
    } else {
        var hdr = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
        if (String(hdr[0] || "") !== "Equipo" || String(hdr[2] || "") !== "CreadoPor") {
            sheet.getRange(1, 1, 1, 3).setValues([["Equipo", "Paso", "CreadoPor"]]);
        }
    }
    var equipo = String(data.equipo || "");
    var all = sheet.getDataRange().getValues();
    var rowsToDelete = [];
    for (var i = all.length - 1; i >= 1; i--) {
        if (String(all[i][0]) === equipo) rowsToDelete.push(i + 1);
    }
    for (var r = 0; r < rowsToDelete.length; r++) {
        sheet.deleteRow(rowsToDelete[r]);
    }
    var pasos = data.pasos || [];
    for (var p = 0; p < pasos.length; p++) {
        sheet.appendRow([equipo, String(pasos[p]), creadoPor]);
    }
    return ContentService.createTextOutput(
        JSON.stringify({ status: "ok" })
    ).setMimeType(ContentService.MimeType.JSON);
}

function obtenerRutinasDinamicas() {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName("rutinas_dinamicas");
    var out = {};
    if (sheet) {
        var data = sheet.getDataRange().getValues();
        for (var i = 1; i < data.length; i++) {
            var eq = String(data[i][0] || "");
            if (!eq) continue;
            if (!out[eq]) {
                out[eq] = { pasos: [], creadoPor: String(data[i][2] || "") };
            }
            var paso = String(data[i][1] || "");
            if (paso) out[eq].pasos.push(paso);
        }
    }
    return ContentService.createTextOutput(
        JSON.stringify(out)
    ).setMimeType(ContentService.MimeType.JSON);
}

function probarCorreo() {
    MailApp.sendEmail({
        to: "blancocarolina155@gmail.com",
        subject: "Prueba correo averia",
        body: "Si recibes este correo, el envio de averias funciona."
    });
    return "Correo de prueba enviado sin errores.";
}

var CABECERA_AVERIAS = ["Numero", "Fecha", "Hora", "Sede", "Zona", "Empleado", "Equipo", "Descripcion", "Fecha Resolucion", "Hora Resolucion", "Tecnico", "Realizado", "Descripcion Resolucion", "Tecnico Asignado", "Correo Reportero"];

function jsonAveria(obj) {
    return ContentService.createTextOutput(
        JSON.stringify(obj)
    ).setMimeType(ContentService.MimeType.JSON);
}

function formatearFecha(valor) {
    if (!valor) return "";
    if (typeof valor === "string") return valor;
    if (valor instanceof Date) {
        var dia = valor.getDate();
        var mes = valor.getMonth() + 1;
        var anio = valor.getFullYear();
        return (dia < 10 ? "0" + dia : dia) + "/" + (mes < 10 ? "0" + mes : mes) + "/" + anio;
    }
    return String(valor);
}

function asegurarHojaAverias(sheet, ss) {
    if (!sheet) {
        sheet = ss.insertSheet("averias");
        sheet.appendRow(CABECERA_AVERIAS);
        return sheet;
    }
    var data = sheet.getDataRange().getValues();
    var headers = data[0] || [];
    if (headers.indexOf("Numero") !== -1 && headers.indexOf("Averia") === -1) {
        return sheet;
    }
    var rebuilt = [];
    if (headers.indexOf("Numero") !== -1 && headers.indexOf("Averia") !== -1) {
        for (var i = 1; i < data.length; i++) {
            var r = data[i];
            rebuilt.push([
                r[0] || "", r[1] || "", r[2] || "", r[3] || "", r[4] || "",
                r[8] || "", r[5] || "", r[7] || "",
                "", "", "", "", ""
            ]);
        }
    } else {
        for (var j = 1; j < data.length; j++) {
            var row = data[j];
            var out = [];
            for (var k = 0; k < CABECERA_AVERIAS.length; k++) {
                out.push(row[k] || "");
            }
            rebuilt.push(out);
        }
    }
    sheet.clear();
    sheet.appendRow(CABECERA_AVERIAS);
    for (var m = 0; m < rebuilt.length; m++) {
        sheet.appendRow(rebuilt[m]);
    }
    return sheet;
}

function averiaCerrada(valor) {
    return valor === "Si" || valor === "Falsa averia";
}

function obtenerAverias() {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName("averias");
    var out = [];
    if (sheet) {
        var data = sheet.getDataRange().getValues();
        for (var i = 1; i < data.length; i++) {
            out.push({
                numero: String(data[i][0] || ""),
                fecha: String(data[i][1] || ""),
                hora: String(data[i][2] || ""),
                sede: String(data[i][3] || ""),
                zona: String(data[i][4] || ""),
                empleado: String(data[i][5] || ""),
                equipo: String(data[i][6] || ""),
                descripcion: String(data[i][7] || ""),
                resuelto: averiaCerrada(String(data[i][11] || "")),
                asignado: String(data[i][13] || "").trim()
            });
        }
    }
    return jsonAveria(out);
}

function procesarAveria(data) {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName("averias");
    sheet = asegurarHojaAverias(sheet, ss);

    var existentes = sheet.getDataRange().getValues();
    for (var e = 1; e < existentes.length; e++) {
        if (String(existentes[e][1]) === String(data.fecha || "") &&
            String(existentes[e][2]) === String(data.hora || "") &&
            String(existentes[e][3]) === String(data.sedes || "") &&
            String(existentes[e][6]) === String(data.equipo || "") &&
            String(existentes[e][5]) === String(data.empleado || "")) {
            return jsonAveria({ status: "duplicate" });
        }
    }

    var correoReportero = buscarCorreoPorNombre(data.empleado);

    var numero = generarNumeroAveria(sheet);
    sheet.appendRow([
        numero,
        data.fecha || "",
        data.hora || "",
        data.sedes || "",
        data.zona || "",
        data.empleado || "",
        data.equipo || "",
        data.descripcion || "",
        "", "", "", "", "", "", ""
    ]);

    var attachments = [];
    if (data.imagenes && data.imagenes.length > 0) {
        for (var i = 0; i < data.imagenes.length; i++) {
            try {
                var img = data.imagenes[i];
                if (!img || !img.data) continue;
                var bytes = Utilities.base64Decode(img.data);
                var blob = Utilities.newBlob(bytes, img.mimeType || "image/jpeg", img.nombre || ("imagen_" + (i + 1) + ".jpg"));
                attachments.push(blob);
            } catch (imgErr) {}
        }
    }

    var webUrl = "https://seguridadindrustrial.github.io/Mantenimiento_Preventivo/";
    var enlaceAsignacion = webUrl + "?av=" + numero;

    var html = "<h3 style='color:#d32f2f;'>Averia " + numero + "</h3>" +
        "<b>Fecha:</b> " + (data.fecha || "") + "<br>" +
        "<b>Hora:</b> " + (data.hora || "") + "<br>" +
        "<b>Sede:</b> " + (data.sedes || "") + "<br>" +
        "<b>Zona:</b> " + (data.zona || "") + "<br>" +
        "<b>Equipo:</b> " + (data.equipo || "") + "<br>" +
        "<b>Descripcion:</b> " + (data.descripcion || "") + "<br>" +
        "<b>Empleado:</b> " + (data.empleado || "") +
        (attachments.length > 0 ? "<br><br><i>" + attachments.length + " foto(s) adjunta(s).</i>" : "") +
        "<br><br>" +
        "<table cellpadding='0' cellspacing='0' style='margin:auto;'>" +
        "<tr><td style='background:#1976d2;border-radius:8px;padding:14px 30px;'>" +
        "<a href='" + enlaceAsignacion + "' target='_blank' style='color:#ffffff;text-decoration:none;font-weight:bold;font-size:16px;font-family:Arial,sans-serif;'>Asignar Tecnico</a>" +
        "</td></tr></table>" +
        "<br><small style='color:#666;'>Haz clic en el boton para asignar un tecnico.</small>";

    var mailOptions = {
        to: "blancocarolina155@gmail.com",
        subject: "Averia " + numero + " - " + (data.sedes || "") + " - " + (data.equipo || ""),
        body: "Averia " + numero + "\n\nPara asignar un tecnico copia y pega este enlace en tu navegador:\n" + enlaceAsignacion,
        htmlBody: html
    };
    if (attachments.length > 0) {
        mailOptions.attachments = attachments;
    }

    var mailEnviado = false;
    var mailError = "";
    try {
        MailApp.sendEmail(mailOptions);
        mailEnviado = true;
    } catch (mailErr) {
        mailError = String(mailErr);
        try {
            delete mailOptions.attachments;
            MailApp.sendEmail(mailOptions);
            mailEnviado = true;
        } catch (mailErr2) {
            mailError = String(mailErr2);
        }
    }

    if (!mailEnviado) {
        registrarError("averia", numero, mailError);
    }

    var correoJefe = buscarJefePorNombre(data.empleado);
    if (correoJefe) {
        var htmlJefe = "<h3 style='color:#d32f2f;'>Averia " + numero + " reportada por " + (data.empleado || "") + "</h3>" +
            "<b>Reporto:</b> " + (data.empleado || "") + "<br>" +
            "<b>Fecha:</b> " + (data.fecha || "") + "<br>" +
            "<b>Hora:</b> " + (data.hora || "") + "<br>" +
            "<b>Sede:</b> " + (data.sedes || "") + "<br>" +
            "<b>Zona:</b> " + (data.zona || "") + "<br>" +
            "<b>Equipo:</b> " + (data.equipo || "") + "<br>" +
            "<b>Descripcion:</b> " + (data.descripcion || "");
        try {
            MailApp.sendEmail({
                to: correoJefe,
                subject: "Averia " + numero + " - " + (data.empleado || "") + " - " + (data.equipo || ""),
                body: "Averia " + numero + "\nReporto: " + (data.empleado || "") + "\nEquipo: " + (data.equipo || ""),
                htmlBody: htmlJefe
            });
        } catch (eJefe) {}
    }

    return jsonAveria({ status: "ok", numero: numero, mailEnviado: mailEnviado });
}

function procesarResolucionAveria(data) {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName("averias");
    if (!sheet) {
        return jsonAveria({ status: "not_found" });
    }
    sheet = asegurarHojaAverias(sheet, ss);

    var numero = String(data.numero || "");
    var all = sheet.getDataRange().getValues();
    var rowIndex = -1;
    for (var i = 1; i < all.length; i++) {
        if (String(all[i][0]) === numero) {
            rowIndex = i + 1;
            break;
        }
    }
    if (rowIndex === -1) {
        return jsonAveria({ status: "not_found" });
    }
    var estadoActual = String(all[rowIndex - 1][11] || "");
    if (averiaCerrada(estadoActual)) {
        return jsonAveria({ status: "ya_resuelta" });
    }

    var realizado = String(data.realizado || "");
    sheet.getRange(rowIndex, 9, 1, 5).setValues([[
        data.fecha || "",
        data.hora || "",
        data.tecnico || "",
        realizado,
        data.descripcion || ""
    ]]);

    var color = realizado === "Si" ? "#C6EFCE" : realizado === "Falsa averia" ? "#DDEBF7" : realizado === "No" ? "#FFC7CE" : "#FFEB9C";
    sheet.getRange(rowIndex, 1, 1, 15).setBackground(color);

    var correoReportero = buscarCorreoPorNombre(String(all[rowIndex - 1][5] || "").trim());
    var empleado = String(all[rowIndex - 1][5] || "");
    var equipo = String(all[rowIndex - 1][6] || "");
    var sede = String(all[rowIndex - 1][3] || "");

    if (correoReportero) {
        var asuntoReportero = "";
        var htmlReportero = "";
        var colorEstado = "";
        var emoji = "";

        if (realizado === "Si") {
            colorEstado = "#2e7d32";
            emoji = "✅";
            asuntoReportero = emoji + " Averia " + numero + " RESUELTA";
            htmlReportero = "<h3 style='color:" + colorEstado + ";'>" + emoji + " Averia " + numero + " Resuelta</h3>" +
                "<b>Tu averia ha sido resuelta exitosamente.</b><br><br>" +
                "<b>Equipo:</b> " + equipo + "<br>" +
                "<b>Sede:</b> " + sede + "<br>" +
                "<b>Tecnico:</b> " + (data.tecnico || "") + "<br>" +
                "<b>Fecha:</b> " + (data.fecha || "") + "<br>" +
                "<b>Hora:</b> " + (data.hora || "") + "<br>" +
                (data.descripcion ? "<b>Descripcion:</b> " + data.descripcion + "<br>" : "") +
                "<br><p style='color:#666;'>Gracias por reportar. Tu averia ha sido atendida.</p>";
        } else if (realizado === "No") {
            colorEstado = "#d32f2f";
            emoji = "❌";
            asuntoReportero = emoji + " Averia " + numero + " - No realizada";
            htmlReportero = "<h3 style='color:" + colorEstado + ";'>" + emoji + " Averia " + numero + "</h3>" +
                "<b>Tu averia no pudo ser resuelta en este momento.</b><br><br>" +
                "<b>Equipo:</b> " + equipo + "<br>" +
                "<b>Sede:</b> " + sede + "<br>" +
                "<b>Tecnico:</b> " + (data.tecnico || "") + "<br>" +
                "<b>Motivo:</b> " + (data.descripcion || "No especificado") + "<br><br>" +
                "<p style='color:#666;'>Si tienes dudas, contacta al departamento de mantenimiento.</p>";
        } else if (realizado === "Falsa averia") {
            colorEstado = "#1976d2";
            emoji = "ℹ️";
            asuntoReportero = emoji + " Averia " + numero + " - Falsa averia";
            htmlReportero = "<h3 style='color:" + colorEstado + ";'>" + emoji + " Averia " + numero + " - Falsa Averia</h3>" +
                "<b>Se determino que no existe una averia real.</b><br><br>" +
                "<b>Equipo:</b> " + equipo + "<br>" +
                "<b>Sede:</b> " + sede + "<br>" +
                "<b>Tecnico:</b> " + (data.tecnico || "") + "<br>" +
                (data.descripcion ? "<b>Observacion:</b> " + data.descripcion + "<br>" : "") +
                "<br><p style='color:#666;'>El equipo se encuentra operativo.</p>";
        } else if (realizado === "En proceso") {
            colorEstado = "#f57c00";
            emoji = "⏳";
            asuntoReportero = emoji + " Averia " + numero + " - En proceso";
            htmlReportero = "<h3 style='color:" + colorEstado + ";'>" + emoji + " Averia " + numero + " - En Proceso</h3>" +
                "<b>Tu averia esta siendo atendida.</b><br><br>" +
                "<b>Equipo:</b> " + equipo + "<br>" +
                "<b>Sede:</b> " + sede + "<br>" +
                "<b>Tecnico:</b> " + (data.tecnico || "") + "<br>" +
                (data.descripcion ? "<b>Observacion:</b> " + data.descripcion + "<br>" : "") +
                "<br><p style='color:#666;'>Te mantendremos informado sobre el avance.</p>";
        }

        if (asuntoReportero) {
            enviarCorreoReportero(numero, correoReportero, asuntoReportero, htmlReportero);
        }
    }

    var attachments = [];
    if (data.imagenes && data.imagenes.length > 0) {
        for (var k = 0; k < data.imagenes.length; k++) {
            try {
                var img = data.imagenes[k];
                if (!img || !img.data) continue;
                var bytes = Utilities.base64Decode(img.data);
                var blob = Utilities.newBlob(bytes, img.mimeType || "image/jpeg", img.nombre || ("resolucion_" + (k + 1) + ".jpg"));
                attachments.push(blob);
            } catch (imgErr) {}
        }
    }

    var html = "<h3>Resolucion " + numero + "</h3>" +
        "<b>Realizado:</b> " + realizado + "<br>" +
        "<b>Fecha:</b> " + (data.fecha || "") + "<br>" +
        "<b>Hora:</b> " + (data.hora || "") + "<br>" +
        "<b>Tecnico:</b> " + (data.tecnico || "") + "<br>" +
        "<b>Descripcion:</b> " + (data.descripcion || "") +
        (attachments.length > 0 ? "<br><br><i>" + attachments.length + " foto(s) adjunta(s).</i>" : "");

    var mailOptions = {
        to: "blancocarolina155@gmail.com",
        subject: "Resolucion " + numero + " - " + realizado + " - " + (data.tecnico || ""),
        htmlBody: html
    };
    if (attachments.length > 0) {
        mailOptions.attachments = attachments;
    }

    var mailEnviado = false;
    var mailError = "";
    try {
        MailApp.sendEmail(mailOptions);
        mailEnviado = true;
    } catch (mailErr) {
        mailError = String(mailErr);
        try {
            delete mailOptions.attachments;
            MailApp.sendEmail(mailOptions);
            mailEnviado = true;
        } catch (mailErr2) {
            mailError = String(mailErr2);
        }
    }

    if (!mailEnviado) {
        registrarError("resolucion", numero, mailError);
    }

    return jsonAveria({ status: "ok", numero: numero, mailEnviado: mailEnviado });
}

function registrarError(origen, referencia, detalle) {
    try {
        var ss = SpreadsheetApp.getActiveSpreadsheet();
        var sheet = ss.getSheetByName("errores");
        if (!sheet) {
            sheet = ss.insertSheet("errores");
            sheet.appendRow(["Fecha", "Origen", "Referencia", "Detalle"]);
        }
        sheet.appendRow([new Date(), origen, referencia, detalle]);
    } catch (err) {}
}

function generarNumeroAveria(sheet) {
    var last = sheet.getLastRow();
    return "AV-" + String(last).padStart(6, "0");
}

function obtenerEquipos() {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName("Equipos");
    if (!sheet) {
        return ContentService.createTextOutput(
            JSON.stringify([])
        ).setMimeType(ContentService.MimeType.JSON);
    }
    var data = sheet.getDataRange().getValues();
    var equipos = [];
    for (var i = 1; i < data.length; i++) {
        var nombre = String(data[i][0] || "").trim();
        if (!nombre) continue;
        equipos.push({
            equipo: nombre,
            sede: String(data[i][1] || "").trim(),
            zona: String(data[i][2] || "").trim()
        });
    }
    return ContentService.createTextOutput(
        JSON.stringify(equipos)
    ).setMimeType(ContentService.MimeType.JSON);
}

function agregarEquipo(nombre, sede, zona) {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName("Equipos");
    if (!sheet) {
        sheet = ss.insertSheet("Equipos");
        sheet.appendRow(["Equipo", "Sede", "Zona"]);
    }
    sheet.appendRow([nombre, sede, zona || ""]);
    return ContentService.createTextOutput(
        JSON.stringify({ status: "ok" })
    ).setMimeType(ContentService.MimeType.JSON);
}

function obtenerTecnicos() {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName("tecnicos");
    if (!sheet) {
        return ContentService.createTextOutput(
            JSON.stringify([])
        ).setMimeType(ContentService.MimeType.JSON);
    }
    var data = sheet.getDataRange().getValues();
    var tecnicos = [];
    for (var i = 1; i < data.length; i++) {
        var nombre = String(data[i][0] || "").trim();
        if (!nombre) continue;
        tecnicos.push({
            nombre: nombre,
            cedula: String(data[i][1] || "").trim(),
            whatsapp: String(data[i][2] || "").trim(),
            correo: String(data[i][3] || "").trim()
        });
    }
    return ContentService.createTextOutput(
        JSON.stringify(tecnicos)
    ).setMimeType(ContentService.MimeType.JSON);
}

function asignarAveria(numero, tecnicoNombre, tecnicoWhatsapp, tecnicoCorreo) {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName("averias");
    if (!sheet) {
        return jsonAveria({ status: "not_found" });
    }

    var all = sheet.getDataRange().getValues();
    var rowIndex = -1;
    for (var i = 1; i < all.length; i++) {
        if (String(all[i][0]) === String(numero)) {
            rowIndex = i + 1;
            break;
        }
    }
    if (rowIndex === -1) {
        return jsonAveria({ status: "not_found" });
    }

    var colAsignado = 14;
    sheet.getRange(rowIndex, colAsignado).setValue(tecnicoNombre);

    var empleadoNombre = String(all[rowIndex - 1][5] || "").trim();
    var correoReportero = buscarCorreoPorNombre(empleadoNombre);

    var html = "<h3 style='color:#2e7d32;'>Averia Asignada - " + numero + "</h3>" +
        "<b>Se te ha asignado la siguiente averia:</b><br><br>" +
        "<b>Numero:</b> " + numero + "<br>" +
        "<b>Fecha:</b> " + formatearFecha(all[rowIndex - 1][1]) + "<br>" +
        "<b>Hora:</b> " + formatearFecha(all[rowIndex - 1][2]) + "<br>" +
        "<b>Sede:</b> " + String(all[rowIndex - 1][3] || "") + "<br>" +
        "<b>Zona:</b> " + String(all[rowIndex - 1][4] || "") + "<br>" +
        "<b>Equipo:</b> " + String(all[rowIndex - 1][6] || "") + "<br>" +
        "<b>Descripcion:</b> " + String(all[rowIndex - 1][7] || "") + "<br><br>" +
        "<b>Ingresa a la plataforma con el codigo <span style='color:#d32f2f;font-size:18px;'>" + numero + "</span> para resolver esta averia.</b>";

    if (tecnicoCorreo) {
        try {
            MailApp.sendEmail({
                to: tecnicoCorreo,
                subject: "Averia Asignada " + numero + " - " + String(all[rowIndex - 1][3] || ""),
                htmlBody: html
            });
        } catch (e) {
            registrarError("asignacion_correo", numero, String(e));
        }
    }

    if (correoReportero) {
        var htmlReportero = "<h3 style='color:#1976d2;'>Tu averia " + numero + " ha sido asignada</h3>" +
            "<b>Tu reporte esta siendo atendido.</b><br><br>" +
            "<b>Numero:</b> " + numero + "<br>" +
            "<b>Equipo:</b> " + String(all[rowIndex - 1][6] || "") + "<br>" +
            "<b>Sede:</b> " + String(all[rowIndex - 1][3] || "") + "<br><br>" +
            "<b>Tecnico asignado:</b> <span style='color:#2e7d32;font-size:16px;font-weight:bold;'>" + tecnicoNombre + "</span><br><br>" +
            "<p style='color:#666;'>Te mantendremos informado sobre el estado de tu averia.</p>";
        enviarCorreoReportero(numero, correoReportero,
            "Averia " + numero + " asignada a " + tecnicoNombre,
            htmlReportero);
    }

    if (tecnicoWhatsapp) {
        var mensaje = "Averia " + numero + " asignada\n" +
            "Sede: " + String(all[rowIndex - 1][3] || "") + "\n" +
            "Zona: " + String(all[rowIndex - 1][4] || "") + "\n" +
            "Equipo: " + String(all[rowIndex - 1][6] || "") + "\n" +
            "Descripcion: " + String(all[rowIndex - 1][7] || "") + "\n\n" +
            "Ingresa a la plataforma con el codigo " + numero + " para resolver esta averia.";
        var urlWhatsApp = "https://wa.me/" + tecnicoWhatsapp.replace(/[^0-9]/g, "") + "?text=" + encodeURIComponent(mensaje);

        return jsonAveria({ status: "ok", urlWhatsApp: urlWhatsApp });
    }

    return jsonAveria({ status: "ok" });
}

function obtenerAveriaAsignada(numero) {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName("averias");
    if (!sheet) return null;

    var all = sheet.getDataRange().getValues();
    for (var i = 1; i < all.length; i++) {
        if (String(all[i][0]) === String(numero)) {
            var asignado = String(all[i][13] || "").trim();
            if (asignado) {
                var correoReportero = buscarCorreoPorNombre(String(all[i][5] || "").trim());
                return {
                    numero: String(all[i][0] || ""),
                    asignado: asignado,
                    sede: String(all[i][3] || ""),
                    zona: String(all[i][4] || ""),
                    equipo: String(all[i][6] || ""),
                    descripcion: String(all[i][7] || ""),
                    resuelto: averiaCerrada(String(all[i][11] || "")),
                    correoReportero: correoReportero
                };
            }
        }
    }
    return null;
}

var PERSONAL_HARDARCODED = [
    { nombre: "CAROLINA", cedula: "001", tipo: "Tecnico", whatsapp: "584141234567", correo: "blancocarolina155@gmail.com", jefe: "" },
    { nombre: "ALBERTO", cedula: "180236394", tipo: "Tecnico", whatsapp: "584121111111", correo: "alberto@test.com", jefe: "" },
    { nombre: "ANGEL", cedula: "143977568", tipo: "Tecnico", whatsapp: "584122222222", correo: "angel@test.com", jefe: "" },
    { nombre: "AQUILES", cedula: "98636442", tipo: "Tecnico", whatsapp: "584123456789", correo: "aquiles@test.com", jefe: "" },
    { nombre: "ALEXIS", cedula: "79927276", tipo: "Tecnico", whatsapp: "584123456780", correo: "alexis@test.com", jefe: "" },
    { nombre: "ENRIQUE", cedula: "196849519", tipo: "Tecnico", whatsapp: "584123456781", correo: "enrique@test.com", jefe: "" },
    { nombre: "RAFAEL", cedula: "65160601", tipo: "Tecnico", whatsapp: "584123456782", correo: "rafael@test.com", jefe: "" },
    { nombre: "SANDRY", cedula: "149708163", tipo: "Tecnico", whatsapp: "584123456783", correo: "sandry@test.com", jefe: "" },
    { nombre: "EMPLEADO 1", cedula: "100", tipo: "Empleado", whatsapp: "584123333333", correo: "empleado1@test.com", jefe: "blancocarolina155@gmail.com" },
    { nombre: "EMPLEADO 2", cedula: "101", tipo: "Empleado", whatsapp: "584124444444", correo: "empleado2@test.com", jefe: "blancocarolina155@gmail.com" },
    { nombre: "EMPLEADO 3", cedula: "102", tipo: "Empleado", whatsapp: "584125555555", correo: "empleado3@test.com", jefe: "blancocarolina155@gmail.com" },
    { nombre: "EMPLEADO 4", cedula: "103", tipo: "Empleado", whatsapp: "584126666666", correo: "empleado4@test.com", jefe: "blancocarolina155@gmail.com" },
    { nombre: "EMPLEADO 5", cedula: "104", tipo: "Empleado", whatsapp: "584127777777", correo: "empleado5@test.com", jefe: "blancocarolina155@gmail.com" }
];

function obtenerPersonal() {
    return ContentService.createTextOutput(
        JSON.stringify(PERSONAL_HARDARCODED)
    ).setMimeType(ContentService.MimeType.JSON);
}

function buscarCorreoPorNombre(nombre) {
    for (var i = 0; i < PERSONAL_HARDARCODED.length; i++) {
        if (PERSONAL_HARDARCODED[i].nombre.toUpperCase() === String(nombre || "").trim().toUpperCase()) {
            return PERSONAL_HARDARCODED[i].correo;
        }
    }
    return "";
}

function buscarJefePorNombre(nombre) {
    for (var i = 0; i < PERSONAL_HARDARCODED.length; i++) {
        if (PERSONAL_HARDARCODED[i].nombre.toUpperCase() === String(nombre || "").trim().toUpperCase()) {
            return PERSONAL_HARDARCODED[i].jefe;
        }
    }
    return "";
}

function obtenerPersonalArray() {
    return PERSONAL_HARDARCODED;
}

function buscarPersonalPorCedula(cedula) {
    for (var i = 0; i < PERSONAL_HARDARCODED.length; i++) {
        if (PERSONAL_HARDARCODED[i].cedula === String(cedula).trim()) {
            return PERSONAL_HARDARCODED[i];
        }
    }
    return null;
}

function enviarCorreoReportero(numero, correoReportero, asunto, mensaje) {
    if (!correoReportero) return;
    try {
        MailApp.sendEmail({
            to: correoReportero,
            subject: asunto,
            htmlBody: mensaje
        });
    } catch (e) {
        registrarError("correo_reportero", numero, String(e));
    }
}
