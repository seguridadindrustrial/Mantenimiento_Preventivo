
const SEDES = [
    "DEPOSITO",
    "RUICES",
    "ALTAMIRA",
];

const SEDE_EQUIPOS = {
    "DEPOSITO": [
        "A/A 12000 BTU split // oficina PB",
        "A/A 12000 Btu Ventana ///Dormitorio",
        "A/A 24000 Btu Split 77 Oficina Pa",
        "A/A 8000 BTU Ventana // dormitorio",
        "Chambranas",
        "Circuito Camaras Planta Baja",
        "Circuito Camaras Planta Alta",
        "Enfriador sushi cake",
        "Extintores",
        "Extintores Fijos",
        "Freidora Imperial",
        "Freidora Star Book",
        "Freidora Vulcan 1",
        "Freidora Vulcan 2",
        "Freidora Duker 1",
        "Freidora Duker 2",
        "Fumigacion",
        "Horno Asber",
        "Horno Unox",
        "Lavavajillas 1",
        "Lavavajillas 2",
        "Mallas anti ratas",
        "Maquina de cafe 1",
        "Maquina de Cafe 2",
        "Maquina de cafe 3",
        "Microondas 1",
        "Microondas 2",
        "Microondas 3",
        "Molino de cafe 1",
        "Molino de cafe 2",
        "Molino de cafe 3",
        "pantallas de vidrio",
        "parrilleras",
        "Pintura Externa",
        "Pintura interna",
        "Planchas a gas",
        "Reverberos dobles",
        "Reverberos sencillos",
        "Tanques de agua (8000lts)",
        "Tanquillas",
        "salamandras",
        "Reverbero de mesa",
        "Creperas",
        "Extractores (6)",
        "Horno electrico 110v 1",
        "Horno electrico 110v 2",
        "Peceras Grandes",
        "Peceras Pequenas",
        "Lamparas de calor",
        "Bombonas de gas",
        "Escalinatas",
        "Horno pizzero Ooni",
        "Enfriador de Botellon 1",
        "Enfriador de Botellon 2",
        "Enfriador de Botellon 3",
        "Maquina de cafe 4",
        "Maquina de cafe 5",
        "Tableros"
    ],
    "RUICES": [
        "Cava cuarto de Congelacion 1",
        "Cava cuarto de Congelacion 2",
        "Cava cuarto de Congelacion 3",
        "Cava cuarto de Conservacion 1",
        "Cava cuarto de Conservacion 2",
        "Cava Cuarto de Basura",
        "Aire acondicionado 5 ton Fan coil 1",
        "Aire acondicionado 5 ton Fan coil 2",
        "Aire acondicionado 5 ton Fan Coil 3",
        "Aire acondicionado 5 ton Fan Coil 4",
        "Aire Acondicionado 5 ton Piso techo 1",
        "Aire Acondicionado 18000 Btu Entradas",
        "Aire Acondicionado 12000 Btu Panaderia",
        "Aire Acondicionado 18000Btu Comedor",
        "Aire Acondicionado 12000 Btu Cuarto de IT",
        "Meson refrigerado 2 pta 1 Ursel",
        "Meson refrigerado 3 pta 1 Ursel",
        "Meson refrigerado 2 pta Balsam 1 Pantry",
        "Meson refrigerado 2 pta Balsam 2 Pantry",
        "Meson refrigerado de gaveta Balsam 1 principal",
        "Meson refrigerado de gaveta Balsam 2 Principal",
        "Meson refrigerado de gaveta Ursel Comida en familia",
        "Armario refrigerado Ursel 1",
        "Armario refrigerado Ursel 2",
        "Nevera exhibidora",
        "Sistema de bombas Hidroneumatico",
        "Tanques de agua de 1000lts (8 un)",
        "Filtro desbarrador",
        "Filtro de carbon activado",
        "Abatidor",
        "Motor extractor 12000 CFM Planta Baja",
        "Motor extractor 21000 CFM Piso 1",
        "Cortina de Aire 150 cm 220V",
        "Horno Rational a Gas 220 V ph2",
        "Horno Rational trifasico 220V ph3",
        "Horno electrico Balsam 110 V-ph1 1",
        "Horno electrico Balsam 110 V-ph1 2",
        "Santa maria 1 3.5 mts",
        "Santa maria 2 3.5 mts",
        "Elevador de Carga",
        "Pela papas",
        "Rebanadora 1",
        "Rebanadora 2",
        "Empacadora al Vacio 1",
        "Empacadora al Vacio 2",
        "Robocop",
        "Freidora 1",
        "Freidora 2",
        "Freidora 3",
        "Cocina 1",
        "Cocina 2",
        "Cocina 3",
        "Tope Frances a Gas 1",
        "Tope Frances a Gas 2",
        "Plancha a gas",
        "Sarten Basculante Industrial",
        "MOTOR DE INYECCION DE AIRE 1",
        "MOTOR DE INYECCION DE AIRE 2",
        "MOTOR DE INYECCION DE AIRE 3",
        "MOTOR DE INYECCION DE AIRE 4",
        "AMASADOR 1",
        "FERMENTADOR",
        "SISTEMA DE DETENCION DE INCENDIO",
        "Amasador 2",
        "Laminadora",
        "Tableros Electricos",
        "Fumigacion",
        "Extintores",
        "Enfriador de agua 1",
        "Enfriador de agua 2",
        "Enfriador de agua 3",
        "Enfriador de agua 4",
        "Ductos + trampa grasas"
    ],
    "ALTAMIRA": [
        "A/A 12000 BTU Gerencia",
        "A/A 12000 BTU Lobby",
        "A/A 12000 Btu Sala de Reuniones",
        "A/A 12000 BTU Ventas",
        "Alfombra Piso",
        "Extintor 1",
        "Extintor 2",
        "Fumigacion",
        "Limpieza de canaletas",
        "Limpieza de Tanques",
        "Limpieza de Tanquilla",
        "Revisio Microonda 1",
        "Revisio Microonda 2",
        "Pintura Externa",
        "Extractores",
        "Nevera exhibidora",
        "Pintura interna",
        "Enfriador de Botellon",
        "Tableros Electricos",
        "A/A Capicua 18000btu"
    ]
};

const MANTENIMIENTOS = [
    "PREVENTIVO",
    "CORRECTIVO",
];

const TECNICOS = {
    "001": "Jose",
    "002": "Pedro",
    "003": "Maria",
    "004": "Luis",
    "005": "Ana"
};

const RUTINAS = {
    "Rutina Cocina": [
        "Area limpia",
        "Equipos operativos",
        "Personal completo"
    ],
    "Rutina Almacen": [
        "Herramientas organizadas",
        "Bitacora actualizada"
    ],
    "Rutina Area Comun": [
        "Senalizacion visible",
        "Extintores revisados",
        "Rutas despejadas",
        "Iluminacion funcional"
    ],
    "Rutina Seguridad": [
        "Equipo de proteccion completo",
        "Area delimitada"
    ]
};

const EQUIPO_RUTINA = {
    "A/A 12000 BTU split // oficina PB": "Rutina Area Comun",
    "A/A 12000 Btu Ventana ///Dormitorio": "Rutina Area Comun",
    "A/A 24000 Btu Split 77 Oficina Pa": "Rutina Area Comun",
    "A/A 8000 BTU Ventana // dormitorio": "Rutina Area Comun",
    "Chambranas": "Rutina Seguridad",
    "Circuito Camaras Planta Baja": "Rutina Area Comun",
    "Circuito Camaras Planta Alta": "Rutina Area Comun",
    "Enfriador sushi cake": "Rutina Almacen",
    "Extintores": "Rutina Seguridad",
    "Extintores Fijos": "Rutina Seguridad",
    "Freidora Imperial": "Rutina Cocina",
    "Freidora Star Book": "Rutina Cocina",
    "Freidora Vulcan 1": "Rutina Cocina",
    "Freidora Vulcan 2": "Rutina Cocina",
    "Freidora Duker 1": "Rutina Cocina",
    "Freidora Duker 2": "Rutina Cocina",
    "Fumigacion": "Rutina Seguridad",
    "Horno Asber": "Rutina Cocina",
    "Horno Unox": "Rutina Cocina",
    "Lavavajillas 1": "Rutina Cocina",
    "Lavavajillas 2": "Rutina Cocina",
    "Mallas anti ratas": "Rutina Seguridad",
    "Maquina de cafe 1": "Rutina Cocina",
    "Maquina de Cafe 2": "Rutina Cocina",
    "Maquina de cafe 3": "Rutina Cocina",
    "Microondas 1": "Rutina Cocina",
    "Microondas 2": "Rutina Cocina",
    "Microondas 3": "Rutina Cocina",
    "Molino de cafe 1": "Rutina Cocina",
    "Molino de cafe 2": "Rutina Cocina",
    "Molino de cafe 3": "Rutina Cocina",
    "pantallas de vidrio": "Rutina Area Comun",
    "parrilleras": "Rutina Cocina",
    "Pintura Externa": "Rutina Area Comun",
    "Pintura interna": "Rutina Area Comun",
    "Planchas a gas": "Rutina Cocina",
    "Reverberos dobles": "Rutina Cocina",
    "Reverberos sencillos": "Rutina Cocina",
    "Tanques de agua (8000lts)": "Rutina Almacen",
    "Tanquillas": "Rutina Almacen",
    "salamandras": "Rutina Cocina",
    "Reverbero de mesa": "Rutina Cocina",
    "Creperas": "Rutina Cocina",
    "Extractores (6)": "Rutina Cocina",
    "Horno electrico 110v 1": "Rutina Cocina",
    "Horno electrico 110v 2": "Rutina Cocina",
    "Peceras Grandes": "Rutina Almacen",
    "Peceras Pequenas": "Rutina Almacen",
    "Lamparas de calor": "Rutina Area Comun",
    "Bombonas de gas": "Rutina Cocina",
    "Escalinatas": "Rutina Area Comun",
    "Horno pizzero Ooni": "Rutina Cocina",
    "Enfriador de Botellon 1": "Rutina Almacen",
    "Enfriador de Botellon 2": "Rutina Almacen",
    "Enfriador de Botellon 3": "Rutina Almacen",
    "Maquina de cafe 4": "Rutina Cocina",
    "Maquina de cafe 5": "Rutina Cocina",
    "Tableros": "Rutina Seguridad",
    "Cava cuarto de Congelacion 1": "Rutina Almacen",
    "Cava cuarto de Congelacion 2": "Rutina Almacen",
    "Cava cuarto de Congelacion 3": "Rutina Almacen",
    "Cava cuarto de Conservacion 1": "Rutina Almacen",
    "Cava cuarto de Conservacion 2": "Rutina Almacen",
    "Cava Cuarto de Basura": "Rutina Almacen",
    "Aire acondicionado 5 ton Fan coil 1": "Rutina Area Comun",
    "Aire acondicionado 5 ton Fan coil 2": "Rutina Area Comun",
    "Aire acondicionado 5 ton Fan Coil 3": "Rutina Area Comun",
    "Aire acondicionado 5 ton Fan Coil 4": "Rutina Area Comun",
    "Aire Acondicionado 5 ton Piso techo 1": "Rutina Area Comun",
    "Aire Acondicionado 18000 Btu Entradas": "Rutina Area Comun",
    "Aire Acondicionado 12000 Btu Panaderia": "Rutina Area Comun",
    "Aire Acondicionado 18000Btu Comedor": "Rutina Area Comun",
    "Aire Acondicionado 12000 Btu Cuarto de IT": "Rutina Area Comun",
    "Meson refrigerado 2 pta 1 Ursel": "Rutina Almacen",
    "Meson refrigerado 3 pta 1 Ursel": "Rutina Almacen",
    "Meson refrigerado 2 pta Balsam 1 Pantry": "Rutina Almacen",
    "Meson refrigerado 2 pta Balsam 2 Pantry": "Rutina Almacen",
    "Meson refrigerado de gaveta Balsam 1 principal": "Rutina Almacen",
    "Meson refrigerado de gaveta Balsam 2 Principal": "Rutina Almacen",
    "Meson refrigerado de gaveta Ursel Comida en familia": "Rutina Almacen",
    "Armario refrigerado Ursel 1": "Rutina Almacen",
    "Armario refrigerado Ursel 2": "Rutina Almacen",
    "Nevera exhibidora": "Rutina Almacen",
    "Sistema de bombas Hidroneumatico": "Rutina Area Comun",
    "Tanques de agua de 1000lts (8 un)": "Rutina Almacen",
    "Filtro desbarrador": "Rutina Almacen",
    "Filtro de carbon activado": "Rutina Almacen",
    "Abatidor": "Rutina Cocina",
    "Motor extractor 12000 CFM Planta Baja": "Rutina Area Comun",
    "Motor extractor 21000 CFM Piso 1": "Rutina Area Comun",
    "Cortina de Aire 150 cm 220V": "Rutina Area Comun",
    "Horno Rational a Gas 220 V ph2": "Rutina Cocina",
    "Horno Rational trifasico 220V ph3": "Rutina Cocina",
    "Horno electrico Balsam 110 V-ph1 1": "Rutina Cocina",
    "Horno electrico Balsam 110 V-ph1 2": "Rutina Cocina",
    "Santa maria 1 3.5 mts": "Rutina Cocina",
    "Santa maria 2 3.5 mts": "Rutina Cocina",
    "Elevador de Carga": "Rutina Area Comun",
    "Pela papas": "Rutina Cocina",
    "Rebanadora 1": "Rutina Cocina",
    "Rebanadora 2": "Rutina Cocina",
    "Empacadora al Vacio 1": "Rutina Cocina",
    "Empacadora al Vacio 2": "Rutina Cocina",
    "Robocop": "Rutina Cocina",
    "Freidora 1": "Rutina Cocina",
    "Freidora 2": "Rutina Cocina",
    "Freidora 3": "Rutina Cocina",
    "Cocina 1": "Rutina Cocina",
    "Cocina 2": "Rutina Cocina",
    "Cocina 3": "Rutina Cocina",
    "Tope Frances a Gas 1": "Rutina Cocina",
    "Tope Frances a Gas 2": "Rutina Cocina",
    "Plancha a gas": "Rutina Cocina",
    "Sarten Basculante Industrial": "Rutina Cocina",
    "MOTOR DE INYECCION DE AIRE 1": "Rutina Cocina",
    "MOTOR DE INYECCION DE AIRE 2": "Rutina Cocina",
    "MOTOR DE INYECCION DE AIRE 3": "Rutina Cocina",
    "MOTOR DE INYECCION DE AIRE 4": "Rutina Cocina",
    "AMASADOR 1": "Rutina Cocina",
    "FERMENTADOR": "Rutina Cocina",
    "SISTEMA DE DETENCION DE INCENDIO": "Rutina Seguridad",
    "Amasador 2": "Rutina Cocina",
    "Laminadora": "Rutina Cocina",
    "Tableros Electricos": "Rutina Area Comun",
    "Fumigacion": "Rutina Seguridad",
    "Extintores": "Rutina Seguridad",
    "Enfriador de agua 1": "Rutina Almacen",
    "Enfriador de agua 2": "Rutina Almacen",
    "Enfriador de agua 3": "Rutina Almacen",
    "Enfriador de agua 4": "Rutina Almacen",
    "Ductos + trampa grasas": "Rutina Area Comun",
    "Equipo 1": "Rutina Cocina",
    "Equipo 2": "Rutina Almacen",
    "Equipo 3": "Rutina Area Comun",
    "Equipo 4": "Rutina Seguridad",
    "Equipo 5": "Rutina Cocina",
    "Equipo 6": "Rutina Area Comun",
    "A/A 12000 BTU Gerencia": "Rutina Area Comun",
    "A/A 12000 BTU Lobby": "Rutina Area Comun",
    "A/A 12000 Btu Sala de Reuniones": "Rutina Area Comun",
    "A/A 12000 BTU Ventas": "Rutina Area Comun",
    "Alfombra Piso": "Rutina Area Comun",
    "Extintor 1": "Rutina Seguridad",
    "Extintor 2": "Rutina Seguridad",
    "Fumigacion": "Rutina Seguridad",
    "Limpieza de canaletas": "Rutina Area Comun",
    "Limpieza de Tanques": "Rutina Almacen",
    "Limpieza de Tanquilla": "Rutina Almacen",
    "Revisio Microonda 1": "Rutina Cocina",
    "Revisio Microonda 2": "Rutina Cocina",
    "Pintura Externa": "Rutina Area Comun",
    "Extractores": "Rutina Area Comun",
    "Nevera exhibidora": "Rutina Almacen",
    "Pintura interna": "Rutina Area Comun",
    "Enfriador de Botellon": "Rutina Almacen",
    "Tableros Electricos": "Rutina Area Comun",
    "A/A Capicua 18000btu": "Rutina Area Comun"
};

const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxxg_EZKP_vc_TivOzxzloDUbbY1bTJD7qVQX37z4bqkaWH-Og1_C1soYP3T_y7CsImpw/exec";

let rutinaActual = [];
let nombreRutinaActual = "";
let tecnicoNombre = "";

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("btnLogin").addEventListener("click", loginTecnico);
    document.getElementById("codigoTecnico").addEventListener("keydown", function (e) {
        if (e.key === "Enter") loginTecnico();
    });

    document.getElementById("sedes").addEventListener("change", function () {
        const sede = this.value;
        const equipos = SEDE_EQUIPOS[sede] || [];
        populateSelect("equipo", equipos);
        document.getElementById("checkinsContainer").innerHTML = "";
        rutinaActual = [];
        nombreRutinaActual = "";
    });

    document.getElementById("equipo").addEventListener("change", function () {
        renderRutina(this.value);
    });

    document.getElementById("checkinForm").addEventListener("submit", enviarFormulario);
    document.getElementById("btnLimpiar").addEventListener("click", clearForm);
});

function loginTecnico() {
    const codigo = document.getElementById("codigoTecnico").value.trim();
    const errorEl = document.getElementById("loginError");

    if (TECNICOS[codigo]) {
        tecnicoNombre = TECNICOS[codigo];
        errorEl.style.display = "none";
        document.getElementById("loginSection").style.display = "none";
        document.getElementById("checkinForm").style.display = "block";
        document.getElementById("tecnicoInfo").textContent = "Tecnico: " + tecnicoNombre;
        populateSelect("sedes", SEDES);
        populateSelect("mantenimiento", MANTENIMIENTOS);
        populateTimeSelects();
    } else {
        errorEl.style.display = "block";
        document.getElementById("codigoTecnico").value = "";
    }
}

function populateTimeSelects() {
    const horas = document.getElementById("horaHora");
    horas.innerHTML = '<option value="" disabled selected>HH</option>';
    for (var i = 1; i <= 12; i++) {
        var opt = document.createElement("option");
        opt.value = i;
        opt.textContent = i;
        horas.appendChild(opt);
    }

    const minutos = document.getElementById("horaMinuto");
    minutos.innerHTML = '<option value="" disabled selected>MM</option>';
    for (var m = 0; m < 60; m += 5) {
        var opt = document.createElement("option");
        var val = m < 10 ? "0" + m : "" + m;
        opt.value = val;
        opt.textContent = val;
        minutos.appendChild(opt);
    }

    const periodo = document.getElementById("horaPeriodo");
    periodo.innerHTML = '<option value="" disabled selected>AM/PM</option>';
    ["AM", "PM"].forEach(function (p) {
        var opt = document.createElement("option");
        opt.value = p;
        opt.textContent = p;
        periodo.appendChild(opt);
    });
}

function populateSelect(id, items) {
    const select = document.getElementById(id);
    select.innerHTML = '<option value="" disabled selected>Seleccionar...</option>';
    items.forEach(item => {
        const option = document.createElement("option");
        option.value = item;
        option.textContent = item;
        select.appendChild(option);
    });
}

function obtenerHora() {
    var h = document.getElementById("horaHora").value;
    var m = document.getElementById("horaMinuto").value;
    var p = document.getElementById("horaPeriodo").value;
    if (!h || !m || !p) return "";
    var horas24 = parseInt(h, 10);
    if (p === "PM" && horas24 !== 12) horas24 += 12;
    if (p === "AM" && horas24 === 12) horas24 = 0;
    var hh = horas24 < 10 ? "0" + horas24 : "" + horas24;
    return hh + ":" + m;
}

function calcularTurno(hora24) {
    var horas = parseInt(hora24.split(":")[0], 10);
    if (horas >= 6 && horas < 12) return "Diurno";
    if (horas >= 18 && horas < 24) return "Nocturno";
    return "Madrugada";
}

function renderRutina(equipo) {
    const container = document.getElementById("checkinsContainer");
    container.innerHTML = "";
    nombreRutinaActual = EQUIPO_RUTINA[equipo] || "";
    rutinaActual = RUTINAS[nombreRutinaActual] || [];

    if (rutinaActual.length === 0) {
        container.innerHTML = "<p style='color:#999;font-size:0.85rem;'>No hay rutina definida para este equipo.</p>";
        return;
    }

    const labelRutina = document.createElement("p");
    labelRutina.style.cssText = "color:#5f9263;font-size:0.8rem;font-weight:600;margin-bottom:4px;";
    labelRutina.textContent = nombreRutinaActual;
    container.appendChild(labelRutina);

    rutinaActual.forEach((label, index) => {
        const div = document.createElement("div");
        div.className = "checkin-item";
        div.innerHTML = `
            <span>${label}</span>
            <div class="toggle-group">
                <button type="button" class="toggle-btn" data-index="${index}" data-value="Si" onclick="toggleCheckin(this)">Si</button>
                <button type="button" class="toggle-btn" data-index="${index}" data-value="No" onclick="toggleCheckin(this)">No</button>
            </div>
        `;
        container.appendChild(div);
    });
}

function toggleCheckin(btn) {
    const group = btn.parentElement;
    group.querySelectorAll(".toggle-btn").forEach(b => {
        b.classList.remove("active-si", "active-no");
    });

    if (btn.dataset.value === "Si") {
        btn.classList.add("active-si");
    } else {
        btn.classList.add("active-no");
    }
}

function getCheckinValues() {
    const results = {};
    const groups = document.querySelectorAll(".toggle-group");
    groups.forEach((group, index) => {
        const activeBtn = group.querySelector(".active-si, .active-no");
        results[rutinaActual[index]] = activeBtn ? activeBtn.dataset.value : "";
    });
    return results;
}

function generarIdUnico(fecha, hora, sede, equipo, tecnico) {
    return fecha + "|" + hora + "|" + sede + "|" + equipo + "|" + tecnico;
}

function yaEnviado(idUnico) {
    const enviados = JSON.parse(localStorage.getItem("enviadosIds") || "[]");
    return enviados.includes(idUnico);
}

function marcarEnviado(idUnico) {
    const enviados = JSON.parse(localStorage.getItem("enviadosIds") || "[]");
    enviados.push(idUnico);
    localStorage.setItem("enviadosIds", JSON.stringify(enviados));
}

function enviarFormulario(e) {
    e.preventDefault();

    const sedes = document.getElementById("sedes").value;
    const hora = obtenerHora();
    const equipo = document.getElementById("equipo").value;
    const mantenimiento = document.getElementById("mantenimiento").value;
    const descripcion = document.getElementById("descripcion").value.trim();
    const checkins = getCheckinValues();

    if (!sedes || !hora || !equipo || !mantenimiento) {
        alert("Por favor completa todos los campos.");
        return;
    }

    if (rutinaActual.length === 0) {
        alert("Selecciona un equipo con rutina definida.");
        return;
    }

    const hasCheckinEmpty = rutinaActual.some(c => !checkins[c]);
    if (hasCheckinEmpty) {
        alert("Por favor responde todos los pasos de la rutina (Si/No).");
        return;
    }

    const fecha = new Date().toISOString().slice(0, 10);
    const turno = calcularTurno(hora);
    const idUnico = generarIdUnico(fecha, hora, sedes, equipo, tecnicoNombre);

    if (yaEnviado(idUnico)) {
        alert("Este registro ya fue enviado anteriormente.");
        return;
    }

    if (!confirm("Confirmar envio?\n\nFecha: " + fecha + "\nHora: " + hora + "\nSede: " + sedes + "\nEquipo: " + equipo + "\nTecnico: " + tecnicoNombre)) {
        return;
    }

    const registro = {
        id: idUnico,
        fecha: fecha,
        hora: hora,
        turno: turno,
        sedes: sedes,
        tecnico: tecnicoNombre,
        equipo: equipo,
        mantenimiento: mantenimiento,
        rutina: nombreRutinaActual,
        checkinKeys: rutinaActual,
        checkinValues: rutinaActual.map(c => checkins[c] || ""),
        descripcion: descripcion
    };

    marcarEnviado(idUnico);
    saveToLocalStorage(registro);

    fetch(APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(registro)
    })
    .then(() => {
        alert("Enviado correctamente a Google Sheets.");
        clearForm();
    })
    .catch(() => {
        alert("Error al enviar. El registro se guardo localmente.");
        clearForm();
    });
}

function saveToLocalStorage(registro) {
    const historial = JSON.parse(localStorage.getItem("historialCheckins") || "[]");
    historial.push(registro);
    localStorage.setItem("historialCheckins", JSON.stringify(historial));
}

function clearForm() {
    document.getElementById("checkinForm").reset();
    document.getElementById("equipo").innerHTML = '<option value="" disabled selected>Seleccionar equipo...</option>';
    document.getElementById("descripcion").value = "";
    document.getElementById("checkinsContainer").innerHTML = "";
    populateTimeSelects();
    rutinaActual = [];
    nombreRutinaActual = "";
}
