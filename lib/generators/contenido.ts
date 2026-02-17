import type { Provincia, TipoUso, Municipio } from "@/lib/data/ubicaciones";

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
  provincia: Provincia
): PageContent {
  return {
    title: `Moqueta Ecológica ${municipio.nombre} | Eventos y Ferias | Disstands`,

    metaDescription: `Moqueta ecológica en ${municipio.nombre}, ${provincia.nombre}. 100% reciclable, sin látex. Desde 2,10€/m². Instalación profesional. ☎ 934 850 085`,

    h1: `Moqueta Ecológica en ${municipio.nombre}`,

    heroText: `Suministro e instalación de moqueta ecológica Rewind en ${municipio.nombre}. La solución sostenible para tus eventos, ferias y stands.`,

    intro: [
      `¿Buscas **moqueta ecológica en ${municipio.nombre}**? Disstands te ofrece la moqueta ferial más sostenible del mercado, con entrega directa desde Barcelona y servicio de instalación profesional.`,

      `Nuestra moqueta Rewind es 100% reciclable, sin látex, y cumple con la certificación ignífuga Bfl-s1 exigida en todos los recintos feriales. Disponible en 30 colores para adaptarse a cualquier identidad corporativa.`,
    ],

    beneficiosLocales: [
      `Entrega rápida en ${municipio.nombre}`,
      `Instalación disponible`,
      `30 colores en stock`,
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
  comarcaNombre: string,
  capital: string,
  provincia: Provincia
): PageContent {
  return {
    title: `Moqueta Ecológica ${comarcaNombre} | ${provincia.nombre} | Disstands`,

    metaDescription: `Moqueta ecológica en ${comarcaNombre} (${provincia.nombre}). Entrega en ${capital} y comarca. 100% reciclable, sin látex. Desde 2,10€/m². ☎ 934 850 085`,

    h1: `Moqueta Ecológica en ${comarcaNombre}`,

    heroText: `Distribuidor de moqueta ecológica Rewind en la comarca de ${comarcaNombre}. Entrega rápida en ${capital} y todos los municipios. Servicio de instalación profesional.`,

    intro: [
      `Disstands suministra **moqueta ecológica** en toda la comarca de ${comarcaNombre}, con entrega en ${capital} y municipios cercanos. Más de 25 años de experiencia nos avalan.`,

      `Nuestra moqueta Rewind es 100% reciclable, sin látex, y cuenta con certificación ignífuga Bfl-s1. Disponible en 30 colores y dos espesores diferentes.`,
    ],

    beneficiosLocales: [
      `Servicio en ${comarcaNombre}`,
      `Cobertura en ${capital} y alrededores`,
      `Instalación profesional disponible`,
      `Stock permanente`,
    ],

    ctaText: `Presupuesto para ${comarcaNombre}`,
  };
}
