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
  topMunicipios,
  getMunicipioBySlug,
  getProvinciaForMunicipio,
  faqsGenerales,
} from "@/lib/data";
import { generarMetadataMunicipio } from "@/lib/seo/metadata";
import { generarContenidoMunicipio } from "@/lib/generators/contenido";
import {
  generarLocalBusinessSchema,
  generarFAQSchema,
  generarBreadcrumbSchema,
} from "@/lib/seo/schema";
import { MapPinIcon, TruckIcon, ClockIcon } from "@heroicons/react/24/outline";

interface Props {
  params: Promise<{
    municipio: string;
  }>;
}

export async function generateStaticParams() {
  return topMunicipios.map((municipio) => ({
    municipio: municipio.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { municipio: municipioSlug } = await params;
  const municipio = getMunicipioBySlug(municipioSlug);
  const provincia = getProvinciaForMunicipio(municipioSlug);

  if (!municipio || !provincia) {
    return { title: "No encontrado" };
  }

  return generarMetadataMunicipio(
    municipio.nombre,
    provincia.nombre,
    municipioSlug
  );
}

export default async function MunicipioPage({ params }: Props) {
  const { municipio: municipioSlug } = await params;
  const municipio = getMunicipioBySlug(municipioSlug);
  const provincia = getProvinciaForMunicipio(municipioSlug);

  if (!municipio || !provincia) {
    notFound();
  }

  const contenido = generarContenidoMunicipio(municipio, provincia);

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
      name: municipio.nombre,
      url: `https://www.disstands.com/municipios/${municipio.slug}`,
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
        ubicacion={municipio.nombre}
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

          {/* Beneficios locales en cards */}
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contenido.beneficiosLocales.map((beneficio, index) => (
              <div
                key={index}
                className="bg-light rounded-lg p-4 text-center"
              >
                <span className="text-dark font-medium text-sm">{beneficio}</span>
              </div>
            ))}
          </div>

          {/* Info del servicio */}
          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            <div className="bg-primary/5 rounded-xl p-6 text-center">
              <MapPinIcon className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-bold text-dark mb-1">Ubicación</h3>
              <p className="text-sm text-slate">
                {municipio.nombre}, {provincia.nombre}
              </p>
            </div>
            <div className="bg-primary/5 rounded-xl p-6 text-center">
              <TruckIcon className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-bold text-dark mb-1">Envío</h3>
              <p className="text-sm text-slate">Desde Barcelona</p>
            </div>
            <div className="bg-primary/5 rounded-xl p-6 text-center">
              <ClockIcon className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-bold text-dark mb-1">Instalación</h3>
              <p className="text-sm text-slate">Equipo profesional disponible</p>
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
        subtitulo={`Entrega directa en ${municipio.nombre}. Instalación profesional disponible.`}
      />

      {/* Certificaciones */}
      <Certificaciones />

      {/* Otros municipios de la provincia */}
      <section className="py-16 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-dark mb-6 text-center">
            También servimos en {provincia.nombre}
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {topMunicipios
              .filter(
                (m) =>
                  m.provincia === provincia.slug && m.slug !== municipio.slug
              )
              .slice(0, 10)
              .map((m) => (
                <Link
                  key={m.slug}
                  href={`/municipios/${m.slug}`}
                  className="bg-white hover:bg-primary hover:text-white text-slate text-sm px-4 py-2 rounded-full transition"
                >
                  {m.nombre}
                </Link>
              ))}
            <Link
              href={`/moqueta-ecologica-${provincia.slug}`}
              className="bg-primary text-white text-sm px-4 py-2 rounded-full"
            >
              Ver toda {provincia.nombre}
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        faqs={faqsGenerales.slice(0, 5)}
        titulo={`Preguntas sobre moqueta ecológica en ${municipio.nombre}`}
      />

      {/* CTA final */}
      <CTABand />
    </>
  );
}
