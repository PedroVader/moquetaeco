import { ChevronDownIcon } from "@heroicons/react/24/outline";
import type { FAQ as FAQType } from "@/lib/data/faqs";

interface FAQProps {
  faqs: FAQType[];
  titulo?: string;
}

export function FAQ({ faqs, titulo = "Preguntas Frecuentes" }: FAQProps) {
  return (
    <section className="py-16 md:py-24 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            {titulo}
          </h2>
          <p className="text-lg text-slate">
            Resolvemos tus dudas sobre moqueta ecológica
          </p>
        </div>



        <div className="grid md:grid-cols-2 gap-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm group h-fit"
              open
            >
              <summary className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition cursor-pointer list-none">
                <span className="font-semibold text-dark pr-4">
                  {faq.pregunta}
                </span>
                <ChevronDownIcon className="w-5 h-5 text-slate flex-shrink-0 transition-transform group-open:rotate-180" />
              </summary>
              <div className="px-6 pb-6">
                <p className="text-slate leading-relaxed">{faq.respuesta}</p>
              </div>
            </details>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-slate mb-4">¿Tienes más preguntas?</p>
          <a
            href="mailto:ventas@disstands.com"
            className="text-primary font-semibold hover:underline"
          >
            Escríbenos a ventas@disstands.com
          </a>
        </div>
      </div>
    </section>
  );
}
