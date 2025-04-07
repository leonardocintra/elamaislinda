import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { Euphoria_Script } from "next/font/google";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Ela + Linda",
  description: "Ela Mais Linda - Seu grande amor merece!",
};

const euphoriaScript = Euphoria_Script({
  subsets: ["latin"],
  variable: "--font-euphoria-script",
  weight: ["400"],
  style: ["normal"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`antialiased`}>
        <div className="bg-gradient-to-b from-pink-50 to-blue-50 min-h-screen flex flex-col">
          {/* Header (invisível no mobile) */}
          <header className="hidden md:flex bg-white shadow-md py-4 px-6 justify-between items-center">
            <Link href={"/"}>
              <h1
                className={`text-6xl font-bold text-pink-600 ${euphoriaScript.className}`}
              >
                Ela Mais Linda
              </h1>
            </Link>
            <nav className="space-x-6 text-pink-500 font-medium">
              <Link href="/" className="hover:text-pink-700">
                Home
              </Link>
              <Link href="/about" className="hover:text-pink-700">
                Quem Somos
              </Link>
              <Link href="/contact" className="hover:text-pink-700">
                Contato
              </Link>
            </nav>
          </header>

          {/* Banner */}
          <section
            id="home"
            className="w-full h-48 md:h-64 bg-pink-200 flex items-center justify-center text-center px-4"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-pink-700">
              Laços para sua bebê ficar ainda mais linda!
            </h2>
          </section>

          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
