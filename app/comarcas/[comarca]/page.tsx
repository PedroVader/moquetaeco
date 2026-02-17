import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Hero,
  ProductShowcase,
  BeneficiosEco,
  PriceCalculator,
  Certificaciones,
  FAQ,
  CTABand,
} from "@/components/sections";
import {
  getAllComarcas,
  getComarcaBySlug,
  faqsGenerales,
} from "@/lib/data";
import { generarMetadataComarca } from "@/lib/seo/metadata";
import { generarContenidoComarca } from "@/lib/generators/contenido";
import {
  generarLocalBusinessSchema,
  generarFAQSchema,
  generarBreadcrumbSchema,
} from "@/lib/seo/schema";
import { MapPinIcon } from "@heroicons/react/24/outline";

interface Props {
  params: Promise<{
    comarca: string;
  }>;
}

export async function generateStaticParams() {
  const comarcas = getAllComarcas();
  return comarcas.map((comarca) => ({
    comarca: comarca.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { comarca: comarcaSlug } = await params;
  const result = getComarcaBySlug(comarcaSlug);

  if (!result) {
    return { title: "No encontrado" };
  }

  return generarMetadataComarca(
    result.comarca.nombre,
    result.provincia.nombre,
    comarcaSlug
  );
}

export default async function ComarcaPage({ params }: Props) {
  const { comarca: comarcaSlug } = await params;
  const result = getComarcaBySlug(comarcaSlug);

  if (!result) {
    notFound();
  }

  const { comarca, provincia } = result;
  const contenido = generarContenidoComarca(
    comarca.nombre,
    comarca.capital,
    provincia
  );

  const localBusinessSchema = generarLocalBusinessSchema();
  const faqSchema = generarFAQSchema(faqsGenerales.slice(0, 5));
  const breadcrumbSchema = generarBreadcrumbSchema([
    { name: "Inicio", url: "https://www.disstands.com" },
    { name: "Moqueta Ecológica", url: "https://www.disstands.com/" },
    {
      name: provincia.nombre,
      url: `https://www.disstands.com/moqueta-ecologica-${provincia.slug}`,
    },
    {
      name: comarca.nombre,
      url: `https://www.disstands.com/comarcas/${comarca.slug}`,
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
        ubicacion={comarca.nombre}
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

          {/* Info comarca */}
          <div className="mt-8 bg-light rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <MapPinIcon className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-bold text-dark">
                Información de {comarca.nombre}
              </h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-slate">Capital:</span>{" "}
                <strong className="text-dark">{comarca.capital}</strong>
              </div>
              <div>
                <span className="text-slate">Provincia:</span>{" "}
                <Link
                  href={`/moqueta-ecologica-${provincia.slug}`}
                  className="text-primary font-medium hover:underline"
                >
                  {provincia.nombre}
                </Link>
              </div>
            </div>
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
        subtitulo={`Servicio en ${comarca.capital} y toda la comarca. Instalación profesional disponible.`}
      />

      {/* Certificaciones */}
      <Certificaciones />

      {/* Otras comarcas de la provincia */}
      <section className="py-16 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-dark mb-6 text-center">
            Otras comarcas de {provincia.nombre}
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {provincia.comarcas
              .filter((c) => c.slug !== comarca.slug)
              .map((c) => (
                <Link
                  key={c.slug}
                  href={`/comarcas/${c.slug}`}
                  className="bg-white hover:bg-primary hover:text-white text-slate text-sm px-4 py-2 rounded-full transition"
                >
                  {c.nombre}
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        faqs={faqsGenerales.slice(0, 5)}
        titulo={`Preguntas sobre moqueta ecológica en ${comarca.nombre}`}
      />

      {/* CTA final */}
      <CTABand />
    </>
  );
}
