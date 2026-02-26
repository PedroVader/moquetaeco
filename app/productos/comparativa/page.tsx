import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PhoneIcon } from "@heroicons/react/24/outline";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { empresa } from "@/lib/data";
import {
  generarLocalBusinessSchema,
  generarBreadcrumbSchema,
} from "@/lib/seo/schema";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { CTABand, FAQ } from "@/components/sections";
import { faqsGenerales } from "@/lib/data/faqs";

const BASE_URL = "https://www.moquetaecologica.com";

export const metadata: Metadata = {
  title:
    "Rewind Flat vs Dilour: Comparativa Completa | ¿Cuál Elegir?",
  description:
    "Comparativa detallada Rewind Flat vs Dilour: espesor, peso, precio, textura, uso ideal. Tabla comparativa + guía para elegir la moqueta ecológica perfecta para tu evento.",
  openGraph: {
    title: "Rewind Flat vs Dilour: Comparativa | Disstands",
    description:
      "Tabla comparativa completa: espesor, precio, textura y uso ideal de cada moqueta ecológica Rewind.",
    url: `${BASE_URL}/productos/comparativa`,
    type: "article",
    locale: "es_ES",
    images: [
      {
        url: `${BASE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Comparativa Rewind Flat vs Dilour",
      },
    ],
  },
  alternates: {
    canonical: `${BASE_URL}/productos/comparativa`,
  },
};

const comparativa = [
  { feature: "Nombre comercial", flat: "Rewind Flat", dilour: "Rewind Dilour" },
  { feature: "Tipo", flat: "Moqueta ferial punzonada", dilour: "Moqueta premium Dilour" },
  { feature: "Espesor", flat: "2 mm", dilour: "4 mm" },
  { feature: "Peso", flat: "230 g/m²", dilour: "650 g/m²" },
  { feature: "Textura", flat: "Lisa (punzonada)", dilour: "Aterciopelada (Dilour)" },
  { feature: "Colores en stock", flat: "30", dilour: "29" },
  { feature: "Ancho del rollo", flat: "2 m", dilour: "2 m" },
  { feature: "Largo del rollo", flat: "50 m (100 m²)", dilour: "50 m (100 m²)" },
  { feature: "Precio desde", flat: "2,10€/m²", dilour: "4,05€/m²", highlight: true },
  { feature: "Precio hasta", flat: "2,65€/m²", dilour: "4,65€/m²", highlight: true },
  { feature: "Composición", flat: "100% polipropileno", dilour: "100% polipropileno" },
  { feature: "Látex", flat: "Sin látex", dilour: "Sin látex" },
  { feature: "Certificación fuego", flat: "Bfl-s1", dilour: "Bfl-s1" },
  { feature: "Reciclable", flat: "100%", dilour: "100%" },
  { feature: "Absorción acústica", flat: "Baja", dilour: "~20 dB" },
  { feature: "Confort pisada", flat: "Firme", dilour: "Suave, acolchada" },
];

const usosFlat = [
  "Ferias comerciales con gran superficie",
  "Pasillos y zonas comunes",
  "Eventos de 1-3 días",
  "Presupuesto ajustado",
  "Instalación y desmontaje rápido",
  "Espacios de alto tránsito",
];

const usosDilour = [
  "Stands VIP y de alto standing",
  "Showrooms y salas de reuniones",
  "Congresos y zonas lounge",
  "Bodas y eventos premium",
  "Espacios donde importa el confort acústico",
  "Marcas de lujo y sector premium",
];

export default function ComparativaPage() {
  const localBusinessSchema = generarLocalBusinessSchema();
  const breadcrumbItems = [
    { name: "Inicio", url: BASE_URL },
    { name: "Productos", url: `${BASE_URL}/productos` },
    { name: "Comparativa Flat vs Dilour", url: `${BASE_URL}/productos/comparativa` },
  ];
  const breadcrumbSchema = generarBreadcrumbSchema(breadcrumbItems);

  const faqsComparativa = [
    {
      pregunta: "¿Cuál es la diferencia principal entre Rewind Flat y Dilour?",
      respuesta:
        "La diferencia principal es el espesor y la textura. Flat tiene 2 mm y acabado liso punzonado (desde 2,10€/m²), ideal para ferias. Dilour tiene 4 mm con acabado aterciopelado (desde 4,05€/m²), ideal para stands premium y congresos. Ambas son 100% reciclables, sin látex y certificadas Bfl-s1.",
    },
    {
      pregunta: "¿Puedo combinar Flat y Dilour en el mismo stand?",
      respuesta:
        "Sí, es una práctica muy habitual entre montadores profesionales. Se usa Dilour en la zona de reuniones o recepción y Flat en el resto del stand. Ambas líneas comparten colores, así que se pueden combinar manteniendo el mismo tono.",
    },
    {
      pregunta: "¿Cuál es más resistente al tránsito?",
      respuesta:
        "Ambas están diseñadas para tránsito intenso en ferias. Flat, al ser más fina y lisa, soporta mejor el arrastre de objetos pesados. Dilour es más suave al pisar pero igual de duradera para el uso ferial estándar.",
    },
    ...faqsGenerales.slice(0, 3),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
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

      {/* Hero */}
      <section className="relative text-white py-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-img/rewind-hero.webp"
            alt="Comparativa moqueta ecológica Rewind Flat vs Dilour"
            width={1600}
            height={900}
            className="object-cover w-full h-full"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Rewind Flat vs Dilour
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Comparativa completa entre nuestras dos moquetas ecológicas.
            Descubre cuál se adapta mejor a tu evento.
          </p>
        </div>
      </section>

      {/* Resumen rápido */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
            <h2 className="text-xl font-bold text-dark mb-4">
              Resumen rápido: ¿cuál elegir?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-primary mb-2">
                  Elige Flat si...
                </h3>
                <ul className="space-y-1 text-sm text-slate">
                  <li>Buscas la opción más económica</li>
                  <li>Tu evento tiene gran superficie</li>
                  <li>Prioridad: precio y funcionalidad</li>
                </ul>
                <p className="mt-3 text-primary font-bold text-lg">
                  Desde 2,10€/m²
                </p>
              </div>
              <div>
                <h3 className="font-bold text-primary mb-2">
                  Elige Dilour si...
                </h3>
                <ul className="space-y-1 text-sm text-slate">
                  <li>Necesitas acabado premium</li>
                  <li>Tienes un stand VIP o showroom</li>
                  <li>Prioridad: confort y estética</li>
                </ul>
                <p className="mt-3 text-primary font-bold text-lg">
                  Desde 4,05€/m²
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabla comparativa */}
      <section className="py-12 bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-dark mb-8 text-center">
            Tabla comparativa completa
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="text-left px-4 py-3 font-semibold">
                    Característica
                  </th>
                  <th className="text-center px-4 py-3 font-semibold">
                    Rewind Flat
                  </th>
                  <th className="text-center px-4 py-3 font-semibold">
                    Rewind Dilour
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparativa.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={`border-t border-gray-100 ${
                      row.highlight
                        ? "bg-accent/5 font-semibold"
                        : i % 2 === 0
                          ? "bg-white"
                          : "bg-light/50"
                    }`}
                  >
                    <td className="px-4 py-3 text-sm text-dark font-medium">
                      {row.feature}
                    </td>
                    <td className="px-4 py-3 text-sm text-center text-slate">
                      {row.flat}
                    </td>
                    <td className="px-4 py-3 text-sm text-center text-slate">
                      {row.dilour}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate text-center mt-4">
            Precios IVA no incluido. Pueden variar según stock y cantidad.
          </p>
        </div>
      </section>

      {/* Usos ideales */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-dark mb-8 text-center">
            ¿Para qué tipo de evento es mejor cada una?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-2 border-primary/20 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-primary text-white text-sm font-bold px-3 py-1 rounded-full">
                  Flat
                </span>
                <span className="text-lg font-bold text-dark">
                  Más vendida
                </span>
              </div>
              <ul className="space-y-3">
                {usosFlat.map((uso) => (
                  <li key={uso} className="flex items-start gap-2 text-sm">
                    <CheckIcon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-slate">{uso}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/productos/rewind-flat"
                className="inline-block mt-6 text-primary font-semibold hover:underline"
              >
                Ver Rewind Flat →
              </Link>
            </div>
            <div className="border-2 border-accent/20 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-accent text-white text-sm font-bold px-3 py-1 rounded-full">
                  Dilour
                </span>
                <span className="text-lg font-bold text-dark">Premium</span>
              </div>
              <ul className="space-y-3">
                {usosDilour.map((uso) => (
                  <li key={uso} className="flex items-start gap-2 text-sm">
                    <CheckIcon className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-slate">{uso}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/productos/rewind-dilour"
                className="inline-block mt-6 text-accent font-semibold hover:underline"
              >
                Ver Rewind Dilour →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Lo que comparten */}
      <section className="py-12 bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-dark mb-6 text-center">
            Lo que ambas tienen en común
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "100% reciclable (monomaterial)",
              "Sin látex ni aditivos químicos",
              "Certificación ignífuga Bfl-s1",
              "100% polipropileno",
              "0 litros de agua en fabricación",
              "-80% consumo energético",
              "30 colores en stock permanente",
              "Rollo de 2 m × 50 m",
              "Certificado de reciclaje ESG",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 bg-white rounded-lg p-3"
              >
                <CheckIcon className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm text-dark">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consejo profesional */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-accent/5 border border-accent/20 rounded-2xl p-6 md:p-8">
            <h2 className="text-xl font-bold text-dark mb-3">
              Consejo profesional: combínalas
            </h2>
            <p className="text-slate mb-4">
              Muchos montadores de stands profesionales combinan ambos productos
              en el mismo espacio: <strong>Dilour en la zona de reuniones</strong>{" "}
              (confort, estética premium) y <strong>Flat en el resto del stand</strong>{" "}
              (funcionalidad, precio). Como ambas líneas comparten colores,
              puedes mantener el mismo tono con diferente acabado.
            </p>
            <p className="text-slate">
              ¿No estás seguro? Te enviamos{" "}
              <strong>muestras gratuitas</strong> de los colores que te interesen
              para que compares en persona.{" "}
              <Link href="/contacto" className="text-primary font-semibold hover:underline">
                Solicita muestras →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABand
        titulo="¿Necesitas ayuda para elegir?"
        subtitulo="Te asesoramos sin compromiso. Más de 25 años de experiencia en moqueta ferial."
      />

      {/* FAQ */}
      <FAQ
        faqs={faqsComparativa}
        titulo="Preguntas frecuentes sobre Flat vs Dilour"
      />

      {/* CTA final */}
      <section className="py-12 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-dark mb-4">
            Pide presupuesto ahora
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${empresa.telefonoInternacional}`}
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-light text-white font-bold py-3 px-8 rounded-xl transition"
            >
              <PhoneIcon className="w-5 h-5" />
              {empresa.telefono}
            </a>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold py-3 px-8 rounded-xl transition"
            >
              Formulario de contacto
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
