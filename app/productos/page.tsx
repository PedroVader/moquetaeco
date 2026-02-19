import type { Metadata } from "next";
import Link from "next/link";
import { moquetaFerialEco, moquetaDilourEco } from "@/lib/data/productos";
import { CTABand } from "@/components/sections";
import {
  generarLocalBusinessSchema,
  generarBreadcrumbSchema,
} from "@/lib/seo/schema";

const BASE_URL = "https://www.moquetaecologica.com";

export const metadata: Metadata = {
  title: "Productos Moqueta Ecológica Rewind | Desde 2,10€/m²",
  description:
    "Catálogo de moqueta ecológica Rewind: Flat (desde 2,10€/m²) y Dilour premium (desde 4,05€/m²). 100% reciclable, sin látex, certificada Bfl-s1. ☎ 934 850 085",
  openGraph: {
    title: "Productos Moqueta Ecológica Rewind | Disstands",
    description:
      "Moqueta ecológica 100% reciclable. Rewind Flat desde 2,10€/m² y Dilour desde 4,05€/m².",
    url: `${BASE_URL}/productos`,
    type: "website",
    locale: "es_ES",
    images: [
      {
        url: `${BASE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Productos Moqueta Ecológica Rewind - Disstands",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Productos Moqueta Ecológica Rewind | Disstands",
    description:
      "Moqueta ecológica 100% reciclable. Rewind Flat desde 2,10€/m² y Dilour desde 4,05€/m².",
    images: [`${BASE_URL}/og-image.jpg`],
  },
  alternates: {
    canonical: `${BASE_URL}/productos`,
  },
};

const productos = [
  {
    data: moquetaFerialEco,
    href: "/productos/rewind-flat",
    badge: "Más vendida",
  },
  {
    data: moquetaDilourEco,
    href: "/productos/rewind-dilour",
    badge: "Premium",
  },
];

export default function ProductosPage() {
  const localBusinessSchema = generarLocalBusinessSchema();
  const breadcrumbSchema = generarBreadcrumbSchema([
    { name: "Inicio", url: BASE_URL },
    { name: "Productos", url: `${BASE_URL}/productos` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-light text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Moqueta Ecológica Rewind
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            La única moqueta del mundo 100% reciclable y sin látex. Dos
            opciones para cada necesidad.
          </p>
        </div>
      </section>

      {/* Productos */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {productos.map(({ data, href, badge }) => (
              <Link
                key={href}
                href={href}
                className="group border-2 border-gray-200 hover:border-primary rounded-2xl p-8 transition-all hover:shadow-lg"
              >
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-dark group-hover:text-primary transition">
                    {data.marca}
                  </h2>
                  <span className="bg-accent/10 text-accent text-sm font-semibold px-3 py-1 rounded-full">
                    {badge}
                  </span>
                </div>

                <p className="text-slate mb-6">{data.nombre}</p>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate">Espesor</span>
                    <span className="font-medium">
                      {data.especificaciones.espesor}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate">Peso</span>
                    <span className="font-medium">
                      {data.especificaciones.pesoTotal}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate">Colores</span>
                    <span className="font-medium">
                      {data.colores} disponibles
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate">Certificación</span>
                    <span className="font-medium">
                      {data.especificaciones.clasificacionFuego}
                    </span>
                  </div>
                </div>

                <div className="bg-light rounded-xl p-4 mb-6">
                  <p className="text-sm text-slate mb-1">Desde</p>
                  <p className="text-3xl font-bold text-primary">
                    {data.precio.min.toFixed(2).replace(".", ",")}€
                    <span className="text-base font-normal text-slate">
                      /m²
                    </span>
                  </p>
                  <p className="text-xs text-slate">IVA no incluido</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className="bg-cert-eco/10 text-cert-eco text-xs font-medium px-2 py-1 rounded">
                    100% Reciclable
                  </span>
                  <span className="bg-fire-safety/10 text-fire-safety text-xs font-medium px-2 py-1 rounded">
                    Bfl-s1
                  </span>
                  <span className="bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded">
                    Sin látex
                  </span>
                </div>

                <p className="mt-6 text-accent font-semibold group-hover:underline">
                  Ver producto completo →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        titulo="¿Necesitas ayuda para elegir?"
        subtitulo="Te asesoramos sin compromiso. Más de 25 años de experiencia."
      />
    </>
  );
}
