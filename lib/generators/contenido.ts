import type { Provincia, TipoUso, Municipio, Comarca } from "@/lib/data/ubicaciones";

export interface PageContent {
  title: string;
  metaDescription: string;
  h1: string;
  heroText: string;
  intro: string[];
  beneficiosLocales: string[];
  ctaText: string;
  // Nuevas secciones de contenido único (municipios)
  seccionLogistica?: string;
  seccionPorQueEco?: string;
  seccionGuiaEventos?: string;
  // Nuevas secciones (comarcas)
  seccionComoLlegamos?: string;
  seccionTemporadaEventos?: string;
}

export function generarContenidoProvincia(provincia: Provincia): PageContent {
  const ciudades = provincia.municipiosPrincipales.slice(0, 5).join(", ");
  const recintos = provincia.recintosFeriales?.[0] || "recintos feriales";

  return {
    title: `Moqueta Ferial ${provincia.nombre} | Ecológica y Barata | Desde 2,20€/m²`,

    metaDescription: `Moqueta ferial ecológica en ${provincia.nombre}. Barata desde 2,20€/m², 100% reciclable, sin látex, certificada Bfl-s1. Comprar moqueta online. Instalación en ${ciudades}. Rewind® Disstands. ☎ 934 850 085`,

    h1: `Moqueta Ferial en ${provincia.nombre}`,

    heroText: `Rewind® es nuestra marca propia de moqueta ferial ecológica en ${provincia.nombre}. Compra online desde 2,20€/m². 100% reciclable, sin látex, certificación Bfl-s1. Montaje profesional solo para empresas del sector.`,

    intro: [
      `¿Buscas **moqueta ferial barata en ${provincia.nombre}**? Disstands es fabricante y propietario de la marca **Rewind®**, la moqueta ferial ecológica de referencia. Con más de 25 años de experiencia, suministramos moqueta para ${recintos} y eventos en toda la provincia. Puedes comprar online o solicitar presupuesto personalizado.`,

      `Nuestra moqueta Rewind es **única en el mundo**: fabricada 100% sin látex, completamente reciclable, y producida con una reducción del 80% en consumo energético. Es la elección de ferias internacionales como el Mobile World Congress. Desde 2,20€/m², la opción más barata y sostenible del mercado.`,

      `Servimos ${ciudades} y todas las comarcas de ${provincia.nombre} con entrega rápida desde nuestro almacén en Barcelona. Servicio de montaje disponible solo para profesionales del sector.`,
    ],

    beneficiosLocales: [
      `Servicio en toda ${provincia.nombre}`,
      `Instalación profesional en toda la provincia`,
      `Stock permanente para proyectos urgentes`,
      `Recogida y gestión de residuos post-evento`,
      `Asesoramiento técnico gratuito`,
    ],

    ctaText: `¿Necesitas moqueta ferial en ${provincia.nombre}? Solicita presupuesto sin compromiso.`,
  };
}

export function generarContenidoMunicipio(
  municipio: Municipio,
  provincia: Provincia,
  comarcaNombre?: string
): PageContent {
  const comarcaTexto = comarcaNombre
    ? `, en la comarca de ${comarcaNombre}`
    : "";
  const poblacionTexto =
    municipio.poblacion > 0
      ? ` Con una población de más de ${(Math.floor(municipio.poblacion / 1000) * 1000).toLocaleString("es-ES")} habitantes, ${municipio.nombre} es un centro de actividad empresarial y cultural en ${provincia.nombre}.`
      : "";
  const zonasTexto =
    municipio.zonasEventos.length > 0
      ? ` Entre sus principales espacios para eventos destacan **${municipio.zonasEventos.slice(0, 2).join("** y **")}**.`
      : "";

  // Third paragraph varies by municipality characteristics
  const tercerParrafo = generarTercerParrafoMunicipio(municipio, provincia, comarcaNombre);

  // Benefits vary by municipality size and type
  const beneficios = generarBeneficiosMunicipio(municipio, provincia);

  return {
    title: `Moqueta Ferial ${municipio.nombre} | Desde 2,20€/m² | Disstands`,

    metaDescription: `Moqueta ferial en ${municipio.nombre}, ${provincia.nombre}. Barata desde 2,20€/m², ecológica, 100% reciclable, sin látex. Comprar online. Instalación profesional. ☎ 934 850 085`,

    h1: `Moqueta Ferial en ${municipio.nombre}`,

    heroText: `Suministro e instalación de moqueta ferial Rewind en ${municipio.nombre}${comarcaTexto}. Ecológica y barata desde 2,20€/m². La solución sostenible para tus eventos, ferias y stands.`,

    intro: [
      `¿Buscas **moqueta ferial en ${municipio.nombre}**? ${municipio.descripcion}`,

      `${poblacionTexto}${zonasTexto} Disstands suministra moqueta ferial ecológica Rewind con entrega directa desde Barcelona y servicio de instalación profesional. Compra online o solicita presupuesto.`,

      tercerParrafo,
    ],

    beneficiosLocales: beneficios,

    ctaText: `Solicita presupuesto para tu evento en ${municipio.nombre}`,

    seccionLogistica: generarSeccionLogistica(municipio),
    seccionPorQueEco: generarSeccionPorQueEco(municipio),
    seccionGuiaEventos: generarSeccionGuiaEventos(municipio),
  };
}

function generarTercerParrafoMunicipio(
  municipio: Municipio,
  provincia: Provincia,
  comarcaNombre?: string
): string {
  const pop = municipio.poblacion;
  const zonas = municipio.zonasEventos;

  // Large cities (>100k) - emphasize volume + corporate events
  if (pop > 100000) {
    return `Como uno de los principales núcleos urbanos de ${provincia.nombre}, ${municipio.nombre} genera una alta demanda de moqueta ferial para **eventos corporativos, ferias sectoriales y congresos**. Nuestra moqueta ferial Rewind, certificada Bfl-s1 y disponible en 30 colores, se adapta a proyectos de cualquier escala. Desde 2,20€/m², es la opción más barata sin renunciar a la calidad.`;
  }

  // Medium cities (30k-100k) - emphasize versatility + growing market
  if (pop > 30000) {
    const zonaRef = zonas.length > 0
      ? ` Espacios como ${zonas[0]} requieren soluciones que cumplan la normativa ignífuga sin renunciar a la estética.`
      : "";
    return `${municipio.nombre} cuenta con un tejido empresarial activo que impulsa ferias, congresos y eventos durante todo el año.${zonaRef} La moqueta ferial Rewind se fabrica **sin látex**, es 100% reciclable y está disponible en dos acabados: Flat (ferial, desde 2,20€/m²) y Dilour (premium). Puedes comprar moqueta online y recibirla directamente.`;
  }

  // Coastal/tourist towns - emphasize seasonal events + weddings
  const isCoastal = ["sitges", "blanes", "lloret", "cambrils", "salou", "palamos", "sant-feliu-guixols", "palafrugell", "roses", "vila-seca"].includes(municipio.slug);
  if (isCoastal) {
    return `Como municipio con fuerte actividad turística, ${municipio.nombre} acoge **bodas, eventos al aire libre y ferias estacionales** que necesitan moqueta ferial de calidad. Rewind cumple la certificación ignífuga Bfl-s1 y su fabricación 100% reciclable la convierte en la opción más sostenible y barata para eventos en entornos naturales.`;
  }

  // Mountain/inland towns - emphasize local fairs + cultural events
  const comarcaRef = comarcaNombre ? ` en la comarca de ${comarcaNombre}` : "";
  if (pop > 0 && pop <= 30000) {
    return `${municipio.nombre}${comarcaRef} celebra **ferias locales, mercados y eventos culturales** que requieren pavimento profesional. La moqueta ferial Rewind ofrece certificación Bfl-s1, 30 colores disponibles y un precio desde 2,20€/m² que se adapta a presupuestos de todo tipo. Compra online o solicita presupuesto.`;
  }

  // Fallback
  return `Disstands suministra moqueta ferial ecológica Rewind en ${municipio.nombre} con entrega desde Barcelona. Certificada Bfl-s1, sin látex, 100% reciclable y disponible en 30 colores para adaptarse a cualquier evento o espacio. Desde 2,20€/m².`;
}

function generarBeneficiosMunicipio(
  municipio: Municipio,
  provincia: Provincia
): string[] {
  const pop = municipio.poblacion;
  const isCoastal = ["sitges", "blanes", "lloret", "cambrils", "salou", "palamos", "sant-feliu-guixols", "palafrugell", "roses", "vila-seca"].includes(municipio.slug);

  if (pop > 100000) {
    return [
      `Entrega en 24-48h en ${municipio.nombre}`,
      `Montaje profesional para grandes superficies`,
      `Moqueta ferial barata desde 2,20€/m²`,
      `Recogida y reciclaje post-evento incluido`,
    ];
  }

  if (isCoastal) {
    return [
      `Entrega directa en ${municipio.nombre}`,
      `Ideal para bodas y eventos al aire libre`,
      `Certificación Bfl-s1 para espacios públicos`,
      `Compra online — 30 colores disponibles`,
    ];
  }

  if (pop > 30000) {
    return [
      `Servicio rápido en ${municipio.nombre}`,
      `Instalación profesional disponible`,
      `30 colores en stock permanente`,
      `Compra online desde 2,20€/m²`,
    ];
  }

  return [
    `Envío a ${municipio.nombre} desde Barcelona`,
    `Sin pedido mínimo para profesionales`,
    `Certificación ignífuga Bfl-s1`,
    `Moqueta ferial barata desde 2,20€/m²`,
  ];
}

const usoTextos: Record<
  string,
  { titulo: string; descripcion: string }
> = {
  eventos: {
    titulo: "Eventos Corporativos",
    descripcion:
      "eventos empresariales, presentaciones de producto y actos corporativos",
  },
  ferias: {
    titulo: "Ferias Comerciales",
    descripcion: "ferias comerciales, exposiciones y salones profesionales",
  },
  congresos: {
    titulo: "Congresos y Convenciones",
    descripcion: "congresos, convenciones y reuniones profesionales",
  },
  stands: {
    titulo: "Stands Feriales",
    descripcion:
      "montaje de stands, espacios expositivos y showrooms temporales",
  },
  bodas: {
    titulo: "Bodas y Celebraciones",
    descripcion: "bodas, celebraciones y eventos sociales",
  },
};

export function generarContenidoUso(
  uso: TipoUso,
  provincia: Provincia
): PageContent {
  const info = usoTextos[uso.slug] || {
    titulo: uso.nombre,
    descripcion: uso.nombre.toLowerCase(),
  };

  return {
    title: `Moqueta ${info.titulo} ${provincia.nombre} | Ecológica y Barata | Disstands`,

    metaDescription: `Moqueta ferial para ${info.descripcion} en ${provincia.nombre}. Ecológica, barata desde 2,20€/m², 100% reciclable, sin látex, certificada Bfl-s1. Comprar online. ☎ 934 850 085`,

    h1: `Moqueta para ${info.titulo} en ${provincia.nombre}`,

    heroText: `La moqueta ferial perfecta para ${info.descripcion}. Ecológica y barata desde 2,20€/m². 100% reciclable, sin látex, disponible en 30 colores. Instalación profesional en toda la provincia de ${provincia.nombre}.`,

    intro: [
      `Para ${info.descripcion} en ${provincia.nombre}, la **moqueta ferial ecológica Rewind** es la elección de los profesionales más exigentes. Barata desde 2,20€/m², su composición 100% reciclable y sin látex la convierte en la opción más sostenible del mercado. Puedes comprar moqueta online o solicitar presupuesto.`,

      `Cumple con la certificación ignífuga Bfl-s1 obligatoria en todos los recintos y espacios públicos. Disponible en formato rollo de 2x50m para instalaciones rápidas.`,
    ],

    beneficiosLocales: [
      `Ideal para ${info.descripcion}`,
      `Certificación Bfl-s1 incluida`,
      `Instalación express disponible`,
      `Recogida post-evento`,
    ],

    ctaText: `Presupuesto para ${uso.nombre.toLowerCase()} en ${provincia.nombre}`,
  };
}

export function generarContenidoComarca(
  comarca: Comarca,
  provincia: Provincia
): PageContent {
  const distanciaTexto =
    comarca.distanciaBarcelona === 0
      ? "en el área metropolitana de Barcelona"
      : `a ${comarca.distanciaBarcelona} km de Barcelona`;

  const eventosTexto =
    comarca.eventosLocales.length > 0
      ? ` La comarca acoge eventos como **${comarca.eventosLocales.slice(0, 2).join("** y **")}**.`
      : "";

  const espaciosTexto =
    comarca.espaciosEventos.length > 0
      ? ` Espacios como ${comarca.espaciosEventos.slice(0, 2).join(" y ")} son referentes para ferias y eventos.`
      : "";

  const municipiosTexto =
    comarca.municipiosPrincipales && comarca.municipiosPrincipales.length > 0
      ? ` Servimos ${comarca.municipiosPrincipales.slice(0, 4).join(", ")} y todos los municipios de la comarca.`
      : ` Servimos ${comarca.capital} y todos los municipios de la comarca.`;

  return {
    title: `Moqueta Ferial ${comarca.nombre} | ${provincia.nombre} | Disstands`,

    metaDescription: `Moqueta ferial en ${comarca.nombre} (${provincia.nombre}). Ecológica y barata desde 2,20€/m². Entrega en ${comarca.capital} y comarca. 100% reciclable, sin látex. Comprar online. ☎ 934 850 085`,

    h1: `Moqueta Ferial en ${comarca.nombre}`,

    heroText: `Distribuidor de moqueta ferial ecológica Rewind en la comarca de ${comarca.nombre}, ${distanciaTexto}. Barata desde 2,20€/m². Entrega rápida en ${comarca.capital} y todos los municipios.`,

    intro: [
      `${comarca.descripcion}${eventosTexto}`,

      `Disstands suministra **moqueta ferial ecológica Rewind** en toda la comarca de ${comarca.nombre} con más de 25 años de experiencia.${espaciosTexto} Compra online o solicita presupuesto sin compromiso.`,

      `Nuestra moqueta ferial es 100% reciclable, sin látex, y cuenta con certificación ignífuga Bfl-s1. Disponible en 30 colores y dos espesores, desde solo 2,20€/m².${municipiosTexto}`,
    ],

    beneficiosLocales: [
      `Servicio en ${comarca.nombre}`,
      `Cobertura en ${comarca.capital} y alrededores`,
      `${comarca.poblacion.toLocaleString("es-ES")} habitantes en la comarca`,
      `Instalación profesional disponible`,
    ],

    ctaText: `Presupuesto para ${comarca.nombre}`,

    seccionComoLlegamos: generarSeccionComoLlegamos(comarca, provincia),
    seccionTemporadaEventos: generarSeccionTemporadaEventos(comarca),
  };
}

// =====================================================
// NUEVAS FUNCIONES GENERADORAS — Contenido único municipios
// =====================================================

function generarSeccionLogistica(municipio: Municipio): string {
  const distancia = municipio.distanciaBarcelona;
  const acceso = municipio.accesibilidad;
  const geo = municipio.tipoGeografia;

  // Calcular tiempo estimado de entrega
  let tiempoEntrega: string;
  if (distancia <= 15) {
    tiempoEntrega = "menos de 30 minutos";
  } else if (distancia <= 40) {
    tiempoEntrega = "aproximadamente 45 minutos";
  } else if (distancia <= 80) {
    tiempoEntrega = "entre 1 y 1,5 horas";
  } else if (distancia <= 150) {
    tiempoEntrega = "unas 2 horas";
  } else {
    tiempoEntrega = "entre 2,5 y 3,5 horas";
  }

  // Contexto geográfico
  let contextoGeo: string;
  switch (geo) {
    case 'metropolitano':
      contextoGeo = `Al estar en el área metropolitana de Barcelona, ${municipio.nombre} se beneficia de nuestro servicio de **entrega express**: pedidos antes de las 12:00 pueden recibirse el mismo día. La cercanía a nuestro almacén permite atender montajes urgentes y de última hora sin coste adicional de transporte.`;
      break;
    case 'costa':
      contextoGeo = `La ubicación costera de ${municipio.nombre} ofrece ventajas logísticas: acceso por autovía y disponibilidad de espacios de carga en hoteles y recintos del litoral. Para eventos outdoor en playas o paseos marítimos, coordinamos la entrega directamente en el punto de instalación.`;
      break;
    case 'montaña':
      contextoGeo = `Para ${municipio.nombre}, planificamos las entregas con margen extra debido a las condiciones de montaña. En invierno, verificamos el estado de las carreteras antes de cada envío. Recomendamos confirmar el pedido con al menos 72h de antelación para garantizar la disponibilidad.`;
      break;
    case 'llanura':
      contextoGeo = `${municipio.nombre} está bien comunicado a través de la red viaria del interior de Cataluña. Las entregas se realizan por carreteras amplias y sin restricciones de peso, lo que facilita el transporte de grandes volúmenes de moqueta en un solo envío.`;
      break;
    default:
      contextoGeo = `${municipio.nombre} cuenta con buenas conexiones que facilitan la entrega de moqueta ferial desde Barcelona. Programamos las entregas en función del volumen y la urgencia del proyecto.`;
  }

  return `Nuestro almacén en Barcelona (distrito de Sant Martí) nos permite llegar a ${municipio.nombre} en ${tiempoEntrega} a través de ${acceso}. ${contextoGeo} Para proyectos de gran volumen, disponemos de logística propia con camiones de hasta 12 metros que pueden descargar directamente en el recinto del evento.`;
}

function generarSeccionPorQueEco(municipio: Municipio): string {
  const economia = municipio.tipoEconomia;
  const sector = municipio.sectorPrincipal || 'actividad empresarial diversa';
  const tiposEvento = municipio.tiposEventoFrecuente;

  // Contexto según tipo de economía
  let argumentoEco: string;
  switch (economia) {
    case 'industrial':
      argumentoEco = `El sector industrial de ${municipio.nombre}, con ${sector} como eje económico, está adoptando políticas de sostenibilidad y ESG de forma acelerada. Las empresas industriales que organizan ${tiposEvento[0] || 'eventos'} buscan proveedores alineados con sus compromisos ambientales. La moqueta Rewind, al ser 100% reciclable y fabricada sin látex, permite a estas empresas documentar su compromiso sostenible también en la organización de eventos.`;
      break;
    case 'tecnologia':
      argumentoEco = `El ecosistema tecnológico de ${municipio.nombre}, centrado en ${sector}, valora la innovación también en materiales. Las startups y empresas tech que organizan ${tiposEvento[0] || 'eventos'} priorizan proveedores con credenciales sostenibles verificables. Rewind ofrece certificados de reciclaje post-evento que estas empresas pueden incluir en sus informes de impacto ambiental y memorias RSC.`;
      break;
    case 'turismo':
      argumentoEco = `El sector turístico de ${municipio.nombre} está comprometido con la sostenibilidad como valor diferencial. Los hoteles y espacios de eventos que promueven ${tiposEvento[0] || 'eventos'} necesitan proveedores que refuercen su imagen verde. Una moqueta fabricada sin agua, con un 80% menos de energía y 100% reciclable es coherente con los sellos de turismo sostenible que cada vez más establecimientos exhiben.`;
      break;
    case 'servicios':
      argumentoEco = `Las empresas de servicios de ${municipio.nombre}, vinculadas a ${sector}, integran la sostenibilidad en su cadena de valor. Cuando organizan ${tiposEvento[0] || 'eventos'}, buscan que cada elemento — incluido el pavimento — sea coherente con sus políticas medioambientales. Rewind permite a estas empresas optar por la alternativa ecológica sin renunciar al presupuesto: desde 2,20€/m², el precio es igual o menor que las opciones convencionales con látex.`;
      break;
    case 'agrario':
      argumentoEco = `El sector agroalimentario de ${municipio.nombre}, con ${sector} como actividad principal, tiene una conexión natural con los valores ecológicos. Las ferias agrícolas y eventos del sector buscan materiales que refuercen el mensaje de respeto por el medio ambiente. La moqueta Rewind, al ser monomaterial reciclable sin componentes tóxicos, encaja con la filosofía de proximidad y sostenibilidad del mundo agrario.`;
      break;
    default:
      argumentoEco = `La actividad económica de ${municipio.nombre}, con ${sector} como motor local, genera cada vez más eventos con criterios sostenibles. La moqueta Rewind permite a organizadores locales elegir un material ecológico sin incremento de coste. Su fabricación sin látex y su reciclabilidad completa la convierten en la opción natural para eventos con conciencia ambiental.`;
  }

  return argumentoEco;
}

function generarSeccionGuiaEventos(municipio: Municipio): string | undefined {
  // Solo generar si hay datos suficientes
  if (municipio.zonasEventos.length < 2 && !municipio.eventoDestacado) {
    return undefined;
  }

  const zonas = municipio.zonasEventos;
  const temporada = municipio.temporadaAlta;
  const tiposEvento = municipio.tiposEventoFrecuente;
  const eventoDestacado = municipio.eventoDestacado;

  // Temporada activa
  let temporadaTexto: string;
  switch (temporada) {
    case 'todo_el_año':
      temporadaTexto = `${municipio.nombre} mantiene actividad de eventos durante todo el año, sin una estacionalidad marcada. Esto permite planificar montajes con flexibilidad y acceder a mejores precios fuera de las temporadas pico de otras zonas.`;
      break;
    case 'verano':
      temporadaTexto = `La temporada alta de eventos en ${municipio.nombre} se concentra entre junio y septiembre, con pico en julio-agosto. Recomendamos reservar material y fechas de instalación con al menos 3 semanas de antelación en estos meses.`;
      break;
    case 'otoño_primavera':
      temporadaTexto = `La mayor actividad de eventos en ${municipio.nombre} se da en los periodos septiembre-noviembre y marzo-junio. Son los meses de ferias sectoriales, congresos y jornadas empresariales. En verano y Navidad la demanda baja considerablemente.`;
      break;
    case 'invierno':
      temporadaTexto = `${municipio.nombre} concentra su máxima actividad en temporada invernal (diciembre-marzo), vinculada al turismo de montaña y esquí. Los eventos de verano existen pero son de menor escala. Para temporada alta invernal, reservar con 4 semanas de antelación.`;
      break;
  }

  // Evento destacado
  const eventoTexto = eventoDestacado
    ? ` El evento más relevante de ${municipio.nombre} es **${eventoDestacado}**, que genera una demanda puntual significativa de moqueta ferial.`
    : '';

  // Espacios y recomendación
  const espaciosTexto = zonas.length > 1
    ? `Los principales espacios para eventos son **${zonas[0]}** y **${zonas[1]}**${zonas.length > 2 ? `, además de ${zonas[2]}` : ''}. Cada espacio tiene características distintas de suelo y acceso que influyen en el tipo de instalación recomendada.`
    : `El principal espacio para eventos es **${zonas[0]}**.`;

  // Tipos de evento
  const tiposTexto = tiposEvento.length > 0
    ? ` Los tipos de evento más habituales son ${tiposEvento.join(', ')}.`
    : '';

  return `${temporadaTexto}${eventoTexto} ${espaciosTexto}${tiposTexto} Para cualquier evento en ${municipio.nombre}, ofrecemos asesoramiento gratuito sobre el tipo de moqueta, color y sistema de instalación más adecuado según el espacio y el uso previsto.`;
}

// =====================================================
// NUEVAS FUNCIONES GENERADORAS — Contenido único comarcas
// =====================================================

function generarSeccionComoLlegamos(comarca: Comarca, provincia: Provincia): string {
  const distancia = comarca.distanciaBarcelona;
  const infraestructura = comarca.infraestructuraTransporte;
  const contexto = comarca.contextoLogistico;
  const tipo = comarca.tipoTerritorio;

  let introLogistica: string;
  if (distancia === 0) {
    introLogistica = `La comarca de ${comarca.nombre} forma parte del área metropolitana de Barcelona, donde se ubica nuestro almacén. Esto significa **entrega inmediata o en el mismo día** para cualquier municipio de la comarca.`;
  } else if (distancia <= 50) {
    introLogistica = `La comarca de ${comarca.nombre} está a tan solo ${distancia} km de nuestro almacén en Barcelona. La proximidad y las buenas conexiones viarias permiten **entregas en pocas horas** sin necesidad de programación previa.`;
  } else if (distancia <= 120) {
    introLogistica = `Llegamos a la comarca de ${comarca.nombre} (${distancia} km desde Barcelona) a través de ${infraestructura}. La distancia es moderada y permite **entregas garantizadas en 24h** para pedidos confirmados antes de las 14:00.`;
  } else {
    introLogistica = `La comarca de ${comarca.nombre} se encuentra a ${distancia} km de Barcelona. Aunque la distancia es considerable, nuestras rutas de distribución cubren toda la provincia de ${provincia.nombre} con **entregas programadas en 24-48h**.`;
  }

  // Contexto según tipo de territorio
  let contextoTerritorial: string;
  switch (tipo) {
    case 'urbano':
    case 'periurbano':
      contextoTerritorial = `Las buenas infraestructuras de transporte (${infraestructura}) facilitan tanto la entrega como el desplazamiento de nuestros equipos de instalación. No hay restricciones de peso ni limitaciones de acceso para nuestros vehículos de reparto.`;
      break;
    case 'turistico_costa':
      contextoTerritorial = `La red viaria del litoral permite acceder a hoteles, recintos y espacios de eventos costeros sin dificultad. En temporada alta turística, recomendamos confirmar las franjas horarias de descarga con el establecimiento receptor.`;
      break;
    case 'turistico_montaña':
      contextoTerritorial = `El acceso por carreteras de montaña requiere planificación previa. En invierno, verificamos el estado de los puertos de montaña antes de cada envío. Para eventos en cotas altas, programamos las entregas con margen adicional.`;
      break;
    case 'rural':
      contextoTerritorial = `Las carreteras comarcales permiten acceso con furgoneta o camión mediano. Para recintos feriales y espacios de eventos, la descarga suele ser directa sin complicaciones. Coordinamos la entrega con el responsable local del espacio.`;
      break;
  }

  return `${introLogistica} ${contextoTerritorial} ${contexto}.`;
}

function generarSeccionTemporadaEventos(comarca: Comarca): string {
  const temporada = comarca.temporadaEventos;
  const eventos = comarca.eventosLocales;
  const sector = comarca.sectorEconomicoPrincipal;
  const tipo = comarca.tipoTerritorio;

  // Referencia a eventos concretos
  const eventosRef = eventos.length > 0
    ? `Entre los eventos que generan mayor demanda de moqueta ferial en la comarca destacan **${eventos[0]}**${eventos.length > 1 ? ` y **${eventos[1]}**` : ''}.`
    : '';

  // Contexto sectorial
  let sectorTexto: string;
  switch (tipo) {
    case 'urbano':
    case 'periurbano':
      sectorTexto = `El sector de ${sector} impulsa una agenda continua de eventos empresariales, jornadas sectoriales y ferias comerciales que mantienen la demanda de moqueta ferial durante prácticamente todo el año.`;
      break;
    case 'turistico_costa':
      sectorTexto = `El turismo y ${sector} generan una demanda estacional concentrada en primavera-verano para eventos outdoor, bodas y festivales, complementada con convenciones y congresos durante el resto del año.`;
      break;
    case 'turistico_montaña':
      sectorTexto = `El turismo de montaña y ${sector} marcan dos temporadas claras: invierno (esquí, eventos de alta gama) y verano (festivales, ferias artesanales, bodas). La primavera y otoño son periodos de menor demanda pero con eventos puntuales relevantes.`;
      break;
    case 'rural':
      sectorTexto = `${sector} define el ritmo de eventos: ferias agrícolas en primavera, fiestas mayores en verano, y ferias comerciales en otoño. La actividad se concentra en periodos cortos pero intensos que requieren planificación previa del material.`;
      break;
  }

  return `${temporada}. ${eventosRef} ${sectorTexto} Recomendamos a organizadores de eventos en ${comarca.nombre} contactarnos con al menos una semana de antelación para garantizar disponibilidad de color y cantidad, especialmente en temporada alta.`;
}
