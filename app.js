
let SEDES = [];
let SEDES_CHECKIN = [];
let SEDE_ZONAS = {};

let datosEquiposRaw = [];
let datosPersonal = [];
let TECNICOS = {};
let EMPLEADOS = {};

function construirDatosEquipos(datos) {
    datosEquiposRaw = datos;
    const sedesSet = new Set();
    const sedeZonasMap = {};
    const zonaEquiposMap = {};
    const sedeEquiposMap = {};

    datos.forEach(function(eq) {
        const sede = eq.sede;
        const zona = eq.zona;
        const nombre = eq.equipo;

        if (!sede) return;
        sedesSet.add(sede);

        if (!sedeZonasMap[sede]) sedeZonasMap[sede] = new Set();
        if (!sedeEquiposMap[sede]) sedeEquiposMap[sede] = [];

        sedeEquiposMap[sede].push(nombre);

        if (zona) {
            sedeZonasMap[sede].add(zona);
            const key = sede + "||" + zona;
            if (!zonaEquiposMap[key]) zonaEquiposMap[key] = [];
            zonaEquiposMap[key].push(nombre);
        }
    });

    SEDES = Array.from(sedesSet);
    if (SEDES.indexOf("EVENTO") === -1) SEDES.push("EVENTO");
    SEDES_CHECKIN = SEDES.filter(function(s) { return s !== "EVENTO"; });

    SEDE_ZONAS = {};
    for (const sede in sedeZonasMap) {
        const zonasArr = Array.from(sedeZonasMap[sede]);
        zonasArr.sort();
        if (sede !== "ALTAMIRA" && zonasArr.indexOf("Exterior") === -1) zonasArr.push("Exterior");
        if (sede !== "EVENTO" && zonasArr.indexOf("Otros") === -1) zonasArr.push("Otros");
        if (sede === "DEPOSITO" && zonasArr.indexOf("Taller") === -1) zonasArr.push("Taller");
        SEDE_ZONAS[sede] = zonasArr;
    }

    ZONA_EQUIPOS = {};
    for (const sede in sedeZonasMap) {
        ZONA_EQUIPOS[sede] = {};
        sedeZonasMap[sede].forEach(function(zona) {
            const key = sede + "||" + zona;
            ZONA_EQUIPOS[sede][zona] = zonaEquiposMap[key] || [];
        });
    }

    SEDE_EQUIPOS = sedeEquiposMap;
}

function cargarEquipos() {
    return fetch(APPS_SCRIPT_URL + "?accion=equipos")
        .then(function(r) { return r.json(); })
        .then(function(data) {
            if (Array.isArray(data)) {
                construirDatosEquipos(data);
            }
        })
        .catch(function() {});
}

function cargarPersonal() {
    return fetch(APPS_SCRIPT_URL + "?accion=personal")
        .then(function(r) { return r.json(); })
        .then(function(data) {
            if (Array.isArray(data)) {
                datosPersonal = data;
                TECNICOS = {};
                EMPLEADOS = {};
                data.forEach(function(p) {
                    if (p.tipo === "Tecnico") {
                        TECNICOS[p.cedula] = p.nombre;
                    } else if (p.tipo === "Empleado") {
                        EMPLEADOS[p.cedula] = p.nombre;
                    }
                });
            }
        })
        .catch(function(err) {
            console.error("Error cargando personal:", err);
        });
}

function buscarPersonalPorCedula(cedula) {
    for (var i = 0; i < datosPersonal.length; i++) {
        if (datosPersonal[i].cedula === cedula) {
            return datosPersonal[i];
        }
    }
    return null;
}

function getAveriaZonas(sede) {
    if (sede === "EVENTO") return [];
    var zonas = (SEDE_ZONAS[sede] || []).filter(function(z) { return z !== "Taller"; });
    if (zonas.indexOf("Exterior") === -1) zonas.push("Exterior");
    return zonas;
}

const ZONA_EQUIPOS = {
    "DEPOSITO": {
        "PB": [
            "A/A 12000 BTU split // oficina PB",
            "Chambranas",
            "Circuito Camaras Planta Baja",
            "Creperas",
            "Enfriador de Botellon 1",
            "Enfriador de Botellon 3 (Taller)",
            "Enfriador sushi cake",
            "Extractores (6)",
            "Extintores",
            "Fumigacion",
            "Extintores Fijos",
            "Freidora Duker 1",
            "Freidora Duker 2",
            "Freidora Imperial",
            "Freidora Star Book",
            "Freidora Vulcan 1",
            "Freidora Vulcan 2",
            "Horno Asber",
            "Horno electrico 110v 1",
            "Horno electrico 110v 2",
            "Lava vajillas 1",
            "Lava vajillas 2",
            "Mallas anti ratas",
            "Maquina de cafe 1",
            "Maquina de Cafe 2",
            "Maquina de cafe 3",
            "Maquina de cafe 4",
            "Maquina de cafe 5",
            "Microondas 1",
            "Molino de cafe 1",
            "Molino de cafe 2",
            "Molino de cafe 3",
            "pantallas de vidrio",
            "parrilleras",
            "Peceras Grandes",
            "Planchas a gas",
            "Reverberos dobles",
            "Reverberos sencillos",
            "salamandras",
            "Microondas 3 (Taller)",
            "Tableros",  
        ],
        "Piso 1": [
            "A/A 12000 Btu Ventana ///Dormitorio",
            "A/A 24000 Btu Split 77 Oficina Pa",
            "A/A 8000 BTU Ventana // dormitorio",
            "Bombonas de gas",
            "Circuito Camaras Planta Alta",
            "Enfriador de Botellon 2",
            "Escalinatas", 
            "Horno pizzero Ooni",
            "Microondas 2",
            "Peceras Pequenas",
            "Reverbero de mesa",
            "Plancha Electrica 110v 1",
            "Fumigacion",
            "Plancha Electrica 110v 2",
            "Lamparas de calor 1", 
            "Lamparas de calor 2", 
            "Lamparas de calor 3",
            "Lamparas de calor 4", 
            "Lamparas de calor 5 (Madera)",
            "Lamparas de calor 6 (Madera)",
            "Molino de cafe 4 ", 
            "Molino de cafe 5",     
            "Tableros",     
        ],
        "Nuevo espacio": [     
            "Planchas a gas 1",
            "Planchas a gas 2",
            "Planchas a gas 3",
            "Planchas a gas 4",
            "Planchas a gas 5",
            "Plancha Electrica 220v 1",
            "Plancha Electrica 220v 2",
            "Horno Unox", 
            "Fumigacion",
            "Tableros", 
        ],
        "Taller": null
    },
    "RUICES": {
        "PB": [
            "Aire acondicionado 5 ton Fan coil 1",
            "Aire acondicionado 5 ton Fan coil 2",
            "Armario refrigerado Ursel 1",
            "Cava cuarto de Congelacion 1",
            "Cava cuarto de Congelacion 2",
            "Cava cuarto de Congelacion 3",
            "Cava cuarto de Conservacion 1",
            "Cocina 1 (turca PB)",
            "Empacadora al Vacio 1",
            "Empacadora al Vacio 2",
            "Enfriador de agua 1",
            "Filtro desbarrador",
            "Fumigacion",
            "Freidora 1",
            "Horno Rational a Gas 220 V ph2",
            "Meson refrigerado 2 pta 1 Ursel",
            "Meson refrigerado 3 pta 1 Ursel",
            "MOTOR DE INYECCION DE AIRE 1",
            "Tableros", 
            "Nevera exhibidora",
            "Pela papas",
            "Rebanadora 1",
            "Robocop",
            "Sistema de bombas Hidroneumatico",
            "Tableros Electricos",
            "Tanques de agua de 1000lts (8 un)"
        ],
        "Piso 1": [
            "Abatidor",
            "Aire acondicionado 5 ton Fan Coil 3",
            "Aire Acondicionado 12000 Btu Panaderia",
            "Aire Acondicionado 18000 Btu Entradas",
            "Aire Acondicionado 18000Btu Comedor",
            "AMASADOR 1",
            "Armario refrigerado Ursel 2",
            "Cava cuarto de Conservacion 2",
            "Cocina 2 (turca Piso 1)",
            "Cocina 3 (Iboia Piso 1)",
            "Cortina de Aire 150 cm 220V",
            "Enfriador de agua 2",
            "FERMENTADOR",
            "Freidora 2",
            "Freidora 3",
            "Fumigacion",
            "Horno electrico Balsam 110 V-ph1 1",
            "Horno electrico Balsam 110 V-ph1 2",
            "Horno Rational trifasico 220V ph3",
            "Laminadora",
            "Meson refrigerado 2 pta Balsam 1 Pantry",
            "Meson refrigerado 2 pta Balsam 2 Pantry",
            "Meson refrigerado de gaveta Balsam 1 principal",
            "Meson refrigerado de gaveta Balsam 2 Principal",
            "Meson refrigerado de gaveta Ursel Comida en familia",
            "MOTOR DE INYECCION DE AIRE 2",
            "MOTOR DE INYECCION DE AIRE 3",
            "MOTOR DE INYECCION DE AIRE 4",
            "Plancha a gas 6",
            "Rebanadora 2",
            "Sarten Basculante Industrial",
            "SISTEMA DE DETENCION DE INCENDIO",
            "Tope Frances a Gas 1",
            "Tope Frances a Gas 2",
            "Tableros", 
        ],
        "Piso 2": [
            "Aire acondicionado 5 ton Fan Coil 4",
            "Aire Acondicionado 5 ton Piso techo 1",
            "Aire Acondicionado 12000 Btu Cuarto de IT",
            "Enfriador de agua 3",
            "Tableros", 
            "Fumigacion",
        ],
        "Terraza": [
            "Ductos + trampa grasas",
            "Motor extractor 12000 CFM ",
            "Motor extractor 21000 CFM ",
            "Tableros", 
        ]
    }
};

const SEDE_EQUIPOS = {
    "DEPOSITO": [
        "A/A 12000 BTU split // oficina PB",
        "A/A 12000 Btu Ventana ///Dormitorio",
        "A/A 24000 Btu Split 77 Oficina Pa",
        "A/A 8000 BTU Ventana // dormitorio",
        "Bombonas de gas",
        "Chambranas",
        "Circuito Camaras Planta Alta",
        "Circuito Camaras Planta Baja",
        "Creperas",
        "Enfriador de Botellon 1",
        "Enfriador de Botellon 2",
        "Enfriador de Botellon 3 (Taller)", 
        "Enfriador sushi cake",
        "Escalinatas", 
        "Extractores (6)",
        "Extintores",
        "Extintores Fijos",
        "Freidora Duker 1",
        "Freidora Duker 2",
        "Freidora Imperial",
        "Freidora Star Book",
        "Freidora Vulcan 1",
        "Freidora Vulcan 2",
        "Fumigacion", 
        "Horno Asber",
        "Horno electrico 110v 1",
        "Horno electrico 110v 2",
        "Horno pizzero Ooni",
        "Horno Unox", 
        "Lamparas de calor 1", 
        "Lamparas de calor 2", 
        "Lamparas de calor 3", 
        "Lamparas de calor 4", 
        "Lamparas de calor 5 (Madera)", 
        "Lamparas de calor 6 (Madera)", 
        "Lava vajillas 1",
        "Lava vajillas 2",
        "Mallas anti ratas",
        "Maquina de cafe 1",
        "Maquina de Cafe 2",
        "Maquina de cafe 3",
        "Maquina de cafe 4",
        "Maquina de cafe 5",
        "Microondas 1",
        "Microondas 2",
        "Microondas 3 (Taller)", 
        "Molino de cafe 1",
        "Molino de cafe 2",
        "Molino de cafe 3",
        "Molino de cafe 4", 
        "Molino de cafe 5", 
        "pantallas de vidrio",
        "parrilleras",
        "Peceras Grandes",
        "Peceras Pequenas",
        "Pintura Externa", // SIN ZONA
        "Pintura interna", // SIN ZONA
        "Planchas a gas 1",
        "Planchas a gas 2",
        "Planchas a gas 3",
        "Planchas a gas 4",
        "Planchas a gas 5",
        "Plancha Electrica 220v 1",
        "Plancha Electrica 220v 2",
        "Plancha Electrica 110v 1",
        "Plancha Electrica 110v 2",
        "Reverbero de mesa",
        "Reverberos dobles",
        "Reverberos sencillos",
        "salamandras",
        "Tableros", 
        "Tanques de agua (8000lts)", // SIN ZONA
        "Tanquillas" // SIN ZONA
    ],
    "RUICES": [
        "Abatidor",
        "Aire acondicionado 5 ton Fan coil 1",
        "Aire acondicionado 5 ton Fan coil 2",
        "Aire acondicionado 5 ton Fan Coil 3",
        "Aire acondicionado 5 ton Fan Coil 4",
        "Aire Acondicionado 5 ton Piso techo 1",
        "Aire Acondicionado 12000 Btu Cuarto de IT",
        "Aire Acondicionado 12000 Btu Panaderia",
        "Aire Acondicionado 18000 Btu Entradas",
        "Aire Acondicionado 18000Btu Comedor",
        "AMASADOR 1",
        "Amasador 2", // SIN ZONA
        "Armario refrigerado Ursel 1",
        "Armario refrigerado Ursel 2",
        "Cava cuarto de Congelacion 1",
        "Cava cuarto de Congelacion 2",
        "Cava cuarto de Congelacion 3",
        "Cava cuarto de Conservacion 1",
        "Cava cuarto de Conservacion 2",
        "Cava Cuarto de Basura", // SIN ZONA
        "Cocina 1 (turca PB)",
        "Cocina 2 (turca Piso 1)",
        "Cocina 3 (Iboia Piso 1)",
        "Cortina de Aire 150 cm 220V",
        "Ductos + trampa grasas",
        "Elevador de Carga", // SIN ZONA
        "Empacadora al Vacio 1",
        "Empacadora al Vacio 2",
        "Enfriador de agua 1",
        "Enfriador de agua 2",
        "Enfriador de agua 3",
        "Enfriador de agua 4", // SIN ZONA
        "Extintores", // SIN ZONA
        "FERMENTADOR",
        "Filtro de carbon activado", // SIN ZONA
        "Filtro desbarrador",
        "Freidora 1",
        "Freidora 2",
        "Freidora 3",
        "Fumigacion", 
        "Horno electrico Balsam 110 V-ph1 1",
        "Horno electrico Balsam 110 V-ph1 2",
        "Horno Rational a Gas 220 V ph2",
        "Horno Rational trifasico 220V ph3",
        "Laminadora",
        "Meson refrigerado 2 pta 1 Ursel",
        "Meson refrigerado 2 pta Balsam 1 Pantry",
        "Meson refrigerado 2 pta Balsam 2 Pantry",
        "Meson refrigerado 3 pta 1 Ursel",
        "Meson refrigerado de gaveta Balsam 1 principal",
        "Meson refrigerado de gaveta Balsam 2 Principal",
        "Meson refrigerado de gaveta Ursel Comida en familia",
        "Molino de cafe 6", // SIN ZONA
        "Motor extractor 12000 CFM Planta Baja",
        "Motor extractor 21000 CFM Piso 1",
        "MOTOR DE INYECCION DE AIRE 1",
        "MOTOR DE INYECCION DE AIRE 2",
        "MOTOR DE INYECCION DE AIRE 3",
        "MOTOR DE INYECCION DE AIRE 4",
        "Nevera exhibidora",
        "Pela papas",
        "Plancha a gas 6",
        "Rebanadora 1",
        "Rebanadora 2",
        "Robocop",
        "Santa maria 1 3.5 mts", // SIN ZONA
        "Santa maria 2 3.5 mts", // SIN ZONA
        "Sarten Basculante Industrial",
        "Sistema de bombas Hidroneumatico",
        "SISTEMA DE DETENCION DE INCENDIO",
        "Tableros Electricos",
        "Tanques de agua de 1000lts (8 un)",
        "Tope Frances a Gas 1",
        "Tableros", 
        "Tope Frances a Gas 2"
    ],
    "ALTAMIRA": [
        "A/A 12000 BTU Gerencia",
        "A/A 12000 BTU Lobby",
        "A/A 12000 Btu Sala de Reuniones",
        "A/A 12000 BTU Ventas",
        "A/A Capicua 18000btu",
        "Alfombra Piso",
        "Enfriador de Botellon",
        "Extractores",
        "Extintor 1",
        "Extintor 2",
        "Fumigacion",
        "Limpieza de canaletas",
        "Limpieza de Tanques",
        "Limpieza de Tanquilla",
        "Nevera exhibidora",
        "Pintura Externa",
        "Pintura interna",
        "Revisio Microonda 1",
        "Revisio Microonda 2",
        "Tableros Electricos",
        "Tableros", 
        "Fumigacion",
    ]
};

const MANTENIMIENTOS = [
    "PREVENTIVO",
    "CORRECTIVO",
];


const RUTINA_PREVENTIVO = {
    "Rutina Horno A Gas": [
        { label: "Verificar Entrada de Gas (Regulador y Manguera )", sub: { label: "¿Qué se realizó?", type: "text" } },
        "Lubricar  Perilla Manual de Gas",
        { label: "Lubricar Puertas", sub: { label: "¿Se aplicó grasa?", type: "toggle" } },
        { label: "Ajustar Estructura General", sub: { label: "¿Cuántos tornillos se ajustaron?", type: "number", min: 0, max: 20 } }
    ],
    "Rutina Horno Electrico": [
        "Verificar Tomas Electricas",
        "Verificar y Ajustar Contactos Electricos (internos)",
        "Verificar Funcionamiento del Motor Ventilador  (Descartas Ruidos, Engrasar de ser necesario)",
        "Validar Funcionamientos de Resistencias",
        "Verificar y Ajustar Puertas",
        "Ajustar Estructura General"
        
    ],
    "Rutina Horno Mixto":[
        "Verificar Tomas Electricas",
        "Verificar y Ajustar Contactos Electricos (internos)",
        "Verificar Funcionamiento del Motor Ventilador  (Descartas Ruidos, Engrasar de ser necesario)",
        "Validar Funcionamientos de Resistencias",
        "Verificar y Ajustar Puertas",
        "Ajustar Estructura General",
        "Verificar Entrada de Gas (Descarte de Fugas)",
        "Lubricar Valbulas del Equipo"
    ],
    "Rutina Cava Cuarto/Nevera": [
        "Limpieza con Agua a Presion el Condensador ",
        "Limpieza con Agua a Presion el Evaporador",
        "Mantenimiento de Motores del Condesador ",
        "Mantenimiento de Motores del Evaporador",
        "Verificar Estado de Aislantes Termicos",
        "Ajustes de Puertas",
        "Chequear Cortinas de PVC",
        { label: "Chequeo de Presiones", expand: [
            { label: "P1 (PSI)", type: "number", min: 0, max: 20 },
            { label: "P2 (PSI)", type: "number", min: 0, max: 20 },
        ] },
        {label: "Chequeo de Consumo Electrico", type:"toggle", expand:[
            {label:"L1 (AMP)", type:"number"}, 
            {label:"L2 (AMP)", type:"number"}, 
            {label:"L3 (AMP)", type:"number"}]},
        "Ajuste de Terminales Electricos",
        "Limpieza de Tablero",
        {label:"Limpieza de Bandeja del Evaporador", type:"toggle", expand:[{label:"Realizada", type:"toggle"}]},
        "Chequear Resistencias Electricas"
        
    ],
    "Rutina Peceras": [
        "Chequeo de Papel Translucido (Esta en buen estado si/no)",
        "Verificar que el Vidrio de la Pecera Este en buen Estado",
        "Verificar que no Filtre Agua Por las Uniones de la Pecera",        
    ],
    "Rutina Maquinas de Cafe": [
        "Chequeo de Componentes Electricos",
        "Chequear que la Caldera no Presente Fugas de Agua",
        "Chequear Valvula de Seguridad",
        "Limpieza de los Grupos Dispensadores de Cafe (con producto )",
        "Chequear Manometros de la Valvula de Presion",
        "Limpieza de Porta Filtros (con producto)",
        "Ajustes de Estructura General (Tapas, Patas,Regillas, Magueras, etc)",
        "Limpieza de Boquillas de las Lancetas",
        "Limpieza de Bandeja de Agua",
    ],
    "Rutina Molinos de Cafe": [
        "Chequeo de Componentes Electricos",
        "Limpieza de Cavesales",
        "Verificar Ruidos Extraños en el Motor (Engrasar de ser necesario o remplazar)",
        "Verificar Estado de las Muelas del Molino",
        "Verificar Estado de las Tolvas y Estructura General (Ajustar de ser necesario)",
    ],
    "Rutina Santa Maria": [
        "Limpieza General del Equipo",
        "Lubricacion de Rieles (Formula marina)",
        "Limpieza de Tambor y Fleje (con desengrasante y Agua a Presion)",
        "Lubricaion de Fleje (Formula Marina)",
        "Cheque de Componentes Electricos"
    ],
    "Rutina Escalinatas": [
        "Chequeo de Estado de la Pintura (Pintar de ser necesario)",
        "Verificar Estado de la Madera (Ver que no este dañada o podrida)",
    ],
    "Rutina Reberberos": [
        "Verificar Entrada de Gas (Regulador y Manguera )",
        "Verificar que no Haya Fugas de Gas",
        "Verificar Calidad de la Llama (Graduar entrada de aire de ser necesario)",
        "Lubricar Valvulas ",
        "Verificar Estado de la Estructura General (Pintar de ser necesario)"
    ],
    "Rutina Lamparas de Calor": [
        "Verificar conexiones Electricas",
        "Ajustes de Socates y Bombillos (cambiar de ser necesario)",
        "Verificar Estado de la Estructura General (Pintar de ser necesario)",
    
    ],
    "Rutina Cocinas": [
        "Mantenimiento de Valvulas (lubricacion)",
        " Limpieza de Pilotos y Quemadores",
        "Ajustes de Termo pilas o Termo Cuplas",
        "Verificar Tuercas y Conexciones de Entrada de Gas (Buscar Fugas)",
        "Verificar Entrada de Aire (Ajustar de ser necesario)",

    ],
    "Rutina Lava Vajillas": [
        "Verificar Conexiones Electricas",
        "Verificar quimicos de Limpieza (Secante y Detergente)",
        "Desincrustar el Equipo (con producto desincrustante)",
        "Limpieza externa ",

    ],
    "Rutina Molino de Carne": [
        "Ajustar partes moviles",
        "Chequear componentes electricos",
        "verificar rodamiento de motor (Lubricar de ser necesario)",
        "Lubricar cadena"
    ],
    "Rutina Laminadora": [
        "Chequear componentes electricos",
        "Verificar estado de bandas y rodillos",
        "Limpieza interna con aire a presion"
    ],
    "Rutina Amasadora": [
        "Verificar componentes electricos",
        "Chequar Tension de correa (cambiar de ser necesario)",
        "Chequeo de Motor (Descartar ruidos extraños)"
    ],
    "Rutina Planchas Electricas": [
        "Chequeo de componentes electricos",
        "Ajustes de estructura general",
        "Verificar que trabajen las resistencia"
    ],
    "Rutina Enfriadores de Agua": [
        "Revision de componentes electricos",
        "Ajustes de estrutura",
        "Limpieza de valvulas dispensadoras de agua (cambiar de ser necesario)",
        
    ],
    "Rutina Motores de Inyeccion ": [
        "Cheqqueo de correa (cambiar de ser necesario",
        "Limpieza de aspas ",
        "Limpieza de rejillas ",
        "Chequeo y ajustes de componentes electricos",
        "Chequear motor electrico (ruidos extraños en rodamiento)"
    ],
    "Rutina Motores de Extracion": [
        "Chequeo y ajuste de correa",
        "Lubricar rodamientos",
        "Chequeo de motor electrico",
        "Ajustar sistema de amortiguacion ",
        "Chequo y ajustes de componentes electricos",
        "Chequeo de Rodamiento de turbina"
    ],
    "Rutina Freidora": [
        "Chequeo de llama de piloto (destapar de ser necesario)",
        "Chequeo de encendido",
        "Limpieza de quemadores ",
        "limpieza de regulador de gas",
        "Chequeo de fuga de gas",
        "Ajuste general de estructura"
    ],
    "Rutina Aires Acondicionados": [
        "Limpieza con Agua a Presion el Condensador ",
        "Limpieza con Agua a Presion el Evaporador",
        "Mantenimiento de Motores del Condesador ",
        "Mantenimiento de Motores del Evaporador",
        "Verificar Estado de Aislantes Termicos",
        { label: "Chequeo de Presiones", expand: [
            { label: "P1 (PSI)", type: "number"},
            { label: "P2 (PSI)", type: "number"}
        ] },
        {label: "Chequeo de Consumo Electrico", type:"toggle", expand:[
            {label:"L1 (AMP)", type:"number"}, 
            {label:"L2 (AMP)", type:"number"}, 
            {label:"L3 (AMP)", type:"number"}]},
        "Ajuste de Terminales Electricos",
        "Limpieza de Tarjeta",
        "Limpieza de Bandeja del Evaporador"
    ],

    "Rutina Hidroneumatico": [
        "Chequeo de bomba ",
        "Limpieza de tanque",
        "Chequeo de valvula",
        "Chequeo de flotante"
    ],
    "Rutina Tablero Electrico": [
        "Chequeo y ajustes de componentes electricos",
        "Limpieza Interna de tablero"
    ],
    "Rutina Empacadoras al Vacio": [
        "Cambio de Aceite",
        "Chequeo y ajustes de componentes electricos",
        "Limpieza y lubricacion de pistones neumaticos",
        "Chequeo de cinta teflon (cambiar de ser necesario)",
        "Chequeo de estado de sello compuerta (Cambiar de ser necesario)",
        "Limpieza de barras de sellado"
    ],
    "Rutina Sarten Basculante ": [],
    "Rutina Luminarias": [
        "Chequeo de tubos oo bombillas",
        "Chequeo de componentes Electricos (socates)",
        "Limpieza externa de carcasa y acrilico"

    ],
    "Rutina Seguridad":[
        "Chequeo de fecha de vencimiento Extintores",
        "Chequeo de cerco electrico",
        "chequeo de sistema de deteccion de incendios"
    ]
    
};

const RUTINA_CORRECTIVO = {
    "Rutina Correctiva": [
        "Plomeria",
        "Soldadura",
        "Electricidad",
        "Refigeracion",
        "Carpinteria",
        "Pintura",
        "Albanileria",
        ""
    ]
};

const RUTINA_TALLER = {
    "Actividades de Semaneros": [
        {
            label: "Tanques",
            type: "toggle",
            expand: [
                { label: "Llenos", type: "number" },
                { label: "Vacios", type: "number", min: 0, max: 20 },
                {label: "Entrada de Agua de la Calle", type: "toggle"},
                { label: "Pedir cisterna", type: "toggle" }
            ]
        },
        {
            label: "Bombonas",
            type: "toggle",
            expand: [
                { label: "Llenas", type: "number" },
                { label: "Vacias", type: "number" },
                { label: "Medias", type: "number" }
            ]
        },
        {
            label : "Aceites", type : "toggle",
            expand:[
                {label:"Quemados", type: "number"},
                {label:"Buenos", type: "number"},
                {label:"Vender", type: "toggle", 
                    expand:[ 
                        {label:"Cuanto", type: "number"},
                        {label: "N° de Factura", type: "Text"}
                    ]
                }
            ]
        }
    ]
};

const EQUIPO_RUTINA = {
    "A/A 12000 BTU split // oficina PB": "Rutina Aires Acondicionados",
    "A/A 12000 Btu Ventana ///Dormitorio": "Rutina Aires Acondicionados",
    "A/A 24000 Btu Split 77 Oficina Pa": "Rutina Aires Acondicionados",
    "A/A 8000 BTU Ventana // dormitorio": "Rutina Aires Acondicionados",
    "A/A 12000 BTU Gerencia": "Rutina Aires Acondicionados",
    "A/A 12000 BTU Lobby": "Rutina Aires Acondicionados",
    "A/A 12000 Btu Sala de Reuniones": "Rutina Aires Acondicionados",
    "A/A 12000 BTU Ventas": "Rutina Aires Acondicionados",
    "A/A Capicua 18000btu": "Rutina Aires Acondicionados",
    "Aire acondicionado 5 ton Fan coil 1": "Rutina Aires Acondicionados",
    "Aire acondicionado 5 ton Fan coil 2": "Rutina Aires Acondicionados",
    "Aire acondicionado 5 ton Fan Coil 3": "Rutina Aires Acondicionados",
    "Aire acondicionado 5 ton Fan Coil 4": "Rutina Aires Acondicionados",
    "Aire Acondicionado 5 ton Piso techo 1": "Rutina Aires Acondicionados",
    "Aire Acondicionado 18000 Btu Entradas": "Rutina Aires Acondicionados",
    "Aire Acondicionado 12000 Btu Panaderia": "Rutina Aires Acondicionados",
    "Aire Acondicionado 18000Btu Comedor": "Rutina Aires Acondicionados",
    "Aire Acondicionado 12000 Btu Cuarto de IT": "Rutina Aires Acondicionados",
    "Armario refrigerado Ursel 1": "Rutina Cava Cuarto/Nevera",
    "Armario refrigerado Ursel 2": "Rutina Cava Cuarto/Nevera",
    "Abatidor": "Rutina Cava Cuarto/Nevera",
    "Alfombra Piso": "Rutina Area Comun",
    "Amasador 2": "Rutina Amasadora",
    "AMASADOR 1": "Rutina Amasadora",
    "Bombonas de gas": "Rutina Cocina",
    "Chambranas": "Rutina Lamparas de Calor",
    "Circuito Camaras Planta Baja": "Rutina Area Comun",
    "Circuito Camaras Planta Alta": "Rutina Area Comun",
    "Creperas": "Rutina Cocina",
    "Cava cuarto de Congelacion 1": "Rutina Cava Cuarto/Nevera",
    "Cava cuarto de Congelacion 2": "Rutina Cava Cuarto/Nevera",
    "Cava cuarto de Congelacion 3": "Rutina Cava Cuarto/Nevera",
    "Cava cuarto de Conservacion 1": "Rutina Cava Cuarto/Nevera",
    "Cava cuarto de Conservacion 2": "Rutina Cava Cuarto/Nevera",
    "Cava Cuarto de Basura": "Rutina Cava Cuarto/Nevera",
    "Cocina 1 (turca PB)": "Rutina Cocinas",
    "Cocina 2 (turca Piso 1)" : "Rutina Cocinas",
    "Cocina 3 (Iboia Piso 1)": "Rutina Cocinas",
    "Cortina de Aire 150 cm 220V": "Rutina Area Comun",
    "Enfriador sushi cake": "Rutina Cava Cuarto/Nevera",
    "Extintores": "Rutina Seguridad",
    "Extintores Fijos": "Rutina Seguridad",
    "Extractores (6)": "Rutina Cocina",
    "Enfriador de Botellon 1": "Rutina Enfriadores de Agua",
    "Enfriador de Botellon 2": "Rutina Enfriadores de Agua",
    "Enfriador de Botellon 3": "Rutina Enfriadores de Agua",
    "Empacadora al Vacio 1": "Rutina Empacadoras al Vacio",
    "Empacadora al Vacio 2": "Rutina Empacadoras al Vacio",
    "Extintores": "Rutina Seguridad",
    "Enfriador de agua 1": "Rutina Enfriadores de Agua",
    "Enfriador de agua 2": "Rutina Enfriadores de Agua",
    "Enfriador de agua 3": "Rutina Enfriadores de Agua",
    "Enfriador de agua 4": "Rutina Enfriadores de Agua",
    "Escalinatas": "Rutina Escalinatas",
    "Extintor 1": "Rutina Seguridad",
    "Extintor 2": "Rutina Seguridad",
    "Enfriador de Botellon": "Rutina Almacen",
    "Extractores": "Rutina Area Comun",
    "Elevador de Carga": "Rutina Area Comun",
    "Freidora Imperial": "Rutina Freidora",
    "Freidora Star Book": "Rutina Freidora",
    "Freidora Vulcan 1": "Rutina Freidora",
    "Freidora Vulcan 2": "Rutina Freidora",
    "Freidora Duker 1": "Rutina Freidora",
    "Freidora Duker 2": "Rutina Freidora",
    "Freidora 1": "Rutina Freidora",
    "Freidora 2": "Rutina Freidora",
    "Freidora 3": "Rutina Freidora",
    "Fumigacion": "Rutina Seguridad",
    "Fumigacion": "Rutina Seguridad",
    "Filtro desbarrador": "...",
    "Filtro de carbon activado": "...",
    "FERMENTADOR": "Rutina Cocina",
    "Fumigacion": "Rutina Seguridad",
    "Horno Asber": "Rutina Horno A Gas",
    "Horno Unox": "Rutina Horno Electrico",
    "Horno electrico 110v 1": "Rutina Horno Electrico",
    "Horno electrico 110v 2": "Rutina Horno Electrico",
    "Horno Rational a Gas 220 V ph2": "Rutina Horno Mixto",
    "Horno Rational trifasico 220V ph3": "Rutina Horno Electrico",
    "Horno electrico Balsam 110 V-ph1 1": "Rutina Horno Mixto",
    "Horno electrico Balsam 110 V-ph1 2": "Rutina Horno Mixto",
    "Horno pizzero Ooni": "Rutina Horno A Gas",    
    "Mallas anti ratas": "Rutina Seguridad",
    "Maquina de cafe 1": "Rutina Maquinas de Cafe",
    "Maquina de Cafe 2": "Rutina Maquinas de Cafe",
    "Maquina de cafe 3": "Rutina Maquinas de Cafe",
    "Microondas 1": "Rutina Cocina",
    "Microondas 2": "Rutina Cocina",
    "Microondas 3": "Rutina Cocina",
    "Molino de cafe 1": "Rutina Molinos de Cafe",
    "Molino de cafe 2": "Rutina Molinos de Cafe",
    "Molino de cafe 3": "Rutina Molinos de Cafe",
    "Molino de cafe 4": "Rutina Molinos de Cafe",
    "Molino de cafe 5": "Rutina Molinos de Cafe",
    "Molino de cafe 6": "Rutina Molinos de Cafe",
    "Meson refrigerado 2 pta 1 Ursel": "Rutina Almacen",
    "Meson refrigerado 3 pta 1 Ursel": "Rutina Almacen",
    "Meson refrigerado 2 pta Balsam 1 Pantry": "Rutina Almacen",
    "Meson refrigerado 2 pta Balsam 2 Pantry": "Rutina Almacen",
    "Meson refrigerado de gaveta Balsam 1 principal": "Rutina Almacen",
    "Meson refrigerado de gaveta Balsam 2 Principal": "Rutina Almacen",
    "Meson refrigerado de gaveta Ursel Comida en familia": "Rutina Almacen",
    "Maquina de cafe 4": "Rutina Maquinas de Cafe",
    "Maquina de cafe 5": "Rutina Maquinas de Cafe",
    "Motor extractor 12000 CFM ": "Rutina Motores de Extracion",
    "Motor extractor 21000 CFM ": "Rutina Motores de Extracion",
    "MOTOR DE INYECCION DE AIRE 1": "Rutina Motores de Inyeccion ",
    "MOTOR DE INYECCION DE AIRE 2": "Rutina Motores de Inyeccion ",
    "MOTOR DE INYECCION DE AIRE 3": "Rutina Motores de Inyeccion ",
    "MOTOR DE INYECCION DE AIRE 4": "Rutina Motores de Inyeccion ",
    "Nevera exhibidora": "Rutina Cava Cuarto/Nevera",
    "Nevera exhibidora": "Rutina Cava Cuarto/Nevera",
    "parrilleras": "Rutina Cocina",

    "Planchas a gas 1": "Rutina Reberberos",
    "Planchas a gas 2": "Rutina Reberberos",
    "Planchas a gas 3": "Rutina Reberberos",
    "Planchas a gas 4": "Rutina Reberberos",
    "Planchas a gas 5": "Rutina Reberberos",
    "Plancha Electrica 220v 1": "Rutina Planchas Electricas",
    "Plancha Electrica 220v 2": "Rutina Planchas Electricas",
    "Plancha Electrica 110v 1": "Rutina Planchas Electricas",
    "Plancha Electrica 110v 2": "Rutina Planchas Electricas",
    "Peceras Grandes": "Rutina Peceras",
    "Peceras Pequenas": "Rutina Peceras",
    "Pela papas": "Rutina Cocina",
    "Plancha a gas 6": "Rutina Reberberos",

    "Reverberos dobles": "Rutina Reberberos",
    "Reverberos sencillos": "Rutina Reberberos",
    "Rebanadora 1": "Rutina Cocina",
    "Rebanadora 2": "Rutina Cocina",
    "Robocop": "Rutina Cocina",
    "Revisio Microonda 1": "Rutina Cocina",
    "Revisio Microonda 2": "Rutina Cocina",
    "Tanques de agua (8000lts)": "Rutina Hidroneumatico",
    "Tanquillas": "Rutina Tanquilla",
    "Tope Frances a Gas 1": "Rutina Cocinas",
    "Tope Frances a Gas 2": "Rutina Cocinas",
    "Tableros": "Rutina Tablero Electrico",
    "Tanques de agua de 1000lts (8 un)": "Rutina Hidroneumatico",
    "Tableros Electricos": "Rutina Tablero Electrico",
    "Tableros Electricos": "Rutina Tablero Electrico",
    "Sistema de bombas Hidroneumatico": "Rutina Hidroneumatico",
    "salamandras": "Rutina Horno A Gas",
    "Santa maria 1 3.5 mts": "Rutina Santa Maria",
    "Santa maria 2 3.5 mts": "Rutina Santa Maria",
    "SISTEMA DE DETENCION DE INCENDIO": "Rutina de Seguridad",
    "Sarten Basculante Industrial": "Rutina Cocina",
    "Reverbero de mesa": "Rutina Reberberos",
    "Lamparas de calor 1": "Rutina Lamparas de Calor",
    "Lamparas de calor 2": "Rutina Lamparas de Calor",
    "Lamparas de calor 3": "Rutina Lamparas de Calor",
    "Lamparas de calor 4": "Rutina Lamparas de Calor",
    "Lamparas de calor 5 (Madera)": "Rutina Lamparas de Calor",
    "Lamparas de calor 6 (Madera)": "Rutina Lamparas de Calor",
    "Limpieza de canaletas": "",
    "Limpieza de Tanques": "Rutina Hidroneumatico",
    "Limpieza de Tanquilla": "Rutina Almacen",
    "Laminadora": "Rutina Laminadora",
    "Lava vajillas 1": "Rutina Lava Vajillas",
    "Lava vajillas 2": "Rutina Lava Vajillas",
    "Ductos + trampa grasas": "",

};

const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyXeT3EqWyyUcAs7ZeXUBYUrs2wR-Ko2hBjOGLDgzMQVScYvRn8g6nwkeQrmC8WeoxTaQ/exec";

let rutinaActual = [];
let nombreRutinaActual = "";
let tecnicoNombre = "";
let esTaller = false;
let esDinamica = false;
let empleadoNombre = "";
let averiaImagenes = [];
let averiaEnviando = false;
let resolucionEnviando = false;
let equipoDinamicoActual = "";
let esCreadorDinamica = true;
let rutinasDinamicasGuardadas = {};
let averiasDisponibles = [];
let averiasCargadas = false;
let resolucionActualNumero = "";
let resolucionImagenes = [];

function postJSON(body) {
    return fetch(APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(body)
    }).then(function (r) {
        return r.text().catch(function () { return ""; });
    });
}

function cargarAverias() {
    return fetch(APPS_SCRIPT_URL + "?accion=averias")
        .then(function (r) { return r.json(); })
        .then(function (data) {
            if (Array.isArray(data)) {
                averiasDisponibles = data;
                averiasCargadas = true;
            } else if (data && Array.isArray(data.averias)) {
                averiasDisponibles = data.averias;
                averiasCargadas = true;
            }
        })
        .catch(function () { averiasCargadas = false; });
}

function buscarAveriaLocal(codigo) {
    const num = String(codigo || "").trim().toLowerCase();
    if (!num) return null;
    const buscar = function () {
        for (const a of averiasDisponibles) {
            if (String(a.numero || "").trim().toLowerCase() === num) return a;
        }
        return null;
    };
    if (averiasDisponibles.length > 0) return buscar();
    if (!averiasCargadas) return cargarAverias().then(buscar);
    return buscar();
}

function guardarRutinaDinamica(equipo, pasos) {
    if (!equipo) return;
    const actual = getRutinaDinamicaGuardada(equipo);
    const creadoPor = (actual && actual.creadoPor) || tecnicoNombre || "";
    const dato = { pasos: pasos.slice(), creadoPor: creadoPor };
    rutinasDinamicasGuardadas[equipo] = dato;
    try {
        const stored = JSON.parse(localStorage.getItem("rutinasDinamicas") || "{}");
        stored[equipo] = dato;
        localStorage.setItem("rutinasDinamicas", JSON.stringify(stored));
    } catch (err) {}
    try {
        fetch(APPS_SCRIPT_URL, {
            method: "POST",
            mode: "no-cors",
            body: JSON.stringify({ tipo: "rutina", equipo: equipo, pasos: pasos, creadoPor: creadoPor })
        }).catch(() => {});
    } catch (err) {}
}

function getRutinaDinamicaGuardada(equipo) {
    let dato = rutinasDinamicasGuardadas[equipo];
    if (dato && dato.pasos && dato.pasos.length > 0) return dato;
    try {
        const stored = JSON.parse(localStorage.getItem("rutinasDinamicas") || "{}");
        const v = stored[equipo];
        if (v) {
            dato = Array.isArray(v)
                ? { pasos: v.slice(), creadoPor: "" }
                : { pasos: (v.pasos || []).slice(), creadoPor: v.creadoPor || "" };
            if (dato.pasos.length > 0) {
                rutinasDinamicasGuardadas[equipo] = dato;
                return dato;
            }
        }
    } catch (err) {}
    return null;
}

function cargarRutinasDinamicas() {
    return fetch(APPS_SCRIPT_URL + "?accion=rutinas")
        .then(r => r.json())
        .then(data => {
            if (!data) return;
            let stored = {};
            try {
                stored = JSON.parse(localStorage.getItem("rutinasDinamicas") || "{}");
            } catch (err) {}
            const cambios = {};
            for (const eq in data) {
                const v = data[eq];
                const bPasos = Array.isArray(v) ? v.slice() : (v.pasos || []).slice();
                if (bPasos.length === 0) continue;
                const bCreado = Array.isArray(v) ? "" : (v.creadoPor || "");
                const local = stored[eq];
                const lPasos = local && (Array.isArray(local) ? local.slice() : (local.pasos || []).slice());
                const lCreado = local && !Array.isArray(local) ? (local.creadoPor || "") : "";
                const creadoPor = bCreado || lCreado;
                const pasos = bPasos.length >= (lPasos || []).length ? bPasos : lPasos;
                const dato = { pasos: pasos.slice(), creadoPor: creadoPor };
                cambios[eq] = dato;
                stored[eq] = dato;
            }
            for (const eq in cambios) {
                rutinasDinamicasGuardadas[eq] = cambios[eq];
            }
            try {
                localStorage.setItem("rutinasDinamicas", JSON.stringify(stored));
            } catch (err) {}
        })
        .catch(() => {});
}

document.addEventListener("DOMContentLoaded", () => {
    cargarRutinasDinamicas();
    cargarAverias();
    cargarPersonal();
    document.getElementById("btnLogin").addEventListener("click", loginTecnico);
    document.getElementById("codigoTecnico").addEventListener("keydown", function (e) {
        if (e.key === "Enter") loginTecnico();
    });

    document.getElementById("btnPaso3").addEventListener("click", irAlPaso3);

    document.getElementById("btnAtras3").addEventListener("click", function () {
        document.getElementById("paso3").style.display = "none";
        document.getElementById("paso2").style.display = "block";
    });

    document.getElementById("averiaForm").addEventListener("submit", enviarAveria);

    document.getElementById("resolucionForm").addEventListener("submit", enviarResolucion);
    document.getElementById("btnAtrasResolucion").addEventListener("click", volverAlLogin);
    document.getElementById("btnAsignarTecnico").addEventListener("click", function() { asignarTecnicoWeb(); });
    document.getElementById("rImagenes").addEventListener("change", async function () {
        const files = Array.from(this.files);
        if (files.length > 2) {
            alert("Puedes adjuntar un maximo de 2 fotos.");
        }
        resolucionImagenes = [];
        for (const file of files.slice(0, 2)) {
            try {
                resolucionImagenes.push(await fileToImagen(file));
            } catch (err) {
                alert(err.message);
            }
        }
        renderResolucionImagenesPreview();
    });

    document.getElementById("aSedes").addEventListener("change", function () {
        const sede = this.value;
        const zonas = getAveriaZonas(sede);
        const zonaGroup = document.getElementById("aZonaGroup");
        const zonaSelect = document.getElementById("aZona");
        const equipoGroup = document.getElementById("aEquipoGroup");
        const equipoLibreGroup = document.getElementById("aEquipoLibreGroup");
        const equipoExteriorGroup = document.getElementById("aEquipoExteriorGroup");
        const equipoOtroGroup = document.getElementById("aEquipoOtroGroup");

        equipoExteriorGroup.style.display = "none";
        document.getElementById("aEquipoExterior").value = "";
        equipoOtroGroup.style.display = "none";
        document.getElementById("aEquipoOtro").value = "";

        if (sede === "EVENTO") {
            zonaGroup.style.display = "none";
            zonaSelect.value = "";
            equipoGroup.style.display = "none";
            document.getElementById("aEquipo").innerHTML = '<option value="" disabled selected>Seleccionar equipo...</option>';
            equipoLibreGroup.style.display = "block";
            document.getElementById("aEquipoLibre").value = "";
            document.getElementById("aEventoLibre").value = "";
            return;
        }

        equipoGroup.style.display = "block";
        equipoLibreGroup.style.display = "none";
        document.getElementById("aEquipoLibre").value = "";
        document.getElementById("aEventoLibre").value = "";

        if (zonas.length > 0) {
            zonaGroup.style.display = "block";
            populateSelect("aZona", zonas);
            document.getElementById("aEquipo").innerHTML = '<option value="" disabled selected>Seleccionar equipo...</option>';
        } else {
            zonaGroup.style.display = "none";
            zonaSelect.value = "";
            const equipos = SEDE_EQUIPOS[sede] || [];
            populateSelect("aEquipo", equipos, true);
        }
    });

    document.getElementById("aZona").addEventListener("change", function () {
        const sede = document.getElementById("aSedes").value;
        const zona = this.value;
        const equipoGroup = document.getElementById("aEquipoGroup");
        const equipoExteriorGroup = document.getElementById("aEquipoExteriorGroup");
        const equipoOtroGroup = document.getElementById("aEquipoOtroGroup");

        equipoOtroGroup.style.display = "none";
        document.getElementById("aEquipoOtro").value = "";

        if (zona === "Exterior") {
            equipoGroup.style.display = "none";
            equipoExteriorGroup.style.display = "block";
            document.getElementById("aEquipoExterior").value = "";
            return;
        }
        equipoExteriorGroup.style.display = "none";
        equipoGroup.style.display = "block";
        if (zona === "Otros") {
            populateSelect("aEquipo", SEDE_EQUIPOS[sede] || [], true);
            return;
        }
        const zonaData = ZONA_EQUIPOS[sede]?.[zona] || [];
        if (zonaData.length > 0) {
            populateSelect("aEquipo", zonaData, true);
        } else {
            populateSelect("aEquipo", SEDE_EQUIPOS[sede] || [], true);
        }
    });

    document.getElementById("aEquipo").addEventListener("change", function () {
        const equipoOtroGroup = document.getElementById("aEquipoOtroGroup");
        if (this.value === "__OTRO__") {
            equipoOtroGroup.style.display = "block";
            document.getElementById("aEquipoOtro").value = "";
            document.getElementById("aEquipoOtro").focus();
        } else {
            equipoOtroGroup.style.display = "none";
            document.getElementById("aEquipoOtro").value = "";
        }
    });

    document.getElementById("aImagenes").addEventListener("change", async function () {
        const files = Array.from(this.files);
        if (files.length > 2) {
            alert("Puedes adjuntar un maximo de 2 fotos.");
        }
        averiaImagenes = [];
        for (const file of files.slice(0, 2)) {
            try {
                averiaImagenes.push(await fileToImagen(file));
            } catch (err) {
                alert(err.message);
            }
        }
        renderImagenesPreview();
    });

    document.getElementById("sedes").addEventListener("change", function () {
        const sede = this.value;
        const zonas = SEDE_ZONAS[sede] || [];
        const zonaGroup = document.getElementById("zonaGroup");
        const zonaSelect = document.getElementById("zona");
        const eqExteriorGroup = document.getElementById("equipoExteriorGroup");

        eqExteriorGroup.style.display = "none";
        document.getElementById("equipoExterior").value = "";
        document.getElementById("equipo").required = true;

        if (zonas.length > 0) {
            zonaGroup.style.display = "block";
            populateSelect("zona", zonas);
            document.getElementById("equipo").innerHTML = '<option value="" disabled selected>Seleccionar equipo...</option>';
        } else {
            zonaGroup.style.display = "none";
            zonaSelect.value = "";
            const equipos = SEDE_EQUIPOS[sede] || [];
            populateSelect("equipo", equipos, true);
        }
        document.getElementById("equipo").required = true;
        document.getElementById("mantenimiento").required = true;
        document.getElementById("checkinsContainer").innerHTML = "";
        rutinaActual = [];
        nombreRutinaActual = "";
        esTaller = false;
        esDinamica = false;
        resetPaso3();
        document.getElementById("paso2").style.display = "none";
        document.getElementById("paso1").style.display = "block";
    });

    document.getElementById("zona").addEventListener("change", function () {
        const sede = document.getElementById("sedes").value;
        const zona = this.value;
        const eqGroup = document.getElementById("equipoGroup");
        const eqExteriorGroup = document.getElementById("equipoExteriorGroup");

        if (zona === "Taller") {
            eqExteriorGroup.style.display = "none";
            eqGroup.style.display = "none";
            document.getElementById("mantenimientoGroup").style.display = "none";
            document.getElementById("formActions").style.display = "flex";
            document.getElementById("equipo").required = false;
            document.getElementById("mantenimiento").required = false;
            esTaller = true;
        } else if (zona === "Exterior") {
            eqGroup.style.display = "none";
            eqExteriorGroup.style.display = "block";
            document.getElementById("equipoExterior").value = "";
            document.getElementById("mantenimientoGroup").style.display = "block";
            document.getElementById("equipo").required = false;
            document.getElementById("mantenimiento").required = true;
            esTaller = false;
        } else {
            eqExteriorGroup.style.display = "none";
            eqGroup.style.display = "block";
            document.getElementById("mantenimientoGroup").style.display = "block";
            document.getElementById("equipo").required = true;
            document.getElementById("mantenimiento").required = true;
            esTaller = false;
            if (zona === "Otros") {
                populateSelect("equipo", SEDE_EQUIPOS[sede] || [], true);
            } else {
            const zonaData = ZONA_EQUIPOS[sede]?.[zona] || [];
            if (zonaData.length > 0) {
                    populateSelect("equipo", zonaData, true);
            } else {
                    populateSelect("equipo", SEDE_EQUIPOS[sede] || [], true);
                }
            }
        }
        document.getElementById("checkinsContainer").innerHTML = "";
        rutinaActual = [];
        nombreRutinaActual = "";
        esDinamica = false;
        resetPaso3();
        document.getElementById("paso2").style.display = "none";
        document.getElementById("paso1").style.display = "block";
    });

    document.getElementById("equipo").addEventListener("change", function () {
        const equipoOtroGroup = document.getElementById("equipoOtroGroup");
        if (this.value === "__OTRO__") {
            equipoOtroGroup.style.display = "block";
            document.getElementById("equipoOtro").value = "";
            document.getElementById("equipoOtro").focus();
        } else {
            equipoOtroGroup.style.display = "none";
            document.getElementById("equipoOtro").value = "";
        }
    });

    document.getElementById("btnSiguiente").addEventListener("click", irAlPaso2);

    document.getElementById("btnAtras").addEventListener("click", function () {
        document.getElementById("paso2").style.display = "none";
        document.getElementById("paso1").style.display = "block";
    });

    document.getElementById("checkinForm").addEventListener("submit", enviarFormulario);

    var urlParams = new URLSearchParams(window.location.search);
    var avParam = urlParams.get("av");
    if (avParam) {
        mostrarInterfazAsignar(avParam);
    }
});

function mostrarInterfazAsignar(numeroAv) {
    document.getElementById("loginSection").style.display = "none";
    document.getElementById("checkinForm").style.display = "none";
    document.getElementById("averiaForm").style.display = "none";
    document.getElementById("resolucionForm").style.display = "none";
    document.getElementById("asignarSection").style.display = "block";
    document.getElementById("asignarInfo").textContent = "Averia: " + numeroAv;

    window._avAsignar = numeroAv;

    cargarPersonal().then(function() {
        var sel = document.getElementById("selTecnicoAsignar");
        sel.innerHTML = '<option value="">Seleccionar tecnico...</option>';
        var found = false;
        datosPersonal.forEach(function(p) {
            if (p.tipo === "Tecnico") {
                var opt = document.createElement("option");
                opt.value = p.nombre + "|" + p.whatsapp + "|" + p.correo;
                opt.textContent = p.nombre;
                sel.appendChild(opt);
                found = true;
            }
        });
        if (found) {
            document.getElementById("btnAsignarTecnico").disabled = false;
        } else {
            sel.innerHTML = '<option value="">No hay tecnicos disponibles</option>';
        }
    });
}

function asignarTecnicoWeb() {
    var sel = document.getElementById("selTecnicoAsignar");
    var val = sel.value;
    if (!val) {
        alert("Selecciona un tecnico");
        return;
    }
    var p = val.split("|");
    var numeroAv = window._avAsignar;
    var btn = document.getElementById("btnAsignarTecnico");
    var msg = document.getElementById("asignarMsg");
    var waDiv = document.getElementById("whatsappLink");

    btn.disabled = true;
    btn.textContent = "Asignando...";

    fetch(APPS_SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify({ tipo: "asignar_averia", numero: numeroAv, tecnicoNombre: p[0], tecnicoWhatsapp: p[1], tecnicoCorreo: p[2] })
    }).then(function(r) { return r.json(); }).then(function(result) {
        if (result.status === "ok") {
            msg.innerHTML = '<div style="color:#2e7d32;font-weight:600;">Tecnico asignado correctamente</div>';
            if (result.urlWhatsApp) {
                waDiv.style.display = "block";
                waDiv.innerHTML = '<a href="' + result.urlWhatsApp + '" target="_blank" style="display:inline-block;background:#25d366;color:#fff;padding:10px 20px;border-radius:8px;text-decoration:none;font-weight:600;width:100%;text-align:center;">Abrir WhatsApp y notificar</a>';
            }
        } else {
            msg.innerHTML = '<div style="color:#d32f2f;font-weight:600;">Error al asignar</div>';
            btn.disabled = false;
            btn.textContent = "Asignar y Notificar";
        }
    }).catch(function(err) {
        msg.innerHTML = '<div style="color:#d32f2f;font-weight:600;">Error de conexion</div>';
        btn.disabled = false;
        btn.textContent = "Asignar y Notificar";
    });
}

function irAlPaso2() {
    const sedes = document.getElementById("sedes").value;
    const fecha = document.getElementById("fecha").value;
    const hora = obtenerHora();
    const zona = document.getElementById("zona").value;
    const esExterior = !esTaller && zona === "Exterior";
    const equipoSelect = document.getElementById("equipo").value;
    const esOtro = equipoSelect === "__OTRO__";
    const equipo = esTaller
        ? "Taller"
        : esExterior
        ? document.getElementById("equipoExterior").value.trim()
        : esOtro
        ? document.getElementById("equipoOtro").value.trim()
        : equipoSelect;
    const mantenimiento = esTaller ? "" : document.getElementById("mantenimiento").value;

    if (!sedes || !fecha || !hora) {
        alert("Por favor completa todos los campos antes de continuar.");
        return;
    }
    if (!esTaller && !mantenimiento) {
        alert("Selecciona un tipo de mantenimiento.");
        return;
    }
    const zonas = SEDE_ZONAS[sedes] || [];
    if (zonas.length > 0 && !zona) {
        alert("Selecciona una zona.");
        return;
    }
    if (!esTaller && !equipo) {
        alert(esExterior ? "Escribe el nombre del equipo." : esOtro ? "Escribe el nombre del equipo." : "Selecciona un equipo.");
        return;
    }

    renderRutina(equipo, mantenimiento);

    if (!esDinamica && (!rutinaActual || (Array.isArray(rutinaActual) && rutinaActual.length === 0))) {
        alert("El equipo seleccionado no tiene rutina definida.");
        return;
    }

    document.getElementById("paso1").style.display = "none";
    document.getElementById("paso2").style.display = "block";
}

function loginTecnico() {
    const codigo = document.getElementById("codigoTecnico").value.trim();
    const errorEl = document.getElementById("loginError");

    const procesarLogin = function (av) {
        if (av) {
            if (av.resuelto) {
                errorEl.textContent = "La averia " + av.numero + " ya fue resuelta.";
                errorEl.style.display = "block";
                document.getElementById("codigoTecnico").value = "";
                return;
            }
            if (av.asignado) {
                tecnicoNombre = av.asignado;
                abrirResolucion(av);
                return;
            }
            abrirResolucion(av);
            return;
        }

        var esMantenimiento = /2$/.test(codigo) && /^\d+$/.test(codigo);
        var cedulaBusqueda = esMantenimiento ? codigo.slice(0, -1) : codigo;

        var personal = buscarPersonalPorCedula(cedulaBusqueda);

        if (personal && personal.tipo === "Tecnico" && esMantenimiento) {
            tecnicoNombre = personal.nombre;
            errorEl.style.display = "none";
            document.getElementById("loginSection").style.display = "none";
            document.getElementById("checkinForm").style.display = "block";
            document.getElementById("tecnicoInfo").textContent = "Tecnico: " + tecnicoNombre;
            cargarEquipos().then(function() {
                populateSelect("sedes", SEDES_CHECKIN);
                populateSelect("mantenimiento", MANTENIMIENTOS);
                populateTimeSelects();
            });
            return;
        }
        if (personal && personal.tipo === "Tecnico" && !esMantenimiento) {
            tecnicoNombre = personal.nombre;
            errorEl.style.display = "none";
            document.getElementById("loginSection").style.display = "none";
            document.getElementById("averiaForm").style.display = "block";
            document.getElementById("empleadoInfo").textContent = "Tecnico: " + tecnicoNombre;
            cargarEquipos().then(function() {
                populateSelect("aSedes", SEDES);
                populateTimeSelects("a");
            });
            return;
        }
        if (personal && personal.tipo === "Empleado") {
            empleadoNombre = personal.nombre;
            errorEl.style.display = "none";
            document.getElementById("loginSection").style.display = "none";
            document.getElementById("averiaForm").style.display = "block";
            document.getElementById("empleadoInfo").textContent = "Empleado: " + empleadoNombre;
            cargarEquipos().then(function() {
                populateSelect("aSedes", SEDES);
                populateTimeSelects("a");
            });
            return;
        }
        errorEl.textContent = "Credencial o codigo de averia no valido.";
        errorEl.style.display = "block";
        document.getElementById("codigoTecnico").value = "";
    };

    if (/^av/i.test(codigo)) {
        Promise.resolve(buscarAveriaLocal(codigo)).then(function(av) {
            if (av && !av.asignado) {
                fetch(APPS_SCRIPT_URL, {
                    method: "POST",
                    mode: "no-cors",
                    body: JSON.stringify({ tipo: "obtener_asignacion", numero: codigo.toUpperCase() })
                }).then(function(r) { return r.text(); }).then(function(txt) {
                    try {
                        var asignacion = JSON.parse(txt);
                        if (asignacion && asignacion.asignado) {
                            av.asignado = asignacion.asignado;
                        }
                    } catch(e) {}
                    procesarLogin(av);
                }).catch(function() {
                    procesarLogin(av);
                });
            } else {
                procesarLogin(av);
            }
        });
        return;
    }

    cargarPersonal().then(function() {
        procesarLogin(null);
    }).catch(function(err) {
        errorEl.textContent = "Error al cargar datos: " + err;
        errorEl.style.display = "block";
    });
}

function populateTimeSelects(prefix) {
    prefix = prefix || "";
    const ids = prefix === "a"
        ? { horas: "aHoraHora", minutos: "aHoraMinuto", periodo: "aHoraPeriodo" }
        : prefix === "r"
        ? { horas: "rHoraHora", minutos: "rHoraMinuto", periodo: "rHoraPeriodo" }
        : { horas: "horaHora", minutos: "horaMinuto", periodo: "horaPeriodo" };
    const horas = document.getElementById(ids.horas);
    horas.innerHTML = '<option value="" disabled selected>HH</option>';
    for (var i = 1; i <= 12; i++) {
        var opt = document.createElement("option");
        opt.value = i;
        opt.textContent = i;
        horas.appendChild(opt);
    }

    const minutos = document.getElementById(ids.minutos);
    minutos.innerHTML = '<option value="" disabled selected>MM</option>';
    for (var m = 0; m < 60; m += 5) {
        var opt = document.createElement("option");
        var val = m < 10 ? "0" + m : "" + m;
        opt.value = val;
        opt.textContent = val;
        minutos.appendChild(opt);
    }

    const periodo = document.getElementById(ids.periodo);
    periodo.innerHTML = '<option value="" disabled selected>AM/PM</option>';
    ["AM", "PM"].forEach(function (p) {
        var opt = document.createElement("option");
        opt.value = p;
        opt.textContent = p;
        periodo.appendChild(opt);
    });
}

function populateSelect(id, items, agregarOtro) {
    const select = document.getElementById(id);
    select.innerHTML = '<option value="" disabled selected>Seleccionar...</option>';
    items.forEach(item => {
        const option = document.createElement("option");
        option.value = item;
        option.textContent = item;
        select.appendChild(option);
    });
    if (agregarOtro) {
        const optionOtro = document.createElement("option");
        optionOtro.value = "__OTRO__";
        optionOtro.textContent = "Otro (escribir nombre)";
        select.appendChild(optionOtro);
    }
}

function obtenerHora(prefix) {
    prefix = prefix || "";
    const ids = {
        h: prefix ? prefix + "HoraHora" : "horaHora",
        m: prefix ? prefix + "HoraMinuto" : "horaMinuto",
        p: prefix ? prefix + "HoraPeriodo" : "horaPeriodo"
    };
    var h = document.getElementById(ids.h).value;
    var m = document.getElementById(ids.m).value;
    var p = document.getElementById(ids.p).value;
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

function renderRutina(equipo, mantenimiento) {
    const container = document.getElementById("checkinsContainer");
    container.innerHTML = "";
    container.style.display = "";
    esDinamica = false;

    if (esTaller) {
        nombreRutinaActual = "Actividades de Semaneros";
        rutinaActual = RUTINA_TALLER["Actividades de Semaneros"] || [];
        renderExpandableTasks(container);
        setPaso2Buttons();
        return;
    }

    if (mantenimiento === "CORRECTIVO") {
        nombreRutinaActual = "Rutina Correctiva";
        rutinaActual = RUTINA_CORRECTIVO["Rutina Correctiva"] || [];
    } else {
        const baseRutina = EQUIPO_RUTINA[equipo] || "";
        nombreRutinaActual = baseRutina;
        rutinaActual = RUTINA_PREVENTIVO[baseRutina] || [];
    }

    if (mantenimiento !== "CORRECTIVO" && rutinaActual.length === 0) {
        nombreRutinaActual = "Rutina Dinamica - " + equipo;
        renderRutinaDinamica(container, equipo);
        setPaso2Buttons();
        return;
    }

    if (rutinaActual.length === 0) {
        container.innerHTML = "<p style='color:#999;font-size:0.85rem;'>No hay rutina definida para este equipo.</p>";
        setPaso2Buttons();
        return;
    }

    const labelRutina = document.createElement("p");
    labelRutina.style.cssText = "color:#5f9263;font-size:0.8rem;font-weight:600;margin-bottom:4px;";
    labelRutina.textContent = mantenimiento + " - " + nombreRutinaActual;
    container.appendChild(labelRutina);

    rutinaActual.forEach((item, index) => {
        const esObjeto = typeof item === "object" && item !== null;
        const label = esObjeto ? item.label : item;
        const fields = esObjeto ? (item.expand || (item.sub ? [item.sub] : null)) : null;
        let subHtml = "";
        if (fields && fields.length > 0) {
            let camposHtml = "";
            fields.forEach((f, fi) => {
                if (f.type === "toggle") {
                    camposHtml += `
                        <div class="checkin-sub-row">
                            <label>${f.label}</label>
                        <div class="toggle-group checkin-sub-toggle">
                                <button type="button" class="toggle-btn" data-field="${fi}" data-value="Si" onclick="toggleCheckinSub(this)">Si</button>
                                <button type="button" class="toggle-btn" data-field="${fi}" data-value="No" onclick="toggleCheckinSub(this)">No</button>
                        </div>
                    </div>`;
            } else {
                    const tipoInput = f.type === "number" ? "number" : "text";
                    const minMax = (f.type === "number" && f.min !== undefined ? ` min="${f.min}"` : "") +
                        (f.type === "number" && f.max !== undefined ? ` max="${f.max}"` : "");
                    camposHtml += `
                        <div class="checkin-sub-row">
                            <label>${f.label}</label>
                            <input type="${tipoInput}" class="checkin-sub-input" data-field="${fi}"${minMax}>
                        </div>`;
                }
            });
                subHtml = `
                    <div class="checkin-sub" id="checkinSub_${index}" style="display:none;">
                    ${camposHtml}
                    </div>`;
            }
        const div = document.createElement("div");
        div.className = "checkin-item";
        div.innerHTML = `
            <span>${label}</span>
            <div class="toggle-group checkin-main-toggle">
                <button type="button" class="toggle-btn" data-index="${index}" data-value="Si" onclick="toggleCheckin(this)">Si</button>
                <button type="button" class="toggle-btn" data-index="${index}" data-value="No" onclick="toggleCheckin(this)">No</button>
            </div>
            ${subHtml}
        `;
        container.appendChild(div);
    });

    setPaso2Buttons();
}

function setPaso2Buttons() {
    document.getElementById("btnPaso3").style.display = esTaller ? "none" : "block";
    document.getElementById("btnEnviar").style.display = esTaller ? "block" : "none";
}

function renderRutinaDinamica(container, equipo) {
    esDinamica = true;
    equipoDinamicoActual = equipo || "";

    const guardada = getRutinaDinamicaGuardada(equipoDinamicoActual);
    esCreadorDinamica = !guardada || !guardada.creadoPor || guardada.creadoPor === tecnicoNombre;
    if (guardada && guardada.pasos.length > 0) {
        rutinaActual = guardada.pasos.slice();
    }
    container.style.display = "block";

    const label = document.createElement("p");
    label.style.cssText = "color:#5f9263;font-size:0.8rem;font-weight:600;margin-bottom:4px;";
    if (guardada && guardada.pasos.length > 0 && !esCreadorDinamica) {
        label.textContent = "Rutina creada por " + guardada.creadoPor + ". Solo ese tecnico puede modificarla.";
    } else if (guardada && guardada.pasos.length > 0) {
        label.textContent = "Rutina guardada para este equipo. Puedes agregar o quitar pasos:";
    } else {
        label.textContent = "Este equipo no tiene rutina asignada. Crea los pasos:";
    }
    container.appendChild(label);

    const stepsWrap = document.createElement("div");
    stepsWrap.id = "dynamicStepsWrapper";
    container.appendChild(stepsWrap);

    if (esCreadorDinamica) {
        const builder = document.createElement("div");
        builder.className = "dynamic-builder";

        const input = document.createElement("input");
        input.type = "text";
        input.placeholder = "Escribe el paso a verificar...";
        input.className = "dynamic-step-input";
        builder.appendChild(input);

        const addBtn = document.createElement("button");
        addBtn.type = "button";
        addBtn.className = "btn-secondary btn-add";
        addBtn.textContent = "＋ Agregar paso";
        addBtn.addEventListener("click", () => {
            const texto = input.value.trim();
            if (!texto) {
                alert("Escribe el paso antes de agregarlo.");
                return;
            }
            rutinaActual.push(texto);
            input.value = "";
            input.focus();
            guardarRutinaDinamica(equipoDinamicoActual, rutinaActual);
            renderRutinaDinamicaSteps();
        });
        builder.appendChild(addBtn);

        container.appendChild(builder);
    }

    renderRutinaDinamicaSteps();
}

function renderRutinaDinamicaSteps() {
    const wrap = document.getElementById("dynamicStepsWrapper");
    if (!wrap) return;
    wrap.innerHTML = "";
    rutinaActual.forEach((label, index) => {
        const div = document.createElement("div");
        div.className = "checkin-item";
        div.innerHTML = `
            <span>${label}</span>
            <div class="toggle-group checkin-main-toggle">
                <button type="button" class="toggle-btn" data-index="${index}" data-value="Si" onclick="toggleCheckin(this)">Si</button>
                <button type="button" class="toggle-btn" data-index="${index}" data-value="No" onclick="toggleCheckin(this)">No</button>
            </div>
            ${esCreadorDinamica ? `<button type="button" class="dynamic-remove" onclick="removerPasoDinamico(${index})">✕</button>` : ""}
        `;
        wrap.appendChild(div);
    });
}

function removerPasoDinamico(index) {
    if (!esCreadorDinamica) return;
    rutinaActual.splice(index, 1);
    guardarRutinaDinamica(equipoDinamicoActual, rutinaActual);
    renderRutinaDinamicaSteps();
}

function irAlPaso3() {
    if (esTaller) return;

    const checkins = getCheckinValues();
    if (rutinaActual.length === 0) {
        alert("Agrega al menos un paso a la rutina.");
        return;
    }
    const hasCheckinEmpty = rutinaActual.some(c => {
        const label = typeof c === "object" && c !== null ? c.label : c;
        return !checkins[label];
    });
    if (hasCheckinEmpty) {
        alert("Por favor responde todos los pasos de la rutina (Si/No).");
        return;
    }
    if (!checkinSubsCompletas()) {
        alert("Completa las sub-preguntas de los pasos marcados con Si.");
        return;
    }

    document.getElementById("paso2").style.display = "none";
    document.getElementById("paso3").style.display = "block";
}

function toggleRepuestosToggle(btn) {
    const group = btn.parentElement;
    group.querySelectorAll(".toggle-btn").forEach(b => {
        b.classList.remove("active-si", "active-no");
    });
    btn.classList.add(btn.dataset.value === "Si" ? "active-si" : "active-no");

    const repuestosGroup = document.getElementById("repuestosGroup");
    repuestosGroup.style.display = btn.dataset.value === "Si" ? "block" : "none";
    if (btn.dataset.value === "No") {
        document.getElementById("repuestosRows").innerHTML = "";
    }
}

function agregarRepuestoRow() {
    const rows = document.getElementById("repuestosRows");
    const row = document.createElement("div");
    row.className = "repuesto-row";
    row.innerHTML = `
        <input type="text" class="repuesto-nombre" placeholder="Nombre del repuesto">
        <input type="number" class="repuesto-cantidad" placeholder="Cant." min="1">
        <button type="button" class="repuesto-remove" onclick="this.parentElement.remove()">✕</button>
    `;
    rows.appendChild(row);
    row.querySelector(".repuesto-nombre").focus();
}

function getRepuestos() {
    const repuestos = [];
    document.querySelectorAll(".repuesto-row").forEach(row => {
        const nombre = row.querySelector(".repuesto-nombre").value.trim();
        const cantidad = row.querySelector(".repuesto-cantidad").value.trim();
        if (nombre) repuestos.push({ nombre: nombre, cantidad: cantidad });
    });
    return repuestos;
}

function resetPaso3() {
    document.getElementById("paso3").style.display = "none";
    document.getElementById("repuestosGroup").style.display = "none";
    document.getElementById("repuestosRows").innerHTML = "";
    document.querySelectorAll("#repSi, #repNo").forEach(b => {
        b.classList.remove("active-si", "active-no");
    });
}

function renderExpandableTasks(container) {
    const labelRutina = document.createElement("p");
    labelRutina.style.cssText = "color:#5f9263;font-size:0.8rem;font-weight:600;margin-bottom:4px;";
    labelRutina.textContent = "Actividades de Semaneros";
    container.appendChild(labelRutina);

    rutinaActual.forEach((task, idx) => {
        const wrapper = document.createElement("div");
        wrapper.className = "taller-task";
        wrapper.dataset.taskIdx = idx;

        const row = document.createElement("div");
        row.className = "taller-task-row";
        row.innerHTML = `
            <span class="taller-task-label">${task.label}</span>
            <div class="toggle-group">
                <button type="button" class="toggle-btn" data-path="${idx}" data-value="Si" onclick="toggleTallerTask(this)">Si</button>
                <button type="button" class="toggle-btn" data-path="${idx}" data-value="No" onclick="toggleTallerTask(this)">No</button>
            </div>
        `;
        wrapper.appendChild(row);

        const subContainer = document.createElement("div");
        subContainer.className = "taller-sub";
        subContainer.id = "tallerSub_" + idx;
        subContainer.style.display = "none";
        wrapper.appendChild(subContainer);

        container.appendChild(wrapper);
    });
}

function toggleTallerTask(btn) {
    const row = btn.parentElement;
    row.querySelectorAll(".toggle-btn").forEach(b => {
        b.classList.remove("active-si", "active-no");
    });
    if (btn.dataset.value === "Si") {
        btn.classList.add("active-si");
    } else {
        btn.classList.add("active-no");
    }

    const wrapper = btn.closest(".taller-task");
    const idx = parseInt(btn.dataset.path);
    const task = rutinaActual[idx];
    const sub = document.getElementById("tallerSub_" + idx);

    if (btn.dataset.value === "Si" && task.expand) {
        sub.style.display = "block";
        renderTallerFields(sub, task.expand, [idx]);
    } else {
        sub.style.display = "none";
        sub.innerHTML = "";
    }
}

function renderTallerFields(container, fields, path) {
    container.innerHTML = "";
    fields.forEach((field, fi) => {
        const myPath = path.concat(fi);
        const fieldDiv = document.createElement("div");
        fieldDiv.className = "taller-sub-field";
        fieldDiv.dataset.path = myPath.join(",");

        const label = document.createElement("label");
        label.textContent = field.label;
        fieldDiv.appendChild(label);

        if (field.type === "toggle") {
            const tg = document.createElement("div");
            tg.className = "toggle-group";
            tg.innerHTML = `
                <button type="button" class="toggle-btn sub-toggle" data-path="${myPath.join(",")}" data-value="Si" onclick="toggleSubToggle(this)">Si</button>
                <button type="button" class="toggle-btn sub-toggle" data-path="${myPath.join(",")}" data-value="No" onclick="toggleSubToggle(this)">No</button>
            `;
            fieldDiv.appendChild(tg);

            if (field.expand) {
                fieldDiv.classList.add("taller-sub-field-col");
                const nested = document.createElement("div");
                nested.className = "taller-sub taller-nested";
                nested.id = "tallerNested_" + myPath.join("_");
                nested.style.display = "none";
                fieldDiv.appendChild(nested);
            }
        } else if (field.type === "number") {
            const inp = document.createElement("input");
            inp.type = "number";
            inp.className = "taller-number-input";
            inp.dataset.path = myPath.join(",");
            if (field.min !== undefined) inp.min = field.min;
            if (field.max !== undefined) inp.max = field.max;
            fieldDiv.appendChild(inp);
        } else if (field.type === "Text") {
            const inp = document.createElement("input");
            inp.type = "text";
            inp.className = "taller-number-input taller-text-input";
            inp.dataset.path = myPath.join(",");
            fieldDiv.appendChild(inp);
        }

        container.appendChild(fieldDiv);
    });
}

function toggleSubToggle(btn) {
    const group = btn.parentElement;
    group.querySelectorAll(".toggle-btn").forEach(b => {
        b.classList.remove("active-si", "active-no");
    });
    if (btn.dataset.value === "Si") {
        btn.classList.add("active-si");
    } else {
        btn.classList.add("active-no");
    }

    const path = btn.dataset.path.split(",").map(Number);
    let field = rutinaActual[path[0]];
    for (let i = 1; i < path.length; i++) {
        field = field.expand[path[i]];
    }

    const nested = document.getElementById("tallerNested_" + path.join("_"));
    if (!nested) return;

    if (btn.dataset.value === "Si" && field.expand) {
        nested.style.display = "block";
        renderTallerFields(nested, field.expand, path);
    } else {
        nested.style.display = "none";
        nested.innerHTML = "";
    }
}

function toggleCheckin(btn) {
    const group = btn.parentElement;
    group.querySelectorAll(".toggle-btn").forEach(b => {
        b.classList.remove("active-si", "active-no");
    });
    btn.classList.add(btn.dataset.value === "Si" ? "active-si" : "active-no");

    const item = btn.closest(".checkin-item");
    if (item) {
        const sub = item.querySelector(".checkin-sub");
        if (sub) {
            sub.style.display = btn.dataset.value === "Si" ? "block" : "none";
        }
    }
}

function toggleCheckinSub(btn) {
    const group = btn.parentElement;
    group.querySelectorAll(".toggle-btn").forEach(b => {
        b.classList.remove("active-si", "active-no");
    });
    btn.classList.add(btn.dataset.value === "Si" ? "active-si" : "active-no");
}

function getCheckinValues() {
    const results = {};
    document.querySelectorAll(".checkin-main-toggle").forEach((group, index) => {
        const item = rutinaActual[index];
        if (!item) return;
        const label = typeof item === "object" && item !== null ? item.label : item;
        const activeBtn = group.querySelector(".active-si, .active-no");
        results[label] = activeBtn ? activeBtn.dataset.value : "";
    });
    return results;
}

function getCheckinSubValues() {
    const checkins = getCheckinValues();
    const out = [];
    rutinaActual.forEach((item, index) => {
        const esObjeto = typeof item === "object" && item !== null;
        const fields = esObjeto ? (item.expand || (item.sub ? [item.sub] : null)) : null;
        if (!fields || fields.length === 0) return;
        if (checkins[item.label] !== "Si") return;
        const subEl = document.getElementById("checkinSub_" + index);
        if (!subEl) return;
        fields.forEach((field, fi) => {
            if (field.type === "toggle") {
                const tg = subEl.querySelectorAll(".checkin-sub-toggle")[fi];
                const btn = tg ? tg.querySelector(".active-si, .active-no") : null;
                out.push({ label: field.label, value: btn ? btn.dataset.value : "", step: item.label });
        } else {
                const inp = subEl.querySelectorAll(".checkin-sub-input")[fi];
                out.push({ label: field.label, value: inp ? inp.value.trim() : "", step: item.label });
        }
    });
    });
    return out;
}

function checkinSubsCompletas() {
    const checkins = getCheckinValues();
    return rutinaActual.every((item, index) => {
        const esObjeto = typeof item === "object" && item !== null;
        const fields = esObjeto ? (item.expand || (item.sub ? [item.sub] : null)) : null;
        if (!fields || fields.length === 0) return true;
        if (checkins[item.label] !== "Si") return true;
        const subEl = document.getElementById("checkinSub_" + index);
        if (!subEl) return false;
        return fields.every((field, fi) => {
            if (field.type === "toggle") {
                const tg = subEl.querySelectorAll(".checkin-sub-toggle")[fi];
                return tg ? !!tg.querySelector(".active-si, .active-no") : false;
        }
            const inp = subEl.querySelectorAll(".checkin-sub-input")[fi];
        return inp ? inp.value.trim() !== "" : false;
        });
    });
}

function getTallerValues() {
    const results = {};
    document.querySelectorAll(".taller-task").forEach(wrapper => {
        try {
            const idx = parseInt(wrapper.dataset.taskIdx);
            const task = rutinaActual[idx];
            if (!task) return;
            const activeBtn = wrapper.querySelector(".taller-task-row .active-si, .taller-task-row .active-no");
            const val = activeBtn ? activeBtn.dataset.value : "";
            const sub = {};
            if (val === "Si" && task.expand) {
                const subEl = document.getElementById("tallerSub_" + idx);
                if (!subEl) return;
                collectTallerFields(sub, task.expand, subEl);
            }
            results[task.label] = { value: val, sub: sub };
        } catch (err) {
            alert("Error en tarea: " + err.message);
        }
    });
    return results;
}

function collectTallerFields(out, fields, containerEl) {
    const fieldEls = containerEl.querySelectorAll(".taller-sub-field");
    fields.forEach((field, fi) => {
        const fieldEl = fieldEls[fi];
        if (!fieldEl) return;
        if (field.type === "toggle") {
            const sb = fieldEl.querySelector(".active-si, .active-no");
            const v = sb ? sb.dataset.value : "";
            if (field.expand && v === "Si") {
                const nestedEl = document.getElementById("tallerNested_" + fieldEl.dataset.path.split(",").join("_"));
                if (nestedEl) {
                    collectTallerFields(out, field.expand, nestedEl);
                } else {
                    out[field.label] = v;
                }
            } else {
                out[field.label] = v;
            }
        } else {
            const inp = fieldEl.querySelector("input");
            out[field.label] = inp ? inp.value : "";
        }
    });
}

function tallerSubCompleto(wrapper) {
    const val = wrapper.querySelector(".taller-task-row .active-si, .taller-task-row .active-no");
    if (!val || val.dataset.value !== "Si") return true;
    const idx = parseInt(wrapper.dataset.taskIdx);
    const task = rutinaActual[idx];
    if (!task || !task.expand) return true;
    const subEl = document.getElementById("tallerSub_" + idx);
    if (!subEl) return true;
    return tallerFieldsCompletos(task.expand, subEl);
}

function tallerFieldsCompletos(fields, containerEl) {
    const fieldEls = containerEl.querySelectorAll(".taller-sub-field");
    return Array.from(fields).every((field, fi) => {
        const fieldEl = fieldEls[fi];
        if (!fieldEl) return false;
        if (field.type === "toggle") {
            const toggle = fieldEl.querySelector(".active-si, .active-no");
            if (!toggle) return false;
            if (toggle.dataset.value === "Si" && field.expand) {
                const nestedEl = document.getElementById("tallerNested_" + fieldEl.dataset.path.split(",").join("_"));
                if (!nestedEl) return false;
                return tallerFieldsCompletos(field.expand, nestedEl);
            }
            return true;
        }
        const num = fieldEl.querySelector("input");
        return num ? num.value !== "" : false;
    });
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
    const fecha = document.getElementById("fecha").value;
    const hora = obtenerHora();
    const zona = document.getElementById("zona").value;
    const esExterior = !esTaller && zona === "Exterior";
    const equipoSelect = document.getElementById("equipo").value;
    const esOtro = equipoSelect === "__OTRO__";
    const equipo = esTaller
        ? "Taller"
        : esExterior
        ? document.getElementById("equipoExterior").value.trim()
        : esOtro
        ? document.getElementById("equipoOtro").value.trim()
        : equipoSelect;
    const mantenimiento = esTaller ? "" : document.getElementById("mantenimiento").value;
    const descripcion = document.getElementById("descripcion").value.trim();

    if (!sedes || !fecha || !hora) {
        alert("Por favor completa todos los campos.");
        return;
    }
    if (!esTaller && !mantenimiento) {
        alert("Selecciona un tipo de mantenimiento.");
        return;
    }
    if (!esTaller && !equipo) {
        alert(esExterior ? "Escribe el nombre del equipo." : esOtro ? "Escribe el nombre del equipo." : "Selecciona un equipo.");
        return;
    }

    if (esOtro && equipo) {
        postJSON({ tipo: "nuevo_equipo", equipo: equipo, sede: sedes, zona: zona }).catch(function() {});
    }

    if (esTaller) {
        const allAnswered = Array.from(document.querySelectorAll(".taller-task")).every(w =>
            w.querySelector(".taller-task-row .active-si, .taller-task-row .active-no")
        );
        if (!allAnswered) {
            alert("Responde Si o No en todas las tareas antes de enviar.");
            return;
        }
        const allSubAnswered = Array.from(document.querySelectorAll(".taller-task")).every(tallerSubCompleto);
        if (!allSubAnswered) {
            alert("Completa todas las sub-preguntas de las tareas marcadas con Si.");
            return;
        }
        enviarTaller(sedes, fecha, hora, zona, mantenimiento, descripcion);
        return;
    }

    const checkins = getCheckinValues();

    if (rutinaActual.length === 0) {
        alert("Selecciona un equipo con rutina definida.");
        return;
    }

    const hasCheckinEmpty = rutinaActual.some(c => {
        const label = typeof c === "object" && c !== null ? c.label : c;
        return !checkins[label];
    });
    if (hasCheckinEmpty) {
        alert("Por favor responde todos los pasos de la rutina (Si/No).");
        return;
    }
    if (!checkinSubsCompletas()) {
        alert("Completa las sub-preguntas de los pasos marcados con Si.");
        return;
    }

    const repuestoToggle = document.querySelector("#repSi.active-si, #repNo.active-si, #repSi.active-no, #repNo.active-no");
    if (!repuestoToggle) {
        alert("Responde Si o No en repuestos.");
        return;
    }
    let repuestos = [];
    if (repuestoToggle.dataset.value === "Si") {
        repuestos = getRepuestos();
        if (repuestos.length === 0) {
            alert("Agrega al menos un repuesto.");
            return;
        }
    }

    const turno = calcularTurno(hora);
    const idUnico = generarIdUnico(fecha, hora, sedes, equipo, tecnicoNombre);

    if (esDinamica) {
        guardarRutinaDinamica(equipo, rutinaActual);
    }

    if (yaEnviado(idUnico)) {
        alert("Este registro ya fue enviado anteriormente.");
        return;
    }

    if (!confirm("Confirmar envio?\n\nFecha: " + fecha + "\nHora: " + hora + "\nSede: " + sedes + "\nEquipo: " + equipo + "\nTecnico: " + tecnicoNombre)) {
        return;
    }

    const keys = rutinaActual.map(c => typeof c === "object" && c !== null ? c.label : c);
    const subs = getCheckinSubValues();
    const checkinKeysFinal = keys.slice();
    const checkinValuesFinal = keys.map(c => checkins[c] || "");
    subs.forEach(s => {
        checkinKeysFinal.push(s.label + " (" + s.step + ")");
        checkinValuesFinal.push(s.value);
    });

    const registro = {
        id: idUnico,
        fecha: fecha,
        hora: hora,
        turno: turno,
        sedes: sedes,
        zona: zona,
        tecnico: tecnicoNombre,
        equipo: equipo,
        mantenimiento: mantenimiento,
        rutina: nombreRutinaActual,
        checkinKeys: checkinKeysFinal,
        checkinValues: checkinValuesFinal,
        descripcion: descripcion,
        repuestos: repuestos
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

function enviarTaller(sedes, fecha, hora, zona, mantenimiento, descripcion) {
    const tallerValues = getTallerValues();
    const turno = calcularTurno(hora);

    for (const [taskLabel, data] of Object.entries(tallerValues)) {
        if (data.value !== "Si") continue;

        const idUnico = generarIdUnico(fecha, hora, sedes, taskLabel, tecnicoNombre);

        if (yaEnviado(idUnico)) {
            alert("El registro para " + taskLabel + " ya fue enviado anteriormente.");
            continue;
        }

        if (!confirm("Confirmar envio de " + taskLabel + "?\n\nFecha: " + fecha + "\nHora: " + hora + "\nSede: " + sedes + "\nZona: " + zona + "\nTecnico: " + tecnicoNombre)) {
            continue;
        }

        const registro = {
            id: idUnico,
            fecha: fecha,
            hora: hora,
            turno: turno,
            sedes: sedes,
            zona: zona,
            tecnico: tecnicoNombre,
            equipo: "Taller",
            mantenimiento: mantenimiento,
            rutina: "Actividades de Semaneros - " + taskLabel,
            task: taskLabel,
            taskValue: data.value,
            taskSub: data.sub,
            descripcion: descripcion
        };

        marcarEnviado(idUnico);
        saveToLocalStorage(registro);

        fetch(APPS_SCRIPT_URL, {
            method: "POST",
            mode: "no-cors",
            body: JSON.stringify(registro)
        }).then(() => {}).catch(() => {});
    }

    alert("Tareas de Taller enviadas.");
    clearForm();
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
    document.getElementById("paso2").style.display = "none";
    document.getElementById("paso1").style.display = "block";
    document.getElementById("zonaGroup").style.display = "none";
    document.getElementById("zona").innerHTML = '<option value="" disabled selected>Seleccionar zona...</option>';
    document.getElementById("equipoGroup").style.display = "block";
    document.getElementById("equipoExteriorGroup").style.display = "none";
    document.getElementById("equipoExterior").value = "";
    document.getElementById("equipoOtroGroup").style.display = "none";
    document.getElementById("equipoOtro").value = "";
    document.getElementById("mantenimientoGroup").style.display = "block";
    document.getElementById("formActions").style.display = "flex";
    document.getElementById("equipo").required = true;
    document.getElementById("mantenimiento").required = true;
    populateTimeSelects();
    rutinaActual = [];
    nombreRutinaActual = "";
    esTaller = false;
    esDinamica = false;
    resetPaso3();
}

function toggleAveriaToggle(btn) {
    const group = btn.parentElement;
    group.querySelectorAll(".toggle-btn").forEach(b => {
        b.classList.remove("active-si", "active-no");
    });
    btn.classList.add(btn.dataset.value === "Si" ? "active-si" : "active-no");

    document.getElementById("aAveriaDetalle").style.display = btn.dataset.value === "Si" ? "block" : "none";
    if (btn.dataset.value === "No") {
        document.getElementById("aDescripcion").value = "";
        document.getElementById("aImagenes").value = "";
        document.getElementById("aImagenesPreview").innerHTML = "";
        averiaImagenes = [];
    }
}

function fileToImagen(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onerror = () => reject(new Error("No se pudo leer la imagen."));
        reader.onload = function (e) {
            const img = new Image();
            img.onload = function () {
                const canvas = document.createElement("canvas");
                const MAX = 1280;
                let w = img.width, h = img.height;
                if (w > MAX || h > MAX) {
                    const ratio = Math.min(MAX / w, MAX / h);
                    w = Math.round(w * ratio);
                    h = Math.round(h * ratio);
                }
                canvas.width = w;
                canvas.height = h;
                canvas.getContext("2d").drawImage(img, 0, 0, w, h);
                const dataUrl = canvas.toDataURL("image/jpeg", 0.7);
                resolve({
                    data: dataUrl.split(",")[1],
                    mimeType: "image/jpeg",
                    nombre: file.name || ("foto_" + Date.now() + ".jpg")
                });
            };
            img.onerror = () => reject(new Error("Imagen invalida."));
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    });
}

function renderImagenesPreview() {
    const preview = document.getElementById("aImagenesPreview");
    preview.innerHTML = "";
    averiaImagenes.forEach(img => {
        const thumb = document.createElement("img");
        thumb.src = "data:" + img.mimeType + ";base64," + img.data;
        thumb.className = "imagen-thumb";
        thumb.title = img.nombre;
        preview.appendChild(thumb);
    });
}

function enviarAveria(e) {
    e.preventDefault();
    if (averiaEnviando) return;

    const sedes = document.getElementById("aSedes").value;
    const zona = document.getElementById("aZona").value;
    const fecha = document.getElementById("aFecha").value;
    const hora = obtenerHora("a");
    const esEvento = sedes === "EVENTO";
    const esExterior = !esEvento && zona === "Exterior";
    const equipoLibre = esEvento ? document.getElementById("aEquipoLibre").value.trim() : "";
    const eventoNombre = esEvento ? document.getElementById("aEventoLibre").value.trim() : "";
    const equipoExterior = esExterior ? document.getElementById("aEquipoExterior").value.trim() : "";
    const equipoSelect = document.getElementById("aEquipo").value;
    const esOtro = equipoSelect === "__OTRO__";
    const equipoOtro = esOtro ? document.getElementById("aEquipoOtro").value.trim() : "";
    const equipo = esEvento
        ? (equipoLibre + (eventoNombre ? " / Evento: " + eventoNombre : ""))
        : esExterior
        ? equipoExterior
        : esOtro
        ? equipoOtro
        : equipoSelect;
    const averia = document.querySelector("#aAvSi.active-si, #aAvNo.active-si, #aAvSi.active-no, #aAvNo.active-no");
    const descripcion = document.getElementById("aDescripcion").value.trim();

    if (!sedes || !fecha || !hora) {
        alert("Completa sede, fecha y hora.");
        return;
    }
    const zonas = getAveriaZonas(sedes);
    if (!esEvento && zonas.length > 0 && !zona) {
        alert("Selecciona una zona.");
        return;
    }
    if (!equipo) {
        alert(esEvento ? "Escribe el equipo del evento." : esExterior ? "Escribe el nombre del equipo." : esOtro ? "Escribe el nombre del equipo." : "Selecciona un equipo.");
        return;
    }
    if (esEvento && !eventoNombre) {
        alert("Escribe el nombre del evento.");
        return;
    }
    if (!averia) {
        alert("Indica si el equipo presenta una averia (Si/No).");
        return;
    }
    if (averia.dataset.value === "No") {
        alert("No hay averia que reportar.");
        return;
    }
    if (!descripcion) {
        alert("Escribe una descripcion de la averia.");
        return;
    }

    if (esOtro && equipo) {
        postJSON({ tipo: "nuevo_equipo", equipo: equipo, sede: sedes, zona: zona }).catch(function() {});
    }

    const idUnico = generarIdUnico(fecha, hora, sedes, equipo, empleadoNombre);
    if (yaEnviado(idUnico)) {
        alert("Este registro ya fue enviado anteriormente.");
        clearAveriaForm();
        document.getElementById("averiaForm").style.display = "none";
        document.getElementById("loginSection").style.display = "block";
        document.getElementById("codigoTecnico").value = "";
        return;
    }

    if (!confirm("Confirmar envio de la averia?\n\nSede: " + sedes + "\nEquipo: " + equipo + "\nDescripcion: " + descripcion)) {
        return;
    }

    const registro = {
        tipo: "averia",
        id: idUnico,
        fecha: fecha,
        hora: hora,
        sedes: sedes,
        zona: zona,
        equipo: equipo,
        averia: "Si",
        descripcion: descripcion,
        empleado: empleadoNombre,
        imagenes: averiaImagenes
    };

    averiaEnviando = true;
    const btnEnviar = document.getElementById("enviarAveriaBtn");
    btnEnviar.disabled = true;

    postJSON(registro)
    .then(() => {
        marcarEnviado(idUnico);
        alert("Averia reportada correctamente.");
        clearAveriaForm();
        document.getElementById("averiaForm").style.display = "none";
        document.getElementById("loginSection").style.display = "block";
        document.getElementById("codigoTecnico").value = "";
        averiaEnviando = false;
        btnEnviar.disabled = false;
    })
    .catch(() => {
        averiaEnviando = false;
        btnEnviar.disabled = false;
        alert("Error al enviar. Intenta de nuevo.");
    });
}

function clearAveriaForm() {
    document.getElementById("averiaForm").reset();
    document.getElementById("aZonaGroup").style.display = "none";
    document.getElementById("aEquipoGroup").style.display = "block";
    document.getElementById("aEquipoLibreGroup").style.display = "none";
    document.getElementById("aEquipoLibre").value = "";
    document.getElementById("aEventoLibre").value = "";
    document.getElementById("aEquipoExteriorGroup").style.display = "none";
    document.getElementById("aEquipoExterior").value = "";
    document.getElementById("aEquipoOtroGroup").style.display = "none";
    document.getElementById("aEquipoOtro").value = "";
    document.getElementById("aEquipo").innerHTML = '<option value="" disabled selected>Seleccionar equipo...</option>';
    document.getElementById("aAveriaDetalle").style.display = "none";
    document.getElementById("aImagenesPreview").innerHTML = "";
    document.querySelectorAll("#aAvSi, #aAvNo").forEach(b => {
        b.classList.remove("active-si", "active-no");
    });
    averiaImagenes = [];
    populateTimeSelects("a");
}

function abrirResolucion(av) {
    resolucionActualNumero = String(av.numero || "");
    document.getElementById("loginSection").style.display = "none";
    document.getElementById("resolucionForm").style.display = "block";
    document.getElementById("resolucionInfo").textContent =
        "Averia " + resolucionActualNumero + " | Sede: " + (av.sede || "") +
        (av.zona ? " | Zona: " + av.zona : "") +
        " | Descripcion: " + (av.descripcion || "");
    document.getElementById("resolucionEquipo").textContent = "Equipo: " + (av.equipo || "No especificado");
    populateSelect("rTecnico", Object.values(TECNICOS));
    populateTimeSelects("r");
    clearResolucionForm();

    if (av.asignado) {
        var rTecnicoSelect = document.getElementById("rTecnico");
        for (var i = 0; i < rTecnicoSelect.options.length; i++) {
            if (rTecnicoSelect.options[i].value === av.asignado) {
                rTecnicoSelect.selectedIndex = i;
                break;
            }
        }
    }

    document.getElementById("resolucionForm").style.display = "block";
}

function toggleRealizado(el) {
    const container = el.parentElement;
    if (container && container.querySelectorAll) {
        container.querySelectorAll(".toggle-btn").forEach(b => {
            b.classList.remove("active-si", "active-no");
        });
    }
    el.classList.add(el.dataset.value === "Si" ? "active-si" : "active-no");
    const grupo = document.getElementById("rDescripcionGroup");
    grupo.style.display = el.dataset.value === "Si" ? "none" : "block";
}

function renderResolucionImagenesPreview() {
    const container = document.getElementById("rImagenesPreview");
    container.innerHTML = "";
    resolucionImagenes.forEach(function (img, i) {
        const div = document.createElement("div");
        div.className = "imagen-preview";
        const nombre = document.createElement("span");
        nombre.textContent = (i + 1) + ". " + (img.nombre || "foto");
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "btn-remove";
        btn.textContent = "x";
        btn.onclick = function () {
            resolucionImagenes.splice(i, 1);
            renderResolucionImagenesPreview();
        };
        div.appendChild(nombre);
        div.appendChild(btn);
        container.appendChild(div);
    });
}

function huellaImagen(img) {
    const s = (img.nombre || "") + "|" + (img.data || "");
    let h = 0;
    for (let i = 0; i < s.length; i++) {
        h = ((h << 5) - h + s.charCodeAt(i)) | 0;
    }
    return "f" + Math.abs(h).toString(36);
}

function getImagenesEnviadas(numero) {
    try {
        const stored = JSON.parse(localStorage.getItem("imagenesAveriaEnviadas") || "{}");
        return stored[numero] || [];
    } catch (err) {
        return [];
    }
}

function guardarImagenEnviada(numero, huella) {
    try {
        const stored = JSON.parse(localStorage.getItem("imagenesAveriaEnviadas") || "{}");
        stored[numero] = stored[numero] || [];
        if (stored[numero].indexOf(huella) === -1) stored[numero].push(huella);
        localStorage.setItem("imagenesAveriaEnviadas", JSON.stringify(stored));
    } catch (err) {}
}

function averiaCerrada(valor) {
    return valor === "Si" || valor === "Falsa averia";
}

function enviarResolucion(e) {
    e.preventDefault();
    if (resolucionEnviando) return;

    const numero = resolucionActualNumero;
    const toggles = ["rSi", "rNo", "rProceso", "rFalsa"].map(id => document.getElementById(id));
    const activo = toggles.find(b => b.classList.contains("active-si") || b.classList.contains("active-no"));
    const realizado = activo ? activo.dataset.value : "";
    const fecha = document.getElementById("rFecha").value;
    const hora = obtenerHora("r");
    const tecnico = document.getElementById("rTecnico").value;
    const descripcion = document.getElementById("rDescripcion").value.trim();

    if (!numero) {
        alert("No hay averia en curso.");
        return;
    }
    if (!realizado) {
        alert("Indica el estado de la averia (Si/No/En proceso/Falsa averia).");
        return;
    }
    if (!fecha || !hora) {
        alert("Completa fecha y hora.");
        return;
    }
    if (!tecnico) {
        alert("Selecciona el tecnico.");
        return;
    }
    if (realizado !== "Si" && !descripcion) {
        alert("Escribe una descripcion.");
        return;
    }

    const enviadas = getImagenesEnviadas(numero);
    const imagenesNuevas = [];
    const huellasNuevas = [];
    resolucionImagenes.forEach(img => {
        const h = huellaImagen(img);
        if (enviadas.indexOf(h) === -1) {
            imagenesNuevas.push(img);
            huellasNuevas.push(h);
        }
    });

    const registro = {
        tipo: "resolucion",
        numero: numero,
        fecha: fecha,
        hora: hora,
        tecnico: tecnico,
        realizado: realizado,
        descripcion: descripcion,
        imagenes: imagenesNuevas
    };

    resolucionEnviando = true;
    const btnEnviar = document.getElementById("enviarResolucionBtn");
    btnEnviar.disabled = true;

    postJSON(registro)
        .then(() => {
            huellasNuevas.forEach(h => guardarImagenEnviada(numero, h));
            resolucionEnviando = false;
            btnEnviar.disabled = false;
            if (averiaCerrada(realizado)) {
                alert("Averia " + numero + " cerrada correctamente.");
                marcarAveriaResuelta(numero);
                clearResolucionForm();
                volverAlLogin();
            } else {
                alert("Resolucion enviada. Podras reingresar el codigo para volver a llenar el formulario.");
                clearResolucionForm();
                volverAlLogin();
            }
        })
        .catch(() => {
            resolucionEnviando = false;
            btnEnviar.disabled = false;
            alert("Error al enviar. Intenta de nuevo.");
        });
}

function marcarAveriaResuelta(numero) {
    averiasDisponibles = averiasDisponibles.map(a => {
        if (String(a.numero || "") === String(numero)) {
            return Object.assign({}, a, { resuelto: true });
        }
        return a;
    });
}

function clearResolucionForm() {
    document.getElementById("rFecha").value = "";
    document.getElementById("rTecnico").value = "";
    document.getElementById("rDescripcion").value = "";
    document.getElementById("rImagenes").value = "";
    document.getElementById("rImagenesPreview").innerHTML = "";
    document.getElementById("rDescripcionGroup").style.display = "none";
    ["rSi", "rNo", "rProceso", "rFalsa"].forEach(id => {
        document.getElementById(id).classList.remove("active-si", "active-no");
    });
    resolucionImagenes = [];
    populateTimeSelects("r");
}

function volverAlLogin() {
    resolucionActualNumero = "";
    resolucionImagenes = [];
    document.getElementById("resolucionEquipo").textContent = "";
    document.getElementById("resolucionForm").style.display = "none";
    document.getElementById("loginSection").style.display = "block";
    document.getElementById("codigoTecnico").value = "";
    const errorEl = document.getElementById("loginError");
    errorEl.style.display = "none";
}
