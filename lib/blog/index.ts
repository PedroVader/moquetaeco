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
    slug: "como-calcular-metros-cuadrados-moqueta-evento",
    title: "Cómo calcular los metros cuadrados de moqueta para tu evento [2025]",
    description:
      "Aprende a calcular la cantidad exacta de moqueta que necesitas para tu stand, feria o evento. Fórmulas, tablas de referencia por tipo de espacio y errores comunes.",
    date: "2025-08-05",
    updatedAt: "2026-02-25",
    author: "Disstands",
    category: "guias",
    tags: [
      "calcular m²",
      "metros cuadrados moqueta",
      "moqueta ferial",
      "presupuesto eventos",
      "instalación moqueta",
    ],
    image: "/hero-img/hero-img-2.webp",
    imageAlt: "Cálculo de metros cuadrados de moqueta para un stand ferial",
    readingTime: 9,
    content: `
      <p>Uno de los errores más frecuentes al presupuestar moqueta para un evento es <strong>calcular mal la superficie necesaria</strong>. Quedarse corto obliga a compras urgentes de última hora (más caras), y pasarse supone un gasto innecesario. En esta guía te enseñamos a calcular la cantidad exacta.</p>

      <blockquote>
        <p><strong>Regla de oro:</strong> Calcula la superficie real y añade siempre un <strong>10-15% de margen</strong> para recortes, ajustes en esquinas y uniones de tiras. Usa nuestra <a href="/#calculadora">calculadora online</a> para obtener el precio al instante.</p>
      </blockquote>

      <h2>Fórmula básica: largo × ancho + margen</h2>
      <p>El cálculo es sencillo pero hay matices según la forma del espacio:</p>
      <ol>
        <li><strong>Mide el largo y ancho</strong> del área en metros (siempre en metros, no centímetros)</li>
        <li><strong>Multiplica largo × ancho</strong> para obtener m²</li>
        <li><strong>Suma un 10-15%</strong> para mermas (recortes, esquinas, solapamientos)</li>
        <li><strong>Ten en cuenta el ancho del rollo:</strong> los rollos de Rewind miden 2 m de ancho, así que si tu espacio tiene 5 m de ancho, necesitarás 3 tiras de 2 m (con algo de solape)</li>
      </ol>

      <h2>Tabla de referencia rápida por tipo de espacio</h2>
      <p>Estos son los metros cuadrados habituales según el tipo de instalación:</p>

      <table>
        <thead>
          <tr>
            <th>Tipo de espacio</th>
            <th>Superficie típica</th>
            <th>Margen recomendado</th>
            <th>m² a presupuestar</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Stand pequeño (3×3)</td><td>9 m²</td><td>10%</td><td>10 m²</td></tr>
          <tr><td>Stand mediano (4×5)</td><td>20 m²</td><td>10%</td><td>22 m²</td></tr>
          <tr><td>Stand grande (6×8)</td><td>48 m²</td><td>12%</td><td>54 m²</td></tr>
          <tr><td>Isla ferial (10×10)</td><td>100 m²</td><td>12%</td><td>112 m²</td></tr>
          <tr><td>Pasillo de feria (50m lineales, 3m ancho)</td><td>150 m²</td><td>15%</td><td>173 m²</td></tr>
          <tr><td>Salón de <a href="/barcelona/congresos">congreso</a></td><td>200-500 m²</td><td>10%</td><td>220-550 m²</td></tr>
          <tr><td>Alfombra de <a href="/barcelona/bodas">boda</a> (pasillo)</td><td>15-30 m²</td><td>15%</td><td>17-35 m²</td></tr>
        </tbody>
      </table>

      <h2>Cómo calcular espacios irregulares</h2>
      <p>No todos los espacios son rectangulares. Para formas en L, en U o con ángulos:</p>
      <ol>
        <li><strong>Divide el espacio</strong> en rectángulos más pequeños</li>
        <li><strong>Calcula cada rectángulo</strong> por separado (largo × ancho)</li>
        <li><strong>Suma los resultados</strong></li>
        <li><strong>Añade un 15% de margen</strong> (más alto que en espacios regulares porque hay más cortes)</li>
      </ol>

      <blockquote>
        <p><strong>Ejemplo práctico:</strong> Un stand en forma de L con una sección de 4×3 m y otra de 2×3 m: (4×3) + (2×3) = 12 + 6 = 18 m². Con 15% de margen: 18 × 1,15 = <strong>20,7 m²</strong>. Con <a href="/productos/rewind-flat">Rewind Flat</a> a 2,10€/m² = aproximadamente 43€.</p>
      </blockquote>

      <h2>El factor del ancho de rollo</h2>
      <p>La moqueta Rewind viene en rollos de <strong>2 metros de ancho × 50 metros de largo</strong>. Esto afecta al cálculo:</p>

      <table>
        <thead>
          <tr>
            <th>Ancho del espacio</th>
            <th>Tiras necesarias</th>
            <th>Moqueta real usada</th>
            <th>Desperdicio</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>2 m o menos</td><td>1 tira</td><td>2 m × largo</td><td>Mínimo</td></tr>
          <tr><td>2,1 - 4 m</td><td>2 tiras</td><td>4 m × largo</td><td>Hasta 1,9 m de ancho</td></tr>
          <tr><td>4,1 - 6 m</td><td>3 tiras</td><td>6 m × largo</td><td>Hasta 1,9 m de ancho</td></tr>
          <tr><td>6,1 - 8 m</td><td>4 tiras</td><td>8 m × largo</td><td>Hasta 1,9 m de ancho</td></tr>
        </tbody>
      </table>

      <p><strong>Consejo:</strong> Si tu stand mide exactamente 4 m de ancho, 2 tiras encajan perfectamente sin desperdicio. Diseña tu espacio en múltiplos de 2 m de ancho siempre que sea posible.</p>

      <h2>Errores comunes al calcular moqueta</h2>
      <p>Estos son los 5 errores que vemos con más frecuencia:</p>
      <ol>
        <li><strong>No contar el margen de corte:</strong> Siempre se pierde algo en cada corte. Un 10% mínimo.</li>
        <li><strong>Olvidar los laterales:</strong> Si la moqueta sube por los laterales del stand, cuenta esa superficie</li>
        <li><strong>Medir en centímetros y confundir con metros:</strong> 300 cm = 3 m, no 300 m²</li>
        <li><strong>No considerar la dirección de las tiras:</strong> El sentido del pelo (en <a href="/productos/rewind-dilour">Dilour</a>) debe ser uniforme</li>
        <li><strong>Calcular justo, sin margen:</strong> Un rollo puede tener pequeñas variaciones. Siempre pide algo más.</li>
      </ol>

      <h2>Tabla de precios según superficie</h2>
      <p>Orientación de costes con moqueta <a href="/productos/rewind-flat">Rewind Flat</a> (desde 2,10€/m²):</p>

      <table>
        <thead>
          <tr>
            <th>Superficie</th>
            <th>Precio estimado (Flat)</th>
            <th>Precio estimado (Dilour)</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>10 m²</td><td>21-27€</td><td>41-47€</td></tr>
          <tr><td>25 m²</td><td>53-66€</td><td>101-116€</td></tr>
          <tr><td>50 m²</td><td>105-133€</td><td>203-233€</td></tr>
          <tr><td>100 m²</td><td>210-265€</td><td>405-465€</td></tr>
          <tr><td>500 m²</td><td>1.050-1.325€</td><td>2.025-2.325€</td></tr>
        </tbody>
      </table>
      <p>Precios IVA no incluido. <a href="/contacto">Solicita presupuesto</a> para cantidades grandes o necesidades especiales.</p>

      <h2>¿Necesitas ayuda con el cálculo?</h2>
      <p>Si tienes un plano del espacio, envíanoslo por email a <a href="mailto:ventas@disstands.com">ventas@disstands.com</a> y te calculamos la cantidad exacta sin compromiso. También puedes <a href="tel:+34934850085">llamarnos al 934 850 085</a>.</p>
      <p>Servimos en toda Cataluña: <a href="/moqueta-ecologica-barcelona">Barcelona</a>, <a href="/moqueta-ecologica-girona">Girona</a>, <a href="/moqueta-ecologica-tarragona">Tarragona</a> y <a href="/moqueta-ecologica-lleida">Lleida</a>.</p>
    `,
  },
  {
    slug: "moqueta-stands-feriales-guia-diseno",
    title: "Moqueta para stands feriales: guía de diseño y elección de color",
    description:
      "Cómo elegir la moqueta perfecta para tu stand: colores por sector, combinaciones que funcionan, errores de diseño a evitar y consejos de instalación profesional.",
    date: "2025-08-20",
    updatedAt: "2026-02-25",
    author: "Disstands",
    category: "eventos",
    tags: [
      "stands feriales",
      "diseño stands",
      "colores moqueta",
      "ferias comerciales",
      "identidad corporativa",
      "montaje stands",
    ],
    image: "/hero-img/rewind-hero.webp",
    imageAlt: "Stand ferial con moqueta ecológica Rewind en una feria comercial",
    readingTime: 10,
    content: `
      <p>La moqueta del stand es mucho más que un simple revestimiento de suelo: es una <strong>herramienta de comunicación visual</strong> que refuerza tu marca y condiciona la primera impresión del visitante. Con más de 25 años montando stands en <a href="/moqueta-ecologica-barcelona">Barcelona</a>, en Disstands hemos visto qué funciona y qué no.</p>

      <blockquote>
        <p><strong>Dato clave:</strong> El 68% de los visitantes de una feria decide si se acerca a un stand en los primeros 3 segundos. El color y acabado del suelo es uno de los elementos que más influye en esa decisión (fuente: UFI Global Exhibition Industry).</p>
      </blockquote>

      <h2>Colores recomendados por sector profesional</h2>
      <p>Después de miles de instalaciones en recintos como Fira Barcelona, CCIB y ferias en toda <a href="/moqueta-ecologica-girona">Girona</a>, <a href="/moqueta-ecologica-tarragona">Tarragona</a> y <a href="/moqueta-ecologica-lleida">Lleida</a>, estas son nuestras recomendaciones:</p>

      <table>
        <thead>
          <tr>
            <th>Sector</th>
            <th>Colores principales</th>
            <th>Por qué funcionan</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><strong>Tecnología / IT</strong></td><td>Gris Medio, Negro, Blanco</td><td>Transmiten modernidad y limpieza visual</td></tr>
          <tr><td><strong>Salud / Farmacia</strong></td><td>Azul Royal, Blanco, Verde Claro</td><td>Asociados a confianza, higiene y naturaleza</td></tr>
          <tr><td><strong>Alimentación</strong></td><td>Rojo, Beige, Verde Césped</td><td>Colores cálidos que estimulan el apetito</td></tr>
          <tr><td><strong>Automoción</strong></td><td>Negro, Gris Oscuro, Rojo</td><td>Elegancia y dinamismo</td></tr>
          <tr><td><strong>Moda / Lujo</strong></td><td>Negro, Burdeos, Gris Jaspe</td><td>Sofisticación y exclusividad</td></tr>
          <tr><td><strong>Energía / Sostenibilidad</strong></td><td>Verde Césped, Beige, Gris Claro</td><td>Vinculación con naturaleza y medio ambiente</td></tr>
          <tr><td><strong>Finanzas / Banca</strong></td><td>Azul Marino, Gris Medio, Beige</td><td>Seriedad, estabilidad y profesionalidad</td></tr>
          <tr><td><strong>Turismo / Hostelería</strong></td><td>Beige, Arena, Azul Cielo</td><td>Calidez y evocación vacacional</td></tr>
        </tbody>
      </table>

      <h2>3 reglas de diseño para el suelo de tu stand</h2>

      <h3>Regla 1: El suelo debe contrastar con las paredes</h3>
      <p>Si tu stand tiene paredes blancas, evita un suelo blanco. El visitante necesita referencias visuales para percibir los límites del espacio. Un suelo gris medio o negro con paredes claras crea una base elegante.</p>

      <h3>Regla 2: Un solo color de suelo, máximo dos</h3>
      <p>Los diseños de suelo con demasiados colores distraen y dan sensación de desorden. La excepción son los <strong>pasillos direccionales</strong>: una franja de color diferente puede guiar al visitante hacia el interior del stand.</p>

      <h3>Regla 3: Piensa en el mantenimiento durante el evento</h3>
      <p>Los colores claros (Blanco, Beige claro) se ensucian más rápido con el tránsito. Si tu evento dura 3+ días, considera un tono medio que disimule las pisadas.</p>

      <h2>Rewind Flat vs Dilour para stands</h2>
      <p>La elección entre <a href="/productos/rewind-flat">Flat</a> y <a href="/productos/rewind-dilour">Dilour</a> depende del posicionamiento de tu marca:</p>

      <table>
        <thead>
          <tr>
            <th>Criterio</th>
            <th>Rewind Flat</th>
            <th>Rewind Dilour</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><strong>Aspecto visual</strong></td><td>Profesional, funcional</td><td>Premium, aterciopelado</td></tr>
          <tr><td><strong>Sensación al pisar</strong></td><td>Firme, uniforme</td><td>Suave, acolchada</td></tr>
          <tr><td><strong>Ideal para</strong></td><td><a href="/barcelona/ferias">Ferias</a> con alto tránsito</td><td>Stands VIP, showrooms, zonas lounge</td></tr>
          <tr><td><strong>Absorción acústica</strong></td><td>Baja</td><td>~20 dB (ideal para <a href="/barcelona/congresos">congresos</a>)</td></tr>
          <tr><td><strong>Precio</strong></td><td>Desde 2,10€/m²</td><td>Desde 4,05€/m²</td></tr>
        </tbody>
      </table>

      <blockquote>
        <p><strong>Combinación profesional:</strong> Muchos montadores usan Dilour en la zona de reuniones y Flat en el resto del stand. Ambas líneas comparten colores, así que se pueden combinar con acabados diferentes manteniendo el mismo tono.</p>
      </blockquote>

      <h2>Errores de diseño más comunes</h2>
      <p>Estos son los errores que vemos repetirse en ferias:</p>
      <ol>
        <li><strong>Elegir el color sin ver muestra física:</strong> Los colores en pantalla no coinciden con la realidad. Pide muestras gratuitas</li>
        <li><strong>No verificar la dirección del pelo:</strong> En Dilour, todas las tiras deben ir en la misma dirección para que el color se vea uniforme</li>
        <li><strong>Montar la moqueta con arrugas:</strong> Una instalación profesional evita los pliegues que son antiestéticos y peligrosos</li>
        <li><strong>Ignorar las juntas entre tiras:</strong> Las juntas visibles dan aspecto descuidado. Un instalador experto las hace prácticamente invisibles</li>
        <li><strong>Olvidar la <a href="/blog/normativa-ignifuga-bfl-s1-moqueta-ferial">certificación Bfl-s1</a>:</strong> Sin ella, el recinto ferial puede impedir el montaje</li>
      </ol>

      <h2>Instalación profesional: por qué marca la diferencia</h2>
      <p>Nuestro equipo de instaladores en Disstands monta stands en recintos de toda Cataluña: <a href="/comarcas/barcelones">Barcelonès</a>, <a href="/comarcas/girones">Gironès</a>, <a href="/comarcas/tarragones">Tarragonès</a> y <a href="/comarcas/segria">Segrià</a>. El servicio profesional incluye:</p>
      <ul>
        <li>Medición y corte a medida en obra</li>
        <li>Fijación con cinta de doble cara removible (no daña el suelo)</li>
        <li>Juntas invisibles entre tiras</li>
        <li>Dirección uniforme del pelo en toda la superficie</li>
        <li>Recogida y <a href="/blog/economia-circular-moqueta-reciclable-eventos">reciclaje post-evento</a></li>
      </ul>
      <p><strong>Importante:</strong> El servicio de montaje está disponible exclusivamente para profesionales del sector ferial.</p>

      <h2>Solicita muestras gratuitas</h2>
      <p>Antes de tomar una decisión, te enviamos muestras de los colores que te interesen sin coste. <a href="/contacto">Contacta con nosotros</a> indicando los colores que necesitas y te las enviamos en 24-48h. O llámanos al <a href="tel:+34934850085">934 850 085</a>.</p>
    `,
  },
  {
    slug: "ventajas-moqueta-sin-latex-eventos",
    title: "5 ventajas de la moqueta sin látex para eventos y ferias",
    description:
      "Por qué elegir moqueta sin látex: salud, reciclabilidad, rendimiento y coste. Comparativa técnica con moqueta convencional con datos reales.",
    date: "2025-09-10",
    updatedAt: "2026-02-25",
    author: "Disstands",
    category: "productos",
    tags: [
      "sin látex",
      "moqueta sin látex",
      "alergias",
      "reciclable",
      "polipropileno",
      "moqueta saludable",
      "VOC",
    ],
    image: "/hero-img/hero-img-2.webp",
    imageAlt: "Moqueta ecológica sin látex Rewind para eventos y ferias",
    readingTime: 8,
    content: `
      <p>El <strong>látex</strong> ha sido durante décadas el componente principal del backing (reverso) de las moquetas convencionales. Pero tiene un problema grave: convierte la moqueta en un residuo no reciclable y puede afectar la calidad del aire interior. La moqueta Rewind elimina el látex por completo. Estas son las 5 ventajas principales.</p>

      <blockquote>
        <p><strong>En resumen:</strong> Sin látex = 100% reciclable + mejor calidad del aire + menos emisiones en fabricación + mismo rendimiento. No hay compromiso.</p>
      </blockquote>

      <h2>1. Reciclabilidad real al 100%</h2>
      <p>Esta es la ventaja más importante desde el punto de vista ambiental. La moqueta convencional mezcla polipropileno con látex, creando un material compuesto que <strong>no se puede separar para reciclar</strong>.</p>

      <table>
        <thead>
          <tr>
            <th>Aspecto</th>
            <th>Moqueta con látex</th>
            <th>Moqueta Rewind (sin látex)</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><strong>Composición</strong></td><td>Polipropileno + látex + aditivos</td><td>100% polipropileno (monomaterial)</td></tr>
          <tr><td><strong>Reciclable</strong></td><td>No (multimaterial inseparable)</td><td>Sí, 100%</td></tr>
          <tr><td><strong>Destino post-evento</strong></td><td>Vertedero o incineradora</td><td>Reciclaje en granza de PP</td></tr>
          <tr><td><strong>Certificado de reciclaje</strong></td><td>No disponible</td><td>Sí, para informes ESG</td></tr>
        </tbody>
      </table>

      <p>Al ser monomaterial, la moqueta Rewind se tritura y transforma en <strong>granza de polipropileno</strong> que se usa para fabricar nuevos productos. Más detalles en nuestro artículo sobre <a href="/blog/economia-circular-moqueta-reciclable-eventos">economía circular en eventos</a>.</p>

      <h2>2. Mejor calidad del aire interior</h2>
      <p>El látex es una fuente conocida de <strong>compuestos orgánicos volátiles (VOC)</strong>, sustancias que se liberan al aire y pueden causar:</p>
      <ul>
        <li>Irritación de ojos, nariz y garganta</li>
        <li>Dolor de cabeza y fatiga</li>
        <li>Reacciones alérgicas en personas sensibles al látex</li>
        <li>Síndrome del edificio enfermo en exposiciones prolongadas</li>
      </ul>
      <p>En un <a href="/barcelona/congresos">congreso</a> o <a href="/barcelona/ferias">feria</a> con miles de visitantes, la calidad del aire es fundamental. La moqueta Rewind no contiene látex ni solventes, reduciendo drásticamente las emisiones de VOC.</p>

      <blockquote>
        <p><strong>Dato:</strong> Se estima que entre el 1% y el 6% de la población tiene sensibilidad al látex. En un evento con 10.000 visitantes, podrían ser hasta 600 personas afectadas por una moqueta convencional.</p>
      </blockquote>

      <h2>3. Fabricación más limpia: -80% energía, 0 agua</h2>
      <p>El proceso de aplicación del látex al backing de la moqueta convencional requiere grandes cantidades de agua y energía para el secado. Al eliminar este paso:</p>

      <table>
        <thead>
          <tr>
            <th>Recurso</th>
            <th>Reducción vs. convencional</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><strong>Consumo de agua</strong></td><td>100% (0 litros utilizados)</td></tr>
          <tr><td><strong>Consumo energético</strong></td><td>-80%</td></tr>
          <tr><td><strong>Consumo de gas</strong></td><td>-83%</td></tr>
          <tr><td><strong>Emisiones de CO₂</strong></td><td>-35%</td></tr>
        </tbody>
      </table>

      <p>Estos datos están respaldados por los análisis de ciclo de vida del producto y se reflejan en el certificado de reciclaje que proporcionamos con cada proyecto.</p>

      <h2>4. Mismo rendimiento, misma certificación</h2>
      <p>Eliminar el látex no significa perder prestaciones. La moqueta Rewind mantiene:</p>
      <ul>
        <li><strong>Certificación <a href="/blog/normativa-ignifuga-bfl-s1-moqueta-ferial">Bfl-s1</a></strong> de reacción al fuego, por las propiedades intrínsecas del polipropileno</li>
        <li><strong>Resistencia al tránsito intenso</strong>, probada en ferias como el Mobile World Congress</li>
        <li><strong>Estabilidad dimensional</strong> sin deformaciones ni encogimientos</li>
        <li><strong>30 colores en stock permanente</strong> para cualquier necesidad de diseño</li>
        <li><strong>Dos acabados</strong>: <a href="/productos/rewind-flat">Flat</a> (punzonada, 2mm) y <a href="/productos/rewind-dilour">Dilour</a> (aterciopelada, 4mm)</li>
      </ul>

      <h2>5. Precio competitivo</h2>
      <p>Una preocupación habitual es que los productos ecológicos sean más caros. En el caso de Rewind, al simplificar el proceso de fabricación (menos pasos, menos materias primas), el precio es <strong>competitivo frente a la moqueta convencional</strong>:</p>
      <ul>
        <li><a href="/productos/rewind-flat">Rewind Flat</a>: desde <strong>2,10€/m²</strong></li>
        <li><a href="/productos/rewind-dilour">Rewind Dilour</a>: desde <strong>4,05€/m²</strong></li>
      </ul>
      <p>A esto hay que sumar el ahorro potencial en gestión de residuos: con moqueta convencional pagas para enviarla a vertedero; con Rewind, el reciclaje cierra el ciclo.</p>

      <h2>Conclusión: sin látex es mejor en todos los aspectos</h2>
      <p>La moqueta sin látex no es una moda ni un compromiso. Es una mejora técnica, ambiental y económica respecto a la moqueta convencional. Rewind lo demuestra en cada instalación que hacemos en <a href="/moqueta-ecologica-barcelona">Barcelona</a>, <a href="/moqueta-ecologica-girona">Girona</a>, <a href="/moqueta-ecologica-tarragona">Tarragona</a> y <a href="/moqueta-ecologica-lleida">Lleida</a>.</p>
      <p><a href="/contacto">Solicita presupuesto</a> o <a href="tel:+34934850085">llámanos al 934 850 085</a> para más información.</p>
    `,
  },
  {
    slug: "guia-elegir-moqueta-ecologica-evento",
    title: "Guía completa para elegir moqueta ecológica para tu evento [2025]",
    description:
      "Todo lo que necesitas saber para elegir la moqueta ecológica perfecta: comparativa Rewind Flat vs Dilour, tabla de precios, colores, cálculo de m² y plazos de entrega.",
    date: "2025-07-01",
    updatedAt: "2026-02-25",
    author: "Disstands",
    category: "guias",
    tags: [
      "moqueta ecológica",
      "guía compra",
      "Rewind Flat",
      "Rewind Dilour",
      "eventos",
      "precios moqueta",
    ],
    image: "/hero-img/rewind-hero.webp",
    imageAlt: "Moqueta ecológica Rewind instalada en un stand ferial profesional",
    readingTime: 12,
    content: `
      <p>Elegir la <strong>moqueta ecológica</strong> adecuada para tu evento es una decisión que afecta al aspecto visual, al presupuesto y a la sostenibilidad de tu proyecto. En esta guía te ayudamos paso a paso a tomar la mejor decisión, con datos reales y tablas comparativas.</p>

      <blockquote>
        <p><strong>Resumen rápido:</strong> Si buscas la opción más económica y versátil, elige <a href="/productos/rewind-flat">Rewind Flat</a> (desde 2,10€/m²). Si necesitas un acabado premium con mayor confort, elige <a href="/productos/rewind-dilour">Rewind Dilour</a> (desde 4,05€/m²). Ambas son 100% reciclables y certificadas Bfl-s1.</p>
      </blockquote>

      <h2>Rewind Flat vs Rewind Dilour: tabla comparativa</h2>
      <p>La primera decisión es elegir entre nuestros dos productos. Aquí tienes una comparativa detallada:</p>

      <table>
        <thead>
          <tr>
            <th>Característica</th>
            <th>Rewind Flat</th>
            <th>Rewind Dilour</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><strong>Espesor</strong></td><td>2 mm</td><td>4 mm</td></tr>
          <tr><td><strong>Peso</strong></td><td>230 g/m²</td><td>650 g/m²</td></tr>
          <tr><td><strong>Precio desde</strong></td><td>2,10€/m²</td><td>4,05€/m²</td></tr>
          <tr><td><strong>Precio hasta</strong></td><td>2,65€/m²</td><td>4,65€/m²</td></tr>
          <tr><td><strong>Colores en stock</strong></td><td>30</td><td>29</td></tr>
          <tr><td><strong>Ancho del rollo</strong></td><td>2 m</td><td>2 m</td></tr>
          <tr><td><strong>Composición</strong></td><td>100% polipropileno</td><td>100% polipropileno</td></tr>
          <tr><td><strong>Látex</strong></td><td>Sin látex</td><td>Sin látex</td></tr>
          <tr><td><strong>Certificación fuego</strong></td><td>Bfl-s1</td><td>Bfl-s1</td></tr>
          <tr><td><strong>Reciclable</strong></td><td>100%</td><td>100%</td></tr>
          <tr><td><strong>Textura</strong></td><td>Lisa (punzonada)</td><td>Aterciopelada (Dilour)</td></tr>
        </tbody>
      </table>

      <h3>¿Cuándo elegir Rewind Flat?</h3>
      <p><a href="/productos/rewind-flat">Rewind Flat</a> es la elección ideal cuando:</p>
      <ul>
        <li>El presupuesto es un factor determinante</li>
        <li>Se trata de <a href="/barcelona/ferias">ferias comerciales</a> con gran superficie</li>
        <li>La moqueta se va a usar durante 1-3 días</li>
        <li>Necesitas cubrir pasillos, zonas comunes o áreas de tránsito</li>
        <li>Tienes un evento con instalación y desmontaje rápido</li>
      </ul>

      <h3>¿Cuándo elegir Rewind Dilour?</h3>
      <p><a href="/productos/rewind-dilour">Rewind Dilour</a> es la mejor opción para:</p>
      <ul>
        <li><a href="/barcelona/stands">Stands</a> de alto standing o marcas premium</li>
        <li>Áreas VIP y zonas de reuniones</li>
        <li><a href="/barcelona/congresos">Congresos</a> corporativos donde importa el confort acústico</li>
        <li>Showrooms y espacios expositivos permanentes</li>
        <li><a href="/barcelona/bodas">Bodas</a> y eventos de alta gama</li>
      </ul>

      <h2>Cómo calcular los metros cuadrados que necesitas</h2>
      <p>Para calcular la cantidad de moqueta necesaria para tu evento, sigue estos pasos:</p>
      <ol>
        <li><strong>Mide el espacio:</strong> Toma el largo y ancho del área en metros</li>
        <li><strong>Calcula la superficie:</strong> Multiplica largo × ancho para obtener m²</li>
        <li><strong>Añade margen:</strong> Suma un 10-15% extra para recortes, ajustes y esquinas</li>
        <li><strong>Cuenta los rollos:</strong> El ancho estándar es 2 m, así que si tu espacio supera 2 m de ancho necesitarás unir tiras</li>
      </ol>

      <blockquote>
        <p><strong>Ejemplo práctico:</strong> Un stand de 6×4 metros = 24 m². Con un 10% de margen necesitarás 26,4 m². Con Rewind Flat a 2,10€/m² el coste sería de aproximadamente 55€. Usa nuestra <a href="/#calculadora">calculadora de precios online</a> para obtener un presupuesto detallado al instante.</p>
      </blockquote>

      <h2>Los 10 colores más solicitados para eventos corporativos</h2>
      <p>El color de la moqueta debe complementar la identidad visual de tu marca. Estos son los colores más demandados por los profesionales del sector ferial:</p>

      <ol>
        <li><strong>Gris Medio:</strong> El más polivalente, combina con cualquier diseño de stand</li>
        <li><strong>Negro:</strong> Sofisticación máxima, ideal para marcas de lujo y tecnología</li>
        <li><strong>Gris Jaspe:</strong> Tono neutro cálido, disimula bien las huellas de pisadas</li>
        <li><strong>Azul Royal:</strong> Profesionalidad y confianza, muy usado en sector financiero y sanitario</li>
        <li><strong>Azul Marino:</strong> Elegancia corporativa sobria</li>
        <li><strong>Rojo:</strong> Alto impacto visual, perfecto para marcas dinámicas y automoción</li>
        <li><strong>Blanco:</strong> Limpieza y modernidad, requiere más cuidado durante el evento</li>
        <li><strong>Verde Césped:</strong> Eventos eco, espacios al aire libre, sector agrícola</li>
        <li><strong>Burdeos:</strong> Calidez y distinción, muy usado en <a href="/barcelona/bodas">bodas</a> y galas</li>
        <li><strong>Beige:</strong> Neutralidad cálida, ideal para espacios amplios y luminosos</li>
      </ol>

      <p>Los 30 colores están disponibles en stock permanente en nuestro almacén de <a href="/moqueta-ecologica-barcelona">Barcelona</a>, lo que garantiza disponibilidad inmediata.</p>

      <h2>Plazos de entrega por zona</h2>
      <p>Disponemos de stock permanente en nuestro almacén central de Barcelona (C/ Joan d'Austria). Los plazos de entrega son:</p>

      <table>
        <thead>
          <tr>
            <th>Zona de entrega</th>
            <th>Plazo estándar</th>
            <th>Servicio urgente</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><a href="/moqueta-ecologica-barcelona">Barcelona</a> y área metropolitana</td><td>24 h</td><td>Mismo día</td></tr>
          <tr><td><a href="/moqueta-ecologica-girona">Girona</a>, <a href="/moqueta-ecologica-tarragona">Tarragona</a>, <a href="/moqueta-ecologica-lleida">Lleida</a></td><td>24-48 h</td><td>24 h</td></tr>
          <tr><td>España peninsular</td><td>48-72 h</td><td>24-48 h</td></tr>
        </tbody>
      </table>

      <p>Para <a href="/barcelona/eventos">eventos urgentes</a>, disponemos de servicio express con entrega en el mismo día dentro de Barcelona. <a href="tel:+34934850085">Llámanos al 934 850 085</a> o <a href="/contacto">contacta con nosotros</a>.</p>

      <h2>Servicio de instalación profesional</h2>
      <p>Nuestro equipo de instaladores cuenta con <strong>más de 25 años de experiencia</strong> en montaje de moqueta para ferias y eventos. El servicio incluye:</p>
      <ul>
        <li>Instalación en toda Cataluña: comarcas como <a href="/comarcas/barcelones">Barcelonès</a>, <a href="/comarcas/valles-occidental">Vallès Occidental</a> o <a href="/comarcas/baix-llobregat">Baix Llobregat</a></li>
        <li>Montaje nocturno disponible para eventos que lo requieran</li>
        <li>Servicio de recogida y <a href="/blog/economia-circular-moqueta-reciclable-eventos">reciclaje post-evento</a></li>
        <li>Cobertura en municipios principales: <a href="/municipios/hospitalet">L'Hospitalet</a>, <a href="/municipios/terrassa">Terrassa</a>, <a href="/municipios/sabadell">Sabadell</a>, <a href="/municipios/mataro">Mataró</a> y más</li>
      </ul>
      <p><strong>Importante:</strong> El servicio de montaje está disponible exclusivamente para profesionales del sector (montadores de stands, organizadores de eventos, productoras).</p>

      <h2>Checklist antes de comprar moqueta ecológica</h2>
      <p>Antes de hacer tu pedido, asegúrate de tener claro:</p>
      <ol>
        <li>Metros cuadrados necesarios (con margen del 10-15%)</li>
        <li>Producto elegido: Flat o Dilour</li>
        <li>Color o colores necesarios</li>
        <li>Fecha del evento (para planificar la entrega)</li>
        <li>¿Necesitas instalación profesional?</li>
        <li>¿Necesitas servicio de recogida post-evento?</li>
        <li>¿El recinto exige <a href="/blog/normativa-ignifuga-bfl-s1-moqueta-ferial">certificación Bfl-s1</a>? (Toda nuestra moqueta la incluye)</li>
      </ol>

      <h2>Conclusión: elige la moqueta que mejor se adapta a tu evento</h2>
      <p>Ya sea que busques la versatilidad de <a href="/productos/rewind-flat">Rewind Flat</a> o el confort premium de <a href="/productos/rewind-dilour">Rewind Dilour</a>, ambas opciones son 100% reciclables, sin látex y certificadas Bfl-s1. La diferencia principal está en el espesor, la textura y el precio.</p>
      <p>Para orientarte mejor, usa nuestra <a href="/#calculadora">calculadora de precios online</a> o <a href="/contacto">solicita presupuesto personalizado</a> sin compromiso.</p>
    `,
  },
  {
    slug: "normativa-ignifuga-bfl-s1-moqueta-ferial",
    title: "Normativa ignífuga Bfl-s1 para moqueta ferial: guía completa [2025]",
    description:
      "Todo sobre la clasificación Bfl-s1 de reacción al fuego: qué es, dónde es obligatoria, tabla de clasificaciones y cómo obtener el certificado para tu evento.",
    date: "2025-07-08",
    updatedAt: "2026-02-25",
    author: "Disstands",
    category: "normativa",
    tags: [
      "Bfl-s1",
      "normativa ignífuga",
      "certificación",
      "seguridad eventos",
      "recintos feriales",
      "CTE",
      "UNE-EN 13501-1",
    ],
    image: "/hero-img/hero-img-2.webp",
    imageAlt: "Moqueta ecológica con certificación Bfl-s1 para eventos",
    readingTime: 10,
    content: `
      <p>Si organizas un evento en un recinto ferial, congreso o espacio público en España, la moqueta que utilices <strong>debe cumplir la clasificación de reacción al fuego Bfl-s1</strong>. No es una recomendación, es un requisito legal. En esta guía te explicamos todo lo que necesitas saber.</p>

      <blockquote>
        <p><strong>Lo esencial:</strong> La clasificación Bfl-s1 (norma UNE-EN 13501-1) es obligatoria para cualquier revestimiento de suelo en espacios públicos de España. Toda la moqueta <a href="/productos/rewind-flat">Rewind Flat</a> y <a href="/productos/rewind-dilour">Rewind Dilour</a> la incluye de serie, con certificado disponible en cada pedido sin coste adicional.</p>
      </blockquote>

      <h2>¿Qué significa la clasificación Bfl-s1?</h2>
      <p>La clasificación <strong>Bfl-s1</strong> forma parte del sistema europeo de clasificación de reacción al fuego, regulado por la norma <strong>UNE-EN 13501-1</strong>. Se compone de tres partes:</p>

      <table>
        <thead>
          <tr>
            <th>Código</th>
            <th>Significado</th>
            <th>Detalle</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><strong>B</strong></td><td>Reacción al fuego</td><td>Contribución al fuego muy limitada (escala de A a F)</td></tr>
          <tr><td><strong>fl</strong></td><td>Tipo de material</td><td>Material de suelo (del inglés <em>floor</em>)</td></tr>
          <tr><td><strong>s1</strong></td><td>Emisión de humo</td><td>Producción de humo muy baja (escala de s1 a s2)</td></tr>
        </tbody>
      </table>

      <p>Bfl-s1 es la <strong>clasificación más exigente</strong> para revestimientos de suelo en uso real. Solo la supera Afl (materiales completamente incombustibles como piedra o cerámica), que no es aplicable a moquetas ni textiles.</p>

      <h2>Tabla completa de clasificaciones de suelo</h2>
      <p>Para contextualizar dónde se sitúa Bfl-s1 dentro del sistema europeo:</p>

      <table>
        <thead>
          <tr>
            <th>Clase</th>
            <th>Comportamiento al fuego</th>
            <th>¿Válida para recintos feriales?</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Afl</td><td>Incombustible</td><td>Sí (piedra, cerámica)</td></tr>
          <tr><td><strong>Bfl-s1</strong></td><td><strong>Contribución muy limitada, humo mínimo</strong></td><td><strong>Sí — estándar exigido</strong></td></tr>
          <tr><td>Cfl-s1</td><td>Contribución limitada</td><td>Solo en algunos espacios</td></tr>
          <tr><td>Dfl-s1</td><td>Contribución media</td><td>No para uso público</td></tr>
          <tr><td>Efl</td><td>Contribución alta</td><td>No</td></tr>
          <tr><td>Ffl</td><td>Sin clasificar / no supera ensayos</td><td>No</td></tr>
        </tbody>
      </table>

      <h2>¿Dónde es obligatoria la certificación Bfl-s1?</h2>
      <p>El <strong>Código Técnico de Edificación (CTE)</strong>, en su Documento Básico de Seguridad en caso de Incendio (DB-SI), establece la exigencia Bfl-s1 para suelos de estos espacios:</p>

      <h3>Recintos feriales</h3>
      <p>Todos los recintos feriales de España exigen Bfl-s1. Algunos de los principales donde servimos moqueta:</p>
      <ul>
        <li><strong>Fira Barcelona</strong> (Gran Via y Montjuïc) — <a href="/moqueta-ecologica-barcelona">moqueta para Barcelona</a></li>
        <li><strong>CCIB</strong> (Centre de Convencions Internacional de Barcelona)</li>
        <li><strong>Palau de Fires de Girona</strong> — <a href="/moqueta-ecologica-girona">moqueta para Girona</a></li>
        <li><strong>Fira de Reus</strong> y <strong>Palau Firal de Tarragona</strong> — <a href="/moqueta-ecologica-tarragona">moqueta para Tarragona</a></li>
        <li><strong>Fira de Lleida</strong> — <a href="/moqueta-ecologica-lleida">moqueta para Lleida</a></li>
      </ul>

      <h3>Otros espacios obligatorios</h3>
      <ul>
        <li>Palacios de congresos y centros de convenciones</li>
        <li>Hoteles y salas de banquetes (para <a href="/barcelona/bodas">bodas</a> y galas)</li>
        <li>Teatros, auditorios y salas de espectáculos</li>
        <li>Centros comerciales y grandes superficies</li>
        <li>Cualquier instalación temporal en espacio público</li>
        <li>Espacios de pública concurrencia con aforo superior a 100 personas</li>
      </ul>

      <h2>¿Cómo demuestro que mi moqueta cumple la normativa?</h2>
      <p>Para acreditar que tu moqueta cumple con Bfl-s1 necesitas un <strong>certificado de ensayo</strong> emitido por un laboratorio acreditado. El proceso habitual es:</p>
      <ol>
        <li><strong>Solicita el certificado al proveedor:</strong> Cualquier fabricante serio debe poder proporcionarlo</li>
        <li><strong>Verifica que el certificado esté vigente</strong> y corresponda al producto exacto que vas a instalar</li>
        <li><strong>Preséntalo al recinto ferial</strong> antes o durante el montaje — muchos recintos lo solicitan con antelación</li>
        <li><strong>Consérvalo durante el evento</strong> para posibles inspecciones municipales</li>
      </ol>

      <blockquote>
        <p><strong>Con Rewind es automático:</strong> Toda nuestra moqueta ecológica incluye el certificado Bfl-s1 con cada pedido, sin coste adicional ni trámites extra. Puedes descargarlo en PDF o recibirlo en papel.</p>
      </blockquote>

      <h2>Consecuencias de usar moqueta sin certificar</h2>
      <p>Utilizar moqueta sin certificación Bfl-s1 en un espacio donde es obligatoria puede acarrear consecuencias graves:</p>
      <ul>
        <li><strong>Denegación de montaje:</strong> El recinto ferial puede prohibir la instalación y obligarte a retirar el material</li>
        <li><strong>Multas administrativas:</strong> Las sanciones pueden alcanzar varios miles de euros según la comunidad autónoma</li>
        <li><strong>Anulación del seguro:</strong> Si hay un incidente, la aseguradora puede rechazar la cobertura de responsabilidad civil</li>
        <li><strong>Responsabilidad penal:</strong> En caso de accidente con víctimas, el organizador podría enfrentar responsabilidades penales</li>
        <li><strong>Paralización del evento:</strong> La inspección puede ordenar el cierre inmediato del espacio afectado</li>
      </ul>

      <h2>¿Cómo afecta al medio ambiente la certificación ignífuga?</h2>
      <p>Muchas moquetas convencionales consiguen la clasificación Bfl-s1 añadiendo <strong>retardantes de llama químicos</strong> y capas de látex, lo que las hace imposibles de reciclar después.</p>
      <p>La moqueta Rewind es diferente: al ser <strong>monomaterial 100% polipropileno</strong>, alcanza la clasificación Bfl-s1 por las propiedades intrínsecas del material, sin necesidad de aditivos químicos. Esto permite que sea <a href="/blog/economia-circular-moqueta-reciclable-eventos">100% reciclable al final de su vida útil</a>.</p>

      <h2>Preguntas frecuentes sobre la normativa Bfl-s1</h2>

      <h3>¿Es lo mismo Bfl-s1 que M1?</h3>
      <p>No exactamente. La clasificación M (M0 a M4) es el antiguo sistema español, ya reemplazado por el sistema europeo (Afl a Ffl). Bfl-s1 equivale aproximadamente a M1 del antiguo sistema, pero las clasificaciones no son directamente intercambiables. Algunos recintos antiguos pueden pedir "M1", pero legalmente la referencia actual es Bfl-s1.</p>

      <h3>¿Mi stand pequeño también necesita Bfl-s1?</h3>
      <p>Sí. La normativa aplica a todo el espacio del recinto ferial, independientemente del tamaño del stand. No hay excepciones por superficie.</p>

      <h3>¿La moqueta usada en exterior también necesita Bfl-s1?</h3>
      <p>Si se trata de un evento público con licencia municipal (como una <a href="/barcelona/bodas">boda al aire libre</a> en un espacio público), es muy probable que sí. Consulta con el ayuntamiento correspondiente. En comarcas como <a href="/comarcas/baix-emporda">Baix Empordà</a> o <a href="/comarcas/alt-emporda">Alt Empordà</a>, con muchos eventos al aire libre, esta consulta es especialmente importante.</p>

      <p>Con <a href="/productos/rewind-flat">Rewind Flat</a> y <a href="/productos/rewind-dilour">Rewind Dilour</a> tienes la tranquilidad de cumplir la normativa sin comprometer la sostenibilidad. <a href="/contacto">Contacta con nosotros</a> o <a href="tel:+34934850085">llámanos al 934 850 085</a> para cualquier duda técnica.</p>
    `,
  },
  {
    slug: "economia-circular-moqueta-reciclable-eventos",
    title: "Economía circular en eventos: cómo la moqueta reciclable reduce tu huella ambiental",
    description:
      "Descubre cómo la moqueta Rewind 100% reciclable aplica la economía circular en el sector ferial: datos de impacto, proceso de reciclaje y certificado ESG.",
    date: "2025-07-15",
    updatedAt: "2026-02-25",
    author: "Disstands",
    category: "sostenibilidad",
    tags: [
      "economía circular",
      "reciclaje",
      "sostenibilidad",
      "moqueta reciclable",
      "ESG",
      "huella de carbono",
      "residuos eventos",
    ],
    image: "/hero-img/rewind-hero.webp",
    imageAlt: "Proceso de reciclaje de moqueta ecológica Rewind para eventos",
    readingTime: 11,
    content: `
      <p>Cada año, <strong>miles de toneladas de moqueta ferial</strong> acaban en vertederos tras un solo uso. En un solo recinto como Fira Barcelona se consumen más de 100.000 m² de moqueta anuales. La moqueta Rewind rompe este ciclo destructivo con un modelo de <strong>economía circular real</strong> que permite reciclar el 100% del material.</p>

      <blockquote>
        <p><strong>Dato clave:</strong> Por cada 1.000 m² de moqueta Rewind en lugar de convencional, se evitan 350 kg de emisiones de CO₂ y 0 kg acaban en vertedero. Todas las cifras están respaldadas por nuestro certificado de reciclaje.</p>
      </blockquote>

      <h2>El problema: la moqueta convencional no se puede reciclar</h2>
      <p>La moqueta ferial tradicional está compuesta por una mezcla de materiales (polipropileno + látex + retardantes de llama + otros aditivos) que hace técnicamente imposible su separación y reciclaje. Las consecuencias son graves:</p>

      <table>
        <thead>
          <tr>
            <th>Indicador</th>
            <th>Moqueta convencional</th>
            <th>Moqueta Rewind</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><strong>Material</strong></td><td>Multimaterial (PP + látex + aditivos)</td><td>Monomaterial (100% polipropileno)</td></tr>
          <tr><td><strong>Agua en fabricación</strong></td><td>Miles de litros/tonelada</td><td>0 litros</td></tr>
          <tr><td><strong>Consumo energético</strong></td><td>Estándar</td><td>-80% vs. convencional</td></tr>
          <tr><td><strong>Emisiones CO₂</strong></td><td>Estándar</td><td>-35% vs. convencional</td></tr>
          <tr><td><strong>Consumo de gas</strong></td><td>Estándar</td><td>-83% vs. convencional</td></tr>
          <tr><td><strong>Reciclable</strong></td><td>No (vertedero/incineradora)</td><td>100% reciclable</td></tr>
          <tr><td><strong>Destino post-evento</strong></td><td>95% vertedero</td><td>100% reciclaje</td></tr>
        </tbody>
      </table>

      <h3>La magnitud del problema en cifras</h3>
      <p>Para dimensionar el impacto de la moqueta ferial en España:</p>
      <ul>
        <li>Se estima que se instalan <strong>más de 1 millón de m² de moqueta ferial al año</strong> solo en Cataluña</li>
        <li>Cada m² de moqueta convencional genera entre <strong>3 y 5 kg de residuo no reciclable</strong></li>
        <li>El <strong>95% de esa moqueta</strong> acaba en vertedero o incineradora tras un solo uso</li>
        <li>La fabricación con látex consume grandes cantidades de <strong>agua y energía</strong></li>
      </ul>

      <h2>La solución: cómo funciona la economía circular de Rewind</h2>
      <p>Rewind es la primera moqueta ferial del mundo diseñada desde el origen para ser 100% circular. El proceso tiene 5 fases:</p>

      <h3>Fase 1: Fabricación limpia</h3>
      <p>La moqueta Rewind se fabrica como <strong>monomaterial 100% polipropileno sin látex</strong>. Este proceso elimina por completo el uso de agua, reduce un 80% el consumo energético, un 83% el de gas y un 35% las emisiones de CO₂ respecto a la fabricación convencional.</p>

      <h3>Fase 2: Uso en el evento</h3>
      <p>Durante el evento, la moqueta Rewind ofrece exactamente las mismas prestaciones que una moqueta convencional: <a href="/blog/normativa-ignifuga-bfl-s1-moqueta-ferial">certificación Bfl-s1</a>, resistencia al tránsito intenso, acabado profesional y disponibilidad en 30 colores. No hay ningún compromiso en calidad.</p>

      <h3>Fase 3: Recogida post-evento</h3>
      <p>Una vez finalizado el evento, nuestro equipo se encarga de la recogida de la moqueta usada. Este servicio está disponible en toda Cataluña: <a href="/moqueta-ecologica-barcelona">Barcelona</a>, <a href="/moqueta-ecologica-girona">Girona</a>, <a href="/moqueta-ecologica-tarragona">Tarragona</a> y <a href="/moqueta-ecologica-lleida">Lleida</a>.</p>

      <h3>Fase 4: Reciclaje completo</h3>
      <p>Al ser monomaterial, la moqueta puede triturase y transformarse en <strong>granza de polipropileno</strong> de alta calidad. No hay mezcla de materiales que separar, lo que hace el proceso eficiente y económicamente viable.</p>

      <h3>Fase 5: Nueva vida</h3>
      <p>La granza reciclada se utiliza para fabricar nuevos productos de polipropileno: envases, componentes industriales, mobiliario y más. El material no pierde calidad en el proceso y puede reciclarse múltiples veces.</p>

      <h2>Impacto real: datos por cada 1.000 m²</h2>
      <p>Cuando un organizador de eventos elige moqueta Rewind en lugar de convencional, los números hablan solos:</p>

      <table>
        <thead>
          <tr>
            <th>Indicador de impacto</th>
            <th>Ahorro por cada 1.000 m²</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><strong>Agua</strong></td><td>Miles de litros ahorrados (0 litros usados en producción)</td></tr>
          <tr><td><strong>Emisiones CO₂</strong></td><td>350 kg menos de CO₂</td></tr>
          <tr><td><strong>Residuos a vertedero</strong></td><td>0 kg (vs. 3.000-5.000 kg con convencional)</td></tr>
          <tr><td><strong>Energía</strong></td><td>Reducción del 80%</td></tr>
          <tr><td><strong>Gas natural</strong></td><td>Reducción del 83%</td></tr>
        </tbody>
      </table>

      <h2>El certificado de reciclaje: documentar tu impacto ESG</h2>
      <p>Cada vez más empresas necesitan documentar sus esfuerzos de sostenibilidad en informes ESG (Environmental, Social and Governance), memorias de RSC o para cumplir con normativas europeas de reporting no financiero.</p>
      <p>Con la moqueta Rewind, proporcionamos un <strong>certificado de reciclaje oficial</strong> que incluye:</p>
      <ul>
        <li>Cantidad de material reciclado (en kg y m²)</li>
        <li>Emisiones de CO₂ evitadas</li>
        <li>Agua no consumida en fabricación</li>
        <li>Destino final del material reciclado</li>
        <li>Número de referencia para trazabilidad</li>
      </ul>
      <p>Este certificado es válido para incluir en informes de sostenibilidad corporativa, memorias anuales y documentación de licitaciones públicas que valoren criterios ambientales.</p>

      <h2>¿Quién ya apuesta por la moqueta circular?</h2>
      <p>Las principales ferias y eventos de Cataluña ya utilizan moqueta Rewind como parte de su compromiso ambiental:</p>
      <ul>
        <li><strong>Mobile World Congress</strong> — el mayor evento de tecnología móvil del mundo</li>
        <li><strong>Alimentaria</strong> — feria líder del sector alimentario en el sur de Europa</li>
        <li><strong>Smart City Expo</strong> — referente en ciudades inteligentes y sostenibilidad urbana</li>
        <li><strong>Automobile Barcelona</strong> — salón del automóvil con fuerte apuesta por la movilidad sostenible</li>
      </ul>
      <p>También servimos <a href="/barcelona/eventos">eventos corporativos</a>, <a href="/barcelona/bodas">bodas</a>, <a href="/barcelona/congresos">congresos</a> y <a href="/barcelona/ferias">ferias locales</a> en comarcas como <a href="/comarcas/barcelones">Barcelonès</a>, <a href="/comarcas/tarragones">Tarragonès</a>, <a href="/comarcas/girones">Gironès</a> y <a href="/comarcas/segria">Segrià</a>.</p>

      <h2>Cómo empezar: 3 pasos para un evento más sostenible</h2>
      <ol>
        <li><strong>Calcula lo que necesitas:</strong> Usa nuestra <a href="/#calculadora">calculadora de precios online</a> para estimar m² y coste</li>
        <li><strong>Solicita presupuesto:</strong> <a href="/contacto">Contacta con nosotros</a> o llama al <a href="tel:+34934850085">934 850 085</a> para un presupuesto personalizado</li>
        <li><strong>Recibe tu certificado:</strong> Tras el evento, recogemos la moqueta y te enviamos el certificado de reciclaje para tus informes ESG</li>
      </ol>
      <p>Elige entre <a href="/productos/rewind-flat">Rewind Flat</a> (desde 2,10€/m²) o <a href="/productos/rewind-dilour">Rewind Dilour</a> (desde 4,05€/m²). Ambas opciones son 100% reciclables y certificadas <a href="/blog/normativa-ignifuga-bfl-s1-moqueta-ferial">Bfl-s1</a>.</p>
    `,
  },
];
