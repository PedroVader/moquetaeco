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
  AreasServicio,
  EnlacesRelacionados,
} from "@/components/sections";
import type { GrupoEnlaces } from "@/components/sections/EnlacesRelacionados";
import {
  provincias,
  tiposUso,
  getProvinciaBySlug,
  getTipoUsoBySlug,
  getFaqsByTipo,
} from "@/lib/data";
import { getContenidoProvinciaUso } from "@/lib/data/contenido-uso";
import { generarMetadataUso } from "@/lib/seo/metadata";
import { generarContenidoUso } from "@/lib/generators/contenido";
import {
  generarLocalBusinessSchema,
  generarFAQSchema,
  generarBreadcrumbSchema,
  generarProductSchema,
} from "@/lib/seo/schema";
import { moquetaFerialEco } from "@/lib/data/productos";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { MapPinIcon, BuildingOffice2Icon, SparklesIcon, TruckIcon } from "@heroicons/react/24/outline";

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
  const contenidoEspecifico = getContenidoProvinciaUso(provinciaSlug, usoSlug);
  const faqs = getFaqsByTipo(uso.slug);

  const localBusinessSchema = generarLocalBusinessSchema();
  const productSchema = generarProductSchema(moquetaFerialEco);
  const faqSchema = generarFAQSchema(faqs);
  const breadcrumbItems = [
    { name: "Inicio", url: "https://www.moquetaecologica.com" },
    {
      name: provincia.nombre,
      url: `https://www.moquetaecologica.com/moqueta-ecologica-${provincia.slug}`,
    },
    {
      name: uso.nombre,
      url: `https://www.moquetaecologica.com/${provincia.slug}/${uso.slug}`,
    },
  ];
  const breadcrumbSchema = generarBreadcrumbSchema(breadcrumbItems);

  // Build related links
  const otrosUsos = tiposUso.filter((u) => u.slug !== uso.slug);
  const gruposEnlaces: GrupoEnlaces[] = [
    {
      titulo: `Otros usos en ${provincia.nombre}`,
      enlaces: otrosUsos.map((u) => ({
        nombre: u.nombre,
        href: `/${provincia.slug}/${u.slug}`,
      })),
    },
    {
      titulo: `Comarcas de ${provincia.nombre}`,
      enlaces: provincia.comarcas.slice(0, 8).map((c) => ({
        nombre: c.nombre,
        href: `/comarcas/${c.slug}`,
      })),
    },
  ];

  return (
    <>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Breadcrumb visual */}
      <Breadcrumb
        items={breadcrumbItems.map((item) => ({
          name: item.name,
          url: item.url.replace("https://www.moquetaecologica.com", "") || "/",
        }))}
      />

      {/* Hero */}
      <Hero
        titulo={contenido.h1}
        subtitulo={contenido.heroText}
        ubicacion={provincia.nombre}
      />

      {/* Intro expandida */}
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
            {/* Contexto local específico provincia+uso */}
            {contenidoEspecifico && (
              <p className="text-slate mb-4 leading-relaxed">
                {contenidoEspecifico.contextoLocal}
              </p>
            )}
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

      {/* Sección: Eventos de referencia */}
      {contenidoEspecifico && contenidoEspecifico.eventosReferencia.length > 0 && (
        <section className="py-12 bg-light">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-dark mb-6">
              {uso.nombre} en {provincia.nombre}: eventos de referencia
            </h2>
            <p className="text-slate mb-6">
              Estos son algunos de los eventos y proyectos de {uso.nombre.toLowerCase()} en {provincia.nombre} donde la moqueta ferial ecológica es la solución de pavimento habitual:
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {contenidoEspecifico.eventosReferencia.map((evento) => (
                <div
                  key={evento}
                  className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-start gap-3"
                >
                  <MapPinIcon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-dark font-medium">{evento}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Sección: Espacios destacados */}
      {contenidoEspecifico && contenidoEspecifico.espaciosDestacados.length > 0 && (
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-dark mb-6">
              Espacios para {uso.nombre.toLowerCase()} en {provincia.nombre}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {contenidoEspecifico.espaciosDestacados.map((espacio) => (
                <div
                  key={espacio}
                  className="bg-light rounded-xl p-5 flex items-start gap-3"
                >
                  <BuildingOffice2Icon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-dark text-sm">{espacio}</span>
                    <p className="text-xs text-slate mt-1">
                      Suministro de moqueta ecológica disponible
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Sección: Producto recomendado */}
      {contenidoEspecifico && (
        <section className="py-12 bg-light">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-4">
              <SparklesIcon className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold text-dark">
                Producto recomendado para {uso.nombre.toLowerCase()}
              </h2>
            </div>
            <p className="text-slate leading-relaxed mb-4">
              {contenidoEspecifico.recomendacionProducto}
            </p>
            <p className="text-slate leading-relaxed italic text-sm">
              {contenidoEspecifico.consejoLocal}
            </p>
          </div>
        </section>
      )}

      {/* Sección: Ventaja logística */}
      {contenidoEspecifico && (
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-4">
              <TruckIcon className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold text-dark">
                Logística para {uso.nombre.toLowerCase()} en {provincia.nombre}
              </h2>
            </div>
            <p className="text-slate leading-relaxed">
              {contenidoEspecifico.ventajaLogistica}
            </p>
          </div>
        </section>
      )}

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

      {/* Enlaces relacionados */}
      <EnlacesRelacionados grupos={gruposEnlaces} />

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
