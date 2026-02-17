import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  Hero,
  ProductShowcase,
  BeneficiosEco,
  PriceCalculator,
  Certificaciones,
  FAQ,
  CTABand,
  AreasServicio,
} from "@/components/sections";
import {
  provincias,
  tiposUso,
  getProvinciaBySlug,
  getTipoUsoBySlug,
  getFaqsByTipo,
} from "@/lib/data";
import { generarMetadataUso } from "@/lib/seo/metadata";
import { generarContenidoUso } from "@/lib/generators/contenido";
import {
  generarLocalBusinessSchema,
  generarFAQSchema,
  generarBreadcrumbSchema,
} from "@/lib/seo/schema";

interface Props {
  params: Promise<{
    provincia: string;
    uso: string;
  }>;
}

export async function generateStaticParams() {
  const params: { provincia: string; uso: string }[] = [];

  for (const provincia of provincias) {
    for (const uso of tiposUso) {
      params.push({
        provincia: provincia.slug,
        uso: uso.slug,
      });
    }
  }

  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { provincia: provinciaSlug, uso: usoSlug } = await params;
  const provincia = getProvinciaBySlug(provinciaSlug);
  const uso = getTipoUsoBySlug(usoSlug);

  if (!provincia || !uso) {
    return { title: "No encontrado" };
  }

  return generarMetadataUso(uso.nombre, provincia.nombre, provinciaSlug, usoSlug);
}

export default async function ProvinciaUsoPage({ params }: Props) {
  const { provincia: provinciaSlug, uso: usoSlug } = await params;
  const provincia = getProvinciaBySlug(provinciaSlug);
  const uso = getTipoUsoBySlug(usoSlug);

  if (!provincia || !uso) {
    notFound();
  }

  const contenido = generarContenidoUso(uso, provincia);
  const faqs = getFaqsByTipo(uso.slug);

  const localBusinessSchema = generarLocalBusinessSchema();
  const faqSchema = generarFAQSchema(faqs);
  const breadcrumbSchema = generarBreadcrumbSchema([
    { name: "Inicio", url: "https://www.disstands.com" },
    { name: "Moqueta Ecológica", url: "https://www.disstands.com/" },
    {
      name: provincia.nombre,
      url: `https://www.disstands.com/moqueta-ecologica-${provincia.slug}`,
    },
    {
      name: uso.nombre,
      url: `https://www.disstands.com/${provincia.slug}/${uso.slug}`,
    },
  ]);

  return (
    <>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <Hero
        titulo={contenido.h1}
        subtitulo={contenido.heroText}
        ubicacion={provincia.nombre}
      />

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {contenido.intro.map((parrafo, index) => (
              <p
                key={index}
                className="text-slate mb-4 leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: parrafo.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
                }}
              />
            ))}
          </div>

          {/* Beneficios locales */}
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {contenido.beneficiosLocales.map((beneficio, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-light rounded-lg p-4"
              >
                <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                <span className="text-dark font-medium">{beneficio}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Productos */}
      <ProductShowcase />

      {/* Beneficios Eco */}
      <BeneficiosEco />

      {/* Calculadora */}
      <PriceCalculator />

      {/* CTA */}
      <CTABand
        titulo={contenido.ctaText}
        subtitulo={`Servicio en toda ${provincia.nombre}. Instalación profesional disponible.`}
      />

      {/* Certificaciones */}
      <Certificaciones />

      {/* Otras provincias */}
      <AreasServicio provinciaActual={provincia.slug} />

      {/* FAQ */}
      <FAQ
        faqs={faqs}
        titulo={`Preguntas sobre moqueta para ${uso.nombre.toLowerCase()}`}
      />

      {/* CTA final */}
      <CTABand />
    </>
  );
}
