"use client";

import { useState } from "react";
import { PhoneIcon, XMarkIcon, DocumentTextIcon } from "@heroicons/react/24/outline";
import { empresa } from "@/lib/data";
import { usePresupuesto } from "@/context/PresupuestoContext";

export function CTAFloat() {
  const [isExpanded, setIsExpanded] = useState(false);
  const { abrirModal } = usePresupuesto();

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Expanded options */}
      {isExpanded && (
        <div className="flex flex-col gap-3 animate-in fade-in slide-in-from-bottom-2 duration-200">
          {/* Presupuesto */}
          <button
            onClick={() => {
              setIsExpanded(false);
              abrirModal();
            }}
            className="flex items-center gap-3 bg-accent hover:bg-accent-dark text-white pl-4 pr-5 py-3 rounded-full shadow-lg transition cursor-pointer"
          >
            <DocumentTextIcon className="w-5 h-5" />
            <span className="font-medium">Presupuesto</span>
          </button>

          {/* Teléfono */}
          <a
            href={`tel:${empresa.telefonoInternacional}`}
            className="flex items-center gap-3 bg-primary hover:bg-primary-light text-white pl-4 pr-5 py-3 rounded-full shadow-lg transition"
          >
            <PhoneIcon className="w-5 h-5" />
            <span className="font-medium">{empresa.telefono}</span>
          </a>
        </div>
      )}

      {/* Main button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-all duration-200 ${
          isExpanded
            ? "bg-slate hover:bg-dark"
            : "bg-accent hover:bg-accent-dark animate-pulse"
        }`}
        aria-label={isExpanded ? "Cerrar opciones de contacto" : "Contactar"}
      >
        {isExpanded ? (
          <XMarkIcon className="w-6 h-6 text-white" />
        ) : (
          <PhoneIcon className="w-6 h-6 text-white" />
        )}
      </button>

      {/* Tooltip when collapsed */}
      {!isExpanded && (
        <div className="absolute bottom-16 right-0 bg-dark text-white text-sm px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 hover:opacity-100 pointer-events-none transition">
          ¿Necesitas ayuda?
        </div>
      )}
    </div>
  );
}
