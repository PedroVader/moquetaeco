import Image from "next/image";
import { CheckIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { moquetaFerialEco, moquetaDilourEco } from "@/lib/data";

export function ProductShowcase() {
  const productos = [
    {
      ...moquetaFerialEco,
      destacado: false,
      imagen: "/img-cards/moqueta-eco.png",
    },
    {
      ...moquetaDilourEco,
      destacado: true,
      imagen: "/img-cards/moqueta-dilour.png",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Moqueta Ecológica Rewind
          </h2>
          <p className="text-lg text-slate max-w-2xl mx-auto">
            Única en el mundo: 100% reciclable, sin látex, producida con 80% menos
            energía. La elección del Mobile World Congress.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {productos.map((producto) => (
            <div
              key={producto.slug}
              className={`relative rounded-2xl border-2 overflow-hidden transition-shadow hover:shadow-xl shadow-lg ${
                producto.destacado
                  ? "border-accent"
                  : "border-primary"
              }`}
            >
              {producto.destacado && (
                <div className="absolute top-4 right-4 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">
                  PREMIUM
                </div>
              )}

              {/* Imagen */}
              <div className="aspect-video bg-light flex items-center justify-center p-8 relative">
                <Image
                  src={producto.imagen}
                  alt={producto.nombre}
                  fill
                  className="object-contain p-4"
                />
              </div>

              {/* Contenido */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-sm text-primary font-medium">
                      {producto.marca}
                    </p>
                    <h3 className="text-2xl font-bold text-dark">
                      {producto.nombre}
                    </h3>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-slate">Desde</p>
                    <p className="text-2xl font-bold text-primary">
                      {producto.precio.min.toFixed(2).replace(".", ",")}€
                      <span className="text-sm font-normal">/m²</span>
                    </p>
                  </div>
                </div>

                {/* Specs principales */}
                <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                  <div className="bg-light rounded-lg p-3">
                    <p className="text-slate">Espesor</p>
                    <p className="font-semibold text-dark">
                      {producto.especificaciones.espesor}
                    </p>
                  </div>
                  <div className="bg-light rounded-lg p-3">
                    <p className="text-slate">Peso</p>
                    <p className="font-semibold text-dark">
                      {producto.especificaciones.pesoTotal}
                    </p>
                  </div>
                </div>

                {/* Características */}
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm text-slate">
                    <CheckIcon className="w-4 h-4 text-primary flex-shrink-0" />
                    100% reciclable - Sin látex
                  </li>
                  <li className="flex items-center gap-2 text-sm text-slate">
                    <CheckIcon className="w-4 h-4 text-primary flex-shrink-0" />
                    Certificación ignífuga Bfl-s1
                  </li>
                  <li className="flex items-center gap-2 text-sm text-slate">
                    <CheckIcon className="w-4 h-4 text-primary flex-shrink-0" />
                    {producto.colores} colores disponibles
                  </li>
                </ul>

                {/* CTA */}
                <a
                  href={producto.urlProducto}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 w-full py-3 rounded-lg font-semibold transition ${
                    producto.destacado
                      ? "bg-accent hover:bg-accent-dark text-white"
                      : "bg-primary hover:bg-primary-light text-white"
                  }`}
                >
                  Ver producto
                  <ArrowRightIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Nota colores */}
        <p className="text-center text-sm text-slate mt-8">
          Rewind Flat: 30 colores, rollo 2x50m. Rewind Dilour: 29 colores, rollo 2x40m.
          Precios IVA no incluido.
        </p>
      </div>
    </section>
  );
}
