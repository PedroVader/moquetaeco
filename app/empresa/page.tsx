import Link from "next/link";
import Image from "next/image";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  ShieldCheckIcon,
  SparklesIcon,
  TruckIcon,
  UserGroupIcon,
  BuildingOffice2Icon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";
import { empresa } from "@/lib/data";
import {
  generarLocalBusinessSchema,
  generarBreadcrumbSchema,
} from "@/lib/seo/schema";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

const BASE_URL = "https://www.moquetaecologica.com";

export default function EmpresaPage() {
  const localBusinessSchema = generarLocalBusinessSchema();
  const breadcrumbSchema = generarBreadcrumbSchema([
    { name: "Inicio", url: BASE_URL },
    { name: "Sobre Nosotros", url: `${BASE_URL}/empresa` },
  ]);

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: empresa.nombre,
    alternateName: "Disstands",
    url: BASE_URL,
    logo: "https://www.disstands.com/wp-content/uploads/2025/06/logo-disstands.png",
    description:
      "Fabricantes de moqueta ecológica Rewind®. Más de 25 años de experiencia en el sector ferial y de eventos.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "C/ Joan d'Austria 90-96, Local 4 Bajos",
      addressLocality: "Barcelona",
      postalCode: "08018",
      addressCountry: "ES",
    },
    telephone: empresa.telefonoInternacional,
    email: empresa.emailVentas,
    sameAs: [
      empresa.redesSociales.instagram,
      empresa.redesSociales.linkedin,
      empresa.web,
    ],
    foundingDate: "1999",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 10,
      maxValue: 50,
    },
    areaServed: {
      "@type": "Place",
      name: "Cataluña, España",
    },
    brand: {
      "@type": "Brand",
      name: "Rewind®",
      description: "Moqueta ecológica 100% reciclable sin látex",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />

      <Breadcrumb
        items={[
          { name: "Inicio", url: "/" },
          { name: "Sobre Nosotros", url: "/empresa" },
        ]}
      />

      {/* Hero */}
      <section className="relative text-white py-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-img/hero-img-2.webp"
            alt="Disstands - Almacén de moqueta ecológica en Barcelona"
            width={1600}
            height={900}
            className="object-cover w-full h-full"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Sobre Nosotros
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Disstands Moquetas S.L.U. — Más de 25 años fabricando y
            distribuyendo moqueta ferial. Creadores de Rewind®, la primera
            moqueta 100% reciclable sin látex.
          </p>
        </div>
      </section>

      {/* Historia y misión */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-dark mb-6">
            Nuestra historia
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-slate leading-relaxed">
              <strong>Disstands Moquetas S.L.U.</strong> nació en Barcelona con
              una misión clara: ofrecer moqueta ferial de calidad al sector
              profesional de eventos y ferias. Desde nuestro almacén en la C/
              Joan d&apos;Austria, en el distrito de Sant Martí, hemos servido
              durante más de 25 años a montadores de stands, organizadores de
              eventos y empresas de producción en toda Cataluña.
            </p>
            <p className="text-slate leading-relaxed">
              A lo largo de estos años hemos participado en las ferias más
              importantes de España: <strong>Mobile World Congress</strong>,{" "}
              <strong>Alimentaria</strong>, <strong>Smart City Expo</strong>,{" "}
              <strong>Automobile Barcelona</strong> y cientos de eventos
              corporativos, congresos y celebraciones.
            </p>
            <p className="text-slate leading-relaxed">
              En 2023 dimos un paso decisivo al lanzar{" "}
              <strong>Rewind®</strong>, nuestra marca propia de moqueta
              ecológica. Rewind es la primera moqueta ferial del mundo fabricada{" "}
              <strong>100% sin látex</strong>, completamente reciclable y con una
              reducción drástica del impacto ambiental en su fabricación.
            </p>
          </div>
        </div>
      </section>

      {/* Cifras clave */}
      <section className="py-16 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-dark mb-10 text-center">
            Disstands en cifras
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: ClockIcon,
                valor: "+25",
                unidad: "años",
                desc: "de experiencia en el sector ferial",
              },
              {
                icon: GlobeAltIcon,
                valor: "4",
                unidad: "provincias",
                desc: "Barcelona, Girona, Tarragona, Lleida",
              },
              {
                icon: SparklesIcon,
                valor: "30",
                unidad: "colores",
                desc: "en stock permanente",
              },
              {
                icon: ShieldCheckIcon,
                valor: "Bfl-s1",
                unidad: "",
                desc: "certificación ignífuga en todos los productos",
              },
            ].map((item) => (
              <div
                key={item.desc}
                className="bg-white rounded-xl p-6 text-center shadow-sm"
              >
                <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-extrabold text-primary">
                  {item.valor}
                  {item.unidad && (
                    <span className="text-lg font-bold text-slate ml-1">
                      {item.unidad}
                    </span>
                  )}
                </div>
                <p className="text-sm text-slate mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marca Rewind */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-dark mb-6">
            Rewind® — Nuestra marca propia
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-slate leading-relaxed">
              Rewind® es marca registrada propiedad de Disstands Moquetas
              S.L.U. No somos intermediarios: fabricamos y distribuimos
              directamente, lo que nos permite ofrecer los{" "}
              <strong>mejores precios del mercado</strong> sin renunciar a la
              calidad.
            </p>
          </div>

          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
              <h3 className="text-xl font-bold text-dark mb-3">
                <Link
                  href="/productos/rewind-flat"
                  className="hover:text-primary transition"
                >
                  Rewind Flat
                </Link>
              </h3>
              <p className="text-slate text-sm mb-3">
                Moqueta ferial ecológica. 2 mm de espesor, 230 g/m². La
                solución más económica y versátil para ferias y eventos con
                presupuesto ajustado.
              </p>
              <p className="text-primary font-bold">Desde 2,10€/m²</p>
            </div>
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
              <h3 className="text-xl font-bold text-dark mb-3">
                <Link
                  href="/productos/rewind-dilour"
                  className="hover:text-primary transition"
                >
                  Rewind Dilour
                </Link>
              </h3>
              <p className="text-slate text-sm mb-3">
                Moqueta premium ecológica. 4 mm de espesor, 650 g/m². Acabado
                aterciopelado para stands VIP, showrooms y congresos de alto
                standing.
              </p>
              <p className="text-primary font-bold">Desde 4,05€/m²</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certificaciones y valores */}
      <section className="py-16 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-dark mb-10 text-center">
            Certificaciones y compromiso
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: ShieldCheckIcon,
                titulo: "Bfl-s1 — Ignífuga",
                desc: "Toda nuestra moqueta cumple la certificación de reacción al fuego exigida en recintos feriales y espacios públicos de España y Europa.",
              },
              {
                icon: SparklesIcon,
                titulo: "100% Reciclable",
                desc: "Monomaterial de polipropileno sin látex. Se recicla completamente al final de su vida útil, cerrando el ciclo de economía circular.",
              },
              {
                icon: GlobeAltIcon,
                titulo: "Fabricación sostenible",
                desc: "0 litros de agua, -80% energía, -83% gas y -35% CO₂ respecto a la fabricación convencional con látex.",
              },
              {
                icon: UserGroupIcon,
                titulo: "Servicio profesional",
                desc: "Equipo propio de instaladores con más de 25 años de experiencia. Montaje, desmontaje y recogida post-evento.",
              },
              {
                icon: TruckIcon,
                titulo: "Stock permanente",
                desc: "30 colores siempre disponibles en nuestro almacén de Barcelona. Entrega en 24-48h en toda Cataluña.",
              },
              {
                icon: BuildingOffice2Icon,
                titulo: "Cobertura total",
                desc: "Servicio en Barcelona, Girona, Tarragona y Lleida. 42 comarcas y 49 municipios con presencia directa.",
              },
            ].map((item) => (
              <div
                key={item.titulo}
                className="bg-white rounded-xl p-6 shadow-sm"
              >
                <item.icon className="w-8 h-8 text-primary mb-3" />
                <h3 className="text-lg font-bold text-dark mb-2">
                  {item.titulo}
                </h3>
                <p className="text-sm text-slate">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cobertura geográfica */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-dark mb-6">
            Cobertura en toda Cataluña
          </h2>
          <p className="text-slate mb-8">
            Desde nuestro almacén en Barcelona servimos las 4 provincias
            catalanas con entrega directa y servicio de instalación profesional:
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { nombre: "Barcelona", slug: "barcelona" },
              { nombre: "Girona", slug: "girona" },
              { nombre: "Tarragona", slug: "tarragona" },
              { nombre: "Lleida", slug: "lleida" },
            ].map((prov) => (
              <Link
                key={prov.slug}
                href={`/moqueta-ecologica-${prov.slug}`}
                className="bg-primary/5 hover:bg-primary/10 border border-primary/20 rounded-xl p-5 text-center transition"
              >
                <MapPinIcon className="w-6 h-6 text-primary mx-auto mb-2" />
                <span className="font-bold text-dark">{prov.nombre}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA contacto */}
      <section className="py-16 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-dark mb-4">
            ¿Hablamos de tu proyecto?
          </h2>
          <p className="text-slate mb-8 max-w-2xl mx-auto">
            Presupuesto sin compromiso en menos de 24h. Más de 25 años de
            experiencia avalan nuestro trabajo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${empresa.telefonoInternacional}`}
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-light text-white font-bold py-3 px-8 rounded-xl transition"
            >
              <PhoneIcon className="w-5 h-5" />
              {empresa.telefono}
            </a>
            <a
              href={`mailto:${empresa.emailVentas}`}
              className="inline-flex items-center justify-center gap-2 bg-white border-2 border-primary text-primary font-bold py-3 px-8 rounded-xl hover:bg-primary/5 transition"
            >
              <EnvelopeIcon className="w-5 h-5" />
              {empresa.emailVentas}
            </a>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold py-3 px-8 rounded-xl transition"
            >
              Formulario de contacto
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
