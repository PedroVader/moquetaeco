import {
  BeakerIcon,
  BoltIcon,
  SparklesIcon,
  FireIcon,
  NoSymbolIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";

const beneficios = [
  {
    icono: BeakerIcon,
    valor: "0%",
    titulo: "Agua",
    descripcion: "Producción sin uso de agua",
    color: "text-blue-500",
  },
  {
    icono: BoltIcon,
    valor: "-80%",
    titulo: "Energía",
    descripcion: "Reducción consumo energético",
    color: "text-yellow-500",
  },
  {
    icono: SparklesIcon,
    valor: "-35%",
    titulo: "CO₂",
    descripcion: "Reducción emisiones",
    color: "text-primary",
  },
  {
    icono: FireIcon,
    valor: "-83%",
    titulo: "Gas",
    descripcion: "Reducción consumo de gas",
    color: "text-orange-500",
  },
  {
    icono: NoSymbolIcon,
    valor: "0%",
    titulo: "Látex",
    descripcion: "Sin látex - Hipoalergénica",
    color: "text-red-500",
  },
  {
    icono: ArrowPathIcon,
    valor: "100%",
    titulo: "Reciclable",
    descripcion: "Economía circular completa",
    color: "text-primary",
  },
];

export function BeneficiosEco() {
  return (
    <section className="py-16 md:py-24 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Sostenibilidad Real
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Impacto Ambiental Reducido
          </h2>
          <p className="text-lg text-slate max-w-2xl mx-auto">
            La moqueta Rewind reduce drásticamente el impacto ambiental en su
            producción comparada con moquetas convencionales.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {beneficios.map((beneficio) => (
            <div
              key={beneficio.titulo}
              className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition"
            >
              <div
                className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 mb-4 ${beneficio.color}`}
              >
                <beneficio.icono className="w-6 h-6" />
              </div>
              <p className="text-3xl font-bold text-dark mb-1">
                {beneficio.valor}
              </p>
              <p className="text-sm font-semibold text-dark mb-1">
                {beneficio.titulo}
              </p>
              <p className="text-xs text-slate">{beneficio.descripcion}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl font-bold text-dark mb-4">
            Economía Circular Completa
          </h3>
          <p className="text-slate max-w-3xl mx-auto mb-6">
            Al ser <strong>monomaterial</strong> (100% polipropileno sin látex),
            nuestra moqueta puede reciclarse completamente al final de su vida
            útil. El material se transforma en granza para fabricar nuevos
            productos, cerrando el ciclo y dando una{" "}
            <strong>vida útil casi infinita</strong> al material.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              Recogida post-evento
            </span>
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              Reciclaje garantizado
            </span>
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              Certificado de reciclaje disponible
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
