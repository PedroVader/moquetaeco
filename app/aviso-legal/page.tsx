import Link from "next/link";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export default function AvisoLegalPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { name: "Inicio", url: "/" },
          { name: "Aviso Legal", url: "/aviso-legal" },
        ]}
      />

      {/* Título */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-dark mb-4">
            Aviso Legal
          </h1>
          <p className="text-slate leading-relaxed">
            En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de
            la Sociedad de la Información y de Comercio Electrónico (LSSI-CE),
            se informa de los siguientes datos del titular de este sitio web:
          </p>
        </div>
      </section>

      {/* Datos identificativos */}
      <section className="py-16 bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-dark mb-6">
            Datos identificativos del titular
          </h2>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <ul className="space-y-3 text-slate">
              <li>
                <strong className="text-dark">Razón social:</strong> Disstands
                Moquetas S.L.U.
              </li>
              <li>
                <strong className="text-dark">NIF:</strong> B-65939134
              </li>
              <li>
                <strong className="text-dark">Domicilio social:</strong> C/ Joan
                d&apos;Àustria 90, Local 4 Bajos, 08018 Barcelona
              </li>
              <li>
                <strong className="text-dark">Email:</strong>{" "}
                <a
                  href="mailto:alex@disstands.com"
                  className="text-primary hover:underline"
                >
                  alex@disstands.com
                </a>
              </li>
              <li>
                <strong className="text-dark">Sitio web:</strong>{" "}
                <span>https://www.moquetaecologica.com</span>
              </li>
              <li>
                <strong className="text-dark">Inscrita en:</strong> Registro
                Mercantil de Barcelona
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Normas de acceso */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-dark mb-6">
            Condiciones de uso y acceso
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-slate leading-relaxed">
              El acceso a este sitio web es gratuito y no requiere suscripción
              ni registro previo. La navegación por{" "}
              <strong>moquetaecologica.com</strong> atribuye la condición de
              usuario e implica la aceptación plena y sin reservas de todas las
              disposiciones incluidas en este Aviso Legal.
            </p>
            <p className="text-slate leading-relaxed">
              El usuario se compromete a utilizar el sitio web de conformidad con
              la ley, el presente aviso legal, las buenas costumbres y el orden
              público. El usuario se obliga a no utilizar el sitio web con fines
              ilícitos, lesivos de derechos e intereses de terceros, o que
              puedan dañar, inutilizar, sobrecargar o deteriorar el sitio web o
              impedir la normal utilización por parte de otros usuarios.
            </p>
          </div>
        </div>
      </section>

      {/* Propiedad intelectual */}
      <section className="py-16 bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-dark mb-6">
            Propiedad intelectual e industrial
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-slate leading-relaxed">
              Todos los contenidos de este sitio web, incluyendo textos,
              fotografías, gráficos, imágenes, iconos, tecnología, software,
              enlaces y demás contenidos audiovisuales o sonoros, así como su
              diseño gráfico y códigos fuente, son propiedad intelectual de{" "}
              <strong>Disstands Moquetas S.L.U.</strong> o de terceros que han
              autorizado su uso, sin que puedan entenderse cedidos al usuario
              ninguno de los derechos de explotación reconocidos por la
              legislación vigente.
            </p>
            <p className="text-slate leading-relaxed">
              La marca <strong>Rewind®</strong> y sus logotipos asociados son
              marcas registradas propiedad de Disstands Moquetas S.L.U. Queda
              prohibida su reproducción, distribución, comunicación pública o
              transformación sin la autorización expresa de su titular.
            </p>
            <p className="text-slate leading-relaxed">
              El usuario se compromete a respetar los derechos de propiedad
              intelectual e industrial del titular. Queda expresamente prohibida
              la reproducción total o parcial de este sitio web, ni siquiera
              mediante un hiperenlace, sin el consentimiento expreso y por
              escrito del titular.
            </p>
          </div>
        </div>
      </section>

      {/* Enlaces a terceros */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-dark mb-6">
            Enlaces a sitios de terceros
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-slate leading-relaxed">
              Este sitio web puede contener enlaces a sitios web de terceros,
              como{" "}
              <a
                href="https://www.disstands.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                disstands.com
              </a>{" "}
              (tienda online de Disstands Moquetas S.L.U.). Estos enlaces se
              proporcionan únicamente a efectos informativos.
            </p>
            <p className="text-slate leading-relaxed">
              Disstands Moquetas S.L.U. no se hace responsable del contenido,
              políticas de privacidad ni prácticas de sitios web de terceros. El
              acceso a dichos sitios web a través de enlaces desde este sitio se
              realiza bajo la exclusiva responsabilidad del usuario.
            </p>
          </div>
        </div>
      </section>

      {/* Limitación de responsabilidad */}
      <section className="py-16 bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-dark mb-6">
            Limitación de responsabilidad
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-slate leading-relaxed">
              Disstands Moquetas S.L.U. no se hace responsable de los daños y
              perjuicios de cualquier naturaleza que pudieran derivarse de la
              falta de disponibilidad o continuidad del funcionamiento del sitio
              web, de la falta de utilidad del sitio web o de sus contenidos, ni
              de los errores en los contenidos o la imposibilidad de acceder a
              determinadas páginas web.
            </p>
            <p className="text-slate leading-relaxed">
              La información contenida en este sitio web tiene carácter
              meramente informativo. Disstands Moquetas S.L.U. no garantiza que
              los contenidos estén actualizados en todo momento y se reserva el
              derecho a modificarlos sin previo aviso.
            </p>
          </div>
        </div>
      </section>

      {/* Legislación aplicable */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-dark mb-6">
            Legislación aplicable y jurisdicción
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-slate leading-relaxed">
              Las presentes condiciones se rigen por la legislación española. Las
              partes se someten, a su elección, para la resolución de los
              conflictos y con renuncia a cualquier otro fuero, a los juzgados y
              tribunales de <strong>Barcelona</strong>.
            </p>
            <p className="text-slate leading-relaxed mt-6">
              Para cualquier consulta relacionada con este aviso legal, puede
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
              href="/politica-privacidad"
              className="text-primary hover:underline"
            >
              Política de Privacidad
            </Link>
            <Link
              href="/politica-cookies"
              className="text-primary hover:underline"
            >
              Política de Cookies
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
