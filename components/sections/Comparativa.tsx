import {
  SparklesIcon,
  BuildingOfficeIcon,
  CheckCircleIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";

const comparativaEco = [
  { texto: "100% reciclable - Monomaterial sin látex", positivo: true },
  { texto: "0% agua en producción", positivo: true },
  { texto: "-83% gas en fabricación", positivo: true },
  { texto: "-35% CO₂ emisiones", positivo: true },
  { texto: "Ciclo circular - Vida útil casi infinita", positivo: true },
];

const comparativaConvencional = [
  { texto: "Mezcla de materiales - Difícil de reciclar", positivo: false },
  { texto: "Consumo intensivo de agua", positivo: false },
  { texto: "Alto consumo de gas natural", positivo: false },
  { texto: "Mayores emisiones de CO₂", positivo: false },
  { texto: "Residuo al vertedero tras evento", positivo: false },
];

export function Comparativa() {
  return (
    <section className="py-16 md:py-24 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Moqueta Ecológica vs Convencional
          </h2>
          <p className="text-lg text-slate max-w-2xl mx-auto">
            La moqueta Rewind reduce drásticamente el impacto ambiental
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Rewind Ecológica */}
          <div className="bg-white rounded-2xl p-8 border-2 border-primary shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-primary text-white p-3 rounded-full">
                <SparklesIcon className="w-6 h-6" />
              </span>
              <h3 className="text-2xl font-bold text-primary">
                Rewind Ecológica
              </h3>
            </div>
            <ul className="space-y-4">
              {comparativaEco.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircleIcon className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-dark">{item.texto}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-sm text-slate">
                <strong className="text-primary">Elegida por:</strong> Mobile
                World Congress, Alimentaria, Smart City Expo y las principales
                ferias de Europa.
              </p>
            </div>
          </div>

          {/* Convencional */}
          <div className="bg-gray-100 rounded-2xl p-8 border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-gray-400 text-white p-3 rounded-full">
                <BuildingOfficeIcon className="w-6 h-6" />
              </span>
              <h3 className="text-2xl font-bold text-gray-500">
                Moqueta Convencional
              </h3>
            </div>
            <ul className="space-y-4 text-gray-600">
              {comparativaConvencional.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <XCircleIcon className="w-6 h-6 text-gray-400 flex-shrink-0" />
                  <span>{item.texto}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-gray-300">
              <p className="text-sm text-gray-500">
                Las moquetas convencionales con látex no pueden reciclarse
                completamente y acaban en vertederos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
