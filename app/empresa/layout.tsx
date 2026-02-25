import type { Metadata } from "next";

const BASE_URL = "https://www.moquetaecologica.com";

export const metadata: Metadata = {
  title: "Sobre Nosotros | Disstands Moquetas - Más de 25 Años de Experiencia",
  description:
    "Conoce Disstands Moquetas S.L.U., fabricantes de la moqueta ecológica Rewind®. Más de 25 años de experiencia en el sector ferial. Almacén en Barcelona, servicio en toda Cataluña. ☎ 934 850 085",
  openGraph: {
    title: "Sobre Nosotros | Disstands Moquetas",
    description:
      "Fabricantes de moqueta ecológica Rewind®. +25 años en el sector ferial. Barcelona.",
    url: `${BASE_URL}/empresa`,
    type: "website",
    locale: "es_ES",
    images: [
      {
        url: `${BASE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Disstands Moquetas - Sobre Nosotros",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sobre Nosotros | Disstands Moquetas",
    description:
      "Fabricantes de moqueta ecológica Rewind®. +25 años en el sector ferial.",
    images: [`${BASE_URL}/og-image.jpg`],
  },
  alternates: {
    canonical: `${BASE_URL}/empresa`,
  },
};

export default function EmpresaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
