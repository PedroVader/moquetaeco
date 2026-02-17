import { FireIcon, ShieldCheckIcon, ArrowPathIcon, HeartIcon } from "@heroicons/react/24/outline";

const certificaciones = [
  {
    icono: FireIcon,
    codigo: "Bfl-s1",
    titulo: "Certificación Ignífuga",
    descripcion:
      "Máxima clasificación de reacción al fuego para suelos. Obligatoria en todos los recintos feriales y espacios públicos.",
    color: "bg-fire-safety",
  },
  {
    icono: ShieldCheckIcon,
    codigo: "GUT",
    titulo: "Certificación GUT",
    descripcion:
      "Sello de calidad ambiental que garantiza fabricación sin sustancias nocivas y respeto al medio ambiente.",
    color: "bg-cert-eco",
  },
  {
    icono: ArrowPathIcon,
    codigo: "100%",
    titulo: "100% Reciclable",
    descripcion:
      "Monomaterial sin látex que permite reciclaje completo al final de vida, cerrando el ciclo de economía circular.",
    color: "bg-primary",
  },
  {
    icono: HeartIcon,
    codigo: "0%",
    titulo: "Sin Látex",
    descripcion:
      "Fabricada completamente sin látex, hipoalergénica y apta para personas con sensibilidad.",
    color: "bg-accent",
  },
];

export function Certificaciones() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Certificaciones y Garantías
          </h2>
          <p className="text-lg text-slate max-w-2xl mx-auto">
            Nuestra moqueta cumple con las normativas más exigentes de seguridad
            y sostenibilidad
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificaciones.map((cert) => (
            <div
              key={cert.codigo}
              className="bg-light rounded-xl p-6 text-center hover:shadow-md transition"
            >
              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${cert.color} text-white mb-4`}
              >
                <cert.icono className="w-8 h-8" />
              </div>
              <div className="text-2xl font-bold text-dark mb-1">
                {cert.codigo}
              </div>
              <h3 className="text-lg font-semibold text-dark mb-2">
                {cert.titulo}
              </h3>
              <p className="text-sm text-slate">{cert.descripcion}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate">
            Todos nuestros productos incluyen documentación de certificaciones.
            <br />
            <a
              href="https://www.disstands.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-medium hover:underline"
            >
              Solicita fichas técnicas completas
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
