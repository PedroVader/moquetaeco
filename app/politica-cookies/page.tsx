import Link from "next/link";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export default function PoliticaCookiesPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { name: "Inicio", url: "/" },
          { name: "Política de Cookies", url: "/politica-cookies" },
        ]}
      />

      {/* Título */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-dark mb-4">
            Política de Cookies
          </h1>
          <p className="text-slate leading-relaxed">
            En cumplimiento de la Ley 34/2002 de Servicios de la Sociedad de la
            Información y de Comercio Electrónico (LSSI-CE) y del Reglamento
            (UE) 2016/679 (RGPD), le informamos sobre el uso de cookies en este
            sitio web.
          </p>
        </div>
      </section>

      {/* Qué son las cookies */}
      <section className="py-16 bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-dark mb-6">
            ¿Qué son las cookies?
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-slate leading-relaxed">
              Las cookies son pequeños archivos de texto que se almacenan en su
              dispositivo (ordenador, tablet o móvil) cuando visita un sitio web.
              Permiten que el sitio web recuerde sus acciones y preferencias
              durante un período de tiempo, de modo que no tenga que volver a
              introducirlos cada vez que visite el sitio o navegue de una página
              a otra.
            </p>
          </div>
        </div>
      </section>

      {/* Cookies que usamos */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-dark mb-6">
            Cookies que utiliza este sitio web
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-slate leading-relaxed">
              Este sitio web <strong>solo utiliza cookies técnicas</strong>{" "}
              estrictamente necesarias para el correcto funcionamiento de la
              página. No utilizamos cookies analíticas, publicitarias ni de
              terceros.
            </p>
            <p className="text-slate leading-relaxed">
              Al no utilizar cookies que requieran consentimiento (analíticas,
              publicitarias o de seguimiento), <strong>no es necesario</strong>{" "}
              mostrar un banner de cookies en este sitio web.
            </p>
          </div>

          {/* Tabla de cookies */}
          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-dark text-white">
                  <th className="text-left p-3 rounded-tl-lg">Cookie</th>
                  <th className="text-left p-3">Tipo</th>
                  <th className="text-left p-3">Duración</th>
                  <th className="text-left p-3 rounded-tr-lg">Finalidad</th>
                </tr>
              </thead>
              <tbody className="text-slate">
                <tr className="border-b border-gray-200">
                  <td className="p-3 font-mono text-xs">__next</td>
                  <td className="p-3">Técnica</td>
                  <td className="p-3">Sesión</td>
                  <td className="p-3">
                    Cookie de sesión del framework Next.js, necesaria para el
                    funcionamiento del sitio web
                  </td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="p-3 font-mono text-xs">__prerender_bypass</td>
                  <td className="p-3">Técnica</td>
                  <td className="p-3">Sesión</td>
                  <td className="p-3">
                    Cookie técnica de Next.js para la generación de páginas
                    estáticas
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-3 font-mono text-xs">__next_preview_data</td>
                  <td className="p-3">Técnica</td>
                  <td className="p-3">Sesión</td>
                  <td className="p-3">
                    Cookie técnica de Next.js para el modo de previsualización
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Sin cookies de terceros */}
      <section className="py-16 bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-dark mb-6">
            Cookies de terceros
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-slate leading-relaxed">
              Este sitio web <strong>no utiliza cookies de terceros</strong>. No
              instalamos Google Analytics, Meta Pixel, ni ningún otro servicio de
              seguimiento o analítica web. Su navegación por moquetaecologica.com
              no es rastreada con fines publicitarios.
            </p>
          </div>
        </div>
      </section>

      {/* Cómo desactivar cookies */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-dark mb-6">
            Cómo desactivar las cookies en su navegador
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-slate leading-relaxed">
              Aunque este sitio web solo utiliza cookies técnicas necesarias,
              usted puede configurar su navegador para bloquear o eliminar las
              cookies. Tenga en cuenta que la desactivación de cookies técnicas
              puede afectar al correcto funcionamiento del sitio web.
            </p>
            <p className="text-slate leading-relaxed">
              A continuación le indicamos cómo gestionar las cookies en los
              navegadores más comunes:
            </p>
            <ul className="text-slate leading-relaxed list-disc pl-6 space-y-2 mt-4">
              <li>
                <strong>Google Chrome:</strong> Configuración &gt; Privacidad y
                seguridad &gt; Cookies y otros datos de sitios
              </li>
              <li>
                <strong>Mozilla Firefox:</strong> Opciones &gt; Privacidad y
                seguridad &gt; Cookies y datos del sitio
              </li>
              <li>
                <strong>Safari:</strong> Preferencias &gt; Privacidad &gt;
                Gestionar datos de sitios web
              </li>
              <li>
                <strong>Microsoft Edge:</strong> Configuración &gt; Cookies y
                permisos del sitio &gt; Cookies y datos almacenados
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section className="py-16 bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-dark mb-6">
            Contacto
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-slate leading-relaxed">
              Si tiene alguna duda sobre nuestra política de cookies, puede
              contactar con nosotros en{" "}
              <a
                href="mailto:alex@disstands.com"
                className="text-primary hover:underline"
              >
                alex@disstands.com
              </a>
              .
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4 text-sm">
            <Link
              href="/aviso-legal"
              className="text-primary hover:underline"
            >
              Aviso Legal
            </Link>
            <Link
              href="/politica-privacidad"
              className="text-primary hover:underline"
            >
              Política de Privacidad
            </Link>
          </div>

          <p className="text-sm text-gray-400 mt-6">
            Última actualización: marzo 2026
          </p>
        </div>
      </section>
    </>
  );
}
