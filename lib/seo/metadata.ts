import type { Metadata } from "next";
import type { Provincia } from "@/lib/data/ubicaciones";

const BASE_URL = "https://www.disstands.com";
const OG_IMAGE = {
  url: `${BASE_URL}/og-image.jpg`,
  width: 1200,
  height: 630,
  alt: "Moqueta Ecológica Rewind - Disstands",
  type: "image/jpeg",
};

export function generarMetadataPrincipal(): Metadata {
  return {
    title: "Moqueta Ecológica Cataluña | 100% Reciclable | Desde 2,10€/m²",
    description:
      "Moqueta ecológica 100% reciclable para ferias y eventos en Cataluña. Sin látex, certificada Bfl-s1. Rewind® marca propia Disstands. Instalación profesional. ☎ 934 850 085",
    keywords: [
      "moqueta ecológica",
      "moqueta reciclable",
      "moqueta ferial ecológica",
      "moqueta sin látex",
      "moqueta eventos Barcelona",
      "Rewind moqueta",
      "moqueta sostenible",
      "moqueta Bfl-s1",
    ],
    openGraph: {
      title: "Moqueta Ecológica Cataluña | Disstands",
      description:
        "Moqueta 100% reciclable, sin látex, certificada Bfl-s1. Desde 2,10€/m². La elección del Mobile World Congress.",
      url: BASE_URL,
      type: "website",
      locale: "es_ES",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: "Moqueta Ecológica Cataluña | Disstands",
      description:
        "Moqueta 100% reciclable para ferias y eventos. Desde 2,10€/m².",
      images: [OG_IMAGE.url],
    },
    alternates: {
      canonical: BASE_URL,
    },
  };
}

export function generarMetadataProvincia(provincia: Provincia): Metadata {
  const ciudades = provincia.municipiosPrincipales.slice(0, 3).join(", ");

  return {
    title: `Moqueta Ecológica ${provincia.nombre} | Ferias y Eventos | Desde 2,10€/m²`,
    description: `Moqueta ecológica 100% reciclable en ${provincia.nombre}. Sin látex, certificada Bfl-s1. Instalación en ${ciudades}. Rewind® marca propia Disstands. ☎ 934 850 085`,
    keywords: [
      `moqueta ecológica ${provincia.nombre.toLowerCase()}`,
      `moqueta reciclable ${provincia.nombre.toLowerCase()}`,
      `moqueta ferial ${provincia.nombre.toLowerCase()}`,
      `moqueta eventos ${provincia.nombre.toLowerCase()}`,
      "moqueta sin látex",
      "moqueta Bfl-s1",
    ],
    openGraph: {
      title: `Moqueta Ecológica ${provincia.nombre} | Disstands`,
      description: `Moqueta 100% reciclable en ${provincia.nombre}. Instalación profesional disponible.`,
      url: `${BASE_URL}/moqueta-ecologica-${provincia.slug}`,
      type: "website",
      locale: "es_ES",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: `Moqueta Ecológica ${provincia.nombre} | Disstands`,
      description: `Moqueta 100% reciclable en ${provincia.nombre}. Instalación profesional disponible.`,
      images: [OG_IMAGE.url],
    },
    alternates: {
      canonical: `${BASE_URL}/moqueta-ecologica-${provincia.slug}`,
    },
  };
}

export function generarMetadataMunicipio(
  municipioNombre: string,
  provinciaNombre: string,
  municipioSlug: string
): Metadata {
  return {
    title: `Moqueta Ecológica ${municipioNombre} | Eventos y Ferias | Disstands`,
    description: `Moqueta ecológica en ${municipioNombre}, ${provinciaNombre}. 100% reciclable, sin látex. Desde 2,10€/m². Instalación profesional. ☎ 934 850 085`,
    keywords: [
      `moqueta ecológica ${municipioNombre.toLowerCase()}`,
      `moqueta ${municipioNombre.toLowerCase()}`,
      `moqueta eventos ${municipioNombre.toLowerCase()}`,
    ],
    openGraph: {
      title: `Moqueta Ecológica ${municipioNombre} | Disstands`,
      description: `Moqueta 100% reciclable en ${municipioNombre}. Entrega rápida. Desde 2,10€/m².`,
      url: `${BASE_URL}/municipios/${municipioSlug}`,
      type: "website",
      locale: "es_ES",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: `Moqueta Ecológica ${municipioNombre} | Disstands`,
      description: `Moqueta 100% reciclable en ${municipioNombre}. Entrega rápida. Desde 2,10€/m².`,
      images: [OG_IMAGE.url],
    },
    alternates: {
      canonical: `${BASE_URL}/municipios/${municipioSlug}`,
    },
  };
}

export function generarMetadataUso(
  usoNombre: string,
  provinciaNombre: string,
  provinciaSlug: string,
  usoSlug: string
): Metadata {
  return {
    title: `Moqueta Ecológica para ${usoNombre} en ${provinciaNombre} | Disstands`,
    description: `Moqueta ecológica para ${usoNombre.toLowerCase()} en ${provinciaNombre}. 100% reciclable, sin látex, certificada Bfl-s1. Instalación profesional. ☎ 934 850 085`,
    keywords: [
      `moqueta ${usoNombre.toLowerCase()}`,
      `moqueta ecológica ${usoNombre.toLowerCase()}`,
      `moqueta ${usoNombre.toLowerCase()} ${provinciaNombre.toLowerCase()}`,
    ],
    openGraph: {
      title: `Moqueta para ${usoNombre} en ${provinciaNombre} | Disstands`,
      description: `Moqueta ecológica perfecta para ${usoNombre.toLowerCase()}. 100% reciclable.`,
      url: `${BASE_URL}/${provinciaSlug}/${usoSlug}`,
      type: "website",
      locale: "es_ES",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: `Moqueta para ${usoNombre} en ${provinciaNombre} | Disstands`,
      description: `Moqueta ecológica perfecta para ${usoNombre.toLowerCase()}. 100% reciclable.`,
      images: [OG_IMAGE.url],
    },
    alternates: {
      canonical: `${BASE_URL}/${provinciaSlug}/${usoSlug}`,
    },
  };
}

export function generarMetadataComarca(
  comarcaNombre: string,
  provinciaNombre: string,
  comarcaSlug: string
): Metadata {
  return {
    title: `Moqueta Ecológica ${comarcaNombre} | ${provinciaNombre} | Disstands`,
    description: `Moqueta ecológica en ${comarcaNombre} (${provinciaNombre}). 100% reciclable, sin látex. Desde 2,10€/m². ☎ 934 850 085`,
    openGraph: {
      title: `Moqueta Ecológica ${comarcaNombre} | Disstands`,
      description: `Moqueta 100% reciclable en la comarca de ${comarcaNombre}. Entrega rápida.`,
      url: `${BASE_URL}/comarcas/${comarcaSlug}`,
      type: "website",
      locale: "es_ES",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: `Moqueta Ecológica ${comarcaNombre} | Disstands`,
      description: `Moqueta 100% reciclable en la comarca de ${comarcaNombre}. Entrega rápida.`,
      images: [OG_IMAGE.url],
    },
    alternates: {
      canonical: `${BASE_URL}/comarcas/${comarcaSlug}`,
    },
  };
}
