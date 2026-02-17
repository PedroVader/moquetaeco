import type { Metadata } from "next";
import {
  Hero,
  ProductShowcase,
  BeneficiosEco,
  Comparativa,
  PriceCalculator,
  Certificaciones,
  FAQ,
  CTABand,
  AreasServicio,
} from "@/components/sections";
import { getProvinciaBySlug, getFaqsProvincia } from "@/lib/data";
import { generarMetadataProvincia } from "@/lib/seo/metadata";
import { generarContenidoProvincia } from "@/lib/generators/contenido";
import {
  generarLocalBusinessSchema,
  generarFAQSchema,
  generarBreadcrumbSchema,
} from "@/lib/seo/schema";
import Link from "next/link";
import { MapPinIcon, BuildingOffice2Icon, CalendarIcon } from "@heroicons/react/24/outline";

const provincia = getProvinciaBySlug("tarragona")!;
const contenido = generarContenidoProvincia(provincia);
const faqs = getFaqsProvincia(provincia.nombre);

export const metadata: Metadata = generarMetadataProvincia(provincia);

export default function MoquetaEcologicaTarragona() {
  const localBusinessSchema = generarLocalBusinessSchema();
  const faqSchema = generarFAQSchema(faqs);
  const breadcrumbSchema = generarBreadcrumbSchema([
    { name: "Inicio", url: "https://www.disstands.com" },
    { name: "Moqueta Ecológica", url: "https://www.disstands.com/" },
    {
      name: `Moqueta Ecológica ${provincia.nombre}`,
      url: `https://www.disstands.com/moqueta-ecologica-${provincia.slug}`,
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

      {/* Intro con contenido específico */}
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
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
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

      {/* Municipios principales */}
      <section className="py-16 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-dark mb-8 text-center">
            Servicio en toda la provincia de {provincia.nombre}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Municipios */}
            <div className="bg-white rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <MapPinIcon className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold text-dark">
                  Principales municipios
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {provincia.municipiosPrincipales.map((municipio) => (
                  <span
                    key={municipio}
                    className="bg-light text-slate text-sm px-3 py-1 rounded-full"
                  >
                    {municipio}
                  </span>
                ))}
              </div>
            </div>

            {/* Recintos feriales */}
            <div className="bg-white rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <BuildingOffice2Icon className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold text-dark">Recintos feriales</h3>
              </div>
              <ul className="space-y-2">
                {provincia.recintosFeriales.map((recinto) => (
                  <li key={recinto} className="text-slate text-sm">
                    {recinto}
                  </li>
                ))}
              </ul>
            </div>

            {/* Eventos destacados */}
            <div className="bg-white rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <CalendarIcon className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold text-dark">
                  Eventos destacados
                </h3>
              </div>
              <ul className="space-y-2">
                {provincia.eventosDestacados.map((evento) => (
                  <li key={evento} className="text-slate text-sm">
                    {evento}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Comarcas */}
          <div className="mt-8">
            <h3 className="text-xl font-bold text-dark mb-4 text-center">
              Comarcas de {provincia.nombre}
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {provincia.comarcas.map((comarca) => (
                <Link
                  key={comarca.slug}
                  href={`/comarcas/${comarca.slug}`}
                  className="bg-white hover:bg-primary hover:text-white text-slate text-sm px-4 py-2 rounded-full transition"
                >
                  {comarca.nombre}
                </Link>
              ))}
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
        subtitulo="Instalación profesional disponible en toda la provincia."
      />

      {/* Comparativa */}
      <Comparativa />

      {/* Certificaciones */}
      <Certificaciones />

      {/* Otras provincias */}
      <AreasServicio provinciaActual={provincia.slug} />

      {/* FAQ */}
      <FAQ faqs={faqs} titulo={`Preguntas sobre moqueta ecológica en ${provincia.nombre}`} />

      {/* CTA final */}
      <CTABand />
    </>
  );
}
