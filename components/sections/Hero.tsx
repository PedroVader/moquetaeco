"use client";

import Image from "next/image";
import { PhoneIcon, SparklesIcon, FireIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";
import { empresa } from "@/lib/data";
import { usePresupuesto } from "@/context/PresupuestoContext";

interface HeroProps {
  titulo: string;
  subtitulo: string;
  ubicacion?: string;
  mostrarPrecio?: boolean;
  mostrarImagen?: boolean;
}

export function Hero({
  titulo,
  subtitulo,
  ubicacion,
  mostrarPrecio = true,
  mostrarImagen = true,
}: HeroProps) {
  const { abrirModal } = usePresupuesto();
  return (
    <section className="relative text-white overflow-hidden">
      {/* Imagen de fondo con color natural y blur */}
      {mostrarImagen && (
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-img/hero-img-2.jpeg"
            alt="Moqueta ecológica Rewind"
            fill
            className="object-cover blur-[2px] scale-105"
            priority
          />
          {/* Overlay oscuro sutil para legibilidad */}
          <div className="absolute inset-0 bg-black/40" />
        </div>
      )}

      {/* Fallback si no hay imagen */}
      {!mostrarImagen && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-light z-0" />
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Badges */}
        <div className="flex flex-wrap gap-3 mb-6">
          <span className="flex items-center gap-1.5 bg-white/20 backdrop-blur px-3 py-1.5 rounded-full text-sm font-medium">
            <SparklesIcon className="w-4 h-4" />
            100% Reciclable
          </span>
          <span className="flex items-center gap-1.5 bg-white/20 backdrop-blur px-3 py-1.5 rounded-full text-sm font-medium">
            <FireIcon className="w-4 h-4" />
            Certificado Bfl-s1
          </span>
          <span className="flex items-center gap-1.5 bg-white/20 backdrop-blur px-3 py-1.5 rounded-full text-sm font-medium">
            <ShieldCheckIcon className="w-4 h-4" />
            Sin Látex
          </span>
        </div>

        {/* Título */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 max-w-4xl drop-shadow-lg">
          {titulo}
        </h1>

        {/* Subtítulo */}
        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mb-8 drop-shadow">
          {subtitulo}
        </p>

        {/* Precio destacado */}
        {mostrarPrecio && (
          <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 inline-block mb-8">
            <p className="text-sm text-white/70 mb-1">Desde</p>
            <p className="text-4xl font-bold">
              2,10€<span className="text-lg font-normal">/m²</span>
            </p>
            <p className="text-sm text-white/70">IVA no incluido</p>
          </div>
        )}

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href={`tel:${empresa.telefonoInternacional}`}
            className="flex items-center justify-center gap-2 bg-white text-primary font-bold py-4 px-8 rounded-xl hover:bg-gray-100 transition shadow-lg"
          >
            <PhoneIcon className="w-5 h-5" />
            {empresa.telefono}
          </a>
          <button
            onClick={() => abrirModal()}
            className="flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold py-4 px-8 rounded-xl transition shadow-lg cursor-pointer"
          >
            Pedir Presupuesto Gratis
          </button>
        </div>

        {/* Info ubicación */}
        {ubicacion && (
          <p className="mt-8 text-white/80 text-sm drop-shadow">
            Servicio en {ubicacion} · Montaje solo para profesionales
          </p>
        )}
      </div>
    </section>
  );
}
