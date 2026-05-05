/**
 * Contenido específico para cada combinación provincia+uso (20 bloques)
 * Cada bloque aporta ~100-150 palabras únicas a la página
 */

export interface ContenidoProvinciaUso {
  contextoLocal: string;
  eventosReferencia: string[];
  espaciosDestacados: string[];
  ventajaLogistica: string;
  recomendacionProducto: string;
  consejoLocal: string;
}

type ProvinciaUsoKey = `${string}_${string}`;

const contenidoProvinciaUso: Record<ProvinciaUsoKey, ContenidoProvinciaUso> = {
  // ==========================================
  // BARCELONA (5 usos)
  // ==========================================
  barcelona_eventos: {
    contextoLocal:
      "Barcelona y su área metropolitana concentran más del 60% de los eventos corporativos de Cataluña. Desde lanzamientos de producto en hoteles de Diagonal hasta convenciones de 5.000 asistentes en Fira Gran Via, la demanda de moqueta ferial es constante durante todo el año. El tejido empresarial del Vallès, el Maresme tecnológico y el Baix Llobregat logístico generan un ecosistema de eventos sin pausa.",
    eventosReferencia: [
      "Mobile World Congress (Fira Gran Via)",
      "Smart City Expo World Congress",
      "4YFN (startup event)",
      "Barcelona Tech Spirit",
      "Bizbarcelona",
    ],
    espaciosDestacados: [
      "Fira Barcelona Gran Via (L'Hospitalet)",
      "CCIB (Fòrum)",
      "Hotel W Barcelona",
      "Torre Glòries",
      "Palau de Congressos de Catalunya",
    ],
    ventajaLogistica:
      "Nuestro almacén en el distrito de Sant Martí permite entregas en cualquier punto de Barcelona provincia en menos de 3 horas. Para montajes urgentes en Fira Gran Via o CCIB, disponemos de servicio express con instalación en el mismo día. Las autopistas C-58, C-33 y C-32 nos conectan con Vallès, Maresme y Baix Llobregat sin pasar por el centro.",
    recomendacionProducto:
      "Para eventos corporativos en Barcelona recomendamos Rewind Flat en gris oscuro (ref. 0905) o antracita (ref. 0965) para zonas de paso, y Rewind Dilour en gris perla para zonas VIP y escenarios. El acabado Dilour aporta confort acústico esencial en palacios de congresos.",
    consejoLocal:
      "En Fira Gran Via, los organizadores exigen certificación Bfl-s1 original (no copias). Llevamos siempre los certificados en mano durante el montaje. Para el CCIB, la entrada de material es por el muelle de carga del parking P3 — recomendamos coordinar la entrega antes de las 7:00 para evitar colas.",
  },
  barcelona_ferias: {
    contextoLocal:
      "La provincia de Barcelona es sede de las ferias comerciales más importantes del sur de Europa. Fira Barcelona opera dos recintos (Montjuïc y Gran Via) con más de 400.000 m² de superficie expositiva combinada. A esto se suman los palacios feriales de Sabadell, Terrassa, Granollers y Manresa, que acogen ferias comarcales y sectoriales durante todo el año. El volumen anual supera los 200 eventos feriales.",
    eventosReferencia: [
      "Alimentaria (bienal, 150.000 visitantes)",
      "Hostelco (hostelería profesional)",
      "Automobile Barcelona",
      "Graphispag (artes gráficas)",
      "Expoquimia (química industrial)",
    ],
    espaciosDestacados: [
      "Fira Barcelona Montjuïc (8 pabellones)",
      "Fira Barcelona Gran Via (8 pabellones)",
      "Palau Firal de Granollers",
      "Fira Sabadell",
      "Firal de Terrassa",
    ],
    ventajaLogistica:
      "Para ferias de gran formato en Fira Barcelona suministramos directamente al muelle de cada pabellón. Capacidad probada: 40.000 m² de moqueta instalada en un solo montaje (MWC). Para ferias comarcales en Granollers o Sabadell, la entrega se realiza el día previo al montaje con margen suficiente para instalaciones nocturnas.",
    recomendacionProducto:
      "Ferias de gran tránsito: Rewind Flat en colores estándar (gris, negro, azul) — relación calidad-precio imbatible desde 2,20€/m². Para stands premium o zonas de exposición con producto delicado, Rewind Dilour aporta mayor grosor y absorción de pisada. Rollos de 2x50m para minimizar juntas en pasillos largos.",
    consejoLocal:
      "En Fira Barcelona, cada pabellón tiene normativa específica de color para pasillos comunes (generalmente gris RAL 7016). Confirmar con la organización antes de pedir. Los montajes en Alimentaria suelen requerir colores alimentarios (blanco, beige) en stands de degustación.",
  },
  barcelona_congresos: {
    contextoLocal:
      "Barcelona es la tercera ciudad del mundo en congresos internacionales según la ICCA. El CCIB, el Palau de Congressos de Catalunya y el Centre de Convencions del Hotel Hilton Diagonal Mar reciben delegaciones de todo el planeta. Los congresos médicos (Hospital Clínic, Sant Pau), tecnológicos (campus 22@) y científicos (ALBA Síncrotró) generan un flujo constante de demanda especializada.",
    eventosReferencia: [
      "ISE (Integrated Systems Europe, 60.000 visitantes)",
      "European Respiratory Society Congress",
      "EIBTM (eventos MICE)",
      "Gastech",
      "World Ophthalmology Congress",
    ],
    espaciosDestacados: [
      "CCIB - Centre de Convencions (max. 15.000 personas)",
      "Palau de Congressos de Catalunya (Diagonal)",
      "Hotel Hilton Diagonal Mar (salas)",
      "Auditori de Barcelona",
      "CosmoCaixa (eventos privados)",
    ],
    ventajaLogistica:
      "Los palacios de congresos de Barcelona exigen moqueta certificada Bfl-s1 sin excepciones. Mantenemos stock específico para los colores más demandados en congresos (gris, azul corporativo, negro). Entrega en el CCIB y Palau de Congressos con servicio de montaje nocturno para no interferir con otros montajes simultáneos.",
    recomendacionProducto:
      "Congresos: Rewind Dilour es la elección preferida por su absorción acústica (~20 dB) y aspecto profesional. Color recomendado: gris medio (ref. 0915) para zonas comunes y negro (ref. 0965) para salas de ponencias. Para plenarios de gran formato, Rewind Flat negro ofrece uniformidad visual al mejor precio.",
    consejoLocal:
      "El CCIB tiene suelo técnico en algunas salas — usar cinta de doble cara removible (no adhesivo permanente). En el Palau de Congressos de Catalunya, el acceso de material es por la rampa del parking B1. Coordinar franja horaria con el responsable de sala 48h antes.",
  },
  barcelona_stands: {
    contextoLocal:
      "El sector de montaje de stands en Barcelona mueve más de 200 millones de euros anuales. Cientos de empresas de montaje ferial operan en la provincia, desde grandes multinacionales como GES hasta talleres especializados del Vallès y el Baix Llobregat. La moqueta para stands es el revestimiento de suelo más demandado: rápido de instalar, con imagen profesional y a un coste competitivo.",
    eventosReferencia: [
      "Stands MWC (2.400+ expositores)",
      "Stands Alimentaria (4.000+ marcas)",
      "Smart City Expo (800+ stands)",
      "IoT Solutions World Congress",
      "Barcelona Bridal Fashion Week",
    ],
    espaciosDestacados: [
      "Fira Gran Via (pabellones 1-8)",
      "Fira Montjuïc (pabellones históricos)",
      "CCIB (zona expo)",
      "Espacio Movistar (eventos marca)",
      "Parc de Montjuïc (eventos outdoor)",
    ],
    ventajaLogistica:
      "Suministramos a los principales montadores de Barcelona con entrega directa en obra. Los pedidos para montajes en Fira pueden recogerse en almacén (08018, Sant Martí) o recibirlos en el pabellón correspondiente. Para montajes urgentes de última hora, tenemos stock de 30 colores disponible para recogida inmediata.",
    recomendacionProducto:
      "Stands estándar (6-20 m²): Rewind Flat en el color corporativo del cliente — 30 opciones disponibles. Stands premium o de doble altura: Rewind Dilour para zonas de reunión y Flat para zona de paso. Stands de alimentación: blanco o beige con tratamiento antimanchas. Stand todo negro: ref. 0965 + zócalo perimetral.",
    consejoLocal:
      "Los montadores habituales de Fira Barcelona nos conocen: referencia 'moqueta Disstands/Rewind' en sus presupuestos. Para stands con tarima elevada, la moqueta se instala DESPUÉS de la tarima y ANTES de los elementos verticales. Dejar 5 cm extra por lateral para la subida del zócalo.",
  },
  barcelona_bodas: {
    contextoLocal:
      "Barcelona y su provincia concentran el mayor mercado de bodas premium de Cataluña. Desde bodas íntimas en masías del Penedès hasta grandes celebraciones de 300 invitados en hoteles de Sitges, la moqueta define el pasillo nupcial y las zonas de cóctel. Las masías del Vallès, las bodegas del Alt Penedès y los hoteles del Garraf son los escenarios más demandados para bodas con moqueta ecológica.",
    eventosReferencia: [
      "Bodas en masías del Vallès y Maresme",
      "Celebraciones en bodegas del Penedès",
      "Bodas costeras en Sitges y Castelldefels",
      "Bodas urbanas en hoteles de Barcelona",
      "Ceremonias en el Castell de Castelldefels",
    ],
    espaciosDestacados: [
      "Masía Can Bonastre (Alt Penedès)",
      "Hotel Melia Sitges",
      "Castell de Castelldefels",
      "Masía Egara (Vallès)",
      "Bodegas Torres (Sant Sadurní d'Anoia)",
    ],
    ventajaLogistica:
      "Entregamos moqueta para bodas en cualquier punto de Barcelona provincia en 24h. Para masías de difícil acceso (caminos rurales del Penedès o el Maresme), coordinamos la entrega con el equipo de montaje el día previo a la boda. Servicio de recogida post-boda incluido para que la finca quede limpia el lunes.",
    recomendacionProducto:
      "Pasillo nupcial: Rewind Flat blanco (ref. 1020) o beige (ref. 1025), ancho 2m ideal para pasillos de ceremonia. Zona cóctel exterior: Rewind Dilour gris perla, más resistente a pisadas con tacón. Zona banquete/baile: Rewind Flat en color a juego con la temática. Para bodas outdoor, doble cinta adhesiva por posibles brisas.",
    consejoLocal:
      "Las bodas en exterior en el Garraf (Sitges, Castelldefels) requieren fijación extra por la brisa marina — recomendamos doble cinta y perímetro grapado si es sobre césped. En masías del Penedès, confirmar el tipo de suelo (piedra, tierra, césped) para elegir el adhesivo correcto. Temporada alta: mayo-octubre, pedir con 2 semanas de antelación.",
  },

  // ==========================================
  // GIRONA (5 usos)
  // ==========================================
  girona_eventos: {
    contextoLocal:
      "La provincia de Girona combina un potente turismo cultural con un tejido empresarial que organiza eventos durante todo el año. Girona ciudad es el polo de congresos y eventos corporativos, mientras que la Costa Brava ofrece escenarios únicos para incentivos y team buildings. El interior (Garrotxa, Ripollès) aporta eventos de naturaleza y gastronomía que cada vez demandan más instalaciones profesionales.",
    eventosReferencia: [
      "Temps de Flors (Girona, mayo)",
      "Festival Strenes (Girona)",
      "Sismògraf Festival (Olot)",
      "Festival de Cap Roig (Palafrugell)",
      "Fira del Circ (Figueres)",
    ],
    espaciosDestacados: [
      "Palau de Fires de Girona",
      "Auditori de Girona",
      "Hotels resort de Lloret de Mar",
      "Jardins de Cap Roig",
      "Recinte Firal de Figueres",
    ],
    ventajaLogistica:
      "Desde Barcelona llegamos a Girona ciudad en 75 min por AP-7. Para la Costa Brava (Lloret, Blanes), el tiempo se reduce a 60 min. Disponemos de ruta semanal de entregas en el eje Girona-Figueres y servicio especial para la Costa Brava en temporada alta (junio-septiembre). Entregas en 24h para cualquier punto de la provincia.",
    recomendacionProducto:
      "Eventos en la Costa Brava (outdoor): Rewind Flat en tonos neutros (beige, gris) que no desentonen con el entorno natural. Eventos en Palau de Fires de Girona: Rewind Flat gris o azul para zonas generales. Para hoteles resort de Lloret, Rewind Dilour aporta el acabado premium que esperan los asistentes a convenciones.",
    consejoLocal:
      "Los hoteles de Lloret de Mar tienen acceso de carga por parking — coordinar con el hotel la franja de descarga (normalmente 8:00-10:00). En Girona ciudad, el Palau de Fires tiene muelle propio pero el aparcamiento de montadores se llena rápido en feria. Llegar antes de las 7:30.",
  },
  girona_ferias: {
    contextoLocal:
      "Girona cuenta con una tradición ferial arraigada en comarcas como el Gironès, l'Alt Empordà y la Garrotxa. Las ferias comarcales combinan producto local (artesanía, gastronomía) con sectores profesionales. El Palau de Fires de Girona acoge salones sectoriales de alcance catalán, mientras que Figueres y Olot mantienen ferias históricas con gran arraigo popular.",
    eventosReferencia: [
      "Fira de Sant Narcís (Girona, octubre)",
      "Fira del Circ de Figueres",
      "Fires de la Santa Creu (Figueres)",
      "Fira de Sant Lluc (Olot)",
      "Fira de Banyoles",
    ],
    espaciosDestacados: [
      "Palau de Fires de Girona",
      "Recinte Firal de Figueres",
      "Recinte Firal d'Olot",
      "Pavelló Firal de Banyoles",
      "Espai Ter (Torroella de Montgrí)",
    ],
    ventajaLogistica:
      "Para ferias en Girona ciudad entregamos en 24h. Figueres y Alt Empordà: 24-48h según volumen. Olot y Garrotxa: 48h (carreteras de montaña, entrega programada). Mantenemos stock adicional en temporada de ferias (septiembre-noviembre) para atender picos de demanda en las comarcas gironines.",
    recomendacionProducto:
      "Ferias comarcales gironines: Rewind Flat es la opción más utilizada por su precio (desde 2,20€/m²) y facilidad de instalación. Los recintos de Girona y Figueres no requieren colores específicos para pasillos comunes. Para stands de alimentación (Fira de Sant Narcís), usar colores claros: beige o blanco.",
    consejoLocal:
      "La Fira de Sant Narcís de Girona incluye zona de barracas y zona expositiva — la moqueta solo es necesaria en la zona interior del Palau de Fires. En Olot, el acceso al recinte firal por la C-152 tiene restricciones de peso para vehículos pesados: usar furgoneta o coordinar con servicio local.",
  },
  girona_congresos: {
    contextoLocal:
      "Girona se ha posicionado como destino de congresos de tamaño medio gracias a su patrimonio monumental, su gastronomía de primer nivel (Celler de Can Roca, restaurantes con estrella) y la buena conexión AVE con Barcelona y París. Los congresos médicos, científicos y de turismo eligen Girona por su equilibrio entre capacidad y encanto urbano.",
    eventosReferencia: [
      "Congresos médicos en Auditori de Girona",
      "Jornadas de turismo de Costa Brava",
      "Congresos universitarios (UdG)",
      "Forum Gastronòmic (itinerante)",
      "Conferencias de patrimonio (Barri Vell)",
    ],
    espaciosDestacados: [
      "Auditori de Girona (cap. 1.000)",
      "Palau de Fires de Girona (salas multiusos)",
      "Hotel Meliá Girona",
      "Centre Cultural La Mercè",
      "Universitat de Girona (Auditori)",
    ],
    ventajaLogistica:
      "El AVE conecta Barcelona-Girona en 37 min, lo que nos permite desplazar equipos de instalación con flexibilidad. Para congresos en el Auditori o Palau de Fires, la entrega se realiza 24h antes con montaje nocturno si es necesario. Los congresos en Girona suelen ser de 200-1.000 asistentes, lo que permite entregas en furgoneta sin necesidad de tráiler.",
    recomendacionProducto:
      "Congresos en Girona: Rewind Dilour para salas de ponencias y plenarios — absorción acústica clave en auditorios. Color gris oscuro o azul marino para entornos institucionales. Para zonas de networking y coffee breaks, Rewind Flat en gris medio ofrece el equilibrio precio-calidad que buscan los organizadores.",
    consejoLocal:
      "El Auditori de Girona tiene normativa estricta sobre adhesivos en su parquet — usar exclusivamente cinta removible de baja adherencia. En el Palau de Fires, las salas de actos tienen suelo técnico: la moqueta se coloca suelta o con cinta perimetral. Para congresos en verano, prever la ventilación: la moqueta puede retener calor.",
  },
  girona_stands: {
    contextoLocal:
      "El sector de stands en Girona opera a una escala más reducida que Barcelona, pero con exigencia creciente. Los montadores locales atienden ferias en el Palau de Fires de Girona, recintos feriales comarcales y espacios singulares (monasterios, jardines, masías). La tendencia es hacia stands más sostenibles, donde la moqueta reciclable Rewind encaja con la imagen de marca verde de la Costa Brava.",
    eventosReferencia: [
      "Stands en Palau de Fires de Girona",
      "Expositores en Fira del Circ",
      "Stands gastronómicos (ferias comarcales)",
      "Pop-up stores en Costa Brava",
      "Showrooms temporales en Girona",
    ],
    espaciosDestacados: [
      "Palau de Fires de Girona (zona expo)",
      "Recinte Firal de Figueres",
      "Hotels de congresos (zona expositores)",
      "Centre Cultural La Mercè",
      "Espai Ter (zona stands)",
    ],
    ventajaLogistica:
      "Suministramos a montadores de stands de Girona con entrega directa en obra o recogida en nuestro almacén de Barcelona. Para cantidades reducidas (stands individuales de 9-20 m²), la entrega en furgoneta es la opción más ágil. Servicio de corte a medida disponible para optimizar el material en stands pequeños.",
    recomendacionProducto:
      "Stands en ferias de Girona: Rewind Flat en el color corporativo del expositor. Para stands gastronómicos y agroalimentarios, colores claros (blanco, crema, beige) transmiten higiene. Stands de artesanía y cultura: tonos tierra o verde oscuro integran mejor con producto local. Dilour para zonas de reunión privada en stands grandes.",
    consejoLocal:
      "Los montadores de Girona suelen trabajar con stands modulares reutilizables — confirmar si la moqueta será de un solo uso o reutilizable para adaptar la instalación (con adhesivo removible). En ferias al aire libre (Fira de Sant Narcís zona exterior), prever impermeabilización del suelo base antes de colocar.",
  },
  girona_bodas: {
    contextoLocal:
      "Las bodas en Girona se han convertido en un segmento premium gracias a los escenarios incomparables de la Costa Brava: masías con vistas al mar, jardines históricos como Cap Roig y pueblos medievales como Peratallada o Pals. El turismo nupcial internacional (parejas de UK, Francia, norte de Europa) ha disparado la demanda de acabados profesionales, incluida la moqueta para ceremonias y banquetes al aire libre.",
    eventosReferencia: [
      "Bodas en masías del Empordà",
      "Ceremonias en Jardins de Cap Roig",
      "Bodas en Castell de Peratallada",
      "Celebraciones en hotels de Cadaqués",
      "Bodas en bodegas del Empordà",
    ],
    espaciosDestacados: [
      "Jardins de Cap Roig (Palafrugell)",
      "Masía Can Comas (Empordà)",
      "Castell de Peratallada",
      "Hotel Aigua Blava (Begur)",
      "Hotel Mas Lazuli (Alt Empordà)",
    ],
    ventajaLogistica:
      "Entregamos moqueta para bodas en toda la Costa Brava y interior de Girona en 24-48h. Para masías de difícil acceso en el Empordà, recomendamos entrega el jueves previo a la boda (normalmente sábado). Servicio de recogida post-boda el lunes. Las bodas en pueblos medievales requieren coordinar el acceso con el ayuntamiento.",
    recomendacionProducto:
      "Bodas Costa Brava: Rewind Flat blanco para pasillo de ceremonia (ancho 2m estándar). Zona cóctel en jardín: Dilour beige o gris claro, más confortable bajo los pies descalzos. Para bodas en masía con suelo de piedra irregular, la moqueta Dilour (4mm) nivela mejor las imperfecciones. Color estrella: blanco + runner central en color champán.",
    consejoLocal:
      "En bodas outdoor en la Costa Brava, el rocío de la mañana puede humedecer la moqueta si se instala el día anterior — instalar el mismo día o cubrir con plástico la noche previa. Las masías del Empordà suelen tener acceso por caminos de tierra: confirmar que la furgoneta puede llegar. Temporada de bodas: mayo-octubre, máxima demanda en junio y septiembre.",
  },

  // ==========================================
  // TARRAGONA (5 usos)
  // ==========================================
  tarragona_eventos: {
    contextoLocal:
      "Tarragona provincia ofrece un abanico de eventos que va desde convenciones internacionales en PortAventura hasta festivales históricos como Tarraco Viva. La Costa Daurada (Salou, Cambrils, Vila-seca) es el motor del turismo MICE, mientras que Reus y Tarragona ciudad concentran la actividad ferial y empresarial. El sur (Terres de l'Ebre) aporta eventos de ecoturismo y gastronomía con identidad propia.",
    eventosReferencia: [
      "PortAventura Convention Centre (hasta 4.000 pax)",
      "Tarraco Viva (festival romano, mayo)",
      "Concurs de Castells de Tarragona (bienal)",
      "Santa Tecla (septiembre)",
      "Fira de Reus",
    ],
    espaciosDestacados: [
      "PortAventura Convention Centre",
      "Palau de Congressos de Tarragona",
      "Tarraco Arena Plaça",
      "Fira Reus",
      "Parador de Tortosa",
    ],
    ventajaLogistica:
      "Tarragona ciudad está a 100 min por AP-7 desde nuestro almacén. PortAventura (Vila-seca/Salou) a 105 min. Mantenemos una ruta semanal de entregas Tarragona-Reus-Costa Daurada. Para eventos en Terres de l'Ebre (Tortosa, Amposta), la distancia es mayor (180-200 min) y programamos entregas con 48h de antelación.",
    recomendacionProducto:
      "Eventos en PortAventura Convention Centre: Rewind Flat gris o negro para áreas de gran formato. Eventos patrimoniales (Tarraco Viva, Santa Tecla): colores terrosos que armonicen con la piedra romana. Costa Daurada (hoteles): Dilour para salas de convenciones premium. Terres de l'Ebre: tonos naturales (verde, beige).",
    consejoLocal:
      "PortAventura tiene protocolo propio de acceso para proveedores: registrarse con 72h de antelación y acceder por puerta de servicio (no entrada de visitantes). El Palau de Congressos de Tarragona exige certificado Bfl-s1 en original. En verano, los eventos en Costa Daurada son mayoritariamente nocturnos — montaje a partir de las 16:00.",
  },
  tarragona_ferias: {
    contextoLocal:
      "La tradición ferial de Tarragona se articula alrededor de Fira Reus (una de las más activas de Cataluña) y los recintos de Tarragona ciudad y Valls. Las ferias agrícolas del Alt Camp, las ferias del vino en Priorat y Conca de Barberà, y las ferias costeras del Baix Penedès configuran un calendario que cubre prácticamente todo el año en distintos puntos de la provincia.",
    eventosReferencia: [
      "Fira de Reus (múltiples salones anuales)",
      "Fira del Vi de Falset (Priorat)",
      "Gran Festa de la Calçotada (Valls)",
      "Setmana Medieval de Montblanc",
      "Fira d'Amposta",
    ],
    espaciosDestacados: [
      "Fira Reus (Palau Firal)",
      "Recinte Firal de Tarragona",
      "Recinte Firal de Tortosa",
      "Espai Firal de Valls",
      "Espai Firal de Montblanc",
    ],
    ventajaLogistica:
      "Fira Reus es nuestro principal punto de entrega en Tarragona provincia — acceso directo por AP-7 y descarga en muelle del pabellón. Para ferias comarcales en el interior (Valls, Montblanc, Falset), entregamos 24-48h antes con coordinación previa. Las ferias del Priorat requieren acceso por carreteras comarcales estrechas.",
    recomendacionProducto:
      "Ferias en Fira Reus: Rewind Flat gris para pasillos (normativa del recinto) y color libre para interior de stands. Ferias vinícolas (Priorat, Terra Alta): tonos burdeos, granate o tierra crean ambiente. Ferias agroalimentarias: blanco o beige para transmitir limpieza. La Calçotada de Valls: moqueta en zonas de acto oficial, no en zona de degustación.",
    consejoLocal:
      "Fira Reus dispone de 3 pabellones modulables — confirmar con la organización el pabellón exacto antes de entregar. En la Setmana Medieval de Montblanc, la moqueta se usa en el recinto interior (no en las calles medievales). Para ferias del vino, evitar colores claros en zonas de cata (manchas inevitables).",
  },
  tarragona_congresos: {
    contextoLocal:
      "El Palau de Congressos de Tarragona y el PortAventura Convention Centre son los dos grandes referentes para congresos en la demarcación. Tarragona ciudad atrae congresos de Historia, Arqueología y Patrimonio aprovechando su legado romano. PortAventura capta convenciones corporativas de gran formato con la ventaja del resort adjunto. Reus complementa con congresos de salud y sector farmacéutico.",
    eventosReferencia: [
      "Congresos PortAventura (hasta 4.000 delegados)",
      "Congresos de Historia y Patrimonio (Tarragona)",
      "Jornadas petroquímicas (Tarragona)",
      "Congresos médicos (Hospital Joan XXIII)",
      "Congresos de turismo (Costa Daurada)",
    ],
    espaciosDestacados: [
      "PortAventura Convention Centre",
      "Palau de Congressos de Tarragona",
      "Auditori August (Tarragona)",
      "Palau Firal de Reus (sala congresos)",
      "Hotel PortAventura (salas)",
    ],
    ventajaLogistica:
      "PortAventura Convention Centre y Palau de Congressos de Tarragona están bien comunicados por AP-7. Entrega garantizada en 24h para ambos recintos. Para congresos de gran formato en PortAventura, coordinamos la entrada de material con el equipo de logística del resort — acceso por puerta de servicio sur.",
    recomendacionProducto:
      "Congresos en PortAventura: Rewind Dilour para áreas de ponencias y networking, en gris oscuro o azul corporativo. El Convention Centre tiene suelo propio en zonas comunes, la moqueta es para salas auxiliares y zona de sponsors. Congresos en Palau de Congressos de Tarragona: Dilour negro para plenario, Flat gris para resto.",
    consejoLocal:
      "PortAventura tiene equipo técnico propio que supervisa las instalaciones — coordinar directamente con su departamento de eventos (no con el montador externo). El Palau de Congressos de Tarragona exige retirada completa de moqueta el mismo día de finalización del congreso. Prever equipo de recogida.",
  },
  tarragona_stands: {
    contextoLocal:
      "El montaje de stands en Tarragona se concentra en Fira Reus y, cada vez más, en el espacio de expositores de PortAventura Convention Centre. Los montadores locales de Reus y Tarragona atienden ferias comarcales en toda la provincia. La tendencia sostenible es especialmente valorada en stands de enoturismo (DOQ Priorat, DO Terra Alta) y en ferias de turismo responsable de la Costa Daurada.",
    eventosReferencia: [
      "Zona expositores PortAventura Events",
      "Stands en Fira Reus",
      "Stands ferias del vino (Falset, Gandesa)",
      "Expositores Setmana Medieval",
      "Stands Tarraco Viva (zona comercial)",
    ],
    espaciosDestacados: [
      "Fira Reus (zona stands)",
      "PortAventura Convention Centre (expo hall)",
      "Recinte Firal de Tarragona",
      "Auditori Pau Casals (El Vendrell, expo)",
      "Espai Firal de Tortosa",
    ],
    ventajaLogistica:
      "Entrega directa en Fira Reus con descarga en pabellón. Para stands en PortAventura, coordinar entrega por acceso de servicios. Los montadores de Tarragona pueden recoger material en nuestro almacén de Barcelona (viaje de ida, 90 min) o recibir entrega en obra. Corte a medida disponible para optimizar material en stands pequeños.",
    recomendacionProducto:
      "Stands en Fira Reus: Rewind Flat (30 colores) para adaptarse a cada identidad corporativa. Stands vinícolas premium: Dilour en burdeos o negro para transmitir exclusividad. Stands de turismo: colores azul mediterráneo o verde oliva. Para food stands en ferias gastronómicas, Flat beige con protección perimetral.",
    consejoLocal:
      "Fira Reus tiene alturas de pabellón generosas — posibilidad de stands de doble altura sin restricción. La moqueta se instala antes de montar la estructura del stand. En ferias comarcales pequeñas (Valls, Montblanc), los stands suelen ser de 3x3m — corte previo en almacén para agilizar el montaje in situ.",
  },
  tarragona_bodas: {
    contextoLocal:
      "Las bodas en Tarragona provincia se reparten entre la elegancia de la Costa Daurada (Sitges limita, pero Altafulla, Torredembarra y Cambrils son destinos en auge), las masías del interior (Alt Camp, Conca de Barberà) y espacios singulares como el Parador de Tortosa en su castillo medieval. Las bodegas del Priorat y del Penedès también acogen celebraciones con carácter vinícola.",
    eventosReferencia: [
      "Bodas en masías del Alt Camp y Conca",
      "Celebraciones en Parador de Tortosa",
      "Bodas en bodegas del Priorat",
      "Bodas costeras en Altafulla y Torredembarra",
      "Celebraciones en hotels de Cambrils",
    ],
    espaciosDestacados: [
      "Parador de Tortosa (Castillo de la Suda)",
      "Masías del Alt Camp",
      "Bodegas del Priorat",
      "Hotels de Cambrils (frente al mar)",
      "Monestir de Poblet (espacio exterior)",
    ],
    ventajaLogistica:
      "Para bodas en la Costa Daurada (Cambrils, Altafulla), entrega en 24h. Interior de Tarragona (Valls, Montblanc): 24-48h. Terres de l'Ebre (Tortosa): 48h programadas. Recomendamos entrega el jueves previo a la boda. Recogida post-boda lunes o martes siguiente. Para masías aisladas, confirmar acceso para furgoneta.",
    recomendacionProducto:
      "Bodas en masía interior: Rewind Flat blanco para pasillo de ceremonia, Dilour gris perla para zona cocktail. Bodas en bodega: tonos burdeos para pasillo, beige para zona de baile. Bodas costeras: blanco + arena (beige claro). Parador de Tortosa: colores que respeten la piedra medieval (beige, gris claro, champán).",
    consejoLocal:
      "Las bodas en el Parador de Tortosa requieren autorización del Parador para cualquier instalación — contactar con dirección 2 semanas antes. En masías del Alt Camp, el suelo suele ser de piedra o terracota irregular: Dilour (4mm) es mejor opción que Flat para nivelar. En bodas costeras de Cambrils, instalar el mismo día para evitar humedad nocturna.",
  },

  // ==========================================
  // LLEIDA (5 usos)
  // ==========================================
  lleida_eventos: {
    contextoLocal:
      "Los eventos en Lleida provincia se concentran en la capital (La Llotja, Fira de Lleida) y en las comarcas del Pirineo para turismo y aventura. La Llotja de Lleida es el palacio de congresos de referencia del interior de Cataluña, con capacidad para 2.000 personas. Las comarcas pirenaicas (Val d'Aran, Pallars, Alt Urgell) generan eventos vinculados al turismo de montaña y deportes de aventura.",
    eventosReferencia: [
      "Aplec del Caragol (200.000 visitantes)",
      "Fira de Sant Miquel (Lleida)",
      "FiraTàrrega (artes de calle)",
      "Fira de Sant Josep de Mollerussa",
      "Eventos Baqueira-Beret (Val d'Aran)",
    ],
    espaciosDestacados: [
      "La Llotja de Lleida (Palau de Congressos)",
      "Fira de Lleida",
      "Recinte Firal de Mollerussa",
      "Recinte FiraTàrrega",
      "Palai de Gèu (Vielha)",
    ],
    ventajaLogistica:
      "Lleida ciudad está a 160 min por AP-2/A-2. Disponemos de ruta quincenal Barcelona-Lleida para entregas programadas. Para eventos en el Pirineo (Val d'Aran, Pallars), la distancia es considerable (230-280 min) y requiere planificación con 72h mínimo. Tàrrega y Mollerussa quedan más accesibles (130-150 min por A-2).",
    recomendacionProducto:
      "Eventos en La Llotja de Lleida: Rewind Dilour para salas de actos y Flat para zonas de exposición. Eventos en Mollerussa (ferias agrícolas): Flat en colores prácticos (gris, verde oscuro) resistentes al tráfico intenso. Val d'Aran (eventos premium): Dilour negro o gris oscuro para hoteles y congresos de alto nivel.",
    consejoLocal:
      "La Llotja de Lleida tiene sistema de acceso controlado para proveedores — solicitar acreditación con antelación. En Mollerussa, la Fira de Sant Josep (marzo) genera altísima demanda de moqueta durante 3-4 días: reservar material con 3 semanas de antelación. Para el Pirineo en invierno, prever cadenas para la furgoneta si hay alertas de nieve.",
  },
  lleida_ferias: {
    contextoLocal:
      "Lleida tiene una tradición ferial centenaria ligada a la agricultura y la ganadería. La Fira de Sant Josep de Mollerussa (200 años de historia) es la feria agrícola más importante de Cataluña. La Fira de Sant Miquel en Lleida ciudad, FiraTàrrega (artes de calle, referente europeo) y las ferias comarcales del Pirineo completan un calendario que combina tradición con innovación sectorial.",
    eventosReferencia: [
      "Fira de Sant Josep de Mollerussa (marzo)",
      "Fira de Sant Miquel de Lleida (sept)",
      "FiraTàrrega (artes de calle, sept)",
      "Fira del Formatge de La Seu d'Urgell",
      "Fira de l'Oli de les Garrigues",
    ],
    espaciosDestacados: [
      "Recinte Firal de Mollerussa (30.000 m²)",
      "Fira de Lleida (Camp d'Esports)",
      "Espais de FiraTàrrega (calle + recinto)",
      "Espai Firal de Balaguer",
      "Parc Olímpic del Segre (La Seu)",
    ],
    ventajaLogistica:
      "Mollerussa y Tàrrega están a 130-150 min por A-2 — entrega 48h antes de la feria. Lleida ciudad: 160 min, entrega en 24-48h. Las ferias del Pirineo (La Seu, Vielha) requieren más planificación: entrega 72h antes. Para la Fira de Sant Josep, llevamos un camión completo directamente al recinte firal.",
    recomendacionProducto:
      "Fira de Mollerussa: Rewind Flat gris o verde para zonas de maquinaria agrícola, beige para pabellones de alimentación. FiraTàrrega: moqueta para espacios escénicos cerrados, no para actuaciones de calle. Ferias del formatge/oli: tonos naturales (verde, tierra) que conecten con el producto local.",
    consejoLocal:
      "La Fira de Sant Josep de Mollerussa opera sobre tierra en zonas exteriores — la moqueta solo es para pabellones interiores y stands cubiertos. FiraTàrrega usa moqueta en los 'Espais privats' (zona profesional), no en las actuaciones callejeras. En Balaguer, el recinte firal tiene suelo irregular: usar Dilour si se quiere nivelar.",
  },
  lleida_congresos: {
    contextoLocal:
      "La Llotja de Lleida es el palacio de congresos de referencia en el interior de Cataluña, con salas para hasta 2.000 personas y tecnología audiovisual de primer nivel. Inaugurado en 2010, se ha consolidado como sede de congresos médicos, agroalimentarios, universitarios y de sector público. Los congresos de turismo de montaña en el Pirineo (Val d'Aran, La Seu d'Urgell) complementan la oferta.",
    eventosReferencia: [
      "Congresos en La Llotja (medicina, agro, tech)",
      "Forum Empresa Lleida",
      "Jornadas de turismo del Pirineo",
      "Congresos universitarios (UdL)",
      "Congressos agroalimentaris de la Fira",
    ],
    espaciosDestacados: [
      "La Llotja de Lleida (plenari + salas)",
      "Fira de Lleida (sala de actos)",
      "Hotel NH Lleida (salas)",
      "Palai de Gèu (Vielha)",
      "Palau d'Esports de la Seu",
    ],
    ventajaLogistica:
      "La Llotja de Lleida tiene excelente acceso logístico por la A-2 y muelle de descarga propio. Para congresos de hasta 1.000 personas, una entrega con furgoneta grande es suficiente. Congresos en el Pirineo requieren planificación especial por distancia y acceso invernal. Entrega en La Llotja: 24-48h; Pirineo: 72h.",
    recomendacionProducto:
      "La Llotja de Lleida: Rewind Dilour para el plenari (acústica excelente) y salas de ponencias. Color: gris oscuro o azul institucional. Para zonas de catering y networking, Flat gris. Congresos en el Pirineo (Palai de Gèu): Dilour negro para imagen premium acorde con el turismo de lujo de la zona.",
    consejoLocal:
      "La Llotja de Lleida tiene suelo de granito en zonas comunes — cinta de doble cara removible obligatoria (no adhesivo). Reservar franja de montaje con departamento técnico de La Llotja (mínimo 5 días antes del congreso). El Palai de Gèu en Vielha cierra en abril-mayo por temporada baja: confirmar disponibilidad.",
  },
  lleida_stands: {
    contextoLocal:
      "Los stands en Lleida se vinculan principalmente a ferias agrícolas, ganaderas y agroalimentarias. La Fira de Mollerussa mueve cientos de expositores en sus 30.000 m² de recinto. La Fira de Sant Miquel de Lleida y FiraTàrrega también generan demanda de stands profesionales. En el Pirineo, los stands se concentran en ferias artesanales y de turismo (formatge, producte local).",
    eventosReferencia: [
      "Stands maquinaria en Fira de Mollerussa",
      "Expositores Fira de Sant Miquel",
      "Zona profesional FiraTàrrega",
      "Stands Fira del Formatge (La Seu)",
      "Expositores Fira de l'Oli (Garrigues)",
    ],
    espaciosDestacados: [
      "Recinte Firal de Mollerussa",
      "Fira de Lleida (pabellones)",
      "Espais FiraTàrrega (zona pro)",
      "Recinte de Balaguer",
      "Claustro Sant Domènec (Balaguer)",
    ],
    ventajaLogistica:
      "Para stands en la Fira de Mollerussa, entrega directa en recinto con camión o furgoneta. Los expositores pueden recoger en nuestro almacén de Barcelona si les queda de camino. Para ferias comarcales pequeñas (Garrigues, Noguera), enviamos por mensajería o entregamos en ruta quincenal Lleida.",
    recomendacionProducto:
      "Stands agrícolas/ganaderos: Rewind Flat en colores resistentes (gris oscuro, negro, verde) — tráfico pesado con botas de trabajo. Stands alimentarios: Flat blanco o beige, fácil de limpiar. Stands de artesanía (Pirineo): tonos tierra y madera. Para stands premium en La Llotja, Dilour negro o gris en zonas de reunión.",
    consejoLocal:
      "En Mollerussa, los stands de maquinaria agrícola suelen ser de 40-100 m² con acceso de vehículos — usar Flat económico en zonas de paso y dejar la maquinaria sobre suelo desnudo. En ferias comarcales de Lleida, los ayuntamientos suelen prestar el espacio: confirmar el estado del suelo antes de presupuestar.",
  },
  lleida_bodas: {
    contextoLocal:
      "Las bodas en Lleida ofrecen escenarios únicos: desde bodegas del Costers del Segre hasta masías del Urgell, pasando por iglesias románicas del Pirineo y hoteles de lujo en la Val d'Aran. Las bodas de montaña (Baqueira, La Seu) son un segmento premium en crecimiento, mientras que el interior de la provincia ofrece celebraciones rurales con carácter autóctono y precios más accesibles.",
    eventosReferencia: [
      "Bodas en bodegas de Costers del Segre",
      "Bodas de lujo en Baqueira-Beret",
      "Celebraciones en masías del Urgell",
      "Bodas románicas en el Pirineo",
      "Celebraciones en Parador de la Seu",
    ],
    espaciosDestacados: [
      "Hotels de Baqueira-Beret",
      "Bodegas Raimat (Costers del Segre)",
      "Masías del Pla d'Urgell",
      "Parador de la Seu d'Urgell (Claustro)",
      "Hotel Val de Ruda (Vielha)",
    ],
    ventajaLogistica:
      "Bodas en el interior de Lleida (Tàrrega, Mollerussa, Les Borges): entrega 48h antes. Bodas en el Pirineo (Val d'Aran, La Seu): entrega mínimo 72h antes por distancia y posibles condiciones meteorológicas. Para bodas en Baqueira (invierno), confirmar estado de carreteras. Recogida post-boda a convenir.",
    recomendacionProducto:
      "Bodas de montaña (Baqueira, La Seu): Rewind Dilour en tonos crema o champán para armonizar con la piedra y madera del Pirineo. Bodas en bodega: Flat burdeos o granate para pasillo, beige para zona de baile. Bodas rurales (masías Urgell): blanco para ceremonia, gris perla para cóctel. En invierno, Dilour aporta calidez extra en iglesias frías.",
    consejoLocal:
      "Las bodas en la Val d'Aran (hoteles Baqueira) requieren reservar material con mucha antelación en temporada de esquí (diciembre-marzo, los hoteles están al 100%). En verano es más flexible. Para bodas en iglesias románicas del Pirineo, el suelo es de piedra irregular: Dilour 4mm es imprescindible para nivelar y evitar tropiezos.",
  },
};

/**
 * Obtiene el contenido específico para una combinación provincia+uso
 */
export function getContenidoProvinciaUso(
  provinciaSlug: string,
  usoSlug: string
): ContenidoProvinciaUso | undefined {
  const key: ProvinciaUsoKey = `${provinciaSlug}_${usoSlug}`;
  return contenidoProvinciaUso[key];
}
