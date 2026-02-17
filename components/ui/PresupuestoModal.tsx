"use client";

import { useState, useEffect } from "react";
import { XMarkIcon, PaperAirplaneIcon, PhoneIcon, EnvelopeIcon, UserIcon, BuildingOffice2Icon, MapPinIcon } from "@heroicons/react/24/outline";
import { empresa } from "@/lib/data";
import type { ProductoSeleccionado } from "@/context/PresupuestoContext";

interface PresupuestoModalProps {
  isOpen: boolean;
  onClose: () => void;
  productoSeleccionado?: ProductoSeleccionado;
}

export function PresupuestoModal({ isOpen, onClose, productoSeleccionado }: PresupuestoModalProps) {
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    email: "",
    telefono: "",
    ubicacion: "",
    mensaje: "",
  });
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setEnviado(false);
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEnviando(true);

    try {
      const netlifyData = new URLSearchParams({
        "form-name": "presupuesto",
        nombre: formData.nombre,
        empresa: formData.empresa,
        email: formData.email,
        telefono: formData.telefono,
        ubicacion: formData.ubicacion,
        mensaje: formData.mensaje,
        producto: productoSeleccionado?.nombre || "",
        color: productoSeleccionado
          ? `${productoSeleccionado.color || ""} (Ref. ${productoSeleccionado.colorRef || "-"})`
          : "",
        tipoVenta: productoSeleccionado?.tipoVenta === "rollo" ? "Rollo completo" : "Corte a medida",
        metros: productoSeleccionado?.metros?.toString() || "",
        precioEstimado: productoSeleccionado?.precioTotal
          ? `${productoSeleccionado.precioTotal.toFixed(2).replace(".", ",")}€`
          : "",
      });

      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: netlifyData.toString(),
      });

      if (!response.ok) throw new Error("Error al enviar");

      setEnviado(true);
    } catch {
      // Fallback a mailto si Netlify falla
      const subject = encodeURIComponent(
        `Presupuesto ${productoSeleccionado?.nombre || "Moqueta Ecológica"} - ${formData.nombre}`
      );
      const body = encodeURIComponent(
        `Nombre: ${formData.nombre}\nEmpresa: ${formData.empresa}\nEmail: ${formData.email}\nTeléfono: ${formData.telefono}\nUbicación: ${formData.ubicacion}\nMensaje: ${formData.mensaje}`
      );
      window.location.href = `mailto:${empresa.emailVentas}?subject=${subject}&body=${body}`;
      setEnviado(true);
    } finally {
      setEnviando(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-primary text-white p-6 rounded-t-2xl">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
          <h2 className="text-2xl font-bold">Pedir Presupuesto Gratis</h2>
          <p className="text-white/80 mt-1">
            Presupuesto entre 24 y 48h · Sin compromiso
          </p>
        </div>

        {/* Producto seleccionado */}
        {productoSeleccionado && productoSeleccionado.nombre && (
          <div className="mx-6 mt-6 p-4 bg-primary/5 border border-primary/20 rounded-xl">
            <p className="text-sm font-semibold text-primary mb-2">Tu selección:</p>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <span className="text-slate">Producto:</span>
                <p className="font-medium text-dark">{productoSeleccionado.nombre}</p>
              </div>
              <div>
                <span className="text-slate">Color:</span>
                <p className="font-medium text-dark">
                  {productoSeleccionado.color} <span className="text-slate">(Ref. {productoSeleccionado.colorRef})</span>
                </p>
              </div>
              <div>
                <span className="text-slate">Tipo:</span>
                <p className="font-medium text-dark">
                  {productoSeleccionado.tipoVenta === "rollo" ? "Rollo completo" : "Corte a medida"}
                </p>
              </div>
              <div>
                <span className="text-slate">Cantidad:</span>
                <p className="font-medium text-dark">{productoSeleccionado.metros} m²</p>
              </div>
            </div>
            <div className="mt-3 pt-3 border-t border-primary/20 flex justify-between items-center">
              <span className="text-slate text-sm">Precio estimado:</span>
              <span className="text-xl font-bold text-primary">
                {productoSeleccionado.precioTotal?.toFixed(2).replace(".", ",")}€
              </span>
            </div>
          </div>
        )}

        {/* Form */}
        {!enviado ? (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {/* Nombre */}
            <div>
              <label className="block text-sm font-medium text-dark mb-1">
                Nombre *
              </label>
              <div className="relative">
                <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate" />
                <input
                  type="text"
                  name="nombre"
                  required
                  value={formData.nombre}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition"
                  placeholder="Tu nombre"
                />
              </div>
            </div>

            {/* Empresa */}
            <div>
              <label className="block text-sm font-medium text-dark mb-1">
                Empresa
              </label>
              <div className="relative">
                <BuildingOffice2Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate" />
                <input
                  type="text"
                  name="empresa"
                  value={formData.empresa}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition"
                  placeholder="Nombre de tu empresa"
                />
              </div>
            </div>

            {/* Email y Teléfono */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-dark mb-1">
                  Email *
                </label>
                <div className="relative">
                  <EnvelopeIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate" />
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-dark mb-1">
                  Teléfono *
                </label>
                <div className="relative">
                  <PhoneIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate" />
                  <input
                    type="tel"
                    name="telefono"
                    required
                    value={formData.telefono}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition"
                    placeholder="612 345 678"
                  />
                </div>
              </div>
            </div>

            {/* Ubicación */}
            <div>
              <label className="block text-sm font-medium text-dark mb-1">
                Ubicación del evento
              </label>
              <div className="relative">
                <MapPinIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate" />
                <input
                  type="text"
                  name="ubicacion"
                  value={formData.ubicacion}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition"
                  placeholder="Barcelona, Fira..."
                />
              </div>
            </div>

            {/* Mensaje */}
            <div>
              <label className="block text-sm font-medium text-dark mb-1">
                Cuéntanos sobre tu evento
              </label>
              <textarea
                name="mensaje"
                rows={3}
                value={formData.mensaje}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition resize-none"
                placeholder="Fecha del evento, necesidades especiales..."
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={enviando}
              className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold py-4 rounded-xl transition disabled:opacity-70"
            >
              {enviando ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  <PaperAirplaneIcon className="w-5 h-5" />
                  Solicitar Presupuesto
                </>
              )}
            </button>

            {/* Info adicional */}
            <p className="text-xs text-center text-slate">
              También puedes llamarnos directamente al{" "}
              <a
                href={`tel:${empresa.telefonoInternacional}`}
                className="text-primary font-semibold hover:underline"
              >
                {empresa.telefono}
              </a>
            </p>
          </form>
        ) : (
          /* Success message */
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <PaperAirplaneIcon className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-dark mb-2">
              ¡Solicitud enviada!
            </h3>
            <p className="text-slate mb-6">
              Recibirás tu presupuesto entre 24 y 48 horas. Si prefieres, llámanos
              directamente.
            </p>
            <a
              href={`tel:${empresa.telefonoInternacional}`}
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-white font-bold py-3 px-6 rounded-xl transition"
            >
              <PhoneIcon className="w-5 h-5" />
              {empresa.telefono}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
