
const SEDES = [
    "DEPOSITO",
    "RUICES",
    "ALTAMIRA",
];

const HORAS = [
    "08:00 AM - 5:00 PM",
    "06:00 PM - 11:00 PM",
    "12:00 AM - 6:00 AM",
];

const EQUIPOS = [
    "Equipo 1",
    "Equipo 2",
    "Equipo 3",
    "Equipo 4",
    "Equipo 5",
    "Equipo 6",
];

const MANTENIMIENTOS = [
    "PREVENTIVO",
    "CORRECTIVO",
];

const TURNOS = {
    "08:00 AM - 5:00 PM": "Diurno",
    "06:00 PM - 11:00 PM": "Nocturno",
    "12:00 AM - 6:00 AM": "Madrugada"
};

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
    "Equipo 1": "Rutina Cocina",
    "Equipo 2": "Rutina Almacen",
    "Equipo 3": "Rutina Area Comun",
    "Equipo 4": "Rutina Seguridad",
    "Equipo 5": "Rutina Cocina",
    "Equipo 6": "Rutina Area Comun"
};

const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwamTvPSp9n_X3w_HFzAOrYxHTfkPNtgft0LffGrZzZy0yURZJLf4IM-dOo4-vYUjqXBw/exec";

let rutinaActual = [];
let nombreRutinaActual = "";
let tecnicoNombre = "";

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("btnLogin").addEventListener("click", loginTecnico);
    document.getElementById("codigoTecnico").addEventListener("keydown", function (e) {
        if (e.key === "Enter") loginTecnico();
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
        populateSelect("hora", HORAS);
        populateSelect("equipo", EQUIPOS);
        populateSelect("mantenimiento", MANTENIMIENTOS);
    } else {
        errorEl.style.display = "block";
        document.getElementById("codigoTecnico").value = "";
    }
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

function enviarFormulario(e) {
    e.preventDefault();

    const sedes = document.getElementById("sedes").value;
    const hora = document.getElementById("hora").value;
    const equipo = document.getElementById("equipo").value;
    const mantenimiento = document.getElementById("mantenimiento").value;
    const descripcion = document.getElementById("descripcion").value.trim();
    const checkins = getCheckinValues();

    if (!sedes || !hora || !equipo || !mantenimiento) {
        alert("Por favor completa Sedes, Hora, Equipo y Mantenimiento.");
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
    const turno = TURNOS[hora] || "";

    const registro = {
        fecha: fecha,
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
    document.getElementById("descripcion").value = "";
    document.getElementById("checkinsContainer").innerHTML = "";
    rutinaActual = [];
    nombreRutinaActual = "";
}
