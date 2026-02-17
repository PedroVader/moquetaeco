"use client";

import { PhoneIcon, DocumentTextIcon, ClockIcon } from "@heroicons/react/24/outline";
import { empresa } from "@/lib/data";
import { usePresupuesto } from "@/context/PresupuestoContext";

interface CTABandProps {
  titulo?: string;
  subtitulo?: string;
  mostrarHorario?: boolean;
}

export function CTABand({
  titulo = "¿Necesitas moqueta ecológica?",
  subtitulo = "Solicita presupuesto sin compromiso. Respuesta en menos de 24h.",
  mostrarHorario = true,
}: CTABandProps) {
  const { abrirModal } = usePresupuesto();
  return (
    <section className="bg-gradient-to-r from-primary to-primary-light py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Texto */}
          <div className="text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              {titulo}
            </h2>
            <p className="text-white/80">{subtitulo}</p>
          </div>

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
              <DocumentTextIcon className="w-5 h-5" />
              Pedir Presupuesto
            </button>
          </div>
        </div>

        {/* Horario */}
        {mostrarHorario && (
          <div className="mt-8 pt-8 border-t border-white/20 flex flex-wrap justify-center gap-6 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <ClockIcon className="w-4 h-4" />
              {empresa.horario.dias}: {empresa.horario.horas}
            </div>
            <div>Servicio urgente disponible</div>
            <div>+25 años de experiencia</div>
          </div>
        )}
      </div>
    </section>
  );
}
