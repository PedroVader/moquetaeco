import type { Metadata } from "next";

const BASE_URL = "https://www.moquetaecologica.com";

export const metadata: Metadata = {
  title: "Política de Cookies | Moqueta Ecológica - Disstands Moquetas S.L.U.",
  description:
    "Política de cookies de moquetaecologica.com. Este sitio web solo utiliza cookies técnicas necesarias para el funcionamiento. Sin cookies de terceros ni analíticas.",
  alternates: {
    canonical: `${BASE_URL}/politica-cookies`,
  },
};

export default function PoliticaCookiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
