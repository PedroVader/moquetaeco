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
  EnlacesRelacionados,
  Testimonios,
} from "@/components/sections";
import type { GrupoEnlaces } from "@/components/sections/EnlacesRelacionados";
import {
  topMunicipios,
  getMunicipioBySlug,
  getProvinciaForMunicipio,
  getComarcaForMunicipio,
  getNearbyMunicipios,
  tiposUso,
  empresa,
} from "@/lib/data";
import { getFaqsMunicipio } from "@/lib/data/faqs";
import { generarMetadataMunicipio } from "@/lib/seo/metadata";
import { generarContenidoMunicipio } from "@/lib/generators/contenido";
import {
  generarLocalBusinessSchema,
  generarFAQSchema,
  generarBreadcrumbSchema,
  generarProductSchema,
} from "@/lib/seo/schema";
import { moquetaFerialEco } from "@/lib/data/productos";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { MapPinIcon, TruckIcon, ClockIcon, PhoneIcon, EnvelopeIcon, BuildingOffice2Icon } from "@heroicons/react/24/outline";

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
  const comarcaResult = getComarcaForMunicipio(municipioSlug);

  if (!municipio || !provincia) {
    notFound();
  }

  const contenido = generarContenidoMunicipio(
    municipio,
    provincia,
    comarcaResult?.comarca.nombre
  );
  const nearbyMunicipios = getNearbyMunicipios(municipioSlug, 6);
  const faqs = getFaqsMunicipio(municipio.nombre, provincia.nombre);

  const localBusinessSchema = generarLocalBusinessSchema();
  const productSchema = generarProductSchema(moquetaFerialEco);
  const faqSchema = generarFAQSchema(faqs);

  const breadcrumbItems = [
    { name: "Inicio", url: "https://www.moquetaecologica.com" },
    {
      name: provincia.nombre,
      url: `https://www.moquetaecologica.com/moqueta-ecologica-${provincia.slug}`,
    },
    ...(comarcaResult
      ? [
          {
            name: comarcaResult.comarca.nombre,
            url: `https://www.moquetaecologica.com/comarcas/${comarcaResult.comarca.slug}`,
          },
        ]
      : []),
    {
      name: municipio.nombre,
      url: `https://www.moquetaecologica.com/municipios/${municipio.slug}`,
    },
  ];
  const breadcrumbSchema = generarBreadcrumbSchema(breadcrumbItems);

  // Build related links
  const gruposEnlaces: GrupoEnlaces[] = [];

  if (comarcaResult) {
    gruposEnlaces.push({
      titulo: `Comarca ${comarcaResult.comarca.nombre}`,
      enlaces: [
        {
          nombre: `Ver ${comarcaResult.comarca.nombre}`,
          href: `/comarcas/${comarcaResult.comarca.slug}`,
        },
      ],
    });
  }

  if (nearbyMunicipios.length > 0) {
    gruposEnlaces.push({
      titulo: "Municipios cercanos",
      enlaces: nearbyMunicipios.map((m) => ({
        nombre: m.nombre,
        href: `/municipios/${m.slug}`,
      })),
    });
  }

  gruposEnlaces.push({
    titulo: `Moqueta por tipo de evento`,
    enlaces: tiposUso.map((uso) => ({
      nombre: `${uso.nombre} en ${provincia.nombre}`,
      href: `/${provincia.slug}/${uso.slug}`,
    })),
  });

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
                {municipio.nombre},{" "}
                {comarcaResult ? (
                  <Link
                    href={`/comarcas/${comarcaResult.comarca.slug}`}
                    className="text-primary hover:underline"
                  >
                    {comarcaResult.comarca.nombre}
                  </Link>
                ) : (
                  provincia.nombre
                )}
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

      {/* Espacios para eventos */}
      {municipio.zonasEventos.length > 0 && (
        <section className="py-12 bg-light">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-dark mb-6">
              Espacios para eventos en {municipio.nombre}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {municipio.zonasEventos.map((zona) => (
                <div
                  key={zona}
                  className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex items-start gap-3"
                >
                  <BuildingOffice2Icon className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-dark text-sm">{zona}</span>
                    <p className="text-xs text-slate mt-1">
                      Instalación de moqueta ecológica disponible
                    </p>
                  </div>
                </div>
              ))}
            </div>
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
        subtitulo={`Entrega directa en ${municipio.nombre}. Instalación profesional disponible.`}
      />

      {/* Certificaciones */}
      <Certificaciones />

      {/* Testimonios */}
      <Testimonios />

      {/* Enlaces relacionados */}
      <EnlacesRelacionados grupos={gruposEnlaces} />

      {/* Contacto directo */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-dark mb-2">
              ¿Necesitas moqueta ecológica en {municipio.nombre}?
            </h2>
            <p className="text-slate mb-6">
              Llámanos o escríbenos para presupuesto sin compromiso. Respuesta en menos de 24h.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={`tel:${empresa.telefonoInternacional}`}
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-light text-white font-bold py-3 px-6 rounded-xl transition"
              >
                <PhoneIcon className="w-5 h-5" />
                {empresa.telefono}
              </a>
              <a
                href={`mailto:${empresa.emailVentas}`}
                className="inline-flex items-center justify-center gap-2 bg-white border-2 border-primary text-primary font-bold py-3 px-6 rounded-xl hover:bg-primary/5 transition"
              >
                <EnvelopeIcon className="w-5 h-5" />
                {empresa.emailVentas}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        faqs={faqs}
        titulo={`Preguntas sobre moqueta ecológica en ${municipio.nombre}`}
      />

      {/* CTA final */}
      <CTABand />
    </>
  );
}
