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
import { faqsMoquetaOnline, moquetaFerialEco, empresa } from "@/lib/data";
import { generarMetadataPillar } from "@/lib/seo/metadata";
import {
  generarLocalBusinessSchema,
  generarProductSchema,
  generarFAQSchema,
  generarBreadcrumbSchema,
} from "@/lib/seo/schema";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { TruckIcon, PhoneIcon, ClockIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";

const BASE_URL = "https://www.moquetaecologica.com";

export const metadata: Metadata = generarMetadataPillar("online");

export default function MoquetaOnlinePage() {
  const localBusinessSchema = generarLocalBusinessSchema();
  const productSchema = generarProductSchema(moquetaFerialEco);
  const faqSchema = generarFAQSchema(faqsMoquetaOnline);
  const breadcrumbItems = [
    { name: "Inicio", url: BASE_URL },
    { name: "Comprar Moqueta Online", url: `${BASE_URL}/moqueta-online` },
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
        titulo="Comprar Moqueta Online — Envío a Toda España | Desde 2,20€/m²"
        subtitulo="Compra moqueta ferial ecológica Rewind® online. Envío rápido a toda España peninsular. 100% reciclable, sin látex, certificada Bfl-s1."
        ubicacion="España"
      />

      {/* Proceso paso a paso */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-dark mb-8 text-center">
            Cómo comprar moqueta online en 3 pasos
          </h2>

          <div className="grid sm:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-extrabold text-primary">1</span>
              </div>
              <h3 className="font-bold text-dark mb-2">Elige tu moqueta</h3>
              <p className="text-sm text-slate">
                Selecciona entre{" "}
                <Link href="/productos/rewind-flat" className="text-primary hover:underline">Rewind Flat</Link>
                {" "}(desde 2,20€/m²) o{" "}
                <Link href="/productos/rewind-dilour" className="text-primary hover:underline">Rewind Dilour</Link>
                {" "}(desde 4,05€/m²). 30 colores disponibles.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-extrabold text-primary">2</span>
              </div>
              <h3 className="font-bold text-dark mb-2">Solicita presupuesto</h3>
              <p className="text-sm text-slate">
                Llámanos al{" "}
                <a href={`tel:${empresa.telefonoInternacional}`} className="text-primary hover:underline font-medium">
                  {empresa.telefono}
                </a>
                , escríbenos a{" "}
                <a href={`mailto:${empresa.emailVentas}`} className="text-primary hover:underline">
                  {empresa.emailVentas}
                </a>
                {" "}o usa el formulario de contacto.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-extrabold text-primary">3</span>
              </div>
              <h3 className="font-bold text-dark mb-2">Recibe tu pedido</h3>
              <p className="text-sm text-slate">
                Envío rápido a toda España. 24h en Barcelona, 24-48h en Cataluña, 48-72h resto peninsular.
              </p>
            </div>
          </div>

          {/* Zonas de envío */}
          <h2 className="text-2xl font-bold text-dark mb-6 text-center">
            Zonas y plazos de envío
          </h2>

          <div className="overflow-x-auto mb-12">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-primary">
                  <th className="text-left py-3 px-4 font-bold text-dark">Zona</th>
                  <th className="text-left py-3 px-4 font-bold text-dark">Plazo estándar</th>
                  <th className="text-left py-3 px-4 font-bold text-dark">Servicio urgente</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4">
                    <Link href="/moqueta-ferial-barcelona" className="text-primary hover:underline font-medium">
                      Barcelona
                    </Link>
                    {" "}y área metropolitana
                  </td>
                  <td className="py-3 px-4 text-slate">24h</td>
                  <td className="py-3 px-4 font-semibold text-accent">Mismo día</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4">
                    <Link href="/moqueta-ferial-girona" className="text-primary hover:underline">Girona</Link>,{" "}
                    <Link href="/moqueta-ferial-tarragona" className="text-primary hover:underline">Tarragona</Link>,{" "}
                    <Link href="/moqueta-ferial-lleida" className="text-primary hover:underline">Lleida</Link>
                  </td>
                  <td className="py-3 px-4 text-slate">24-48h</td>
                  <td className="py-3 px-4 font-semibold text-accent">24h</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4">España peninsular</td>
                  <td className="py-3 px-4 text-slate">48-72h</td>
                  <td className="py-3 px-4 font-semibold text-accent">24-48h</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Trust signals */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            <div className="bg-light rounded-xl p-5 text-center">
              <TruckIcon className="w-8 h-8 text-primary mx-auto mb-2" />
              <h3 className="font-bold text-dark text-sm">Envío a toda España</h3>
            </div>
            <div className="bg-light rounded-xl p-5 text-center">
              <ClockIcon className="w-8 h-8 text-primary mx-auto mb-2" />
              <h3 className="font-bold text-dark text-sm">Entrega en 24-72h</h3>
            </div>
            <div className="bg-light rounded-xl p-5 text-center">
              <ShieldCheckIcon className="w-8 h-8 text-primary mx-auto mb-2" />
              <h3 className="font-bold text-dark text-sm">Certificación Bfl-s1</h3>
            </div>
            <div className="bg-light rounded-xl p-5 text-center">
              <PhoneIcon className="w-8 h-8 text-primary mx-auto mb-2" />
              <h3 className="font-bold text-dark text-sm">Asesoramiento gratuito</h3>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-slate mb-4 leading-relaxed">
              Comprar <strong>moqueta online</strong> con Disstands es fácil y seguro. Somos
              fabricantes de la marca Rewind® con más de 25 años de experiencia en el sector
              ferial. Stock permanente de 30 colores en nuestro almacén de Barcelona para
              entrega inmediata.
            </p>
            <p className="text-slate mb-4 leading-relaxed">
              ¿Buscas el mejor precio? Consulta nuestra página de{" "}
              <Link href="/moqueta-barata" className="text-primary font-medium hover:underline">
                moqueta barata desde 2,20€/m²
              </Link>
              . ¿Necesitas moqueta para una feria o evento? Lee nuestra{" "}
              <Link href="/moqueta-ferial" className="text-primary font-medium hover:underline">
                guía de moqueta ferial
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <ProductShowcase />
      <PriceCalculator />

      <CTABand
        titulo="¿Listo para comprar moqueta online?"
        subtitulo="Presupuesto sin compromiso. Envío a toda España. Desde 2,20€/m²."
      />

      <Certificaciones />

      <FAQ faqs={faqsMoquetaOnline} titulo="Preguntas sobre comprar moqueta online" />

      <CTABand />
    </>
  );
}
