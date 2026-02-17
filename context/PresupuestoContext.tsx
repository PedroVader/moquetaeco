"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { PresupuestoModal } from "@/components/ui/PresupuestoModal";

export interface ProductoSeleccionado {
  nombre?: string;
  color?: string;
  colorRef?: string;
  tipoVenta?: "rollo" | "corte";
  metros?: number;
  precioUnitario?: number;
  precioTotal?: number;
}

interface PresupuestoContextType {
  abrirModal: (producto?: ProductoSeleccionado) => void;
  cerrarModal: () => void;
}

const PresupuestoContext = createContext<PresupuestoContextType | undefined>(
  undefined
);

export function PresupuestoProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [productoSeleccionado, setProductoSeleccionado] = useState<ProductoSeleccionado | undefined>();

  const abrirModal = (producto?: ProductoSeleccionado) => {
    setProductoSeleccionado(producto);
    setIsOpen(true);
  };

  const cerrarModal = () => {
    setIsOpen(false);
  };

  return (
    <PresupuestoContext.Provider value={{ abrirModal, cerrarModal }}>
      {children}
      <PresupuestoModal
        isOpen={isOpen}
        onClose={cerrarModal}
        productoSeleccionado={productoSeleccionado}
      />
    </PresupuestoContext.Provider>
  );
}

export function usePresupuesto() {
  const context = useContext(PresupuestoContext);
  if (!context) {
    throw new Error("usePresupuesto debe usarse dentro de PresupuestoProvider");
  }
  return context;
}
