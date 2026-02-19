import { MapPinIcon, TruckIcon, UsersIcon } from "@heroicons/react/24/outline";
import { provincias } from "@/lib/data";
import Link from "next/link";

interface AreasServicioProps {
  provinciaActual?: string;
}

export function AreasServicio({ provinciaActual }: AreasServicioProps) {
  return (
    <section id="provincias" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Servicio en toda Cataluña
          </h2>
          <p className="text-lg text-slate max-w-2xl mx-auto">
            Entrega e instalación profesional en las 4 provincias catalanas
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 mb-12">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-full mb-3">
              <MapPinIcon className="w-6 h-6" />
            </div>
            <p className="text-2xl md:text-3xl font-bold text-dark">4</p>
            <p className="text-sm text-slate">Provincias</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-full mb-3">
              <TruckIcon className="w-6 h-6" />
            </div>
            <p className="text-2xl md:text-3xl font-bold text-dark">42</p>
            <p className="text-sm text-slate">Comarcas</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-full mb-3">
              <UsersIcon className="w-6 h-6" />
            </div>
            <p className="text-2xl md:text-3xl font-bold text-dark">+25</p>
            <p className="text-sm text-slate">Años experiencia</p>
          </div>
        </div>

        {/* Provincias grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {provincias.map((provincia) => (
            <Link
              key={provincia.slug}
              href={`/moqueta-ecologica-${provincia.slug}`}
              className={`block p-6 rounded-xl border-2 transition hover:shadow-lg ${
                provinciaActual === provincia.slug
                  ? "border-primary bg-primary/5"
                  : "border-gray-200 hover:border-primary/50"
              }`}
            >
              <h3 className="text-xl font-bold text-dark mb-2">
                {provincia.nombre}
              </h3>
              <p className="text-sm text-slate mb-3">
                {provincia.municipiosPrincipales.slice(0, 4).join(", ")}...
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-light text-slate px-2 py-1 rounded">
                  {provincia.comarcas.length} comarcas
                </span>
                <span className="text-xs bg-light text-slate px-2 py-1 rounded">
                  {provincia.recintosFeriales.length} recintos
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center text-slate">
          <p>
            Almacén central en Barcelona · Instaladores propios ·{" "}
            <strong className="text-primary">Servicio urgente disponible</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
