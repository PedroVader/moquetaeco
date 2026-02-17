export interface Certificacion {
  codigo: string;
  nombre: string;
  descripcion: string;
  icono: string;
  color: string;
}

export const certificaciones: Certificacion[] = [
  {
    codigo: "Bfl-s1",
    nombre: "Certificación Ignífuga Bfl-s1",
    descripcion:
      "Máxima clasificación de reacción al fuego para revestimientos de suelo. Obligatoria en todos los recintos feriales y espacios públicos de España y Europa. Garantiza comportamiento seguro ante el fuego con baja emisión de humos.",
    icono: "flame",
    color: "fire-safety",
  },
  {
    codigo: "GUT",
    nombre: "Certificación GUT",
    descripcion:
      "Sello de calidad de la Asociación Ambiental de Fabricantes de Moquetas. Garantiza que el producto ha sido fabricado respetando estrictos criterios medioambientales y de salud, sin sustancias nocivas.",
    icono: "shield-check",
    color: "cert-eco",
  },
  {
    codigo: "100% Reciclable",
    nombre: "100% Reciclable",
    descripcion:
      "Fabricada con monomaterial (100% polipropileno) sin látex ni aditivos que impidan el reciclaje. Al final de su vida útil, el material se transforma en granza para fabricar nuevos productos, cerrando el ciclo de economía circular.",
    icono: "recycle",
    color: "cert-eco",
  },
  {
    codigo: "Sin Látex",
    nombre: "Sin Látex - Hipoalergénica",
    descripcion:
      "Fabricada completamente sin látex, lo que la hace hipoalergénica y apta para personas con sensibilidad al látex. Además, facilita el reciclaje al ser monomaterial puro.",
    icono: "heart",
    color: "primary",
  },
];

export const datosEcoProduccion = {
  agua: {
    valor: "0%",
    descripcion: "Sin uso de agua en producción",
    icono: "droplet-off",
  },
  energia: {
    valor: "-80%",
    descripcion: "Reducción consumo energético",
    icono: "zap",
  },
  co2: {
    valor: "-35%",
    descripcion: "Reducción emisiones CO₂",
    icono: "leaf",
  },
  gas: {
    valor: "-83%",
    descripcion: "Reducción consumo de gas",
    icono: "flame",
  },
  latex: {
    valor: "0%",
    descripcion: "Sin látex en composición",
    icono: "ban",
  },
  reciclable: {
    valor: "100%",
    descripcion: "Completamente reciclable",
    icono: "recycle",
  },
};

export function getCertificacionByCodigo(
  codigo: string
): Certificacion | undefined {
  return certificaciones.find((c) => c.codigo === codigo);
}
