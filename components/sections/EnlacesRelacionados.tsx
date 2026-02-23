import Link from "next/link";

export interface GrupoEnlaces {
  titulo: string;
  enlaces: { nombre: string; href: string }[];
}

interface EnlacesRelacionadosProps {
  grupos: GrupoEnlaces[];
}

export function EnlacesRelacionados({ grupos }: EnlacesRelacionadosProps) {
  if (grupos.length === 0) return null;

  const gridCols =
    grupos.length === 1
      ? "grid-cols-1"
      : grupos.length === 2
        ? "grid-cols-1 md:grid-cols-2"
        : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";

  return (
    <section className="py-16 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-dark mb-8 text-center">
          Te puede interesar
        </h2>
        <div className={`grid ${gridCols} gap-8`}>
          {grupos.map((grupo) => (
            <div key={grupo.titulo}>
              <h3 className="text-lg font-semibold text-dark mb-4">
                {grupo.titulo}
              </h3>
              <div className="flex flex-wrap gap-2">
                {grupo.enlaces.map((enlace) => (
                  <Link
                    key={enlace.href}
                    href={enlace.href}
                    className="bg-white hover:bg-primary hover:text-white text-slate text-sm px-4 py-2 rounded-full transition border border-gray-200 hover:border-primary"
                  >
                    {enlace.nombre}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
