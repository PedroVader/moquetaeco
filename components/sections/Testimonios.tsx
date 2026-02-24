import { StarIcon } from "@heroicons/react/24/solid";

interface Testimonio {
  nombre: string;
  cargo: string;
  empresa: string;
  texto: string;
  estrellas: number;
}

const testimonios: Testimonio[] = [
  {
    nombre: "Marc R.",
    cargo: "Director de Producción",
    empresa: "Empresa de stands feriales, Barcelona",
    texto: "Llevamos 8 años usando Rewind en todos nuestros montajes. La calidad es idéntica a la moqueta convencional, pero podemos ofrecer a nuestros clientes una opción sostenible real. El certificado de reciclaje es un plus que cada vez más empresas nos piden.",
    estrellas: 5,
  },
  {
    nombre: "Laura M.",
    cargo: "Responsable de Sostenibilidad",
    empresa: "Organizadora de congresos, Girona",
    texto: "Desde que usamos moqueta Rewind, hemos reducido los residuos de nuestros eventos a prácticamente cero en lo que respecta a revestimiento de suelo. El servicio de recogida post-evento nos facilita mucho la gestión.",
    estrellas: 5,
  },
  {
    nombre: "Jordi P.",
    cargo: "Gerente",
    empresa: "Empresa de montaje de eventos, Tarragona",
    texto: "El stock permanente en 30 colores es lo que más valoramos. En este sector los plazos son muy cortos y saber que siempre hay material disponible en Barcelona nos da una tranquilidad enorme. Entrega en 24h cuando lo necesitamos.",
    estrellas: 5,
  },
];

export function Testimonios() {
  return (
    <section className="py-16 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-dark text-center mb-3">
          Lo que dicen los profesionales
        </h2>
        <p className="text-slate text-center mb-10 max-w-2xl mx-auto">
          Empresas del sector ferial y de eventos confían en la moqueta
          ecológica Rewind para sus proyectos en toda Cataluña.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonios.map((t) => (
            <div
              key={t.nombre}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              {/* Estrellas */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.estrellas }).map((_, i) => (
                  <StarIcon
                    key={i}
                    className="w-5 h-5 text-amber-400"
                  />
                ))}
              </div>

              {/* Texto */}
              <blockquote className="text-slate text-sm leading-relaxed mb-6">
                &ldquo;{t.texto}&rdquo;
              </blockquote>

              {/* Autor */}
              <div className="border-t border-gray-100 pt-4">
                <p className="font-semibold text-dark text-sm">{t.nombre}</p>
                <p className="text-xs text-slate">{t.cargo}</p>
                <p className="text-xs text-primary">{t.empresa}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
