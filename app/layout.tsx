import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Neemias Braga Kelly dos Santos | Desenvolvedor PHP FullStack",
  description:
    "Desenvolvedor PHP / FullStack com mais de 5 anos de experiência em sistemas web. Especialista em Laravel, MySQL, ReactJS e arquitetura de sistemas voltados para órgãos públicos e empresas privadas.",
  keywords: ["PHP", "Laravel", "FullStack", "Desenvolvedor", "MySQL", "ReactJS", "Next.js", "TRF2", "Exército Brasileiro"],
  authors: [{ name: "Neemias Braga Kelly dos Santos", url: "https://neemiasbragadev.vercel.app/" }],
  openGraph: {
    title: "Neemias Braga Kelly dos Santos | Desenvolvedor PHP FullStack",
    description:
      "Desenvolvedor PHP / FullStack com mais de 5 anos de experiência em sistemas web voltados para órgãos públicos e empresas privadas.",
    type: "website",
    locale: "pt_BR",
    url: "https://neemiasbragadev.vercel.app/",
    siteName: "Portfólio — Neemias Braga",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neemias Braga | Dev PHP FullStack",
    description:
      "Portfólio de Neemias Braga Kelly dos Santos – Desenvolvedor PHP/FullStack especialista em Laravel.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
