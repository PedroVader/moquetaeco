import { moquetaFerialEco, moquetaDilourEco } from "@/lib/data";

export function Especificaciones() {
  const specs = [
    {
      label: "Composición",
      flat: moquetaFerialEco.especificaciones.composicion,
      dilour: moquetaDilourEco.especificaciones.composicion,
    },
    {
      label: "Látex",
      flat: "Sin látex",
      dilour: "Sin látex",
    },
    {
      label: "Reciclable",
      flat: "100%",
      dilour: "100%",
    },
    {
      label: "Espesor",
      flat: moquetaFerialEco.especificaciones.espesor,
      dilour: moquetaDilourEco.especificaciones.espesor,
    },
    {
      label: "Peso",
      flat: moquetaFerialEco.especificaciones.pesoTotal,
      dilour: moquetaDilourEco.especificaciones.pesoTotal,
    },
    {
      label: "Clasificación fuego",
      flat: moquetaFerialEco.especificaciones.clasificacionFuego,
      dilour: moquetaDilourEco.especificaciones.clasificacionFuego,
    },
    {
      label: "Formato",
      flat: `Rollo ${moquetaFerialEco.formato.ancho} x ${moquetaFerialEco.formato.largo}`,
      dilour: `Rollo ${moquetaDilourEco.formato.ancho} x ${moquetaDilourEco.formato.largo}`,
    },
    {
      label: "Colores",
      flat: `${moquetaFerialEco.colores} colores`,
      dilour: `${moquetaDilourEco.colores} colores`,
    },
    {
      label: "Precio desde",
      flat: `${moquetaFerialEco.precio.min.toFixed(2).replace(".", ",")}€/m²`,
      dilour: `${moquetaDilourEco.precio.min.toFixed(2).replace(".", ",")}€/m²`,
      highlight: true,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Especificaciones Técnicas
          </h2>
          <p className="text-lg text-slate">
            Comparativa detallada de nuestros productos ecológicos
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-4 px-4 font-semibold text-slate">
                  Característica
                </th>
                <th className="text-center py-4 px-4">
                  <div className="font-bold text-dark">Rewind Flat</div>
                  <div className="text-sm text-slate font-normal">
                    Moqueta ferial
                  </div>
                </th>
                <th className="text-center py-4 px-4 bg-accent/5 rounded-t-lg">
                  <div className="font-bold text-accent">Rewind Dilour</div>
                  <div className="text-sm text-slate font-normal">
                    Premium
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {specs.map((spec, index) => (
                <tr
                  key={spec.label}
                  className={`border-b border-gray-100 ${
                    index % 2 === 0 ? "bg-gray-50/50" : ""
                  }`}
                >
                  <td className="py-4 px-4 text-slate font-medium">
                    {spec.label}
                  </td>
                  <td
                    className={`py-4 px-4 text-center ${
                      spec.highlight ? "font-bold text-primary" : "text-dark"
                    }`}
                  >
                    {spec.flat}
                  </td>
                  <td
                    className={`py-4 px-4 text-center bg-accent/5 ${
                      spec.highlight ? "font-bold text-accent" : "text-dark"
                    }`}
                  >
                    {spec.dilour}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 p-6 bg-light rounded-xl">
          <p className="text-sm text-slate text-center">
            <strong>Nota:</strong> Ambos productos cumplen con la certificación
            ignífuga Bfl-s1 obligatoria en recintos feriales. Precios IVA no
            incluido. Disponible ancho 4m bajo pedido para Rewind Flat.
          </p>
        </div>
      </div>
    </section>
  );
}
