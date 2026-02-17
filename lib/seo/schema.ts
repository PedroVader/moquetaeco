import { empresa } from "@/lib/data";
import type { Producto } from "@/lib/data/productos";
import type { FAQ } from "@/lib/data/faqs";

export function generarLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.disstands.com/#organization",
    name: empresa.nombre,
    image:
      "https://www.disstands.com/wp-content/uploads/2025/06/logo-disstands.png",
    url: empresa.web,
    telephone: empresa.telefonoInternacional,
    email: empresa.emailVentas,
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: "C/ Joan d'Austria 90-96, Local 4 Bajos",
      addressLocality: "Barcelona",
      postalCode: "08018",
      addressRegion: "Cataluña",
      addressCountry: "ES",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: empresa.coordenadas.lat,
      longitude: empresa.coordenadas.lng,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    areaServed: [
      { "@type": "State", name: "Cataluña" },
      { "@type": "City", name: "Barcelona" },
      { "@type": "City", name: "Girona" },
      { "@type": "City", name: "Tarragona" },
      { "@type": "City", name: "Lleida" },
    ],
    sameAs: [
      empresa.redesSociales.instagram,
      empresa.redesSociales.linkedin,
      empresa.redesSociales.tiktok,
    ],
  };
}

export function generarProductSchema(producto: Producto) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: producto.nombre,
    description: `Moqueta ecológica ${producto.marca} 100% reciclable, sin látex. ${producto.especificaciones.composicion}`,
    brand: {
      "@type": "Brand",
      name: "Rewind",
    },
    manufacturer: {
      "@type": "Organization",
      name: empresa.nombre,
    },
    material: producto.especificaciones.composicion,
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Certificación ignífuga",
        value: producto.especificaciones.clasificacionFuego,
      },
      {
        "@type": "PropertyValue",
        name: "Reciclable",
        value: "100%",
      },
      {
        "@type": "PropertyValue",
        name: "Látex",
        value: "Sin látex",
      },
    ],
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "EUR",
      lowPrice: producto.precio.min,
      highPrice: producto.precio.max,
      offerCount: producto.colores,
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: empresa.nombre,
      },
    },
  };
}

export function generarFAQSchema(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.pregunta,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.respuesta,
      },
    })),
  };
}

export function generarBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}