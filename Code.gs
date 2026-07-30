function doPost(e) {
    var data = JSON.parse(e.postData.contents);
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName(data.rutina);

    if (!sheet) {
        sheet = ss.insertSheet(data.rutina);
        var headers = ["Fecha", "Hora", "Turno", "Sede", "Zona", "Tecnico", "Equipo", "Mantenimiento"];

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

    sheet.appendRow(row);

    return ContentService.createTextOutput(
        JSON.stringify({ status: "ok" })
    ).setMimeType(ContentService.MimeType.JSON);
}

function onOpen() {
    var ui = SpreadsheetApp.getUi();
    var menu = ui.createMenu("Navegacion");
    menu.addItem("Ir a hoja ...", "mostrarDialogoNavegacion");
    menu.addItem("Buscar", "mostrarDialogoBusqueda");
    menu.addItem("Ir al final", "irAlFinal");
    menu.addToUi();
}

function mostrarDialogoNavegacion() {
    var hojas = SpreadsheetApp.getActiveSpreadsheet().getSheets();
    var html = '<html><body style="font-family:sans-serif;padding:16px;"><h3>Hojas:</h3><ul style="list-style:none;padding:0;">';
    for (var i = 0; i < hojas.length; i++) {
        html += '<li style="margin:4px 0;"><a href="#" onclick="ir(\'' + hojas[i].getName() + '\')" style="display:block;padding:8px;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;">' + hojas[i].getName() + '</a></li>';
    }
    html += '<script>function ir(n){google.script.run.withSuccessHandler(function(){google.script.host.close()}).activarHoja(n);}</script></body></html>';
    SpreadsheetApp.getUi().showModalDialog(HtmlService.createHtmlOutput(html).setWidth(300).setHeight(350), "Navegacion");
}

function activarHoja(nombre) {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(nombre);
    if (sheet) sheet.activate();
}

function irAlFinal() {
    var sheet = SpreadsheetApp.getActiveSheet();
    var last = sheet.getLastRow();
    if (last > 0) sheet.getRange(last, 1).activate();
}

function mostrarDialogoBusqueda() {
    var html = '<html><body style="font-family:sans-serif;padding:16px;"><h3>Buscar</h3><input type="text" id="q" style="width:100%;padding:8px;font-size:16px;"><br><br><button onclick="buscar()" style="padding:8px 16px;background:#63bb60;color:#fff;border:none;border-radius:6px;cursor:pointer;">Buscar</button><div id="r" style="margin-top:10px;"></div><script>function buscar(){var q=document.getElementById("q").value;google.script.run.withSuccessHandler(function(r){document.getElementById("r").innerHTML=r;}).buscarEnHoja(q);}</script></body></html>';
    SpreadsheetApp.getUi().showModalDialog(HtmlService.createHtmlOutput(html).setWidth(300).setHeight(200), "Buscar");
}

function buscarEnHoja(q) {
    var datos = SpreadsheetApp.getActiveSheet().getDataRange().getValues();
    var res = [];
    for (var i = 1; i < datos.length; i++) {
        for (var j = 0; j < datos[i].length; j++) {
            if (String(datos[i][j]).toLowerCase().indexOf(q.toLowerCase()) !== -1) {
                res.push("Fila " + (i + 1) + ": " + datos[i].slice(0, 4).join(" | "));
                break;
            }
        }
    }
    return res.length ? res.join("<br>") : "Sin resultados.";
}
