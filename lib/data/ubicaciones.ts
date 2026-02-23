export interface Comarca {
  slug: string;
  nombre: string;
  capital: string;
  poblacion: number;
  descripcion: string;
  eventosLocales: string[];
  espaciosEventos: string[];
  distanciaBarcelona: number;
  municipiosPrincipales?: string[];
}

export interface Provincia {
  slug: string;
  nombre: string;
  codigoPostal: string;
  poblacion: number;
  municipiosPrincipales: string[];
  comarcas: Comarca[];
  recintosFeriales: string[];
  eventosDestacados: string[];
}

export interface Municipio {
  slug: string;
  nombre: string;
  provincia: string;
  poblacion: number;
  comarca: string;
  descripcion: string;
  zonasEventos: string[];
}

export interface TipoUso {
  slug: string;
  nombre: string;
  keywords: string[];
}

export const provincias: Provincia[] = [
  {
    slug: "barcelona",
    nombre: "Barcelona",
    codigoPostal: "08",
    poblacion: 5700000,
    municipiosPrincipales: [
      "Barcelona",
      "L'Hospitalet de Llobregat",
      "Badalona",
      "Terrassa",
      "Sabadell",
      "Mataró",
      "Santa Coloma de Gramenet",
      "Cornellà de Llobregat",
      "Sant Boi de Llobregat",
      "Sant Cugat del Vallès",
      "Rubí",
      "Manresa",
      "Vilanova i la Geltrú",
      "Viladecans",
      "El Prat de Llobregat",
      "Granollers",
      "Cerdanyola del Vallès",
      "Mollet del Vallès",
      "Gavà",
      "Castelldefels",
      "Esplugues de Llobregat",
      "Sant Feliu de Llobregat",
      "Vic",
      "Igualada",
    ],
    comarcas: [
      {
        slug: "barcelones",
        nombre: "Barcelonès",
        capital: "Barcelona",
        poblacion: 2264301,
        descripcion:
          "El Barcelonès es la comarca más poblada de Cataluña y el principal polo ferial del Mediterráneo. Acoge recintos de referencia internacional como Fira Barcelona y el CCIB, donde se celebran eventos como el Mobile World Congress.",
        eventosLocales: [
          "Mobile World Congress",
          "Alimentaria",
          "Smart City Expo",
          "Sónar",
          "Primavera Sound",
        ],
        espaciosEventos: [
          "Fira Barcelona Montjuïc",
          "Fira Barcelona Gran Via",
          "CCIB",
          "Palau de Congressos de Catalunya",
          "Palau Sant Jordi",
        ],
        distanciaBarcelona: 0,
        municipiosPrincipales: [
          "Barcelona",
          "L'Hospitalet de Llobregat",
          "Badalona",
          "Santa Coloma de Gramenet",
          "Sant Adrià de Besòs",
        ],
      },
      {
        slug: "valles-occidental",
        nombre: "Vallès Occidental",
        capital: "Sabadell",
        poblacion: 928830,
        descripcion:
          "El Vallès Occidental es una comarca industrial y de servicios con dos grandes ciudades: Sabadell y Terrassa. Su actividad empresarial genera una demanda constante de espacios para ferias, jornadas y presentaciones corporativas.",
        eventosLocales: [
          "Fira de Sabadell",
          "Fira Terrassa",
          "Fira Cornellà",
          "Jornadas empresariales del Vallès",
        ],
        espaciosEventos: [
          "Fira Sabadell",
          "Firal de Terrassa",
          "Hotel-Palau de Congressos Sabadell",
          "Espai Vapor de Terrassa",
        ],
        distanciaBarcelona: 25,
        municipiosPrincipales: [
          "Sabadell",
          "Terrassa",
          "Rubí",
          "Sant Cugat del Vallès",
          "Cerdanyola del Vallès",
          "Montcada i Reixac",
        ],
      },
      {
        slug: "valles-oriental",
        nombre: "Vallès Oriental",
        capital: "Granollers",
        poblacion: 412764,
        descripcion:
          "El Vallès Oriental combina actividad industrial con entornos naturales del Montseny. Granollers es su motor económico, con un importante tejido de PYMES que organizan ferias sectoriales y eventos comerciales a lo largo del año.",
        eventosLocales: [
          "Fira de l'Ascensió de Granollers",
          "Fira de la Botifarra de l'Ametlla",
          "Fira de Mollet",
        ],
        espaciosEventos: [
          "Palau Firal de Granollers",
          "Can Mulà (Mollet del Vallès)",
          "Centre Cultural de Parets",
        ],
        distanciaBarcelona: 30,
        municipiosPrincipales: [
          "Granollers",
          "Mollet del Vallès",
          "Parets del Vallès",
          "La Garriga",
          "Cardedeu",
        ],
      },
      {
        slug: "baix-llobregat",
        nombre: "Baix Llobregat",
        capital: "Sant Feliu de Llobregat",
        poblacion: 826585,
        descripcion:
          "El Baix Llobregat es una comarca estratégica entre Barcelona y el aeropuerto del Prat. Su proximidad a los grandes recintos feriales la convierte en zona habitual de montajes para eventos, congresos y ferias de alcance internacional.",
        eventosLocales: [
          "Fira de Cornellà",
          "Fira de Sant Boi",
          "Expo Baix Llobregat",
        ],
        espaciosEventos: [
          "Fira de Cornellà",
          "Parc Audiovisual de Catalunya (Terrassa/Sant Joan Despí)",
          "Centre Cívic de Gavà",
          "Hotel Ciutat de Castelldefels",
        ],
        distanciaBarcelona: 12,
        municipiosPrincipales: [
          "Cornellà de Llobregat",
          "Sant Boi de Llobregat",
          "El Prat de Llobregat",
          "Viladecans",
          "Gavà",
          "Castelldefels",
          "Esplugues de Llobregat",
          "Sant Feliu de Llobregat",
        ],
      },
      {
        slug: "maresme",
        nombre: "Maresme",
        capital: "Mataró",
        poblacion: 454641,
        descripcion:
          "El Maresme es la comarca costera al norte de Barcelona, con Mataró como capital. Su oferta de hoteles y espacios frente al mar la hace ideal para eventos corporativos, jornadas outdoor y presentaciones con catering.",
        eventosLocales: [
          "Fira de Mataró",
          "Fira del Maresme",
          "Festival Shakespeare de Santa Susanna",
        ],
        espaciosEventos: [
          "El Rengle (Mataró)",
          "Tecnocampus Mataró",
          "Hotels del litoral",
        ],
        distanciaBarcelona: 30,
        municipiosPrincipales: [
          "Mataró",
          "Premià de Mar",
          "El Masnou",
          "Vilassar de Mar",
          "Calella",
        ],
      },
      {
        slug: "garraf",
        nombre: "Garraf",
        capital: "Vilanova i la Geltrú",
        poblacion: 152050,
        descripcion:
          "El Garraf es una comarca costera con Vilanova i la Geltrú y Sitges como localidades principales. Sitges es un referente para eventos premium, bodas y celebraciones en masías y hoteles boutique frente al mar.",
        eventosLocales: [
          "Carnaval de Sitges",
          "Festival de Cine de Sitges",
          "Fira de Vilanova",
        ],
        espaciosEventos: [
          "Hotel Melia Sitges",
          "Espai Cultural El Prat de Sitges",
          "Centre Cívic de Vilanova",
        ],
        distanciaBarcelona: 40,
        municipiosPrincipales: [
          "Vilanova i la Geltrú",
          "Sitges",
          "Sant Pere de Ribes",
        ],
      },
      {
        slug: "alt-penedes",
        nombre: "Alt Penedès",
        capital: "Vilafranca del Penedès",
        poblacion: 108786,
        descripcion:
          "El Alt Penedès es la cuna del cava y el vino en Cataluña. Vilafranca del Penedès acoge ferias vitivinícolas de renombre y sus bodegas organizan eventos corporativos, presentaciones y cenas de gala todo el año.",
        eventosLocales: [
          "Fira del Gall",
          "Festa Major de Vilafranca",
          "Fira del Vi del Penedès",
        ],
        espaciosEventos: [
          "Vinseum (Museu de les Cultures del Vi)",
          "Bodegas Torres",
          "Bodegas Codorníu",
          "Finca Can Bonastre",
        ],
        distanciaBarcelona: 50,
        municipiosPrincipales: [
          "Vilafranca del Penedès",
          "Sant Sadurní d'Anoia",
          "Gelida",
        ],
      },
      {
        slug: "anoia",
        nombre: "Anoia",
        capital: "Igualada",
        poblacion: 122814,
        descripcion:
          "L'Anoia es una comarca interior con Igualada como centro económico. Conocida por su industria del cuero y la piel, organiza ferias sectoriales relevantes y cuenta con espacios polivalentes para eventos empresariales.",
        eventosLocales: [
          "Fira de la Pell d'Igualada",
          "Fira d'Igualada",
          "European Balloon Festival",
        ],
        espaciosEventos: [
          "Espai Firal d'Igualada",
          "Ateneu Igualadí",
          "Cal Boyer",
        ],
        distanciaBarcelona: 65,
        municipiosPrincipales: ["Igualada", "Vilanova del Camí", "Santa Margarida de Montbui"],
      },
      {
        slug: "bages",
        nombre: "Bages",
        capital: "Manresa",
        poblacion: 177714,
        descripcion:
          "El Bages es una comarca central con Manresa como capital, puerta de acceso a Montserrat. Su tradición industrial y posición geográfica estratégica la convierten en punto habitual de encuentros empresariales y ferias comarcales.",
        eventosLocales: [
          "Fira de l'Aixada de Manresa",
          "Fira de la Llum",
          "Fira Mediterrània",
        ],
        espaciosEventos: [
          "Palau Firal de Manresa",
          "Kursaal Manresa",
          "FUB Campus Manresa",
        ],
        distanciaBarcelona: 65,
        municipiosPrincipales: ["Manresa", "Sant Vicenç de Castellet", "Santpedor", "Navarcles"],
      },
      {
        slug: "osona",
        nombre: "Osona",
        capital: "Vic",
        poblacion: 159626,
        descripcion:
          "Osona es una comarca de interior presidida por Vic, ciudad universitaria y comercial. Su Mercat del Ram es uno de los mercados más antiguos de Cataluña. El tejido asociativo y empresarial genera eventos durante todo el año.",
        eventosLocales: [
          "Mercat del Ram de Vic",
          "Mercat de Música Viva",
          "Fira de Vic",
        ],
        espaciosEventos: [
          "Recinte Firal El Sucre",
          "L'Atlàntida (Vic)",
          "Universitat de Vic",
        ],
        distanciaBarcelona: 70,
        municipiosPrincipales: ["Vic", "Manlleu", "Centelles", "Torelló"],
      },
      {
        slug: "bergueda",
        nombre: "Berguedà",
        capital: "Berga",
        poblacion: 40078,
        descripcion:
          "El Berguedà es una comarca prepirenaica con Berga como capital, famosa por La Patum. El turismo rural y de montaña genera demanda de moqueta para eventos culturales, ferias locales y celebraciones en masías.",
        eventosLocales: [
          "La Patum de Berga (Patrimonio UNESCO)",
          "Fira de Santa Tecla",
          "Fira de Sant Jordi",
        ],
        espaciosEventos: [
          "Plaça Sant Pere de Berga",
          "Centre Cívic de Berga",
          "Espai Cultura Cal Rosal",
        ],
        distanciaBarcelona: 110,
        municipiosPrincipales: ["Berga", "Gironella", "Puig-reig"],
      },
      {
        slug: "moianes",
        nombre: "Moianès",
        capital: "Moià",
        poblacion: 13854,
        descripcion:
          "El Moianès es la comarca más joven de Cataluña, creada en 2015. Con Moià como capital, es una zona rural con un tejido de pequeñas empresas que celebran ferias agrícolas y eventos comunitarios en un entorno natural privilegiado.",
        eventosLocales: [
          "Fira de la Puríssima de Moià",
          "Fira de Sant Isidre",
        ],
        espaciosEventos: [
          "Plaça Major de Moià",
          "Centre Cívic de Moià",
        ],
        distanciaBarcelona: 55,
        municipiosPrincipales: ["Moià", "Calders", "Castellterçol"],
      },
    ],
    recintosFeriales: [
      "Fira Barcelona Montjuïc",
      "Fira Barcelona Gran Via",
      "CCIB - Centre de Convencions Internacional de Barcelona",
      "Palau de Congressos de Catalunya",
    ],
    eventosDestacados: [
      "Mobile World Congress",
      "Alimentaria",
      "Hostelco",
      "Smart City Expo",
      "Automobile Barcelona",
      "Graphispag",
      "Expoquimia",
    ],
  },
  {
    slug: "girona",
    nombre: "Girona",
    codigoPostal: "17",
    poblacion: 780000,
    municipiosPrincipales: [
      "Girona",
      "Figueres",
      "Blanes",
      "Lloret de Mar",
      "Olot",
      "Salt",
      "Palafrugell",
      "Sant Feliu de Guíxols",
      "Roses",
      "Palamós",
      "Ripoll",
      "Banyoles",
    ],
    comarcas: [
      {
        slug: "girones",
        nombre: "Gironès",
        capital: "Girona",
        poblacion: 191791,
        descripcion:
          "El Gironès es la comarca central de las comarques gironines, con la ciudad de Girona como capital. Su casco antiguo, declarado Conjunto Histórico-Artístico, acoge eventos culturales de primer nivel como Temps de Flors.",
        eventosLocales: [
          "Temps de Flors",
          "Festes de Sant Narcís",
          "Festival Strenes",
        ],
        espaciosEventos: [
          "Palau de Fires de Girona",
          "Centre Cultural La Mercè",
          "Auditori de Girona",
        ],
        distanciaBarcelona: 100,
        municipiosPrincipales: ["Girona", "Salt", "Sarrià de Ter", "Cassà de la Selva"],
      },
      {
        slug: "alt-emporda",
        nombre: "Alt Empordà",
        capital: "Figueres",
        poblacion: 142222,
        descripcion:
          "L'Alt Empordà es la comarca más septentrional de la Costa Brava, con Figueres como capital y el Teatre-Museu Dalí como icono. El turismo cultural y gastronómico genera eventos durante todo el año.",
        eventosLocales: [
          "Fira del Circ de Figueres",
          "Acústica Festival",
          "Fires de la Santa Creu",
        ],
        espaciosEventos: [
          "Teatre-Museu Dalí",
          "Recinte Firal de Figueres",
          "Hotels de Roses i Empuriabrava",
        ],
        distanciaBarcelona: 140,
        municipiosPrincipales: ["Figueres", "Roses", "Castelló d'Empúries", "Llançà"],
      },
      {
        slug: "baix-emporda",
        nombre: "Baix Empordà",
        capital: "La Bisbal d'Empordà",
        poblacion: 134468,
        descripcion:
          "El Baix Empordà es el corazón de la Costa Brava, con pueblos medievales y calas emblemáticas. Palafrugell, Palamós y Begur acogen eventos gastronómicos, bodas premium y ferias de artesanía todo el año.",
        eventosLocales: [
          "Jornades Gastronòmiques de la Gamba de Palamós",
          "Festival de Cap Roig",
          "Fira de la Ceràmica de La Bisbal",
        ],
        espaciosEventos: [
          "Jardins de Cap Roig",
          "Hotel Aigua Blava",
          "Espai Ter (Torroella de Montgrí)",
        ],
        distanciaBarcelona: 120,
        municipiosPrincipales: [
          "La Bisbal d'Empordà",
          "Palafrugell",
          "Palamós",
          "Sant Feliu de Guíxols",
          "Torroella de Montgrí",
        ],
      },
      {
        slug: "selva",
        nombre: "La Selva",
        capital: "Santa Coloma de Farners",
        poblacion: 177063,
        descripcion:
          "La Selva es una comarca que combina la costa turística de Blanes y Lloret de Mar con el interior termal de Caldes de Malavella. Sus hoteles resort son escenario habitual de convenciones, congresos y eventos corporativos.",
        eventosLocales: [
          "Festival Jardins de Santa Clotilde",
          "Fira de Santa Coloma",
          "Lloret Tourism & Events",
        ],
        espaciosEventos: [
          "Hotels de Lloret de Mar",
          "Evenia Olympic Palace",
          "Casino de Lloret",
        ],
        distanciaBarcelona: 70,
        municipiosPrincipales: [
          "Blanes",
          "Lloret de Mar",
          "Santa Coloma de Farners",
          "Caldes de Malavella",
        ],
      },
      {
        slug: "garrotxa",
        nombre: "La Garrotxa",
        capital: "Olot",
        poblacion: 57297,
        descripcion:
          "La Garrotxa es una comarca volcánica con un patrimonio natural único. Olot es su centro cultural y económico, con un tejido industrial que organiza ferias y eventos en un entorno paisajístico singular.",
        eventosLocales: [
          "Festes del Tura",
          "Fira de Sant Lluc",
          "Sismògraf (Festival de creació en moviment)",
        ],
        espaciosEventos: [
          "Recinte Firal d'Olot",
          "Teatre Principal d'Olot",
          "Centre de Cultura Can Trincheria",
        ],
        distanciaBarcelona: 130,
        municipiosPrincipales: ["Olot", "Besalú", "Santa Pau"],
      },
      {
        slug: "ripolles",
        nombre: "Ripollès",
        capital: "Ripoll",
        poblacion: 25901,
        descripcion:
          "El Ripollès es la comarca pirenaica donde nació Cataluña, con el Monestir de Ripoll como símbolo. El turismo de montaña y el patrimonio cultural generan eventos y ferias artesanales durante todo el año.",
        eventosLocales: [
          "Fira de Ripoll",
          "Fira del Bisbe de Sant Joan de les Abadesses",
        ],
        espaciosEventos: [
          "Recinte Firal de Ripoll",
          "Monestir de Ripoll",
        ],
        distanciaBarcelona: 110,
        municipiosPrincipales: ["Ripoll", "Campdevànol", "Sant Joan de les Abadesses"],
      },
      {
        slug: "pla-estany",
        nombre: "Pla de l'Estany",
        capital: "Banyoles",
        poblacion: 33685,
        descripcion:
          "El Pla de l'Estany se articula alrededor del lago de Banyoles, sede olímpica de remo en 1992. Es un destino para eventos deportivos, culturales y corporativos que buscan un entorno natural privilegiado.",
        eventosLocales: [
          "Fira de Banyoles",
          "Regata Internacional de Banyoles",
          "Festival de Portalblau",
        ],
        espaciosEventos: [
          "Pavelló Olímpic de Banyoles",
          "Espai Columba",
          "Passeig del Llac",
        ],
        distanciaBarcelona: 120,
        municipiosPrincipales: ["Banyoles", "Porqueres", "Cornellà del Terri"],
      },
      {
        slug: "cerdanya",
        nombre: "Cerdanya",
        capital: "Puigcerdà",
        poblacion: 18890,
        descripcion:
          "La Cerdanya es una comarca pirenaica transfronteriza conocida por sus estaciones de esquí y el turismo de montaña. Puigcerdà acoge eventos deportivos y culturales en un entorno de alta montaña.",
        eventosLocales: [
          "Fira de Puigcerdà",
          "Mercat dels Diumenge",
          "Festivales de estaciones de esquí",
        ],
        espaciosEventos: [
          "Poliesportiu de Puigcerdà",
          "Hotels de La Molina y Masella",
        ],
        distanciaBarcelona: 170,
        municipiosPrincipales: ["Puigcerdà", "Bellver de Cerdanya", "Alp"],
      },
    ],
    recintosFeriales: ["Palau Firal de Girona", "Fira de Girona"],
    eventosDestacados: [
      "Temps de Flors",
      "Fira del Circ",
      "Fira de Sant Narcís",
    ],
  },
  {
    slug: "tarragona",
    nombre: "Tarragona",
    codigoPostal: "43",
    poblacion: 810000,
    municipiosPrincipales: [
      "Tarragona",
      "Reus",
      "Tortosa",
      "Cambrils",
      "Salou",
      "Vila-seca",
      "Valls",
      "El Vendrell",
      "Amposta",
      "Calafell",
    ],
    comarcas: [
      {
        slug: "tarragones",
        nombre: "Tarragonès",
        capital: "Tarragona",
        poblacion: 256999,
        descripcion:
          "El Tarragonès acoge la ciudad de Tarragona, Patrimonio de la Humanidad por su legado romano, y Salou, destino turístico de primer nivel. La industria petroquímica y el turismo generan una demanda constante de eventos.",
        eventosLocales: [
          "Tarraco Viva",
          "Concurs de Castells",
          "Santa Tecla",
        ],
        espaciosEventos: [
          "Palau de Congressos de Tarragona",
          "Amfiteatre Romà",
          "PortAventura Convention Centre",
          "Hotels de Salou",
        ],
        distanciaBarcelona: 100,
        municipiosPrincipales: ["Tarragona", "Salou", "Vila-seca", "Cambrils", "Torredembarra"],
      },
      {
        slug: "baix-camp",
        nombre: "Baix Camp",
        capital: "Reus",
        poblacion: 195748,
        descripcion:
          "El Baix Camp tiene en Reus su capital, ciudad modernista y cuna de Gaudí. Con el aeropuerto de Reus y la proximidad a PortAventura, es un punto neurálgico para ferias, congresos y eventos turísticos.",
        eventosLocales: [
          "Fira de Reus",
          "Misericòrdia",
          "Fira del Gall de Reus",
        ],
        espaciosEventos: [
          "Fira Reus",
          "Palau Firal de Reus",
          "Teatre Fortuny",
        ],
        distanciaBarcelona: 110,
        municipiosPrincipales: ["Reus", "Cambrils", "Mont-roig del Camp"],
      },
      {
        slug: "alt-camp",
        nombre: "Alt Camp",
        capital: "Valls",
        poblacion: 46170,
        descripcion:
          "L'Alt Camp es la comarca dels castellers, con Valls como capital y cuna de esta tradición Patrimonio de la Humanidad. Las ferias del calçot y los eventos culturales son su seña de identidad.",
        eventosLocales: [
          "Gran Festa de la Calçotada",
          "Fira de Santa Úrsula",
          "Concurs de Castells",
        ],
        espaciosEventos: [
          "Pati de l'Antiga Audiència de Valls",
          "Casal Vallencs",
        ],
        distanciaBarcelona: 100,
        municipiosPrincipales: ["Valls", "El Pla de Santa Maria"],
      },
      {
        slug: "baix-penedes",
        nombre: "Baix Penedès",
        capital: "El Vendrell",
        poblacion: 105178,
        descripcion:
          "El Baix Penedès es una comarca costera entre Barcelona y Tarragona, con El Vendrell y Calafell como referentes turísticos. El turismo de sol y playa y la proximidad a la A7 la hacen ideal para eventos estivales.",
        eventosLocales: [
          "Festes Decennals de la Mare de Déu de la Bisbal",
          "Festival Pau Casals",
        ],
        espaciosEventos: [
          "Auditori Pau Casals (El Vendrell)",
          "Hotels de Calafell i Coma-ruga",
        ],
        distanciaBarcelona: 70,
        municipiosPrincipales: ["El Vendrell", "Calafell", "Cunit"],
      },
      {
        slug: "baix-ebre",
        nombre: "Baix Ebre",
        capital: "Tortosa",
        poblacion: 82810,
        descripcion:
          "El Baix Ebre se vertebra alrededor de Tortosa y el río Ebre. La ciudad conserva un patrimonio monumental que incluye la catedral y el castillo de la Suda, espacios singulares para eventos con carácter histórico.",
        eventosLocales: [
          "Renaixement de Tortosa",
          "Fira de l'Oli",
          "Fira de Tortosa",
        ],
        espaciosEventos: [
          "Parador de Tortosa (Castillo de la Suda)",
          "Recinte Firal de Tortosa",
          "Auditori Felip Pedrell",
        ],
        distanciaBarcelona: 180,
        municipiosPrincipales: ["Tortosa", "Roquetes", "Deltebre"],
      },
      {
        slug: "montsia",
        nombre: "Montsià",
        capital: "Amposta",
        poblacion: 70694,
        descripcion:
          "El Montsià es la comarca más meridional de Cataluña, con el Delta del Ebro como patrimonio natural. Amposta es su capital, y el ecoturismo y la gastronomía del arroz generan eventos y jornadas especializadas.",
        eventosLocales: [
          "Fira d'Amposta",
          "Fira de l'Arròs del Delta",
          "Jornades gastronòmiques del Delta",
        ],
        espaciosEventos: [
          "Museu de les Terres de l'Ebre",
          "Lo Pati (Centre d'Art Terres de l'Ebre)",
        ],
        distanciaBarcelona: 200,
        municipiosPrincipales: ["Amposta", "Sant Carles de la Ràpita", "Ulldecona"],
      },
      {
        slug: "priorat",
        nombre: "Priorat",
        capital: "Falset",
        poblacion: 9742,
        descripcion:
          "El Priorat es una comarca vitivinícola de prestigio internacional, con vinos DOQ. Sus bodegas de diseño y el paisaje de montaña la convierten en un destino exclusivo para catas, jornadas enológicas y eventos premium.",
        eventosLocales: [
          "Fira del Vi de Falset",
          "ViOrigen",
          "Fira de la Torregassa",
        ],
        espaciosEventos: [
          "Celler Buil & Giné",
          "Celler de Scala Dei",
          "Espai Firal de Falset",
        ],
        distanciaBarcelona: 150,
        municipiosPrincipales: ["Falset", "Porrera", "La Morera de Montsant"],
      },
      {
        slug: "terra-alta",
        nombre: "Terra Alta",
        capital: "Gandesa",
        poblacion: 12000,
        descripcion:
          "La Terra Alta es una comarca de interior con Gandesa como capital, conocida por sus vinos DO y el patrimonio de la Batalla del Ebro. El enoturismo y la memoria histórica generan eventos culturales y gastronómicos.",
        eventosLocales: [
          "Fira del Vi de la Terra Alta",
          "Jornades de la Batalla de l'Ebre",
        ],
        espaciosEventos: [
          "Centre d'Interpretació Batalla de l'Ebre",
          "Celler Cooperatiu de Gandesa (obra de Cèsar Martinell)",
        ],
        distanciaBarcelona: 190,
        municipiosPrincipales: ["Gandesa", "Batea", "Bot"],
      },
      {
        slug: "ribera-ebre",
        nombre: "Ribera d'Ebre",
        capital: "Móra d'Ebre",
        poblacion: 22835,
        descripcion:
          "La Ribera d'Ebre se extiende a lo largo del curso del río Ebre. Móra d'Ebre y Flix son sus poblaciones principales, con un patrimonio industrial y fluvial que inspira eventos culturales y jornadas sectoriales.",
        eventosLocales: [
          "Fira de Móra d'Ebre",
          "Descens del riu Ebre",
        ],
        espaciosEventos: [
          "Espai Firal de Móra d'Ebre",
          "Centre Cultural de Flix",
        ],
        distanciaBarcelona: 170,
        municipiosPrincipales: ["Móra d'Ebre", "Flix", "Móra la Nova"],
      },
      {
        slug: "conca-barbera",
        nombre: "Conca de Barberà",
        capital: "Montblanc",
        poblacion: 20836,
        descripcion:
          "La Conca de Barberà es una comarca interior con Montblanc como joya medieval amurallada y el Monestir de Poblet, Patrimonio de la Humanidad. Espacios históricos únicos para eventos culturales y celebraciones especiales.",
        eventosLocales: [
          "Setmana Medieval de Montblanc",
          "Fira de les Espelmes",
          "Fira de Tots Sants",
        ],
        espaciosEventos: [
          "Recinte Firal de Montblanc",
          "Monestir de Poblet",
          "Casal de Montblanc",
        ],
        distanciaBarcelona: 120,
        municipiosPrincipales: ["Montblanc", "L'Espluga de Francolí", "Santa Coloma de Queralt"],
      },
    ],
    recintosFeriales: [
      "Fira Reus",
      "Palau Firal i de Congressos de Tarragona",
      "Recinte Firal de Tortosa",
    ],
    eventosDestacados: [
      "Tarraco Viva",
      "Fira del Vi de Falset",
      "PortAventura Events",
    ],
  },
  {
    slug: "lleida",
    nombre: "Lleida",
    codigoPostal: "25",
    poblacion: 440000,
    municipiosPrincipales: [
      "Lleida",
      "Balaguer",
      "Tàrrega",
      "Mollerussa",
      "La Seu d'Urgell",
      "Solsona",
      "Les Borges Blanques",
      "Cervera",
      "Vielha",
    ],
    comarcas: [
      {
        slug: "segria",
        nombre: "Segrià",
        capital: "Lleida",
        poblacion: 210702,
        descripcion:
          "El Segrià es la comarca central de las terres de Lleida, con la capital de provincia como motor económico. La Fira de Lleida, el Aplec del Caragol y la Llotja de Lleida son referentes del sector eventos.",
        eventosLocales: [
          "Aplec del Caragol",
          "Fira de Sant Miquel",
          "Festes de Maig",
        ],
        espaciosEventos: [
          "Fira de Lleida",
          "La Llotja (Palau de Congressos de Lleida)",
          "Camp d'Esports",
        ],
        distanciaBarcelona: 160,
        municipiosPrincipales: ["Lleida", "Alcarràs", "Almacelles"],
      },
      {
        slug: "noguera",
        nombre: "La Noguera",
        capital: "Balaguer",
        poblacion: 39975,
        descripcion:
          "La Noguera es la comarca más extensa de Cataluña, con Balaguer como capital a orillas del Segre. El patrimonio medieval y el entorno natural ofrecen espacios singulares para eventos y encuentros.",
        eventosLocales: [
          "Fira de Sant Miquel de Balaguer",
          "Fira de Santa Maria",
        ],
        espaciosEventos: [
          "Claustro de Sant Domènec de Balaguer",
          "Espai Firal de Balaguer",
        ],
        distanciaBarcelona: 180,
        municipiosPrincipales: ["Balaguer", "Artesa de Segre", "Os de Balaguer"],
      },
      {
        slug: "urgell",
        nombre: "Urgell",
        capital: "Tàrrega",
        poblacion: 37266,
        descripcion:
          "L'Urgell tiene en Tàrrega su capital, reconocida internacionalmente por la Fira de Teatre al Carrer, el festival de artes de calle más importante de España. El sector cultural genera eventos todo el año.",
        eventosLocales: [
          "Fira de Teatre al Carrer de Tàrrega",
          "Fira de Sant Isidre",
          "Cercavila de gegants",
        ],
        espaciosEventos: [
          "Espais de la Fira de Tàrrega",
          "Teatre Ateneu de Tàrrega",
        ],
        distanciaBarcelona: 130,
        municipiosPrincipales: ["Tàrrega", "Agramunt", "Bellpuig"],
      },
      {
        slug: "pla-urgell",
        nombre: "Pla d'Urgell",
        capital: "Mollerussa",
        poblacion: 37570,
        descripcion:
          "El Pla d'Urgell es una comarca agrícola con Mollerussa como capital, sede de la Fira de Sant Josep, una de las ferias agrícolas más importantes de Cataluña con más de 200 años de historia.",
        eventosLocales: [
          "Fira de Sant Josep de Mollerussa",
          "Fira de l'Oli",
        ],
        espaciosEventos: [
          "Recinte Firal de Mollerussa",
          "Pavelló Firal 3 d'Abril",
        ],
        distanciaBarcelona: 150,
        municipiosPrincipales: ["Mollerussa", "Miralcamp", "Linyola"],
      },
      {
        slug: "garrigues",
        nombre: "Les Garrigues",
        capital: "Les Borges Blanques",
        poblacion: 19888,
        descripcion:
          "Les Garrigues es la comarca del aceite de oliva por excelencia en Cataluña, con la DOP Oli de les Garrigues. Las jornadas oleícolas y ferias gastronómicas son su sello identitario.",
        eventosLocales: [
          "Fira de l'Oli de les Garrigues",
          "Fira de l'Oliva",
        ],
        espaciosEventos: [
          "Espai Firal de Les Borges Blanques",
          "Centre Cívic de Les Borges Blanques",
        ],
        distanciaBarcelona: 150,
        municipiosPrincipales: ["Les Borges Blanques", "Juneda", "Arbeca"],
      },
      {
        slug: "segarra",
        nombre: "La Segarra",
        capital: "Cervera",
        poblacion: 22937,
        descripcion:
          "La Segarra tiene en Cervera su capital, ciudad universitaria con un rico patrimonio monumental. La Universitat de Cervera y sus espacios históricos acogen congresos, seminarios y eventos culturales.",
        eventosLocales: [
          "Aquelarre de Cervera",
          "Fira de Tots Sants",
          "Mercat Medieval",
        ],
        espaciosEventos: [
          "Universitat de Cervera",
          "Centre Cívic de Cervera",
        ],
        distanciaBarcelona: 110,
        municipiosPrincipales: ["Cervera", "Guissona", "Sanaüja"],
      },
      {
        slug: "alt-urgell",
        nombre: "Alt Urgell",
        capital: "La Seu d'Urgell",
        poblacion: 21089,
        descripcion:
          "L'Alt Urgell tiene como capital La Seu d'Urgell, sede olímpica de piragüismo en 1992. El turismo de aventura y la proximidad a Andorra generan eventos deportivos, ferias fronterizas y congresos.",
        eventosLocales: [
          "Fira de Sant Ermengol",
          "Fira del Formatge Artesà del Pirineu",
        ],
        espaciosEventos: [
          "Parc Olímpic del Segre",
          "Palau d'Esports de la Seu",
          "Claustro de la Catedral de la Seu",
        ],
        distanciaBarcelona: 200,
        municipiosPrincipales: ["La Seu d'Urgell", "Oliana", "Organyà"],
      },
      {
        slug: "solsones",
        nombre: "Solsonès",
        capital: "Solsona",
        poblacion: 13621,
        descripcion:
          "El Solsonès es una comarca de interior con Solsona como capital, famosa por su Carnaval declarado Festa Patrimonial. La ciudad episcopal ofrece un entorno histórico para eventos culturales y celebraciones.",
        eventosLocales: [
          "Carnaval de Solsona",
          "Fira de Sant Isidre",
          "Festa Major de Solsona",
        ],
        espaciosEventos: [
          "Sala Polivalent de Solsona",
          "Plaça Major de Solsona",
        ],
        distanciaBarcelona: 120,
        municipiosPrincipales: ["Solsona", "Navès", "Olius"],
      },
      {
        slug: "pallars-jussa",
        nombre: "Pallars Jussà",
        capital: "Tremp",
        poblacion: 13657,
        descripcion:
          "El Pallars Jussà es una comarca prepirenaica con Tremp como capital y el embalse de Sant Antoni como recurso turístico. El turismo de naturaleza y los eventos al aire libre definen su oferta.",
        eventosLocales: [
          "Fira de Tremp",
          "Festes Majors de Tremp",
        ],
        espaciosEventos: [
          "Espai Cultural La Lira (Tremp)",
          "Embassament de Sant Antoni",
        ],
        distanciaBarcelona: 200,
        municipiosPrincipales: ["Tremp", "Talarn", "Isona i Conca Dellà"],
      },
      {
        slug: "pallars-sobira",
        nombre: "Pallars Sobirà",
        capital: "Sort",
        poblacion: 7348,
        descripcion:
          "El Pallars Sobirà es la comarca del ràfting y los deportes de aventura, con Sort como capital. El turismo activo y el Parc Nacional d'Aigüestortes generan eventos deportivos y de naturaleza.",
        eventosLocales: [
          "RàftingSort",
          "Fira de Sort",
          "Festa de la Fallera",
        ],
        espaciosEventos: [
          "Pavelló Poliesportiu de Sort",
          "Espai Firal de Sort",
        ],
        distanciaBarcelona: 230,
        municipiosPrincipales: ["Sort", "Rialp", "Esterri d'Àneu"],
      },
      {
        slug: "val-aran",
        nombre: "Val d'Aran",
        capital: "Vielha",
        poblacion: 10295,
        descripcion:
          "La Val d'Aran es la única comarca atlántica de Cataluña, con Vielha como capital y Baqueira-Beret como estación de esquí de referencia. El turismo de lujo genera eventos premium, congresos y celebraciones exclusivas.",
        eventosLocales: [
          "Era Hèsta d'Aran",
          "Fira de Vielha",
          "Eventos Baqueira-Beret",
        ],
        espaciosEventos: [
          "Palai de Gèu (Vielha)",
          "Hotels de Baqueira-Beret",
          "Val de Ruda Resort",
        ],
        distanciaBarcelona: 280,
        municipiosPrincipales: ["Vielha", "Bossòst", "Les"],
      },
      {
        slug: "alta-ribagorca",
        nombre: "Alta Ribagorça",
        capital: "El Pont de Suert",
        poblacion: 4048,
        descripcion:
          "L'Alta Ribagorça es la comarca de acceso al Parc Nacional d'Aigüestortes i Estany de Sant Maurici. Las estaciones de esquí de Boí Taüll y el patrimonio románico (UNESCO) generan turismo y eventos de naturaleza.",
        eventosLocales: [
          "Falles del Pirineu (Patrimonio UNESCO)",
          "Fira de El Pont de Suert",
        ],
        espaciosEventos: [
          "Hotel Boí Taüll Resort",
          "Centre d'Interpretació del Romànic de la Vall de Boí",
        ],
        distanciaBarcelona: 260,
        municipiosPrincipales: ["El Pont de Suert", "Vilaller", "La Vall de Boí"],
      },
    ],
    recintosFeriales: ["Fira de Lleida", "Palau de Vidre"],
    eventosDestacados: [
      "Fira de Sant Miquel",
      "Aplec del Caragol",
      "Fira de Tàrrega",
    ],
  },
];

export const topMunicipios: Municipio[] = [
  {
    slug: "hospitalet",
    nombre: "L'Hospitalet de Llobregat",
    provincia: "barcelona",
    poblacion: 264923,
    comarca: "barcelones",
    descripcion:
      "L'Hospitalet de Llobregat es la segunda ciudad de Cataluña y limítrofe con Barcelona. Su proximidad a Fira Barcelona Gran Via la convierte en sede logística de grandes eventos y ferias internacionales.",
    zonasEventos: ["Fira Barcelona Gran Via (distrito limítrofe)", "Centre Cultural Tecla Sala", "Hotels de Gran Via L'H"],
  },
  {
    slug: "badalona",
    nombre: "Badalona",
    provincia: "barcelona",
    poblacion: 223506,
    comarca: "barcelones",
    descripcion:
      "Badalona es la tercera ciudad de Cataluña, con un frente marítimo renovado y espacios industriales reconvertidos. El Palau Olímpic y su puerto deportivo ofrecen opciones para eventos de gran formato.",
    zonasEventos: ["Palau Olímpic de Badalona", "Magic Badalona", "Port de Badalona"],
  },
  {
    slug: "terrassa",
    nombre: "Terrassa",
    provincia: "barcelona",
    poblacion: 223627,
    comarca: "valles-occidental",
    descripcion:
      "Terrassa es una gran ciudad industrial del Vallès, con patrimonio modernista y una activa agenda ferial. El Firal de Terrassa y el Vapor Gran son espacios de referencia para eventos empresariales.",
    zonasEventos: ["Firal de Terrassa", "Vapor Gran", "Nova Terrassa Hotels", "Masia Freixa"],
  },
  {
    slug: "sabadell",
    nombre: "Sabadell",
    provincia: "barcelona",
    poblacion: 213644,
    comarca: "valles-occidental",
    descripcion:
      "Sabadell es capital del Vallès Occidental, ciudad con tradición textil e industrial. Cuenta con espacios feriales modernos y una oferta hotelera que atiende congresos, ferias sectoriales y jornadas empresariales.",
    zonasEventos: ["Fira Sabadell", "Hotel-Palau de Congressos", "Espai Cultura Sabadell"],
  },
  {
    slug: "mataro",
    nombre: "Mataró",
    provincia: "barcelona",
    poblacion: 129661,
    comarca: "maresme",
    descripcion:
      "Mataró es la capital del Maresme, ciudad costera con un importante tejido industrial y el Tecnocampus como polo de innovación. Los eventos tecnológicos y las ferias sectoriales definen su agenda.",
    zonasEventos: ["Tecnocampus Mataró", "El Rengle", "Hotels del passeig marítim"],
  },
  {
    slug: "santa-coloma",
    nombre: "Santa Coloma de Gramenet",
    provincia: "barcelona",
    poblacion: 119984,
    comarca: "barcelones",
    descripcion:
      "Santa Coloma de Gramenet es una ciudad dinámica del área metropolitana de Barcelona, con espacios culturales renovados y buena conexión de transporte para eventos urbanos.",
    zonasEventos: ["Centre Cultural Can Sisteré", "Teatre Municipal Can Fradera"],
  },
  {
    slug: "cornella",
    nombre: "Cornellà de Llobregat",
    provincia: "barcelona",
    poblacion: 89553,
    comarca: "baix-llobregat",
    descripcion:
      "Cornellà de Llobregat está en el corazón del Baix Llobregat, con la Fira de Cornellà como referente y excelentes conexiones con Barcelona. La industria y los servicios generan una activa agenda de eventos.",
    zonasEventos: ["Fira de Cornellà", "Centre Poliesportiu", "L'Auditori de Cornellà"],
  },
  {
    slug: "sant-cugat",
    nombre: "Sant Cugat del Vallès",
    provincia: "barcelona",
    poblacion: 91669,
    comarca: "valles-occidental",
    descripcion:
      "Sant Cugat del Vallès es una ciudad residencial con alta renta per cápita y un importante parque empresarial. El turismo de negocio y los eventos corporativos son habituales en sus hoteles y espacios.",
    zonasEventos: ["Hotel Sant Cugat", "Ateneu de Sant Cugat", "Parc empresarial Can Sant Joan"],
  },
  {
    slug: "sant-boi",
    nombre: "Sant Boi de Llobregat",
    provincia: "barcelona",
    poblacion: 83107,
    comarca: "baix-llobregat",
    descripcion:
      "Sant Boi de Llobregat combina tradición agrícola con modernidad, muy próximo al aeropuerto del Prat. Su ubicación estratégica facilita la logística de eventos y ferias en el área metropolitana.",
    zonasEventos: ["Espai Cultural Sant Boi", "Mercat Nou"],
  },
  {
    slug: "rubi",
    nombre: "Rubí",
    provincia: "barcelona",
    poblacion: 78473,
    comarca: "valles-occidental",
    descripcion:
      "Rubí es una ciudad industrial del Vallès Occidental con un tejido empresarial diversificado. Sus polígonos industriales y centros empresariales acogen jornadas sectoriales y eventos corporativos.",
    zonasEventos: ["Centre Cultural de Rubí", "Espais industrials reconvertits"],
  },
  {
    slug: "manresa",
    nombre: "Manresa",
    provincia: "barcelona",
    poblacion: 78747,
    comarca: "bages",
    descripcion:
      "Manresa es la capital del Bages, ciudad de referencia de la Catalunya Central. La Fira de l'Aixada y el Kursaal son motores de una activa agenda de eventos empresariales y culturales.",
    zonasEventos: ["Palau Firal de Manresa", "Kursaal Manresa", "FUB Campus"],
  },
  {
    slug: "vilanova",
    nombre: "Vilanova i la Geltrú",
    provincia: "barcelona",
    poblacion: 68017,
    comarca: "garraf",
    descripcion:
      "Vilanova i la Geltrú es la capital del Garraf, ciudad costera con tradición marinera y un animado Carnaval. Su frente marítimo y espacios culturales acogen eventos, ferias y celebraciones.",
    zonasEventos: ["Centre Cívic de Vilanova", "Port de Vilanova", "Espai Far"],
  },
  {
    slug: "granollers",
    nombre: "Granollers",
    provincia: "barcelona",
    poblacion: 62475,
    comarca: "valles-oriental",
    descripcion:
      "Granollers es la capital del Vallès Oriental, con un importante Palau Firal que acoge ferias, exposiciones y eventos deportivos. La Fira de l'Ascensió es una de las más antiguas de Cataluña.",
    zonasEventos: ["Palau Firal de Granollers", "Can Mulà", "Centre Cultural"],
  },
  {
    slug: "viladecans",
    nombre: "Viladecans",
    provincia: "barcelona",
    poblacion: 67174,
    comarca: "baix-llobregat",
    descripcion:
      "Viladecans es una ciudad del Baix Llobregat junto al aeropuerto, con el Viladecans The Style Outlets y Gavà Mar como polos de actividad. Punto logístico para eventos en el área metropolitana sur.",
    zonasEventos: ["Viladecans The Style Outlets", "Centre Cívic", "Hotels de Gavà Mar"],
  },
  {
    slug: "el-prat",
    nombre: "El Prat de Llobregat",
    provincia: "barcelona",
    poblacion: 64883,
    comarca: "baix-llobregat",
    descripcion:
      "El Prat de Llobregat alberga el aeropuerto Josep Tarradellas Barcelona-El Prat. Su ubicación única la convierte en base logística para montajes feriales y eventos que requieren acceso aéreo directo.",
    zonasEventos: ["Hotels de l'aeroport", "Centre Cívic El Prat", "Espai Natural del Delta"],
  },
  {
    slug: "castelldefels",
    nombre: "Castelldefels",
    provincia: "barcelona",
    poblacion: 67050,
    comarca: "baix-llobregat",
    descripcion:
      "Castelldefels combina playa y montaña a 20 minutos de Barcelona. Sus hoteles frente al mar y el Canal Olímpic la convierten en destino para team buildings, convenciones y eventos outdoor.",
    zonasEventos: ["Canal Olímpic de Catalunya", "Hotels de la platja", "Castell de Castelldefels"],
  },
  {
    slug: "gava",
    nombre: "Gavà",
    provincia: "barcelona",
    poblacion: 48567,
    comarca: "baix-llobregat",
    descripcion:
      "Gavà es una ciudad del Baix Llobregat con playa propia y zona de negocios. Gavà Mar concentra hoteles y espacios para eventos corporativos con acceso directo al aeropuerto.",
    zonasEventos: ["Hotels Gavà Mar", "Centre Cívic de Gavà", "Passeig Marítim"],
  },
  {
    slug: "cerdanyola",
    nombre: "Cerdanyola del Vallès",
    provincia: "barcelona",
    poblacion: 57892,
    comarca: "valles-occidental",
    descripcion:
      "Cerdanyola del Vallès alberga el campus de la UAB y el Parc de l'Alba, polo de innovación y tecnología. Los eventos universitarios y empresariales son habituales en sus espacios modernos.",
    zonasEventos: ["Campus de la UAB", "Parc de l'Alba (Síncrotró Alba)", "Centre Cívic"],
  },
  {
    slug: "reus",
    nombre: "Reus",
    provincia: "tarragona",
    poblacion: 107211,
    comarca: "baix-camp",
    descripcion:
      "Reus es la segunda ciudad de Tarragona, cuna de Gaudí y centro modernista. La Fira Reus es un espacio ferial de referencia y la ciudad acoge ferias, congresos y eventos durante todo el año.",
    zonasEventos: ["Fira Reus", "Palau Firal", "Teatre Fortuny", "Gaudí Centre"],
  },
  {
    slug: "girona-ciudad",
    nombre: "Girona",
    provincia: "girona",
    poblacion: 103369,
    comarca: "girones",
    descripcion:
      "Girona es una ciudad monumental con el Barri Vell como joya medieval. Temps de Flors, el Festival Strenes y las Festes de Sant Narcís generan una agenda cultural y de eventos de primer nivel.",
    zonasEventos: ["Palau de Fires de Girona", "Auditori de Girona", "Centre Cultural La Mercè"],
  },
  {
    slug: "lleida-ciudad",
    nombre: "Lleida",
    provincia: "lleida",
    poblacion: 138956,
    comarca: "segria",
    descripcion:
      "Lleida es la capital de la provincia, con La Llotja como palau de congressos de referencia en el interior de Cataluña. El Aplec del Caragol y la Fira de Sant Miquel atraen visitantes de toda España.",
    zonasEventos: ["La Llotja de Lleida", "Fira de Lleida", "Camp d'Esports", "Pavelló Barris Nord"],
  },
  {
    slug: "tarragona-ciudad",
    nombre: "Tarragona",
    provincia: "tarragona",
    poblacion: 134515,
    comarca: "tarragones",
    descripcion:
      "Tarragona es Patrimonio de la Humanidad por su legado romano. El Amfiteatre, el Tarraco Arena Plaça y el Palau de Congressos ofrecen espacios únicos para eventos con carácter histórico.",
    zonasEventos: ["Palau de Congressos de Tarragona", "Tarraco Arena Plaça", "Amfiteatre Romà"],
  },
  {
    slug: "figueres",
    nombre: "Figueres",
    provincia: "girona",
    poblacion: 47084,
    comarca: "alt-emporda",
    descripcion:
      "Figueres es la capital del Alt Empordà y ciudad natal de Dalí. El Teatre-Museu Dalí, la Fira del Circ y las ferias comerciales generan un flujo constante de visitantes y eventos culturales.",
    zonasEventos: ["Recinte Firal de Figueres", "Teatre-Museu Dalí", "Teatre El Jardí"],
  },
  {
    slug: "blanes",
    nombre: "Blanes",
    provincia: "girona",
    poblacion: 38888,
    comarca: "selva",
    descripcion:
      "Blanes es la porta de la Costa Brava, con el Jardí Botànic Marimurtra como espacio emblemático. El Concurs Internacional de Focs d'Artifici y sus playas la hacen ideal para eventos estivales.",
    zonasEventos: ["Jardí Botànic Marimurtra", "Passeig de Blanes", "Hotels del litoral"],
  },
  {
    slug: "lloret",
    nombre: "Lloret de Mar",
    provincia: "girona",
    poblacion: 38624,
    comarca: "selva",
    descripcion:
      "Lloret de Mar es el principal destino turístico de la Costa Brava, con una infraestructura hotelera de gran capacidad. Convenciones, team buildings y eventos corporativos a gran escala son su especialidad.",
    zonasEventos: ["Evenia Olympic Palace", "Casino de Lloret", "Gran Hotel Monterrey", "Hotels resort"],
  },
  {
    slug: "vic",
    nombre: "Vic",
    provincia: "barcelona",
    poblacion: 46214,
    comarca: "osona",
    descripcion:
      "Vic es la capital d'Osona, ciudad universitaria con un patrimonio cultural notable. El Mercat del Ram y el Mercat de Música Viva son eventos de referencia que requieren montajes profesionales.",
    zonasEventos: ["Recinte Firal El Sucre", "L'Atlàntida", "Universitat de Vic"],
  },
  {
    slug: "igualada",
    nombre: "Igualada",
    provincia: "barcelona",
    poblacion: 40588,
    comarca: "anoia",
    descripcion:
      "Igualada es la capital de l'Anoia, conocida por su industria del cuero y el European Balloon Festival. La Fira de la Pell y los eventos empresariales son habituales en esta ciudad dinámica.",
    zonasEventos: ["Espai Firal d'Igualada", "Ateneu Igualadí", "Cal Boyer"],
  },
  {
    slug: "tortosa",
    nombre: "Tortosa",
    provincia: "tarragona",
    poblacion: 33743,
    comarca: "baix-ebre",
    descripcion:
      "Tortosa es la capital del Baix Ebre, ciudad monumental a orillas del río Ebre. El Parador de la Suda y el festival Renaixement ofrecen espacios históricos para eventos y celebraciones singulares.",
    zonasEventos: ["Parador de Tortosa", "Recinte Firal de Tortosa", "Auditori Felip Pedrell"],
  },
  {
    slug: "cambrils",
    nombre: "Cambrils",
    provincia: "tarragona",
    poblacion: 33577,
    comarca: "baix-camp",
    descripcion:
      "Cambrils es la capital gastronómica de la Costa Daurada, con restaurantes estrella Michelin y un puerto pesquero emblemático. Los eventos gastronómicos y de turismo premium son su seña de identidad.",
    zonasEventos: ["Port de Cambrils", "Hotels del passeig marítim", "Parc del Pescador"],
  },
  {
    slug: "salou",
    nombre: "Salou",
    provincia: "tarragona",
    poblacion: 26193,
    comarca: "tarragones",
    descripcion:
      "Salou es la capital de la Costa Daurada, junto a PortAventura World. Su capacidad hotelera y el PortAventura Convention Centre la convierten en destino para convenciones y eventos de gran formato.",
    zonasEventos: ["PortAventura Convention Centre", "Hotels de Salou", "Passeig Jaume I"],
  },
];

export const tiposUso: TipoUso[] = [
  {
    slug: "eventos",
    nombre: "Eventos",
    keywords: ["eventos corporativos", "eventos empresariales"],
  },
  {
    slug: "ferias",
    nombre: "Ferias",
    keywords: ["ferias comerciales", "exposiciones"],
  },
  {
    slug: "congresos",
    nombre: "Congresos",
    keywords: ["congresos", "convenciones"],
  },
  {
    slug: "stands",
    nombre: "Stands",
    keywords: ["stands feriales", "montaje stands"],
  },
  {
    slug: "bodas",
    nombre: "Bodas",
    keywords: ["bodas", "celebraciones", "eventos sociales"],
  },
];

// Helper functions
export function getProvinciaBySlug(slug: string): Provincia | undefined {
  return provincias.find((p) => p.slug === slug);
}

export function getMunicipioBySlug(slug: string): Municipio | undefined {
  return topMunicipios.find((m) => m.slug === slug);
}

export function getTipoUsoBySlug(slug: string): TipoUso | undefined {
  return tiposUso.find((t) => t.slug === slug);
}

export function getAllComarcas(): Comarca[] {
  return provincias.flatMap((p) => p.comarcas);
}

export function getComarcaBySlug(slug: string): { comarca: Comarca; provincia: Provincia } | undefined {
  for (const provincia of provincias) {
    const comarca = provincia.comarcas.find((c) => c.slug === slug);
    if (comarca) {
      return { comarca, provincia };
    }
  }
  return undefined;
}

export function getProvinciaForMunicipio(municipioSlug: string): Provincia | undefined {
  const municipio = getMunicipioBySlug(municipioSlug);
  if (!municipio) return undefined;
  return getProvinciaBySlug(municipio.provincia);
}

export function getMunicipiosByComarca(comarcaSlug: string): Municipio[] {
  return topMunicipios.filter((m) => m.comarca === comarcaSlug);
}

export function getComarcaForMunicipio(municipioSlug: string): { comarca: Comarca; provincia: Provincia } | undefined {
  const municipio = getMunicipioBySlug(municipioSlug);
  if (!municipio) return undefined;
  return getComarcaBySlug(municipio.comarca);
}

export function getNearbyMunicipios(municipioSlug: string, limit: number = 5): Municipio[] {
  const municipio = getMunicipioBySlug(municipioSlug);
  if (!municipio) return [];

  // First: same comarca (excluding self)
  const sameComarca = topMunicipios.filter(
    (m) => m.comarca === municipio.comarca && m.slug !== municipioSlug
  );

  // Then: same province, different comarca
  const sameProvincia = topMunicipios.filter(
    (m) =>
      m.provincia === municipio.provincia &&
      m.comarca !== municipio.comarca &&
      m.slug !== municipioSlug
  );

  return [...sameComarca, ...sameProvincia].slice(0, limit);
}

export function findMunicipioPageByName(nombre: string): Municipio | undefined {
  const normalized = nombre.toLowerCase();
  return topMunicipios.find((m) => m.nombre.toLowerCase() === normalized);
}
