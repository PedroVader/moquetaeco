export interface Comarca {
  slug: string;
  nombre: string;
  capital: string;
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
      { slug: "barcelones", nombre: "Barcelonès", capital: "Barcelona" },
      {
        slug: "valles-occidental",
        nombre: "Vallès Occidental",
        capital: "Sabadell",
      },
      {
        slug: "valles-oriental",
        nombre: "Vallès Oriental",
        capital: "Granollers",
      },
      {
        slug: "baix-llobregat",
        nombre: "Baix Llobregat",
        capital: "Sant Feliu de Llobregat",
      },
      { slug: "maresme", nombre: "Maresme", capital: "Mataró" },
      { slug: "garraf", nombre: "Garraf", capital: "Vilanova i la Geltrú" },
      {
        slug: "alt-penedes",
        nombre: "Alt Penedès",
        capital: "Vilafranca del Penedès",
      },
      { slug: "anoia", nombre: "Anoia", capital: "Igualada" },
      { slug: "bages", nombre: "Bages", capital: "Manresa" },
      { slug: "osona", nombre: "Osona", capital: "Vic" },
      { slug: "bergueda", nombre: "Berguedà", capital: "Berga" },
      { slug: "moianes", nombre: "Moianès", capital: "Moià" },
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
      { slug: "girones", nombre: "Gironès", capital: "Girona" },
      { slug: "alt-emporda", nombre: "Alt Empordà", capital: "Figueres" },
      {
        slug: "baix-emporda",
        nombre: "Baix Empordà",
        capital: "La Bisbal d'Empordà",
      },
      {
        slug: "selva",
        nombre: "La Selva",
        capital: "Santa Coloma de Farners",
      },
      { slug: "garrotxa", nombre: "La Garrotxa", capital: "Olot" },
      { slug: "ripolles", nombre: "Ripollès", capital: "Ripoll" },
      { slug: "pla-estany", nombre: "Pla de l'Estany", capital: "Banyoles" },
      { slug: "cerdanya", nombre: "Cerdanya", capital: "Puigcerdà" },
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
      { slug: "tarragones", nombre: "Tarragonès", capital: "Tarragona" },
      { slug: "baix-camp", nombre: "Baix Camp", capital: "Reus" },
      { slug: "alt-camp", nombre: "Alt Camp", capital: "Valls" },
      { slug: "baix-penedes", nombre: "Baix Penedès", capital: "El Vendrell" },
      { slug: "baix-ebre", nombre: "Baix Ebre", capital: "Tortosa" },
      { slug: "montsia", nombre: "Montsià", capital: "Amposta" },
      { slug: "priorat", nombre: "Priorat", capital: "Falset" },
      { slug: "terra-alta", nombre: "Terra Alta", capital: "Gandesa" },
      { slug: "ribera-ebre", nombre: "Ribera d'Ebre", capital: "Móra d'Ebre" },
      { slug: "conca-barbera", nombre: "Conca de Barberà", capital: "Montblanc" },
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
      { slug: "segria", nombre: "Segrià", capital: "Lleida" },
      { slug: "noguera", nombre: "La Noguera", capital: "Balaguer" },
      { slug: "urgell", nombre: "Urgell", capital: "Tàrrega" },
      { slug: "pla-urgell", nombre: "Pla d'Urgell", capital: "Mollerussa" },
      {
        slug: "garrigues",
        nombre: "Les Garrigues",
        capital: "Les Borges Blanques",
      },
      { slug: "segarra", nombre: "La Segarra", capital: "Cervera" },
      {
        slug: "alt-urgell",
        nombre: "Alt Urgell",
        capital: "La Seu d'Urgell",
      },
      { slug: "solsones", nombre: "Solsonès", capital: "Solsona" },
      { slug: "pallars-jussa", nombre: "Pallars Jussà", capital: "Tremp" },
      { slug: "pallars-sobira", nombre: "Pallars Sobirà", capital: "Sort" },
      { slug: "val-aran", nombre: "Val d'Aran", capital: "Vielha" },
      {
        slug: "alta-ribagorca",
        nombre: "Alta Ribagorça",
        capital: "El Pont de Suert",
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
  { slug: "hospitalet", nombre: "L'Hospitalet de Llobregat", provincia: "barcelona" },
  { slug: "badalona", nombre: "Badalona", provincia: "barcelona" },
  { slug: "terrassa", nombre: "Terrassa", provincia: "barcelona" },
  { slug: "sabadell", nombre: "Sabadell", provincia: "barcelona" },
  { slug: "mataro", nombre: "Mataró", provincia: "barcelona" },
  { slug: "santa-coloma", nombre: "Santa Coloma de Gramenet", provincia: "barcelona" },
  { slug: "cornella", nombre: "Cornellà de Llobregat", provincia: "barcelona" },
  { slug: "sant-cugat", nombre: "Sant Cugat del Vallès", provincia: "barcelona" },
  { slug: "sant-boi", nombre: "Sant Boi de Llobregat", provincia: "barcelona" },
  { slug: "rubi", nombre: "Rubí", provincia: "barcelona" },
  { slug: "manresa", nombre: "Manresa", provincia: "barcelona" },
  { slug: "vilanova", nombre: "Vilanova i la Geltrú", provincia: "barcelona" },
  { slug: "granollers", nombre: "Granollers", provincia: "barcelona" },
  { slug: "viladecans", nombre: "Viladecans", provincia: "barcelona" },
  { slug: "el-prat", nombre: "El Prat de Llobregat", provincia: "barcelona" },
  { slug: "castelldefels", nombre: "Castelldefels", provincia: "barcelona" },
  { slug: "gava", nombre: "Gavà", provincia: "barcelona" },
  { slug: "cerdanyola", nombre: "Cerdanyola del Vallès", provincia: "barcelona" },
  { slug: "reus", nombre: "Reus", provincia: "tarragona" },
  { slug: "girona-ciudad", nombre: "Girona", provincia: "girona" },
  { slug: "lleida-ciudad", nombre: "Lleida", provincia: "lleida" },
  { slug: "tarragona-ciudad", nombre: "Tarragona", provincia: "tarragona" },
  { slug: "figueres", nombre: "Figueres", provincia: "girona" },
  { slug: "blanes", nombre: "Blanes", provincia: "girona" },
  { slug: "lloret", nombre: "Lloret de Mar", provincia: "girona" },
  { slug: "vic", nombre: "Vic", provincia: "barcelona" },
  { slug: "igualada", nombre: "Igualada", provincia: "barcelona" },
  { slug: "tortosa", nombre: "Tortosa", provincia: "tarragona" },
  { slug: "cambrils", nombre: "Cambrils", provincia: "tarragona" },
  { slug: "salou", nombre: "Salou", provincia: "tarragona" },
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
