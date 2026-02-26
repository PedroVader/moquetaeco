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
  getAllComarcas,
  getComarcaBySlug,
  getMunicipiosByComarca,
  tiposUso,
  empresa,
} from "@/lib/data";
import { getFaqsComarca } from "@/lib/data/faqs";
import { generarMetadataComarca } from "@/lib/seo/metadata";
import { generarContenidoComarca } from "@/lib/generators/contenido";
import {
  generarLocalBusinessSchema,
  generarFAQSchema,
  generarBreadcrumbSchema,
  generarProductSchema,
} from "@/lib/seo/schema";
import { moquetaFerialEco } from "@/lib/data/productos";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { MapPinIcon, CalendarIcon, BuildingOffice2Icon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

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
  const contenido = generarContenidoComarca(comarca, provincia);
  const municipiosComarca = getMunicipiosByComarca(comarca.slug);
  const faqs = getFaqsComarca(comarca.nombre, provincia.nombre);

  const localBusinessSchema = generarLocalBusinessSchema();
  const productSchema = generarProductSchema(moquetaFerialEco);
  const faqSchema = generarFAQSchema(faqs);
  const breadcrumbItems = [
    { name: "Inicio", url: "https://www.moquetaecologica.com" },
    { name: "Moqueta Ecológica", url: "https://www.moquetaecologica.com/" },
    {
      name: provincia.nombre,
      url: `https://www.moquetaecologica.com/moqueta-ecologica-${provincia.slug}`,
    },
    {
      name: comarca.nombre,
      url: `https://www.moquetaecologica.com/comarcas/${comarca.slug}`,
    },
  ];
  const breadcrumbSchema = generarBreadcrumbSchema(breadcrumbItems);

  // Build related links
  const gruposEnlaces: GrupoEnlaces[] = [];

  if (municipiosComarca.length > 0) {
    gruposEnlaces.push({
      titulo: `Municipios en ${comarca.nombre}`,
      enlaces: municipiosComarca.map((m) => ({
        nombre: m.nombre,
        href: `/municipios/${m.slug}`,
      })),
    });
  }

  gruposEnlaces.push({
    titulo: `Moqueta por tipo de evento en ${provincia.nombre}`,
    enlaces: tiposUso.map((uso) => ({
      nombre: uso.nombre,
      href: `/${provincia.slug}/${uso.slug}`,
    })),
  });

  const otrasComarcas = provincia.comarcas.filter((c) => c.slug !== comarca.slug);
  if (otrasComarcas.length > 0) {
    gruposEnlaces.push({
      titulo: `Otras comarcas de ${provincia.nombre}`,
      enlaces: otrasComarcas.map((c) => ({
        nombre: c.nombre,
        href: `/comarcas/${c.slug}`,
      })),
    });
  }

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

          {/* Info comarca enriched */}
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
              <div>
                <span className="text-slate">Población:</span>{" "}
                <strong className="text-dark">
                  {comarca.poblacion.toLocaleString("es-ES")} hab.
                </strong>
              </div>
              <div>
                <span className="text-slate">Distancia Barcelona:</span>{" "}
                <strong className="text-dark">
                  {comarca.distanciaBarcelona === 0
                    ? "Área metropolitana"
                    : `${comarca.distanciaBarcelona} km`}
                </strong>
              </div>
            </div>
          </div>

          {/* Eventos y espacios */}
          {(comarca.eventosLocales.length > 0 || comarca.espaciosEventos.length > 0) && (
            <div className="mt-6 grid sm:grid-cols-2 gap-6">
              {comarca.eventosLocales.length > 0 && (
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <CalendarIcon className="w-5 h-5 text-primary" />
                    <h4 className="font-semibold text-dark">Eventos locales</h4>
                  </div>
                  <ul className="space-y-1.5">
                    {comarca.eventosLocales.map((evento) => (
                      <li key={evento} className="text-sm text-slate">
                        {evento}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {comarca.espaciosEventos.length > 0 && (
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <BuildingOffice2Icon className="w-5 h-5 text-primary" />
                    <h4 className="font-semibold text-dark">Espacios para eventos</h4>
                  </div>
                  <ul className="space-y-1.5">
                    {comarca.espaciosEventos.map((espacio) => (
                      <li key={espacio} className="text-sm text-slate">
                        {espacio}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
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

      {/* Testimonios */}
      <Testimonios />

      {/* Enlaces relacionados */}
      <EnlacesRelacionados grupos={gruposEnlaces} />

      {/* Contacto directo */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-dark mb-2">
              ¿Necesitas moqueta ecológica en {comarca.nombre}?
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
        titulo={`Preguntas sobre moqueta ecológica en ${comarca.nombre}`}
      />

      {/* CTA final */}
      <CTABand />
    </>
  );
}
