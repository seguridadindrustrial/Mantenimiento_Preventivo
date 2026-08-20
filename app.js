
let SEDES = [];
let SEDES_CHECKIN = [];
let SEDE_ZONAS = {};

const datosPersonal = [
    {nombre: "LOLY GARCIA", cedula: "4711758", tipo: "Empleado", whatsapp: "584241752256", correo: "", jefe:""},
    {nombre: "CAROLINA BLANCO", cedula: "31451530", tipo: "Tecnico", whatsapp: "584124756318", correo: "carolinablanco8419@gmail.com", jefe:""},
    { nombre: "JHONNY BARAJAS", cedula: "9467216", tipo: "Empleado", whatsapp: "584127548281", correo: "", jefe: "kliviat.muñoz@caracascatering.com" },
    { nombre: "MANUEL ACOSTA", cedula: "15613616", tipo: "Empleado", whatsapp: "584121476287", correo: "", jefe: "kliviat.muñoz@caracascatering.com" },
    { nombre: "ALBERTO BLANCO", cedula: "18023639", tipo: "Tecnico", whatsapp: "584129477827", correo: "", jefe: "loly.garcia@caracascatering.com, alberto.blanco@caracascatering.com" },
    { nombre: "ELVIS BLANCO", cedula: "18329733", tipo: "Empleado", whatsapp: "584149057146", correo: "", jefe: "elvis.blanco@caracascatering.com" },
    { nombre: "CARMEN CAMACHO", cedula: "13251004", tipo: "Empleado", whatsapp: "584123848123", correo: "", jefe: "kliviat.muñoz@caracascatering.com" },
    { nombre: "DAYANA MARTÍNEZ", cedula: "14326240", tipo: "Empleado", whatsapp: "584242552271", correo: "", jefe: "kliviat.muñoz@caracascatering.com" },
    { nombre: "REINER PÉREZ", cedula: "11133687", tipo: "Empleado", whatsapp: "584129216091", correo: "", jefe: "kliviat.muñoz@caracascatering.com" },
    { nombre: "ADRIÁN PACHECO", cedula: "19650387", tipo: "Empleado", whatsapp: "584242472037", correo: "", jefe: "ariana.perez@caracascatering.com" },
    { nombre: "DAIVILIN BERMUDEZ", cedula: "20303904", tipo: "Empleado", whatsapp: "584242386130", correo: "daivilin.bermudez@caracascatering.com", jefe: "" },
    { nombre: "DORIS BURGUILLOS", cedula: "17958161", tipo: "Empleado", whatsapp: "584242056604", correo: "", jefe: "angel.tarazona@caracascatering.com" },
    { nombre: "FRANK BELISARIO", cedula: "24230260", tipo: "Empleado", whatsapp: "584129134713", correo: "", jefe: "ariana.perez@caracascatering.com" },
    { nombre: "LAIDA SUAREZ", cedula: "13525332", tipo: "Empleado", whatsapp: "584262201171", correo: "", jefe: "ariana.perez@caracascatering.com" },
    { nombre: "YANEIDI SUAREZ", cedula: "19848235", tipo: "Empleado", whatsapp: "584247341316", correo: "", jefe: "ariana.perez@caracascatering.com" },
    { nombre: "ARIANA PÉREZ", cedula: "21015267", tipo: "Empleado", whatsapp: "584140270597", correo: "ariana.perez@caracascatering.com", jefe: "" },
    { nombre: "ANGEL TARAZONA", cedula: "12950054", tipo: "Empleado", whatsapp: "584242456299", correo: "angel.tarazona@caracascatering.com", jefe: "" },
    { nombre: "WILBERIS RODRÍGUEZ", cedula: "17515111", tipo: "Empleado", whatsapp: "584122307869", correo: "", jefe: "kliviat.muñoz@caracascatering.com" },
    { nombre: "LUCRECIA ALVARADO", cedula: "10537934", tipo: "Empleado", whatsapp: "584241430544", correo: "", jefe: "loly.garcia@caracascatering.com, alberto.blanco@caracascatering.com" },
    { nombre: "WISTON PATERNINA", cedula: "15338049", tipo: "Empleado", whatsapp: "584242831639", correo: "", jefe: "angel.tarazona@caracascatering.com" },
    { nombre: "ALEXIS PEÑALOZA", cedula: "7992727", tipo: "Tecnico", whatsapp: "584124297851", correo: "", jefe: "loly.garcia@caracascatering.com, alberto.blanco@caracascatering.com" },
    { nombre: "ANGEL MARTINEZ", cedula: "14379756", tipo: "Tecnico", whatsapp: "584120254688", correo: "", jefe: "loly.garcia@caracascatering.com, alberto.blanco@caracascatering.com" },
    { nombre: "SANDRY FUENMAYOR", cedula: "14970816", tipo: "Tecnico", whatsapp: "584122571365", correo: "", jefe: "loly.garcia@caracascatering.com, alberto.blanco@caracascatering.com" },
    { nombre: "LEONEL LÓPEZ", cedula: "9863644", tipo: "Tecnico", whatsapp: "584163062842", correo: "", jefe: "loly.garcia@caracascatering.com, alberto.blanco@caracascatering.com" },
    { nombre: "LILLYS AUDIVET", cedula: "15948681", tipo: "Empleado", whatsapp: "584241327749", correo: "", jefe: "loly.garcia@caracascatering.com, alberto.blanco@caracascatering.com" },
    { nombre: "MIGUEL CURIEL", cedula: "20329444", tipo: "Empleado", whatsapp: "584125431692", correo: "", jefe: "angel.tarazona@caracascatering.com" },
    { nombre: "GABRIEL RISQUEZ", cedula: "24699540", tipo: "Empleado", whatsapp: "584129926068", correo: "", jefe: "ariana.perez@caracascatering.com" },
    { nombre: "GERALDINE RICAUTE", cedula: "10798974", tipo: "Empleado", whatsapp: "584129524479", correo: "", jefe: "loly.garcia@caracascatering.com, alberto.blanco@caracascatering.com" },
    { nombre: "MARBELYS ALVARADO", cedula: "13291333", tipo: "Empleado", whatsapp: "584242035303", correo: "", jefe: "loly.garcia@caracascatering.com, alberto.blanco@caracascatering.com" },
    { nombre: "LUCAS SUAZO", cedula: "13472978", tipo: "Tecnico", whatsapp: "584140334660", correo: "", jefe: "loly.garcia@caracascatering.com, alberto.blanco@caracascatering.com" },
    { nombre: "ODEMARIS GUERRERO", cedula: "11813641", tipo: "Empleado", whatsapp: "584123029842", correo: "odemaris.gerrero@caracascatering.com", jefe: "" },
    { nombre: "BENYI CADET", cedula: "27535304", tipo: "Empleado", whatsapp: "584242235642", correo: "", jefe: "loly.garcia@caracascatering.com, alberto.blanco@caracascatering.com" },
    { nombre: "RAFAEL LEAL CARMONA", cedula: "6516060", tipo: "Tecnico", whatsapp: "584263135913", correo: "", jefe: "loly.garcia@caracascatering.com, alberto.blanco@caracascatering.com" },
    { nombre: "EFREN SANCHEZ", cedula: "26951720", tipo: "Empleado", whatsapp: "584124172416", correo: "", jefe: "ariana.perez@caracascatering.com" },
    { nombre: "CASTILLO AUDIVET LUIYER", cedula: "31604422", tipo: "Empleado", whatsapp: "584129051329", correo: "", jefe: "loly.garcia@caracascatering.com, alberto.blanco@caracascatering.com" },
    { nombre: "ENRIQUE JOSE MARIN", cedula: "19684951", tipo: "Tecnico", whatsapp: "584125523024", correo: "", jefe: "loly.garcia@caracascatering.com, alberto.blanco@caracascatering.com" },
    { nombre: "ANDRES BALANTA", cedula: "19967455", tipo: "Empleado", whatsapp: "584142778546", correo: "", jefe: "angel.tarazona@caracascatering.com" },
    { nombre: "JOHANNA ADMS", cedula: "15574381", tipo: "Empleado", whatsapp: "584121149621", correo: "", jefe: "kliviat.muñoz@caracascatering.com" },
    { nombre: "LUCY MÁRQUEZ", cedula: "13128145", tipo: "Empleado", whatsapp: "584126878576", correo: "lucy.marquez@caracascatering.com", jefe: "" },
    { nombre: "KLYVIAT MUÑOZ", cedula: "15421066", tipo: "Empleado", whatsapp: "584241150591", correo: "kliviat.muñoz@caracascatering.com", jefe: "" }
];

const TECNICOS = {
    "7992727": "ALEXIS PEÑALOZA",
    "14379756": "ANGEL MARTINEZ",
    "14970816": "SANDRY FUENMAYOR",
    "9863644": "LEONEL LÓPEZ",
    "13472978": "LUCAS SUAZO",
    "6516060": "RAFAEL LEAL",
    "19684951": "ENRIQUE MARIN",
    "31451530": "CAROLINA BLANCO",
    "18023639": "ALBERTO BLANCO",
};

const EMPLEADOS = {
    
    "9467216": "JHONNY BARAJAS",
    "15613616": "MANUEL ACOSTA",
    "18329733": "ELVIS BLANCO",
    "13251004": "CARMEN CAMACHO",
    "14326240": "DAYANA MARTÍNEZ",
    "11133687": "REINER PÉREZ",
    "19650387": "ADRIÁN PACHECO",
    "20303904": "DAIVILIN BERMUDEZ",
    "17958161": "DORIS BURGUILLOS",
    "24230260": "FRANK BELISARIO",
    "13525332": "LAIDA SUAREZ",
    "19848235": "YANEIDI SUAREZ",
    "21015267": "ARIANA PÉREZ",
    "12950054": "ANGEL TARAZONA",
    "17515111": "WILBERIS RODRÍGUEZ",
    "10537934": "LUCRECIA ALVARADO",
    "15338049": "WISTON PATERNINA",
    "15948681": "LILLYS AUDIVET",
    "20329444": "MIGUEL CURIEL",
    "24699540": "GABRIEL RISQUEZ",
    "10798974": "GERALDINE RICAUTE",
    "13291333": "MARBELYS ALVARADO",
    "11813641": "ODEMARIS GUERRERO",
    "27535304": "BENYI CADET",
    "26951720": "EFREN SANCHEZ",
    "31604422": "CASTILLO LUIYER",
    "19967455": "ANDRES BALANTA",
    "15574381": "JOHANNA ADMS",
    "13128145": "LUCY MÁRQUEZ",
    "15421066": "KLYVIAT MUÑOZ",
    "23811822": "MERCY CHIRINOS",
    
};

function inicializarDatosEquipos() {
    const sedesSet = new Set();
    const sedeZonasMap = {};

    for (const sede in ZONA_EQUIPOS) {
        sedesSet.add(sede);
        if (!sedeZonasMap[sede]) sedeZonasMap[sede] = [];
        for (const zona in ZONA_EQUIPOS[sede]) {
            const zonaUp = zona.toUpperCase();
            if (sedeZonasMap[sede].indexOf(zonaUp) === -1) sedeZonasMap[sede].push(zonaUp);
        }
    }

    SEDES = Array.from(sedesSet);
    if (SEDES.indexOf("EVENTO") === -1) SEDES.push("EVENTO");
    SEDES_CHECKIN = SEDES.filter(function(s) { return s !== "EVENTO"; });

    SEDE_ZONAS = {};
    for (const sede in sedeZonasMap) {
        const zonasArr = sedeZonasMap[sede].slice().sort();
        if (sede !== "EVENTO" && zonasArr.indexOf("EXTERIOR") === -1) zonasArr.push("EXTERIOR");
        SEDE_ZONAS[sede] = zonasArr;
    }
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
    var zonas = (SEDE_ZONAS[sede] || []).filter(function(z) { return z.toUpperCase().indexOf("SEMANERO") !== 0; });
    if (zonas.indexOf("EXTERIOR") === -1) zonas.push("EXTERIOR");
    return zonas;
}

const ZONA_EQUIPOS = {
    "RUICES": {
        "PB": [
            "CAVA CUARTO DE CONGELACION 1",
            "CAVA CUARTO DE CONGELACION 2",
            "CAVA CUARTO DE CONGELACION 3",
            "CAVA CUARTO DE CONSERVACION 1",
            "AIRE ACONDICIONADO 5 TON FAN COIL 1",
            "AIRE ACONDICIONADO 5 TON FAN COIL 2",
            "MESON REFRIGERADO 2 PTA 1 URSEL",
            "MESON REFRIGERADO 3 PTA 1 URSEL",
            "ARMARIO REFRIGERADO URSEL 1",
            "NEVERA EXHIBIDORA",
            "SISTEMA HIDRONEUMATICO",
            "TANQUES DE AGUA DE 1000LTS (8 UN)",
            "FILTRO DESBARRADOR",
            "HORNO RATIONAL A GAS 220 V PH2",
            "PELA PAPAS 220 V",
            "REBANADORA # 1",
            "EMPACADORA AL VACIO # 1 VAC MASTER",
            "EMPACADORA AL VACIO # 2 VAMA",
            "ROBOCOP",
            "FREIDORA # 1",
            "COCINA TURCA # 1",
            "MOTOR DE INYECCION DE AIRE # 1",
            "BATIDORA KITCHENAID",
            "ENFRIADOR DE AGUA # 1",
            "FILTRO DE CARBON ACTIVADO",
            "ELEVADOR DE CARGA",
            "TABLEROS ELECTRICOS",
            "FUMIGACION",
            "EXTINTORES",
            "PINTURA EXTERNA",
            "PINTURA INTERNA",
            "TABLEROS",
            "LAMPARAS",
            "ESCRITORIOS",
        ],
        "PISO 1": [
            "CAVA CUARTO DE CONSERVACION 2",
            "AIRE ACONDICIONADO 5 TON FAN COIL 3",
            "AIRE ACONDICIONADO 18000 BTU ENTRADAS",
            "AIRE ACONDICIONADO 12000 BTU PANADERIA",
            "AIRE ACONDICIONADO 18000 BTU COMEDOR",
            "MESON REFRIGERADO 2 PTA BALSAM 1 / PANTRY",
            "MESON REFRIGERADO 2 PTA BALSAM 2 / PANTRY",
            "MESON REFRIGERADO DE GAVETA BALSAM 1 / PRINCIPAL",
            "MESON REFRIGERADO DE GAVETA BALSAM 2 / PRINCIPAL",
            "MESON REFRIGERADO DE GAVETA COMIDA EN FAMILIA",
            "ARMARIO REFRIGERADO URSEL 2",
            "ABATIDOR",
            "CORTINA DE AIRE 150 CM, 220V",
            "HORNO RATIONAL TRIFASICO 220V PH3",
            "HORNO ELECTRICO BALSAM 110 V-PH1 # 1",
            "HORNO ELECTRICO BALSAM 110 V-PH1 # 2",
            "REBANADORA # 2",
            "REBANADORA # 3 NUEVA",
            "FREIDORA # 2",
            "FREIDORA # 3",
            "COCINA TURCA # 2",
            "COCINA IBOIA # 3",
            "TOPE FRANCES A GAS 1",
            "TOPE FRANCES A GAS 2",
            "PLANCHA A GAS",
            "SARTEN BASCULANTE INDUSTRIAL",
            "MOTOR DE INYECCION DE AIRE # 2",
            "MOTOR DE INYECCION DE AIRE # 3",
            "MOTOR DE INYECCION DE AIRE # 4",
            "AMASADOR # 1",
            "FERMENTADOR",
            "SISTEMA DE DETENCION DE INCENDIO",
            "LAMINADORA",
            "ENFRIADOR DE AGUA # 2",
            "FOGON BAJO # 1",
            "FOGON BAJO # 2",
            "FOGON BAJO # 3",
            "LAVAVAJILLAS 1",
            "FILTRO DE CARBON ACTIVADO",
            "ELEVADOR DE CARGA",
            "TABLEROS ELECTRICOS",
            "FUMIGACION",
            "EXTINTORES",
            "PINTURA EXTERNA",
            "PINTURA INTERNA",
            "TABLEROS",
            "LAMPARAS",
            "ESCRITORIOS",
        ],
        "PISO 2": [
            "AIRE ACONDICIONADO 5 TON FAN COIL 4",
            "AIRE ACONDICIONADO 5 TON PISO TECHO 1",
            "AIRE ACONDICIONADO 12000 BTU CUARTO DE IT",
            "ENFRIADOR DE AGUA # 3 (COMPRAS)",
            "A/A 12000 BTU GERENCIA",
            "A/A 12000 BTU SALA DE REUNIONES II",
            "A/A 18000 BTU ADMINISTRACION",
            "EXTINTOR # 1",
            "MICROONDA # 1",
            "ENFRIADOR DE BOTELLON OFICINAS",
            "A/A 18000BTU SALA DE REUNIONES",
            "FILTRO DE CARBON ACTIVADO",
            "ELEVADOR DE CARGA",
            "TABLEROS ELECTRICOS",
            "FUMIGACION",
            "EXTINTORES",
            "PINTURA EXTERNA",
            "PINTURA INTERNA",
            "TABLEROS",
            "LAMPARAS",
            "ESCRITORIOS",
        ],
        "TERRAZA": [
            "MOTOR EXTRACTOR 12000 CFM PLANTA BAJA",
            "MOTOR EXTRACTOR 21000 CFM PISO 1",
            "DUCTOS + TRAMPA GRASAS",
            "TANQUE 1000 LTS # 1",
            "TANQUE 1000 LTS # 2",
            "FILTRO DE CARBON ACTIVADO",
            "ELEVADOR DE CARGA",
            "TABLEROS ELECTRICOS",
            "FUMIGACION",
            "EXTINTORES",
            "PINTURA EXTERNA",
            "PINTURA INTERNA",
            "TABLEROS",
            "LAMPARAS",
            "ESCRITORIOS",
        ],
        "ESTACIONAMIENTO": [
            "CAVA CUARTO DE BASURA",
            "SANTA MARIA # 1 3,5 MTS",
            "SANTA MARIA # 2 3,5 MTS",
            "ENFRIADOR DE AGUA # 4",
            "FILTRO DE CARBON ACTIVADO",
            "ELEVADOR DE CARGA",
            "TABLEROS ELECTRICOS",
            "FUMIGACION",
            "EXTINTORES",
            "PINTURA EXTERNA",
            "PINTURA INTERNA",
            "TABLEROS",
            "LAMPARAS",
            "ESCRITORIOS",
        ],
        "SEMANERO LOS RUICES": [],
    },
    "DEPOSITO": {
        "PB": [
            "A/A 12000 BTU SPLIT // OFICINA PB",
            "CIRCUITO CAMARAS PLANTA BAJA",
            "CIRCUITO CAMARAS PLANTA ALTA",
            "ENFRIADOR SUSHI CAKE",
            "EXTINTORES EVENTOS",
            "EXTINTORES FIJOS NUEVO ESPACIO",
            "MALLAS ANTI RATAS",
            "MICROONDAS # 1",
            "PANTALLAS DE VIDRIO",
            "CREPERAS",
            "EXTRACTORES (6)",
            "HORNO ELECTRICO 110V # 1",
            "HORNO ELECTRICO 110V # 2",
            "PECERAS GRANDES",
            "BOMBONAS DE GAS",
            "ENFRIADOR DE BOTELLON # 1",
            "MAQUINA DE CAFE # 5 LA MARZOCO BLANCA",
            "FILTRO DE CARBON ACTIVADO",
            "ELEVADOR DE CARGA",
            "TABLEROS ELECTRICOS",
            "FUMIGACION",
            "EXTINTORES",
            "PINTURA EXTERNA",
            "PINTURA INTERNA",
            "TABLEROS",
            "LAMPARAS",
            "ESCRITORIOS",
        ],
        "PISO 1": [
            "A/A 12000 BTU VENTANA ///DORMITORIO",
            "A/A 24000 BTU SPLIT 77 OFICINA PA",
            "A/A 8000 BTU VENTANA // DORMITORIO",
            "MICROONDAS # 2",
            "REVERBERO DE MESA",
            "PECERAS PEQUEÑAS",
            "LAMPARAS DE CALOR",
            "ESCALINATAS",
            "HORNO PIZZERO OONI",
            "ENFRIADOR DE BOTELLON # 2",
            "LAVADORA FRIGIDAIRE",
            "SECADORA FRIGIDAIRE",
            "FILTRO DE CARBON ACTIVADO",
            "ELEVADOR DE CARGA",
            "TABLEROS ELECTRICOS",
            "FUMIGACION",
            "EXTINTORES",
            "PINTURA EXTERNA",
            "PINTURA INTERNA",
            "TABLEROS",
            "LAMPARAS",
            "ESCRITORIOS",
        ],
        "NUEVO ESPACIO": [
            "FREIDORA IMPERIAL",
            "FREIDORA STAR BOOK",
            "FREIDORA VULCAN 1",
            "FREIDORA VULCAN 2",
            "FREIDORA DUKER 1",
            "FREIDORA DUKER 2",
            "HORNO ASBER",
            "HORNO UNOX",
            "MAQUINA DE CAFE # 1",
            "MAQUINA DE CAFE # 2",
            "MAQUINA DE CAFE # 3",
            "MOLINO DE CAFE 1",
            "MOLINO DE CAFE 2",
            "PARRILLERAS",
            "PLANCHAS A GAS",
            "REVERBEROS DOBLES",
            "REVERBEROS SENCILLOS",
            "SALAMANDRAS",
            "MAQUINA DE CAFE # 4 BEZZERA",
            "NEVERA EXHIBIDORA",
            "LAVAVAJILLAS # 1 VIEJO",
            "LAVAVAJILLAS # 2 NUEVO",
            "FILTRO DE CARBON ACTIVADO",
            "ELEVADOR DE CARGA",
            "TABLEROS ELECTRICOS",
            "FUMIGACION",
            "EXTINTORES",
            "PINTURA EXTERNA",
            "PINTURA INTERNA",
            "TABLEROS",
            "LAMPARAS",
            "ESCRITORIOS",
            "AIRE ACONDICIONADO 5 TONELADAS ",
        ],
        "TALLER": [
            "MICROONDAS DEL TALLER # 3",
            "ENFRIADOR DE BOTELLON # 3 TALLER",
            "FILTRO DE CARBON ACTIVADO",
            "ELEVADOR DE CARGA",
            "TABLEROS ELECTRICOS",
            "FUMIGACION",
            "EXTINTORES",
            "PINTURA EXTERNA",
            "PINTURA INTERNA",
            "TABLEROS",
            "LAMPARAS",
            "ESCRITORIOS",
        ],
        "ESTACIONAMIENTO": [
            "CHAMBRANAS",
            "MOLINO DE CAFE 3",
            "TANQUES DE AGUA (8000LTS)",
            "TANQUILLAS",
            "FILTRO DE CARBON ACTIVADO",
            "ELEVADOR DE CARGA",
            "TABLEROS ELECTRICOS",
            "FUMIGACION",
            "EXTINTORES",
            "PINTURA EXTERNA",
            "PINTURA INTERNA",
            "TABLEROS",
            "LAMPARAS",
            "ESCRITORIOS",
        ],
        "SEMANERO": [],
    },
    "ALTAMIRA": {
        "OTROS": [
            "ALFOMBRA PISO",
            "EXTINTOR # 2",
            "FILTRO DE CARBON ACTIVADO",
            "ELEVADOR DE CARGA",
            "TABLEROS ELECTRICOS",
            "FUMIGACION",
            "EXTINTORES",
            "PINTURA EXTERNA",
            "PINTURA INTERNA",
            "TABLEROS",
            "LAMPARAS",
            "ESCRITORIOS",
            "LIMPIEZA DE CANALETAS",
            "LIMPIEZA DE TANQUES",
            "LIMPIEZA DE TANQUILLA",
        ],
    },
};

const SEDE_EQUIPOS = {
    "RUICES": [
        "A/A 12000 BTU GERENCIA",
        "A/A 12000 BTU SALA DE REUNIONES II",
        "A/A 18000 BTU ADMINISTRACION",
        "A/A 18000BTU SALA DE REUNIONES",
        "ABATIDOR",
        "AIRE ACONDICIONADO 12000 BTU CUARTO DE IT",
        "AIRE ACONDICIONADO 12000 BTU PANADERIA",
        "AIRE ACONDICIONADO 18000 BTU COMEDOR",
        "AIRE ACONDICIONADO 18000 BTU ENTRADAS",
        "AIRE ACONDICIONADO 5 TON FAN COIL 1",
        "AIRE ACONDICIONADO 5 TON FAN COIL 2",
        "AIRE ACONDICIONADO 5 TON FAN COIL 3",
        "AIRE ACONDICIONADO 5 TON FAN COIL 4",
        "AIRE ACONDICIONADO 5 TON PISO TECHO 1",
        "AMASADOR # 1",
        "ARMARIO REFRIGERADO URSEL 1",
        "ARMARIO REFRIGERADO URSEL 2",
        "BATIDORA KITCHENAID",
        "CAVA CUARTO DE BASURA",
        "CAVA CUARTO DE CONGELACION 1",
        "CAVA CUARTO DE CONGELACION 2",
        "CAVA CUARTO DE CONGELACION 3",
        "CAVA CUARTO DE CONSERVACION 1",
        "CAVA CUARTO DE CONSERVACION 2",
        "COCINA IBOIA # 3",
        "COCINA TURCA # 1",
        "COCINA TURCA # 2",
        "CORTINA DE AIRE 150 CM, 220V",
        "DUCTOS + TRAMPA GRASAS",
        "ELEVADOR DE CARGA",
        "EMPACADORA AL VACIO # 1 VAC MASTER",
        "EMPACADORA AL VACIO # 2 VAMA",
        "ENFRIADOR DE AGUA # 1",
        "ENFRIADOR DE AGUA # 2",
        "ENFRIADOR DE AGUA # 3 (COMPRAS)",
        "ENFRIADOR DE AGUA # 4",
        "ENFRIADOR DE BOTELLON OFICINAS",
        "ESCRITORIOS",
        "EXTINTOR # 1",
        "EXTINTORES",
        "FERMENTADOR",
        "FILTRO DE CARBON ACTIVADO",
        "FILTRO DESBARRADOR",
        "FOGON BAJO # 1",
        "FOGON BAJO # 2",
        "FOGON BAJO # 3",
        "FREIDORA # 1",
        "FREIDORA # 2",
        "FREIDORA # 3",
        "FUMIGACION",
        "HORNO ELECTRICO BALSAM 110 V-PH1 # 1",
        "HORNO ELECTRICO BALSAM 110 V-PH1 # 2",
        "HORNO RATIONAL A GAS 220 V PH2",
        "HORNO RATIONAL TRIFASICO 220V PH3",
        "LAMINADORA",
        "LAMPARAS",
        "LAVAVAJILLAS 1",
        "MESON REFRIGERADO 2 PTA 1 URSEL",
        "MESON REFRIGERADO 2 PTA BALSAM 1 / PANTRY",
        "MESON REFRIGERADO 2 PTA BALSAM 2 / PANTRY",
        "MESON REFRIGERADO 3 PTA 1 URSEL",
        "MESON REFRIGERADO DE GAVETA BALSAM 1 / PRINCIPAL",
        "MESON REFRIGERADO DE GAVETA BALSAM 2 / PRINCIPAL",
        "MESON REFRIGERADO DE GAVETA COMIDA EN FAMILIA",
        "MICROONDA # 1",
        "MOTOR DE INYECCION DE AIRE # 1",
        "MOTOR DE INYECCION DE AIRE # 2",
        "MOTOR DE INYECCION DE AIRE # 3",
        "MOTOR DE INYECCION DE AIRE # 4",
        "MOTOR EXTRACTOR 12000 CFM PLANTA BAJA",
        "MOTOR EXTRACTOR 21000 CFM PISO 1",
        "NEVERA EXHIBIDORA",
        "PELA PAPAS 220 V",
        "PINTURA EXTERNA",
        "PINTURA INTERNA",
        "PLANCHA A GAS",
        "REBANADORA # 1",
        "REBANADORA # 2",
        "REBANADORA # 3 NUEVA",
        "ROBOCOP",
        "SANTA MARIA # 1 3,5 MTS",
        "SANTA MARIA # 2 3,5 MTS",
        "SARTEN BASCULANTE INDUSTRIAL",
        "SISTEMA DE DETENCION DE INCENDIO",
        "SISTEMA HIDRONEUMATICO",
        "TABLEROS",
        "TABLEROS ELECTRICOS",
        "TANQUE 1000 LTS # 1",
        "TANQUE 1000 LTS # 2",
        "TANQUES DE AGUA DE 1000LTS (8 UN)",
        "TOPE FRANCES A GAS 1",
        "TOPE FRANCES A GAS 2",
    ],
    "DEPOSITO": [
        "A/A 12000 BTU SPLIT // OFICINA PB",
        "A/A 12000 BTU VENTANA ///DORMITORIO",
        "A/A 24000 BTU SPLIT 77 OFICINA PA",
        "A/A 8000 BTU VENTANA // DORMITORIO",
        "BOMBONAS DE GAS",
        "CHAMBRANAS",
        "CIRCUITO CAMARAS PLANTA ALTA",
        "CIRCUITO CAMARAS PLANTA BAJA",
        "CREPERAS",
        "ELEVADOR DE CARGA",
        "ENFRIADOR DE BOTELLON # 1",
        "ENFRIADOR DE BOTELLON # 2",
        "ENFRIADOR DE BOTELLON # 3 TALLER",
        "ENFRIADOR SUSHI CAKE",
        "ESCALINATAS",
        "ESCRITORIOS",
        "EXTINTORES",
        "EXTINTORES EVENTOS",
        "EXTINTORES FIJOS NUEVO ESPACIO",
        "EXTRACTORES (6)",
        "FILTRO DE CARBON ACTIVADO",
        "FREIDORA DUKER 1",
        "FREIDORA DUKER 2",
        "FREIDORA IMPERIAL",
        "FREIDORA STAR BOOK",
        "FREIDORA VULCAN 1",
        "FREIDORA VULCAN 2",
        "FUMIGACION",
        "HORNO ASBER",
        "HORNO ELECTRICO 110V # 1",
        "HORNO ELECTRICO 110V # 2",
        "HORNO PIZZERO OONI",
        "HORNO UNOX",
        "LAMPARAS",
        "LAMPARAS DE CALOR",
        "LAVADORA FRIGIDAIRE",
        "LAVAVAJILLAS # 1 VIEJO",
        "LAVAVAJILLAS # 2 NUEVO",
        "MALLAS ANTI RATAS",
        "MAQUINA DE CAFE # 1",
        "MAQUINA DE CAFE # 2",
        "MAQUINA DE CAFE # 3",
        "MAQUINA DE CAFE # 4 BEZZERA",
        "MAQUINA DE CAFE # 5 LA MARZOCO BLANCA",
        "MICROONDAS # 1",
        "MICROONDAS # 2",
        "MICROONDAS DEL TALLER # 3",
        "MOLINO DE CAFE 1",
        "MOLINO DE CAFE 2",
        "MOLINO DE CAFE 3",
        "NEVERA EXHIBIDORA",
        "PANTALLAS DE VIDRIO",
        "PARRILLERAS",
        "PECERAS GRANDES",
        "PECERAS PEQUEÑAS",
        "PINTURA EXTERNA",
        "PINTURA INTERNA",
        "PLANCHAS A GAS",
        "REVERBERO DE MESA",
        "REVERBEROS DOBLES",
        "REVERBEROS SENCILLOS",
        "SALAMANDRAS",
        "SECADORA FRIGIDAIRE",
        "TABLEROS",
        "TABLEROS ELECTRICOS",
        "TANQUES DE AGUA (8000LTS)",
        "TANQUILLAS",
    ],
    "ALTAMIRA": [
        "ALFOMBRA PISO",
        "ELEVADOR DE CARGA",
        "ESCRITORIOS",
        "EXTINTOR # 2",
        "EXTINTORES",
        "FILTRO DE CARBON ACTIVADO",
        "FUMIGACION",
        "LAMPARAS",
        "LIMPIEZA DE CANALETAS",
        "LIMPIEZA DE TANQUES",
        "LIMPIEZA DE TANQUILLA",
        "PINTURA EXTERNA",
        "PINTURA INTERNA",
        "TABLEROS",
        "TABLEROS ELECTRICOS",
    ],
};

const MANTENIMIENTOS = [
    "PREVENTIVO",
    "CORRECTIVO",
    "OTRO",
];


const RUTINA_PREVENTIVO = {
    "Rutina Horno A Gas": [
        "Verificar Entrada de Gas (Regulador y Manguera )", 
        "Lubricar  Perilla Manual de Gas",
        "Lubricar Puertas", 
        "Ajustar Estructura General",
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
        "Otros"
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
                { label: "Entrada de Agua de la Calle", type: "toggle" },
                { label: "Solicitar cisterna", type: "toggle" }
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

const RUTINA_SEMANARIO_RUICES = [
    {
        titulo: "Planta baja",
        campos: [
            { label: "Cava cuarto #1", type: "number" },
            { label: "Cava cuarto #2", type: "number" },
            { label: "Cava cuarto #3", type: "number" },
            { label: "Armario de pasapalos", type: "number" },
            { label: "Armario To Go", type: "number" },
            { label: "Armario refrigerado", type: "number" },
            { label: "Mesón refrigerado", type: "number" },
            { label: "Aire acondicionado", type: "select", options: ["Encendido", "Apagado"] },
            { label: "Extracción", type: "select", options: ["Encendido", "Apagado"] },
            { label: "Inyección", type: "select", options: ["Encendido", "Apagado"] },
            { label: "Llave de gas", type: "select", options: ["Abierta", "Cerrada"] },
            { label: "Tanques en reserva", type: "number" },
            { label: "Tanques en uso", type: "number" },
            { label: "Bomba de agua", type: "select", options: ["Automático", "Manual", "Apagada"] },
            { label: "Agua de la calle", type: "select", options: ["Si", "No"] },
            { label: "Horno Rational a gas", type: "select", options: ["Encendido", "Apagado"] }
        ]
    },
    {
        titulo: "Piso 1",
        campos: [
            { label: "Llave de gas", type: "select", options: ["Abierta", "Cerrada"] },
            { label: "Armario refrigerado", type: "number" },
            { label: "Mesón refrigerado E", type: "number" },
            { label: "Mesón refrigerado F", type: "number" },
            { label: "Horno Rational", type: "select", options: ["Encendido", "Apagado"] },
            { label: "Abatidor", type: "select", options: ["Encendido", "Apagado"] },
            { label: "Aires de sala", type: "select", options: ["Encendido", "Apagado"] },
            { label: "Aire party / pantry", type: "select", options: ["Encendido", "Apagado"] },
            { label: "Aire de panadería", type: "select", options: ["Encendido", "Apagado"] },
            { label: "Inyección", type: "select", options: ["Encendido", "Apagado"] },
            { label: "Ascensor", type: "select", options: ["Sin novedad", "Con novedad", "Fuera de servicio"] }
        ]
    },
    {
        titulo: "Estacionamiento",
        campos: [
            { label: "Santa María", type: "select", options: ["Abierta", "Cerrada"] },
            { label: "Reflectores", type: "select", options: ["Encendido", "Apagado"] },
            { label: "Cerco eléctrico", type: "select", options: ["Encendido", "Apagado"] }
        ]
    },
    {
        titulo: "Terraza",
        campos: [
            { label: "Tanque de agua", type: "select", options: ["En servicio", "Fuera de servicio"] },
            { label: "Aires acondicionados", type: "select", options: ["Encendido", "Apagado"] },
            { label: "Reflectores", type: "select", options: ["Encendido", "Apagado"] },
            { label: "Extractor 12000 CFM", type: "select", options: ["Encendido", "Apagado"] },
            { label: "Extractor 21000 CFM", type: "select", options: ["Encendido", "Apagado"] }
        ]
    },
    {
        titulo: "Tanques",
        tareas: [
            {
                label: "Tanques",
                type: "toggle",
                expand: [
                    { label: "Llenos", type: "number" },
                    { label: "Vacios", type: "number", min: 0, max: 20 },
                    { label: "Entrada de Agua de la Calle", type: "toggle" },
                    { label: "Solicitar cisterna", type: "toggle" }
                ]
            }
        ]
    }
];

const EQUIPO_RUTINA = {
    "A/A 12000 BTU GERENCIA": "Rutina Aires Acondicionados",
    "A/A 12000 BTU SALA DE REUNIONES II": "Rutina Aires Acondicionados",
    "A/A 12000 BTU SPLIT // OFICINA PB": "Rutina Aires Acondicionados",
    "A/A 12000 BTU VENTANA ///DORMITORIO": "Rutina Aires Acondicionados",
    "A/A 18000 BTU ADMINISTRACION": "Rutina Aires Acondicionados",
    "A/A 18000BTU SALA DE REUNIONES": "Rutina Aires Acondicionados",
    "A/A 24000 BTU SPLIT 77 OFICINA PA": "Rutina Aires Acondicionados",
    "A/A 8000 BTU VENTANA // DORMITORIO": "Rutina Aires Acondicionados",
    "ABATIDOR": "Rutina Cava Cuarto/Nevera",
    "AIRE ACONDICIONADO 12000 BTU CUARTO DE IT": "Rutina Aires Acondicionados",
    "AIRE ACONDICIONADO 12000 BTU PANADERIA": "Rutina Aires Acondicionados",
    "AIRE ACONDICIONADO 18000 BTU COMEDOR": "Rutina Aires Acondicionados",
    "AIRE ACONDICIONADO 18000 BTU ENTRADAS": "Rutina Aires Acondicionados",
    "AIRE ACONDICIONADO 5 TON FAN COIL 1": "Rutina Aires Acondicionados",
    "AIRE ACONDICIONADO 5 TON FAN COIL 2": "Rutina Aires Acondicionados",
    "AIRE ACONDICIONADO 5 TON FAN COIL 3": "Rutina Aires Acondicionados",
    "AIRE ACONDICIONADO 5 TON FAN COIL 4": "Rutina Aires Acondicionados",
    "AIRE ACONDICIONADO 5 TON PISO TECHO 1": "Rutina Aires Acondicionados",
    "AIRE ACONDICIONADO 5 TONELADAS ": "Rutina Aires Acondicionados",
    "ALFOMBRA PISO": "Rutina Area Comun",
    "AMASADOR # 1": "Rutina Amasadora",
    "ARMARIO REFRIGERADO URSEL 1": "Rutina Cava Cuarto/Nevera",
    "ARMARIO REFRIGERADO URSEL 2": "Rutina Cava Cuarto/Nevera",
    "BOMBONAS DE GAS": "Rutina Cocina",
    "CAVA CUARTO DE BASURA": "Rutina Cava Cuarto/Nevera",
    "CAVA CUARTO DE CONGELACION 1": "Rutina Cava Cuarto/Nevera",
    "CAVA CUARTO DE CONGELACION 2": "Rutina Cava Cuarto/Nevera",
    "CAVA CUARTO DE CONGELACION 3": "Rutina Cava Cuarto/Nevera",
    "CAVA CUARTO DE CONSERVACION 1": "Rutina Cava Cuarto/Nevera",
    "CAVA CUARTO DE CONSERVACION 2": "Rutina Cava Cuarto/Nevera",
    "CHAMBRANAS": "Rutina Lamparas de Calor",
    "CIRCUITO CAMARAS PLANTA ALTA": "Rutina Area Comun",
    "CIRCUITO CAMARAS PLANTA BAJA": "Rutina Area Comun",
    "COCINA IBOIA # 3": "Rutina Cocinas",
    "COCINA TURCA # 1": "Rutina Cocinas",
    "COCINA TURCA # 2": "Rutina Cocinas",
    "CORTINA DE AIRE 150 CM, 220V": "Rutina Area Comun",
    "CREPERAS": "Rutina Cocina",
    "DUCTOS + TRAMPA GRASAS": "",
    "ELEVADOR DE CARGA": "Rutina Area Comun",
    "EMPACADORA AL VACIO # 1 VAC MASTER": "Rutina Empacadoras al Vacio",
    "EMPACADORA AL VACIO # 2 VAMA": "Rutina Empacadoras al Vacio",
    "ENFRIADOR DE AGUA # 1": "Rutina Enfriadores de Agua",
    "ENFRIADOR DE AGUA # 2": "Rutina Enfriadores de Agua",
    "ENFRIADOR DE AGUA # 3 (COMPRAS)": "Rutina Enfriadores de Agua",
    "ENFRIADOR DE AGUA # 4": "Rutina Enfriadores de Agua",
    "ENFRIADOR DE BOTELLON # 1": "Rutina Enfriadores de Agua",
    "ENFRIADOR DE BOTELLON # 2": "Rutina Enfriadores de Agua",
    "ENFRIADOR DE BOTELLON # 3 TALLER": "Rutina Enfriadores de Agua",
    "ENFRIADOR DE BOTELLON OFICINAS": "Rutina Enfriadores de Agua",
    "ENFRIADOR SUSHI CAKE": "Rutina Cava Cuarto/Nevera",
    "ESCALINATAS": "Rutina Escalinatas",
    "EXTINTOR # 1": "Rutina Seguridad",
    "EXTINTOR # 2": "Rutina Seguridad",
    "EXTINTORES": "Rutina Seguridad",
    "EXTINTORES EVENTOS": "Rutina Seguridad",
    "EXTINTORES FIJOS NUEVO ESPACIO": "Rutina Seguridad",
    "EXTRACTORES (6)": "Rutina Cocina",
    "FERMENTADOR": "Rutina Cocina",
    "FILTRO DE CARBON ACTIVADO": "...",
    "FILTRO DESBARRADOR": "...",
    "FOGON BAJO # 1": "Rutina Cocinas",
    "FOGON BAJO # 2": "Rutina Cocinas",
    "FOGON BAJO # 3": "Rutina Cocinas",
    "FREIDORA # 1": "Rutina Freidora",
    "FREIDORA # 2": "Rutina Freidora",
    "FREIDORA # 3": "Rutina Freidora",
    "FREIDORA DUKER 1": "Rutina Freidora",
    "FREIDORA DUKER 2": "Rutina Freidora",
    "FREIDORA IMPERIAL": "Rutina Freidora",
    "FREIDORA STAR BOOK": "Rutina Freidora",
    "FREIDORA VULCAN 1": "Rutina Freidora",
    "FREIDORA VULCAN 2": "Rutina Freidora",
    "FUMIGACION": "Rutina Seguridad",
    "HORNO ASBER": "Rutina Horno A Gas",
    "HORNO ELECTRICO 110V # 1": "Rutina Horno Electrico",
    "HORNO ELECTRICO 110V # 2": "Rutina Horno Electrico",
    "HORNO ELECTRICO BALSAM 110 V-PH1 # 1": "Rutina Horno Mixto",
    "HORNO ELECTRICO BALSAM 110 V-PH1 # 2": "Rutina Horno Mixto",
    "HORNO PIZZERO OONI": "Rutina Horno A Gas",
    "HORNO RATIONAL A GAS 220 V PH2": "Rutina Horno Mixto",
    "HORNO RATIONAL TRIFASICO 220V PH3": "Rutina Horno Electrico",
    "HORNO UNOX": "Rutina Horno Electrico",
    "LAMINADORA": "Rutina Laminadora",
    "LAMPARAS": "Rutina Luminarias",
    "LAMPARAS DE CALOR": "Rutina Lamparas de Calor",
    "LAVAVAJILLAS # 1 VIEJO": "Rutina Lava Vajillas",
    "LAVAVAJILLAS # 2 NUEVO": "Rutina Lava Vajillas",
    "LAVAVAJILLAS 1": "Rutina Lava Vajillas",
    "LIMPIEZA DE CANALETAS": "",
    "LIMPIEZA DE TANQUES": "Rutina Hidroneumatico",
    "LIMPIEZA DE TANQUILLA": "Rutina Almacen",
    "MALLAS ANTI RATAS": "Rutina Seguridad",
    "MAQUINA DE CAFE # 1": "Rutina Maquinas de Cafe",
    "MAQUINA DE CAFE # 2": "Rutina Maquinas de Cafe",
    "MAQUINA DE CAFE # 3": "Rutina Maquinas de Cafe",
    "MAQUINA DE CAFE # 4 BEZZERA": "Rutina Maquinas de Cafe",
    "MAQUINA DE CAFE # 5 LA MARZOCO BLANCA": "Rutina Maquinas de Cafe",
    "MESON REFRIGERADO 2 PTA 1 URSEL": "Rutina Almacen",
    "MESON REFRIGERADO 2 PTA BALSAM 1 / PANTRY": "Rutina Almacen",
    "MESON REFRIGERADO 2 PTA BALSAM 2 / PANTRY": "Rutina Almacen",
    "MESON REFRIGERADO 3 PTA 1 URSEL": "Rutina Almacen",
    "MESON REFRIGERADO DE GAVETA BALSAM 1 / PRINCIPAL": "Rutina Almacen",
    "MESON REFRIGERADO DE GAVETA BALSAM 2 / PRINCIPAL": "Rutina Almacen",
    "MESON REFRIGERADO DE GAVETA COMIDA EN FAMILIA": "Rutina Almacen",
    "MICROONDA # 1": "Rutina Cocina",
    "MICROONDAS # 1": "Rutina Cocina",
    "MICROONDAS # 2": "Rutina Cocina",
    "MICROONDAS DEL TALLER # 3": "Rutina Cocina",
    "MOLINO DE CAFE 1": "Rutina Molinos de Cafe",
    "MOLINO DE CAFE 2": "Rutina Molinos de Cafe",
    "MOLINO DE CAFE 3": "Rutina Molinos de Cafe",
    "MOTOR DE INYECCION DE AIRE # 1": "Rutina Motores de Inyeccion ",
    "MOTOR DE INYECCION DE AIRE # 2": "Rutina Motores de Inyeccion ",
    "MOTOR DE INYECCION DE AIRE # 3": "Rutina Motores de Inyeccion ",
    "MOTOR DE INYECCION DE AIRE # 4": "Rutina Motores de Inyeccion ",
    "MOTOR EXTRACTOR 12000 CFM PLANTA BAJA": "Rutina Motores de Extracion",
    "MOTOR EXTRACTOR 21000 CFM PISO 1": "Rutina Motores de Extracion",
    "NEVERA EXHIBIDORA": "Rutina Cava Cuarto/Nevera",
    "PARRILLERAS": "Rutina Cocina",
    "PECERAS GRANDES": "Rutina Peceras",
    "PECERAS PEQUEÑAS": "Rutina Peceras",
    "PELA PAPAS 220 V": "Rutina Cocina",
    "PLANCHA A GAS": "Rutina Reberberos",
    "PLANCHAS A GAS": "Rutina Reberberos",
    "REBANADORA # 1": "Rutina Cocina",
    "REBANADORA # 2": "Rutina Cocina",
    "REBANADORA # 3 NUEVA": "Rutina Cocina",
    "REVERBERO DE MESA": "Rutina Reberberos",
    "REVERBEROS DOBLES": "Rutina Reberberos",
    "REVERBEROS SENCILLOS": "Rutina Reberberos",
    "ROBOCOP": "Rutina Cocina",
    "SALAMANDRAS": "Rutina Horno A Gas",
    "SANTA MARIA # 1 3,5 MTS": "Rutina Santa Maria",
    "SANTA MARIA # 2 3,5 MTS": "Rutina Santa Maria",
    "SARTEN BASCULANTE INDUSTRIAL": "Rutina Cocina",
    "SISTEMA DE DETENCION DE INCENDIO": "Rutina de Seguridad",
    "SISTEMA HIDRONEUMATICO": "Rutina Hidroneumatico",
    "TABLEROS": "Rutina Tablero Electrico",
    "TABLEROS ELECTRICOS": "Rutina Tablero Electrico",
    "TANQUE 1000 LTS # 1": "Rutina Hidroneumatico",
    "TANQUE 1000 LTS # 2": "Rutina Hidroneumatico",
    "TANQUES DE AGUA (8000LTS)": "Rutina Hidroneumatico",
    "TANQUES DE AGUA DE 1000LTS (8 UN)": "Rutina Hidroneumatico",
    "TANQUILLAS": "Rutina Tanquilla",
    "TOPE FRANCES A GAS 1": "Rutina Cocinas",
    "TOPE FRANCES A GAS 2": "Rutina Cocinas",
};

const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyCdRfVH7jDh_DYWML4swomY_CYczBimPugrw2iqPVqohzE10Vq2RMrJw6WGGeVBOG3pw/exec";

let rutinaActual = [];
let nombreRutinaActual = "";
let tecnicoNombre = "";
let esTaller = false;
let esSemanarioRuices = false;
let parteSemanarioActual = 0;
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
    }).then(function () {}).catch(function () {});
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
    inicializarDatosEquipos();
    cargarRutinasDinamicas();
    cargarAverias();
    document.getElementById("btnLogin").addEventListener("click", loginTecnico);
    document.getElementById("codigoTecnico").addEventListener("keydown", function (e) {
        if (e.key === "Enter") loginTecnico();
    });

    document.getElementById("btnPaso3").addEventListener("click", function () {
        if (esTaller && esSemanarioRuices) {
            semanarioSiguiente();
        } else {
            irAlPaso3();
        }
    });

    document.getElementById("btnAtras3").addEventListener("click", function () {
        document.getElementById("paso3").style.display = "none";
        document.getElementById("paso2").style.display = "block";
    });

    document.getElementById("averiaForm").addEventListener("submit", enviarAveria);

    document.getElementById("resolucionForm").addEventListener("submit", enviarResolucion);
    document.getElementById("btnAtrasResolucion").addEventListener("click", volverAlLogin);
    document.getElementById("btnAsignarTecnico").addEventListener("click", function() { asignarTecnicoWeb(); });
    document.getElementById("rImagenes").addEventListener("change", async function () {
        await agregarImagenesResolucion(Array.from(this.files));
        this.value = "";
    });
    document.getElementById("rImagenesUpload").addEventListener("change", async function () {
        await agregarImagenesResolucion(Array.from(this.files));
        this.value = "";
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
            actualizarLabelFotos();
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
        actualizarLabelFotos();
    });

    document.getElementById("aZona").addEventListener("change", function () {
        const sede = document.getElementById("aSedes").value;
        const zona = this.value;
        const equipoGroup = document.getElementById("aEquipoGroup");
        const equipoExteriorGroup = document.getElementById("aEquipoExteriorGroup");
        const equipoOtroGroup = document.getElementById("aEquipoOtroGroup");

        equipoOtroGroup.style.display = "none";
        document.getElementById("aEquipoOtro").value = "";

        if (zona === "EXTERIOR") {
            equipoGroup.style.display = "none";
            equipoExteriorGroup.style.display = "block";
            document.getElementById("aEquipoExterior").value = "";
            return;
        }
        equipoExteriorGroup.style.display = "none";
        equipoGroup.style.display = "block";
        if (zona === "OTROS") {
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
        actualizarLabelFotos();
    });

    document.getElementById("aImagenes").addEventListener("change", async function () {
        const files = Array.from(this.files);
        if (files.length > 2) {
            alert("Puedes adjuntar un maximo de 2 fotos.");
        }
        for (const file of files.slice(0, 2)) {
            if (averiaImagenes.length >= 2) break;
            try {
                averiaImagenes.push(await fileToImagen(file));
            } catch (err) {
                alert(err.message);
            }
        }
        this.value = "";
        renderImagenesPreview();
    });

    document.getElementById("aImagenesUpload").addEventListener("change", async function () {
        const files = Array.from(this.files);
        if (files.length > 2) {
            alert("Puedes adjuntar un maximo de 2 fotos.");
        }
        for (const file of files.slice(0, 2)) {
            if (averiaImagenes.length >= 2) break;
            try {
                averiaImagenes.push(await fileToImagen(file));
            } catch (err) {
                alert(err.message);
            }
        }
        this.value = "";
        renderImagenesPreview();
    });

    document.getElementById("mantenimiento").addEventListener("change", function () {
        document.getElementById("otroMantenimientoGroup").style.display = this.value === "OTRO" ? "block" : "none";
        if (this.value !== "OTRO") {
            document.getElementById("otroDescripcion").value = "";
            document.getElementById("otroRepuestosGroup").style.display = "none";
            document.getElementById("otroRepuestosRows").innerHTML = "";
            document.getElementById("otroRepSi").classList.remove("active-si", "active-no");
            document.getElementById("otroRepNo").classList.remove("active-si", "active-no");
        }
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
        esSemanarioRuices = false;
        parteSemanarioActual = 0;
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

        if (zona && zona.toUpperCase().indexOf("SEMANERO") === 0) {
            eqExteriorGroup.style.display = "none";
            eqGroup.style.display = "none";
            document.getElementById("mantenimientoGroup").style.display = "none";
            document.getElementById("formActions").style.display = "flex";
            document.getElementById("equipo").required = false;
            document.getElementById("mantenimiento").required = false;
            esTaller = true;
            esSemanarioRuices = sede === "RUICES";
        } else if (zona === "EXTERIOR") {
            eqGroup.style.display = "none";
            eqExteriorGroup.style.display = "block";
            document.getElementById("equipoExterior").value = "";
            document.getElementById("mantenimientoGroup").style.display = "block";
            document.getElementById("equipo").required = false;
            document.getElementById("mantenimiento").required = true;
            esTaller = false;
            esSemanarioRuices = false;
        } else {
            eqExteriorGroup.style.display = "none";
            eqGroup.style.display = "block";
            document.getElementById("mantenimientoGroup").style.display = "block";
            document.getElementById("equipo").required = true;
            document.getElementById("mantenimiento").required = true;
            esTaller = false;
            esSemanarioRuices = false;
            if (zona === "OTROS") {
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
        if (esTaller && esSemanarioRuices && parteSemanarioActual > 0) {
            parteSemanarioActual--;
            mostrarParteSemanario();
            setPaso2Buttons();
            return;
        }
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

    var correoReportero = "";
    for (var i = 0; i < averiasDisponibles.length; i++) {
        if (String(averiasDisponibles[i].numero) === String(numeroAv)) {
            var nombreReportero = averiasDisponibles[i].empleado;
            for (var j = 0; j < datosPersonal.length; j++) {
                if (datosPersonal[j].nombre === nombreReportero) {
                    correoReportero = datosPersonal[j].correo;
                    break;
                }
            }
            break;
        }
    }

    fetch(APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify({ tipo: "asignar_averia", numero: numeroAv, tecnicoNombre: p[0], tecnicoWhatsapp: p[1], tecnicoCorreo: p[2], correoReportero: correoReportero })
    }).then(function() {
        msg.innerHTML = '<div style="color:#2e7d32;font-weight:600;">Tecnico asignado correctamente</div>';
        var waUrl = "https://wa.me/" + p[1].replace(/[^0-9]/g, "") + "?text=" + encodeURIComponent("Hola " + p[0] + ", se te ha asignado la averia " + numeroAv);
        waDiv.style.display = "block";
        waDiv.innerHTML = '<a href="' + waUrl + '" target="_blank" style="display:inline-block;background:#25d366;color:#fff;padding:10px 20px;border-radius:8px;text-decoration:none;font-weight:600;width:100%;text-align:center;">Abrir WhatsApp y notificar</a>';
        btn.disabled = false;
        btn.textContent = "Asignar y Notificar";
    }).catch(function() {
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
    const esExterior = !esTaller && zona === "EXTERIOR";
    const equipoSelect = document.getElementById("equipo").value;
    const esOtro = equipoSelect === "__OTRO__";
    const equipo = esTaller
        ? (sedes === "RUICES" ? "Semanero los Ruices" : "SEMANERO")
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

    if (mantenimiento === "OTRO") {
        var otroDesc = document.getElementById("otroDescripcion").value.trim();
        var otroRepToggle = document.querySelector("#otroRepSi.active-si, #otroRepNo.active-si, #otroRepSi.active-no, #otroRepNo.active-no");
        if (!otroRepToggle) {
            alert("Responde Si o No en repuestos.");
            return;
        }
        var otrosRepuestos = [];
        if (otroRepToggle.dataset.value === "Si") {
            otrosRepuestos = getRepuestos("otroRepuestosRows");
            if (otrosRepuestos.length === 0) {
                alert("Agrega al menos un repuesto.");
                return;
            }
        }
        var turno = calcularTurno(hora);
        var idUnico = generarIdUnico(fecha, hora, sedes, equipo, tecnicoNombre);
        if (yaEnviado(idUnico)) {
            alert("Este registro ya fue enviado anteriormente.");
            return;
        }
        if (!confirm("Confirmar envio?\n\nFecha: " + fecha + "\nHora: " + hora + "\nSede: " + sedes + "\nEquipo: " + equipo + "\nMantenimiento: OTRO")) {
            return;
        }
        var registroOtro = {
            id: idUnico,
            fecha: fecha, hora: hora, turno: turno,
            sedes: sedes, zona: zona, tecnico: tecnicoNombre,
            equipo: equipo, mantenimiento: "OTRO",
            rutina: "OTRO",
            checkinKeys: [], checkinValues: [],
            descripcion: otroDesc,
            repuestos: otrosRepuestos
        };
        marcarEnviado(idUnico);
        saveToLocalStorage(registroOtro);
        fetch(APPS_SCRIPT_URL, {
            method: "POST", mode: "no-cors",
            body: JSON.stringify(registroOtro)
        }).then(function () {
            alert("Registro enviado correctamente.");
            clearForm();
        }).catch(function () {
            alert("Error de conexion. El registro se enviara cuando haya internet.");
            clearForm();
        });
        return;
    }

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
            populateSelect("sedes", SEDES_CHECKIN);
            populateSelect("mantenimiento", MANTENIMIENTOS);
            limpiarHora();
            return;
        }
        if (personal && personal.tipo === "Tecnico" && !esMantenimiento) {
            tecnicoNombre = personal.nombre;
            empleadoNombre = personal.nombre;
            errorEl.style.display = "none";
            document.getElementById("loginSection").style.display = "none";
            document.getElementById("averiaForm").style.display = "block";
            document.getElementById("empleadoInfo").textContent = "Tecnico: " + tecnicoNombre;
            populateSelect("aSedes", SEDES);
            limpiarHora("a");
            return;
        }
        if (personal && personal.tipo === "Empleado") {
            empleadoNombre = personal.nombre;
            errorEl.style.display = "none";
            document.getElementById("loginSection").style.display = "none";
            document.getElementById("averiaForm").style.display = "block";
            document.getElementById("empleadoInfo").textContent = "Empleado: " + empleadoNombre;
            populateSelect("aSedes", SEDES);
            limpiarHora("a");
            return;
        }
        errorEl.textContent = "Credencial o codigo de averia no valido. Solicita tu registro al administrador.";
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
                }).catch(function() {});
                procesarLogin(av);
            } else {
                procesarLogin(av);
            }
        });
        return;
    }

    procesarLogin(null);
}

function actualizarLabelFotos() {
    var sede = document.getElementById("aSedes").value;
    var equipoSelect = document.getElementById("aEquipo").value;
    var esEvento = sede === "EVENTO";
    var esOtro = equipoSelect === "__OTRO__";
    var label = document.getElementById("aFotosLabel");
    if (esEvento || esOtro) {
        label.textContent = "Fotos (maximo 2) - Obligatoria";
        label.style.color = "#d32f2f";
        label.style.fontWeight = "700";
    } else {
        label.textContent = "Fotos (maximo 2) - Opcional";
        label.style.color = "";
        label.style.fontWeight = "";
    }
}

function limpiarHora(prefix) {
    prefix = prefix || "";
    var id = prefix === "a" ? "aHora" : prefix === "r" ? "rHora" : "hora";
    var el = document.getElementById(id);
    if (el) el.value = "";
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
    var id = prefix === "a" ? "aHora" : prefix === "r" ? "rHora" : "hora";
    var el = document.getElementById(id);
    return el ? (el.value || "") : "";
}

function calcularTurno(hora24) {
    var horas = parseInt(hora24.split(":")[0], 10);
    if (horas >= 8 && horas < 17) return "Diurno";
    if (horas >= 19 && horas < 23) return "Nocturno";
    if (horas >= 23 || horas < 7) return "Madrugada";
    return "Diurno";
}

function renderRutina(equipo, mantenimiento) {
    const container = document.getElementById("checkinsContainer");
    container.innerHTML = "";
    container.style.display = "";
    esDinamica = false;

    if (esTaller) {
        if (esSemanarioRuices) {
            nombreRutinaActual = "Semanero RUICES";
            renderSemanarioRuices(container);
        } else {
            nombreRutinaActual = "Actividades de Semaneros";
            rutinaActual = RUTINA_TALLER["Actividades de Semaneros"] || [];
            renderExpandableTasks(container);
        }
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
        if (!label) return;
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
    if (esTaller && esSemanarioRuices) {
        const esUltima = parteSemanarioActual >= RUTINA_SEMANARIO_RUICES.length - 1;
        document.getElementById("btnPaso3").style.display = esUltima ? "none" : "block";
        document.getElementById("btnEnviar").style.display = esUltima ? "block" : "none";
        var atajo = document.querySelector(".btn-atajo-tanques");
        if (atajo) atajo.style.display = esUltima ? "none" : "block";
    } else {
        document.getElementById("btnPaso3").style.display = esTaller ? "none" : "block";
        document.getElementById("btnEnviar").style.display = esTaller ? "block" : "none";
    }
    document.getElementById("descripcionTallerGroup").style.display = esTaller ? "block" : "none";
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
        if (!label) return false;
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

function toggleOtroRepuestos(btn) {
    const group = btn.parentElement;
    group.querySelectorAll(".toggle-btn").forEach(b => {
        b.classList.remove("active-si", "active-no");
    });
    btn.classList.add(btn.dataset.value === "Si" ? "active-si" : "active-no");
    const repuestosGroup = document.getElementById("otroRepuestosGroup");
    repuestosGroup.style.display = btn.dataset.value === "Si" ? "block" : "none";
    if (btn.dataset.value === "No") {
        document.getElementById("otroRepuestosRows").innerHTML = "";
    }
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

function agregarRepuestoRow(containerId) {
    const rows = document.getElementById(containerId || "repuestosRows");
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

function getRepuestos(containerId) {
    const rowsEl = document.getElementById(containerId || "repuestosRows");
    const repuestos = [];
    rowsEl.querySelectorAll(".repuesto-row").forEach(row => {
        const nombre = row.querySelector(".repuesto-nombre").value.trim();
        const cantidad = row.querySelector(".repuesto-cantidad").value.trim();
        if (nombre) repuestos.push({ nombre: nombre, cantidad: cantidad });
    });
    return repuestos;
}

function toggleRepuestosResolucion(btn) {
    const group = btn.parentElement;
    group.querySelectorAll(".toggle-btn").forEach(b => {
        b.classList.remove("active-si", "active-no");
    });
    btn.classList.add(btn.dataset.value === "Si" ? "active-si" : "active-no");

    const repuestosGroup = document.getElementById("rRepuestosGroup");
    repuestosGroup.style.display = btn.dataset.value === "Si" ? "block" : "none";
    if (btn.dataset.value === "No") {
        document.getElementById("rRepuestosRows").innerHTML = "";
    }
}

function resetPaso3() {
    document.getElementById("paso3").style.display = "none";
    document.getElementById("repuestosGroup").style.display = "none";
    document.getElementById("repuestosRows").innerHTML = "";
    document.querySelectorAll("#repSi, #repNo").forEach(b => {
        b.classList.remove("active-si", "active-no");
    });
}

function renderExpandableTasks(container, tasks, withLabel) {
    const rutinaTareas = tasks || rutinaActual;
    if (withLabel !== false) {
        const labelRutina = document.createElement("p");
        labelRutina.style.cssText = "color:#5f9263;font-size:0.8rem;font-weight:600;margin-bottom:4px;";
        labelRutina.textContent = "Actividades de Semaneros";
        container.appendChild(labelRutina);
    }

    rutinaTareas.forEach((task, idx) => {
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
    document.querySelectorAll(".checkin-main-toggle").forEach((group) => {
        const anyBtn = group.querySelector(".toggle-btn[data-index]");
        if (!anyBtn) return;
        const item = rutinaActual[parseInt(anyBtn.dataset.index, 10)];
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
    const esExterior = !esTaller && zona === "EXTERIOR";
    const equipoSelect = document.getElementById("equipo").value;
    const esOtro = equipoSelect === "__OTRO__";
    const equipo = esTaller
        ? (sedes === "RUICES" ? "Semanero los Ruices" : "SEMANERO")
        : esExterior
        ? document.getElementById("equipoExterior").value.trim()
        : esOtro
        ? document.getElementById("equipoOtro").value.trim()
        : equipoSelect;
    const mantenimiento = esTaller ? "" : document.getElementById("mantenimiento").value;
    const descripcion = document.getElementById(esTaller ? "descripcionTaller" : "descripcion").value.trim();

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
        if (esSemanarioRuices) {
            if (!semanarioRuicesCompleto()) {
                alert("Completa todas las sub-preguntas de las opciones marcadas con Si antes de enviar.");
                return;
            }
            var sinMarcar = contarSemanarioSinMarcar();
            if (sinMarcar > 0) {
                if (!confirm("Tienes " + sinMarcar + " opcion(es) sin marcar. ¿Deseas enviar de todas formas?")) {
                    return;
                }
            }
            enviarSemanarioRuices(sedes, fecha, hora, zona, descripcion);
            return;
        }
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
        if (!label) return false;
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

    if (tallerValues["Tanques"] && tallerValues["Tanques"].sub &&
        tallerValues["Tanques"].sub["Solicitar cisterna"] === "Si") {
        postJSON({ tipo: "solicitar_cisterna", sede: sedes, fecha: fecha, hora: hora, tecnico: tecnicoNombre }).catch(function () {});
    }

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
            equipo: sedes === "RUICES" ? "Semanero los Ruices" : "SEMANERO",
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

function renderSemanarioRuices(container) {
    container.innerHTML = "";
    parteSemanarioActual = 0;

    RUTINA_SEMANARIO_RUICES.forEach((parte, pi) => {
        const div = document.createElement("div");
        div.className = "semanario-part";
        div.dataset.part = pi;
        div.style.display = pi === 0 ? "block" : "none";

        const titulo = document.createElement("h3");
        titulo.className = "semanario-part-titulo";
        titulo.textContent = parte.titulo;
        div.appendChild(titulo);

        if (parte.campos) {
            parte.campos.forEach((campo, ci) => {
                const f = document.createElement("div");
                f.className = "semanario-campo";
                f.dataset.part = pi;
                f.dataset.campo = ci;

                const l = document.createElement("label");
                l.textContent = campo.label;

                const wrap = document.createElement("div");
                wrap.className = "semanario-respuesta";

                const tg = document.createElement("div");
                tg.className = "semanario-toggle";

                const btnSi = document.createElement("button");
                btnSi.type = "button";
                btnSi.className = "toggle-btn";
                btnSi.dataset.value = "Si";
                btnSi.textContent = "Si";

                const btnNo = document.createElement("button");
                btnNo.type = "button";
                btnNo.className = "toggle-btn";
                btnNo.dataset.value = "No";
                btnNo.textContent = "No";

                let inp;
                if (campo.type === "select") {
                    inp = document.createElement("select");
                    inp.className = "semanario-select";
                    const optEmpty = document.createElement("option");
                    optEmpty.value = "";
                    optEmpty.textContent = "Seleccionar...";
                    inp.appendChild(optEmpty);
                    (campo.options || []).forEach(op => {
                        const o = document.createElement("option");
                        o.value = op;
                        o.textContent = op;
                        inp.appendChild(o);
                    });
                } else {
                    inp = document.createElement("input");
                    inp.type = campo.type === "text" ? "text" : "number";
                    inp.step = "any";
                    inp.className = "semanario-number-input";
                }
                inp.dataset.part = pi;
                inp.dataset.campo = ci;
                inp.style.display = "none";

                function setCampoSemanario(val) {
                    tg.querySelectorAll(".toggle-btn").forEach(b => {
                        b.classList.remove("active-si", "active-no");
                    });
                    (val === "Si" ? btnSi : btnNo).classList.add(val === "Si" ? "active-si" : "active-no");
                    if (val === "Si") {
                        inp.style.display = "block";
                    } else {
                        inp.style.display = "none";
                        inp.value = "";
                    }
                }

                btnSi.addEventListener("click", function () { setCampoSemanario("Si"); });
                btnNo.addEventListener("click", function () { setCampoSemanario("No"); });

                tg.appendChild(btnSi);
                tg.appendChild(btnNo);
                wrap.appendChild(tg);
                wrap.appendChild(inp);
                f.appendChild(l);
                f.appendChild(wrap);
                div.appendChild(f);
            });
        } else if (parte.tareas) {
            rutinaActual = parte.tareas;
            renderExpandableTasks(div, parte.tareas, false);
        }

        container.appendChild(div);
    });

    var atajo = document.createElement("button");
    atajo.type = "button";
    atajo.className = "btn-atajo-tanques";
    atajo.textContent = "Tanques";
    atajo.onclick = function () {
        parteSemanarioActual = RUTINA_SEMANARIO_RUICES.length - 1;
        mostrarParteSemanario();
        setPaso2Buttons();
    };
    container.appendChild(atajo);
}

function mostrarParteSemanario() {
    document.querySelectorAll(".semanario-part").forEach(p => {
        p.style.display = parseInt(p.dataset.part) === parteSemanarioActual ? "block" : "none";
    });
}

function semanarioSiguiente() {
    if (parteSemanarioActual < RUTINA_SEMANARIO_RUICES.length - 1) {
        parteSemanarioActual++;
        mostrarParteSemanario();
        setPaso2Buttons();
    }
}

function semanarioRuicesCompleto() {
    let ok = true;
    document.querySelectorAll(".semanario-part").forEach(partEl => {
        const pi = parseInt(partEl.dataset.part);
        const parte = RUTINA_SEMANARIO_RUICES[pi];
        if (!parte) return;
        if (parte.campos) {
            parte.campos.forEach((campo, ci) => {
                const campoEl = partEl.querySelector('.semanario-campo[data-campo="' + ci + '"]');
                if (!campoEl) return;
                const active = campoEl.querySelector(".semanario-toggle .active-si, .semanario-toggle .active-no");
                if (!active) return;
                if (active.dataset.value === "Si") {
                    const inp = campoEl.querySelector(".semanario-number-input, .semanario-select");
                    if (!inp || inp.value.trim() === "") ok = false;
                }
            });
        } else if (parte.tareas) {
            partEl.querySelectorAll(".taller-task").forEach(wrapper => {
                const toggleActive = wrapper.querySelector(".taller-task-row .active-si, .taller-task-row .active-no");
                if (!toggleActive) return;
                if (!tallerSubCompleto(wrapper)) ok = false;
            });
        }
    });
    return ok;
}

function contarSemanarioSinMarcar() {
    let sinMarcar = 0;
    document.querySelectorAll(".semanario-part").forEach(partEl => {
        const pi = parseInt(partEl.dataset.part);
        const parte = RUTINA_SEMANARIO_RUICES[pi];
        if (!parte) return;
        if (parte.campos) {
            parte.campos.forEach((campo, ci) => {
                const campoEl = partEl.querySelector('.semanario-campo[data-campo="' + ci + '"]');
                if (!campoEl) return;
                const active = campoEl.querySelector(".semanario-toggle .active-si, .semanario-toggle .active-no");
                if (!active) sinMarcar++;
            });
        } else if (parte.tareas) {
            partEl.querySelectorAll(".taller-task").forEach(wrapper => {
                const toggleActive = wrapper.querySelector(".taller-task-row .active-si, .taller-task-row .active-no");
                if (!toggleActive) sinMarcar++;
            });
        }
    });
    return sinMarcar;
}

function getSemanarioRuicesValues() {
    const partes = [];
    document.querySelectorAll(".semanario-part").forEach(partEl => {
        const pi = parseInt(partEl.dataset.part);
        const parte = RUTINA_SEMANARIO_RUICES[pi];
        if (!parte) return;
        if (parte.campos) {
            const respuestas = {};
            parte.campos.forEach((campo, ci) => {
                const campoEl = partEl.querySelector('.semanario-campo[data-campo="' + ci + '"]');
                if (!campoEl) { respuestas[campo.label] = ""; return; }
                const active = campoEl.querySelector(".semanario-toggle .active-si, .semanario-toggle .active-no");
                if (!active) { respuestas[campo.label] = ""; return; }
                if (active.dataset.value === "No") {
                    respuestas[campo.label] = "";
                    return;
                }
                const inp = campoEl.querySelector(".semanario-number-input, .semanario-select");
                respuestas[campo.label] = inp ? inp.value.trim() : "";
            });
            partes.push({ titulo: parte.titulo, tipo: "campos", respuestas: respuestas });
        } else if (parte.tareas) {
            const respuestas = {};
            partEl.querySelectorAll(".taller-task").forEach(wrapper => {
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
                    respuestas[task.label] = { value: val, sub: sub };
                } catch (err) {
                    alert("Error en tarea: " + err.message);
                }
            });
            partes.push({ titulo: parte.titulo, tipo: "tareas", respuestas: respuestas });
        }
    });
    return partes;
}

function enviarSemanarioRuices(sedes, fecha, hora, zona, descripcion) {
    const valores = getSemanarioRuicesValues();
    const turno = calcularTurno(hora);

    const idUnico = generarIdUnico(fecha, hora, sedes, "Semanero RUICES", tecnicoNombre);
    if (yaEnviado(idUnico)) {
        alert("Este registro ya fue enviado anteriormente.");
        return;
    }

    if (!confirm("Confirmar envio del Semanero de RUICES?\n\nFecha: " + fecha + "\nHora: " + hora + "\nTecnico: " + tecnicoNombre)) {
        return;
    }

    let parteTanques = null;
    const camposPartes = [];
    valores.forEach(v => {
        if (v.tipo === "tareas") parteTanques = v;
        else camposPartes.push(v);
    });

    if (parteTanques) {
        const tarea = parteTanques.respuestas["Tanques"];
        if (tarea && tarea.sub && tarea.sub["Solicitar cisterna"] === "Si") {
            postJSON({ tipo: "solicitar_cisterna", sede: sedes, fecha: fecha, hora: hora, tecnico: tecnicoNombre }).catch(function () {});
        }
        if (tarea && tarea.value === "Si") {
            const idTanques = generarIdUnico(fecha, hora, sedes, "Tanques", tecnicoNombre);
            if (!yaEnviado(idTanques)) {
                const regTanques = {
                    id: idTanques,
                    fecha: fecha,
                    hora: hora,
                    turno: turno,
                    sedes: sedes,
                    zona: zona,
                    tecnico: tecnicoNombre,
                    equipo: sedes === "RUICES" ? "Semanero los Ruices" : "SEMANERO",
                    mantenimiento: "",
                    rutina: "Actividades de Semaneros - Tanques",
                    task: "Tanques",
                    taskValue: tarea.value,
                    taskSub: tarea.sub,
                    descripcion: descripcion
                };
                marcarEnviado(idTanques);
                saveToLocalStorage(regTanques);
                fetch(APPS_SCRIPT_URL, {
                    method: "POST",
                    mode: "no-cors",
                    body: JSON.stringify(regTanques)
                }).then(() => {}).catch(() => {});
            }
        }
    }

    const registro = {
        tipo: "semanario_ruices",
        id: idUnico,
        fecha: fecha,
        hora: hora,
        turno: turno,
        sedes: sedes,
        zona: zona,
        tecnico: tecnicoNombre,
        titulos: camposPartes,
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
        alert("Semanero de RUICES enviado correctamente.");
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
    document.getElementById("descripcionTaller").value = "";
    document.getElementById("descripcionTallerGroup").style.display = "none";
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
    limpiarHora();
    rutinaActual = [];
    nombreRutinaActual = "";
    esTaller = false;
    esSemanarioRuices = false;
    parteSemanarioActual = 0;
    esDinamica = false;
    resetPaso3();
    document.getElementById("otroMantenimientoGroup").style.display = "none";
    document.getElementById("otroDescripcion").value = "";
    document.getElementById("otroRepuestosGroup").style.display = "none";
    document.getElementById("otroRepuestosRows").innerHTML = "";
    document.getElementById("otroRepSi").classList.remove("active-si", "active-no");
    document.getElementById("otroRepNo").classList.remove("active-si", "active-no");
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
    document.getElementById("aImagenes").value = "";
    document.getElementById("aImagenesUpload").value = "";
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
    const esExterior = !esEvento && zona === "EXTERIOR";
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
    if ((esEvento || esOtro) && averiaImagenes.length === 0) {
        alert("Debes adjuntar al menos 1 foto.");
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

    for (var i = 0; i < datosPersonal.length; i++) {
        if (datosPersonal[i].nombre === empleadoNombre) {
            registro.correoReportero = datosPersonal[i].correo;
            registro.correoJefe = datosPersonal[i].jefe;
            break;
        }
    }

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
    var label = document.getElementById("aFotosLabel");
    label.textContent = "Fotos (maximo 2) - Opcional";
    label.style.color = "";
    label.style.fontWeight = "";
    limpiarHora("a");
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
    limpiarHora("r");
    clearResolucionForm();
    configurarTecnicoResolucion(av.asignado || "");

    document.getElementById("resolucionForm").style.display = "block";
}

function configurarTecnicoResolucion(asignado) {
    var select = document.getElementById("rTecnico");
    if (asignado) {
        select.innerHTML = '<option value="" disabled>Seleccionar tecnico...</option>';
        var opt = document.createElement("option");
        opt.value = asignado;
        opt.textContent = asignado;
        select.appendChild(opt);
        select.value = asignado;
        select.disabled = true;
    } else {
        select.disabled = false;
        populateSelect("rTecnico", Object.values(TECNICOS));
    }
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

async function agregarImagenesResolucion(files) {
    if (files.length > 2) {
        alert("Puedes adjuntar un maximo de 2 fotos.");
    }
    for (const file of files.slice(0, 2)) {
        if (resolucionImagenes.length >= 2) break;
        try {
            resolucionImagenes.push(await fileToImagen(file));
        } catch (err) {
            alert(err.message);
        }
    }
    renderResolucionImagenesPreview();
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

    const repuestoToggle = document.querySelector("#rRepSi.active-si, #rRepNo.active-si, #rRepSi.active-no, #rRepNo.active-no");
    let repuestos = [];
    if (repuestoToggle && repuestoToggle.dataset.value === "Si") {
        repuestos = getRepuestos("rRepuestosRows");
        if (repuestos.length === 0) {
            alert("Agrega al menos un repuesto.");
            return;
        }
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
        repuestos: repuestos,
        imagenes: imagenesNuevas
    };

    for (var i = 0; i < datosPersonal.length; i++) {
        if (datosPersonal[i].nombre === tecnico) {
            registro.correoReportero = datosPersonal[i].correo;
            break;
        }
    }

    for (var i = 0; i < averiasDisponibles.length; i++) {
        if (String(averiasDisponibles[i].numero) === String(numero)) {
            var nombreReportero = averiasDisponibles[i].empleado;
            for (var j = 0; j < datosPersonal.length; j++) {
                if (datosPersonal[j].nombre === nombreReportero) {
                    registro.correoReportero = datosPersonal[j].correo;
                    break;
                }
            }
            break;
        }
    }

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
    var rTecnicoSelect = document.getElementById("rTecnico");
    rTecnicoSelect.disabled = false;
    rTecnicoSelect.value = "";
    document.getElementById("rDescripcion").value = "";
    document.getElementById("rImagenes").value = "";
    document.getElementById("rImagenesUpload").value = "";
    document.getElementById("rImagenesPreview").innerHTML = "";
    document.getElementById("rDescripcionGroup").style.display = "none";
    document.getElementById("rRepuestosGroup").style.display = "none";
    document.getElementById("rRepuestosRows").innerHTML = "";
    ["rSi", "rNo", "rProceso", "rFalsa"].forEach(id => {
        document.getElementById(id).classList.remove("active-si", "active-no");
    });
    ["rRepSi", "rRepNo"].forEach(id => {
        document.getElementById(id).classList.remove("active-si", "active-no");
    });
    resolucionImagenes = [];
    limpiarHora("r");
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
