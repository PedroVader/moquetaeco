import Link from "next/link";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export default function PoliticaPrivacidadPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { name: "Inicio", url: "/" },
          { name: "Política de Privacidad", url: "/politica-privacidad" },
        ]}
      />

      {/* Título */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-dark mb-4">
            Política de Privacidad
          </h1>
          <p className="text-slate leading-relaxed">
            En cumplimiento del Reglamento (UE) 2016/679 General de Protección
            de Datos (RGPD) y de la Ley Orgánica 3/2018 de Protección de Datos
            Personales y garantía de los derechos digitales (LOPDGDD), le
            informamos sobre el tratamiento de sus datos personales.
          </p>
        </div>
      </section>

      {/* Responsable */}
      <section className="py-16 bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-dark mb-6">
            Responsable del tratamiento
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
                <strong className="text-dark">Domicilio:</strong> C/ Joan
                d&apos;Àustria 90, Local 4 Bajos, 08018 Barcelona
              </li>
              <li>
                <strong className="text-dark">
                  Email de contacto para protección de datos:
                </strong>{" "}
                <a
                  href="mailto:alex@disstands.com"
                  className="text-primary hover:underline"
                >
                  alex@disstands.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Datos recogidos */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-dark mb-6">
            Datos personales que recogemos
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-slate leading-relaxed">
              A través del formulario de contacto de este sitio web, podemos
              recoger los siguientes datos personales:
            </p>
            <ul className="text-slate leading-relaxed list-disc pl-6 space-y-2 mt-4">
              <li>Nombre y apellidos</li>
              <li>Dirección de correo electrónico</li>
              <li>Número de teléfono</li>
              <li>Mensaje o consulta</li>
            </ul>
            <p className="text-slate leading-relaxed mt-4">
              No recogemos datos de navegación mediante cookies analíticas ni de
              terceros. Este sitio web solo utiliza cookies técnicas estrictamente
              necesarias para su funcionamiento.
            </p>
          </div>
        </div>
      </section>

      {/* Finalidad */}
      <section className="py-16 bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-dark mb-6">
            Finalidad del tratamiento
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-slate leading-relaxed">
              Los datos personales proporcionados a través del formulario de
              contacto se tratarán con las siguientes finalidades:
            </p>
            <ul className="text-slate leading-relaxed list-disc pl-6 space-y-2 mt-4">
              <li>
                Atender y gestionar su consulta o solicitud de presupuesto
              </li>
              <li>
                Contactar con usted para proporcionarle la información solicitada
                sobre nuestros productos y servicios de moqueta ecológica
              </li>
              <li>
                Mantener la comunicación comercial derivada de su solicitud
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Legitimación */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-dark mb-6">Legitimación</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-slate leading-relaxed">
              La base legal para el tratamiento de sus datos es el{" "}
              <strong>consentimiento del interesado</strong> (art. 6.1.a del
              RGPD), otorgado al enviar voluntariamente el formulario de
              contacto, así como el <strong>interés legítimo</strong> (art.
              6.1.f del RGPD) para la gestión de consultas comerciales.
            </p>
            <p className="text-slate leading-relaxed">
              El usuario puede retirar su consentimiento en cualquier momento,
              sin que ello afecte a la licitud del tratamiento basado en el
              consentimiento previo a su retirada.
            </p>
          </div>
        </div>
      </section>

      {/* Destinatarios */}
      <section className="py-16 bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-dark mb-6">Destinatarios</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-slate leading-relaxed">
              Los datos facilitados a través del formulario de contacto son
              procesados por <strong>Netlify, Inc.</strong> (San Francisco, EE.
              UU.), que actúa como encargado del tratamiento para la gestión de
              formularios del sitio web. Netlify cumple con las garantías
              adecuadas de transferencia internacional de datos conforme al RGPD.
            </p>
            <p className="text-slate leading-relaxed">
              No se cederán datos personales a otros terceros, salvo obligación
              legal.
            </p>
          </div>
        </div>
      </section>

      {/* Derechos ARCO */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-dark mb-6">
            Derechos del interesado
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-slate leading-relaxed">
              Usted tiene derecho a ejercer los siguientes derechos respecto a
              sus datos personales:
            </p>
            <ul className="text-slate leading-relaxed list-disc pl-6 space-y-2 mt-4">
              <li>
                <strong>Acceso:</strong> conocer qué datos personales tratamos
                sobre usted
              </li>
              <li>
                <strong>Rectificación:</strong> solicitar la modificación de
                datos inexactos o incompletos
              </li>
              <li>
                <strong>Supresión:</strong> solicitar la eliminación de sus datos
                cuando ya no sean necesarios
              </li>
              <li>
                <strong>Oposición:</strong> oponerse al tratamiento de sus datos
                en determinadas circunstancias
              </li>
              <li>
                <strong>Limitación del tratamiento:</strong> solicitar la
                limitación del tratamiento en determinados supuestos
              </li>
              <li>
                <strong>Portabilidad:</strong> recibir sus datos en un formato
                estructurado y de uso común
              </li>
            </ul>
            <p className="text-slate leading-relaxed mt-4">
              Para ejercer cualquiera de estos derechos, puede enviar un correo
              electrónico a{" "}
              <a
                href="mailto:alex@disstands.com"
                className="text-primary hover:underline"
              >
                alex@disstands.com
              </a>{" "}
              indicando el derecho que desea ejercer y acompañando copia de su
              DNI o documento identificativo equivalente.
            </p>
            <p className="text-slate leading-relaxed">
              Asimismo, le informamos de su derecho a presentar una reclamación
              ante la{" "}
              <strong>Agencia Española de Protección de Datos (AEPD)</strong> si
              considera que el tratamiento de sus datos no se ajusta a la
              normativa vigente:{" "}
              <span>www.aepd.es</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Plazo de conservación */}
      <section className="py-16 bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-dark mb-6">
            Plazo de conservación
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-slate leading-relaxed">
              Los datos personales proporcionados se conservarán mientras exista
              un interés mutuo para mantener la finalidad del tratamiento. Cuando
              ya no sean necesarios, se suprimirán con las medidas de seguridad
              adecuadas para garantizar la anonimización o destrucción total de
              los mismos.
            </p>
            <p className="text-slate leading-relaxed">
              En todo caso, los datos se conservarán durante los plazos
              legalmente previstos y por el tiempo necesario para atender
              posibles responsabilidades derivadas del tratamiento.
            </p>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-dark mb-6">
            Contacto
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-slate leading-relaxed">
              Para cualquier consulta relacionada con la protección de sus datos
              personales, puede contactar con nosotros en{" "}
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
              href="/politica-cookies"
              className="text-primary hover:underline"
            >
              Política de Cookies
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
