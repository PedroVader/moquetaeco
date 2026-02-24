import type { Metadata } from "next";

const BASE_URL = "https://www.moquetaecologica.com";

export const metadata: Metadata = {
  title: "Contacto | Moqueta Ecológica - Presupuesto Sin Compromiso",
  description:
    "Contacta con Disstands para presupuesto de moqueta ecológica Rewind. Teléfono 934 850 085, email ventas@disstands.com. Respuesta en 24h.",
  alternates: {
    canonical: `${BASE_URL}/contacto`,
  },
};

export default function ContactoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
