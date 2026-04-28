import type { Metadata } from "next";
import type { Provincia } from "@/lib/data/ubicaciones";

const BASE_URL = "https://www.moquetaecologica.com";
const OG_IMAGE = {
  url: `${BASE_URL}/og-image.jpg`,
  width: 1200,
  height: 630,
  alt: "Moqueta Ferial Ecológica Rewind - Disstands",
  type: "image/jpeg",
};

export function generarMetadataPrincipal(): Metadata {
  return {
    title: "Moqueta Ferial y Ecológica Cataluña | Desde 2,20€/m² | Comprar Online",
    description:
      "Moqueta ferial ecológica 100% reciclable para ferias y eventos en Cataluña. Barata desde 2,20€/m². Comprar moqueta online. Sin látex, certificada Bfl-s1. Rewind® marca propia Disstands. ☎ 934 850 085",
    keywords: [
      "moqueta ferial",
      "moqueta barata",
      "comprar moqueta online",
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
      title: "Moqueta Ferial y Ecológica Cataluña | Disstands",
      description:
        "Moqueta ferial 100% reciclable, sin látex, certificada Bfl-s1. Barata desde 2,20€/m². La elección del Mobile World Congress.",
      url: BASE_URL,
      type: "website",
      locale: "es_ES",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: "Moqueta Ferial y Ecológica Cataluña | Disstands",
      description:
        "Moqueta ferial 100% reciclable para ferias y eventos. Barata desde 2,20€/m².",
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
    title: `Moqueta Ferial ${provincia.nombre} | Ecológica | Desde 2,20€/m²`,
    description: `Moqueta ferial ecológica en ${provincia.nombre}. Barata desde 2,20€/m², 100% reciclable, sin látex, certificada Bfl-s1. Comprar online. Instalación en ${ciudades}. Rewind® Disstands. ☎ 934 850 085`,
    keywords: [
      `moqueta ferial ${provincia.nombre.toLowerCase()}`,
      `moqueta barata ${provincia.nombre.toLowerCase()}`,
      `comprar moqueta online ${provincia.nombre.toLowerCase()}`,
      `moqueta ecológica ${provincia.nombre.toLowerCase()}`,
      `moqueta reciclable ${provincia.nombre.toLowerCase()}`,
      `moqueta eventos ${provincia.nombre.toLowerCase()}`,
      "moqueta sin látex",
      "moqueta Bfl-s1",
    ],
    openGraph: {
      title: `Moqueta Ferial ${provincia.nombre} | Disstands`,
      description: `Moqueta ferial ecológica en ${provincia.nombre}. Barata desde 2,20€/m². Instalación profesional disponible.`,
      url: `${BASE_URL}/moqueta-ferial-${provincia.slug}`,
      type: "website",
      locale: "es_ES",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: `Moqueta Ferial ${provincia.nombre} | Disstands`,
      description: `Moqueta ferial ecológica en ${provincia.nombre}. Barata desde 2,20€/m². Instalación profesional disponible.`,
      images: [OG_IMAGE.url],
    },
    alternates: {
      canonical: `${BASE_URL}/moqueta-ferial-${provincia.slug}`,
    },
  };
}

export function generarMetadataMunicipio(
  municipioNombre: string,
  provinciaNombre: string,
  municipioSlug: string
): Metadata {
  return {
    title: `Moqueta Ferial ${municipioNombre} | Desde 2,20€/m²`,
    description: `Moqueta ferial en ${municipioNombre}, ${provinciaNombre}. Ecológica y barata desde 2,20€/m². 100% reciclable, sin látex. Comprar online. Instalación profesional. ☎ 934 850 085`,
    keywords: [
      `moqueta ferial ${municipioNombre.toLowerCase()}`,
      `moqueta barata ${municipioNombre.toLowerCase()}`,
      `moqueta ${municipioNombre.toLowerCase()}`,
      `moqueta eventos ${municipioNombre.toLowerCase()}`,
    ],
    openGraph: {
      title: `Moqueta Ferial ${municipioNombre} | Disstands`,
      description: `Moqueta ferial ecológica en ${municipioNombre}. Barata desde 2,20€/m². Entrega rápida.`,
      url: `${BASE_URL}/municipios/${municipioSlug}`,
      type: "website",
      locale: "es_ES",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: `Moqueta Ferial ${municipioNombre} | Disstands`,
      description: `Moqueta ferial ecológica en ${municipioNombre}. Barata desde 2,20€/m². Entrega rápida.`,
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
    title: `Moqueta ${usoNombre} ${provinciaNombre} | Ecológica y Barata | Disstands`,
    description: `Moqueta ferial para ${usoNombre.toLowerCase()} en ${provinciaNombre}. Ecológica y barata desde 2,20€/m². 100% reciclable, sin látex, certificada Bfl-s1. Comprar online. ☎ 934 850 085`,
    keywords: [
      `moqueta ${usoNombre.toLowerCase()}`,
      `moqueta ferial ${usoNombre.toLowerCase()}`,
      `moqueta ${usoNombre.toLowerCase()} ${provinciaNombre.toLowerCase()}`,
      `moqueta barata ${usoNombre.toLowerCase()}`,
    ],
    openGraph: {
      title: `Moqueta para ${usoNombre} en ${provinciaNombre} | Disstands`,
      description: `Moqueta ferial ecológica para ${usoNombre.toLowerCase()}. Barata desde 2,20€/m². 100% reciclable.`,
      url: `${BASE_URL}/${provinciaSlug}/${usoSlug}`,
      type: "website",
      locale: "es_ES",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: `Moqueta para ${usoNombre} en ${provinciaNombre} | Disstands`,
      description: `Moqueta ferial ecológica para ${usoNombre.toLowerCase()}. Barata desde 2,20€/m². 100% reciclable.`,
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
    title: `Moqueta Ferial ${comarcaNombre}, ${provinciaNombre}`,
    description: `Moqueta ferial en ${comarcaNombre} (${provinciaNombre}). Ecológica y barata desde 2,20€/m². 100% reciclable, sin látex. Comprar online. ☎ 934 850 085`,
    openGraph: {
      title: `Moqueta Ferial ${comarcaNombre} | Disstands`,
      description: `Moqueta ferial ecológica en la comarca de ${comarcaNombre}. Barata desde 2,20€/m². Entrega rápida.`,
      url: `${BASE_URL}/comarcas/${comarcaSlug}`,
      type: "website",
      locale: "es_ES",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: `Moqueta Ferial ${comarcaNombre} | Disstands`,
      description: `Moqueta ferial ecológica en la comarca de ${comarcaNombre}. Barata desde 2,20€/m². Entrega rápida.`,
      images: [OG_IMAGE.url],
    },
    alternates: {
      canonical: `${BASE_URL}/comarcas/${comarcaSlug}`,
    },
  };
}

export function generarMetadataPillar(tipo: "ferial" | "barata" | "online"): Metadata {
  const config = {
    ferial: {
      title: "Moqueta Ferial — Ecológica y Desde 2,20€/m² | Disstands",
      description: "Moqueta ferial ecológica Rewind® para ferias, eventos y congresos en Cataluña. 100% reciclable, sin látex, certificada Bfl-s1. Desde 2,20€/m². Comprar online. ☎ 934 850 085",
      canonical: `${BASE_URL}/moqueta-ferial`,
      keywords: ["moqueta ferial", "moqueta ferial ecológica", "moqueta ferias", "moqueta eventos", "moqueta reciclable", "Rewind moqueta"],
    },
    barata: {
      title: "Moqueta Barata — Desde 2,20€/m² | 100% Ecológica | Disstands",
      description: "Moqueta barata desde 2,20€/m² para ferias y eventos. 100% ecológica y reciclable, sin látex. Rewind® marca propia Disstands. Comprar online. ☎ 934 850 085",
      canonical: `${BASE_URL}/moqueta-barata`,
      keywords: ["moqueta barata", "moqueta económica", "moqueta precio", "moqueta ferial barata", "moqueta desde 2 euros"],
    },
    online: {
      title: "Comprar Moqueta Online — Envío a Toda España | Desde 2,20€/m²",
      description: "Comprar moqueta online: envío a toda España. Moqueta ferial ecológica desde 2,20€/m². 100% reciclable, sin látex, certificada Bfl-s1. Rewind® Disstands. ☎ 934 850 085",
      canonical: `${BASE_URL}/moqueta-online`,
      keywords: ["comprar moqueta online", "moqueta online", "comprar moqueta", "moqueta envío España", "moqueta ferial online"],
    },
  };

  const c = config[tipo];
  return {
    title: c.title,
    description: c.description,
    keywords: c.keywords,
    openGraph: {
      title: c.title,
      description: c.description,
      url: c.canonical,
      type: "website",
      locale: "es_ES",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: c.title,
      description: c.description,
      images: [OG_IMAGE.url],
    },
    alternates: {
      canonical: c.canonical,
    },
  };
}
