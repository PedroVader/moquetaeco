import type { Metadata } from "next";
import { moquetaFerialEco } from "@/lib/data/productos";
import { ProductoDetalle } from "@/components/sections/ProductoDetalle";
import { CTABand, FAQ } from "@/components/sections";
import { TrabajosCarousel } from "@/components/ui/TrabajosCarousel";
import { faqsGenerales } from "@/lib/data";
import {
  generarProductSchema,
  generarLocalBusinessSchema,
  generarFAQSchema,
  generarBreadcrumbSchema,
} from "@/lib/seo/schema";

const BASE_URL = "https://www.moquetaecologica.com";

export const metadata: Metadata = {
  title: "Rewind Flat - Moqueta Ferial Ecológica | Desde 2,10€/m²",
  description:
    "Moqueta ferial ecológica Rewind Flat. 100% reciclable, sin látex, certificada Bfl-s1. 30 colores disponibles. Desde 2,10€/m². ☎ 934 850 085",
  keywords: [
    "moqueta ferial ecológica",
    "rewind flat",
    "moqueta reciclable",
    "moqueta sin látex",
    "moqueta eventos",
    "moqueta ferias",
  ],
  openGraph: {
    title: "Rewind Flat - Moqueta Ferial Ecológica | Disstands",
    description:
      "Moqueta 100% reciclable, sin látex, certificada Bfl-s1. 30 colores. Desde 2,10€/m².",
    url: `${BASE_URL}/productos/rewind-flat`,
    type: "website",
    locale: "es_ES",
    images: [
      {
        url: `${BASE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Moqueta Ecológica Rewind Flat - Disstands",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rewind Flat - Moqueta Ferial Ecológica | Disstands",
    description:
      "Moqueta 100% reciclable, sin látex, certificada Bfl-s1. 30 colores. Desde 2,10€/m².",
    images: [`${BASE_URL}/og-image.jpg`],
  },
  alternates: {
    canonical: `${BASE_URL}/productos/rewind-flat`,
  },
};

export default function RewindFlatPage() {
  const productSchema = generarProductSchema(moquetaFerialEco);
  const localBusinessSchema = generarLocalBusinessSchema();
  const faqSchema = generarFAQSchema(faqsGenerales.slice(0, 6));
  const breadcrumbSchema = generarBreadcrumbSchema([
    { name: "Inicio", url: BASE_URL },
    { name: "Productos", url: `${BASE_URL}/productos` },
    { name: "Rewind Flat", url: `${BASE_URL}/productos/rewind-flat` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <ProductoDetalle
        producto={moquetaFerialEco}
        imagenBase="/moqueta-rewind/watermarked_Rewind-Flat-"
        extension="png"
      />

      <TrabajosCarousel producto="flat" />

      <CTABand
        titulo="¿Necesitas moqueta para tu evento?"
        subtitulo="Solicita presupuesto sin compromiso. Más de 25 años de experiencia."
      />

      <FAQ faqs={faqsGenerales.slice(0, 6)} titulo="Preguntas sobre Rewind Flat" />
    </>
  );
}
