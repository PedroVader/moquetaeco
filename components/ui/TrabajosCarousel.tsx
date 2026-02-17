"use client";

import Image from "next/image";

interface Trabajo {
  id: number;
  imagen: string;
  titulo: string;
  tipo: string;
}

// Imágenes de stock free de Unsplash relacionadas con eventos/ferias/stands
const trabajosRewindFlat: Trabajo[] = [
  {
    id: 1,
    imagen: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
    titulo: "Congreso Internacional",
    tipo: "Congresos",
  },
  {
    id: 2,
    imagen: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=600&h=400&fit=crop",
    titulo: "Feria Comercial",
    tipo: "Ferias",
  },
  {
    id: 3,
    imagen: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&h=400&fit=crop",
    titulo: "Evento Corporativo",
    tipo: "Eventos",
  },
  {
    id: 4,
    imagen: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=600&h=400&fit=crop",
    titulo: "Stand Tecnológico",
    tipo: "Stands",
  },
  {
    id: 5,
    imagen: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&h=400&fit=crop",
    titulo: "Conferencia Empresarial",
    tipo: "Congresos",
  },
  {
    id: 6,
    imagen: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop",
    titulo: "Exposición de Arte",
    tipo: "Exposiciones",
  },
  {
    id: 7,
    imagen: "https://images.unsplash.com/photo-1560439514-4e9645039924?w=600&h=400&fit=crop",
    titulo: "Networking Event",
    tipo: "Eventos",
  },
  {
    id: 8,
    imagen: "https://images.unsplash.com/photo-1559223607-a43c990c692c?w=600&h=400&fit=crop",
    titulo: "Feria Internacional",
    tipo: "Ferias",
  },
];

const trabajosRewindDilour: Trabajo[] = [
  {
    id: 1,
    imagen: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=400&fit=crop",
    titulo: "Gala Corporativa",
    tipo: "Eventos Premium",
  },
  {
    id: 2,
    imagen: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&h=400&fit=crop",
    titulo: "Boda Elegante",
    tipo: "Bodas",
  },
  {
    id: 3,
    imagen: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop",
    titulo: "Evento de Lujo",
    tipo: "Galas",
  },
  {
    id: 4,
    imagen: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=600&h=400&fit=crop",
    titulo: "Celebración VIP",
    tipo: "Eventos Sociales",
  },
  {
    id: 5,
    imagen: "https://images.unsplash.com/photo-1478147427282-58a87a120781?w=600&h=400&fit=crop",
    titulo: "Congreso Premium",
    tipo: "Congresos",
  },
  {
    id: 6,
    imagen: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=600&h=400&fit=crop",
    titulo: "Stand de Alto Standing",
    tipo: "Stands Premium",
  },
  {
    id: 7,
    imagen: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&h=400&fit=crop",
    titulo: "Fiesta Corporativa",
    tipo: "Eventos",
  },
  {
    id: 8,
    imagen: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=600&h=400&fit=crop",
    titulo: "Showroom Exclusivo",
    tipo: "Showrooms",
  },
];

interface TrabajosCarouselProps {
  producto: "flat" | "dilour";
}

export function TrabajosCarousel({ producto }: TrabajosCarouselProps) {
  const trabajos = producto === "flat" ? trabajosRewindFlat : trabajosRewindDilour;

  // Duplicamos los trabajos para crear el efecto infinito
  const trabajosDuplicados = [...trabajos, ...trabajos];

  return (
    <section className="py-12 bg-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-dark text-center mb-2">
          Nuestros Trabajos
        </h2>
        <p className="text-slate text-center">
          Proyectos realizados con moqueta ecológica Rewind {producto === "flat" ? "Flat" : "Dilour"}
        </p>
      </div>

      {/* Carrusel infinito */}
      <div className="relative">
        <div className="flex animate-scroll">
          {trabajosDuplicados.map((trabajo, index) => (
            <div
              key={`${trabajo.id}-${index}`}
              className="flex-shrink-0 w-[300px] md:w-[350px] mx-3"
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={trabajo.imagen}
                    alt={trabajo.titulo}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="inline-block bg-primary/90 text-white text-xs font-medium px-2 py-1 rounded-full mb-1">
                      {trabajo.tipo}
                    </span>
                    <h3 className="text-white font-semibold text-sm">
                      {trabajo.titulo}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="flex justify-center mt-6 gap-2">
        <div className="flex items-center gap-2 text-slate text-sm">
          <span className="w-8 h-0.5 bg-primary rounded-full animate-pulse" />
          <span>Desliza para ver más</span>
          <span className="w-8 h-0.5 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
