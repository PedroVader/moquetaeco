import type { Provincia, TipoUso, Municipio, Comarca } from "@/lib/data/ubicaciones";

export interface PageContent {
  title: string;
  metaDescription: string;
  h1: string;
  heroText: string;
  intro: string[];
  beneficiosLocales: string[];
  ctaText: string;
}

export function generarContenidoProvincia(provincia: Provincia): PageContent {
  const ciudades = provincia.municipiosPrincipales.slice(0, 5).join(", ");
  const recintos = provincia.recintosFeriales?.[0] || "recintos feriales";

  return {
    title: `Moqueta Ecológica ${provincia.nombre} | Ferias y Eventos | Desde 2,10€/m²`,

    metaDescription: `Moqueta ecológica 100% reciclable en ${provincia.nombre}. Sin látex, certificada Bfl-s1. Instalación en ${ciudades}. Rewind® marca propia Disstands. ☎ 934 850 085`,

    h1: `Moqueta Ecológica en ${provincia.nombre}`,

    heroText: `Rewind® es nuestra marca propia de moqueta ecológica en ${provincia.nombre}. 100% reciclable, sin látex, certificación Bfl-s1. Montaje profesional solo para empresas del sector.`,

    intro: [
      `Disstands es fabricante y propietario de la marca **Rewind®**, moqueta ecológica de referencia en ${provincia.nombre}. Con más de 25 años de experiencia, suministramos moqueta ferial sostenible en ${recintos} y eventos en toda la provincia.`,

      `Nuestra moqueta Rewind es **única en el mundo**: fabricada 100% sin látex, completamente reciclable, y producida con una reducción del 80% en consumo energético. Es la elección de ferias internacionales como el Mobile World Congress.`,

      `Servimos ${ciudades} y todas las comarcas de ${provincia.nombre} con entrega rápida desde nuestro almacén en Barcelona. Servicio de montaje disponible solo para profesionales del sector.`,
    ],

    beneficiosLocales: [
      `Servicio en toda ${provincia.nombre}`,
      `Instalación profesional en toda la provincia`,
      `Stock permanente para proyectos urgentes`,
      `Recogida y gestión de residuos post-evento`,
      `Asesoramiento técnico gratuito`,
    ],

    ctaText: `¿Necesitas moqueta ecológica en ${provincia.nombre}? Solicita presupuesto sin compromiso.`,
  };
}

export function generarContenidoMunicipio(
  municipio: Municipio,
  provincia: Provincia,
  comarcaNombre?: string
): PageContent {
  const comarcaTexto = comarcaNombre
    ? `, en la comarca de ${comarcaNombre}`
    : "";
  const poblacionTexto =
    municipio.poblacion > 0
      ? ` Con una población de más de ${(Math.floor(municipio.poblacion / 1000) * 1000).toLocaleString("es-ES")} habitantes, ${municipio.nombre} es un centro de actividad empresarial y cultural en ${provincia.nombre}.`
      : "";
  const zonasTexto =
    municipio.zonasEventos.length > 0
      ? ` Entre sus principales espacios para eventos destacan **${municipio.zonasEventos.slice(0, 2).join("** y **")}**.`
      : "";

  // Third paragraph varies by municipality characteristics
  const tercerParrafo = generarTercerParrafoMunicipio(municipio, provincia, comarcaNombre);

  // Benefits vary by municipality size and type
  const beneficios = generarBeneficiosMunicipio(municipio, provincia);

  return {
    title: `Moqueta Ecológica ${municipio.nombre} | Eventos y Ferias | Disstands`,

    metaDescription: `Moqueta ecológica en ${municipio.nombre}, ${provincia.nombre}. 100% reciclable, sin látex. Desde 2,10€/m². Instalación profesional. ☎ 934 850 085`,

    h1: `Moqueta Ecológica en ${municipio.nombre}`,

    heroText: `Suministro e instalación de moqueta ecológica Rewind en ${municipio.nombre}${comarcaTexto}. La solución sostenible para tus eventos, ferias y stands.`,

    intro: [
      `¿Buscas **moqueta ecológica en ${municipio.nombre}**? ${municipio.descripcion}`,

      `${poblacionTexto}${zonasTexto} Disstands suministra moqueta ecológica Rewind con entrega directa desde Barcelona y servicio de instalación profesional.`,

      tercerParrafo,
    ],

    beneficiosLocales: beneficios,

    ctaText: `Solicita presupuesto para tu evento en ${municipio.nombre}`,
  };
}

function generarTercerParrafoMunicipio(
  municipio: Municipio,
  provincia: Provincia,
  comarcaNombre?: string
): string {
  const pop = municipio.poblacion;
  const zonas = municipio.zonasEventos;

  // Large cities (>100k) - emphasize volume + corporate events
  if (pop > 100000) {
    return `Como uno de los principales núcleos urbanos de ${provincia.nombre}, ${municipio.nombre} genera una alta demanda de moqueta ferial para **eventos corporativos, ferias sectoriales y congresos**. Nuestra moqueta Rewind, certificada Bfl-s1 y disponible en 30 colores, se adapta a proyectos de cualquier escala.`;
  }

  // Medium cities (30k-100k) - emphasize versatility + growing market
  if (pop > 30000) {
    const zonaRef = zonas.length > 0
      ? ` Espacios como ${zonas[0]} requieren soluciones que cumplan la normativa ignífuga sin renunciar a la estética.`
      : "";
    return `${municipio.nombre} cuenta con un tejido empresarial activo que impulsa ferias, congresos y eventos durante todo el año.${zonaRef} La moqueta Rewind se fabrica **sin látex**, es 100% reciclable y está disponible en dos acabados: Flat (ferial) y Dilour (premium).`;
  }

  // Coastal/tourist towns - emphasize seasonal events + weddings
  const isCoastal = ["sitges", "blanes", "lloret", "cambrils", "salou", "palamos", "sant-feliu-guixols", "palafrugell", "roses", "vila-seca"].includes(municipio.slug);
  if (isCoastal) {
    return `Como municipio con fuerte actividad turística, ${municipio.nombre} acoge **bodas, eventos al aire libre y ferias estacionales** que necesitan moqueta de calidad. Rewind cumple la certificación ignífuga Bfl-s1 y su fabricación 100% reciclable la convierte en la opción más sostenible para eventos en entornos naturales.`;
  }

  // Mountain/inland towns - emphasize local fairs + cultural events
  const comarcaRef = comarcaNombre ? ` en la comarca de ${comarcaNombre}` : "";
  if (pop > 0 && pop <= 30000) {
    return `${municipio.nombre}${comarcaRef} celebra **ferias locales, mercados y eventos culturales** que requieren pavimento profesional. La moqueta Rewind ofrece certificación Bfl-s1, 30 colores disponibles y un precio desde 2,10€/m² que se adapta a presupuestos de todo tipo.`;
  }

  // Fallback
  return `Disstands suministra moqueta ecológica Rewind en ${municipio.nombre} con entrega desde Barcelona. Certificada Bfl-s1, sin látex, 100% reciclable y disponible en 30 colores para adaptarse a cualquier evento o espacio.`;
}

function generarBeneficiosMunicipio(
  municipio: Municipio,
  provincia: Provincia
): string[] {
  const pop = municipio.poblacion;
  const isCoastal = ["sitges", "blanes", "lloret", "cambrils", "salou", "palamos", "sant-feliu-guixols", "palafrugell", "roses", "vila-seca"].includes(municipio.slug);

  if (pop > 100000) {
    return [
      `Entrega en 24-48h en ${municipio.nombre}`,
      `Montaje profesional para grandes superficies`,
      `Desde 2,10€/m² en pedidos a medida`,
      `Recogida y reciclaje post-evento incluido`,
    ];
  }

  if (isCoastal) {
    return [
      `Entrega directa en ${municipio.nombre}`,
      `Ideal para bodas y eventos al aire libre`,
      `Certificación Bfl-s1 para espacios públicos`,
      `30 colores adaptados a tu evento`,
    ];
  }

  if (pop > 30000) {
    return [
      `Servicio rápido en ${municipio.nombre}`,
      `Instalación profesional disponible`,
      `30 colores en stock permanente`,
      `Asesoramiento técnico gratuito`,
    ];
  }

  return [
    `Envío a ${municipio.nombre} desde Barcelona`,
    `Sin pedido mínimo para profesionales`,
    `Certificación ignífuga Bfl-s1`,
    `Desde 2,10€/m² — precio directo de fábrica`,
  ];
}

const usoTextos: Record<
  string,
  { titulo: string; descripcion: string }
> = {
  eventos: {
    titulo: "Eventos Corporativos",
    descripcion:
      "eventos empresariales, presentaciones de producto y actos corporativos",
  },
  ferias: {
    titulo: "Ferias Comerciales",
    descripcion: "ferias comerciales, exposiciones y salones profesionales",
  },
  congresos: {
    titulo: "Congresos y Convenciones",
    descripcion: "congresos, convenciones y reuniones profesionales",
  },
  stands: {
    titulo: "Stands Feriales",
    descripcion:
      "montaje de stands, espacios expositivos y showrooms temporales",
  },
  bodas: {
    titulo: "Bodas y Celebraciones",
    descripcion: "bodas, celebraciones y eventos sociales",
  },
};

export function generarContenidoUso(
  uso: TipoUso,
  provincia: Provincia
): PageContent {
  const info = usoTextos[uso.slug] || {
    titulo: uso.nombre,
    descripcion: uso.nombre.toLowerCase(),
  };

  return {
    title: `Moqueta Ecológica ${info.titulo} ${provincia.nombre} | Disstands`,

    metaDescription: `Moqueta ecológica para ${info.descripcion} en ${provincia.nombre}. 100% reciclable, sin látex, certificada Bfl-s1. Instalación profesional. ☎ 934 850 085`,

    h1: `Moqueta Ecológica para ${info.titulo} en ${provincia.nombre}`,

    heroText: `La moqueta sostenible perfecta para ${info.descripcion}. 100% reciclable, sin látex, disponible en 30 colores. Instalación profesional en toda la provincia de ${provincia.nombre}.`,

    intro: [
      `Para ${info.descripcion} en ${provincia.nombre}, la **moqueta ecológica Rewind** es la elección de los profesionales más exigentes. Su composición 100% reciclable y sin látex la convierte en la opción más sostenible del mercado.`,

      `Cumple con la certificación ignífuga Bfl-s1 obligatoria en todos los recintos y espacios públicos. Disponible en formato rollo de 2x50m para instalaciones rápidas.`,
    ],

    beneficiosLocales: [
      `Ideal para ${info.descripcion}`,
      `Certificación Bfl-s1 incluida`,
      `Instalación express disponible`,
      `Recogida post-evento`,
    ],

    ctaText: `Presupuesto para ${uso.nombre.toLowerCase()} en ${provincia.nombre}`,
  };
}

export function generarContenidoComarca(
  comarca: Comarca,
  provincia: Provincia
): PageContent {
  const distanciaTexto =
    comarca.distanciaBarcelona === 0
      ? "en el área metropolitana de Barcelona"
      : `a ${comarca.distanciaBarcelona} km de Barcelona`;

  const eventosTexto =
    comarca.eventosLocales.length > 0
      ? ` La comarca acoge eventos como **${comarca.eventosLocales.slice(0, 2).join("** y **")}**.`
      : "";

  const espaciosTexto =
    comarca.espaciosEventos.length > 0
      ? ` Espacios como ${comarca.espaciosEventos.slice(0, 2).join(" y ")} son referentes para ferias y eventos.`
      : "";

  const municipiosTexto =
    comarca.municipiosPrincipales && comarca.municipiosPrincipales.length > 0
      ? ` Servimos ${comarca.municipiosPrincipales.slice(0, 4).join(", ")} y todos los municipios de la comarca.`
      : ` Servimos ${comarca.capital} y todos los municipios de la comarca.`;

  return {
    title: `Moqueta Ecológica ${comarca.nombre} | ${provincia.nombre} | Disstands`,

    metaDescription: `Moqueta ecológica en ${comarca.nombre} (${provincia.nombre}). Entrega en ${comarca.capital} y comarca. 100% reciclable, sin látex. Desde 2,10€/m². ☎ 934 850 085`,

    h1: `Moqueta Ecológica en ${comarca.nombre}`,

    heroText: `Distribuidor de moqueta ecológica Rewind en la comarca de ${comarca.nombre}, ${distanciaTexto}. Entrega rápida en ${comarca.capital} y todos los municipios.`,

    intro: [
      `${comarca.descripcion}${eventosTexto}`,

      `Disstands suministra **moqueta ecológica Rewind** en toda la comarca de ${comarca.nombre} con más de 25 años de experiencia.${espaciosTexto}`,

      `Nuestra moqueta es 100% reciclable, sin látex, y cuenta con certificación ignífuga Bfl-s1. Disponible en 30 colores y dos espesores.${municipiosTexto}`,
    ],

    beneficiosLocales: [
      `Servicio en ${comarca.nombre}`,
      `Cobertura en ${comarca.capital} y alrededores`,
      `${comarca.poblacion.toLocaleString("es-ES")} habitantes en la comarca`,
      `Instalación profesional disponible`,
    ],

    ctaText: `Presupuesto para ${comarca.nombre}`,
  };
}
