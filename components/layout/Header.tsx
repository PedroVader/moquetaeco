"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { PhoneIcon, Bars3Icon, XMarkIcon, SparklesIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { empresa } from "@/lib/data";
import { usePresupuesto } from "@/context/PresupuestoContext";

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
  const { abrirModal } = usePresupuesto();

  const closeMenu = useCallback(() => {
    setMobileMenuOpen(false);
    setOpenSubmenu(null);
  }, []);

  // Close mobile menu on route change / scroll
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleScroll = () => closeMenu();
    window.addEventListener("scroll", handleScroll, { once: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileMenuOpen, closeMenu]);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top bar con teléfono */}
      <div className="bg-primary text-white py-1.5 sm:py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-sm">
          <div className="hidden sm:flex items-center gap-2">
            <SparklesIcon className="w-4 h-4" />
            <span>Rewind® marca propia Disstands - Moqueta 100% reciclable</span>
          </div>
          <span className="sm:hidden text-xs">Moqueta 100% reciclable</span>
          <a
            href={`tel:${empresa.telefonoInternacional}`}
            className="flex items-center gap-1.5 sm:gap-2 font-semibold hover:text-white/90 transition"
          >
            <PhoneIcon className="w-4 h-4" />
            <span className="text-xs sm:text-sm">{empresa.telefono}</span>
          </a>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center" onClick={closeMenu}>
            <Image
              src="/logo-moqueta.png"
              alt="Moqueta Ecológica - Disstands"
              width={440}
              height={112}
              className="h-16 sm:h-28 w-auto"
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

          {/* Mobile: CTA + hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={`tel:${empresa.telefonoInternacional}`}
              className="flex items-center gap-1.5 bg-accent text-white text-sm font-semibold px-3 py-2 rounded-lg"
              aria-label="Llamar"
            >
              <PhoneIcon className="w-4 h-4" />
              <span className="hidden xs:inline">Llamar</span>
            </a>
            <button
              className="p-2 text-slate hover:text-dark transition"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay + navigation */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/30 z-40 md:hidden"
            onClick={closeMenu}
            aria-hidden="true"
          />

          {/* Slide-down panel */}
          <div className="fixed inset-x-0 top-[calc(3.5rem+2rem)] bottom-0 z-50 md:hidden overflow-y-auto bg-white animate-in slide-in-from-top-2 duration-200">
            <div className="pb-6">
              {navegacion.map((item) => (
                <div key={item.label} className="border-b border-gray-100">
                  {item.submenu ? (
                    <>
                      <button
                        className="w-full flex items-center justify-between px-5 py-3.5 text-dark font-medium active:bg-light"
                        onClick={() =>
                          setOpenSubmenu(
                            openSubmenu === item.label ? null : item.label
                          )
                        }
                      >
                        {item.label}
                        <ChevronDownIcon
                          className={`w-5 h-5 text-slate transition-transform duration-200 ${
                            openSubmenu === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-200 ${
                          openSubmenu === item.label
                            ? "max-h-96 opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="bg-light/50 pb-2">
                          {item.submenu.map((subitem) => (
                            <Link
                              key={subitem.href}
                              href={subitem.href}
                              className="block px-8 py-2.5 text-slate hover:text-primary active:bg-light transition text-[15px]"
                              onClick={closeMenu}
                            >
                              {subitem.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-5 py-3.5 text-dark font-medium active:bg-light transition"
                      onClick={closeMenu}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}

              {/* CTAs mobile */}
              <div className="px-5 pt-5 space-y-3">
                <button
                  onClick={() => {
                    closeMenu();
                    abrirModal();
                  }}
                  className="flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold py-3.5 rounded-xl w-full transition cursor-pointer text-[15px]"
                >
                  Pedir Presupuesto Gratis
                </button>
                <a
                  href={`tel:${empresa.telefonoInternacional}`}
                  className="flex items-center justify-center gap-2 bg-primary text-white font-semibold py-3.5 rounded-xl w-full text-[15px]"
                >
                  <PhoneIcon className="w-4 h-4" />
                  {empresa.telefono}
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
