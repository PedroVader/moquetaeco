import type { Metadata } from "next";
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
} from "@/components/sections";
import { faqsMoquetaFerial, moquetaFerialEco } from "@/lib/data";
import { generarMetadataPillar } from "@/lib/seo/metadata";
import {
  generarLocalBusinessSchema,
  generarProductSchema,
  generarFAQSchema,
  generarBreadcrumbSchema,
} from "@/lib/seo/schema";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

const BASE_URL = "https://www.moquetaecologica.com";

export const metadata: Metadata = generarMetadataPillar("ferial");

export default function MoquetaFerialPage() {
  const localBusinessSchema = generarLocalBusinessSchema();
  const productSchema = generarProductSchema(moquetaFerialEco);
  const faqSchema = generarFAQSchema(faqsMoquetaFerial);
  const breadcrumbItems = [
    { name: "Inicio", url: BASE_URL },
    { name: "Moqueta Ferial", url: `${BASE_URL}/moqueta-ferial` },
  ];
  const breadcrumbSchema = generarBreadcrumbSchema(breadcrumbItems);

  return (
    <>
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

      <Breadcrumb
        items={breadcrumbItems.map((item) => ({
          name: item.name,
          url: item.url.replace(BASE_URL, "") || "/",
        }))}
      />

      <Hero
        titulo="Moqueta Ferial — Ecológica y Desde 2,20€/m²"
        subtitulo="Rewind® es la moqueta ferial 100% reciclable de Disstands. Sin látex, certificada Bfl-s1, elegida por el Mobile World Congress. Compra online o solicita presupuesto."
        ubicacion="Cataluña"
      />

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-slate mb-4 leading-relaxed">
              La <strong>moqueta ferial Rewind</strong> es nuestra marca propia,
              fabricada como monomaterial 100% polipropileno sin látex. Es la única
              moqueta ferial del mundo completamente reciclable, y se produce con
              un 80% menos de energía y cero consumo de agua.
            </p>
            <p className="text-slate mb-4 leading-relaxed">
              Disponible en <strong>30 colores</strong> y dos acabados (Flat desde 2,20€/m²
              y Dilour desde 4,05€/m²), es la solución más <strong>barata y sostenible</strong> para
              ferias, eventos, congresos y stands en toda España. Puedes{" "}
              <Link href="/moqueta-online" className="text-primary font-medium hover:underline">
                comprar moqueta online
              </Link>{" "}
              o solicitar presupuesto personalizado.
            </p>
            <p className="text-slate mb-4 leading-relaxed">
              Con más de 25 años de experiencia, suministramos moqueta ferial en toda Cataluña:
              Barcelona, Girona, Tarragona y Lleida. Servicio de montaje disponible
              exclusivamente para profesionales del sector.
            </p>
          </div>

          {/* Links a provincias */}
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { nombre: "Barcelona", slug: "barcelona" },
              { nombre: "Girona", slug: "girona" },
              { nombre: "Tarragona", slug: "tarragona" },
              { nombre: "Lleida", slug: "lleida" },
            ].map((prov) => (
              <Link
                key={prov.slug}
                href={`/moqueta-ferial-${prov.slug}`}
                className="block p-4 rounded-xl border-2 border-gray-200 hover:border-primary/50 hover:shadow-lg transition text-center"
              >
                <span className="text-lg font-bold text-dark">{prov.nombre}</span>
                <span className="block text-sm text-slate mt-1">
                  Moqueta ferial en {prov.nombre}
                </span>
              </Link>
            ))}
          </div>

          {/* Links a otras pillar pages */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link
              href="/moqueta-barata"
              className="inline-flex items-center gap-2 bg-accent/10 text-accent font-semibold px-6 py-3 rounded-xl hover:bg-accent/20 transition"
            >
              Ver precios: Moqueta Barata desde 2,20€/m²
            </Link>
            <Link
              href="/moqueta-online"
              className="inline-flex items-center gap-2 bg-primary/10 text-primary font-semibold px-6 py-3 rounded-xl hover:bg-primary/20 transition"
            >
              Comprar Moqueta Online — Envío a toda España
            </Link>
          </div>
        </div>
      </section>

      <ProductShowcase />
      <BeneficiosEco />
      <PriceCalculator />

      <CTABand
        titulo="¿Necesitas moqueta ferial?"
        subtitulo="Presupuesto sin compromiso. Más de 25 años de experiencia en el sector."
      />

      <Certificaciones />
      <AreasServicio />

      <FAQ faqs={faqsMoquetaFerial} titulo="Preguntas sobre moqueta ferial" />

      <CTABand />
    </>
  );
}
