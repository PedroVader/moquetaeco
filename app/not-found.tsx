import Link from "next/link";
import { provincias, tiposUso } from "@/lib/data";
import { HomeIcon, MapPinIcon, TagIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { empresa } from "@/lib/data";

export default function NotFound() {
  return (
    <section className="py-20 bg-white min-h-[60vh]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-6xl font-extrabold text-primary mb-4">404</p>
        <h1 className="text-3xl font-bold text-dark mb-4">
          Página no encontrada
        </h1>
        <p className="text-lg text-slate mb-10 max-w-xl mx-auto">
          La página que buscas no existe o ha sido movida. Aquí tienes enlaces
          para encontrar moqueta ecológica en tu zona.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left mb-12">
          {/* Home */}
          <Link
            href="/"
            className="flex items-center gap-3 bg-light rounded-xl p-5 hover:bg-primary/10 transition"
          >
            <HomeIcon className="w-6 h-6 text-primary flex-shrink-0" />
            <div>
              <p className="font-semibold text-dark">Inicio</p>
              <p className="text-sm text-slate">Página principal</p>
            </div>
          </Link>

          {/* Provincias */}
          {provincias.map((p) => (
            <Link
              key={p.slug}
              href={`/moqueta-ecologica-${p.slug}`}
              className="flex items-center gap-3 bg-light rounded-xl p-5 hover:bg-primary/10 transition"
            >
              <MapPinIcon className="w-6 h-6 text-primary flex-shrink-0" />
              <div>
                <p className="font-semibold text-dark">{p.nombre}</p>
                <p className="text-sm text-slate">
                  {p.comarcas.length} comarcas
                </p>
              </div>
            </Link>
          ))}

          {/* Productos */}
          <Link
            href="/productos"
            className="flex items-center gap-3 bg-light rounded-xl p-5 hover:bg-primary/10 transition"
          >
            <TagIcon className="w-6 h-6 text-primary flex-shrink-0" />
            <div>
              <p className="font-semibold text-dark">Productos</p>
              <p className="text-sm text-slate">Rewind Flat y Dilour</p>
            </div>
          </Link>
        </div>

        {/* Tipos de uso */}
        <div className="mb-12">
          <h2 className="text-lg font-semibold text-dark mb-4">
            Por tipo de evento
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {tiposUso.map((uso) => (
              <Link
                key={uso.slug}
                href={`/barcelona/${uso.slug}`}
                className="bg-light hover:bg-primary hover:text-white text-slate text-sm px-4 py-2 rounded-full transition"
              >
                {uso.nombre}
              </Link>
            ))}
          </div>
        </div>

        {/* Mapa del sitio + contacto */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/mapa-del-sitio"
            className="text-primary font-medium hover:underline"
          >
            Ver mapa del sitio completo
          </Link>
          <span className="hidden sm:inline text-slate">|</span>
          <a
            href={`tel:${empresa.telefonoInternacional}`}
            className="flex items-center gap-2 text-primary font-medium hover:underline"
          >
            <PhoneIcon className="w-4 h-4" />
            {empresa.telefono}
          </a>
        </div>
      </div>
    </section>
  );
}
