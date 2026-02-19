import type { Metadata } from "next";
import { moquetaDilourEco } from "@/lib/data/productos";
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
  title: "Rewind Dilour - Moqueta Premium Ecológica | Desde 4,05€/m²",
  description:
    "Moqueta premium ecológica Rewind Dilour. 4mm de espesor, 100% reciclable, sin látex, certificada Bfl-s1. 29 colores. Desde 4,05€/m². ☎ 934 850 085",
  keywords: [
    "moqueta premium ecológica",
    "rewind dilour",
    "moqueta eventos premium",
    "moqueta reciclable",
    "moqueta sin látex",
    "moqueta alto standing",
  ],
  openGraph: {
    title: "Rewind Dilour - Moqueta Premium Ecológica | Disstands",
    description:
      "Moqueta premium 4mm, 100% reciclable, sin látex. 29 colores. Desde 4,05€/m².",
    url: `${BASE_URL}/productos/rewind-dilour`,
    type: "website",
    locale: "es_ES",
    images: [
      {
        url: `${BASE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Moqueta Ecológica Rewind Dilour - Disstands",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rewind Dilour - Moqueta Premium Ecológica | Disstands",
    description:
      "Moqueta premium 4mm, 100% reciclable, sin látex. 29 colores. Desde 4,05€/m².",
    images: [`${BASE_URL}/og-image.jpg`],
  },
  alternates: {
    canonical: `${BASE_URL}/productos/rewind-dilour`,
  },
};

export default function RewindDilourPage() {
  const productSchema = generarProductSchema(moquetaDilourEco);
  const localBusinessSchema = generarLocalBusinessSchema();
  const faqSchema = generarFAQSchema(faqsGenerales.slice(0, 6));
  const breadcrumbSchema = generarBreadcrumbSchema([
    { name: "Inicio", url: BASE_URL },
    { name: "Productos", url: `${BASE_URL}/productos` },
    { name: "Rewind Dilour", url: `${BASE_URL}/productos/rewind-dilour` },
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
        producto={moquetaDilourEco}
        imagenBase="/moqueta-rewind/watermarked_Rewind-Dilour-"
        extension="jpg"
      />

      <TrabajosCarousel producto="dilour" />

      <CTABand
        titulo="¿Buscas moqueta premium para tu evento?"
        subtitulo="Solicita presupuesto sin compromiso. Más de 25 años de experiencia."
      />

      <FAQ faqs={faqsGenerales.slice(0, 6)} titulo="Preguntas sobre Rewind Dilour" />
    </>
  );
}
