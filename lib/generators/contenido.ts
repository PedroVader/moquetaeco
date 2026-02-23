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

  return {
    title: `Moqueta Ecológica ${municipio.nombre} | Eventos y Ferias | Disstands`,

    metaDescription: `Moqueta ecológica en ${municipio.nombre}, ${provincia.nombre}. 100% reciclable, sin látex. Desde 2,10€/m². Instalación profesional. ☎ 934 850 085`,

    h1: `Moqueta Ecológica en ${municipio.nombre}`,

    heroText: `Suministro e instalación de moqueta ecológica Rewind en ${municipio.nombre}${comarcaTexto}. La solución sostenible para tus eventos, ferias y stands.`,

    intro: [
      `¿Buscas **moqueta ecológica en ${municipio.nombre}**? ${municipio.descripcion}`,

      `${poblacionTexto}${zonasTexto} Disstands suministra moqueta ecológica Rewind con entrega directa desde Barcelona y servicio de instalación profesional.`,

      `Nuestra moqueta Rewind es 100% reciclable, sin látex, y cumple con la certificación ignífuga Bfl-s1 exigida en todos los recintos feriales. Disponible en 30 colores para adaptarse a cualquier identidad corporativa.`,
    ],

    beneficiosLocales: [
      `Entrega rápida en ${municipio.nombre}`,
      `Instalación profesional disponible`,
      `30 colores en stock permanente`,
      `Desde 2,10€/m²`,
    ],

    ctaText: `Solicita presupuesto para tu evento en ${municipio.nombre}`,
  };
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
