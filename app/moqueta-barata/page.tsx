import type { Metadata } from "next";
import Link from "next/link";
import {
  Hero,
  ProductShowcase,
  PriceCalculator,
  Certificaciones,
  FAQ,
  CTABand,
} from "@/components/sections";
import { faqsMoquetaBarata, moquetaFerialEco, moquetaDilourEco } from "@/lib/data";
import { generarMetadataPillar } from "@/lib/seo/metadata";
import {
  generarLocalBusinessSchema,
  generarProductSchema,
  generarFAQSchema,
  generarBreadcrumbSchema,
} from "@/lib/seo/schema";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { CurrencyEuroIcon, CheckCircleIcon, TruckIcon } from "@heroicons/react/24/outline";

const BASE_URL = "https://www.moquetaecologica.com";

export const metadata: Metadata = generarMetadataPillar("barata");

export default function MoquetaBarataPage() {
  const localBusinessSchema = generarLocalBusinessSchema();
  const productSchemaFlat = generarProductSchema(moquetaFerialEco);
  const productSchemaDilour = generarProductSchema(moquetaDilourEco);
  const faqSchema = generarFAQSchema(faqsMoquetaBarata);
  const breadcrumbItems = [
    { name: "Inicio", url: BASE_URL },
    { name: "Moqueta Barata", url: `${BASE_URL}/moqueta-barata` },
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchemaFlat) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchemaDilour) }}
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
        titulo="Moqueta Barata — Desde 2,20€/m² | 100% Ecológica"
        subtitulo="La moqueta ferial más económica del mercado sin renunciar a la calidad ni al medio ambiente. Rewind® de Disstands: barata, ecológica y certificada Bfl-s1."
        ubicacion="España"
      />

      {/* Comparativa de precios */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-dark mb-8 text-center">
            Precios de moqueta ferial ecológica
          </h2>

          <div className="grid sm:grid-cols-2 gap-8 mb-12">
            {/* Rewind Flat */}
            <div className="border-2 border-accent rounded-2xl p-6 relative">
              <span className="absolute -top-3 left-4 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">
                Más económica
              </span>
              <h3 className="text-xl font-bold text-dark mb-2">Rewind Flat</h3>
              <p className="text-sm text-slate mb-4">Moqueta ferial punzonada, 2mm</p>
              <p className="text-4xl font-extrabold text-accent mb-1">
                2,20€<span className="text-lg font-normal text-slate">/m²</span>
              </p>
              <p className="text-xs text-slate mb-6">hasta 2,65€/m² · IVA no incluido</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-accent" />
                  <span>100% reciclable, sin látex</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-accent" />
                  <span>Certificación Bfl-s1 incluida</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-accent" />
                  <span>30 colores en stock</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-accent" />
                  <span>Ideal para ferias y eventos</span>
                </li>
              </ul>
              <Link
                href="/productos/rewind-flat"
                className="block mt-6 text-center bg-accent hover:bg-accent-dark text-white font-bold py-3 rounded-xl transition"
              >
                Ver Rewind Flat
              </Link>
            </div>

            {/* Rewind Dilour */}
            <div className="border-2 border-gray-200 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-dark mb-2">Rewind Dilour</h3>
              <p className="text-sm text-slate mb-4">Moqueta premium aterciopelada, 4mm</p>
              <p className="text-4xl font-extrabold text-primary mb-1">
                4,05€<span className="text-lg font-normal text-slate">/m²</span>
              </p>
              <p className="text-xs text-slate mb-6">hasta 4,65€/m² · IVA no incluido</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-primary" />
                  <span>100% reciclable, sin látex</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-primary" />
                  <span>Certificación Bfl-s1 incluida</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-primary" />
                  <span>29 colores en stock</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-primary" />
                  <span>Confort premium, ~20dB aislamiento</span>
                </li>
              </ul>
              <Link
                href="/productos/rewind-dilour"
                className="block mt-6 text-center bg-primary hover:bg-primary-light text-white font-bold py-3 rounded-xl transition"
              >
                Ver Rewind Dilour
              </Link>
            </div>
          </div>

          {/* Trust signals */}
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            <div className="bg-light rounded-xl p-6 text-center">
              <CurrencyEuroIcon className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="font-bold text-dark mb-1">Precio directo</h3>
              <p className="text-sm text-slate">Sin intermediarios. Somos fabricantes.</p>
            </div>
            <div className="bg-light rounded-xl p-6 text-center">
              <CheckCircleIcon className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="font-bold text-dark mb-1">Certificada Bfl-s1</h3>
              <p className="text-sm text-slate">Incluida de serie, sin coste extra.</p>
            </div>
            <div className="bg-light rounded-xl p-6 text-center">
              <TruckIcon className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="font-bold text-dark mb-1">Envío rápido</h3>
              <p className="text-sm text-slate">24h en Barcelona, 48-72h resto de España.</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-slate mb-4 leading-relaxed">
              ¿Buscas <strong>moqueta barata para tu evento o feria</strong>? La moqueta Rewind
              de Disstands ofrece el mejor precio del mercado sin comprometer la calidad ni el
              medio ambiente. Al eliminar el látex del proceso de fabricación, reducimos costes
              y producimos una moqueta 100% reciclable.
            </p>
            <p className="text-slate mb-4 leading-relaxed">
              Servimos toda España con precios directos de fábrica. Puedes{" "}
              <Link href="/moqueta-online" className="text-primary font-medium hover:underline">
                comprar moqueta online
              </Link>{" "}
              o solicitar presupuesto personalizado para tu proyecto. Consulta también nuestra{" "}
              <Link href="/moqueta-ferial" className="text-primary font-medium hover:underline">
                guía de moqueta ferial
              </Link>{" "}
              para más información técnica.
            </p>
          </div>
        </div>
      </section>

      <ProductShowcase />
      <PriceCalculator />

      <CTABand
        titulo="¿Necesitas moqueta barata?"
        subtitulo="Desde 2,20€/m² con certificación Bfl-s1 incluida. Presupuesto sin compromiso."
      />

      <Certificaciones />

      <FAQ faqs={faqsMoquetaBarata} titulo="Preguntas sobre precios de moqueta" />

      <CTABand />
    </>
  );
}
