
const SEDES = [
    "DEPOSITO",
    "RUICES",
    "ALTAMIRA",
];

const SEDE_ZONAS = {
    "ALTAMIRA": [],
    "RUICES": ["PB", "Piso 1", "Piso 2", "Terraza"],
    "DEPOSITO": ["PB", "Piso 1", "Nuevo espacio", "Taller"]
};

const ZONA_EQUIPOS = {
    "DEPOSITO": {
        "PB": [
            "A/A 12000 BTU split // oficina PB",
            "Chambranas",
            "Circuito Camaras Planta Baja",
            "Creperas",
            "Enfriador de Botellon 1",
            "Enfriador sushi cake",
            "Extractores (6)",
            "Extintores",
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
            "salamandras"
        ],
        "Piso 1": [
            "A/A 12000 Btu Ventana ///Dormitorio",
            "A/A 24000 Btu Split 77 Oficina Pa",
            "A/A 8000 BTU Ventana // dormitorio",
            "Bombonas de gas",
            "Circuito Camaras Planta Alta",
            "Enfriador de Botellon 2",
            "Horno pizzero Ooni",
            "Microondas 2",
            "Peceras Pequenas",
            "Reverbero de mesa",
            "Plancha Electrica 110v 1",
            "Plancha Electrica 110v 2",
        ],
        "Nuevo espacio": [     
            "Planchas a gas 1",
            "Planchas a gas 2",
            "Planchas a gas 3",
            "Planchas a gas 4",
            "Planchas a gas 5",
            "Plancha Electrica 220v 1",
            "Plancha Electrica 220v 2",
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
            "Freidora 1",
            "Horno Rational a Gas 220 V ph2",
            "Meson refrigerado 2 pta 1 Ursel",
            "Meson refrigerado 3 pta 1 Ursel",
            "MOTOR DE INYECCION DE AIRE 1",
            "MOTOR DE INYECCION DE AIRE 4",
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
            "Plancha a gas 6",
            "Rebanadora 2",
            "Sarten Basculante Industrial",
            "SISTEMA DE DETENCION DE INCENDIO",
            "Tope Frances a Gas 1",
            "Tope Frances a Gas 2"
        ],
        "Piso 2": [
            "Aire acondicionado 5 ton Fan Coil 4",
            "Aire Acondicionado 5 ton Piso techo 1",
            "Aire Acondicionado 12000 Btu Cuarto de IT",
            "Enfriador de agua 3"
        ],
        "Terraza": [
            "Ductos + trampa grasas",
            "Motor extractor 12000 CFM Planta Baja",
            "Motor extractor 21000 CFM Piso 1"
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
        "Enfriador de Botellon 3", // SIN ZONA
        "Enfriador sushi cake",
        "Escalinatas", // SIN ZONA
        "Extractores (6)",
        "Extintores",
        "Extintores Fijos",
        "Freidora Duker 1",
        "Freidora Duker 2",
        "Freidora Imperial",
        "Freidora Star Book",
        "Freidora Vulcan 1",
        "Freidora Vulcan 2",
        "Fumigacion", // SIN ZONA
        "Horno Asber",
        "Horno electrico 110v 1",
        "Horno electrico 110v 2",
        "Horno pizzero Ooni",
        "Horno Unox", // SIN ZONA
        "Lamparas de calor 1", // SIN ZONA
        "Lamparas de calor 2", // SIN ZONA
        "Lamparas de calor 3", // SIN ZONA
        "Lamparas de calor 4", // SIN ZONA
        "Lamparas de calor 5 (Madera)", // SIN ZONA
        "Lamparas de calor 6 (Madera)", // SIN ZONA
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
        "Microondas 3", // SIN ZONA
        "Molino de cafe 1",
        "Molino de cafe 2",
        "Molino de cafe 3",
        "Molino de cafe 4", // SIN ZONA
        "Molino de cafe 5", // SIN ZONA
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
        "Tableros", // SIN ZONA
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
        "Fumigacion", // SIN ZONA
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
        "Tableros Electricos"
    ]
};

const MANTENIMIENTOS = [
    "PREVENTIVO",
    "CORRECTIVO",
];

const TECNICOS = {
    "180236394": "ALBERTO",
    "143977568": "ANGEL",
    "98636442": "AQUILES",
    "79927276": "ALEXIS",
    "196849519": "ENRIQUE",
    "65160601": "RAFAEL",
    "149708163": "SANDRY",
    "001" : "CAROLINA"

};

const RUTINA_PREVENTIVO = {
    "Rutina Horno A Gas": [
        "Verificar Entrada de Gas (Regulador y Manguera )",
        "Lubricar  Perilla Manual de Gas",
        "Lubricar Puertas",
        "Ajustar Estructura General"
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
    "Rutina Cava Cuarto": [
        "Limpieza con Agua a Presion el Condensador ",
        "Limpieza con Agua a Presion el Evaporador",
        "Mantenimiento de Motores del Condesador ",
        "Mantenimiento de Motores del Evaporador",
        "Verificar Estado de Aislantes Termicos",
        "Ajustes de Puertas",
        "Chequear Cortinas de PVC",
        "Chequeo de Presiones",
        "Chequeo de Consumo Electrico",
        "Ajuste de Terminales Electricos",
        "Limpieza de Tablero",
        "Limpieza de Bandeja del Evaporador",
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
    "Rutina Motores de Inyeccion ": [],
    "Rutina Motores de Extracion": [],
    "Rutina Freidora": [],
    "Rutina Aires Acondicionados": [],
    "Rutina Abatidor": [],
    "Rutina Hidroneumatico": [],
    "Rutina Tablero Electrico": [],
    "Rutina Empacadoras al Vacio": [],
    "Rutina Sarten Basculante ": [],
    "Rutina Luminarias": [],
    "Rutina Neveras" : []
};

const RUTINA_CORRECTIVO = {
    "Rutina Correctiva": [
        "Diagnostico de falla",
        "Reparacion realizada",
        "Prueba de funcionamiento",
        "Limpieza del area"
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
        }
    ]
};

const EQUIPO_RUTINA = {
    "A/A 12000 BTU split // oficina PB": "Rutina Cava Cuarto",
    "A/A 12000 Btu Ventana ///Dormitorio": "Rutina Cava Cuarto",
    "A/A 24000 Btu Split 77 Oficina Pa": "Rutina Cava Cuarto",
    "A/A 8000 BTU Ventana // dormitorio": "Rutina Cava Cuarto",
    "A/A 12000 BTU Gerencia": "Rutina Cava Cuarto",
    "A/A 12000 BTU Lobby": "Rutina Cava Cuarto",
    "A/A 12000 Btu Sala de Reuniones": "Rutina Cava Cuarto",
    "A/A 12000 BTU Ventas": "Rutina Cava Cuarto",
    "A/A Capicua 18000btu": "Rutina Cava Cuarto",
    "Aire acondicionado 5 ton Fan coil 1": "Rutina Cava Cuarto",
    "Aire acondicionado 5 ton Fan coil 2": "Rutina Cava Cuarto",
    "Aire acondicionado 5 ton Fan Coil 3": "Rutina Cava Cuarto",
    "Aire acondicionado 5 ton Fan Coil 4": "Rutina Cava Cuarto",
    "Aire Acondicionado 5 ton Piso techo 1": "Rutina Cava Cuarto",
    "Aire Acondicionado 18000 Btu Entradas": "Rutina Cava Cuarto",
    "Aire Acondicionado 12000 Btu Panaderia": "Rutina Cava Cuarto",
    "Aire Acondicionado 18000Btu Comedor": "Rutina Cava Cuarto",
    "Aire Acondicionado 12000 Btu Cuarto de IT": "Rutina Cava Cuarto",
    "Armario refrigerado Ursel 1": "Rutina Almacen",
    "Armario refrigerado Ursel 2": "Rutina Almacen",
    "Abatidor": "Rutina Cocina",
    "Chambranas": "Rutina Lamparas de Calor",
    "Circuito Camaras Planta Baja": "Rutina Area Comun",
    "Circuito Camaras Planta Alta": "Rutina Area Comun",
    "Creperas": "Rutina Cocina",
    "Cava cuarto de Congelacion 1": "Rutina Cava Cuarto",
    "Cava cuarto de Congelacion 2": "Rutina Cava Cuarto",
    "Cava cuarto de Congelacion 3": "Rutina Cava Cuarto",
    "Cava cuarto de Conservacion 1": "Rutina Cava Cuarto",
    "Cava cuarto de Conservacion 2": "Rutina Cava Cuarto",
    "Cava Cuarto de Basura": "Rutina Cava Cuarto",
    "Cocina 1 (turca PB)": "Rutina Cocinas",
    "Cocina 2 (turca Piso 1)" : "Rutina Cocinas",
    "Cocina 3 (Iboia Piso 1)": "Rutina Cocinas",
    "Cortina de Aire 150 cm 220V": "Rutina Area Comun",
    "Enfriador sushi cake": "Rutina Almacen",
    "Extintores": "Rutina Seguridad",
    "Extintores Fijos": "Rutina Seguridad",
    "Extractores (6)": "Rutina Cocina",
    "Enfriador de Botellon 1": "Rutina Enfriadores de Agua",
    "Enfriador de Botellon 2": "Rutina Enfriadores de Agua",
    "Enfriador de Botellon 3": "Rutina Enfriadores de Agua",
    "Empacadora al Vacio 1": "Rutina Cocina",
    "Empacadora al Vacio 2": "Rutina Cocina",
    "Extintores": "Rutina Seguridad",
    "Enfriador de agua 1": "Rutina Enfriadores de Agua",
    "Enfriador de agua 2": "Rutina Enfriadores de Agua",
    "Enfriador de agua 3": "Rutina Enfriadores de Agua",
    "Enfriador de agua 4": "Rutina Enfriadores de Agua",
    "Freidora Imperial": "Rutina Cocina",
    "Freidora Star Book": "Rutina Cocina",
    "Freidora Vulcan 1": "Rutina Cocina",
    "Freidora Vulcan 2": "Rutina Cocina",
    "Freidora Duker 1": "Rutina Cocina",
    "Freidora Duker 2": "Rutina Cocina",
    "Freidora 1": "Rutina Cocina",
    "Freidora 2": "Rutina Cocina",
    "Freidora 3": "Rutina Cocina",
    "Fumigacion": "Rutina Seguridad",
    "Fumigacion": "Rutina Seguridad",
    "Filtro desbarrador": "Rutina Almacen",
    "Filtro de carbon activado": "Rutina Almacen",
    "Horno Asber": "Rutina Horno A Gas",
    "Horno Unox": "Rutina Horno Electrico",
    "Horno electrico 110v 1": "Rutina Horno Electrico",
    "Horno electrico 110v 2": "Rutina Horno Electrico",
    "Horno Rational a Gas 220 V ph2": "Rutina Horno Mixto",
    "Horno Rational trifasico 220V ph3": "Rutina Horno Electrico",
    "Horno electrico Balsam 110 V-ph1 1": "Rutina Horno Mixto",
    "Horno electrico Balsam 110 V-ph1 2": "Rutina Horno Mixto",
    "Horno pizzero Ooni": "Rutina Horno A Gas",
    "Lava vajillas 1": "Rutina Lava Vajillas",
    "Lava vajillas 2": "Rutina Lava Vajillas",
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
    "Motor extractor 12000 CFM Planta Baja": "Rutina Area Comun",
    "Motor extractor 21000 CFM Piso 1": "Rutina Area Comun",
    "MOTOR DE INYECCION DE AIRE 1": "Rutina Cocina",
    "MOTOR DE INYECCION DE AIRE 2": "Rutina Cocina",
    "MOTOR DE INYECCION DE AIRE 3": "Rutina Cocina",
    "MOTOR DE INYECCION DE AIRE 4": "Rutina Cocina",
    "pantallas de vidrio": "Rutina Area Comun",
    "parrilleras": "Rutina Cocina",
    "Pintura Externa": "Rutina Area Comun",
    "Pintura interna": "Rutina Area Comun",
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
    "Reverberos dobles": "Rutina Reberberos",
    "Reverberos sencillos": "Rutina Reberberos",
    "Tanques de agua (8000lts)": "Rutina Almacen",
    "Tanquillas": "Rutina Almacen",
    "Tope Frances a Gas 1": "Rutina Cocinas",
    "Tope Frances a Gas 2": "Rutina Cocinas",
    "Tableros": "Rutina Seguridad",
    "salamandras": "Rutina Horno A Gas",
    "Reverbero de mesa": "Rutina Reberberos",
    "Lamparas de calor 1": "Rutina Lamparas de Calor",
    "Lamparas de calor 2": "Rutina Lamparas de Calor",
    "Lamparas de calor 3": "Rutina Lamparas de Calor",
    "Lamparas de calor 4": "Rutina Lamparas de Calor",
    "Lamparas de calor 5 (Madera)": "Rutina Lamparas de Calor",
    "Lamparas de calor 6 (Madera)": "Rutina Lamparas de Calor",
    "Bombonas de gas": "Rutina Cocina",
    "Escalinatas": "Rutina Escalinatas",
    "Nevera exhibidora": "Rutina Almacen",
    "Sistema de bombas Hidroneumatico": "Rutina Area Comun",
    "Tanques de agua de 1000lts (8 un)": "Rutina Almacen",
    "Santa maria 1 3.5 mts": "Rutina Santa Maria",
    "Santa maria 2 3.5 mts": "Rutina Santa Maria",
    "Elevador de Carga": "Rutina Area Comun",
    "Pela papas": "Rutina Cocina",
    "Rebanadora 1": "Rutina Cocina",
    "Rebanadora 2": "Rutina Cocina",
    "Robocop": "Rutina Cocina",
    "Plancha a gas 6": "Rutina Reberberos",
    "Sarten Basculante Industrial": "Rutina Cocina",
    "AMASADOR 1": "Rutina Amasadora",
    "FERMENTADOR": "Rutina Cocina",
    "SISTEMA DE DETENCION DE INCENDIO": "Rutina Seguridad",
    "Amasador 2": "Rutina Amasadora",
    "Laminadora": "Rutina Laminadora",
    "Tableros Electricos": "Rutina Area Comun",
    "Fumigacion": "Rutina Seguridad",
    "Ductos + trampa grasas": "Rutina Area Comun",
    "Alfombra Piso": "Rutina Area Comun",
    "Extintor 1": "Rutina Seguridad",
    "Extintor 2": "Rutina Seguridad",
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
};

const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzUafHVA8hoXnpIm2pyzKRZbn6LffdS7ixloTwqOHgo_YU0ZrabnhTqpN950CNtWCUyUQ/exec";

let rutinaActual = [];
let nombreRutinaActual = "";
let tecnicoNombre = "";
let esTaller = false;

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("btnLogin").addEventListener("click", loginTecnico);
    document.getElementById("codigoTecnico").addEventListener("keydown", function (e) {
        if (e.key === "Enter") loginTecnico();
    });

    document.getElementById("sedes").addEventListener("change", function () {
        const sede = this.value;
        const zonas = SEDE_ZONAS[sede] || [];
        const zonaGroup = document.getElementById("zonaGroup");
        const zonaSelect = document.getElementById("zona");

        if (zonas.length > 0) {
            zonaGroup.style.display = "block";
            populateSelect("zona", zonas);
            document.getElementById("equipo").innerHTML = '<option value="" disabled selected>Seleccionar equipo...</option>';
        } else {
            zonaGroup.style.display = "none";
            zonaSelect.value = "";
            const equipos = SEDE_EQUIPOS[sede] || [];
            populateSelect("equipo", equipos);
        }
        document.getElementById("equipo").required = true;
        document.getElementById("mantenimiento").required = true;
        document.getElementById("checkinsContainer").innerHTML = "";
        rutinaActual = [];
        nombreRutinaActual = "";
        esTaller = false;
        document.getElementById("paso2").style.display = "none";
        document.getElementById("paso1").style.display = "block";
    });

    document.getElementById("zona").addEventListener("change", function () {
        const sede = document.getElementById("sedes").value;
        const zona = this.value;
        const eqGroup = document.getElementById("equipoGroup");

        if (zona === "Taller") {
            eqGroup.style.display = "none";
            document.getElementById("mantenimientoGroup").style.display = "none";
            document.getElementById("formActions").style.display = "flex";
            document.getElementById("equipo").required = false;
            document.getElementById("mantenimiento").required = false;
            esTaller = true;
        } else {
            eqGroup.style.display = "block";
            document.getElementById("mantenimientoGroup").style.display = "block";
            document.getElementById("equipo").required = true;
            document.getElementById("mantenimiento").required = true;
            esTaller = false;
            const zonaData = ZONA_EQUIPOS[sede]?.[zona] || [];
            if (zonaData.length > 0) {
                populateSelect("equipo", zonaData);
            } else {
                const equipos = SEDE_EQUIPOS[sede] || [];
                populateSelect("equipo", equipos);
            }
        }
        document.getElementById("checkinsContainer").innerHTML = "";
        rutinaActual = [];
        nombreRutinaActual = "";
        document.getElementById("paso2").style.display = "none";
        document.getElementById("paso1").style.display = "block";
    });

    document.getElementById("btnSiguiente").addEventListener("click", irAlPaso2);

    document.getElementById("btnAtras").addEventListener("click", function () {
        document.getElementById("paso2").style.display = "none";
        document.getElementById("paso1").style.display = "block";
    });

    document.getElementById("checkinForm").addEventListener("submit", enviarFormulario);
});

function irAlPaso2() {
    const sedes = document.getElementById("sedes").value;
    const fecha = document.getElementById("fecha").value;
    const hora = obtenerHora();
    const zona = document.getElementById("zona").value;
    const equipo = esTaller ? "Taller" : document.getElementById("equipo").value;
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
        alert("Selecciona un equipo.");
        return;
    }

    renderRutina(equipo, mantenimiento);

    if (!rutinaActual || (Array.isArray(rutinaActual) && rutinaActual.length === 0)) {
        alert("El equipo seleccionado no tiene rutina definida.");
        return;
    }

    document.getElementById("paso1").style.display = "none";
    document.getElementById("paso2").style.display = "block";
}

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

function renderRutina(equipo, mantenimiento) {
    const container = document.getElementById("checkinsContainer");
    container.innerHTML = "";

    if (esTaller) {
        nombreRutinaActual = "Actividades de Semaneros";
        rutinaActual = RUTINA_TALLER["Actividades de Semaneros"] || [];
        renderExpandableTasks(container);
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

    if (rutinaActual.length === 0) {
        container.innerHTML = "<p style='color:#999;font-size:0.85rem;'>No hay rutina definida para este equipo.</p>";
        return;
    }

    const labelRutina = document.createElement("p");
    labelRutina.style.cssText = "color:#5f9263;font-size:0.8rem;font-weight:600;margin-bottom:4px;";
    labelRutina.textContent = mantenimiento + " - " + nombreRutinaActual;
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
                <button type="button" class="toggle-btn" data-task="${idx}" data-value="Si" onclick="toggleTallerTask(this)">Si</button>
                <button type="button" class="toggle-btn" data-task="${idx}" data-value="No" onclick="toggleTallerTask(this)">No</button>
            </div>
        `;
        wrapper.appendChild(row);

        const subContainer = document.createElement("div");
        subContainer.className = "taller-sub";
        subContainer.id = "tallerSub" + idx;
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
    const idx = parseInt(btn.dataset.task);
    const task = rutinaActual[idx];
    const sub = document.getElementById("tallerSub" + idx);

    if (btn.dataset.value === "Si" && task.expand) {
        sub.style.display = "block";
        sub.innerHTML = "";
        task.expand.forEach((field, fi) => {
            const fieldDiv = document.createElement("div");
            fieldDiv.className = "taller-sub-field";
            const label = document.createElement("label");
            label.textContent = field.label;
            fieldDiv.appendChild(label);
            if (field.type === "toggle") {
                const tg = document.createElement("div");
                tg.className = "toggle-group";
                tg.innerHTML = `
                    <button type="button" class="toggle-btn sub-toggle" data-task="${idx}" data-sub="${fi}" data-value="Si" onclick="toggleSubToggle(this)">Si</button>
                    <button type="button" class="toggle-btn sub-toggle" data-task="${idx}" data-sub="${fi}" data-value="No" onclick="toggleSubToggle(this)">No</button>
                `;
                fieldDiv.appendChild(tg);
            } else if (field.type === "number") {
                const inp = document.createElement("input");
                inp.type = "number";
                inp.className = "taller-number-input";
                inp.dataset.task = idx;
                inp.dataset.sub = fi;
                if (field.min !== undefined) inp.min = field.min;
                if (field.max !== undefined) inp.max = field.max;
                fieldDiv.appendChild(inp);
            }
            sub.appendChild(fieldDiv);
        });
    } else {
        sub.style.display = "none";
        sub.innerHTML = "";
    }
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
                const subEl = document.getElementById("tallerSub" + idx);
                if (!subEl) return;
                const subFields = subEl.querySelectorAll(".taller-sub-field");
                task.expand.forEach((field, fi) => {
                    const subField = subFields[fi];
                    if (!subField) return;
                    if (field.type === "toggle") {
                        const sb = subField.querySelector(".active-si, .active-no");
                        sub[field.label] = sb ? sb.dataset.value : "";
                    } else if (field.type === "number") {
                        const inp = subField.querySelector("input");
                        sub[field.label] = inp ? inp.value : "";
                    }
                });
            }
            results[task.label] = { value: val, sub: sub };
        } catch (err) {
            alert("Error en tarea: " + err.message);
        }
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
    const fecha = document.getElementById("fecha").value;
    const hora = obtenerHora();
    const zona = document.getElementById("zona").value;
    const equipo = esTaller ? "Taller" : document.getElementById("equipo").value;
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

    if (esTaller) {
        const allAnswered = Array.from(document.querySelectorAll(".taller-task")).every(w =>
            w.querySelector(".taller-task-row .active-si, .taller-task-row .active-no")
        );
        if (!allAnswered) {
            alert("Responde Si o No en todas las tareas antes de enviar.");
            return;
        }
        const allSubAnswered = Array.from(document.querySelectorAll(".taller-task")).every(w => {
            const val = w.querySelector(".taller-task-row .active-si, .taller-task-row .active-no");
            if (!val || val.dataset.value !== "Si") return true;
            const idx = parseInt(w.dataset.taskIdx);
            const task = rutinaActual[idx];
            if (!task || !task.expand) return true;
            const subEl = document.getElementById("tallerSub" + idx);
            if (!subEl) return true;
            const fields = subEl.querySelectorAll(".taller-sub-field");
            return Array.from(fields).every(f => {
                const toggle = f.querySelector(".active-si, .active-no");
                if (toggle) return true;
                const num = f.querySelector("input");
                if (num) return num.value !== "";
                return false;
            });
        });
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

    const hasCheckinEmpty = rutinaActual.some(c => !checkins[c]);
    if (hasCheckinEmpty) {
        alert("Por favor responde todos los pasos de la rutina (Si/No).");
        return;
    }

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
        zona: zona,
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
    document.getElementById("mantenimientoGroup").style.display = "block";
    document.getElementById("formActions").style.display = "flex";
    document.getElementById("equipo").required = true;
    document.getElementById("mantenimiento").required = true;
    populateTimeSelects();
    rutinaActual = [];
    nombreRutinaActual = "";
    esTaller = false;
}
