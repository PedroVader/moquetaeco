"use client";

import { useState } from "react";
import { CalculatorIcon, InformationCircleIcon } from "@heroicons/react/24/outline";
import { preciosProductos, type TipoProducto } from "@/lib/data/precios";
import { empresa } from "@/lib/data";
import { usePresupuesto } from "@/context/PresupuestoContext";

export function PriceCalculator() {
  const [metros, setMetros] = useState(50);
  const [producto, setProducto] = useState<TipoProducto>("flat");
  const { abrirModal } = usePresupuesto();

  const precio = preciosProductos[producto];
  const totalMin = (metros * precio.precioMin).toFixed(2).replace(".", ",");
  const totalMax = (metros * precio.precioMax).toFixed(2).replace(".", ",");

  return (
    <section id="calculadora" className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-accent/10 text-accent text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            <CalculatorIcon className="w-4 h-4" />
            Calculadora de Precios
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Calcula tu Presupuesto
          </h2>
          <p className="text-lg text-slate">
            Obtén una estimación rápida del coste de tu moqueta ecológica
          </p>
        </div>

        <div className="bg-light rounded-2xl p-6 md:p-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Controles */}
            <div className="space-y-6">
              {/* Selector de producto */}
              <div>
                <label className="block text-sm font-semibold text-dark mb-3">
                  Selecciona el producto
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setProducto("flat")}
                    className={`p-4 rounded-xl border-2 transition text-left ${
                      producto === "flat"
                        ? "border-primary bg-primary/5"
                        : "border-gray-200 bg-white hover:border-gray-300"
                    }`}
                  >
                    <p className="font-bold text-dark">Rewind Flat</p>
                    <p className="text-sm text-slate">2mm · Desde 2,10€/m²</p>
                  </button>
                  <button
                    onClick={() => setProducto("dilour")}
                    className={`p-4 rounded-xl border-2 transition text-left ${
                      producto === "dilour"
                        ? "border-accent bg-accent/5"
                        : "border-gray-200 bg-white hover:border-gray-300"
                    }`}
                  >
                    <p className="font-bold text-dark">Rewind Dilour</p>
                    <p className="text-sm text-slate">4mm · Desde 4,05€/m²</p>
                  </button>
                </div>
              </div>

              {/* Slider de metros */}
              <div>
                <label className="block text-sm font-semibold text-dark mb-3">
                  Metros cuadrados necesarios
                </label>
                <div className="bg-white rounded-xl p-4 border border-gray-200">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-3xl font-bold text-primary">
                      {metros} m²
                    </span>
                    <input
                      type="number"
                      min="1"
                      max="1000"
                      value={metros}
                      onChange={(e) =>
                        setMetros(Math.max(1, Number(e.target.value)))
                      }
                      className="w-24 text-right border border-gray-200 rounded-lg px-3 py-2 text-dark font-medium"
                    />
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="500"
                    value={Math.min(metros, 500)}
                    onChange={(e) => setMetros(Number(e.target.value))}
                    className="w-full accent-primary"
                  />
                  <div className="flex justify-between text-xs text-slate mt-1">
                    <span>1 m²</span>
                    <span>500+ m²</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Resultado */}
            <div className="flex flex-col justify-center">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <p className="text-sm text-slate mb-2">Precio estimado</p>
                <p className="text-4xl font-bold text-primary mb-1">
                  {totalMin}€ - {totalMax}€
                </p>
                <p className="text-sm text-slate mb-6">
                  IVA no incluido · Precio final según cantidad y color
                </p>

                <div className="flex items-start gap-2 text-xs text-slate bg-light rounded-lg p-3 mb-6">
                  <InformationCircleIcon className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <p>
                    Los precios pueden variar según stock, color seleccionado y
                    si se compra rollo completo o corte. Descuentos disponibles
                    para grandes cantidades.
                  </p>
                </div>

                <button
                  onClick={() => abrirModal()}
                  className="block w-full bg-accent hover:bg-accent-dark text-white text-center font-bold py-4 rounded-xl transition mb-3 cursor-pointer"
                >
                  Solicitar Presupuesto Exacto
                </button>
                <p className="text-center text-sm text-slate">
                  o llama al{" "}
                  <a
                    href={`tel:${empresa.telefonoInternacional}`}
                    className="font-semibold text-primary hover:underline"
                  >
                    {empresa.telefono}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
