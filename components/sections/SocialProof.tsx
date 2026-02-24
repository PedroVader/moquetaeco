import {
  BuildingOffice2Icon,
  CalendarIcon,
  MapPinIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

const cifras = [
  {
    valor: "+25",
    unidad: "años",
    descripcion: "de experiencia en el sector ferial",
    icon: CalendarIcon,
  },
  {
    valor: "100K+",
    unidad: "m²/año",
    descripcion: "de moqueta instalada en Cataluña",
    icon: SparklesIcon,
  },
  {
    valor: "4",
    unidad: "provincias",
    descripcion: "de Cataluña con cobertura directa",
    icon: MapPinIcon,
  },
  {
    valor: "30",
    unidad: "colores",
    descripcion: "disponibles en stock permanente",
    icon: BuildingOffice2Icon,
  },
];

const clientesDestacados = [
  "Mobile World Congress",
  "Alimentaria",
  "Smart City Expo",
  "Hostelco",
  "Automobile Barcelona",
  "Fira Barcelona",
  "Graphispag",
  "Expoquimia",
  "Fira de Reus",
  "Palau de Congressos de Tarragona",
];

export function SocialProof() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cifras */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {cifras.map((cifra) => (
            <div
              key={cifra.descripcion}
              className="text-center p-6 rounded-2xl bg-light"
            >
              <cifra.icon className="w-7 h-7 text-primary mx-auto mb-3" />
              <p className="text-3xl md:text-4xl font-extrabold text-dark">
                {cifra.valor}
                <span className="text-lg font-medium text-slate ml-1">
                  {cifra.unidad}
                </span>
              </p>
              <p className="text-sm text-slate mt-1">{cifra.descripcion}</p>
            </div>
          ))}
        </div>

        {/* Logos / Eventos de confianza */}
        <div className="text-center">
          <p className="text-sm font-semibold text-slate uppercase tracking-wider mb-6">
            Presente en los principales eventos de Cataluña
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {clientesDestacados.map((cliente) => (
              <span
                key={cliente}
                className="bg-light text-dark text-sm font-medium px-4 py-2 rounded-full border border-gray-200"
              >
                {cliente}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
