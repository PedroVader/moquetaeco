export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  updatedAt?: string;
  author: string;
  category: BlogCategory;
  tags: string[];
  image?: string;
  imageAlt?: string;
  readingTime: number; // minutos
  content: string; // HTML content
}

export type BlogCategory =
  | "guias"
  | "sostenibilidad"
  | "eventos"
  | "productos"
  | "normativa";

export const categoryLabels: Record<BlogCategory, string> = {
  guias: "Guías",
  sostenibilidad: "Sostenibilidad",
  eventos: "Eventos y Ferias",
  productos: "Productos",
  normativa: "Normativa",
};

export const categoryDescriptions: Record<BlogCategory, string> = {
  guias:
    "Guías prácticas sobre moqueta ecológica: instalación, mantenimiento, elección de producto y más.",
  sostenibilidad:
    "Artículos sobre economía circular, reciclaje de moqueta y reducción de huella de carbono en eventos.",
  eventos:
    "Novedades y consejos para ferias, congresos y eventos en Cataluña y España.",
  productos:
    "Información técnica, comparativas y novedades sobre moqueta Rewind Flat y Dilour.",
  normativa:
    "Normativa ignífuga Bfl-s1, regulación de eventos y certificaciones ambientales.",
};

/**
 * Importa todos los posts del directorio de contenido.
 * Devuelve los posts ordenados por fecha (más reciente primero).
 */
export function getAllPosts(): BlogPost[] {
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getPostsByCategory(category: BlogCategory): BlogPost[] {
  return getAllPosts().filter((p) => p.category === category);
}

export function getRelatedPosts(
  currentSlug: string,
  limit = 3
): BlogPost[] {
  const current = getPostBySlug(currentSlug);
  if (!current) return [];

  return getAllPosts()
    .filter((p) => p.slug !== currentSlug)
    .filter(
      (p) =>
        p.category === current.category ||
        p.tags.some((t) => current.tags.includes(t))
    )
    .slice(0, limit);
}

export function getAllCategories(): BlogCategory[] {
  const cats = new Set(posts.map((p) => p.category));
  return Array.from(cats);
}

export function getAllTags(): string[] {
  const tags = new Set(posts.flatMap((p) => p.tags));
  return Array.from(tags).sort();
}

// ============================================================
// POSTS - Añadir nuevos artículos aquí
// ============================================================

const posts: BlogPost[] = [
  {
    slug: "guia-elegir-moqueta-ecologica-evento",
    title: "Guía para elegir la moqueta ecológica ideal para tu evento",
    description:
      "Todo lo que necesitas saber para elegir la moqueta ecológica perfecta: Rewind Flat vs Dilour, colores, medidas y presupuesto.",
    date: "2025-07-01",
    author: "Disstands",
    category: "guias",
    tags: [
      "moqueta ecológica",
      "guía compra",
      "Rewind Flat",
      "Rewind Dilour",
      "eventos",
    ],
    image: "/hero-img/rewind-hero.jpg",
    imageAlt: "Moqueta ecológica Rewind en un stand ferial",
    readingTime: 8,
    content: `
      <p>Elegir la <strong>moqueta ecológica</strong> adecuada para tu evento es una decisión que afecta tanto al aspecto visual como al presupuesto y la sostenibilidad de tu proyecto. En esta guía te ayudamos a tomar la mejor decisión.</p>

      <h2>¿Rewind Flat o Rewind Dilour?</h2>
      <p>La primera decisión es elegir entre nuestros dos productos estrella:</p>

      <h3>Rewind Flat - La opción versátil</h3>
      <ul>
        <li><strong>Espesor:</strong> 2 mm</li>
        <li><strong>Peso:</strong> 230 g/m²</li>
        <li><strong>Precio:</strong> Desde 2,10€/m²</li>
        <li><strong>Ideal para:</strong> Ferias comerciales, eventos con presupuesto ajustado, instalaciones de gran superficie</li>
        <li><strong>Colores:</strong> 30 disponibles en stock</li>
      </ul>

      <h3>Rewind Dilour - La opción premium</h3>
      <ul>
        <li><strong>Espesor:</strong> 4 mm</li>
        <li><strong>Peso:</strong> 650 g/m²</li>
        <li><strong>Precio:</strong> Desde 4,05€/m²</li>
        <li><strong>Ideal para:</strong> Stands de alto standing, áreas VIP, congresos corporativos, showrooms</li>
        <li><strong>Colores:</strong> 29 disponibles en stock</li>
      </ul>

      <h2>¿Cómo calcular los metros cuadrados que necesitas?</h2>
      <p>Para calcular la cantidad de moqueta necesaria:</p>
      <ol>
        <li>Mide el largo y ancho del espacio en metros</li>
        <li>Multiplica largo x ancho para obtener m²</li>
        <li>Añade un 10% extra para recortes y ajustes</li>
        <li>Si el espacio supera 2m de ancho, necesitarás unir rollos (ancho estándar: 2m)</li>
      </ol>

      <h2>Eligiendo el color correcto</h2>
      <p>El color de la moqueta debe complementar la identidad de tu marca. Nuestros colores más solicitados para eventos corporativos son:</p>
      <ul>
        <li><strong>Gris Medio/Gris Jaspe:</strong> Elegancia neutra, combina con todo</li>
        <li><strong>Negro:</strong> Sofisticación y contraste máximo</li>
        <li><strong>Azul Royal/Azul Marino:</strong> Profesionalidad y confianza</li>
        <li><strong>Rojo:</strong> Impacto visual, ideal para marcas dinámicas</li>
        <li><strong>Verde Césped:</strong> Eventos sostenibles, al aire libre</li>
      </ul>

      <h2>Plazos de entrega</h2>
      <p>Con stock permanente en nuestro almacén de Barcelona:</p>
      <ul>
        <li><strong>Barcelona y área metropolitana:</strong> Entrega en 24h</li>
        <li><strong>Resto de Cataluña:</strong> Entrega en 24-48h</li>
        <li><strong>España peninsular:</strong> Entrega en 48-72h</li>
      </ul>
      <p>Para eventos urgentes, disponemos de servicio express. Llámanos al <a href="tel:+34934850085">934 850 085</a>.</p>

      <h2>Conclusión</h2>
      <p>Ya sea que busques la versatilidad de <strong>Rewind Flat</strong> o el confort premium de <strong>Rewind Dilour</strong>, ambas opciones son 100% reciclables, sin látex y certificadas Bfl-s1. La diferencia está en el espesor, el confort y el precio. Para orientarte mejor, usa nuestra <a href="/#calculadora">calculadora de precios</a> o solicita presupuesto personalizado.</p>
    `,
  },
  {
    slug: "normativa-ignifuga-bfl-s1-moqueta-ferial",
    title: "Normativa ignífuga Bfl-s1: qué es y por qué tu moqueta la necesita",
    description:
      "Explicamos la clasificación Bfl-s1 de reacción al fuego, obligatoria en recintos feriales y eventos públicos en España.",
    date: "2025-07-08",
    author: "Disstands",
    category: "normativa",
    tags: [
      "Bfl-s1",
      "normativa ignífuga",
      "certificación",
      "seguridad eventos",
      "recintos feriales",
    ],
    image: "/hero-img/rewind-hero.jpg",
    imageAlt: "Certificación Bfl-s1 moqueta ecológica",
    readingTime: 6,
    content: `
      <p>Si organizas un evento en un recinto ferial, congreso o espacio público en España, la moqueta que utilices <strong>debe cumplir la clasificación de reacción al fuego Bfl-s1</strong>. Es un requisito legal, no una opción. Te explicamos qué significa y cómo cumplirlo.</p>

      <h2>¿Qué significa Bfl-s1?</h2>
      <p>La clasificación <strong>Bfl-s1</strong> es una norma europea (UNE-EN 13501-1) que clasifica los materiales de suelo según su reacción al fuego:</p>
      <ul>
        <li><strong>B:</strong> Contribución al fuego muy limitada</li>
        <li><strong>fl:</strong> Material de suelo (floor)</li>
        <li><strong>s1:</strong> Producción de humo muy baja</li>
      </ul>
      <p>Es la clasificación más alta posible para revestimientos de suelo, solo superada por materiales completamente incombustibles (Afl).</p>

      <h2>¿Dónde es obligatoria?</h2>
      <p>La normativa española (CTE - Código Técnico de Edificación) exige Bfl-s1 en:</p>
      <ul>
        <li>Recintos feriales (Fira Barcelona, IFEMA, etc.)</li>
        <li>Palacios de congresos</li>
        <li>Hoteles y salas de eventos</li>
        <li>Espacios públicos de concurrencia</li>
        <li>Cualquier instalación temporal en espacio público</li>
      </ul>

      <h2>¿Cómo demuestro que mi moqueta cumple?</h2>
      <p>Toda nuestra moqueta Rewind (Flat y Dilour) incluye certificado Bfl-s1 que puedes presentar al recinto ferial o a la inspección municipal. Lo proporcionamos con cada pedido sin coste adicional.</p>

      <h2>¿Qué pasa si uso moqueta sin certificar?</h2>
      <p>Utilizar moqueta sin certificación Bfl-s1 puede suponer:</p>
      <ul>
        <li>Denegación de montaje por parte del recinto</li>
        <li>Multas y sanciones administrativas</li>
        <li>Anulación del seguro de responsabilidad civil</li>
        <li>Riesgo real para la seguridad de los asistentes</li>
      </ul>

      <p>Con Rewind ecológica tienes la tranquilidad de cumplir la normativa sin comprometer la sostenibilidad. <a href="tel:+34934850085">Llámanos al 934 850 085</a> para cualquier duda técnica.</p>
    `,
  },
  {
    slug: "economia-circular-moqueta-reciclable-eventos",
    title: "Economía circular en eventos: cómo la moqueta reciclable cierra el ciclo",
    description:
      "Descubre cómo la moqueta Rewind 100% reciclable aplica la economía circular en el sector ferial, reduciendo residuos y emisiones.",
    date: "2025-07-15",
    author: "Disstands",
    category: "sostenibilidad",
    tags: [
      "economía circular",
      "reciclaje",
      "sostenibilidad",
      "moqueta reciclable",
      "ESG",
      "huella de carbono",
    ],
    image: "/hero-img/rewind-hero.jpg",
    imageAlt: "Ciclo de reciclaje de moqueta ecológica Rewind",
    readingTime: 7,
    content: `
      <p>Cada año, miles de toneladas de moqueta ferial acaban en vertederos tras un solo uso. La moqueta Rewind rompe este ciclo destructivo con un modelo de <strong>economía circular real</strong>.</p>

      <h2>El problema de la moqueta convencional</h2>
      <p>La moqueta ferial tradicional está compuesta por una mezcla de materiales (polipropileno + látex + otros aditivos) que hace imposible su reciclaje. Tras cada evento:</p>
      <ul>
        <li>Se genera una media de 3-5 kg de residuo por m²</li>
        <li>El 95% de esta moqueta acaba en vertedero o incineradora</li>
        <li>Solo en Fira Barcelona se utilizan más de 100.000 m² de moqueta al año</li>
      </ul>

      <h2>Cómo Rewind cierra el ciclo</h2>
      <p>Rewind es la primera moqueta ferial del mundo fabricada como <strong>monomaterial 100% polipropileno sin látex</strong>. Esto permite:</p>
      <ol>
        <li><strong>Fabricación limpia:</strong> Sin agua, -80% energía, -83% gas, -35% CO₂</li>
        <li><strong>Uso en evento:</strong> Mismas prestaciones que moqueta convencional</li>
        <li><strong>Recogida post-evento:</strong> Servicio de recogida incluido</li>
        <li><strong>Reciclaje completo:</strong> Se transforma en granza de polipropileno</li>
        <li><strong>Nueva vida:</strong> La granza se utiliza para fabricar nuevos productos</li>
      </ol>

      <h2>Impacto real en números</h2>
      <p>Por cada 1.000 m² de moqueta Rewind en lugar de convencional:</p>
      <ul>
        <li><strong>0 litros de agua</strong> consumidos en producción (vs. miles de litros)</li>
        <li><strong>350 kg menos de CO₂</strong> emitidos</li>
        <li><strong>0 kg en vertedero</strong> — todo se recicla</li>
        <li><strong>Certificado de reciclaje</strong> disponible para informes ESG</li>
      </ul>

      <h2>Para empresas con política ESG</h2>
      <p>Si tu empresa tiene compromisos de sostenibilidad, la moqueta Rewind te permite documentar la reducción de huella ambiental de tus eventos. Proporcionamos certificado de reciclaje que puedes incluir en tus informes de responsabilidad corporativa.</p>

      <p>Únete al cambio. <a href="tel:+34934850085">Llámanos al 934 850 085</a> o <a href="mailto:ventas@disstands.com">escríbenos</a> para más información.</p>
    `,
  },
];
