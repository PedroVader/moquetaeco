export type TipoProducto = "flat" | "dilour";

export interface PrecioProducto {
  tipo: TipoProducto;
  nombre: string;
  precioMin: number;
  precioMax: number;
  espesor: string;
  peso: string;
  formato: string;
  colores: number;
  descripcion: string;
}

export const preciosProductos: Record<TipoProducto, PrecioProducto> = {
  flat: {
    tipo: "flat",
    nombre: "Rewind Flat",
    precioMin: 2.1,
    precioMax: 2.65,
    espesor: "2 mm",
    peso: "230 g/m²",
    formato: "50m x 2m",
    colores: 30,
    descripcion: "Moqueta ferial ecológica estándar",
  },
  dilour: {
    tipo: "dilour",
    nombre: "Rewind Dilour",
    precioMin: 4.05,
    precioMax: 4.65,
    espesor: "4 mm",
    peso: "650 g/m²",
    formato: "40m x 2m",
    colores: 29,
    descripcion: "Moqueta ecológica premium, mayor confort",
  },
};

export interface CalculoPrecio {
  metros: number;
  producto: TipoProducto;
  precioMin: number;
  precioMax: number;
  totalMin: number;
  totalMax: number;
}

export function calcularPrecio(
  metros: number,
  producto: TipoProducto
): CalculoPrecio {
  const precios = preciosProductos[producto];

  return {
    metros,
    producto,
    precioMin: precios.precioMin,
    precioMax: precios.precioMax,
    totalMin: Number((metros * precios.precioMin).toFixed(2)),
    totalMax: Number((metros * precios.precioMax).toFixed(2)),
  };
}

export function formatPrecioRango(min: number, max: number): string {
  const formatNum = (n: number) => n.toFixed(2).replace(".", ",");
  return `${formatNum(min)}€ - ${formatNum(max)}€`;
}

export function formatPrecioDesde(precio: number): string {
  return `Desde ${precio.toFixed(2).replace(".", ",")}€/m²`;
}

// Descuentos por volumen (orientativos)
export const descuentosVolumen = [
  { desde: 0, hasta: 99, descuento: 0, descripcion: "Precio base" },
  { desde: 100, hasta: 299, descuento: 5, descripcion: "5% dto. (+100m²)" },
  { desde: 300, hasta: 499, descuento: 10, descripcion: "10% dto. (+300m²)" },
  { desde: 500, hasta: Infinity, descuento: 15, descripcion: "15% dto. (+500m²)" },
];

export function getDescuentoPorVolumen(metros: number): number {
  const rango = descuentosVolumen.find(
    (d) => metros >= d.desde && metros <= d.hasta
  );
  return rango?.descuento || 0;
}
