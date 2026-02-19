import type { Metadata } from "next";
import {
  Hero,
  ProductShowcase,
  BeneficiosEco,
  Comparativa,
  Especificaciones,
  PriceCalculator,
  Certificaciones,
  FAQ,
  CTABand,
  AreasServicio,
} from "@/components/sections";
import { faqsGenerales, moquetaFerialEco, moquetaDilourEco } from "@/lib/data";
import { generarMetadataPrincipal } from "@/lib/seo/metadata";
import {
  generarLocalBusinessSchema,
  generarProductSchema,
  generarFAQSchema,
  generarBreadcrumbSchema,
} from "@/lib/seo/schema";

const BASE_URL = "https://www.moquetaecologica.com";

export const metadata: Metadata = generarMetadataPrincipal();

export default function HomePage() {
  // Schemas JSON-LD
  const localBusinessSchema = generarLocalBusinessSchema();
  const productSchemaFlat = generarProductSchema(moquetaFerialEco);
  const productSchemaDilour = generarProductSchema(moquetaDilourEco);
  const faqSchema = generarFAQSchema(faqsGenerales);
  const breadcrumbSchema = generarBreadcrumbSchema([
    { name: "Inicio", url: BASE_URL },
  ]);

  return (
    <>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchemaFlat),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchemaDilour),
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

      {/* Hero Section */}
      <Hero
        titulo="Moqueta Ecológica para Ferias y Eventos"
        subtitulo="Rewind® es nuestra marca propia de moqueta ecológica en Cataluña. 100% reciclable, sin látex, certificación Bfl-s1. La elección del Mobile World Congress."
        ubicacion="Cataluña"
      />

      {/* Productos */}
      <ProductShowcase />

      {/* Beneficios ecológicos */}
      <BeneficiosEco />

      {/* Comparativa */}
      <Comparativa />

      {/* Calculadora de precios */}
      <PriceCalculator />

      {/* Especificaciones técnicas */}
      <Especificaciones />

      {/* CTA intermedio */}
      <CTABand
        titulo="¿Tienes un evento próximo?"
        subtitulo="Solicita presupuesto sin compromiso. Más de 25 años de experiencia en el sector."
      />

      {/* Certificaciones */}
      <Certificaciones />

      {/* Áreas de servicio */}
      <AreasServicio />

      {/* FAQ */}
      <FAQ faqs={faqsGenerales} />

      {/* CTA final */}
      <CTABand
        titulo="¿Listo para tu moqueta ecológica?"
        subtitulo="Más de 25 años de experiencia. Rewind® marca propia Disstands. Montaje solo para profesionales."
      />
    </>
  );
}
