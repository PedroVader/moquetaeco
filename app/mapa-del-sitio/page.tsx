import type { Metadata } from "next";
import Link from "next/link";
import { provincias, topMunicipios, tiposUso, getAllComarcas } from "@/lib/data";
import { getAllPosts } from "@/lib/blog";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import {
  MapPinIcon,
  BuildingOffice2Icon,
  TagIcon,
  NewspaperIcon,
  CubeIcon,
  MapIcon,
} from "@heroicons/react/24/outline";

const BASE_URL = "https://www.moquetaecologica.com";

export const metadata: Metadata = {
  title: "Mapa del Sitio | Moqueta Ecológica",
  description:
    "Todas las páginas de moquetaecologica.com. Encuentra moqueta ecológica por provincia, comarca, municipio o tipo de evento en Cataluña.",
  alternates: {
    canonical: `${BASE_URL}/mapa-del-sitio`,
  },
};

export default function MapaDelSitio() {
  const comarcas = getAllComarcas();
  const posts = getAllPosts();

  return (
    <>
      <Breadcrumb
        items={[
          { name: "Inicio", url: "/" },
          { name: "Mapa del Sitio", url: "/mapa-del-sitio" },
        ]}
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-dark mb-4">
            Mapa del Sitio
          </h1>
          <p className="text-lg text-slate mb-12 max-w-3xl">
            Todas las páginas de moquetaecologica.com organizadas por sección.
            Encuentra moqueta ecológica para tu evento en cualquier punto de
            Cataluña.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Páginas principales */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <CubeIcon className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-bold text-dark">Principal</h2>
              </div>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-primary hover:underline">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link
                    href="/productos"
                    className="text-primary hover:underline"
                  >
                    Productos
                  </Link>
                </li>
                <li>
                  <Link
                    href="/productos/rewind-flat"
                    className="text-primary hover:underline"
                  >
                    Rewind Flat
                  </Link>
                </li>
                <li>
                  <Link
                    href="/productos/rewind-dilour"
                    className="text-primary hover:underline"
                  >
                    Rewind Dilour
                  </Link>
                </li>
                <li>
                  <Link
                    href="/empresa"
                    className="text-primary hover:underline"
                  >
                    Sobre Nosotros
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contacto"
                    className="text-primary hover:underline"
                  >
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>

            {/* Provincias */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <MapIcon className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-bold text-dark">
                  Provincias ({provincias.length})
                </h2>
              </div>
              <ul className="space-y-2">
                {provincias.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/moqueta-ecologica-${p.slug}`}
                      className="text-primary hover:underline"
                    >
                      Moqueta Ecológica {p.nombre}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tipos de uso */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <TagIcon className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-bold text-dark">
                  Por tipo de evento ({provincias.length * tiposUso.length})
                </h2>
              </div>
              {provincias.map((p) => (
                <div key={p.slug} className="mb-4">
                  <h3 className="text-sm font-semibold text-dark mb-1">
                    {p.nombre}
                  </h3>
                  <ul className="space-y-1">
                    {tiposUso.map((uso) => (
                      <li key={`${p.slug}-${uso.slug}`}>
                        <Link
                          href={`/${p.slug}/${uso.slug}`}
                          className="text-sm text-primary hover:underline"
                        >
                          {uso.nombre} en {p.nombre}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Comarcas por provincia */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <BuildingOffice2Icon className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-bold text-dark">
                  Comarcas ({comarcas.length})
                </h2>
              </div>
              {provincias.map((p) => (
                <div key={p.slug} className="mb-4">
                  <h3 className="text-sm font-semibold text-dark mb-1">
                    {p.nombre}
                  </h3>
                  <ul className="space-y-1">
                    {p.comarcas.map((c) => (
                      <li key={c.slug}>
                        <Link
                          href={`/comarcas/${c.slug}`}
                          className="text-sm text-primary hover:underline"
                        >
                          {c.nombre}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Municipios */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <MapPinIcon className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-bold text-dark">
                  Municipios ({topMunicipios.length})
                </h2>
              </div>
              <ul className="space-y-1">
                {topMunicipios.map((m) => (
                  <li key={m.slug}>
                    <Link
                      href={`/municipios/${m.slug}`}
                      className="text-sm text-primary hover:underline"
                    >
                      {m.nombre}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Blog */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <NewspaperIcon className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-bold text-dark">
                  Blog ({posts.length + 1})
                </h2>
              </div>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/blog"
                    className="text-primary hover:underline font-medium"
                  >
                    Blog y Guías
                  </Link>
                </li>
                {posts.map((post) => (
                  <li key={post.slug}>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-sm text-primary hover:underline"
                    >
                      {post.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
