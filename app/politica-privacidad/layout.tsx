import type { Metadata } from "next";

const BASE_URL = "https://www.moquetaecologica.com";

export const metadata: Metadata = {
  title: "Política de Privacidad | Moqueta Ecológica - Disstands Moquetas S.L.U.",
  description:
    "Política de privacidad de moquetaecologica.com. Información sobre el tratamiento de datos personales, derechos ARCO y protección de datos conforme al RGPD.",
  alternates: {
    canonical: `${BASE_URL}/politica-privacidad`,
  },
};

export default function PoliticaPrivacidadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
