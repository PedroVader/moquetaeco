"use client";

import { useState } from "react";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  PaperAirplaneIcon,
  UserIcon,
  BuildingOffice2Icon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";
import { empresa } from "@/lib/data";

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    email: "",
    telefono: "",
    mensaje: "",
  });
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEnviando(true);

    try {
      const netlifyData = new URLSearchParams({
        "form-name": "contacto",
        ...formData,
      });

      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: netlifyData.toString(),
      });

      if (!response.ok) throw new Error("Error al enviar");
      setEnviado(true);
    } catch {
      const subject = encodeURIComponent(
        `Contacto desde moquetaecologica.com - ${formData.nombre}`
      );
      const body = encodeURIComponent(
        `Nombre: ${formData.nombre}\nEmpresa: ${formData.empresa}\nEmail: ${formData.email}\nTeléfono: ${formData.telefono}\nMensaje: ${formData.mensaje}`
      );
      window.location.href = `mailto:${empresa.emailVentas}?subject=${subject}&body=${body}`;
      setEnviado(true);
    } finally {
      setEnviando(false);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Contacta con nosotros
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            ¿Necesitas moqueta ecológica para tu evento? Solicita presupuesto
            sin compromiso o llámanos directamente.
          </p>
        </div>
      </section>

      <section className="py-16 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Info de contacto */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-dark mb-6">
                  Información de contacto
                </h2>
                <ul className="space-y-5">
                  <li>
                    <a
                      href={`tel:${empresa.telefonoInternacional}`}
                      className="flex items-start gap-4 group"
                    >
                      <div className="bg-primary/10 p-3 rounded-xl">
                        <PhoneIcon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-dark group-hover:text-primary transition">
                          {empresa.telefono}
                        </p>
                        <p className="text-sm text-slate">
                          Llámanos para presupuesto inmediato
                        </p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${empresa.emailVentas}`}
                      className="flex items-start gap-4 group"
                    >
                      <div className="bg-primary/10 p-3 rounded-xl">
                        <EnvelopeIcon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-dark group-hover:text-primary transition">
                          {empresa.emailVentas}
                        </p>
                        <p className="text-sm text-slate">
                          Ventas y presupuestos
                        </p>
                      </div>
                    </a>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-xl">
                      <MapPinIcon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-dark">
                        {empresa.nombre}
                      </p>
                      <p className="text-sm text-slate">
                        {empresa.direccion}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-xl">
                      <ClockIcon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-dark">Horario</p>
                      <p className="text-sm text-slate">
                        {empresa.horario.dias}: {empresa.horario.horas}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden shadow-sm">
                <iframe
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.2!2d${empresa.coordenadas.lng}!3d${empresa.coordenadas.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDI0JzEzLjAiTiAywrAxMSc1MS40IkU!5e0!3m2!1ses!2ses!4v1699999999999!5m2!1ses!2ses`}
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación Disstands Barcelona"
                />
              </div>
            </div>

            {/* Formulario */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-sm p-8">
                <h2 className="text-2xl font-bold text-dark mb-2">
                  Envíanos un mensaje
                </h2>
                <p className="text-slate text-sm mb-6">
                  Responderemos en menos de 24 horas laborables.
                </p>

                {!enviado ? (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <input type="hidden" name="form-name" value="contacto" />
                    <div className="sr-only">
                      <label>
                        No rellenar:{" "}
                        <input name="bot-field" />
                      </label>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      {/* Nombre */}
                      <div>
                        <label
                          htmlFor="nombre"
                          className="block text-sm font-medium text-dark mb-1"
                        >
                          Nombre *
                        </label>
                        <div className="relative">
                          <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate" />
                          <input
                            id="nombre"
                            type="text"
                            name="nombre"
                            required
                            value={formData.nombre}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition"
                            placeholder="Tu nombre"
                          />
                        </div>
                      </div>

                      {/* Empresa */}
                      <div>
                        <label
                          htmlFor="empresa"
                          className="block text-sm font-medium text-dark mb-1"
                        >
                          Empresa
                        </label>
                        <div className="relative">
                          <BuildingOffice2Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate" />
                          <input
                            id="empresa"
                            type="text"
                            name="empresa"
                            value={formData.empresa}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition"
                            placeholder="Nombre de tu empresa"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      {/* Email */}
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-dark mb-1"
                        >
                          Email *
                        </label>
                        <div className="relative">
                          <EnvelopeIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate" />
                          <input
                            id="email"
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition"
                            placeholder="tu@email.com"
                          />
                        </div>
                      </div>

                      {/* Teléfono */}
                      <div>
                        <label
                          htmlFor="telefono"
                          className="block text-sm font-medium text-dark mb-1"
                        >
                          Teléfono *
                        </label>
                        <div className="relative">
                          <PhoneIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate" />
                          <input
                            id="telefono"
                            type="tel"
                            name="telefono"
                            required
                            value={formData.telefono}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition"
                            placeholder="612 345 678"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Mensaje */}
                    <div>
                      <label
                        htmlFor="mensaje"
                        className="block text-sm font-medium text-dark mb-1"
                      >
                        Mensaje *
                      </label>
                      <div className="relative">
                        <ChatBubbleLeftRightIcon className="absolute left-3 top-3 w-5 h-5 text-slate" />
                        <textarea
                          id="mensaje"
                          name="mensaje"
                          required
                          rows={5}
                          value={formData.mensaje}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition resize-none"
                          placeholder="Cuéntanos sobre tu evento: fecha, ubicación, metros cuadrados estimados..."
                        />
                      </div>
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={enviando}
                      className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold py-4 rounded-xl transition disabled:opacity-70 cursor-pointer"
                    >
                      {enviando ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Enviando...
                        </>
                      ) : (
                        <>
                          <PaperAirplaneIcon className="w-5 h-5" />
                          Enviar mensaje
                        </>
                      )}
                    </button>

                    <p className="text-xs text-center text-slate">
                      O llámanos directamente al{" "}
                      <a
                        href={`tel:${empresa.telefonoInternacional}`}
                        className="text-primary font-semibold hover:underline"
                      >
                        {empresa.telefono}
                      </a>
                    </p>
                  </form>
                ) : (
                  <div className="py-12 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <PaperAirplaneIcon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-dark mb-2">
                      ¡Mensaje enviado!
                    </h3>
                    <p className="text-slate mb-6">
                      Te responderemos en menos de 24 horas. Si prefieres,
                      llámanos directamente.
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
          </div>
        </div>
      </section>
    </>
  );
}
