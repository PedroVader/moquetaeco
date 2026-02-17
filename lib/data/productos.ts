export interface Producto {
  nombre: string;
  marca: string;
  slug: string;
  urlProducto: string;
  precio: {
    min: number;
    max: number;
    moneda: string;
    unidad: string;
    ivaIncluido: boolean;
  };
  especificaciones: {
    composicion: string;
    latex: boolean;
    reciclable: string;
    estructura?: string;
    clasificacionFuego: string;
    descripcionTecnica?: string;
    pesoTotal: string;
    espesor: string;
    aspecto?: string;
    solidezLuz?: string;
    proteccionAcustica?: string;
    comportamientoAntiestatico?: string;
    filmProtector?: boolean;
  };
  formato: {
    tipo: string;
    largo: string;
    ancho: string;
    anchoAlternativo?: string;
    pesoRollo?: string;
    diametroRollo?: string;
  };
  colores: number;
  coloresDisponibles: { ref: string; nombre: string }[] | string[];
  sostenibilidad?: {
    sinAgua: boolean;
    reduccionEnergia: string;
    reduccionCO2: string;
    reduccionGas: string;
    reduccionLatex: string;
    cicloVidaInfinito: boolean;
    economiaCircular: boolean;
  };
  certificaciones: string[];
  aplicaciones: string[];
  ventajas: string[];
  diferenciador?: string;
}

export const moquetaFerialEco: Producto = {
  nombre: "Moqueta Ferial Ecológica",
  marca: "Rewind Flat",
  slug: "moqueta-ferial-ecologica",
  urlProducto: "https://www.disstands.com/producto/moqueta-ferial-ecologica/",

  precio: {
    min: 2.1,
    max: 2.65,
    moneda: "EUR",
    unidad: "m²",
    ivaIncluido: false,
  },

  especificaciones: {
    composicion: "100% fibra de polipropileno",
    latex: false,
    reciclable: "100%",
    estructura: "Monomaterial",
    clasificacionFuego: "Bfl-s1",
    descripcionTecnica: "Fieltro punzonado de fibra sintética SIN LÁTEX",
    pesoTotal: "230 g/m²",
    espesor: "2.00 mm",
    aspecto: "Plano",
    solidezLuz: "5/6 aprox.",
    proteccionAcustica: "20 Db aprox.",
    comportamientoAntiestatico: "Bajo",
    filmProtector: true,
  },

  formato: {
    tipo: "Rollo",
    largo: "50 m",
    ancho: "2.00 m",
    anchoAlternativo: "4.00 m (bajo pedido)",
    pesoRollo: "23 kg aprox.",
    diametroRollo: "40 cm",
  },

  colores: 30,
  coloresDisponibles: [
    { ref: "0110", nombre: "Blanco" },
    { ref: "0200", nombre: "Beige" },
    { ref: "0219", nombre: "Sáhara" },
    { ref: "0400", nombre: "Amarillo" },
    { ref: "0450", nombre: "Naranja" },
    { ref: "0503", nombre: "Violeta" },
    { ref: "0510", nombre: "Fucsia" },
    { ref: "0524", nombre: "Pruna" },
    { ref: "0624", nombre: "Verde Jaspe" },
    { ref: "0625", nombre: "Verde Césped" },
    { ref: "0637", nombre: "Verde Oscuro" },
    { ref: "0675", nombre: "Lima" },
    { ref: "0707", nombre: "Rojo Fuego" },
    { ref: "0713", nombre: "Rojo" },
    { ref: "0715", nombre: "Rojo Jaspe" },
    { ref: "0740", nombre: "Burdeos" },
    { ref: "0809", nombre: "Azulón" },
    { ref: "0812", nombre: "Azul Royal" },
    { ref: "0822", nombre: "Azul Turquesa" },
    { ref: "0840", nombre: "Azul Ducados" },
    { ref: "0842", nombre: "Azul Marino" },
    { ref: "0851", nombre: "Azul Añil" },
    { ref: "0913", nombre: "Negro Estándar" },
    { ref: "0923", nombre: "Gris Antracita" },
    { ref: "0936", nombre: "Taupe" },
    { ref: "0939", nombre: "Gris Perla" },
    { ref: "0947", nombre: "Gris Medio" },
    { ref: "0949", nombre: "Gris Jaspe" },
    { ref: "0952", nombre: "Gris Jaspe Claro" },
    { ref: "0960", nombre: "Gris Marengo" },
  ],

  sostenibilidad: {
    sinAgua: true,
    reduccionEnergia: "80%",
    reduccionCO2: "35%",
    reduccionGas: "83%",
    reduccionLatex: "100%",
    cicloVidaInfinito: true,
    economiaCircular: true,
  },

  certificaciones: ["Bfl-s1", "GUT", "100% Reciclable"],

  aplicaciones: [
    "Stands feriales",
    "Eventos corporativos",
    "Congresos y convenciones",
    "Bodas y eventos sociales",
    "Instalaciones temporales",
    "Exposiciones y salones",
    "Ferias comerciales",
  ],

  ventajas: [
    "Única en su clase a nivel mundial",
    "100% reciclable al final de vida",
    "Sin látex - hipoalergénica",
    "Instalación rápida y limpia",
    "Cierra el ciclo de economía circular",
    "Vida útil casi infinita del material",
    "Producción sin uso de agua",
    "Reducción drástica de emisiones CO₂",
  ],
};

export const moquetaDilourEco: Producto = {
  nombre: "Dilour Ecológica",
  marca: "Rewind Dilour",
  slug: "moqueta-ecologica-eventos",
  urlProducto: "https://www.disstands.com/producto/moqueta-ecologica-eventos/",

  precio: {
    min: 4.05,
    max: 4.65,
    moneda: "EUR",
    unidad: "m²",
    ivaIncluido: false,
  },

  especificaciones: {
    composicion: "Monomaterial reciclable (sin látex)",
    latex: false,
    reciclable: "100%",
    pesoTotal: "650 g/m²",
    espesor: "4 mm",
    clasificacionFuego: "Bfl-s1",
  },

  formato: {
    tipo: "Rollo",
    largo: "40 m",
    ancho: "2.00 m",
    anchoAlternativo: "4.00 m (bajo pedido)",
  },

  colores: 29,
  coloresDisponibles: [
    { ref: "0110", nombre: "Blanco" },
    { ref: "0204", nombre: "Beige Claro" },
    { ref: "0205", nombre: "Beige" },
    { ref: "0232", nombre: "Arena" },
    { ref: "0331", nombre: "Marrón" },
    { ref: "0400", nombre: "Amarillo" },
    { ref: "0450", nombre: "Naranja" },
    { ref: "0503", nombre: "Violeta" },
    { ref: "0510", nombre: "Fucsia" },
    { ref: "0637", nombre: "Verde Oscuro" },
    { ref: "0644", nombre: "Verde Botella" },
    { ref: "0675", nombre: "Lima" },
    { ref: "0713", nombre: "Rojo" },
    { ref: "0740", nombre: "Burdeos" },
    { ref: "0745", nombre: "Granate" },
    { ref: "0818", nombre: "Azul Royal" },
    { ref: "0830", nombre: "Azul Medio" },
    { ref: "0835", nombre: "Azul Océano" },
    { ref: "0836", nombre: "Azul Petróleo" },
    { ref: "0840", nombre: "Azul Ducados" },
    { ref: "0844", nombre: "Azul Marino" },
    { ref: "0913", nombre: "Negro" },
    { ref: "0939", nombre: "Gris Perla" },
    { ref: "0960", nombre: "Gris Marengo" },
    { ref: "0976", nombre: "Gris Oscuro" },
    { ref: "0977", nombre: "Gris Medio" },
    { ref: "0978", nombre: "Gris Claro" },
    { ref: "0979", nombre: "Gris Plata" },
    { ref: "0980", nombre: "Gris Niebla" },
  ],

  diferenciador:
    "Mayor espesor (4mm vs 2mm) = mayor confort en la pisada y aspecto más premium",

  certificaciones: ["Bfl-s1", "100% Reciclable", "Sin látex"],

  aplicaciones: [
    "Ferias internacionales premium",
    "Stands de alto standing",
    "Congresos corporativos",
    "Áreas VIP en eventos",
    "Showrooms temporales",
    "Eventos de networking",
    "Exposiciones de arte y cultura",
  ],

  ventajas: [
    "Mayor espesor para confort superior",
    "Aspecto premium y profesional",
    "100% reciclable sin látex",
    "Ideal para eventos de alto standing",
    "Certificación ignífuga Bfl-s1",
  ],
};

export const productos: Producto[] = [moquetaFerialEco, moquetaDilourEco];

export function getProductoBySlug(slug: string): Producto | undefined {
  return productos.find((p) => p.slug === slug);
}
