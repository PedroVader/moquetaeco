"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PhoneIcon, Bars3Icon, XMarkIcon, SparklesIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { empresa } from "@/lib/data";

const navegacion = [
  {
    label: "Inicio",
    href: "/",
  },
  {
    label: "Productos",
    href: "#",
    submenu: [
      { label: "Rewind Flat - Moqueta Ferial", href: "/productos/rewind-flat" },
      { label: "Rewind Dilour - Moqueta Premium", href: "/productos/rewind-dilour" },
    ],
  },
  {
    label: "Por Provincia",
    href: "#",
    submenu: [
      { label: "Barcelona", href: "/moqueta-ecologica-barcelona" },
      { label: "Girona", href: "/moqueta-ecologica-girona" },
      { label: "Tarragona", href: "/moqueta-ecologica-tarragona" },
      { label: "Lleida", href: "/moqueta-ecologica-lleida" },
    ],
  },
  {
    label: "Por Uso",
    href: "#",
    submenu: [
      { label: "Ferias", href: "/barcelona/ferias" },
      { label: "Eventos", href: "/barcelona/eventos" },
      { label: "Congresos", href: "/barcelona/congresos" },
      { label: "Stands", href: "/barcelona/stands" },
      { label: "Bodas", href: "/barcelona/bodas" },
      { label: "Ver todas las provincias →", href: "/#provincias" },
    ],
  },
  {
    label: "Blog",
    href: "/blog",
  },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top bar con teléfono */}
      <div className="bg-primary text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-sm">
          <div className="flex items-center gap-2">
            <SparklesIcon className="w-4 h-4" />
            <span>Rewind® marca propia Disstands - Moqueta 100% reciclable</span>
          </div>
          <a
            href={`tel:${empresa.telefonoInternacional}`}
            className="flex items-center gap-2 font-semibold hover:text-white/90 transition"
          >
            <PhoneIcon className="w-4 h-4" />
            {empresa.telefono}
          </a>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo-moqueta.png"
              alt="Moqueta Ecológica - Disstands"
              width={440}
              height={112}
              className="h-28 w-auto"
              priority
            />
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navegacion.map((item) => (
              <div key={item.label} className="relative group">
                {item.submenu ? (
                  <>
                    <button
                      className="flex items-center gap-1 text-slate hover:text-primary font-medium transition py-2"
                      onMouseEnter={() => setOpenSubmenu(item.label)}
                      onMouseLeave={() => setOpenSubmenu(null)}
                    >
                      {item.label}
                      <ChevronDownIcon className="w-4 h-4" />
                    </button>
                    <div
                      className={`absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 min-w-48 transition-all ${
                        openSubmenu === item.label
                          ? "opacity-100 visible"
                          : "opacity-0 invisible"
                      }`}
                      onMouseEnter={() => setOpenSubmenu(item.label)}
                      onMouseLeave={() => setOpenSubmenu(null)}
                    >
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.href}
                          href={subitem.href}
                          className="block px-4 py-2 text-slate hover:bg-light hover:text-primary transition"
                        >
                          {subitem.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="text-slate hover:text-primary font-medium transition"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}

            {/* CTA Button */}
            <a
              href={`tel:${empresa.telefonoInternacional}`}
              className="flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-5 py-2.5 rounded-lg transition"
            >
              <PhoneIcon className="w-4 h-4" />
              Llamar ahora
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-slate"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t py-4">
            {navegacion.map((item) => (
              <div key={item.label}>
                {item.submenu ? (
                  <>
                    <button
                      className="w-full flex items-center justify-between px-4 py-3 text-slate font-medium"
                      onClick={() =>
                        setOpenSubmenu(
                          openSubmenu === item.label ? null : item.label
                        )
                      }
                    >
                      {item.label}
                      <ChevronDownIcon
                        className={`w-4 h-4 transition ${
                          openSubmenu === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openSubmenu === item.label && (
                      <div className="bg-light">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.href}
                            href={subitem.href}
                            className="block px-8 py-2 text-slate hover:text-primary"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subitem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-4 py-3 text-slate font-medium hover:text-primary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="px-4 pt-4">
              <a
                href={`tel:${empresa.telefonoInternacional}`}
                className="flex items-center justify-center gap-2 bg-accent text-white font-semibold px-5 py-3 rounded-lg w-full"
              >
                <PhoneIcon className="w-4 h-4" />
                {empresa.telefono}
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
