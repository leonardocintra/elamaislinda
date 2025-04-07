import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ela + Linda",
  description: "Ela Mais Linda - Seu grande amor merece!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`antialiased`}>
        {children}
      </body>
    </html>
  );
}
