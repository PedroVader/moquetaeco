import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header, Footer, CTAFloat } from "@/components/layout";
import { PresupuestoProvider } from "@/context/PresupuestoContext";
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
  metadataBase: new URL("https://www.disstands.com"),
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
