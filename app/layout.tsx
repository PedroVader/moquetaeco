import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header, Footer, CTAFloat } from "@/components/layout";
import { PresupuestoProvider } from "@/context/PresupuestoContext";
import { empresa } from "@/lib/data";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Moqueta Ecológica Cataluña | Disstands - Desde 2,10€/m²",
    template: "%s | Disstands",
  },
  description:
    "Moqueta ecológica 100% reciclable para ferias y eventos en Cataluña. Sin látex, certificada Bfl-s1. Rewind® marca propia Disstands. +25 años de experiencia. ☎ 934 850 085",
  keywords: [
    "moqueta ecológica",
    "moqueta reciclable",
    "moqueta ferial",
    "moqueta eventos Barcelona",
    "moqueta sin látex",
    "Rewind moqueta",
    "moqueta sostenible",
  ],
  authors: [{ name: "Disstands Moquetas S.L." }],
  creator: "Disstands Moquetas S.L.",
  metadataBase: new URL("https://www.moquetaecologica.com"),
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "Disstands Moquetas",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://www.google.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link
          rel="preload"
          href="/hero-img/hero-img-2.webp"
          as="image"
          type="image/webp"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://www.moquetaecologica.com/#organization",
              name: empresa.nombre,
              alternateName: "Disstands",
              url: "https://www.moquetaecologica.com",
              logo: "https://www.moquetaecologica.com/logo-moqueta.png",
              description:
                "Fabricante de moqueta ecológica Rewind® para ferias y eventos. 100% reciclable, sin látex, certificada Bfl-s1.",
              telephone: empresa.telefonoInternacional,
              email: empresa.emailVentas,
              address: {
                "@type": "PostalAddress",
                streetAddress: "C/ Joan d'Austria 90-96, Local 4 Bajos",
                addressLocality: "Barcelona",
                postalCode: "08018",
                addressRegion: "Cataluña",
                addressCountry: "ES",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: empresa.coordenadas.lat,
                longitude: empresa.coordenadas.lng,
              },
              sameAs: [
                empresa.redesSociales.instagram,
                empresa.redesSociales.linkedin,
                empresa.web,
              ],
              brand: {
                "@type": "Brand",
                name: "Rewind",
                description:
                  "Marca propia de moqueta ecológica 100% reciclable",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://www.moquetaecologica.com/#website",
              url: "https://www.moquetaecologica.com",
              name: "Moqueta Ecológica - Disstands",
              description:
                "Moqueta ecológica 100% reciclable para ferias y eventos en Cataluña",
              publisher: {
                "@id": "https://www.moquetaecologica.com/#organization",
              },
              inLanguage: "es",
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <PresupuestoProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <CTAFloat />
        </PresupuestoProvider>
      </body>
    </html>
  );
}
