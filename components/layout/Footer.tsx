import Link from "next/link";
import Image from "next/image";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import { empresa, provincias } from "@/lib/data";

// Custom social icons since Heroicons doesn't include them
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div>
            <div className="mb-4">
              <Image
                src="/logo-moqueta.png"
                alt="Moqueta Ecológica - Disstands"
                width={180}
                height={60}
                className="h-14 w-auto"
              />
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Rewind® es nuestra marca propia de moqueta ecológica en Cataluña.
              Más de 25 años de experiencia en moqueta ferial para eventos, ferias y
              congresos. Montaje solo para profesionales.
            </p>
            <div className="flex gap-3">
              <a
                href={empresa.redesSociales.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-primary p-2 rounded-lg transition"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href={empresa.redesSociales.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-primary p-2 rounded-lg transition"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <a
                  href={`tel:${empresa.telefonoInternacional}`}
                  className="flex items-start gap-3 hover:text-white transition"
                >
                  <PhoneIcon className="w-5 h-5 flex-shrink-0 text-accent" />
                  <span>
                    <strong className="text-white block">
                      {empresa.telefono}
                    </strong>
                    Llámanos para presupuesto
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${empresa.emailVentas}`}
                  className="flex items-start gap-3 hover:text-white transition"
                >
                  <EnvelopeIcon className="w-5 h-5 flex-shrink-0 text-accent" />
                  <span>
                    <strong className="text-white block">
                      {empresa.emailVentas}
                    </strong>
                    Ventas y presupuestos
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPinIcon className="w-5 h-5 flex-shrink-0 text-accent" />
                <span>{empresa.direccion}</span>
              </li>
              <li className="flex items-start gap-3">
                <ClockIcon className="w-5 h-5 flex-shrink-0 text-accent" />
                <span>
                  {empresa.horario.dias}
                  <br />
                  {empresa.horario.horas}
                </span>
              </li>
            </ul>
          </div>

          {/* Services by province */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Servicio en Cataluña</h3>
            <ul className="space-y-2 text-sm">
              {provincias.map((provincia) => (
                <li key={provincia.slug}>
                  <Link
                    href={`/moqueta-ecologica-${provincia.slug}`}
                    className="text-gray-400 hover:text-white transition"
                  >
                    Moqueta ecológica {provincia.nombre}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="text-md font-semibold mt-6 mb-3">Blog y Guías</h4>
            <ul className="space-y-2 text-sm mb-6">
              <li>
                <Link
                  href="/blog"
                  className="text-gray-400 hover:text-white transition"
                >
                  Todos los artículos
                </Link>
              </li>
            </ul>
            <h4 className="text-md font-semibold mt-6 mb-3">Por tipo de evento</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/barcelona/ferias"
                  className="text-gray-400 hover:text-white transition"
                >
                  Moqueta para ferias
                </Link>
              </li>
              <li>
                <Link
                  href="/barcelona/eventos"
                  className="text-gray-400 hover:text-white transition"
                >
                  Moqueta para eventos
                </Link>
              </li>
              <li>
                <Link
                  href="/barcelona/congresos"
                  className="text-gray-400 hover:text-white transition"
                >
                  Moqueta para congresos
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Productos</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://www.disstands.com/producto/moqueta-ferial-ecologica/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition block"
                >
                  <strong className="text-white block">Rewind Flat</strong>
                  Moqueta ferial ecológica
                  <br />
                  Desde 2,10€/m²
                </a>
              </li>
              <li>
                <a
                  href="https://www.disstands.com/producto/moqueta-ecologica-eventos/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition block"
                >
                  <strong className="text-white block">Rewind Dilour</strong>
                  Moqueta premium ecológica
                  <br />
                  Desde 4,05€/m²
                </a>
              </li>
            </ul>

            <div className="mt-6 p-4 bg-white/5 rounded-lg">
              <p className="text-xs text-gray-400">
                <strong className="text-white block mb-1">
                  Certificaciones
                </strong>
                Bfl-s1 (ignífuga) · GUT · 100% Reciclable · Sin látex
              </p>
            </div>

            <div className="mt-4 p-4 bg-accent/10 rounded-lg">
              <p className="text-xs text-gray-400">
                <strong className="text-accent block mb-1">
                  Servicio de montaje
                </strong>
                Disponible solo para profesionales del sector
              </p>
            </div>

            {/* Mapa */}
            <div className="mt-4">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${empresa.coordenadas.lat},${empresa.coordenadas.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block overflow-hidden rounded-lg hover:opacity-90 transition"
              >
                <iframe
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.2!2d${empresa.coordenadas.lng}!3d${empresa.coordenadas.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDI0JzEzLjAiTiAywrAxMSc1MS40IkU!5e0!3m2!1ses!2ses!4v1699999999999!5m2!1ses!2ses`}
                  width="100%"
                  height="120"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg pointer-events-none"
                  title="Ubicación Disstands Barcelona"
                />
              </a>
              <p className="text-xs text-gray-500 mt-2 text-center">
                Barcelona - C/ Joan d&apos;Austria
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>
              © {currentYear} {empresa.nombre}. Todos los derechos reservados.
            </p>
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-center">
              <a
                href={empresa.web}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                disstands.com
              </a>
              <span className="hidden md:inline">|</span>
              <span>Rewind® es marca propiedad de Disstands S.L.U.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
