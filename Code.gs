function doGet(e) {
    if (e && e.parameter) {
        if (e.parameter.accion === "rutinas") {
            return obtenerRutinasDinamicas();
        }
        if (e.parameter.accion === "averias") {
            return obtenerAverias();
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

var CABECERA_AVERIAS = ["Numero", "Fecha", "Hora", "Sede", "Zona", "Empleado", "Equipo", "Descripcion", "Fecha Resolucion", "Hora Resolucion", "Tecnico", "Realizado", "Descripcion Resolucion"];

function jsonAveria(obj) {
    return ContentService.createTextOutput(
        JSON.stringify(obj)
    ).setMimeType(ContentService.MimeType.JSON);
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
                resuelto: String(data[i][11] || "") !== ""
            });
        }
    }
    return jsonAveria(out);
}

function procesarAveria(data) {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName("averias");
    sheet = asegurarHojaAverias(sheet, ss);

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
        "", "", "", "", ""
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

    var html = "<h3>Averia " + numero + "</h3>" +
        "<b>Fecha:</b> " + (data.fecha || "") + "<br>" +
        "<b>Hora:</b> " + (data.hora || "") + "<br>" +
        "<b>Sede:</b> " + (data.sedes || "") + "<br>" +
        "<b>Zona:</b> " + (data.zona || "") + "<br>" +
        "<b>Equipo:</b> " + (data.equipo || "") + "<br>" +
        "<b>Descripcion:</b> " + (data.descripcion || "") + "<br>" +
        "<b>Empleado:</b> " + (data.empleado || "") +
        (attachments.length > 0 ? "<br><br><i>" + attachments.length + " foto(s) adjunta(s).</i>" : "");

    var mailOptions = {
        to: "blancocarolina155@gmail.com",
        subject: "Averia " + numero + " - " + (data.sedes || "") + " - " + (data.equipo || ""),
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
    if (String(all[rowIndex - 1][11] || "") !== "") {
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

    var color = realizado === "Si" ? "#C6EFCE" : realizado === "No" ? "#FFC7CE" : "#FFEB9C";
    sheet.getRange(rowIndex, 1, 1, 13).setBackground(color);

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
