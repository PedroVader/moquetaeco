"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import {
  CheckIcon,
  ShieldCheckIcon,
  FireIcon,
  ArrowPathIcon,
  ClockIcon,
  PhoneIcon,
  Square3Stack3DIcon,
  ScaleIcon,
  SwatchIcon,
  CubeIcon,
  BeakerIcon,
  SparklesIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import { usePresupuesto } from "@/context/PresupuestoContext";
import { empresa } from "@/lib/data";
import type { Producto } from "@/lib/data/productos";

interface ProductoDetalleProps {
  producto: Producto;
  imagenBase: string; // e.g., "/moqueta-rewind/watermarked_Rewind-Flat-" or "/moqueta-rewind/watermarked_Rewind-Dilour-"
  extension: string; // e.g., "png" or "jpg"
}

type TipoVenta = "rollo" | "corte";

// Precios según tipo de venta (estimados basados en los rangos)
const getPrecio = (producto: Producto, tipoVenta: TipoVenta): number => {
  if (tipoVenta === "rollo") {
    return producto.precio.min; // Precio mínimo para rollo completo
  }
  return producto.precio.max; // Precio máximo para corte
};

export function ProductoDetalle({
  producto,
  imagenBase,
  extension,
}: ProductoDetalleProps) {
  const { abrirModal } = usePresupuesto();
  const colores = producto.coloresDisponibles as { ref: string; nombre: string }[];

  const [colorSeleccionado, setColorSeleccionado] = useState(colores[0]);
  const [tipoVenta, setTipoVenta] = useState<TipoVenta>("rollo");
  const [metros, setMetros] = useState(100);

  const precioUnitario = getPrecio(producto, tipoVenta);
  const precioTotal = useMemo(() => (metros * precioUnitario).toFixed(2), [metros, precioUnitario]);

  // Generar URL de imagen basada en el color seleccionado
  const imagenProducto = `${imagenBase}${colorSeleccionado.ref}.${extension}`;

  // Metros por rollo
  const metrosRollo = parseInt(producto.formato.largo) * parseFloat(producto.formato.ancho);

  return (
    <div className="bg-white">
      {/* Hero del producto */}
      <section className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Imagen del producto */}
            <div>
              <div className="aspect-square bg-light rounded-2xl overflow-hidden relative">
                <Image
                  src={imagenProducto}
                  alt={`${producto.nombre} - ${colorSeleccionado.nombre}`}
                  fill
                  className="object-contain p-8"
                  priority
                />
              </div>
            </div>

            {/* Información del producto */}
            <div className="space-y-6">
              {/* Título y marca */}
              <div>
                <p className="text-primary font-semibold mb-1">{producto.marca}</p>
                <h1 className="text-3xl md:text-4xl font-bold text-dark mb-2">
                  {producto.nombre}
                </h1>
                <p className="text-slate">
                  {producto.diferenciador || producto.especificaciones.descripcionTecnica}
                </p>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2">
                {producto.certificaciones.map((cert) => (
                  <span
                    key={cert}
                    className="inline-flex items-center gap-1.5 bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full"
                  >
                    {cert === "Bfl-s1" && <FireIcon className="w-4 h-4" />}
                    {cert === "100% Reciclable" && <ArrowPathIcon className="w-4 h-4" />}
                    {cert === "Sin látex" && <ShieldCheckIcon className="w-4 h-4" />}
                    {cert === "GUT" && <CheckIcon className="w-4 h-4" />}
                    {cert}
                  </span>
                ))}
              </div>

              {/* Selector de color */}
              <div>
                <label className="block text-sm font-semibold text-dark mb-3">
                  Color: <span className="text-primary">{colorSeleccionado.nombre}</span>{" "}
                  <span className="text-slate font-normal">(Ref. {colorSeleccionado.ref})</span>
                </label>
                <div className="grid grid-cols-6 sm:grid-cols-8 gap-2">
                  {colores.map((color) => (
                    <button
                      key={color.ref}
                      onClick={() => setColorSeleccionado(color)}
                      title={`${color.nombre} (${color.ref})`}
                      className={`aspect-square rounded-lg overflow-hidden border-2 transition relative ${
                        colorSeleccionado.ref === color.ref
                          ? "border-primary ring-2 ring-primary/30"
                          : "border-gray-200 hover:border-gray-400"
                      }`}
                    >
                      <Image
                        src={`${imagenBase}${color.ref}.${extension}`}
                        alt={color.nombre}
                        fill
                        className="object-cover"
                      />
                      {colorSeleccionado.ref === color.ref && (
                        <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                          <CheckIcon className="w-5 h-5 text-white drop-shadow" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Selector tipo de venta */}
              <div>
                <label className="block text-sm font-semibold text-dark mb-3">
                  Tipo de venta
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setTipoVenta("rollo")}
                    className={`p-4 rounded-xl border-2 transition text-left ${
                      tipoVenta === "rollo"
                        ? "border-primary bg-primary/5"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <p className="font-bold text-dark">Rollo completo</p>
                    <p className="text-sm text-slate">
                      {producto.formato.largo} x {producto.formato.ancho} ({metrosRollo} m²)
                    </p>
                    <p className="text-primary font-semibold mt-1">
                      {producto.precio.min.toFixed(2).replace(".", ",")}€/m²
                    </p>
                  </button>
                  <button
                    onClick={() => setTipoVenta("corte")}
                    className={`p-4 rounded-xl border-2 transition text-left ${
                      tipoVenta === "corte"
                        ? "border-accent bg-accent/5"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <p className="font-bold text-dark">Corte a medida</p>
                    <p className="text-sm text-slate">Mínimo 10 m² por color</p>
                    <p className="text-accent font-semibold mt-1">
                      {producto.precio.max.toFixed(2).replace(".", ",")}€/m²
                    </p>
                  </button>
                </div>
              </div>

              {/* Calculadora de metros */}
              <div>
                <label className="block text-sm font-semibold text-dark mb-3">
                  Cantidad: <span className="text-primary">{metros} m²</span>
                </label>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min={tipoVenta === "rollo" ? metrosRollo : 10}
                    max="500"
                    step={tipoVenta === "rollo" ? metrosRollo : 1}
                    value={metros}
                    onChange={(e) => setMetros(Number(e.target.value))}
                    className="flex-1 accent-primary"
                  />
                  <input
                    type="number"
                    min={tipoVenta === "rollo" ? metrosRollo : 10}
                    value={metros}
                    onChange={(e) => setMetros(Math.max(tipoVenta === "rollo" ? metrosRollo : 10, Number(e.target.value)))}
                    className="w-24 border border-gray-200 rounded-lg px-3 py-2 text-center font-medium"
                  />
                </div>
              </div>

              {/* Precio total */}
              <div className="bg-light rounded-2xl p-6">
                <div className="flex items-end justify-between mb-4">
                  <div>
                    <p className="text-sm text-slate">Precio estimado</p>
                    <p className="text-4xl font-bold text-primary">
                      {precioTotal.replace(".", ",")}€
                    </p>
                    <p className="text-sm text-slate">IVA no incluido</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-slate">Precio unitario</p>
                    <p className="text-lg font-semibold text-dark">
                      {precioUnitario.toFixed(2).replace(".", ",")}€/m²
                    </p>
                  </div>
                </div>

                {/* CTAs */}
                <div className="grid sm:grid-cols-2 gap-3">
                  <button
                    onClick={() => abrirModal({
                      nombre: producto.nombre,
                      color: colorSeleccionado.nombre,
                      colorRef: colorSeleccionado.ref,
                      tipoVenta: tipoVenta,
                      metros: metros,
                      precioUnitario: precioUnitario,
                      precioTotal: metros * precioUnitario,
                    })}
                    className="flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold py-4 px-6 rounded-xl transition"
                  >
                    Pedir Presupuesto
                  </button>
                  <a
                    href={`tel:${empresa.telefonoInternacional}`}
                    className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-light text-white font-bold py-4 px-6 rounded-xl transition"
                  >
                    <PhoneIcon className="w-5 h-5" />
                    {empresa.telefono}
                  </a>
                </div>
              </div>

              {/* Info presupuesto */}
              <div className="flex items-center gap-3 text-sm text-slate">
                <ClockIcon className="w-5 h-5 text-primary" />
                <span>
                  Presupuesto entre <strong className="text-dark">24 y 48h</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Especificaciones técnicas */}
      <section className="py-12 bg-gradient-to-b from-light to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-dark mb-2">Especificaciones Técnicas</h2>
            <p className="text-slate">Características detalladas del producto</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Espesor */}
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition border border-gray-100 group">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition">
                  <Square3Stack3DIcon className="w-5 h-5 text-primary group-hover:text-white" />
                </div>
                <p className="text-sm font-medium text-slate">Espesor</p>
              </div>
              <p className="text-2xl font-bold text-dark">{producto.especificaciones.espesor}</p>
            </div>

            {/* Peso */}
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition border border-gray-100 group">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition">
                  <ScaleIcon className="w-5 h-5 text-primary group-hover:text-white" />
                </div>
                <p className="text-sm font-medium text-slate">Peso</p>
              </div>
              <p className="text-2xl font-bold text-dark">{producto.especificaciones.pesoTotal}</p>
            </div>

            {/* Clasificación fuego */}
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition border border-gray-100 group">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-fire-safety/10 flex items-center justify-center group-hover:bg-fire-safety group-hover:text-white transition">
                  <FireIcon className="w-5 h-5 text-fire-safety group-hover:text-white" />
                </div>
                <p className="text-sm font-medium text-slate">Ignífugo</p>
              </div>
              <p className="text-2xl font-bold text-dark">{producto.especificaciones.clasificacionFuego}</p>
            </div>

            {/* Formato */}
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition border border-gray-100 group">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition">
                  <CubeIcon className="w-5 h-5 text-primary group-hover:text-white" />
                </div>
                <p className="text-sm font-medium text-slate">Formato rollo</p>
              </div>
              <p className="text-2xl font-bold text-dark">{producto.formato.largo} x {producto.formato.ancho}</p>
            </div>

            {/* Composición */}
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition border border-gray-100 group">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition">
                  <BeakerIcon className="w-5 h-5 text-primary group-hover:text-white" />
                </div>
                <p className="text-sm font-medium text-slate">Composición</p>
              </div>
              <p className="text-lg font-bold text-dark leading-tight">{producto.especificaciones.composicion}</p>
            </div>

            {/* Reciclable */}
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition border border-gray-100 group">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-cert-eco/10 flex items-center justify-center group-hover:bg-cert-eco group-hover:text-white transition">
                  <ArrowPathIcon className="w-5 h-5 text-cert-eco group-hover:text-white" />
                </div>
                <p className="text-sm font-medium text-slate">Reciclable</p>
              </div>
              <p className="text-2xl font-bold text-cert-eco">{producto.especificaciones.reciclable}</p>
            </div>

            {/* Sin látex */}
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition border border-gray-100 group">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition">
                  <HeartIcon className="w-5 h-5 text-accent group-hover:text-white" />
                </div>
                <p className="text-sm font-medium text-slate">Hipoalergénico</p>
              </div>
              <p className="text-2xl font-bold text-dark">{producto.especificaciones.latex ? "Con látex" : "Sin látex"}</p>
            </div>

            {/* Colores */}
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition border border-gray-100 group">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition">
                  <SwatchIcon className="w-5 h-5 text-primary group-hover:text-white" />
                </div>
                <p className="text-sm font-medium text-slate">Colores</p>
              </div>
              <p className="text-2xl font-bold text-dark">{producto.colores} <span className="text-lg font-normal text-slate">disponibles</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* Aplicaciones */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-dark mb-8">Aplicaciones</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {producto.aplicaciones.map((aplicacion) => (
              <div
                key={aplicacion}
                className="flex items-center gap-3 bg-light rounded-xl p-4"
              >
                <CheckIcon className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-dark">{aplicacion}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ventajas */}
      <section className="py-16 text-white relative overflow-hidden">
        {/* Imagen de fondo con blur */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-img/rewind-hero.jpg"
            alt="Fondo moqueta ecológica"
            fill
            className="object-cover blur-[2px] scale-105"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center drop-shadow-lg">¿Por qué elegir {producto.marca}?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {producto.ventajas.map((ventaja) => (
              <div key={ventaja} className="flex items-start gap-3 bg-black/40 backdrop-blur-sm rounded-xl p-4">
                <CheckIcon className="w-6 h-6 flex-shrink-0 mt-0.5" />
                <span className="drop-shadow">{ventaja}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
