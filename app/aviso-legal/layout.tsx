import type { Metadata } from "next";

const BASE_URL = "https://www.moquetaecologica.com";

export const metadata: Metadata = {
  title: "Aviso Legal | Moqueta Ecológica - Disstands Moquetas S.L.U.",
  description:
    "Aviso legal de moquetaecologica.com. Datos identificativos de Disstands Moquetas S.L.U., condiciones de uso, propiedad intelectual y legislación aplicable.",
  alternates: {
    canonical: `${BASE_URL}/aviso-legal`,
  },
};

export default function AvisoLegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
