import type { Metadata } from "next";
import { Literata } from "next/font/google";
import "./globals.css";

const literata = Literata({
  subsets: ["latin"],
  variable: "--font-literata",
});

export const metadata: Metadata = {
  title: "Hugo Ramnek – Schriftsteller, Schauspieler, Lehrer",
  description: "Hugo Ramnek, geboren 1960 in Kärnten, lebt als Schriftsteller, Schauspieler und Lehrer in Zürich. Autor von 'Die Schneekugel', 'Der letzte Badegast' und weiteren Werken.",
  keywords: ["Hugo Ramnek", "Schriftsteller", "Autor", "Zürich", "Literatur", "Leseperformance"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <body
        className={`${literata.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
